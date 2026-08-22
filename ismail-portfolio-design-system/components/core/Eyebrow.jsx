import React from "react";

export function Eyebrow({ children, dot = "ink", align = "left", inverse = false, style, ...rest }) {
  const dots = { none: null, ink: "var(--ev-ink)", signal: "var(--ev-signal)", paper: "var(--ev-paper)" };
  const color = dots[dot];
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "10px",
      justifyContent: align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start",
      fontFamily: "var(--ev-font-mono)", fontSize: "var(--ev-size-label)",
      textTransform: "uppercase", letterSpacing: "var(--ev-ls-label)", lineHeight: 1.4,
      color: inverse ? "var(--ev-text-on-inverse-secondary)" : "var(--ev-text-secondary)",
      ...style
    }} {...rest}>
      {color && <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: color, flex: "none" }} />}
      <span>{children}</span>
    </div>
  );
}
