/**
 * Generates public/cv.pdf (EN) and public/cv-nl.pdf (NL) from the same data
 * the /cv page renders, so the downloadable files and the on-site CV never
 * drift apart. Also rasterizes every PDF page to public/cv-N.png /
 * public/cv-nl-N.png (via pdftocairo) and writes public/cv-pages.json with
 * the page count per locale, since the CV can span more than one page.
 *
 * Run with: npm run generate:cv
 */
import { execFileSync } from "node:child_process";
import { readdirSync, unlinkSync, writeFileSync } from "node:fs";
import { renderToFile, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { SITE, cvProfile, workExperience, education, mainStack, otherTools, socials, languages, hobbies, type ExperienceEntry } from "../lib/data";
import type { Locale } from "../lib/locale";

const INK = "#050505";
const SECONDARY = "#6E6E6B";
const HAIRLINE = "#DCDCDA";
const ACCENT = "#FF6B00";

const LABELS: Record<Locale, { profile: string; experience: string; education: string; languages: string; hobbies: string; mainStack: string; otherTools: string }> = {
  en: { profile: "Profile", experience: "Experience", education: "Education", languages: "Languages", hobbies: "Hobbies", mainStack: "Main stack", otherTools: "Other tools" },
  nl: { profile: "Profiel", experience: "Ervaring", education: "Opleiding", languages: "Talen", hobbies: "Hobby's", mainStack: "Main stack", otherTools: "Overige tools" },
};

const LANGUAGE_NAME: Record<Locale, Record<string, string>> = {
  en: { Dutch: "Dutch", Turkish: "Turkish", English: "English" },
  nl: { Dutch: "Nederlands", Turkish: "Turks", English: "Engels" },
};

const LANGUAGE_LEVEL: Record<Locale, Record<string, string>> = {
  en: { Native: "Native", Fluent: "Fluent" },
  nl: { Native: "Moedertaal", Fluent: "Vloeiend" },
};

const HOBBY: Record<Locale, Record<string, string>> = {
  en: { Gym: "Gym", Cars: "Cars", Travel: "Travel", Gaming: "Gaming" },
  nl: { Gym: "Sporten", Cars: "Auto's", Travel: "Reizen", Gaming: "Gamen" },
};

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: INK,
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 24,
    textTransform: "uppercase",
    letterSpacing: -0.5,
  },
  tagline: {
    fontFamily: "Courier",
    fontSize: 8.5,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: SECONDARY,
    marginTop: 4,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 16,
    rowGap: 3,
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: HAIRLINE,
  },
  contactItem: {
    fontFamily: "Courier",
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    color: SECONDARY,
  },
  section: { marginTop: 10 },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
    textTransform: "uppercase",
    color: ACCENT,
    marginBottom: 4,
  },
  paragraph: { fontSize: 9, lineHeight: 1.35, color: INK },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: HAIRLINE,
  },
  rowLeft: { flexDirection: "column", flexGrow: 1, flexShrink: 1, flexBasis: 0, paddingRight: 12 },
  rowTitle: { fontFamily: "Helvetica-Bold", fontSize: 9.5, textTransform: "uppercase" },
  rowDescription: { fontSize: 7.5, lineHeight: 1.25, color: SECONDARY, marginTop: 2 },
  rowYear: { fontFamily: "Courier", fontSize: 7.5, color: SECONDARY, textAlign: "right", minWidth: 100 },
  bulletList: { marginTop: 2, gap: 1.5 },
  bulletText: { fontSize: 7.5, lineHeight: 1.25, color: SECONDARY },
  footerRow: { flexDirection: "row", marginTop: 10, gap: 24 },
  footerCol: { flex: 1 },
  tagWrap: { flexDirection: "row", flexWrap: "wrap", gap: 4 },
  tag: {
    fontFamily: "Courier",
    fontSize: 7.5,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    color: INK,
    borderWidth: 1,
    borderColor: HAIRLINE,
    borderRadius: 12,
    paddingVertical: 2.5,
    paddingHorizontal: 7,
  },
});

