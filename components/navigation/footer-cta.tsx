import React from "react";
import { Eyebrow } from "../core/eyebrow";
import { Marquee } from "../core/marquee";

function Column({ title, links }: { title: string; links: { label: string; href?: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "var(--ev-space-3)" }}>
      <span
        style={{
          fontFamily: "var(--ev-font-display)",
          fontSize: "var(--ev-size-h4)",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "var(--ev-ls-heading)",
          color: "var(--ev-paper)",
        }}
      >
        {title}
      </span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href || "#"}
          style={{
            fontFamily: "var(--ev-font-mono)",
            fontSize: "var(--ev-size-sm)",
            letterSpacing: "var(--ev-ls-mono)",
            color: "var(--ev-text-on-inverse-secondary)",
          }}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

export function FooterCTA({
  headline = "Let's chat",
  status = "Limited work slot available",
  email = "hello@ismailkayadelen.com",
  columns = [
    { title: "Social", links: [{ label: "Instagram" }, { label: "GitHub" }, { label: "LinkedIn" }] },
    { title: "Contact", links: [{ label: "Phone" }, { label: "Email" }] },
    { title: "Pages", links: [{ label: "About", href: "/about" }, { label: "Work", href: "/work" }] },
  ],
  credit = "© 2026 — Made with care",
  marquee = true,
  style,
  ...rest
}: {
  headline?: string;
  status?: string;
  email?: string;
  columns?: { title: string; links: { label: string; href?: string }[] }[];
  credit?: string;
  marquee?: boolean;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className="ev-inverse" style={{ padding: "var(--ev-space-9) 0 var(--ev-space-6)", ...style }} {...rest}>
      <div style={{ padding: "0 var(--ev-gutter)", display: "flex", flexWrap: "wrap", gap: "var(--ev-space-8)", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-5)", minWidth: "min(100%, 420px)" }}>
          <a
            href={"mailto:" + email}
            style={{
              fontFamily: "var(--ev-font-display)",
              fontWeight: 800,
              textTransform: "uppercase",
              fontSize: "clamp(56px, 9vw, 148px)",
              lineHeight: 0.86,
              letterSpacing: "var(--ev-ls-hero)",
              color: "var(--ev-paper)",
            }}
          >
            {headline}
          </a>
          <Eyebrow dot="signal" inverse>
            {status}
          </Eyebrow>
        </div>
        <div style={{ display: "flex", rowGap: "var(--ev-space-8)", columnGap: "clamp(32px, 6vw, 96px)", flexWrap: "wrap" }}>
          {columns.map((c) => (
            <Column key={c.title} {...c} />
          ))}
        </div>
      </div>

      {marquee && (
        <div style={{ margin: "var(--ev-space-9) 0 var(--ev-space-6)" }}>
          <Marquee items={["Let's work together"]} inverse outline size="clamp(48px, 9vw, 130px)" speed={34} />
        </div>
      )}

      <div
        style={{
          padding: "var(--ev-space-5) var(--ev-gutter) 0",
          borderTop: "1px solid var(--ev-border-inverse)",
          display: "flex",
          justifyContent: "space-between",
          gap: "var(--ev-space-5)",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontFamily: "var(--ev-font-mono)",
            fontSize: "var(--ev-size-label)",
            textTransform: "uppercase",
            letterSpacing: "var(--ev-ls-label)",
            color: "var(--ev-text-on-inverse-secondary)",
          }}
        >
          {credit}
        </span>
        <a
          href={"mailto:" + email}
          style={{
            fontFamily: "var(--ev-font-mono)",
            fontSize: "var(--ev-size-label)",
            textTransform: "uppercase",
            letterSpacing: "var(--ev-ls-label)",
            color: "var(--ev-paper)",
          }}
        >
          {email}
        </a>
      </div>
    </footer>
  );
}
