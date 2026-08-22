"use client";

import React from "react";
import { Tag } from "../core/tag";

export function AwardRow({
  title = "Golden Lens Award",
  description = "Honouring exceptional visual storytelling and cinematographic excellence",
  year = "2022",
  style,
  ...rest
}: {
  title?: string;
  description?: string;
  year?: string;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className="ev-award-row"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        gap: "var(--ev-space-3) var(--ev-space-5)",
        alignItems: "center",
        padding: "var(--ev-space-5) 0",
        borderBottom: "1px solid var(--ev-border-hairline)",
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          fontFamily: "var(--ev-font-display)",
          fontWeight: 700,
          fontSize: "clamp(16px,1.6vw,22px)",
          textTransform: "uppercase",
          letterSpacing: "var(--ev-ls-heading)",
          transform: hover ? "translateX(6px)" : "none",
          transition: "transform var(--ev-dur-base) var(--ev-ease-out)",
        }}
      >
        {title}
      </span>
      <span style={{ fontSize: "var(--ev-size-sm)", color: "var(--ev-text-secondary)", maxWidth: "52ch" }}>{description}</span>
      <Tag>{year}</Tag>
    </div>
  );
}
