function Contact() {
  const t = useEV();
  const [sent, setSent] = React.useState(false);
  const details = [
    { label: "Location", value: "123 Creative Street, Brooklyn, NY 11201", icon: "map-pin" },
    { label: "Phone", value: "(718) 555-0199", icon: "phone" },
    { label: "Email", value: t.email, icon: "mail" }
  ];
  return (
    <main>
      <section style={{ padding: "clamp(28px,4vw,56px) var(--ev-gutter) var(--ev-space-7)" }}>
        <DS.Eyebrow dot={t.available ? "signal" : "ink"}>{t.available ? "Limited work slot available" : "Fully booked until spring"}</DS.Eyebrow>
        <h1 className="ev-display" style={{ margin: "var(--ev-space-4) 0 0" }}>Contact</h1>
      </section>
      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-9)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(260px,.8fr)", gap: "clamp(32px,6vw,96px)" }}>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-6)" }}>
            <h2 className="ev-h4">Get in touch</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--ev-space-6)" }}>
              <DS.Input label="Name" placeholder="Jane Doe" required />
              <DS.Input label="Email" type="email" placeholder="you@studio.com" required />
            </div>
            <DS.Input label="Subject" placeholder="Brand identity for a new studio" />
            <DS.Input label="Message" multiline rows={5} placeholder="Tell me about the project" />
            <div style={{ display: "flex", alignItems: "center", gap: "var(--ev-space-5)" }}>
              <DS.Button variant="solid" size="lg" arrow>{sent ? "Message sent" : "Send message"}</DS.Button>
              {sent && <DS.Eyebrow dot="signal">Thanks — I’ll reply within two days</DS.Eyebrow>}
            </div>
          </form>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-6)" }}>
            {details.map((d) => (
              <div key={d.label} style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-2)", borderTop: "1px solid var(--ev-border-hairline)", paddingTop: "var(--ev-space-4)" }}>
                <span className="ev-label" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <DS.Icon name={d.icon} size={14} color="var(--ev-text-secondary)" />[ {d.label} ]
                </span>
                <span className="ev-h4" style={{ textTransform: "none" }}>{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
