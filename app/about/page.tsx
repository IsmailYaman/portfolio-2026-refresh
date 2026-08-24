import Image from "next/image";
import { Eyebrow } from "@/components/core/eyebrow";
import { Tag } from "@/components/core/tag";
import { Marquee } from "@/components/core/marquee";
import { ExperienceRow } from "@/components/content/experience-row";
import { SITE, bio, tools, workExperience, education } from "@/lib/data";
import { t } from "@/lib/dictionary";
import { getLocale } from "@/lib/get-locale";

export default async function About() {
  const locale = await getLocale();
  const d = t(locale);
  return (
    <main>
      <section style={{ padding: "clamp(28px,4vw,56px) var(--ev-gutter) var(--ev-space-7)" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--ev-space-6)", flexWrap: "wrap" }}>
          <h1 className="ev-display" style={{ margin: 0 }}>
            {d.about.title}
          </h1>
          <div style={{ display: "flex", gap: "var(--ev-space-3)" }}>
            <Tag bracket={false} tone="strong">
              {d.about.badge}
            </Tag>
            <Tag bracket={false}>{SITE.location[locale]}</Tag>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-9)" }}>
        <div className="ev-hero-grid" style={{ gap: "var(--ev-grid-gap)", alignItems: "start" }}>
          <div className="ev-sticky-copy" style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-5)" }}>
            <p className="ev-h3" style={{ margin: 0, maxWidth: "44ch", textTransform: "none", fontWeight: 500 }}>
              {bio.lead[locale]}
            </p>
            <p style={{ margin: 0, maxWidth: "52ch", color: "var(--ev-text-secondary)" }}>{bio.secondary[locale]}</p>
          </div>
          <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 5" }}>
            <Image src="/portrait.png" alt="Portrait of Ismail Kayadelen" fill sizes="(max-width: 860px) 100vw, 34vw" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--ev-space-9) var(--ev-gutter) 0" }}>
        <h2 className="ev-h3" style={{ marginBottom: "var(--ev-space-6)" }}>
          {d.home.experience}
        </h2>
        <ExperienceRow header titleLabel={d.home.title} companyLabel={d.home.company} yearLabel={d.work.year} />
        {workExperience.map((r) => (
          <ExperienceRow key={r.title.en + r.year} title={r.title[locale]} company={r.company} year={r.year} />
        ))}

        <h2 className="ev-h3" style={{ margin: "var(--ev-space-8) 0 var(--ev-space-6)" }}>
          {d.home.education}
        </h2>
        <ExperienceRow header titleLabel={d.home.title} companyLabel={d.home.institution} yearLabel={d.work.year} />
        {education.map((r) => (
          <ExperienceRow key={r.title.en + r.year} title={r.title[locale]} company={r.company} year={r.year} />
        ))}
      </section>

      <section style={{ paddingBottom: "var(--ev-space-9)" }}>
        <div style={{ padding: "0 var(--ev-gutter) var(--ev-space-5)" }}>
          <Eyebrow dot="none">{d.about.toolsIWorkWith}</Eyebrow>
        </div>
        <Marquee items={tools} outline size="clamp(32px,5vw,72px)" speed={32} />
      </section>
    </main>
  );
}
