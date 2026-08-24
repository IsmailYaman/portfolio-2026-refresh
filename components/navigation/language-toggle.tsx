"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { LOCALE_COOKIE, type Locale } from "@/lib/locale";

export function LanguageToggle({ locale, inverse = false, style }: { locale: Locale; inverse?: boolean; style?: React.CSSProperties }) {
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000`;
    router.refresh();
  }

  const base: React.CSSProperties = {
    fontFamily: "var(--ev-font-mono)",
    fontSize: "var(--ev-size-label)",
    letterSpacing: "var(--ev-ls-label)",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
  };
  const activeColor = inverse ? "var(--ev-paper)" : "var(--ev-ink)";
  const inactiveColor = inverse ? "var(--ev-text-on-inverse-secondary)" : "var(--ev-text-secondary)";

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", ...style }}>
      <button type="button" onClick={() => switchTo("en")} style={{ ...base, color: locale === "en" ? activeColor : inactiveColor, fontWeight: locale === "en" ? 700 : 400 }}>
        EN
      </button>
      <span style={{ ...base, color: inactiveColor, cursor: "default" }}>/</span>
      <button type="button" onClick={() => switchTo("nl")} style={{ ...base, color: locale === "nl" ? activeColor : inactiveColor, fontWeight: locale === "nl" ? 700 : 400 }}>
        NL
      </button>
    </div>
  );
}
