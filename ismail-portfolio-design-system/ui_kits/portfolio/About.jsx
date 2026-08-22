function About() {
  const t = useEV();
  const d = window.EV_DATA;
  return (
    <main>
      <section style={{ padding: "clamp(28px,4vw,56px) var(--ev-gutter) var(--ev-space-7)" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--ev-space-6)", flexWrap: "wrap" }}>
          <h1 className="ev-display" style={{ margin: 0 }}>About me</h1>
          <div style={{ display: "flex", gap: "var(--ev-space-3)" }}>
            <DS.Tag bracket={false} tone="strong">Brand designer</DS.Tag>
            <DS.Tag bracket={false}>Berlin, Germany</DS.Tag>
          </div>
        </div>
        <img src="../../assets/images/about-wide.png" alt="Studio"
          style={{ width: "100%", aspectRatio: "21 / 9", objectFit: "cover", borderRadius: "var(--ev-radius-lg)", marginTop: "var(--ev-space-6)" }} />
      </section>

      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-9)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,2fr) minmax(180px,.7fr)", gap: "var(--ev-grid-gap)", alignItems: "end" }}>
          <p className="ev-h3" style={{ maxWidth: "44ch", textTransform: "none", fontWeight: 500 }}>
            I am a passionate and innovative brand designer with over a decade of experience. My journey began with a deep appreciation for visual storytelling and a keen eye for design, driving me to craft identities that inspire and connect.
          </p>
          <img src="../../assets/images/signature.png" alt="Signature" style={{ width: "160px", justifySelf: "end" }} />
        </div>
      </section>

      <section className="ev-inverse" style={{ padding: "var(--ev-space-9) var(--ev-gutter)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--ev-space-7)" }}>
          <DS.StatCounter inverse value="150" suffix="+" label="Project completed" />
          <DS.StatCounter inverse value="12" suffix="+" label="Years of experience" />
          <DS.StatCounter inverse value="8" suffix="M" label="Revenue last year" />
        </div>
      </section>

      <section style={{ padding: "var(--ev-space-9) var(--ev-gutter)" }}>
        <h2 className="ev-h4" style={{ marginBottom: "var(--ev-space-6)" }}>Work experience</h2>
        <DS.ExperienceRow header />
        {d.experience.map((r) => <DS.ExperienceRow key={r.title} {...r} />)}
      </section>

      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-9)" }}>
        <DS.Eyebrow>Awards &amp; recognition</DS.Eyebrow>
        <div style={{ marginTop: "var(--ev-space-5)" }}>
          {d.awards.map((a) => <DS.AwardRow key={a.title} {...a} />)}
        </div>
      </section>

      <section style={{ paddingBottom: "var(--ev-space-9)" }}>
        <div style={{ padding: "0 var(--ev-gutter) var(--ev-space-5)" }}>
          <DS.Eyebrow dot="none">Worked with some popular brands</DS.Eyebrow>
        </div>
        {t.showMarquee && <DS.Marquee items={["Uniaid", "Jackson Kibby", "Admart Hub", "Pluxi Dot", "Life at D"]} outline size="clamp(32px,5vw,72px)" speed={32} />}
      </section>
    </main>
  );
}
