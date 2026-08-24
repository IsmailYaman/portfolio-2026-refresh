import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { SiteChrome } from "@/components/navigation/site-chrome";
import { SITE } from "@/lib/data";
import { t } from "@/lib/dictionary";
import { getLocale } from "@/lib/get-locale";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const d = t(locale);
  return {
    metadataBase: new URL(SITE.url),
    title: d.meta.title,
    description: d.meta.description,
    openGraph: {
      title: d.meta.title,
      description: d.meta.description,
      url: SITE.url,
      siteName: SITE.name,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: d.meta.title,
      description: d.meta.description,
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  return (
    <html lang={locale} className={`${archivo.variable} ${jetbrainsMono.variable}`}>
      <body>
        <SiteChrome locale={locale}>{children}</SiteChrome>
      </body>
    </html>
  );
}
