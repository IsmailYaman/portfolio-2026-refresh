"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "./navbar";
import { MenuOverlay, type MenuItem } from "./menu-overlay";
import { FooterCTA } from "./footer-cta";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { CursorProvider } from "@/components/cursor/cursor-context";
import { SITE, socials } from "@/lib/data";

const footerColumns = [
  { title: "Social", links: socials.map((s) => ({ label: s.label, href: s.href })) },
  { title: "Contact", links: [{ label: "Email", href: `mailto:${SITE.email}` }] },
];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const router = useRouter();

  const navigate = (item: MenuItem) => {
    setMenuOpen(false);
    router.push(item.href);
  };

  return (
    <LenisProvider>
      <CursorProvider>
        <div className="ev-shell">
          <Navbar name={SITE.name} onMenu={() => setMenuOpen(true)} />
          {children}
          <FooterCTA
            email={SITE.email}
            status={SITE.available ? "Limited work slot available" : "Fully booked until spring"}
            columns={footerColumns}
            credit={`© 2026 ${SITE.name}`}
          />
          <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} name={SITE.name} email={SITE.email} socials={socials} onNavigate={navigate} />
        </div>
      </CursorProvider>
    </LenisProvider>
  );
}
