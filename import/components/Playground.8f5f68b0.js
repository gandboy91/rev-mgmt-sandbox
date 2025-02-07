import { jsx, jsxs } from "../../npm/react@19.0.0/jsx-runtime.a4fc5384.js";
import * as React from "../../npm/react@19.0.0/03d80e9e.js";
import { SemaphoreChart } from "./SemaphoreChart.aa2fcbd2.js";
import { CalculatedInvoice } from "./CalculatedInvoice.827b2017.js";
import { calculateRevenue } from "../utils/revenue.be788508.js";
const BUTTON_BLOCK_STYLE = { display: "flex", gap: "4px", marginBottom: "8px" };
const QUARTER_BUTTON_STYLE = { flexGrow: 1, height: 28 };
const PROCESS_BUTTON_STYLE = { height: 28, minWidth: 100 };
const CURRENT_CARD_STYLE = { width: 500, marginBottom: "8px" };
export function Playground({ regions, offers, invoices, setInProgress }) {
  const [quarter, setQuarter] = React.useState(0);
  const [currentInvoices, setCurrentInvoices] = React.useState([]);
  const [actualDict, setActualDict] = React.useState({});
  const reset = React.useCallback(() => {
    const initial = {};
    Object.values(regions).forEach(({ id = null, name = null }) => {
      if (!id || !name)
        return;
      initial[id] = { region: `${id}: ${name}`, amount: 0, type: "actual" };
    });
    setQuarter(0);
    setCurrentInvoices([]);
    setActualDict(initial);
  }, [regions, setActualDict, setCurrentInvoices, setQuarter]);
  React.useEffect(() => {
    reset();
  }, [regions, setActualDict]);
  const targetDict = React.useMemo(() => {
    const target = {};
    Object.values(regions).forEach(({ id = null, name = null, goal = 0 }) => {
      if (!id || !name)
        return;
      target[id] = { region: `${id}: ${name}`, amount: goal, type: "target" };
    });
    return target;
  }, [regions]);
  const calculation = React.useMemo(() => {
    return calculateRevenue(regions, offers, invoices);
  }, [regions, offers, invoices]);
  const process = () => {
    setInProgress(true);
    const apply = currentInvoices[0] ?? null;
    if (apply) {
      setActualDict((prev) => {
        const next = { ...prev };
        Object.entries(apply.regionsNet).map(([regionId, regionNet]) => {
          const amount = (next[regionId]?.amount ?? 0) + regionNet;
          next[regionId] = { ...next[regionId], amount };
        });
        return next;
      });
    }
    if (currentInvoices.length >= 2) {
      setCurrentInvoices((prev) => {
        const [_, ...next] = prev;
        return next;
      });
      return;
    }
    const nextQuarter = quarter + 1;
    const nextInvoices = calculation[nextQuarter] ?? [];
    setQuarter(nextQuarter > 4 ? 4 : nextQuarter);
    setCurrentInvoices(nextInvoices);
  };
  const dataList = [...Object.values(actualDict), ...Object.values(targetDict)];
  const currentInvoice = currentInvoices[0] ?? null;
  const processButtonName = quarter === 0 ? "Start" : "Next";
  const hasInvoices = !!Object.keys(invoices).length;
  const allowProcess = quarter === 0 || !!currentInvoices.length;
  const isFinished = quarter > 0 && hasInvoices && !currentInvoices.length;
  if (isFinished) {
    setInProgress(false);
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { style: CURRENT_CARD_STYLE, children: [
      /* @__PURE__ */ jsx("div", { style: BUTTON_BLOCK_STYLE, children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxs("button", { style: QUARTER_BUTTON_STYLE, disabled: quarter === i, children: [
        "Q",
        i
      ] })) }),
      /* @__PURE__ */ jsx("div", { children: !!currentInvoice && /* @__PURE__ */ jsx(CalculatedInvoice, { data: currentInvoice }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      !!(hasInvoices && allowProcess) && /* @__PURE__ */ jsx("button", { style: PROCESS_BUTTON_STYLE, onClick: process, children: processButtonName }),
      !!isFinished && /* @__PURE__ */ jsx("button", { style: PROCESS_BUTTON_STYLE, onClick: reset, children: "Reset" })
    ] }),
    /* @__PURE__ */ jsx("div", { children: !!dataList.length && /* @__PURE__ */ jsx(SemaphoreChart, { data: dataList }) })
  ] });
}
