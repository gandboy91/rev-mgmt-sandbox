import { jsx, jsxs } from "../../npm/react@19.0.0/jsx-runtime.a4fc5384.js";
import * as React from "../../npm/react@19.0.0/03d80e9e.js";
const REMOVE_BTN_STYLE = { position: "absolute", right: "2px", top: "2px" };
const CARD_STYLE = { position: "relative", display: "flex", justifyContent: "space-between", flexDirection: "column" };
export function OfferCard({ id, name, regionsGross = [], remove }) {
  const totalGross = Object.values(regionsGross).reduce((acc, value) => acc + value, 0);
  return /* @__PURE__ */ jsxs("div", { className: "card", style: CARD_STYLE, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("strong", { children: [
        id,
        ": ",
        name
      ] }) }),
      /* @__PURE__ */ jsx("br", {}),
      Object.entries(regionsGross).map(([regionId, gross]) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("strong", { children: [
          "region ",
          regionId,
          ":"
        ] }),
        "\xA0",
        gross,
        " CHF"
      ] }))
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs("div", { children: [
        "total: ",
        totalGross,
        " CHF"
      ] })
    ] }),
    /* @__PURE__ */ jsx("button", { style: REMOVE_BTN_STYLE, onClick: () => remove(id), children: "x" })
  ] });
}
