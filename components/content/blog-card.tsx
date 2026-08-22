"use client";

import React from "react";
import Image from "next/image";
import { Tag } from "../core/tag";

export function BlogCard({
  title = "The art of urban branding",
  category = "Branding",
  date = "12 Mar 2025",
  readTime = "4 min read",
  image,
  href = "#",
  style,
  ...rest
}: {
  title?: string;
  category?: string;
  date?: string;
  readTime?: string;
  image?: string;
  href?: string;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLAnchorElement>) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-4)", color: "inherit", ...style }}
      {...rest}
    >
      <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--ev-radius-md)", aspectRatio: "16 / 11", background: "var(--ev-surface-media)" }}>
        {image && (
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{
              objectFit: "cover",
              transform: hover ? "scale(1.04)" : "scale(1)",
              transition: "transform var(--ev-dur-slow) var(--ev-ease-expo)",
            }}
          />
        )}
      </div>
      <div style={{ display: "flex", gap: "var(--ev-space-3)", alignItems: "center" }}>
        <Tag bracket={false}>{category}</Tag>
        <span style={{ fontFamily: "var(--ev-font-mono)", fontSize: "var(--ev-size-label)", letterSpacing: "var(--ev-ls-label)", textTransform: "uppercase", color: "var(--ev-text-secondary)" }}>
          {date} · {readTime}
        </span>
      </div>
      <h3
        style={{
          margin: 0,
          fontFamily: "var(--ev-font-display)",
          fontWeight: 700,
          fontSize: "var(--ev-size-h4)",
          lineHeight: 1.25,
          letterSpacing: "var(--ev-ls-heading)",
          textDecoration: hover ? "underline" : "none",
          textUnderlineOffset: "5px",
          textDecorationThickness: "1px",
        }}
      >
        {title}
      </h3>
    </a>
  );
}
