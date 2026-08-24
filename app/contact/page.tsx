import { Eyebrow } from "@/components/core/eyebrow";
import { ContactForm } from "@/components/forms/contact-form";
import { SITE, socials } from "@/lib/data";
import { t } from "@/lib/dictionary";
import { getLocale } from "@/lib/get-locale";

export default async function Contact() {
  const locale = await getLocale();
  const d = t(locale);
  const details: { label: string; value: string; href?: string }[] = [
    { label: d.contact.location, value: SITE.location[locale] },
    { label: d.contact.email, value: SITE.email, href: `mailto:${SITE.email}` },
    ...socials.map((s) => ({ label: s.label, value: s.href.replace(/^https?:\/\//, ""), href: s.href })),
  ];

  return (
    <main>
      <section style={{ padding: "clamp(28px,4vw,56px) var(--ev-gutter) var(--ev-space-7)" }}>
        <Eyebrow dot={SITE.available ? "signal" : "ink"}>{SITE.available ? d.footer.availableStatus : d.footer.bookedStatus}</Eyebrow>
        <h1 className="ev-display" style={{ margin: "var(--ev-space-4) 0 0" }}>
          {d.contact.title}
        </h1>
      </section>
      <section style={{ padding: "0 var(--ev-gutter) var(--ev-space-9)" }}>
        <div className="ev-split-contact" style={{ gap: "clamp(32px,6vw,96px)" }}>
          <ContactForm locale={locale} />
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-6)" }}>
            {details.map((item) => (
              <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "var(--ev-space-2)", borderTop: "1px solid var(--ev-border-hairline)", paddingTop: "var(--ev-space-4)" }}>
                <span className="ev-label">[ {item.label} ]</span>
                {item.href ? (
                  <a href={item.href} className="ev-h4" style={{ textTransform: "none" }}>
                    {item.value}
                  </a>
                ) : (
                  <span className="ev-h4" style={{ textTransform: "none" }}>
                    {item.value}
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
