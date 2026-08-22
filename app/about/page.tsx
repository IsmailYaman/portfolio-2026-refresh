import Image from "next/image";
import { Eyebrow } from "@/components/core/eyebrow";
import { Tag } from "@/components/core/tag";
import { Marquee } from "@/components/core/marquee";
import { StatCounter } from "@/components/core/stat-counter";
import { ExperienceRow } from "@/components/content/experience-row";
import { bio, projects, tools, workExperience, education } from "@/lib/data";

export default function About() {
  return (
    <main>
      <section style={{ padding: "clamp(28px,4vw,56px) var(--ev-gutter) var(--ev-space-7)" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--ev-space-6)", flexWrap: "wrap" }}>
          <h1 className="ev-display" style={{ margin: 0 }}>
            About me
          </h1>
          <div style={{ display: "flex", gap: "var(--ev-space-3)" }}>
            <Tag bracket={false} tone="strong">
              Web developer &amp; designer
            </Tag>
            <Tag bracket={false}>Rotterdam, Netherlands</Tag>
          </div>
        </div>
        <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", marginTop: "var(--ev-space-6)" }}>
          <Image src="/portrait.png" alt="Portrait of Ismail Kayadelen" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 15%" }} />
        </div>
      </section>

      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-9)" }}>
        <p className="ev-h3" style={{ maxWidth: "44ch", textTransform: "none", fontWeight: 500 }}>
          {bio.lead}
        </p>
        <p style={{ marginTop: "var(--ev-space-5)", maxWidth: "52ch", color: "var(--ev-text-secondary)" }}>{bio.secondary}</p>
      </section>

      <section className="ev-inverse" style={{ padding: "var(--ev-space-9) var(--ev-gutter)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "var(--ev-space-7)" }}>
          <StatCounter inverse value="4" suffix="+" label="Years of experience" />
          <StatCounter inverse value={String(projects.length)} suffix="" label="Projects shipped" />
        </div>
      </section>

      <section style={{ padding: "var(--ev-space-9) var(--ev-gutter)" }}>
        <h2 className="ev-h4 ev-accent-heading" style={{ marginBottom: "var(--ev-space-6)" }}>
          Experience
        </h2>
        <ExperienceRow header />
        {workExperience.map((r) => (
          <ExperienceRow key={r.title + r.year} title={r.title} company={r.company} year={r.year} />
        ))}

        <h2 className="ev-h4 ev-accent-heading" style={{ margin: "var(--ev-space-8) 0 var(--ev-space-6)" }}>
          Education
        </h2>
        <ExperienceRow header />
        {education.map((r) => (
          <ExperienceRow key={r.title + r.year} title={r.title} company={r.company} year={r.year} />
        ))}
      </section>

      <section style={{ paddingBottom: "var(--ev-space-9)" }}>
        <div style={{ padding: "0 var(--ev-gutter) var(--ev-space-5)" }}>
          <Eyebrow dot="none">Tools I work with</Eyebrow>
        </div>
        <Marquee items={tools} outline size="clamp(32px,5vw,72px)" speed={32} />
      </section>
    </main>
  );
}
