"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "./navbar";
import { MenuOverlay, type MenuItem } from "./menu-overlay";
import { FooterCTA } from "./footer-cta";
import { LanguageToggle } from "./language-toggle";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { CursorProvider } from "@/components/cursor/cursor-context";
import { SITE, socials } from "@/lib/data";
import { t } from "@/lib/dictionary";
import type { Locale } from "@/lib/locale";

export function SiteChrome({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const router = useRouter();
  const d = t(locale);

  const navigate = (item: MenuItem) => {
    setMenuOpen(false);
    router.push(item.href);
  };

  const items: MenuItem[] = [
    { label: d.nav.homepage, href: "/" },
    { label: d.nav.about, href: "/about" },
    { label: d.nav.cv, href: "/cv" },
    { label: d.nav.work, href: "/work" },
    { label: d.nav.contact, href: "/contact" },
  ];
  const footerColumns = [{ title: d.footer.social, links: socials.map((s) => ({ label: s.label, href: s.href })) }];

  return (
    <LenisProvider>
      <CursorProvider>
        <div className="ev-shell">
          <Navbar
            name={SITE.name}
            ctaLabel={d.nav.contactMe}
            menuLabel={d.nav.openMenu}
            onMenu={() => setMenuOpen(true)}
            toggle={<LanguageToggle locale={locale} />}
          />
          {children}
          <FooterCTA
            email={SITE.email}
            headline={d.footer.headline}
            columns={footerColumns}
            credit={`© ${new Date().getFullYear()} ${SITE.name}`}
            marqueeText={d.footer.marquee}
          />
          <MenuOverlay
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            name={SITE.name}
            email={SITE.email}
            socials={socials}
            items={items}
            closeLabel={d.nav.closeMenu}
            onNavigate={navigate}
          />
        </div>
      </CursorProvider>
    </LenisProvider>
  );
}