function ExperienceRows({ items, locale }: { items: ExperienceEntry[]; locale: Locale }) {
  return (
    <>
      {items.map((item) => (
        <View key={item.title.en + item.year.en} style={styles.row} wrap={false}>
          <View style={styles.rowLeft}>
            <Text style={styles.rowTitle}>
              {item.title[locale]} — {item.company}
            </Text>
            <Text style={styles.rowDescription}>{item.description[locale]}</Text>
            {item.bullets ? (
              <View style={styles.bulletList}>
                {item.bullets[locale].map((b) => (
                  <Text key={b} style={styles.bulletText}>
                    — {b}
                  </Text>
                ))}
              </View>
            ) : null}
          </View>
          <Text style={styles.rowYear}>{item.year[locale]}</Text>
        </View>
      ))}
    </>
  );
}

function CvDocument({ locale }: { locale: Locale }) {
  const l = LABELS[locale];
  return (
    <Document title={`${SITE.name} — CV`} author={SITE.name}>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{SITE.name}</Text>
        <Text style={styles.tagline}>{SITE.tagline[locale]}</Text>

        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>{SITE.location[locale]}</Text>
          <Text style={styles.contactItem}>{SITE.email}</Text>
          {socials.map((s) => (
            <Text key={s.label} style={styles.contactItem}>
              {s.href.replace(/^https?:\/\//, "")}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{l.profile}</Text>
          <Text style={styles.paragraph}>{cvProfile[locale]}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{l.experience}</Text>
          <ExperienceRows items={workExperience} locale={locale} />
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>{l.education}</Text>
          <ExperienceRows items={education} locale={locale} />
        </View>

        <View style={styles.footerRow}>
          <View style={styles.footerCol}>
            <Text style={styles.sectionTitle}>{l.languages}</Text>
            <View style={styles.tagWrap}>
              {languages.map((lang) => (
                <Text key={lang.name} style={styles.tag}>
                  {LANGUAGE_NAME[locale][lang.name]} — {LANGUAGE_LEVEL[locale][lang.level]}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.footerCol}>
            <Text style={styles.sectionTitle}>{l.hobbies}</Text>
            <View style={styles.tagWrap}>
              {hobbies.map((h) => (
                <Text key={h} style={styles.tag}>
                  {HOBBY[locale][h]}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{l.mainStack}</Text>
          <View style={styles.tagWrap}>
            {mainStack.map((tool) => (
              <Text key={tool} style={styles.tag}>
                {tool}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{l.otherTools}</Text>
          <View style={styles.tagWrap}>
            {otherTools.map((tool) => (
              <Text key={tool} style={styles.tag}>
                {tool}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

function renderPreviewPages(prefix: string): number {
  for (const f of readdirSync("public")) {
    if (f.startsWith(`${prefix}-`) && f.endsWith(".png")) unlinkSync(`public/${f}`);
  }
  execFileSync("pdftocairo", ["-png", "-scale-to", "1600", `public/${prefix}.pdf`, `public/${prefix}`]);
  return readdirSync("public").filter((f) => f.startsWith(`${prefix}-`) && f.endsWith(".png")).length;
}

async function main() {
  await renderToFile(<CvDocument locale="en" />, "public/cv.pdf");
  console.log("Generated public/cv.pdf");
  await renderToFile(<CvDocument locale="nl" />, "public/cv-nl.pdf");
  console.log("Generated public/cv-nl.pdf");

  const pages = { en: renderPreviewPages("cv"), nl: renderPreviewPages("cv-nl") };
  writeFileSync("public/cv-pages.json", JSON.stringify(pages));
  console.log(`Generated preview images (en: ${pages.en}, nl: ${pages.nl} pages)`);
}

main();
