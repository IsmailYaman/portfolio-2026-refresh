import { readFileSync } from "node:fs";
import Image from "next/image";
import { Button } from "@/components/core/button";
import { SITE } from "@/lib/data";
import { t } from "@/lib/dictionary";
import { getLocale } from "@/lib/get-locale";

export const metadata = {
  title: `CV — ${SITE.name}`,
};

function getCvPageCount(locale: "en" | "nl") {
  const pages = JSON.parse(readFileSync(`${process.cwd()}/public/cv-pages.json`, "utf-8")) as Record<"en" | "nl", number>;
  return pages[locale];
}

export default async function Cv() {
  const locale = await getLocale();
  const d = t(locale).cv;
  const pdfHref = locale === "nl" ? "/cv-nl.pdf" : "/cv.pdf";
  const imagePrefix = locale === "nl" ? "/cv-nl" : "/cv";
  const pageCount = getCvPageCount(locale);
  return (
    <main>
      <section style={{ padding: "clamp(28px,4vw,56px) var(--ev-gutter) var(--ev-space-6)" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--ev-space-6)", flexWrap: "wrap" }}>
          <h1 className="ev-display" style={{ margin: 0 }}>
            {d.title}
          </h1>
          <Button variant="solid" size="lg" arrow href={pdfHref} download>
            {d.download}
          </Button>
        </div>
      </section>

      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-9)", display: "flex", flexDirection: "column", gap: "var(--ev-space-6)" }}>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
          <div
            key={page}
            style={{ position: "relative", width: "100%", maxWidth: "900px", margin: "0 auto", aspectRatio: "1131 / 1600", border: "1px solid var(--ev-border-hairline)" }}
          >
            <Image
              src={`${imagePrefix}-${page}.png`}
              alt={`${SITE.name} — CV (${page}/${pageCount})`}
              fill
              sizes="(max-width: 900px) 100vw, 900px"
              style={{ objectFit: "contain" }}
              priority={page === 1}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
