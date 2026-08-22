function Hero() {
  const t = useEV();
  const parts = (t.name || "").trim().split(/\s+/).filter(Boolean);
  /* The hero must fit any name the Tweaks panel produces: cap the display size by the
     longest word (heavy uppercase caps run ~0.62em wide, column is ~0.62 of the page). */
  const longest = Math.max(1, ...parts.map((w) => w.length));
  const heroSize = "min(var(--ev-size-hero), calc(80vw / " + longest + "))";
  return (
    <section style={{ padding: "clamp(28px,4vw,56px) var(--ev-gutter) var(--ev-space-6)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.55fr) minmax(240px,.85fr)", gap: "var(--ev-grid-gap)", alignItems: "start" }}>
        <h1 className="ev-hero" style={{ margin: 0, fontSize: heroSize, overflowWrap: "normal" }}>
          I’m{parts.map((w, i) => <React.Fragment key={i}><br />{w}</React.Fragment>)}
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-5)", paddingTop: "10px" }}>
          <p className="ev-label" style={{ margin: 0, maxWidth: "26ch" }}>
            Hi, I am {t.name}, {t.tagline}.
          </p>
          <img src="../../assets/images/hero-portrait.png" alt="Portrait"
            style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "var(--ev-radius-md)" }} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "var(--ev-space-6)", paddingTop: "var(--ev-space-4)", borderTop: "1px solid var(--ev-border-hairline)" }}>
        <DS.Eyebrow>Scroll to explore</DS.Eyebrow>
        <DS.Eyebrow align="right" dot="none">Featured works</DS.Eyebrow>
      </div>
    </section>
  );
}

function Featured({ onOpen }) {
  const p = window.EV_DATA.projects;
  return (
    <section style={{ padding: "var(--ev-space-8) var(--ev-gutter)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--ev-grid-gap)" }}>
        {p.slice(0, 4).map((it, i) => (
          <DS.WorkCard key={it.title} {...it} onOpen={onOpen} style={{ marginTop: i % 2 ? "var(--ev-space-8)" : 0 }} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--ev-space-8)" }}>
        <DS.Button variant="outline" size="lg" arrow onClick={() => onOpen && onOpen("__index")}>View all works</DS.Button>
      </div>
    </section>
  );
}

function Services() {
  const t = useEV();
  const s = window.EV_DATA.services;
  return (
    <section className="ev-inverse" style={{ padding: "var(--ev-space-9) 0", overflow: "hidden" }}>
      <div style={{ padding: "0 var(--ev-gutter) var(--ev-space-7)" }}>
        <DS.Eyebrow inverse dot="paper">What I do</DS.Eyebrow>
        <p className="ev-h2" style={{ marginTop: "var(--ev-space-4)", maxWidth: "22ch" }}>Hi, I am {t.name} — {t.tagline}</p>
      </div>
      {t.showMarquee && <DS.Marquee items={["Branding", "Web design", "UI/UX design"]} inverse size="clamp(40px,7vw,96px)" speed={30} />}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--ev-grid-gap)", padding: "var(--ev-space-7) var(--ev-gutter) 0" }}>
        {s.map((it) => (
          <figure key={it.title} style={{ margin: 0 }}>
            <img src={it.image} alt={it.title} style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: "var(--ev-radius-md)" }} />
            <figcaption className="ev-label" style={{ marginTop: "var(--ev-space-3)" }}>{it.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const rows = window.EV_DATA.experience;
  return (
    <section style={{ padding: "var(--ev-space-9) var(--ev-gutter)" }}>
      <h2 className="ev-h4" style={{ marginBottom: "var(--ev-space-6)" }}>Work experience</h2>
      <DS.ExperienceRow header />
      {rows.map((r) => <DS.ExperienceRow key={r.title} {...r} />)}
    </section>
  );
}

function Home({ onOpen }) {
  return <main><Hero /><Featured onOpen={onOpen} /><Services /><Experience /></main>;
}
