# Notive Design System

**Notive** — *IT Innovation Partner.* "Wij zijn Notive, de go-to partner voor innovatieve en
technische vraagstukken." A Dutch technology consultancy of digital architects,
developers and designers that builds e-commerce, replatforming and integration solutions for
ambitious organisations. Brand promise: *buiten gebaande paden* — looking beyond the obvious to
forge new paths.

This project is the machine-readable design system distilled from Notive's 2025 brand book. Link
`styles.css` to inherit every token and font; load `_ds_bundle.js` (generated) to use the React
components under the `window.NotiveDesignSystem_943d2a` namespace.

## Sources
- **Figma:** *Notive – BrandBook 2025.fig* (mounted). Primary frames in scope:
  `/Brandguide-export-08-05-2026/Brandguide-Notive-V1` (colors, type, logo, moodboard) and
  `/Website/Open-sans2` (homepage comp). Logo geometry materialized from `/Logo`.
- Company one-liner & tagline from the brief; product copy from the website comp & brand book
  (Dutch). The reader is not assumed to have Figma access — values are captured here.

---

## CONTENT FUNDAMENTALS

**Language.** Primary language is **Dutch**. Copy is written in the **second person ("je/jij")** —
warm, direct and partner-to-partner, never corporate-formal ("u"). The company refers to itself as
**"we / wij / ons team"**.

**Voice.** Confident, forward-looking and a little bold. Notive positions itself as the team that
goes *further* than the question asked. Recurring themes: innovatie, vooruitstrevend, nieuwe wegen
/ paden banen, partnerschap, eigenaarschap & controle voor de klant.

**Tone & wordplay.** Punchy, clever, occasionally playful — the brand leans on its own name:
e.g. the out-of-home ad **"PAGE NOT FOUND. BUT NOTIVE IS."** (English, with "NOT" highlighted in
Sky Blue). Headlines are short and declarative.

**Casing.**
- Big display headlines: sentence case, often with one keyword in Sky Blue (e.g. *Oplossingen voor
  **buiten gebaande paden***).
- Eyebrows / section labels: **UPPERCASE**, wide tracking, preceded by a geometric mark bullet
  (*WIJ ZIJN NOTIVE*, *UNIEKE WERKWIJZE*, *DIENSTEN*).

**Examples (verbatim from the brand sources):**
- Tagline: *"Wij zijn Notive, de go-to partner voor innovatieve en technische vraagstukken."*
- Hero: *"Oplossingen voor buiten gebaande paden."*
- About: *"Bij Notive kijken we verder dan je digitale vraagstuk. … banen we nieuwe wegen met
  vooruitstrevende ideeën en technieken."*
- CTA: *"Klaar voor een samenwerking die jou écht helpt?"* → button *"Neem contact met ons op!"*
- Careers: *"Ook bij ons team horen?"*

**Emoji:** none. The brand never uses emoji. Iconography is geometric line icons + the brand mark.

---

## VISUAL FOUNDATIONS

**Colour.** A disciplined **60 / 30 / 10** system (brandguide §3.2):
- **Nova Blue `#001C36`** — *Primair, 60%.* Deep navy. Backgrounds, type, overlays, visual elements.
  The brand's anchor; most surfaces and all dark sections are Nova Blue.
- **Sky Blue `#42A2E2`** — *Secundair, 30%.* Fresh, friendly. Links, subtitles, highlighted words,
  active states, accent illustration.
- **Leaf Green `#0FC50F`** — *Accent, 10%.* Energetic. Reserved for **primary buttons / CTAs** and
  small "live" signals.
- **Icy White `#F8F2FF`** — soft tinted background for alternating light sections.
- Plus white and a cool neutral grey scale. See the Colors cards for full scales.

