"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "./icon";

const BASE: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  fontFamily: "var(--ev-font-mono)",
  fontSize: "var(--ev-size-label)",
  fontWeight: 400,
  textTransform: "uppercase",
  letterSpacing: "var(--ev-ls-label)",
  lineHeight: 1,
  border: "1px solid transparent",
  borderRadius: "var(--ev-radius-pill)",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition:
    "background var(--ev-dur-base) var(--ev-ease-out), color var(--ev-dur-base) var(--ev-ease-out), border-color var(--ev-dur-base) var(--ev-ease-out), transform var(--ev-dur-fast) var(--ev-ease-out)",
};

const SIZES: Record<string, React.CSSProperties> = {
  sm: { padding: "10px 18px" },
  md: { padding: "14px 26px" },
  lg: { padding: "18px 34px", fontSize: "var(--ev-size-sm)" },
};

function look(variant: string, hover: boolean, inverse: boolean): React.CSSProperties {
  if (variant === "solid")
    return inverse
      ? { background: hover ? "var(--ev-n-100)" : "var(--ev-paper)", color: "var(--ev-ink)" }
      : { background: hover ? "var(--ev-n-700)" : "var(--ev-ink)", color: "var(--ev-paper)" };
  if (variant === "outline")
    return inverse
      ? {
          background: hover ? "var(--ev-paper)" : "transparent",
          color: hover ? "var(--ev-ink)" : "var(--ev-paper)",
          borderColor: hover ? "var(--ev-paper)" : "var(--ev-border-inverse)",
        }
      : {
          background: hover ? "var(--ev-ink)" : "transparent",
          color: hover ? "var(--ev-paper)" : "var(--ev-ink)",
          borderColor: "var(--ev-ink)",
        };
  return inverse
    ? { background: "transparent", color: hover ? "var(--ev-paper)" : "var(--ev-text-on-inverse-secondary)" }
    : { background: "transparent", color: hover ? "var(--ev-link-hover)" : "var(--ev-ink)" };
}

export function Button({
  children,
  variant = "solid",
  size = "md",
  href,
  inverse = false,
  disabled = false,
  arrow = false,
  onClick,
  style,
  ...rest
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  inverse?: boolean;
  disabled?: boolean;
  arrow?: boolean;
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLElement>, "onClick">) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const css: React.CSSProperties = {
    ...BASE,
    ...SIZES[size],
    ...look(variant, hover && !disabled, inverse),
    transform: press && !disabled ? "translateY(1px)" : "none",
    opacity: disabled ? 0.35 : 1,
    pointerEvents: disabled ? "none" : "auto",
    ...style,
  };
  const handlers = {
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    ...rest,
  };
  const content = (
    <>
      {children}
      {arrow && (
        <Icon
          name="arrow-up-right"
          size={16}
          stroke={2}
          style={{
            transition: "transform var(--ev-dur-base) var(--ev-ease-out)",
            transform: hover ? "translate(3px,-3px)" : "none",
          }}
        />
      )}
    </>
  );

  if (href && href.startsWith("/")) {
    return (
      <Link href={href} aria-disabled={disabled || undefined} {...handlers}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} onClick={onClick} aria-disabled={disabled || undefined} {...handlers}>
        {content}
      </a>
    );
  }
  return (
    <button onClick={onClick} disabled={disabled} {...handlers}>
      {content}
    </button>
  );
}
