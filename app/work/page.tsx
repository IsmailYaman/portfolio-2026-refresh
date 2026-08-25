import { Eyebrow } from "@/components/core/eyebrow";
import { WorkCard } from "@/components/content/work-card";
import { projects } from "@/lib/data";
import { t } from "@/lib/dictionary";
import { getLocale } from "@/lib/get-locale";

export default async function Work() {
  const locale = await getLocale();
  const d = t(locale);
  return (
    <main>
      <section style={{ padding: "clamp(28px,4vw,56px) var(--ev-gutter) var(--ev-space-7)" }}>
        <Eyebrow>{d.work.eyebrow}</Eyebrow>
        <h1 className="ev-display" style={{ margin: "var(--ev-space-4) 0 0" }}>
          {d.work.title}
        </h1>
      </section>
      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-9)" }}>
        <div className="ev-work-grid" style={{ gap: "var(--ev-grid-gap)" }}>
          {projects.map((it) => (
            <WorkCard key={it.title} title={it.title} category={it.type} year={it.year} image={it.image} ratio={it.ratio} href={`/work/${it.slug}`} viewLabel={d.work.viewLabel} />
          ))}
        </div>
      </section>
    </main>
  );
}
