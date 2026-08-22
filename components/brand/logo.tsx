import React from "react";
import Link from "next/link";
import { Mark } from "./mark";

export function Logo({
  name = "Ismail Kayadelen",
  inverse = false,
  size = 17,
  showMark = true,
  href,
  style,
  ...rest
}: {
  name?: string;
  inverse?: boolean;
  size?: number;
  showMark?: boolean;
  href?: string;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLElement>) {
  const color = inverse ? "var(--ev-paper)" : "var(--ev-ink)";
  const content = (
    <>
      {showMark && <Mark size={size * 0.8} color={color} />}
      <span
        style={{
          fontFamily: "var(--ev-font-display)",
          fontWeight: 800,
          fontSize: size + "px",
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        {name}
      </span>
    </>
  );
  const sharedStyle: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: "9px", color, textDecoration: "none", ...style };
  if (href) {
    return (
      <Link href={href} style={sharedStyle} {...rest}>
        {content}
      </Link>
    );
  }
  return (
    <div style={sharedStyle} {...rest}>
      {content}
    </div>
  );
}
