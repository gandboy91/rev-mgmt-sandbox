import { jsx } from "../../_npm/react@19.0.0/jsx-runtime.a4fc5384.js";
import * as React from "../../_npm/react@19.0.0/03d80e9e.js";
import * as Plot from "../../_npm/@observablehq/plot@0.6.16/b7d4b5b4.js";
export function SemaphoreChart({ data }) {
  const containerRef = React.useRef();
  React.useEffect(() => {
    if (!data)
      return;
    const plot = Plot.plot({
      style: { fontSize: "12px" },
      marginLeft: 50,
      marginTop: 50,
      fx: { label: "" },
      x: { label: "" },
      y: { grid: true, insetTop: 20 },
      color: { legend: true },
      marks: [
        Plot.ruleY([0]),
        Plot.barY(data, { x: "type", y: "amount", fx: "region", fill: "type" }),
        Plot.text(data, {
          x: "type",
          y: "amount",
          fx: "region",
          dy: -4,
          lineAnchor: "bottom",
          text: ({ amount }) => amount,
          fontSize: 16
        })
      ]
    });
    containerRef.current.append(plot);
    return () => plot.remove();
  }, [data]);
  return /* @__PURE__ */ jsx("div", { ref: containerRef });
}
