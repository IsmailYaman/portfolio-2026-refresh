"use client";

import React from "react";

export function ExperienceRow({
  title = "Senior brand designer",
  company = "Jackson Kibby, Berlin",
  year = "2023",
  header = false,
  companyLabel = "Company",
  style,
  ...rest
}: {
  title?: string;
  company?: string;
  year?: string;
  header?: boolean;
  companyLabel?: string;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>) {
  const [hover, setHover] = React.useState(false);

  if (header) {
    const headerCell: React.CSSProperties = {
      fontFamily: "var(--ev-font-mono)",
      fontSize: "var(--ev-size-label)",
      fontWeight: 400,
      textTransform: "uppercase",
      letterSpacing: "var(--ev-ls-label)",
      color: "var(--ev-accent)",
      lineHeight: 1.2,
    };
    return (
      <div
        className="ev-exp-row ev-exp-header"
        style={{ alignItems: "baseline", padding: "0 0 var(--ev-space-3)", borderBottom: "1px solid var(--ev-border-hairline)", ...style }}
        {...rest}
      >
        <span style={headerCell}>[ Title ]</span>
        <span style={headerCell}>[ {companyLabel} ]</span>
        <span style={{ ...headerCell, textAlign: "right" }}>[ Year ]</span>
      </div>
    );
  }

  const cell: React.CSSProperties = {
    fontFamily: "var(--ev-font-display)",
    fontSize: "clamp(15px, 1.4vw, 20px)",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "var(--ev-ls-heading)",
    color: "var(--ev-text-primary)",
    lineHeight: 1.2,
  };
  const meta: React.CSSProperties = {
    fontFamily: "var(--ev-font-mono)",
    fontWeight: 400,
    fontSize: "var(--ev-size-sm)",
    color: "var(--ev-text-secondary)",
    lineHeight: 1.2,
  };

  return (
    <div
      className="ev-exp-row"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        alignItems: "baseline",
        padding: "var(--ev-space-5) 0",
        borderBottom: "1px solid var(--ev-border-hairline)",
        background: hover ? "var(--ev-paper-tint)" : "transparent",
        transition: "background var(--ev-dur-fast) var(--ev-ease-out)",
        ...style,
      }}
      {...rest}
    >
      <span className="ev-exp-title" style={cell}>
        {title}
      </span>
      <span className="ev-exp-company" style={meta}>
        {company}
      </span>
      <span className="ev-exp-year" style={{ ...meta, textAlign: "right" }}>
        {year}
      </span>
      <span className="ev-exp-mobile-meta" style={meta}>
        {company}
      </span>
    </div>
  );
}
