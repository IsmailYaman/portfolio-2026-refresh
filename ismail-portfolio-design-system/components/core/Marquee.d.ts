import * as React from "react";

/**
 * Endless horizontal type ticker — the site's signature divider between sections.
 * @startingPoint section="Core" subtitle="Endless service ticker" viewport="700x140"
 */
export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: string[];
  /** Glyph between items. Default "—". */
  separator?: string;
  /** Seconds for one full loop. Default 28. */
  speed?: number;
  reverse?: boolean;
  /** Any CSS font-size. Default clamp(28px, 5vw, 64px). */
  size?: string;
  inverse?: boolean;
  /** Hollow (stroked) letters instead of solid fill. */
  outline?: boolean;
}
export function Marquee(props: MarqueeProps): JSX.Element;
