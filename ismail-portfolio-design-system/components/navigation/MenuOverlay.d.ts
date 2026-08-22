import * as React from "react";

export interface MenuItem { label: string; href?: string; }

/** Full-bleed ink overlay with oversized page list; opens with a clip-path wipe. */
export interface MenuOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onClose?: () => void;
  /** Wordmark shown in the overlay lockup — keep in sync with Navbar's name. */
  name?: string;
  items?: MenuItem[];
  socials?: MenuItem[];
  email?: string;
  /** Intercepts item clicks for in-page routing. */
  onNavigate?: (item: MenuItem, index: number) => void;
}
export function MenuOverlay(props: MenuOverlayProps): JSX.Element;
