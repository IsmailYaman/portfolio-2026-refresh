import * as React from "react";

/**
 * Hairline CV row — title / company / role / year. Pass header for the bracketed key row.
 * @startingPoint section="Content" subtitle="Hairline experience table" viewport="700x260"
 */
export interface ExperienceRowProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  company?: string;
  role?: string;
  year?: string;
  /** Render the bracketed column-key row instead of data. */
  header?: boolean;
}
export function ExperienceRow(props: ExperienceRowProps): JSX.Element;
