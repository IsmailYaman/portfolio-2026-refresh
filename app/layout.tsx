import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { SiteChrome } from "@/components/navigation/site-chrome";
import { SITE } from "@/lib/data";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const title = "Ismail Kayadelen — Web Developer & Designer";
const description =
  "Web developer & designer based in the Netherlands with 3+ years of experience. Specialising in React, TypeScript, Next.js and Laravel — from database design to the last CSS tweak.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  openGraph: {
    title,
    description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrainsMono.variable}`}>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
