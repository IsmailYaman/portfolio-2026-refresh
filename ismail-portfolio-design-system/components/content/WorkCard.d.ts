import * as React from "react";

/**
 * Project tile: rounded media that scales on hover, arrow badge, title + mono meta below.
 * @startingPoint section="Content" subtitle="Project tile with hover arrow" viewport="700x400"
 */
export interface WorkCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title?: string;
  category?: string;
  year?: string;
  image?: string;
  href?: string;
  /** CSS aspect-ratio for the media. Default "16 / 10". */
  ratio?: string;
  size?: "sm" | "lg";
  onOpen?: (title: string) => void;
}
export function WorkCard(props: WorkCardProps): JSX.Element;
