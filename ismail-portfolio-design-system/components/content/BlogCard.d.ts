import * as React from "react";

/** Journal entry card: media, category chip, mono date line, sentence-case title. */
export interface BlogCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title?: string;
  category?: string;
  date?: string;
  readTime?: string;
  image?: string;
  href?: string;
}
export function BlogCard(props: BlogCardProps): JSX.Element;
