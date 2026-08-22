"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "../core/icon";
import { useCursorLabel } from "../cursor/cursor-context";

export function WorkCard({
  title = "Vision Craft",
  category = "Branding",
  year = "2022",
  image,
  href = "#",
  ratio = "16 / 10",
  size = "lg",
  style,
  ...rest
}: {
  title?: string;
  category?: string;
  year?: string;
  image?: string;
  href?: string;
  ratio?: string;
  size?: "sm" | "lg";
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLAnchorElement>) {
  const [hover, setHover] = React.useState(false);
  const setCursorLabel = useCursorLabel();
  const titleSize = size === "sm" ? "var(--ev-size-h4)" : "var(--ev-size-h3)";
  return (
    <Link
      href={href}
      onMouseEnter={() => {
        setHover(true);
        setCursorLabel("View");
      }}
      onMouseLeave={() => {
        setHover(false);
        setCursorLabel(null);
      }}
      style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-4)", color: "inherit", ...style }}
      {...rest}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: ratio,
          borderRadius: "var(--ev-radius-md)",
          background: "var(--ev-surface-media)",
        }}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              transform: hover ? "scale(1.045)" : "scale(1)",
              transition: "transform var(--ev-dur-slow) var(--ev-ease-expo)",
            }}
          />
        )}
        <span
          style={{
            position: "absolute",
            inset: "auto 14px 14px auto",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            borderRadius: "var(--ev-radius-pill)",
            background: "var(--ev-paper)",
            opacity: hover ? 1 : 0,
            transform: hover ? "translateY(0)" : "translateY(8px)",
            transition: "opacity var(--ev-dur-base) var(--ev-ease-out), transform var(--ev-dur-base) var(--ev-ease-out)",
          }}
        >
          <Icon name="arrow-up-right" size={20} color="var(--ev-ink)" />
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--ev-space-4)" }}>
        <span
          style={{
            fontFamily: "var(--ev-font-display)",
            fontWeight: 700,
            fontSize: titleSize,
            textTransform: "uppercase",
            letterSpacing: "var(--ev-ls-heading)",
            lineHeight: 1.05,
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: "var(--ev-font-mono)",
            fontSize: "var(--ev-size-label)",
            textTransform: "uppercase",
            letterSpacing: "var(--ev-ls-label)",
            color: "var(--ev-text-secondary)",
            whiteSpace: "nowrap",
          }}
        >
          {category}
          {year ? " — " + year : ""}
        </span>
      </div>
    </Link>
  );
}
