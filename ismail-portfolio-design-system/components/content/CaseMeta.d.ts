import * as React from "react";

/** Rule-bounded key/value strip at the top of a case study (year, category, client, stack). */
export interface CaseMetaProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: { label: string; value: string }[];
  /** Force a column count; defaults to items.length. */
  columns?: number;
}
export function CaseMeta(props: CaseMetaProps): JSX.Element;
