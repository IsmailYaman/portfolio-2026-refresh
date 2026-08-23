import { Eyebrow } from "@/components/core/eyebrow";
import { ContactForm } from "@/components/forms/contact-form";
import { SITE, socials } from "@/lib/data";

const details: { label: string; value: string; href?: string }[] = [
  { label: "Location", value: SITE.location },
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  ...socials.map((s) => ({ label: s.label, value: s.href.replace(/^https?:\/\//, ""), href: s.href })),
];

export default function Contact() {
  return (
    <main>
      <section style={{ padding: "clamp(28px,4vw,56px) var(--ev-gutter) var(--ev-space-7)" }}>
        <Eyebrow dot={SITE.available ? "signal" : "ink"}>
          {SITE.available ? "Limited work slot available" : "Fully booked until spring"}
        </Eyebrow>
        <h1 className="ev-display" style={{ margin: "var(--ev-space-4) 0 0" }}>
          Contact
        </h1>
      </section>
      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-9)" }}>
        <div className="ev-split-contact" style={{ gap: "clamp(32px,6vw,96px)" }}>
          <ContactForm />
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-6)" }}>
            {details.map((d) => (
              <div key={d.label} style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-2)", borderTop: "1px solid var(--ev-border-hairline)", paddingTop: "var(--ev-space-4)" }}>
                <span className="ev-label">[ {d.label} ]</span>
                {d.href ? (
                  <a href={d.href} className="ev-h4" style={{ textTransform: "none" }}>
                    {d.value}
                  </a>
                ) : (
                  <span className="ev-h4" style={{ textTransform: "none" }}>
                    {d.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
