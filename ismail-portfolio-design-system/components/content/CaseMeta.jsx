import React from "react";

export function CaseMeta({
  items = [{ label: "Year", value: "2022" }, { label: "Category", value: "Branding" }, { label: "Client", value: "Uniaid Corp." }],
  columns, style, ...rest
}) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(" + (columns || items.length) + ", minmax(0,1fr))",
      gap: "var(--ev-space-5)",
      borderTop: "1px solid var(--ev-border-hairline)",
      borderBottom: "1px solid var(--ev-border-hairline)",
      padding: "var(--ev-space-5) 0", ...style
    }} {...rest}>
      {items.map((it) => (
        <div key={it.label} style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-2)" }}>
          <span style={{ fontFamily: "var(--ev-font-mono)", fontSize: "var(--ev-size-label)", textTransform: "uppercase", letterSpacing: "var(--ev-ls-label)", color: "var(--ev-text-secondary)" }}>
            [ {it.label} ]
          </span>
          <span style={{ fontFamily: "var(--ev-font-display)", fontWeight: 700, fontSize: "var(--ev-size-h4)", textTransform: "uppercase", letterSpacing: "var(--ev-ls-heading)" }}>
            {it.value}
          </span>
        </div>
      ))}
    </div>
  );
}
