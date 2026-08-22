import React from "react";

export function Tag({ children, bracket = true, tone = "default", style, ...rest }) {
  const tones = {
    default: { color: "var(--ev-text-secondary)", borderColor: "var(--ev-border-hairline)" },
    strong:  { color: "var(--ev-ink)", borderColor: "var(--ev-ink)" },
    inverse: { color: "var(--ev-paper)", borderColor: "var(--ev-border-inverse)" }
  };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "6px",
      fontFamily: "var(--ev-font-mono)", fontSize: "var(--ev-size-label)",
      textTransform: "uppercase", letterSpacing: "var(--ev-ls-label)", lineHeight: 1,
      padding: "8px 12px", borderRadius: "var(--ev-radius-pill)",
      border: "1px solid", ...tones[tone], ...style
    }} {...rest}>
      {bracket ? "[" : null}{children}{bracket ? "]" : null}
    </span>
  );
}
