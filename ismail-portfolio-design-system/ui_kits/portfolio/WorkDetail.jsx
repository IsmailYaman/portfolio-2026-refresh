function WorkDetail({ project, onOpen }) {
  const all = window.EV_DATA.projects;
  const p = all.find((x) => x.title === project) || all[0];
  const gallery = [
    "../../assets/images/work-vision-craft-1.png",
    "../../assets/images/work-vision-craft-2.png",
    "../../assets/images/work-vision-craft-3.png",
    "../../assets/images/work-vision-craft-4.png"
  ];
  return (
    <main>
      <section style={{ padding: "clamp(28px,4vw,56px) var(--ev-gutter) var(--ev-space-6)" }}>
        <img src={p.image} alt={p.title} style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: "var(--ev-radius-lg)" }} />
      </section>
      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-7)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "var(--ev-space-5)", flexWrap: "wrap" }}>
          <h1 className="ev-h1" style={{ margin: 0 }}>{p.title}</h1>
          <DS.Button variant="outline" size="sm" arrow href="#">Live link</DS.Button>
        </div>
        <div style={{ marginTop: "var(--ev-space-6)" }}>
          <DS.CaseMeta items={[{ label: "Year", value: p.year }, { label: "Category", value: p.category }, { label: "Client", value: "Uniaid Corp." }]} />
        </div>
        <p className="ev-lead" style={{ maxWidth: "62ch", marginTop: "var(--ev-space-6)", color: "var(--ev-text-secondary)" }}>
          As it pans, the Manhattan skyline emerges on the horizon, its skyscrapers reflecting the golden sunrise. The East River cuts through the frame, with the Brooklyn Bridge in view.
        </p>
      </section>
      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-8)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--ev-grid-gap)" }}>
          {gallery.map((src) => (
            <img key={src} src={src} alt="" style={{ width: "100%", aspectRatio: "7 / 6", objectFit: "cover", borderRadius: "var(--ev-radius-md)" }} />
          ))}
        </div>
      </section>
      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-9)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--ev-space-6)", borderTop: "1px solid var(--ev-border-hairline)", paddingTop: "var(--ev-space-5)" }}>
          {[["Design", "Figma, Photoshop"], ["Animation", "After Effects"], ["Development", "Framer"]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-2)" }}>
              <span className="ev-label">{k}</span>
              <span className="ev-h4">{v}</span>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-9)" }}>
        <DS.Eyebrow>Next projects</DS.Eyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--ev-grid-gap)", marginTop: "var(--ev-space-5)" }}>
          {all.filter((x) => x.title !== p.title).slice(0, 2).map((it) => (
            <DS.WorkCard key={it.title} {...it} size="sm" onOpen={onOpen} />
          ))}
        </div>
      </section>
    </main>
  );
}
