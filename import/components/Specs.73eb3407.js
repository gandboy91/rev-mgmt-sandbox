import { jsx, jsxs } from "../../npm/react@19.0.0/jsx-runtime.a4fc5384.js";
import * as React from "../../npm/react@19.0.0/03d80e9e.js";
const COLLAPSE_LINK_STYLE = { textDecoration: "underline", cursor: "pointer" };
const NOTE_STYLE = { position: "relative", maxWidth: "740px" };
const CLOSE_BTN_STYLE = { position: "absolute", right: "4px", top: "4px", cursor: "pointer", color: "rgba(255,255,255,.6)" };
const INFO_TEXT_STYLE = { whiteSpace: "pre", color: "#ccc" };
export function Specs() {
  const [collapsed, setCollapsed] = React.useState(true);
  if (collapsed) {
    return /* @__PURE__ */ jsx("div", { style: { position: "absolute", right: 8, top: 12 }, children: /* @__PURE__ */ jsx("div", { className: "muted", style: COLLAPSE_LINK_STYLE, onClick: () => setCollapsed(false), children: "Specification" }) });
  }
  return /* @__PURE__ */ jsxs("div", { style: NOTE_STYLE, className: "note", children: [
    /* @__PURE__ */ jsx("div", { style: CLOSE_BTN_STYLE, onClick: () => setCollapsed(true), children: "\u2715" }),
    /* @__PURE__ */ jsxs("p", { style: INFO_TEXT_STYLE, children: [
      "We have partners(regions) and we know their yearly target in CHF.",
      /* @__PURE__ */ jsx("br", {}),
      "We know how much money in each quarter we payed to each region.",
      /* @__PURE__ */ jsx("br", {}),
      "Having this data we can calculate need for each region:"
    ] }),
    /* @__PURE__ */ jsx("code", { children: "regionNeed = regionTarget - payedToRegion;" }),
    /* @__PURE__ */ jsxs("p", { style: INFO_TEXT_STYLE, children: [
      "Invoice is always created for 1 offer.",
      /* @__PURE__ */ jsx("br", {}),
      "We often have positions from different regions in same offer.",
      /* @__PURE__ */ jsx("br", {}),
      "It means money from single offer can go to multiple regions",
      /* @__PURE__ */ jsx("br", {}),
      "We know GROSS chf part of the offer for each region.",
      /* @__PURE__ */ jsx("br", {}),
      'We know each invoice GROSS and NET, so invoice "tax": part is:',
      /* @__PURE__ */ jsx("br", {})
    ] }),
    /* @__PURE__ */ jsx("code", { children: "invoiceTax = invoiceGross - invoiceNet;" }),
    /* @__PURE__ */ jsxs("p", { style: INFO_TEXT_STYLE, children: [
      'We can decide how we "spread" invoice tax among regions',
      /* @__PURE__ */ jsx("br", {}),
      "To calculate weight of tax per region, we follow the rule",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("strong", { children: "the bigger the need, the smaller the tax" }),
      /* @__PURE__ */ jsx("br", {}),
      "So weight of region tax is reverse weight of region need",
      /* @__PURE__ */ jsx("br", {}),
      "Example calculation of Invoice for offer with 3 regions:"
    ] }),
    /* @__PURE__ */ jsx("code", { children: "needTotal = region1Need + region2Need + region3Need;" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("code", { children: "reg1ReverseNeed = needTotal / region1Need;" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("code", { children: "reg2ReverseNeed = needTotal / region2Need;" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("code", { children: "reg3ReverseNeed = needTotal / region3Need;" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("code", { children: "reverseNeedTotal = reg1ReverseNeed + reg2ReverseNeed + reg3ReverseNeed;" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("code", { children: "reg1TaxWeight = reg1ReverseNeed / reverseNeedTotal;" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("code", { children: "reg2TaxWeight = reg2ReverseNeed / reverseNeedTotal;" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("code", { children: "reg3TaxWeight = reg3ReverseNeed / reverseNeedTotal;" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("p", { style: INFO_TEXT_STYLE, children: [
      "Now we can apply weights to invoice tax",
      /* @__PURE__ */ jsx("br", {}),
      "We know gross part of offer per region",
      /* @__PURE__ */ jsx("br", {}),
      "And now we can calculate NET part:",
      /* @__PURE__ */ jsx("br", {})
    ] }),
    /* @__PURE__ */ jsx("code", { children: "reg1Net = reg1Gross - (invoiceTax * reg1TaxWeight);" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("code", { children: "reg2Net = reg2Gross - (invoiceTax * reg2TaxWeight);" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("code", { children: "reg3Net = reg3Gross - (invoiceTax * reg3TaxWeight);" }),
    /* @__PURE__ */ jsx("br", {})
  ] });
}
