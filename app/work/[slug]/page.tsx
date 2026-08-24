import Image from "next/image";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/core/eyebrow";
import { Button } from "@/components/core/button";
import { Tag } from "@/components/core/tag";
import { CaseMeta } from "@/components/content/case-meta";
import { WorkCard } from "@/components/content/work-card";
import { projects, getProject } from "@/lib/data";
import { t } from "@/lib/dictionary";
import { getLocale } from "@/lib/get-locale";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function WorkDetail({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const locale = await getLocale();
  const d = t(locale);
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);
  const paragraphs = project.fullDescription[locale].split("\n\n");

  return (
    <main>
      <section style={{ padding: "clamp(28px,4vw,56px) var(--ev-gutter) var(--ev-space-6)" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: project.ratio }}>
          <Image src={project.image} alt={project.title} fill sizes="100vw" style={{ objectFit: "cover" }} priority />
        </div>
      </section>
      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-9)" }}>
        <div className="ev-case-grid" style={{ gap: "var(--ev-grid-gap)" }}>
          <div>
            <h1 className="ev-h1" style={{ margin: 0 }}>
              {project.title}
            </h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-4)", maxWidth: "62ch", marginTop: "var(--ev-space-6)" }}>
              {paragraphs.map((p, i) => (
                <p key={i} className="ev-lead" style={{ color: "var(--ev-text-secondary)" }}>
                  {p}
                </p>
              ))}
            </div>

            <Eyebrow style={{ marginTop: "var(--ev-space-8)" }}>{d.work.highlights}</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-4)", marginTop: "var(--ev-space-5)", maxWidth: "62ch" }}>
              {project.highlights[locale].map((h) => (
                <div key={h} style={{ display: "flex", gap: "var(--ev-space-3)", borderTop: "1px solid var(--ev-border-hairline)", paddingTop: "var(--ev-space-4)" }}>
                  <span className="ev-label">—</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="ev-case-sidebar" style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-6)" }}>
            <CaseMeta
              style={{ gridTemplateColumns: "1fr", borderTop: "none" }}
              items={[
                { label: d.work.year, value: project.year },
                { label: d.work.role, value: project.role[locale] },
                { label: d.work.duration, value: project.duration[locale] },
              ]}
            />
            <div style={{ display: "flex", gap: "var(--ev-space-3)", flexWrap: "wrap" }}>
              {project.tags.map((tag) => (
                <Tag key={tag} bracket={false}>
                  {tag}
                </Tag>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-3)" }}>
              {project.liveUrl && (
                <Button variant="solid" size="sm" arrow href={project.liveUrl}>
                  {project.buttonLabel?.[locale]}
                </Button>
              )}
              {project.secondaryUrl && (
                <Button variant="outline" size="sm" href={project.secondaryUrl}>
                  {project.secondaryButtonLabel?.[locale]}
                </Button>
              )}
            </div>
          </aside>
        </div>
      </section>
      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-9)" }}>
        <Eyebrow>{d.work.nextProjects}</Eyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--ev-grid-gap)", marginTop: "var(--ev-space-5)" }}>
          {others.map((it) => (
            <WorkCard key={it.title} title={it.title} category={it.type} year={it.year} image={it.image} ratio={it.ratio} href={`/work/${it.slug}`} size="sm" viewLabel={d.work.viewLabel} />
          ))}
        </div>
      </section>
    </main>
  );
}
