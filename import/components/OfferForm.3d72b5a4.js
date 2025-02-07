import { jsx, jsxs } from "../../_npm/react@19.0.0/jsx-runtime.a4fc5384.js";
import * as React from "../../_npm/react@19.0.0/03d80e9e.js";
import { OfferPreviewCard } from "./OfferPreviewCard.b2a247a6.js";
export function OfferForm({ onAdd, availableRegions = [] }) {
  const [name, setName] = React.useState("");
  const [regionsGross, setRegionsGross] = React.useState({});
  const selectRegionRef = React.useRef(null);
  const regionGrossRef = React.useRef(null);
  const reset = () => {
    setRegionsGross({});
    setName("");
  };
  const onAddClick = () => {
    if (!name || !Object.keys(regionsGross).length)
      return;
    onAdd({ name, regionsGross });
    reset();
  };
  const addRegionGross = () => {
    const regionId = selectRegionRef?.current?.value;
    const regionGross = regionGrossRef?.current?.value;
    if (!regionId || !regionGross)
      return;
    regionGrossRef.current.value = "";
    setRegionsGross((prev) => ({ ...prev, [regionId]: +regionGross }));
  };
  const filteredRegions = availableRegions.filter((region) => !regionsGross[region.id]);
  return /* @__PURE__ */ jsx("div", { style: { maxWidth: "500px" }, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2", children: [
    /* @__PURE__ */ jsx("div", { children: "Name: " }),
    /* @__PURE__ */ jsx("input", { onChange: (event) => setName(event.target.value), value: name }),
    /* @__PURE__ */ jsx("div", { children: "Regions gross CHF: " }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex" }, children: [
      /* @__PURE__ */ jsx("select", { style: { minWidth: "80px" }, ref: selectRegionRef, children: filteredRegions.map(
        ({ id }) => /* @__PURE__ */ jsx("option", { value: id, children: id }, id)
      ) }),
      "\xA0",
      /* @__PURE__ */ jsx("input", { style: { width: "130px" }, type: "number", ref: regionGrossRef }),
      "\xA0",
      /* @__PURE__ */ jsx("button", { onClick: addRegionGross, children: "+" })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { flexGrow: 1 }, children: !!name && /* @__PURE__ */ jsx(OfferPreviewCard, { name, regionsGross }) }),
    /* @__PURE__ */ jsxs("div", { style: { alignItems: "end", gap: 8, display: "flex" }, children: [
      /* @__PURE__ */ jsx("button", { style: { flexGrow: 1 }, onClick: reset, children: "reset" }),
      /* @__PURE__ */ jsx("button", { style: { flexGrow: 1 }, onClick: onAddClick, children: "Add" })
    ] })
  ] }) });
}
