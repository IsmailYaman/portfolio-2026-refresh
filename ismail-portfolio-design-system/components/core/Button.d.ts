import * as React from "react";

/**
 * Pill button set in mono uppercase — the only button shape in the system.
 * @startingPoint section="Core" subtitle="Solid, outline and ghost pills" viewport="700x200"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** solid = ink fill (primary CTA) · outline = hairline frame · ghost = bare link-button */
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  /** Renders an <a> instead of a <button> */
  href?: string;
  /** Flip colours for use on a --ev-surface-inverse section */
  inverse?: boolean;
  disabled?: boolean;
  /** Append the ↗ glyph that nudges on hover */
  arrow?: boolean;
}
export function Button(props: ButtonProps): JSX.Element;
