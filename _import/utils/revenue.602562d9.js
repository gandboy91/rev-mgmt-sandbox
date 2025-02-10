import { floatRound } from "./numbers.e24884ff.js";

/**
 * Calculates region discount weights for given region Ids, based on all regions needs
 * @note
 * - tax weight is reverse of region need, so: the bigger the need the lower tax weight (means bigger net amount)
 * - if there are regions with 0 need, they took all the taxes
 */
export function calculateRegionTaxWeights(initialRegionNeeds, regionIds) {
  if (!regionIds.length) return {};

  const regionNeeds = { ...initialRegionNeeds };
  const weights = {};
  const regionsWithNoNeed = {};

  const needTotal = regionIds.reduce((acc, id) => acc + (regionNeeds[id] ?? 0), 0);

  regionIds.forEach(id => {
    if (!regionNeeds[id] || regionNeeds[id] === 0) {
      regionsWithNoNeed[id] = true;
    }
  });

  // if some regions have no need, split taxes among them equally
  if (!!Object.keys(regionsWithNoNeed).length) {
    const avgWeight = 1 / Object.keys(regionsWithNoNeed).length;
    regionIds.forEach(id => {
      weights[id] = regionsWithNoNeed[id] ? avgWeight : 0;
    })

    return weights;
  }

  // when all regions have some need, calculate tax weight as reverse of need
  const reverseNeedTotal = regionIds.reduce((acc, id) => acc + (needTotal / regionNeeds[id]), 0)
  regionIds.forEach(id => {
    const reverseNeed = needTotal / regionNeeds[id];
    weights[id] = reverseNeed / reverseNeedTotal;
  })

  return weights;
}

/**
 * Calculates regions net values by given region tax weights, regions gross and invoice data
 * @note it can happen that weighted tax is bigger than gross for some regions
 * In that case tax leftover is spread among rest regions considering weights
 */
export function calculateRegionsNet({ regionTaxWeights, regionsGross, invoiceTax, invoiceFraction }) {
  const regionsNet = {};
  const regionsWithNet = [];
  let taxLeftover = 0;

  Object.entries(regionsGross)
    .map(([regionId, regionGross]) => {
      const weight = regionTaxWeights[regionId] ?? 0;
      const invoiceRegionTax = weight * invoiceTax;
      const invoiceRegionGross = invoiceFraction * regionGross;
      const net = invoiceRegionGross - invoiceRegionTax;
      if (net < 0) {
        taxLeftover += (invoiceRegionTax - invoiceRegionGross);
        regionsNet[regionId] = 0;
        return;
      }
      regionsNet[regionId] = floatRound(net, 2);
      regionsWithNet.push(regionId);
    })

  if (taxLeftover === 0) {
    return regionsNet;
  }

  // spread discount leftover
  const restWeightTotal = regionsWithNet.reduce((acc, regionId) => acc + (regionTaxWeights[regionId] ?? 0), 0);

  regionsWithNet.forEach(regionId => {
    const weight = regionTaxWeights[regionId] ?? 0;
    // if all rest weights are 0, we have to spread it equally, because tax should be deducted
    const leftoverWeight = restWeightTotal > 0
      ? weight / restWeightTotal
      : 1 / Object.keys(regionsWithNet).length;

    regionsNet[regionId] = floatRound(regionsNet[regionId] - leftoverWeight * taxLeftover, 2);
  })

  return regionsNet;
}

/**
 * Calculates invoice by given invoice offers and offersGross data
 */
export function calculateInvoice(invoice, offers, offersGross, regionNeeds) {
  const { id, offerId, net, gross } = invoice;
  const offer = offers[offerId] ?? null;
  const offerGross = offersGross[offerId] ?? null;
  const offerRegionsGross = offer.regionsGross ?? null;

  if (!offer || !offerGross || !offerRegionsGross) return null;

  const calculated = { id, offerId, regionsNet: {}, net, gross };
  const invoiceFraction = gross / offerGross;
  const invoiceTax = gross - net;
  const regionIds = Object.keys(offerRegionsGross);

  const regionTaxWeights = calculateRegionTaxWeights(regionNeeds, regionIds);
  calculated.regionsNet = calculateRegionsNet({
    regionTaxWeights,
    invoiceTax,
    invoiceFraction,
    regionsGross: offerRegionsGross,
  });

  return calculated;
}

/**
 * Calculates revenue for a whole year, result is per quarter per inventory
 */
export function calculateRevenue(regions, offers, invoices) {
  const offersGross = {};
  const regionNeeds = {};
  const invoicesByQuarter = {};
  const calculatedInvoicesByQuarter = { 1: [], 2: [], 3: [], 4: [] };

  Object.values(invoices).forEach(invoice => {
    if (!invoice.quarter) return;
    invoicesByQuarter[invoice.quarter] = invoicesByQuarter[invoice.quarter] ?? [];
    invoicesByQuarter[invoice.quarter].push(invoice);
  })

  // calculate each offer gross
  Object.values(offers)
    .forEach(({ id, regionsGross }) => {
      offersGross[id] = Object.values(regionsGross).reduce((acc, item) => acc + item, 0);
    })

  // in q1 region need it is equal to goal
  Object.values(regions)
    .forEach(({ id, goal }) => {
      regionNeeds[id] = goal;
    });

  [1, 2, 3, 4].forEach(
    (quarter) => {
      if (!invoicesByQuarter[quarter]) return;
      invoicesByQuarter[quarter].forEach(
        (invoice) => {
          const calculatedInvoice = calculateInvoice(invoice, offers, offersGross, regionNeeds);
          if (!calculatedInvoice) return;

          calculatedInvoicesByQuarter[quarter].push(calculatedInvoice);

          // adjust regions needs
          Object.entries(calculatedInvoice.regionsNet)
            .forEach(([regionId, regionNet]) => {
              if (!regionNeeds[regionId]) return;
              const newNeed = regionNeeds[regionId] - regionNet;
              regionNeeds[regionId] = newNeed < 0 ? 0 : newNeed;
            })
        })
    }
  )

  return calculatedInvoicesByQuarter;
}