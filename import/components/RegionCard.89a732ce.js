import { jsx, jsxs } from "../../npm/react@19.0.0/jsx-runtime.a4fc5384.js";
import * as React from "../../npm/react@19.0.0/03d80e9e.js";
const REMOVE_BTN_STYLE = { position: "absolute", right: "2px", top: "2px" };
export function RegionCard({ id, name, goal, remove }) {
  return /* @__PURE__ */ jsxs("div", { className: "card", style: { position: "relative" }, children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("strong", { children: [
      id,
      ": ",
      name
    ] }) }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { children: [
      goal,
      " CHF"
    ] }),
    /* @__PURE__ */ jsx("button", { style: REMOVE_BTN_STYLE, onClick: () => remove(id), children: "x" })
  ] });
}
