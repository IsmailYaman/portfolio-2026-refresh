"use client";

import React from "react";

type BaseProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  type?: string;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  inverse?: boolean;
  id?: string;
  style?: React.CSSProperties;
  name?: string;
};

export function Input({
  label = "Name",
  placeholder = "",
  value,
  onChange,
  type = "text",
  multiline = false,
  rows = 4,
  required = false,
  inverse = false,
  id,
  style,
  ...rest
}: BaseProps) {
  const [focus, setFocus] = React.useState(false);
  const generatedId = React.useId();
  const uid = id || generatedId;
  const line = inverse ? "var(--ev-border-inverse)" : "var(--ev-border-hairline)";
  const field: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: 0,
    outline: "none",
    borderBottom: "1px solid " + (focus ? (inverse ? "var(--ev-paper)" : "var(--ev-ink)") : line),
    padding: "12px 0",
    resize: multiline ? "vertical" : undefined,
    fontFamily: "var(--ev-font-text)",
    fontSize: "var(--ev-size-body)",
    color: inverse ? "var(--ev-paper)" : "var(--ev-ink)",
    transition: "border-color var(--ev-dur-base) var(--ev-ease-out)",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-2)", ...style }}>
      <label
        htmlFor={uid}
        style={{
          fontFamily: "var(--ev-font-mono)",
          fontSize: "var(--ev-size-label)",
          textTransform: "uppercase",
          letterSpacing: "var(--ev-ls-label)",
          color: inverse ? "var(--ev-text-on-inverse-secondary)" : "var(--ev-text-secondary)",
        }}
      >
        {label}
        {required ? " *" : ""}
      </label>
      {multiline ? (
        <textarea
          id={uid}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={field}
          required={required}
          {...rest}
        />
      ) : (
        <input
          id={uid}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={field}
          required={required}
          {...rest}
        />
      )}
    </div>
  );
}
