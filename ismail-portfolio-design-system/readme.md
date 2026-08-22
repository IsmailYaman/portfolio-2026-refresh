# Ismail — Portfolio Design System

A design system distilled from **evelyn.framer.photos** (a creative-portfolio template published by
Framerbite — kept as the literal source URL for provenance). It is the visual language of a
one-person design practice, applied here to **Ismail Kayadelen**:
**black type on white paper, oversized display grotesque, monospaced technical labels, and
photography that supplies all of the colour.**

The persona on the source site — *Ismail Kayadelen, brand and web designer based in Berlin* — is
the site's own placeholder content, not a real client of this project. Names, projects, awards
and numbers reproduced here are sample copy, kept verbatim so the tone is reproducible.

> **Provenance.** Everything in this system was read from the live site: page markup and copy
> (`/`, `/about`, `/work/vision-craft`, `/contact`), its own image assets from
> `framerusercontent.com` (copied into `assets/`), and the site's social preview render
> (`assets/reference/homepage-og.png`) used to measure type, weight and spacing.
> No Figma file, repository or font binaries were provided — see **Caveats**.

---

## CONTENT FUNDAMENTALS

**Language.** English. First person singular — the site speaks as one designer: *"I'm Ismail
Kayadelen"*, *"I am a passionate and innovative brand designer…"*. The reader is addressed only in
invitations (*"Let's chat"*, *"Get in touch"*).

**Voice.** Confident, spare, unhurried. Statements, not pitches: a role, a city, a year. No
adjective stacking in UI copy, no exclamation marks, no "we help you scale". Warmth comes from
brevity plus one soft signal (*"Limited work slot available"*).

