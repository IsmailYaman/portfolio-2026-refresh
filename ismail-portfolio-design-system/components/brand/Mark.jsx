import React from "react";

export function Mark({ size = 14, color = "currentColor", style, ...rest }) {
  const d = { width: size + "px", height: size + "px", borderRadius: "50%", background: color, flex: "none" };
  return (
    <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", ...style }} {...rest}>
      <span style={d} />
      <span style={{ ...d, marginLeft: -size * 0.28 + "px" }} />
    </span>
  );
}
