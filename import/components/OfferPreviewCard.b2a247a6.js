import { Fragment, jsx, jsxs } from "../../npm/react@19.0.0/jsx-runtime.a4fc5384.js";
import * as React from "../../npm/react@19.0.0/03d80e9e.js";
const PREVIEW_CARD_STYLE = {
  backgroundColor: "transparent",
  border: "1px dashed rgba(255,255,255,.3)",
  margin: 0
};
export function OfferPreviewCard({ name, regionsGross = [] }) {
  const totalGross = Object.values(regionsGross).reduce((acc, value) => acc + value, 0);
  return /* @__PURE__ */ jsxs("div", { className: "card", style: PREVIEW_CARD_STYLE, children: [
    !!name && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("strong", { children: name }) }),
      /* @__PURE__ */ jsx("br", {})
    ] }),
    Object.entries(regionsGross).map(([regionId, gross]) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("strong", { children: [
        "region ",
        regionId,
        ":"
      ] }),
      "\xA0",
      gross,
      " CHF"
    ] })),
    !!totalGross && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs("div", { children: [
        "total: ",
        totalGross,
        " CHF"
      ] })
    ] })
  ] });
}
