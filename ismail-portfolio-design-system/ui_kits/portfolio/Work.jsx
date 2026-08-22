function Work({ onOpen }) {
  const p = window.EV_DATA.projects;
  return (
    <main>
      <section style={{ padding: "clamp(28px,4vw,56px) var(--ev-gutter) var(--ev-space-7)" }}>
        <DS.Eyebrow>Selected work — 2019 / 2025</DS.Eyebrow>
        <h1 className="ev-display" style={{ margin: "var(--ev-space-4) 0 0" }}>Work</h1>
      </section>
      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-9)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--ev-grid-gap)" }}>
          {p.map((it, i) => (
            <DS.WorkCard key={it.title} {...it} onOpen={onOpen} style={{ marginTop: i % 2 ? "var(--ev-space-8)" : 0 }} />
          ))}
        </div>
      </section>
    </main>
  );
}
