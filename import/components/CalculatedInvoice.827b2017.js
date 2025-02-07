import { jsx, jsxs } from "../../npm/react@19.0.0/jsx-runtime.a4fc5384.js";
import * as React from "../../npm/react@19.0.0/03d80e9e.js";
const WRAPPER_STYLE = {
  borderRadius: 4,
  border: "1px solid rgba(255,255,255,.3)",
  padding: "8px"
};
export function CalculatedInvoice({ data }) {
  const { id = "", offerId = "", regionsNet = {}, gross = 0, net = 0 } = data;
  return /* @__PURE__ */ jsxs("div", { style: WRAPPER_STYLE, children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("strong", { children: [
      "Invoice ",
      id
    ] }) }),
    /* @__PURE__ */ jsx("table", { children: /* @__PURE__ */ jsxs("tbody", { children: [
      /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { style: { width: 200 }, children: "Offer" }),
        /* @__PURE__ */ jsx("td", { children: offerId })
      ] }),
      /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: "Gross (CHF)" }),
        /* @__PURE__ */ jsx("td", { children: gross })
      ] }),
      /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: "Net (CHF)" }),
        /* @__PURE__ */ jsx("td", { children: net })
      ] }),
      /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", {}),
        /* @__PURE__ */ jsx("td", { children: "\xA0" })
      ] }),
      Object.entries(regionsNet).map(([regionId, net2]) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsxs("td", { children: [
          "Region ",
          regionId,
          " Net"
        ] }),
        /* @__PURE__ */ jsx("td", { children: net2 })
      ] }))
    ] }) })
  ] });
}
