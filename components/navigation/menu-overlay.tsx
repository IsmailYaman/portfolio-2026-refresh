"use client";

import React from "react";
import { Logo } from "../brand/logo";
import { Icon } from "../core/icon";
import { Eyebrow } from "../core/eyebrow";

export type MenuItem = { label: string; href: string };

export function MenuOverlay({
  open = false,
  onClose,
  name = "Ismail Kayadelen",
  items = [
    { label: "Homepage", href: "/" },
    { label: "About me", href: "/about" },
    { label: "CV", href: "/cv" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ],
  socials = [
    { label: "Dribbble", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Instagram", href: "#" },
  ],
  email = "hello@ismailkayadelen.com",
  closeLabel = "Close menu",
  onNavigate,
  style,
  ...rest
}: {
  open?: boolean;
  onClose?: () => void;
  name?: string;
  items?: MenuItem[];
  socials?: { label: string; href: string }[];
  email?: string;
  closeLabel?: string;
  onNavigate?: (item: MenuItem, index: number) => void;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>) {
  const [hover, setHover] = React.useState(-1);
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 90,
        background: "var(--ev-ink)",
        color: "var(--ev-paper)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "18px var(--ev-gutter) var(--ev-space-7)",
        clipPath: open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "clip-path var(--ev-dur-slow) var(--ev-ease-expo), opacity var(--ev-dur-fast) linear",
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Logo inverse name={name} />
        <button
          onClick={onClose}
          aria-label={closeLabel}
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "var(--ev-radius-pill)",
            border: "1px solid var(--ev-border-inverse)",
            background: "transparent",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Icon name="x" size={20} color="var(--ev-paper)" />
        </button>
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: "clamp(2px, .6vw, 8px)", padding: "var(--ev-space-7) 0" }}>
        {items.map((it, i) => (
          <a
            key={it.label}
            href={it.href}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate(it, i);
              }
            }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(-1)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              fontFamily: "var(--ev-font-display)",
              fontWeight: 800,
              textTransform: "uppercase",
              fontSize: "clamp(34px, 6.4vw, 92px)",
              lineHeight: 1.02,
              letterSpacing: "var(--ev-ls-display)",
              color: hover === -1 || hover === i ? "var(--ev-paper)" : "rgba(255,255,255,.32)",
              transform: hover === i ? "translateX(14px)" : "none",
              transition: "color var(--ev-dur-base) var(--ev-ease-out), transform var(--ev-dur-base) var(--ev-ease-out)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--ev-font-mono)",
                fontSize: "var(--ev-size-label)",
                letterSpacing: "var(--ev-ls-label)",
                opacity: 0.5,
                fontWeight: 400,
              }}
            >
              0{i + 1}
            </span>
            {it.label}
          </a>
        ))}
      </nav>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "var(--ev-space-6)", flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: "var(--ev-space-5)", flexWrap: "wrap" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              style={{
                fontFamily: "var(--ev-font-mono)",
                fontSize: "var(--ev-size-label)",
                textTransform: "uppercase",
                letterSpacing: "var(--ev-ls-label)",
                color: "var(--ev-paper)",
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
        <Eyebrow dot="signal" inverse>
          {email}
        </Eyebrow>
      </div>
    </div>
  );
}
