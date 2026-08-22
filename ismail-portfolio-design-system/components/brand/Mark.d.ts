import * as React from "react";

/**
 * Two overlapping dots that stand in for the mark in the nav lockup.
 * NOTE: no logo file was supplied with the source; this is a type-and-shape
 * placeholder, not a reconstruction of a real logo. Replace with the real asset.
 */
export interface MarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Diameter of one dot in px. Default 14. */
  size?: number;
  color?: string;
}
export function Mark(props: MarkProps): JSX.Element;
