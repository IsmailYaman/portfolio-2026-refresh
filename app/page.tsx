import Image from "next/image";
import { Eyebrow } from "@/components/core/eyebrow";
import { Button } from "@/components/core/button";
import { Marquee } from "@/components/core/marquee";
import { WorkCard } from "@/components/content/work-card";
import { ExperienceRow } from "@/components/content/experience-row";
import { Tag } from "@/components/core/tag";
import { SITE, projects, tools, workExperience, education } from "@/lib/data";
import { t } from "@/lib/dictionary";
import { getLocale } from "@/lib/get-locale";
import type { Locale } from "@/lib/locale";

function Hero({ locale }: { locale: Locale }) {
  const d = t(locale);
  const parts = SITE.name.trim().split(/\s+/).filter(Boolean);
  /* The hero must fit the longest word: heavy uppercase caps run ~0.62em wide,
     the column is ~0.62 of the page. */
  const longest = Math.max(1, ...parts.map((w) => w.length));
  /* Sized off the heading's own grid column (via container query), not the
     viewport — 80vw overflowed past the column on screens wider than the
     1440px page cap. */
  const heroSize = `min(var(--ev-size-hero), calc(135cqw / ${longest}))`;
  return (
    <section style={{ padding: "clamp(28px,4vw,56px) var(--ev-gutter) var(--ev-space-6)" }}>
      <div className="ev-hero-grid" style={{ gap: "var(--ev-grid-gap)", alignItems: "start" }}>
        <div className="ev-sticky-copy" style={{ containerType: "inline-size" }}>
          <h1 className="ev-hero" style={{ margin: 0, fontSize: heroSize, overflowWrap: "normal" }}>
            I&rsquo;m
            {parts.map((w, i) => (
              <span key={i}>
                <br />
                {w}
              </span>
            ))}
          </h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-5)", paddingTop: "10px" }}>
          <p className="ev-label" style={{ margin: 0, maxWidth: "34ch" }}>
            {d.home.heroIntro}
          </p>
          <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 5" }}>
            <Image src="/portrait.png" alt="Portrait of Ismail Kayadelen" fill sizes="(max-width: 768px) 100vw, 34vw" style={{ objectFit: "cover" }} priority />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "var(--ev-space-6)",
          paddingTop: "var(--ev-space-4)",
          borderTop: "1px solid var(--ev-border-hairline)",
        }}
      >
        <Eyebrow>{d.home.scrollToExplore}</Eyebrow>
        <Eyebrow align="right" dot="none">
          {d.home.featuredWorks}
        </Eyebrow>
      </div>
    </section>
  );
}

function Featured({ locale }: { locale: Locale }) {
  const d = t(locale);
  return (
    <section style={{ padding: "var(--ev-space-8) var(--ev-gutter)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--ev-grid-gap)" }}>
        {projects.slice(0, 2).map((it) => (
          <WorkCard key={it.title} title={it.title} category={it.type} year={it.year} image={it.image} ratio={it.ratio} href={`/work/${it.slug}`} viewLabel={d.work.viewLabel} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--ev-space-8)" }}>
        <Button variant="outline" size="lg" arrow href="/work">
          {d.home.viewAllWorks}
        </Button>
      </div>
    </section>
  );
}

function Services({ locale }: { locale: Locale }) {
  const d = t(locale);
  return (
    <section className="ev-inverse" style={{ padding: "var(--ev-space-9) 0", overflow: "hidden" }}>
      <div style={{ padding: "0 var(--ev-gutter) var(--ev-space-7)" }}>
        <Eyebrow inverse dot="paper">
          {d.home.whatIDo}
        </Eyebrow>
        <p className="ev-h2" style={{ marginTop: "var(--ev-space-4)", maxWidth: "22ch" }}>
          {d.home.hiIAm} {SITE.name} — {SITE.tagline[locale]}
        </p>
      </div>
      <Marquee items={tools.slice(0, 4)} inverse size="clamp(40px,7vw,96px)" speed={30} />
      <div style={{ padding: "var(--ev-space-7) var(--ev-gutter) 0" }}>
        <Eyebrow inverse dot="none">
          {d.home.otherTools}
        </Eyebrow>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--ev-space-3)", marginTop: "var(--ev-space-4)" }}>
          {tools.map((tool) => (
            <Tag key={tool} bracket={false} tone="inverse">
              {tool}
            </Tag>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience({ locale }: { locale: Locale }) {
  const d = t(locale);
  return (
    <section style={{ padding: "var(--ev-space-9) var(--ev-gutter)" }}>
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
  );
}

export default async function Home() {
  const locale = await getLocale();
  return (
    <main>
      <Hero locale={locale} />
      <Featured locale={locale} />
      <Services locale={locale} />
      <Experience locale={locale} />
    </main>
  );
}
