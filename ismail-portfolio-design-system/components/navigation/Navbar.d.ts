import * as React from "react";

/**
 * Sticky blurred top bar: lockup left, outline CTA + menu button right.
 * @startingPoint section="Navigation" subtitle="Sticky blurred nav bar" viewport="700x120"
 */
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  name?: string;
  ctaLabel?: string;
  ctaHref?: string;
  inverse?: boolean;
  /** Sticky (default) or static in flow. */
  floating?: boolean;
  onMenu?: () => void;
}
export function Navbar(props: NavbarProps): JSX.Element;
