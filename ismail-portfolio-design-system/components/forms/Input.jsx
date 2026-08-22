import React from "react";

export function Input({
  label = "Name", placeholder = "", value, onChange, type = "text",
  multiline = false, rows = 4, required = false, inverse = false, id, style, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useMemo(() => id || "ev-in-" + Math.random().toString(36).slice(2, 7), [id]);
  const line = inverse ? "var(--ev-border-inverse)" : "var(--ev-border-hairline)";
  const field = {
    width: "100%", background: "transparent", border: 0, outline: "none",
    borderBottom: "1px solid " + (focus ? (inverse ? "var(--ev-paper)" : "var(--ev-ink)") : line),
    padding: "12px 0", resize: multiline ? "vertical" : undefined,
    fontFamily: "var(--ev-font-text)", fontSize: "var(--ev-size-body)",
    color: inverse ? "var(--ev-paper)" : "var(--ev-ink)",
    transition: "border-color var(--ev-dur-base) var(--ev-ease-out)"
  };
  const Tag = multiline ? "textarea" : "input";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-2)", ...style }}>
      <label htmlFor={uid} style={{
        fontFamily: "var(--ev-font-mono)", fontSize: "var(--ev-size-label)", textTransform: "uppercase",
        letterSpacing: "var(--ev-ls-label)",
        color: inverse ? "var(--ev-text-on-inverse-secondary)" : "var(--ev-text-secondary)"
      }}>
        {label}{required ? " *" : ""}
      </label>
      <Tag id={uid} type={multiline ? undefined : type} rows={multiline ? rows : undefined}
        placeholder={placeholder} value={value} onChange={onChange}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={field} {...rest} />
    </div>
  );
}
