import { jsx, jsxs } from "../../npm/react@19.0.0/jsx-runtime.a4fc5384.js";
import * as React from "../../npm/react@19.0.0/03d80e9e.js";
export function RegionForm({ onAdd }) {
  const [name, setName] = React.useState("");
  const [goal, setGoal] = React.useState(null);
  const reset = () => {
    setGoal("");
    setName("");
  };
  const onAddClick = () => {
    if (!name || !goal)
      return;
    if (!Number.isFinite(+goal))
      return;
    onAdd({ name, goal: +goal });
    reset();
  };
  return /* @__PURE__ */ jsx("div", { style: { maxWidth: "500px" }, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2", children: [
    /* @__PURE__ */ jsx("div", { children: "Name: " }),
    /* @__PURE__ */ jsx("input", { onChange: (event) => setName(event.target.value), value: name }),
    /* @__PURE__ */ jsx("div", { children: "Year target (CHF): " }),
    /* @__PURE__ */ jsx("input", { type: "number", onChange: (event) => setGoal(event.target.value), value: goal }),
    /* @__PURE__ */ jsx("div", {}),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ jsx("button", { style: { flexGrow: 1 }, onClick: reset, children: "reset" }),
      /* @__PURE__ */ jsx("button", { style: { flexGrow: 1 }, onClick: onAddClick, children: "Add" })
    ] })
  ] }) });
}
