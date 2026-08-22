import * as React from "react";

export interface FooterColumn { title: string; links: { label: string; href?: string }[]; }

/**
 * Ink footer: oversized mailto headline, status dot, three link columns, outline marquee.
 * @startingPoint section="Navigation" subtitle="Ink footer with oversized CTA" viewport="700x420"
 */
export interface FooterCTAProps extends React.HTMLAttributes<HTMLElement> {
  headline?: string;
  /** Availability line, always paired with the red dot. */
  status?: string;
  email?: string;
  columns?: FooterColumn[];
  credit?: string;
  /** Show the hollow "let's work together" ticker. Default true. */
  marquee?: boolean;
}
export function FooterCTA(props: FooterCTAProps): JSX.Element;
