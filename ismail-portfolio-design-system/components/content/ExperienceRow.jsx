import React from "react";

export function ExperienceRow({
  title = "Senior brand designer", company = "Jackson Kibby, Berlin",
  role = "Brand designer", year = "2023", header = false, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const cell = {
    fontFamily: header ? "var(--ev-font-mono)" : "var(--ev-font-display)",
    fontSize: header ? "var(--ev-size-label)" : "clamp(15px, 1.4vw, 20px)",
    fontWeight: header ? 400 : 700,
    textTransform: "uppercase",
    letterSpacing: header ? "var(--ev-ls-label)" : "var(--ev-ls-heading)",
    color: header ? "var(--ev-text-secondary)" : "var(--ev-text-primary)",
    lineHeight: 1.2
  };
  const meta = { ...cell, fontFamily: "var(--ev-font-mono)", fontWeight: 400, textTransform: header ? "uppercase" : "none", fontSize: header ? "var(--ev-size-label)" : "var(--ev-size-sm)", color: "var(--ev-text-secondary)" };
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "grid", gridTemplateColumns: "1.4fr 1.2fr 1fr auto",
        gap: "var(--ev-space-5)", alignItems: "baseline",
        padding: header ? "0 0 var(--ev-space-3)" : "var(--ev-space-5) 0",
        borderBottom: "1px solid var(--ev-border-hairline)",
        background: hover && !header ? "var(--ev-paper-tint)" : "transparent",
        transition: "background var(--ev-dur-fast) var(--ev-ease-out)",
        ...style
      }} {...rest}>
      <span style={cell}>{header ? "[ Title ]" : title}</span>
      <span style={meta}>{header ? "[ Company ]" : company}</span>
      <span style={meta}>{header ? "[ Role ]" : role}</span>
      <span style={{ ...meta, textAlign: "right" }}>{header ? "[ Year ]" : year}</span>
    </div>
  );
}
