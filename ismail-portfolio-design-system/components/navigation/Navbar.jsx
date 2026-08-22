import React from "react";
import { Logo } from "../brand/Logo.jsx";
import { Button } from "../core/Button.jsx";
import { Icon } from "../core/Icon.jsx";

export function Navbar({
  name = "Ismail Kayadelen", ctaLabel = "Contact me", ctaHref = "/contact",
  inverse = false, floating = true, onMenu, style, ...rest
}) {
  return (
    <header style={{
      position: floating ? "sticky" : "relative", top: 0, zIndex: 40,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: "var(--ev-space-5)",
      padding: "18px var(--ev-gutter)",
      background: inverse ? "rgba(5,5,5,.72)" : "rgba(255,255,255,.72)",
      backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
      borderBottom: "1px solid " + (inverse ? "var(--ev-border-inverse)" : "var(--ev-border-hairline)"),
      ...style
    }} {...rest}>
      <Logo name={name} inverse={inverse} href="#home" />
      <div style={{ display: "flex", alignItems: "center", gap: "var(--ev-space-3)" }}>
        <Button variant="outline" size="sm" inverse={inverse} href={ctaHref} arrow>{ctaLabel}</Button>
        <button onClick={onMenu} aria-label="Open menu" style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: "42px", height: "42px", borderRadius: "var(--ev-radius-pill)",
          border: "1px solid " + (inverse ? "var(--ev-border-inverse)" : "var(--ev-border-hairline)"),
          background: "transparent", cursor: "pointer"
        }}>
          <Icon name="menu" size={20} color={inverse ? "var(--ev-paper)" : "var(--ev-ink)"} />
        </button>
      </div>
    </header>
  );
}
