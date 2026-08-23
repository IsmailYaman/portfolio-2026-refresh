import Image from "next/image";
import { Button } from "@/components/core/button";
import { SITE } from "@/lib/data";

export const metadata = {
  title: `CV — ${SITE.name}`,
};

export default function Cv() {
  return (
    <main>
      <section style={{ padding: "clamp(28px,4vw,56px) var(--ev-gutter) var(--ev-space-6)" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--ev-space-6)", flexWrap: "wrap" }}>
          <h1 className="ev-display" style={{ margin: 0 }}>
            CV
          </h1>
          <Button variant="solid" size="lg" arrow href="/cv.pdf" download>
            Download PDF
          </Button>
        </div>
      </section>

      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-9)" }}>
        <div style={{ position: "relative", width: "100%", maxWidth: "900px", margin: "0 auto", aspectRatio: "1131 / 1600", border: "1px solid var(--ev-border-hairline)" }}>
          <Image src="/cv.png" alt={`${SITE.name} — CV`} fill sizes="(max-width: 900px) 100vw, 900px" style={{ objectFit: "contain" }} priority />
        </div>
      </section>
    </main>
  );
}