**Type.**
- **Display / headings: Stevie Sans** (geometric, modern, "professionaliteit en betrouwbaarheid").
  Stevie Sans is licensed and not on Google Fonts → **substituted with `Open Sans`** (the family
  used on notive.nl; the team's preferred substitute). *Flag: swap in the real Stevie Sans
  web-font for production if an exact match is required.*
- **Body / UI: Nunito** (friendly, rounded, highly legible — exact brand match).
- Scale: Display 80 · H1 50 · H2 40 · H3 30 · H4 20 · Body 16. Heading tracking −0.019em; body 1.6.

**Layout & shape.** Generous whitespace; ~1200px content max-width; ~96px section rhythm. **Soft,
generous corner radii** — cards `18px`, feature/hero blocks up to `28–40px`, buttons are **pills**.
The moodboard shows large-radius rounded cards used as colour/graphic blocks.

**The mark as graphic.** The geometric beeldmerk (a quarter-circle **arc** + **square** + **triangle**,
reading as an abstract "N" / signal of progress) is used three ways: as the logo, as a **large
low-opacity graphic element** cropped into dark/colour blocks, and as the **bullet** before eyebrow
labels.

**Imagery.** Real photography of workspaces & developers — **cool-toned**, natural light, blues and
greens (plants, screens). For text-over-image (heroes), a **Nova Blue overlay/gradient** (≈85–92%)
is laid over the photo so white headlines read cleanly. No illustration-style imagery.

**Surfaces & cards.** Light cards = white on a hairline `--border-subtle`, soft cool shadow
(`--shadow-sm/md`). Dark cards / CTA blocks = Nova Blue, often with the cropped mark watermark.
Tinted sections use Icy White.

**Shadows.** Restrained and **navy-tinted** (`rgba(0,28,54,…)`), never grey/black. Elevation rises
xs → lg; cards sit at sm/md, modals/popovers at lg.

**Borders & focus.** 1–1.5px hairlines in cool neutrals. **Focus ring is Sky Blue**
(`--shadow-focus`).

**Motion.** Subtle and functional — short eases (~120–180ms) on color/border/transform. Cards do a
small **hover-lift** (`translateY(-4px)` + deeper shadow). Buttons darken on hover and nudge down
1px on press. No bounces, no infinite decorative loops.

**Hover / press states.**
- Primary button: bg Leaf Green → `--leaf-600` on hover; press = 1px down.
- Secondary: Nova Blue → `--nova-700`.
- Ghost: transparent → faint `--neutral-50`, border darkens to Nova Blue.
- Links: Nova Blue → Sky Blue.

---

## ICONOGRAPHY

Notive has **no proprietary icon font**. The website comp uses **Flowbite-style outline icons**
(thin, rounded-cap line icons; e.g. `flowbite:arrow-up-outline`). For this system we standardise on
**Lucide** (CDN: `https://unpkg.com/lucide-static` or inline `<svg>`), the closest free match —
consistent **~1.8px stroke, round caps & joins**, 24px grid. *Substitution flagged.*

Rules:
- Line (outline) icons only, Nova Blue or Sky Blue, never filled/duotone.
- The **brand mark** doubles as a glyph: the solid **square** and the **arc** are used as bullets
  before eyebrow labels (`<Eyebrow bullet="square|arc">`).
- **No emoji. No unicode-symbol icons.** Use real SVGs.
- Logo & mark SVGs live in `assets/logo/` (blue + white). Don't redraw them — reference or use
  `<Logo>` / `<Mark>`.

---

## INDEX

**Root**
- `styles.css` — global entry (import this). → `tokens/{fonts,colors,typography,spacing,base}.css`
- `readme.md` — this guide. `SKILL.md` — Agent-Skills wrapper.

**tokens/** — `colors.css` (brand + scales + semantic aliases), `typography.css`, `spacing.css`
(spacing, radii, shadows, layout), `fonts.css` (Open Sans + Nunito), `base.css` (resets + helper
classes: `.nv-display/.nv-h1…`, `.nv-lead/.nv-body`, `.nv-eyebrow`).

**components/** (namespace `window.NotiveDesignSystem_943d2a`)
- `core/` — **Button**, **Tag**, **Eyebrow**, **Card**, **Avatar**
- `forms/` — **Input** (text + textarea)
- `brand/` — **Logo**, **Mark**
- `navigation/` — **Navbar**

**ui_kits/website/** — interactive Notive homepage recreation (`index.html` + `sections.jsx`).

**slides/** — branded 16:9 slide templates: `title`, `section`, `content`, `stats`, `quote`.

**guidelines/** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design
System tab.

**assets/** — `logo/` (mark, wordmark, horizontal & vertical lockups; blue + white SVG),
`images/` (cool-toned brand photography).

---

### Caveats
- **Stevie Sans → Open Sans** and **brand icons → Lucide** are substitutions (see above).
- Partner logos (PayPal, Heineken, Klarna, FedEx…) are shown as monochrome wordmarks, not embedded.
- Purple hues in older brand-book iterations are intentionally dropped — the live palette is the
  Nova/Sky/Leaf system from §3.2.
