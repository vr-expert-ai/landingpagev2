# Enterprise Landing Page — Design & Build Plan

ai.vr-expert.com · "AI Glasses for Enterprise" · v1, 8 June 2026
Sibling spec to Content-Template-Plan.md and Meta-Tag-Formulas.md. Logic ties back to SEO-GEO-Strategy-and-Operations.md (§3.7 nomenclature, §6.2 schema, §6.3 metas, §6.4 architecture, §7.3 category-educator GEO). This document is the design + SEO/GEO blueprint for one new page; it does **not** contain final copy (that goes to a filled content template) or final visual comps (Figma).

---

## 0. What this page is

A **semi-categorical enterprise landing page** — the model is a marketplace category-education page (e.g. bol.com's "PCs" page): the page mostly *teaches* (what AI glasses are, the types, the brands, the enterprise use cases, how to choose) and *sells lightly* (product tiles with add-to-cart, plus links into the brand and use-case category pages). It is the B2B narrative entry point that sits above the catalog and feeds traffic down into it.

Two jobs, in priority order:

1. **Educate & rank/cite** — own the head term *AI glasses for business / enterprise* and the surrounding definitional + use-case cluster, for both Google and AI answer engines (the §7.3 category-educator play, applied to a single high-intent commercial-informational page).
2. **Route to purchase** — every section ends in a door: a brand page, a use-case page, a product tile (add-to-cart / quote), or the demo/quote forms.

It must read as **fresh and premium** — closer to the Viture / AeroSense references than to a standard catalog category — while staying inside the VR Expert design system (colors, Poppins/Inter, 4px rounding). New components are encouraged; brand-breaking restyles are not.

---

## 1. Placement, URL & nav

| Item | Decision |
| --- | --- |
| URL | `/ai-glasses-for-business` (English master). Rationale: "[category] for business/enterprise" is exactly where B2B keyword demand lives (Strategy §6.3/§6.4); slug uses the structural name **AI Glasses** per §3.7 rule 1, not "smart glasses". Alt to confirm with Geraldo: `/enterprise`. |
| Page type | New top-level landing page — *not* the `/ai-glasses` category template. It links **to** the category, brand and application pages; it does not replace them. |
| Nav entry | Primary nav CTA or "For Business" entry in the header; also linked from homepage hero/section and footer (Services/Business block). Reachable in ≤1 click from home. |
| Breadcrumb | `Home › AI Glasses for Business` (BreadcrumbList schema, §6.2). |
| Canonical/i18n | Self-referencing canonical; full reciprocal hreflang across the 8 storefronts / 7 languages once the URL/hreflang decision (Strategy §11) lands. Educator effect doesn't transfer across languages — this page needs native localization, not raw MT (§7.3 req. 5). |

---

## 2. Brand foundation + the "fresh layer"

### 2.1 Extracted brand tokens (from the VR Expert UI-kit styles file)

These are the live system values — design strictly to them.

**Color** (token → hex):

- Primary action: `orange #FF9057` (hover `#E58A59`, border `#D27D4E`, tint `#FFF4EE`)
- Secondary: `teal #00BABF` (hover `#0BA0A4`, tint `#C3F0ED`)
- Text: `charcoal #363636` (headings), `body #525252`, `muted #6B7280`
- Lines: `border #D0D5DD`, `borderS #EAECF0`, card `#D0D0D0`, input `#E8E8E8`
- Surfaces: `white #FFFFFF`, `bg #F2F4F7`, `bgS #FBFBFB`, `bgMuted #F5F5F5`
- Dark surfaces (footer family — reuse for the cinematic hero/CTA): `#1F2023`, `#26272B`, border `#404040`
- Status: green `#12B76A`, red `#D8232A`
- Page background convention: warm off-white `#faf9f5`

**Type:** `Poppins` for headings (700/600), `Inter` for body/UI (400/500/600). Display sizes (new, for this page's big-number moments) extend Poppins upward — see §9.

**Radius:** **4px** is the system default (dominant in the kit). 8px allowed for large cards/containers, 6px for minor chips. No pills except existing tab/badge components. Keep 4px on buttons, inputs, tiles.

**Existing components to reuse, not reinvent:** Header, TrustStrip, Footer, Breadcrumbs, PillTabs, QuantitySelector, BrandMark, AnnouncementBanner, BtnPrimary (orange, 48px, r4, Inter 700), BtnTealOutline, BtnGhost, BtnText, BtnReadMore.

### 2.2 What the references contribute (and how they map to our brand)

The references define the *new* interaction/visual vocabulary this page adds. Translated into VR Expert tokens:

| Reference | Pattern to borrow | Mapped to our brand |
| --- | --- | --- |
| **Viture** (video) | Cinematic dark hero, product reveal, huge display typography, light/dark section alternation, big stat numbers (135in, 10%) | Dark hero on `#1F2023`/`#26272B`; orange `#FF9057` as the single glow/accent (not Viture's red); Poppins display weights; alternate dark sections with `#faf9f5`/white light sections |
| **AeroSense** (img 1) | Interactive image with floating "+" hotspot labels (Climatic conditions, Wind speed…) | "Anatomy of AI glasses" / "AI glasses at work" annotated hero — hotspots in white 4px cards, charcoal text, orange `+` |
| **AeroSense** (img 1) | Big % stat cards with glowing rounded accent shape | Benefit stat cards: Poppins display number, `+%`, glow recolored to `orangeL #FFF4EE` → `orange` / `tealL #C3F0ED` → `teal` |
| **AeroSense** (img 2) | "With AI / Without AI" comparison line chart, `+30%` callout pill | ROI / efficiency comparison module (§4.5); callout pill in teal or green `#12B76A` |
| Both | Small pill category badge ("Benefit received", "Project Implementation") | Reuse existing PillTabs/badge style, charcoal text on white, 4px |

**Rule:** borrow the *layout energy and interaction*, never the source palette. Everything renders in orange/teal/charcoal/neutrals. The page should look like it was always part of the system — just the most ambitious page in it.

---

## 3. Page architecture — section-by-section

Order is deliberate: the highest-value extractable content (definition, types, use-cases, comparison) sits high; commerce tiles and conversion repeat down the page. Light/dark rhythm follows the Viture reference.

| # | Section | Tone | Purpose | Interactivity | Commerce / links | SEO/GEO role |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | **Hero** | Dark | One-line definition + promise: "AI glasses for the enterprise." H1, sub-deck, dual CTA (Explore / Book a demo) | Subtle motion: cinematic reveal, animated glow; optional product silhouette | CTA → demo + ↓ scroll | H1 carries the head term; first paragraph = the citable one-line answer (GEO) |
| 2 | **TrustStrip** | Light | Distributor badges, "official reseller", shipping EU/US, B2B support | static (existing component) | — | E-E-A-T signal |
| 3 | **Annotated "AI glasses at work"** | Light | Interactive hero image with hotspot pins explaining capabilities (camera, display, voice AI, translation, remote assist) | **Hotspot explorer** (§4.1) | each pin → relevant use-case/application page | Use-case cluster seeding; alt-text + visible labels are indexable |
| 4 | **What are AI glasses? (definition)** | Light | 2–3 sentence definition + "vs smart glasses vs AR glasses" micro-explainer | Expandable "Read more" (existing BtnReadMore) | link to glossary/blog pillar | Definitional GEO block; nomenclature co-occurrence (§3.7) |
| 5 | **Types / form factors** | Light | The "categorical" core — card row of glasses types (display vs audio-only, monocular vs binocular, assisted-reality vs AR) | **Type selector / filter tabs** (PillTabs) that re-filter the product tiles below | each type → filtered category view | ItemList; matches "types of" queries |
| 6 | **Shop by brand** | Light | Brand grid: Rokid, XReal, RealWear, Vuzix… logo + 1-liner + "View range" | hover reveal; brand logos | each → `/ai-glasses/[brand]` brand page | Brand cluster; `[brand] distributor/reseller` demand (§6.4) |
| 7 | **Enterprise use cases** | Light/Dark | The emotional + practical heart: 4–6 use cases (Remote support, Live translation, AI assistant, Virtual desktop, Training, Logistics/pick-by-vision) | **Use-case explorer** (§4.2): click a use case → panel with problem, how AI glasses solve it, mini-stat, recommended device | each → `/ai-glasses/[application]` use-case page + recommended product tile | Use-case keyword cluster (the §7.3 GEO map); on-site home links |
| 8 | **Benefits / proof stats** | Dark | Big-number benefit cards (e.g. "−43% resolution time", "+30% first-time-fix", "×3 training throughput") | **Animated count-up** stat cards (§4.4), AeroSense-style glow | — | Information-gain stats → AI citation (§7.3); use *real* deployment data, attributed |
| 9 | **Compare: with vs without AI glasses** | Light | ROI/efficiency comparison — the AeroSense "with/without" chart, plus a small spec/brand comparison table | **Comparison visualizer** (§4.5) + **spec compare** (§4.3) | "Compare full range" → category; add shortlisted devices to cart | Comparison cluster; extractable table = high AI-citation format |
| 10 | **Find your AI glasses (guided selector)** | Light | 3–4 question picker (use case → environment → display need → budget) → recommended devices | **Selector wizard** (§4.6) | results = product tiles (add-to-cart / quote) | Captures mid-funnel; internal links to matched products |
| 11 | **Recommended products** | Light | Curated product tiles (best-sellers / editor's picks) | tiles with QuantitySelector + add-to-cart; "Often bought together" | add-to-cart, → product pages, → quote | Product+Offer schema per tile; commerce GEO (§7.1) |
| 12 | **Why VR Expert (enterprise)** | Light | 4 pillars: official distributor, global shipping, expert/config services, volume pricing | static cards (reuse "Why Choose AI Expert") | → quote / contact | E-E-A-T; conversion reassurance |
| 13 | **Success stories** | Light | 2–3 deployment cards (industry tag + result) | carousel | → case study / blog | E-E-A-T + information gain |
| 14 | **FAQ** | Light | 8–12 real B2B buyer questions, question-form headings | accordion (existing pattern) | inline links to relevant sections/pages | FAQPage schema (§6.2); top AI-citation format |
| 15 | **Final CTA band** | Dark | "Equip your team." Book a demo / Request volume quote | dark CTA card w/ arrow (AeroSense-style) | demo + quote forms | conversion |
| 16 | **Footer** | Dark | Existing footer — fix legacy "VR Headsets" copy to AI Glasses taxonomy (§6.4 launch note) | static | full nav | crawl/links |

The "bol.com PCs page" feel comes from sections 3–11: educational up top, brand/type browsing in the middle, and live product tiles + guided selection toward the bottom — informative first, shoppable throughout.

---

## 4. Interactive modules — specs

Each module: what it does, interaction, data source, fallback (no-JS / SEO), accessibility.

### 4.1 Annotated hotspot hero ("AI glasses at work")
- **Does:** A product/scene image with 4–6 floating `+` hotspots; click/hover opens a small white 4px card explaining that capability and linking to the matching use-case page.
- **Interaction:** hover (desktop) / tap (mobile) → expand label; only one open at a time; keyboard-tabbable hotspots.
- **Brand:** white cards, charcoal text, orange `+`; soft shadow; 4px radius.
- **Fallback/SEO:** all labels rendered in DOM (not canvas) with real `<a>` links and image `alt` — fully indexable, works without JS.
- **A11y:** each hotspot is a `<button>`/`<a>` with `aria-label`; focus-visible ring in orange.

### 4.2 Use-case explorer
- **Does:** Tab/card list of enterprise use cases; selecting one swaps a detail panel (problem → AI-glasses solution → 1 stat → recommended device tile + "Explore use case" link).
- **Interaction:** PillTabs across the top (existing component) or left rail on desktop; animated panel cross-fade; deep-linkable via `#use-case=remote-support`.
- **Data:** content from the use-case content cluster; recommended device from catalog.
- **Fallback/SEO:** all panels server-rendered and present in DOM (visually toggled), so every use case's text + link is crawlable; tabs are anchor links.

### 4.3 Brand / spec comparison table
- **Does:** Compact comparison of 3–4 featured devices across key specs (display, camera, weight, battery, OS, best-for).
- **Interaction:** add/remove device columns; sticky first column; "add to cart" / "quote" per column; highlight differences.
- **Brand:** charcoal headers, teal accent for "best" values, 4px cells, zebra `#FBFBFB`.
- **Fallback/SEO:** rendered as a real HTML `<table>` (highest-value AI-extraction format) with full data even before JS enhances it.

### 4.4 Animated benefit stat cards
- **Does:** Big Poppins display numbers that count up on scroll-into-view; AeroSense-style glowing rounded accent behind each.
- **Interaction:** IntersectionObserver triggers count-up once; respects `prefers-reduced-motion` (shows final value immediately).
- **Brand:** glow uses `orangeL/teal/tealL`, never the source lime; number in charcoal; `%`/`×` superscript.
- **Content rule:** only real, sourced figures (deployment data / device tests) — these are the §7.3 information-gain ingredients and must be attributable.

### 4.5 With-vs-without comparison visualizer
- **Does:** The AeroSense "Efficiency with AI / Without" chart — two lines, `+30%`-style callout pill; toggle metrics (resolution time, first-time-fix, training time).
- **Interaction:** metric toggle; animated line draw on view; callout pill in green `#12B76A` or teal.
- **Tech:** lightweight inline SVG or Chart.js; numbers from real data.
- **Fallback:** static figure + a text sentence stating the delta (so the claim is extractable without the chart).

### 4.6 "Find your AI glasses" guided selector
- **Does:** 3–4 step picker (primary use case → environment: hands-free/industrial vs office → display needed? → team size/budget band) → returns 1–3 recommended devices as tiles.
- **Interaction:** stepper with progress; back/restart; results add-to-cart or request-quote; "not sure? talk to an expert" escape hatch.
- **Brand:** orange primary buttons, teal selected-state, 4px throughout.
- **Fallback/SEO:** progressive enhancement — without JS, collapses to a static "choose by use case / by brand" link grid (still useful, still crawlable). The wizard is conversion UX, not indexable content, so no SEO dependency on it.

### Cross-cutting interaction rules
- One motion language: ease-out, 200–400ms, no bounce; reduced-motion path everywhere.
- Every interactive element has a non-JS fallback that preserves links + text for crawlers (server-rendered, §6.5 requirement).
- Touch targets ≥44px; all controls keyboard-operable; visible focus state in orange.

---

## 5. SEO layer

### 5.1 Keywords & nomenclature
- **Primary:** *AI glasses for business / for enterprise*, *enterprise AI glasses*, *AI glasses for work*.
- **Secondary (co-occurrence, per §3.7):** B2B copy **leads with "smart glasses"** where it's the natural buyer term (this is a B2B page), while the structural/category name stays **AI Glasses** in H1, URL, breadcrumb, nav. Use *AR glasses / assisted reality* as supporting synonyms in the definition block only (controlled co-occurrence, not stuffing).
- **Clusters pulled onto the page:** definitional ("what are…", "types of…"), use-case (remote support, live translation, AI assistant, virtual desktop, training), brand (`[brand] for business`, `[brand] distributor/reseller`), comparison (`vs`, `with/without`).
- Metrics policy: this plan references volume + intent only — no KD/CPC (project convention).

### 5.2 H1, title, meta (per Meta-Tag-Formulas.md)
- **H1:** `AI Glasses for Business` (structural name; optional extension "— Enterprise Smart Glasses" as on-page deck, not in H1 if it risks title/H1 drift).
- **Meta title:** `AI Glasses for Business | Volume Pricing | VR Expert AI` (≤60; category formula, drop-modifier fallback available).
- **Meta description:** category template — `Compare AI glasses for business from Rokid, XReal, RealWear and more. B2B volume pricing, expert advice and enterprise support. Ships EU & US.` (≤155).
- **OG:** `og:title` = title without brand suffix; `og:description` = meta description.

### 5.3 Heading outline (one H1; section H2s in question/term form where natural)
```
H1  AI Glasses for Business
H2  What are AI glasses? (and how they differ from smart & AR glasses)
H2  Types of enterprise AI glasses
H2  Shop AI glasses by brand
H2  Enterprise use cases
  H3 Remote support · H3 Live translation · H3 AI assistant · H3 Virtual desktop · H3 Training …
H2  The business case: with vs without AI glasses
H2  Compare top enterprise AI glasses
H2  Find the right AI glasses for your team
H2  Recommended AI glasses
H2  Why source AI glasses from VR Expert
H2  Enterprise deployment stories
H2  AI glasses for business — FAQ
```

### 5.4 Internal linking (§6.4)
- Out: → `/ai-glasses` (category), → each `/ai-glasses/[brand]`, → each `/ai-glasses/[application]` use-case page, → individual product pages (tiles), → `/quote`, → `/demo`, → blog pillar(s).
- In: linked from homepage, primary nav ("For Business"), footer, and from blog/use-case content (informational → this commercial-educational hub).
- All links plain crawlable `<a href>`; anchor text uses the taxonomy terms (fix legacy footer copy first).

### 5.5 Technical (§6.5)
- Server-rendered content (all text, links, schema) — non-negotiable; interactive modules enhance, never gate, indexable content.
- Core Web Vitals pass: lazy-load below-fold media, compress hero video/poster, no layout shift from count-up animations (reserve space).
- One canonical; hreflang set per the 8 storefronts when the URL decision lands.

---

## 6. GEO layer (§7)

- **Answer-first blocks:** the hero deck and the definition section open with a self-contained, citable one-liner ("AI glasses are head-worn devices that put a camera, display and voice AI in a hands-free form factor for frontline and knowledge work."). Front-loaded answers are what engines lift.
- **Information gain:** the benefit stats (§4.4) and with/without comparison (§4.5) carry **own data** (VR Expert deployment figures, device tests) with attribution — the single biggest citation lever in a thin category corpus (§7.3).
- **Extractable formats:** definition block, types list, comparison table, FAQ — all the formats AI engines preferentially cite. Render as real text/tables, not images.
- **Entity consistency:** Organization schema sitewide ties this page to VR Expert; product/brand naming identical across page, feed and external profiles.
- **Commerce GEO (§7.1):** product tiles carry complete Product+Offer schema → same data foundation feeds Google Shopping Graph, ChatGPT shopping, Perplexity.
- **KPIs:** citation/mention share + branded-search growth for the educational layer; assisted conversions + quote/demo starts for the commerce layer (not raw sessions — §7.3 req. 6).

---

## 7. Structured data (§6.2)

| Schema | On this page |
| --- | --- |
| `BreadcrumbList` | `Home › AI Glasses for Business` |
| `ItemList` | The recommended-products list and/or the brand/type collections (ordered list of linked products) |
| `Product` + `Offer` | Each product tile that's purchasable (price, currency, availability, condition, brand, sku, gtin) — required for AI shopping surfaces; Product-without-Offer fails ChatGPT indexing |
| `FAQPage` | The FAQ section (keep markup despite Google dropping FAQ rich results May 2026 — still parsed, correlates with AI citation) |
| `Organization` | Inherited sitewide (entity foundation) |
| `WebPage`/`CollectionPage` | Page-level type for the hub |

All JSON-LD, values matching visible content + Merchant feed, built once in the Next.js layer, populated from Strapi/Medusa so it auto-localizes. Validate via Rich Results Test + GSC Merchant Listings per region.

---

## 8. Copy direction (final copy → content template, not here)

- Tone: confident, concrete, enterprise — benefit- and outcome-led, never gadget hype. "Equip your team," not "the future is here."
- Every section earns its scroll: a claim + a proof (stat, spec, or named deployment).
- Nomenclature discipline per §3.7 (lead "smart glasses" in B2B prose, "AI Glasses" structurally).
- No prices in static copy (live in schema/feed). No keyword lists. Stats must be real and attributable.
- Produce final copy via a new **Enterprise-Landing template** in the Content-Template-Plan.md system (EN master → Strapi pipeline → per-language SEO pass).

---

## 9. Motion, display type & performance

- **Display type scale (new):** extend Poppins upward for hero + stat numbers — e.g. clamp from ~40px (mobile) to ~96–120px (desktop hero), 700 weight, tight tracking. This is the one "fresh" typographic addition; document it as a display tier in the design system.
- **Motion:** cinematic hero reveal, scroll-triggered count-ups and line-draws, hotspot expansions, panel cross-fades. One easing language (ease-out, 200–400ms). Full `prefers-reduced-motion` path (static final states).
- **Media:** hero may use a short muted looping video (like the Viture reference) with a static poster fallback; compress aggressively, lazy-load, never block LCP.
- **Performance budget:** LCP < 2.5s, CLS ~0, no animation-induced shift; defer all non-critical JS; SVG/Chart.js kept lightweight.

---

## 10. Accessibility & internationalization

- WCAG AA: contrast (charcoal on light passes; verify orange/teal on dark surfaces, adjust to hover/tint tokens where needed), keyboard operability for all modules, focus-visible, `aria` labels on hotspots/tabs/wizard, reduced-motion support.
- i18n: layouts must tolerate DE/FR text expansion (Meta-Tag-Formulas.md notes DE/FR run longer); no text baked into images (hotspot/stat labels stay as DOM text so they translate and stay indexable). Native localization of educational copy, not raw MT.

---

## 11. Build & design-system handoff

- **New components to add to the kit (4px, Poppins/Inter, brand tokens):** HotspotImage, UseCaseExplorer, CompareTable, StatCountUp, WithWithoutChart, SelectorWizard, DisplayHeading tier, DarkCtaCard. Each should be specced in Figma as additions to the existing styleguide, not forks.
- **Reuse unchanged:** Header, TrustStrip, Footer, Breadcrumbs, PillTabs, QuantitySelector, BtnPrimary/TealOutline/Ghost/Text, product tile + add-to-cart behaviour.
- **Stack fit:** static/educational content + SEO fields in Strapi (per-language `seo_h1`, `meta_title`, `meta_description`); product tiles pull from Medusa; schema templated in Next.js (§6.5). Selector/comparison logic is frontend; recommendations map to catalog SKUs.
- **Pre-launch checklist items specific to this page:** fix legacy footer anchor text; confirm `/ai-glasses-for-business` vs `/enterprise` slug; supply real deployment stats + at least 2 success stories (current Figma copy is VR-headset placeholder — must not inherit it); add page to sitemap.xml + hreflang set.

---

## 12. Open questions

1. Slug: `/ai-glasses-for-business` (SEO-aligned) vs `/enterprise` (shorter, brand-led) — confirm.
2. Hero treatment: looping product video (Viture-style) vs static annotated scene (AeroSense-style) vs both (video hero → annotated section). Recommend annotated scene as the indexable section + optional video backdrop.
3. Real data: which deployment stats / success stories can we publish and attribute? (Blocks §4.4/§4.5/§13 — the GEO information-gain layer.)
4. Does this page launch in all 8 storefronts at once, or EN/NL first with staged localization? (§7.3 says educator effect needs native copy per language.)
5. Product-tile scope: curated picks only, or live best-sellers feed from Medusa?
