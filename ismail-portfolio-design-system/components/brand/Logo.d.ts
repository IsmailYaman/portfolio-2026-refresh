import * as React from "react";

/**
 * Wordmark lockup: placeholder dot mark + name set in display type.
 * @startingPoint section="Brand" subtitle="Wordmark lockup, light and dark" viewport="700x170"
 */
export interface LogoProps extends React.HTMLAttributes<HTMLElement> {
  name?: string;
  inverse?: boolean;
  /** Wordmark font-size in px; the mark scales with it. Default 17. */
  size?: number;
  showMark?: boolean;
  href?: string;
}
export function Logo(props: LogoProps): JSX.Element;
