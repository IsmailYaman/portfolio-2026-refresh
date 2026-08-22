import React from "react";
import { Mark } from "./Mark.jsx";

export function Logo({ name = "Ismail Kayadelen", inverse = false, size = 17, showMark = true, href, style, ...rest }) {
  const color = inverse ? "var(--ev-paper)" : "var(--ev-ink)";
  const Tag = href ? "a" : "div";
  return (
    <Tag href={href} style={{ display: "inline-flex", alignItems: "center", gap: "9px", color, textDecoration: "none", ...style }} {...rest}>
      {showMark && <Mark size={size * 0.8} color={color} />}
      <span style={{
        fontFamily: "var(--ev-font-display)", fontWeight: 800, fontSize: size + "px",
        textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1
      }}>{name}</span>
    </Tag>
  );
}
