import { jsx, jsxs } from "../../npm/react@19.0.0/jsx-runtime.a4fc5384.js";
import * as React from "../../npm/react@19.0.0/03d80e9e.js";
const REMOVE_BTN_STYLE = { position: "absolute", right: "2px", top: "2px" };
export function InvoiceCard({ id, offerId, gross, net, quarter, remove }) {
  return /* @__PURE__ */ jsxs("div", { className: "card", style: { position: "relative" }, children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("strong", { children: [
      "Invoice ",
      id
    ] }) }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { children: [
      "Offer: ",
      offerId
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      "Gross: ",
      gross,
      " CHF"
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      "Net: ",
      net,
      " CHF"
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      "Quarter: Q",
      quarter
    ] }),
    /* @__PURE__ */ jsx("button", { style: REMOVE_BTN_STYLE, onClick: () => remove(id), children: "x" })
  ] });
}
