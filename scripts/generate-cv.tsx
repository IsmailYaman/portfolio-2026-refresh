/**
 * Generates public/cv.pdf from the same data the /cv page renders, so the
 * downloadable file and the on-site CV never drift apart.
 *
 * Run with: npm run generate:cv
 */
import { renderToFile, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { SITE, bio, workExperience, education, tools, socials, languages, hobbies, type ExperienceEntry } from "../lib/data";

const INK = "#050505";
const SECONDARY = "#6E6E6B";
const HAIRLINE = "#DCDCDA";
const ACCENT = "#FF6B00";

const styles = StyleSheet.create({
  page: {
    padding: 34,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: INK,
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 25,
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
    marginTop: 10,
    paddingTop: 10,
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
  section: { marginTop: 12 },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    textTransform: "uppercase",
    color: ACCENT,
    marginBottom: 5,
  },
  paragraph: { fontSize: 9, lineHeight: 1.4, color: INK },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: HAIRLINE,
  },
  rowLeft: { flexDirection: "column", flexGrow: 1, paddingRight: 12 },
  rowTitle: { fontFamily: "Helvetica-Bold", fontSize: 10, textTransform: "uppercase" },
  rowCompany: { fontFamily: "Courier", fontSize: 8, color: SECONDARY, marginTop: 2 },
  rowDescription: { fontSize: 8, lineHeight: 1.3, color: SECONDARY, marginTop: 2 },
  rowYear: { fontFamily: "Courier", fontSize: 8, color: SECONDARY, textAlign: "right", minWidth: 105 },
  footerRow: { flexDirection: "row", marginTop: 12, gap: 24 },
  footerCol: { flex: 1 },
  tagWrap: { flexDirection: "row", flexWrap: "wrap", gap: 5 },
  tag: {
    fontFamily: "Courier",
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    color: INK,
    borderWidth: 1,
    borderColor: HAIRLINE,
    borderRadius: 12,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
});

function ExperienceRows({ items }: { items: ExperienceEntry[] }) {
  return (
    <>
      {items.map((item) => (
        <View key={item.title.en + item.year.en} style={styles.row} wrap={false}>
          <View style={styles.rowLeft}>
            <Text style={styles.rowTitle}>{item.title.en}</Text>
            <Text style={styles.rowCompany}>{item.company}</Text>
            <Text style={styles.rowDescription}>{item.description.en}</Text>
          </View>
          <Text style={styles.rowYear}>{item.year.en}</Text>
        </View>
      ))}
    </>
  );
}

function CvDocument() {
  return (
    <Document title={`${SITE.name} — CV`} author={SITE.name}>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{SITE.name}</Text>
        <Text style={styles.tagline}>{SITE.tagline.en}</Text>

        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>{SITE.location.en}</Text>
          <Text style={styles.contactItem}>{SITE.email}</Text>
          {socials.map((s) => (
            <Text key={s.label} style={styles.contactItem}>
              {s.href.replace(/^https?:\/\//, "")}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <Text style={styles.paragraph}>{bio.lead.en}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <ExperienceRows items={workExperience} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <ExperienceRows items={education} />
        </View>

        <View style={styles.footerRow}>
          <View style={styles.footerCol}>
            <Text style={styles.sectionTitle}>Languages</Text>
            <View style={styles.tagWrap}>
              {languages.map((l) => (
                <Text key={l.name} style={styles.tag}>
                  {l.name} — {l.level}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.footerCol}>
            <Text style={styles.sectionTitle}>Hobbies</Text>
            <View style={styles.tagWrap}>
              {hobbies.map((h) => (
                <Text key={h} style={styles.tag}>
                  {h}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tools</Text>
          <View style={styles.tagWrap}>
            {tools.map((t) => (
              <Text key={t} style={styles.tag}>
                {t}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

async function main() {
  await renderToFile(<CvDocument />, "public/cv.pdf");
  console.log("Generated public/cv.pdf");
}

main();
