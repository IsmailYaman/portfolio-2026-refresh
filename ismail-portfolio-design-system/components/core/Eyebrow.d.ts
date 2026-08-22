import * as React from "react";

/** Section label: mono, uppercase, tracked, preceded by a small dot. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Bullet colour — signal red marks "live" statements. */
  dot?: "none" | "ink" | "signal" | "paper";
  align?: "left" | "center" | "right";
  inverse?: boolean;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
