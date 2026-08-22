import * as React from "react";

/** Awards & recognition line: name, one-line citation, bracketed year. */
export interface AwardRowProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  year?: string;
}
export function AwardRow(props: AwardRowProps): JSX.Element;
