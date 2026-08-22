import React from "react";

export function StatCounter({ value = "150", suffix = "+", label = "Project completed", inverse = false, style, ...rest }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", ...style }} {...rest}>
      <div style={{
        display: "flex", alignItems: "baseline",
        fontFamily: "var(--ev-font-display)", fontWeight: 800, textTransform: "uppercase",
        fontSize: "clamp(44px, 6vw, 88px)", lineHeight: 0.9, letterSpacing: "var(--ev-ls-display)",
        color: inverse ? "var(--ev-paper)" : "var(--ev-ink)"
      }}>
        <span>{value}</span>
        {suffix && <span style={{ fontSize: "0.6em" }}>{suffix}</span>}
      </div>
      <span style={{
        fontFamily: "var(--ev-font-mono)", fontSize: "var(--ev-size-label)", textTransform: "uppercase",
        letterSpacing: "var(--ev-ls-label)",
        color: inverse ? "var(--ev-text-on-inverse-secondary)" : "var(--ev-text-secondary)"
      }}>{label}</span>
    </div>
  );
}
