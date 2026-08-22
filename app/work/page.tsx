import { Eyebrow } from "@/components/core/eyebrow";
import { WorkCard } from "@/components/content/work-card";
import { projects } from "@/lib/data";

export default function Work() {
  return (
    <main>
      <section style={{ padding: "clamp(28px,4vw,56px) var(--ev-gutter) var(--ev-space-7)" }}>
        <Eyebrow>Selected work — 2022 / 2026</Eyebrow>
        <h1 className="ev-display" style={{ margin: "var(--ev-space-4) 0 0" }}>
          Work
        </h1>
      </section>
      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-9)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--ev-grid-gap)" }}>
          {projects.map((it) => (
            <WorkCard key={it.title} title={it.title} category={it.type} year={it.year} image={it.image} ratio={it.ratio} href={`/work/${it.slug}`} />
          ))}
        </div>
      </section>
    </main>
  );
}
