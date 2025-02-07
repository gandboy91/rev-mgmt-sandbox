import { jsx, jsxs } from "../../_npm/react@19.0.0/jsx-runtime.a4fc5384.js";
import * as React from "../../_npm/react@19.0.0/03d80e9e.js";
export function InvoiceForm({ onAdd, offers }) {
  const [gross, setGross] = React.useState(null);
  const [net, setNet] = React.useState(null);
  const offerSelectRef = React.useRef(null);
  const quarterSelectRef = React.useRef(null);
  const reset = () => {
    setGross("");
    setNet("");
  };
  const onAddClick = () => {
    const offerId = offerSelectRef?.current?.value;
    const quarter = quarterSelectRef?.current?.value;
    if (!offerId || !gross || !net || !quarter)
      return;
    if ([offerId, gross, net, quarter].some((val) => !Number.isFinite(+val)))
      return;
    onAdd({ offerId: +offerId, gross: +gross, net: +net, quarter: +quarter });
    reset();
  };
  return /* @__PURE__ */ jsx("div", { style: { maxWidth: "500px" }, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2", children: [
    /* @__PURE__ */ jsx("div", { children: "Offer: " }),
    /* @__PURE__ */ jsx("select", { ref: offerSelectRef, children: offers.map(
      ({ id, name }) => /* @__PURE__ */ jsxs("option", { value: id, children: [
        id,
        ": ",
        name
      ] }, id)
    ) }),
    /* @__PURE__ */ jsx("div", { children: "Gross (CHF): " }),
    /* @__PURE__ */ jsx("input", { type: "number", onChange: (event) => setGross(event.target.value), value: gross }),
    /* @__PURE__ */ jsx("div", { children: "Net (CHF): " }),
    /* @__PURE__ */ jsx("input", { type: "number", onChange: (event) => setNet(event.target.value), value: net }),
    /* @__PURE__ */ jsx("div", { children: "Quarter: " }),
    /* @__PURE__ */ jsxs("select", { ref: quarterSelectRef, children: [
      /* @__PURE__ */ jsx("option", { value: 1, children: "Q1" }, "q1"),
      /* @__PURE__ */ jsx("option", { value: 2, children: "Q2" }, "q2"),
      /* @__PURE__ */ jsx("option", { value: 3, children: "Q3" }, "q3"),
      /* @__PURE__ */ jsx("option", { value: 4, children: "Q4" }, "q4")
    ] }),
    /* @__PURE__ */ jsx("div", {}),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ jsx("button", { style: { flexGrow: 1 }, onClick: reset, children: "reset" }),
      /* @__PURE__ */ jsx("button", { style: { flexGrow: 1 }, onClick: onAddClick, children: "Add" })
    ] })
  ] }) });
}
