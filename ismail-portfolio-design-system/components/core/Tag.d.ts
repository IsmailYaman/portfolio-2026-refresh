import * as React from "react";

/** Bracketed mono chip used for years, categories and metadata keys. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** Wrap the label in square brackets — the site's house style. Default true. */
  bracket?: boolean;
  tone?: "default" | "strong" | "inverse";
}
export function Tag(props: TagProps): JSX.Element;
