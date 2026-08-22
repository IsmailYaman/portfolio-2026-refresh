import React from "react";

export function Marquee({
  items = [],
  separator = "—",
  speed = 28,
  reverse = false,
  size = "clamp(28px, 5vw, 64px)",
  inverse = false,
  outline = false,
  style,
  ...rest
}: {
  items?: string[];
  separator?: string;
  speed?: number;
  reverse?: boolean;
  size?: string;
  inverse?: boolean;
  outline?: boolean;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>) {
  const id = React.useId().replace(/[^a-zA-Z0-9]/g, "");
  const run = items.length ? items : ["Branding", "Web design", "UI/UX design"];
  const strip = (
    <span style={{ display: "inline-flex", gap: "0.4em", alignItems: "center", paddingRight: "0.4em" }}>
      {run.map((it, i) => (
        <span key={i} style={{ display: "inline-flex", gap: "0.4em", alignItems: "center" }}>
          <span>{it}</span>
          <span style={{ opacity: 0.4 }}>{separator}</span>
        </span>
      ))}
    </span>
  );
  return (
    <div style={{ overflow: "hidden", width: "100%", ...style }} {...rest}>
      <style>{`@keyframes mq-${id}{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      <div
        style={{
          display: "inline-flex",
          whiteSpace: "nowrap",
          willChange: "transform",
          animation: `mq-${id} ${speed}s linear infinite${reverse ? " reverse" : ""}`,
          fontFamily: "var(--ev-font-display)",
          fontWeight: 800,
          textTransform: "uppercase",
          fontSize: size,
          lineHeight: 1,
          letterSpacing: "var(--ev-ls-display)",
          color: outline ? "transparent" : inverse ? "var(--ev-paper)" : "var(--ev-ink)",
          WebkitTextStroke: outline ? `1px ${inverse ? "rgba(255,255,255,.5)" : "var(--ev-ink)"}` : undefined,
        }}
      >
        {strip}
        {strip}
      </div>
    </div>
  );
}
