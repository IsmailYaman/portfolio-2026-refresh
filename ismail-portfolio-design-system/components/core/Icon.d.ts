import * as React from "react";

/** Lucide glyph rendered as a currentColor mask. Line icons only, never filled. */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon slug, e.g. "arrow-up-right", "menu", "x", "mail". */
  name?: string;
  size?: number;
  /** Visual weight hint; Lucide's own stroke is fixed at 2. */
  stroke?: number;
  color?: string;
}
export function Icon(props: IconProps): JSX.Element;