**Casing — the system's loudest rule.**
- Display headlines: **ALL CAPS**, one to three words per line (*I'M / ISMAIL / KAYADELEN*, *ABOUT
  ME*, *LET'S CHAT*).
- Labels, eyebrows, meta, buttons, nav: **UPPERCASE monospace, wide tracking**
  (*SCROLL TO EXPLORE*, *FEATURED WORKS*, *VIEW ALL WORKS*).
- Prose paragraphs: sentence case, and the only place mixed case appears.
- Table keys are wrapped in square brackets: **[ TITLE ] [ COMPANY ] [ ROLE ] [ YEAR ]**,
  **[ 2022 ]**. Brackets are decoration, not punctuation — reuse them for any key/value pair.

**Length.** Hero statement ≤ 12 words. Section labels 1–3 words. Case-study body is a single
paragraph. Every list is short: 4 experience rows, 3 awards, 3 services, 5 projects.

**Verbatim examples**
- `HI, I AM ISMAIL KAYADELEN, BRAND AND WEB DESIGNER BASED IN BERLIN.`
- `SCROLL TO EXPLORE` · `FEATURED WORKS` · `VIEW ALL WORKS`
- `Work experience` → `Senior brand designer · Jackson Kibby, Berlin · Brand designer · 2023`
- `Let's chat` + `Limited work slot available`
- `Awards & recognition` → `Golden Lens Award — Honouring exceptional visual storytelling…`

**Emoji.** None in the interface. (The source footer credit contains one heart emoji in the
template author's byline; it is not part of the brand and is not reproduced.)

**Numbers.** Years are bare four-digit numerals in mono. Stats are display-type numerals with a
60%-size suffix: **150+**, **12+**, **8M**.

---

## VISUAL FOUNDATIONS

**Colour.** Monochrome by design. `--ev-paper` #FFFFFF and `--ev-ink` #050505 carry ~95% of every
screen; a ten-step cool neutral scale handles hairlines and secondary text. The three accents were
sampled out of the site's own artwork — electric #1F2BFF, signal #FF2C00, magenta #FE004D — and are
rationed: link hover, focus ring, text selection, the availability dot. Never an accent-filled
button, never two accents in one view. **Colour is the job of the photography, not the layout.**

**Type.** Two families. A heavy neo-grotesque for anything structural (display, headings, table
titles, buttons-as-labels are the exception) and a monospace for every label, number and meta
string. The pairing *is* the brand: 220px caps against 12px tracked mono. Display tracking is
negative (−0.035 to −0.045em) and line-height is sub-1 (0.84–0.94) so the three-line hero locks
into a solid block. Body copy is 16px/1.55 on a 62ch measure, mid-grey rather than black.

**Layout.** 1440px page, 1240px content, gutters that clamp 20→64px. Sections breathe at
72–160px. A two-column asymmetric grid (≈1.55fr / 0.85fr) runs the hero and case studies; project
tiles alternate a 64px vertical offset so the grid reads as an editorial spread, not a table of
cards. Everything is left-aligned to the same gutter; centring is reserved for a single
"view all works" button.

**Backgrounds.** Flat paper, flat ink, and photography. **No gradients**, no textures, no patterns,
no blur-blobs. The one translucency in the system is the sticky nav (72% + 14px backdrop blur).
Section changes are announced by a 1px hairline or by inverting to ink, never by a tinted panel.

**Cards & surfaces.** There are almost no cards. Content sits directly on paper, separated by
hairlines. **Nothing is rounded** — every `--ev-radius-*` token resolves to 0, so tiles, hero and
case imagery, inputs, buttons and icon buttons are all square-cornered. The only circles left in
the system are the dot glyphs of the mark and the eyebrow bullet. Shadows are effectively absent
(`--ev-shadow-md` exists for the rare floating element) — contrast and rules do the work of
elevation.

**Imagery.** Two registers, mixed deliberately: (1) **dark flash portraits** — motion-blurred
faces in red/magenta on near-black; (2) **bright product mockups** — packaging on saturated pastel
sweeps (pink, lilac, sand). Both are cool-lit, high-contrast and un-retouched-looking. Portraits
crop at 4:5, project media at 16:10, hero/case media at 21:9. No illustration, no iconographic
imagery, no stock-office smiles.

**Motion.** Functional and long. Micro-states 140ms; buttons and image scale 240ms
(`cubic-bezier(.22,.61,.36,1)`); the menu overlay wipes with a 520ms clip-path
(`cubic-bezier(.16,1,.3,1)`); headline reveals up to 900ms. One continuous animation exists — the
type marquee, ~28–34s linear, never paused. No bounce, no spring, no parallax gimmicks. Every
duration collapses to 0 under `prefers-reduced-motion`.

**Hover.** Media scales 1.04–1.045 with a white arrow badge fading up from +8px. Project titles do
not move; menu items slide 14px right while their siblings dim to 32% white. Table rows tint to
`--ev-paper-tint`. Solid buttons darken ink → `--ev-n-700`; outline buttons invert to ink fill;
links go ink → electric blue.

**Press.** 1px downward nudge on buttons. Nothing scales down, nothing flashes.

**Borders & focus.** 1px hairlines only — `--ev-n-200` on paper, 16% white on ink. Focus is a
2px paper gap plus a 2px electric-blue ring (`--ev-focus-ring`), never a glow.

**Forms.** No boxes. A mono uppercase label over a hairline-underlined field; the underline turns
ink-black on focus. One solid pill submit.

---

## ICONOGRAPHY

The source site ships **no icon library** — its UI is typographic, with only a small arrow glyph on
links and a hamburger in the nav. Two consequences:

1. **Substitution (flagged).** We standardise on **Lucide v0.544.0** (ISC), the closest free match
   to the site's thin round-cap arrow: 24px grid, 1.75px stroke, round caps and joins. The twelve
   glyphs actually needed are copied into `assets/icons/` **and** inlined in
   `components/core/Icon.jsx` so a glyph inherits `currentColor` with no network request:
   arrow-up-right, arrow-right, arrow-down, menu, x, mail, phone, map-pin, external-link, plus,
   chevron-right, instagram.
2. **Rules.** Line icons only — never filled, never duotone, never two weights in one view. Icons
   are ink or paper; an accent-coloured icon is a bug. Maximum one icon per control. **No emoji,
   no unicode symbols as icons** (↗ included — use `Icon`), no icon-only navigation without a
   text label, except the menu and close buttons.
3. **The dot is the brand's own glyph.** A 7px filled circle prefixes eyebrow labels (ink, or
   signal red for availability), and two overlapping dots stand in for the lockup mark.

**Logo.** No logo file exists in the source material — the site's own lockup is set in type. We do
not draw one: `Logo` renders the name in display caps beside an explicitly-placeholder two-dot
`Mark`. **Replace `Mark` with the real asset when it exists.** The handwritten signature graphic
from the about page is copied as-is (`assets/images/signature.png`).

---

## INDEX

**Root**
- `styles.css` — the entry point; `@import`s every token file. Consumers link this only.
- `readme.md` — this guide · `SKILL.md` — Agent-Skills wrapper.

**tokens/** — `fonts.css` (Archivo + JetBrains Mono), `colors.css`, `typography.css`,
`spacing.css` (spacing, radii — all 0, shadows, layout), `motion.css`, `base.css`
(resets + helpers `.ev-hero .ev-display .ev-h1…h4 .ev-lead .ev-body .ev-label .ev-meta
.ev-rule .ev-container .ev-section .ev-inverse`).

**components/**
- `core/` — **Button**, **Tag**, **Eyebrow**, **Marquee**, **StatCounter**, **Icon**
- `brand/` — **Logo**, **Mark**
- `navigation/` — **Navbar**, **MenuOverlay**, **FooterCTA**
- `content/` — **WorkCard**, **BlogCard**, **ExperienceRow**, **AwardRow**, **CaseMeta**
- `forms/` — **Input** (text + textarea)

Every component ships `<Name>.jsx`, `<Name>.d.ts` and `<Name>.prompt.md`; each folder has one
`@dsCard` HTML showing its states.

*Intentional additions* (no direct counterpart in the source, needed to make the system usable):
**Icon** (the site has no icon set — see above) and **BlogCard** (the blog index exists on the
source site; its card is modelled on the work tile).

**ui_kits/portfolio/** — click-through recreation of the site: homepage, about, work index,
case study, contact (`index.html` + one JSX per screen + `data.js`). Its Tweaks panel exposes
name, tagline, email, accent colour, marquee and availability; the hero auto-sizes to the longest
word of the name.

**guidelines/** — 18 foundation specimen cards (Colors, Type, Spacing, Brand).

**assets/** — `images/` (site photography, signature), `icons/` (Lucide subset),
`reference/homepage-og.png` (the source render used for measuring).

**_dev/ds-fallback.js** — dev-only shim so cards and the UI kit render before the component
bundle is generated. Harmless once `_ds_bundle.js` exists; it no-ops.

---

## CAVEATS

- **Fonts are substitutions.** The site's licensed webfonts are served by Framer and cannot be
  redistributed. Display/text → **Archivo**, labels → **JetBrains Mono** (both Google Fonts,
  chosen for matching proportions, weight and tracking behaviour). Send the real font files and
  `tokens/fonts.css` is the only file that changes.
- **Icons are substitutions** (Lucide) — see ICONOGRAPHY.
- **No source of truth beyond the live site.** No Figma, no repository, no font or logo files were
  supplied, so token values were measured from the rendered page rather than read from source.
  Spacing and radii are accurate to the eye, not to the original variable names.
- **Partner/brand logos** on the source about page are third-party marks; they are represented as
  a text marquee, not embedded.
- **Blog detail page** was not modelled as a screen (only the card). Say the word and it's next.
