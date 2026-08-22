import * as React from "react";

/** Oversized numeral + mono caption, used in the about-page stats row. */
export interface StatCounterProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string | number;
  /** Trailing glyph rendered at 60% size — "+", "M", "%". */
  suffix?: string;
  label?: string;
  inverse?: boolean;
}
export function StatCounter(props: StatCounterProps): JSX.Element;
