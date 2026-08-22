import Image from "next/image";
import { Eyebrow } from "@/components/core/eyebrow";
import { Button } from "@/components/core/button";
import { Marquee } from "@/components/core/marquee";
import { WorkCard } from "@/components/content/work-card";
import { ExperienceRow } from "@/components/content/experience-row";
import { Tag } from "@/components/core/tag";
import { SITE, projects, tools, workExperience, education } from "@/lib/data";

function Hero() {
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
        <div style={{ containerType: "inline-size", position: "sticky", top: "96px" }}>
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
            Hi, I&rsquo;m currently working at{" "}
            <a href="https://notive.nl" style={{ color: "var(--ev-text-primary)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              Notive
            </a>{" "}
            as a fullstack developer and freelancer at{" "}
            <a href="https://yamotion.com" style={{ color: "var(--ev-text-primary)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              YAMOTION
            </a>
            .
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
        <Eyebrow>Scroll to explore</Eyebrow>
        <Eyebrow align="right" dot="none">
          Featured works
        </Eyebrow>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section style={{ padding: "var(--ev-space-8) var(--ev-gutter)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--ev-grid-gap)" }}>
        {projects.slice(0, 2).map((it) => (
          <WorkCard key={it.title} title={it.title} category={it.type} year={it.year} image={it.image} ratio={it.ratio} href={`/work/${it.slug}`} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--ev-space-8)" }}>
        <Button variant="outline" size="lg" arrow href="/work">
          View all works
        </Button>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="ev-inverse" style={{ padding: "var(--ev-space-9) 0", overflow: "hidden" }}>
      <div style={{ padding: "0 var(--ev-gutter) var(--ev-space-7)" }}>
        <Eyebrow inverse dot="paper">
          What I do
        </Eyebrow>
        <p className="ev-h2" style={{ marginTop: "var(--ev-space-4)", maxWidth: "22ch" }}>
          Hi, I am {SITE.name} — {SITE.tagline}
        </p>
      </div>
      <Marquee items={tools.slice(0, 4)} inverse size="clamp(40px,7vw,96px)" speed={30} />
      <div style={{ padding: "var(--ev-space-7) var(--ev-gutter) 0" }}>
        <Eyebrow inverse dot="none">
          Other tools
        </Eyebrow>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--ev-space-3)", marginTop: "var(--ev-space-4)" }}>
          {tools.map((t) => (
            <Tag key={t} bracket={false} tone="inverse">
              {t}
            </Tag>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section style={{ padding: "var(--ev-space-9) var(--ev-gutter)" }}>
      <h2 className="ev-h3" style={{ marginBottom: "var(--ev-space-6)" }}>
        Experience
      </h2>
      <ExperienceRow header />
      {workExperience.map((r) => (
        <ExperienceRow key={r.title + r.year} title={r.title} company={r.company} year={r.year} />
      ))}

      <h2 className="ev-h3" style={{ margin: "var(--ev-space-8) 0 var(--ev-space-6)" }}>
        Education
      </h2>
      <ExperienceRow header companyLabel="Institution" />
      {education.map((r) => (
        <ExperienceRow key={r.title + r.year} title={r.title} company={r.company} year={r.year} />
      ))}
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <Services />
      <Experience />
    </main>
  );
}
