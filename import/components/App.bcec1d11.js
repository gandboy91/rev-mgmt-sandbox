import { jsx, jsxs } from "../../npm/react@19.0.0/jsx-runtime.a4fc5384.js";
import * as React from "../../npm/react@19.0.0/03d80e9e.js";
import { RegionForm } from "./RegionForm.bc0a92f5.js";
import { RegionCard } from "./RegionCard.89a732ce.js";
import { OfferForm } from "./OfferForm.3d72b5a4.js";
import { OfferCard } from "./OfferCard.a8833979.js";
import { InvoiceForm } from "./InvoiceForm.fa41a510.js";
import { InvoiceCard } from "./InvoiceCard.1a28b25e.js";
import { Playground } from "./Playground.8f5f68b0.js";
const WRAPPER_STYLE = { maxWidth: 800, padding: 12, borderRadius: 4, backgroundColor: "#222" };
export function App() {
  const [maxIds, setMaxIds] = React.useState({ region: 0, offer: 0, invoice: 0 });
  const [regions, setRegions] = React.useState({});
  const [offers, setOffers] = React.useState({});
  const [invoices, setInvoices] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const setupBlockRef = React.useRef(null);
  const checkPass = (event) => {
    const value = event.target?.value ?? null;
    if (!value || btoa(value) !== atob("WWtoT1ZHRlhNUT09"))
      return;
    setLoggedIn(true);
  };
  const getNewId = (field) => {
    if (!{}.hasOwnProperty.call(maxIds, field))
      return null;
    const newId = maxIds[field] + 1;
    setMaxIds((prev) => ({ ...prev, [field]: newId }));
    return newId;
  };
  const onAddRegion = (region) => {
    if (!region.name || !region.goal)
      return;
    const id = getNewId("region");
    setRegions((prev) => ({ ...prev, [id]: { id, ...region } }));
  };
  const onAddOffer = (offer) => {
    if (!offer.name || !offer.regionsGross)
      return;
    const id = getNewId("offer");
    setOffers((prev) => ({ ...prev, [id]: { id, ...offer } }));
  };
  const onAddInvoice = (invoice) => {
    if (!invoice.offerId || !invoice.gross || !invoice.net || !invoice.quarter)
      return;
    const id = getNewId("invoice");
    setInvoices((prev) => ({ ...prev, [id]: { id, ...invoice } }));
  };
  const removeRegion = (regionId) => setRegions((prev) => {
    const next = { ...prev };
    delete next[regionId];
    return next;
  });
  const removeOffer = (offerId) => setOffers((prev) => {
    const next = { ...prev };
    delete next[offerId];
    return next;
  });
  const removeInvoice = (invoiceId) => setInvoices((prev) => {
    const next = { ...prev };
    delete next[invoiceId];
    return next;
  });
  const setInProgress = (inProgress = false) => {
    if (setupBlockRef.current) {
      setupBlockRef.current.style.pointerEvents = inProgress ? "none" : "auto";
    }
  };
  const regionList = Object.values(regions);
  const offerList = Object.values(offers);
  const invoicesList = Object.values(invoices);
  if (!loggedIn) {
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("input", { onChange: checkPass }) });
  }
  return /* @__PURE__ */ jsxs("div", { style: WRAPPER_STYLE, children: [
    /* @__PURE__ */ jsxs("div", { ref: setupBlockRef, children: [
      /* @__PURE__ */ jsx("h2", { className: "yellow", children: "Regions" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(RegionForm, { onAdd: onAddRegion }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3", children: regionList.map(({ id, name, goal }) => /* @__PURE__ */ jsx(RegionCard, { id, name, goal, remove: removeRegion }, id)) }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("h2", { className: "yellow", children: "Offers" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(OfferForm, { onAdd: onAddOffer, availableRegions: regionList }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3", children: offerList.map(
        ({ id, name, regionsGross }) => /* @__PURE__ */ jsx(OfferCard, { remove: removeOffer, id, name, regionsGross }, id)
      ) }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("h2", { className: "yellow", children: "Invoices" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(InvoiceForm, { onAdd: onAddInvoice, offers: offerList }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3", children: invoicesList.map(
        ({ id, offerId, gross, net, quarter }) => /* @__PURE__ */ jsx(InvoiceCard, { remove: removeInvoice, id, offerId, gross, net, quarter }, id)
      ) }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("h2", { className: "yellow", children: "Calculation" }),
      /* @__PURE__ */ jsx("br", {})
    ] }),
    /* @__PURE__ */ jsx(Playground, { regions, offers, invoices, setInProgress })
  ] });
}
