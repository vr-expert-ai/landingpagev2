# VR Expert AI Design System

## Company Overview

**VR Expert** (vr-expert.com) is a global XR (extended reality) hardware distributor headquartered in the Netherlands, with offices in Germany, France, the United States, and beyond. The company sells VR headsets, AR glasses, accessories, and enterprise XR solutions from all major brands.

**AI EXPERT** is VR Expert's new sub-brand and storefront focused on **AI Glasses** — branching off the established XR-for-enterprise catalogue to target the new wave of AI-enabled smart glasses and immersive accessories. This design system reflects the **AI EXPERT direction** (the in-progress Figma rebrand) layered on top of the original VR Expert visual foundation: same orange + teal palette, same Inter/Poppins type, refreshed messaging ("Step Beyond the Screen") and refreshed AI-Glasses-led imagery + IA.

**Key surfaces:**
- New AI Expert storefront (`ai.vr-expert.com` direction — in design)
- Main e-commerce website: [vr-expert.com](https://vr-expert.com)
- Business/B2B portal
- Regional storefronts (EU + US)

---

## Sources

| Asset | Notes |
|-------|-------|
| `AI Glasses - Internal (2).fig` (Figma) | **PRIMARY** — Full AI Glasses website redesign incl. Styleguide page, Home, Header/Footer, Product (Desktop), Cart/Checkout, About, Contact, Search. Mounted as the `.fig` virtual filesystem at `/Design/` and `/Cover/`. |
| `uploads/2022-03 - VR Expert Style Guide.pdf` | Legacy PDF style guide (March 2022). Primarily covers logo usage. |
| `uploads/Styleguide.pdf` | Additional PDF reference. |
| `uploads/Logo *.svg / *.png` | All logo variants (horizontal, icon-only, white, orange, orange+white). The orange "VR arrow" mark is the **actual brand mark**. |

Figma highlights worth opening: `/Design/Styleguide/` (color + type swatches), `/Design/Home-Page/HomePageDesktopV2/` (latest home), `/Design/Header-Footer/`, `/Design/Desktop/` (product page), `/Cover/Cover---AI-Glasses-Official/` (cover key visual).

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Confident and expert** — VR Expert positions itself as the authority on XR hardware. Copy is direct and knowledgeable.
- **Accessible, not jargon-heavy** — Technical specs are presented clearly; the brand avoids over-use of acronyms unless contextually appropriate.
- **Action-oriented** — CTAs use strong imperative verbs: "Request a quote", "Add to cart", "Book a trial", "Read full story".
- **Professional but approachable** — The tone sits between enterprise formality and consumer friendliness. Not cold, not casual.

### Copy Patterns
- **Headlines**: Title Case for section headings and product names. Sentence case for body descriptions.
- **Buttons / CTAs**: Title Case ("Request a Quote", "Add to Cart"). Typically 2–4 words.
- **Product descriptions**: Clear, benefit-led. Features listed as bullet points.
- **No emoji** in UI copy. Emoji are not part of the brand vocabulary.
- **"You"-focused** messaging in CTAs and instructional copy (e.g. "Find your perfect headset").
- **Numbers**: Prices use regional format (€ for EU, $ for US). Specs use plain numerals.

### Examples from Figma
- "Defines the core design system including colors, typography, buttons, and components to ensure consistency and a cohesive experience across the product."
- "Request a quote" / "Read full story" / "Book a trial" / "Add to cart"
- Section labels: "Button Components", "Card Components", "Badge Component", "Footer"

---

## VISUAL FOUNDATIONS

### Color System
**Primary — Orange** (`#F39562`): The signature brand color. Used on all primary CTAs, links, and interactive elements. Warm, energetic, and distinctive.

**Secondary — Teal**: Light end `#C3F0ED`, web primary teal `#00BABF` (used on all teal buttons, links, and accents on the website), hover `#0BA0A4`, legacy/print `#33B7BD`.

**Navy / Brand Blue palette**: `#002855` (deepest), `#10298E`, `#0068A3` — used for dark sections, headers, and enterprise/B2B contexts.

**Text**: Charcoal Gray `#363636` (primary text), `#525252` (body), `#6B7280` (muted/supporting).

**Backgrounds**: White `#FFFFFF` (default), off-white `#F2F4F7`, near-white `#FBFBFB`, warm cream `#FFF4EE` (style guide chrome).

**Accent colors**: Red `#D8232A` (error/warning), Amber `#F7931A` (highlights), Purple `#6461FC`, Violet `#8A38F5`.

### Typography
Two-font system:
- **Poppins** — Display/heading typeface. Used for large titles, section headers, hero text. Weights: SemiBold (600), Bold (700). Tight letter-spacing (-0.02em) at display sizes.
- **Inter** — Body and UI typeface. Used for all interface text, paragraphs, labels, buttons. Weights: Regular (400), Medium (500), SemiBold (600), Bold (700).

Type scale: 12 / 14 / 16 / 18 / 20 / 22 / 26 / 32 / 48 / 60 / 72px. Line heights: 1.2 (tight, headings) / 1.5 (normal, body).

### Spacing & Layout
Base-4 spacing system: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 80 / 96px. Section gaps commonly 48–64px. Page padding typically 32–48px.

### Corner Radii
- Buttons: `4px` (square-ish, purposeful)
- Cards/panels: `8–12px`
- Badges/chips: `4–6px`
- Avatars/icons: `12px`
- Pills/tags: `9999px` (full)

### Cards
White background (`#FFFFFF`), `1px` border (`#D0D5DD` or `#DADADA`), `border-radius: 8–12px`, subtle shadow (`shadow-sm`). Product cards include image area, title, price, and CTA button. Cart item cards use `0.53px` border with `#E5E7EB`, containing product thumbnail, name, quantity selector, and price.

### Buttons
Full button system with 10 distinct variants:

| Variant | Background | Text | Border | Use case |
|---------|-----------|------|--------|----------|
| **Primary** | `#FF9057` | white | `#D27D4E` | Main CTA: "Request a Quote", "Book a Demo" |
| **Primary hover** | `#E58A59` | white | `#D27D4E` | — |
| **Teal outline** | white | `#00BABF` | `#00BABF` | "Read full story", "See the full knowledge" |
| **Teal filled** | `#00BABF` | white | `#00BABF` | Teal outline hover state, or standalone |
| **Ghost / Neutral** | white | `#363636` | `#CACACA` | "Book a trial", "Add to cart", "View More Products" |
| **Ghost teal** | white | `#00BABF` | `#CACACA` | "Business portal", "Talk to an expert" |
| **Text / ghost text** | white | `#FF9057` | none | "Contact Support" (minimal, no border) |
| **Compact read-more** | white | `#363636` | `#D0D5DD` | Small pill "Read more" with chevron, 29px height |
| **Dark** | `#363636` | white | `#363636` | Footer / premium section CTAs |
| **Disabled** | `#F2F4F7` | `#B3B3B3` | `#EAECF0` | Out of stock, unavailable actions |

- All bordered buttons have inset bottom-shadow: `inset 0px -2px 0px 0px rgba(10,13,18,0.05), inset 0 0 0 1px rgba(0,0,0,0.08)`.
- Sizes: **lg** 48px, **md** 40px, **sm** 34px, **xs** 29px (compact).
- Icon buttons: 16–20px stroke icons placed before or after text with `gap: 6px`.
- Arrow-right icons on teal link buttons. Arrow-up-right on external link buttons.

### Shadows
Layered shadow system from xs to xl. Primary button shadow uses inset approach for a pressed-border feel. Cards use `shadow-sm`. Modals/dropdowns use `shadow-lg`. Mega-menu dropdowns use `shadow-dropdown`: `0px 4px 6px -2px rgba(16,24,40,0.03), 0px 12px 16px -4px rgba(16,24,40,0.08)`.

### Navigation Header
- Desktop: white `#fff` background, `72px` height, `84px` horizontal padding.
- Logo: 32px logomark (gradient + orange dot + blur overlay) + "AI EXPERT" in Poppins Bold 24px, letter-spacing −0.03em.
- Primary nav links: Inter Bold 14px, color `#51525C`, with chevron-down icons. Items: Glasses, Accessories, Software, etc.
- Secondary nav links: Inter Medium 14px, color `#51525C`. Items: About Us, Services, Resources.
- Search bar: `#F5F5F5` background, `36px` height, `4px` radius, integrated orange (`#FF9057`) search button on right.
- Right icons: user and cart, 24px, `#363636` stroke.

### Mega Menu Dropdown
- White background, `4px` border-radius, `84px` horizontal padding, `32px` vertical padding.
- Shadow: `shadow-dropdown`.
- Category headings: Inter Bold 12px, `#6A7282`, uppercase, `0.6px` letter-spacing.
- Link items: `#FAFAFA` background, `1px solid #F2F2F2` border, `4px` radius, `10px 16px` padding.
- Link text: Inter Medium 14px, `#51525C`, letter-spacing `-0.15px`.
- Optional icons: 20px, stroke `#4B4B4B`.
- Featured card: `#FAFAFA` bg, `8px` radius, product image + title + description.

### Section Tabs
- **Pill tabs**: Container `#EBEBEB` background, `4px` radius, `8px` padding. Active tab: white background. Tab text: Inter Bold 14px, `#3F3F46`.
- **Dark variant**: Container `#26272B`, active tab `rgba(255,255,255,0.12)`, active text white.
- **Underline tabs**: Bottom border `1px solid #E8E8E8`. Active tab: `#FF9057` text + 2px bottom highlight bar.

### Accordion / Collapsible
- Items: white background, `1px solid #E8E8E8` border, `4px` radius, `16px` padding.
- Icon + label, chevron-down on right.
- Default: icon and label `#363636`, chevron `#99A1AF`.
- Active/expanded: icon and label `#00BABF`, chevron rotated 180°.
- Content area: `#FBFBFB` background, spec tables with `#F2F2F2` row dividers.

### Feature List Items
- White background, `1px solid #E8E8E8` border, `4px` radius, `12px` padding.
- Icon (20px) + text (Inter Medium 16px, `#363636`) on left, 32px chevron-down button on right.
- Hover: `#F4F4F4` background.

### Stepper
- Numbered circles: `21px`, `1px solid #EEE`, Inter 12px.
- Active step: `#FF9057` border + text, `box-shadow: 0 0 0 2px rgba(255,144,87,0.25)`.
- Inactive steps: `60%` opacity.
- Done steps: `#12B76A` background, white check icon.
- Connector lines: `80px` × `4px`, `#F5F5F5` (done: `#12B76A`).
- Labels below: Inter Medium 12px, `#6B7280` (active: `#363636` SemiBold).

### Quantity Selector
- Button group: `1px solid #D0D5DD`, `4px` radius, `shadow-xs`.
- Buttons: `44px` × `44px`, white background, `#363636` icons. Hover: `#F4F4F4`.
- Center value: Inter Medium 14px, `#696969`.
- Action buttons alongside: delete (`#A90606` stroke), edit (`#363636` stroke).

### Search
- **Compact (header)**: `#F5F5F5` bg, 36px height, 170px width, orange search button.
- **Full (page)**: white bg, `1px solid #D0D5DD`, 48px height, `shadow-xs`. Focus: orange border + ring.
- **Results dropdown**: white bg, `shadow-dropdown`, product results with thumbnail + name + price.

### Breadcrumbs
- Inter Medium 14px, `#6B7280` for links, `#363636` SemiBold for current page.
- Chevron-right separators, 16px, `#A0A0AB`.

### Pagination
- 36px × 36px buttons, `1px solid #D0D5DD`, `4px` radius.
- Active page: `#FF9057` background, white text.
- Hover: `#F4F4F4`.

### Footer
- **Main area**: `#1F2023` background, `1px solid #26272B` border, `42px 84px` padding.
- **Contact cards**: `rgba(255,255,255,0.05)` background, `1px solid #404040`, `4px` radius. Icon color: `#FF9057`. Title: white. Detail/links: `#A0A0AB`.
- **CTA strip**: Same card style, contains heading + "Book a Demo" button.
- **Link columns**: 4 columns. Heading: Inter Bold 12px, `#6A7282`, uppercase. Links: Inter 14px, `#D0D5DD`. Hover: `#FF9057`.
- **Bottom bar**: `#26272B` background, `12px 84px` padding. Copyright text: white. Social icons: 32px squares, `rgba(255,255,255,0.08)` background.

### Backgrounds & Imagery
- Full-bleed product photography on hero sections (headsets, XR environments, enterprise scenes).
- Dark navy (`#002855`, `#1A1919`) backgrounds for premium/enterprise sections.
- No hand-drawn illustrations or decorative patterns observed.
- Imagery color: Cool-toned, high-contrast tech photography. No grain or vintage filters.

### Animation
No specific animation system defined in Figma. Convention inferred: fade transitions, no bounces. Hover states use color shifts (darker fill/border on hover). Press states lighten or use inset shadow.

### Borders & Dividers
`1px` borders throughout. Primary border color: `#D0D5DD`. Dividers: `#DADADA`. Dashed borders (purple `#8A38F5`) appear only as Figma annotation frames, not in production UI.

### Transparency & Blur
Limited use. Backdrop-filter blur appears in some hero/overlay elements. No heavy frosted-glass treatment.

### Iconography
See ICONOGRAPHY section below.

---

## ICONOGRAPHY

VR Expert uses **custom stroke icons** throughout the UI. The Figma file includes individual SVG icon vectors embedded inline (arrow-right, arrow-up, plus, x-close, user, etc). These are thin-stroke (1.5px) icons at 20–24px size, consistent with a custom or Untitled UI–style icon set.

- **Style**: Outline/stroke, 1.5px stroke weight, 20×20 or 24×24px.
- **Color**: Inherits from context — `#363636` on light bg, `#FFFFFF` on dark/colored bg, `#F39562` for orange accent icons.
- **No icon font** found. Icons are SVG-based.
- **Emoji**: Not used in UI.
- **Unicode chars**: Not used as icons.

Key icons identified: `arrow-right`, `arrow-up`, `plus`, `x-close`, `user-01`. Country flag circle icons also used (e.g. Australia-AU-circle) suggesting internationalized region selectors.

**CDN substitute**: Since no icon font/sprite was bundled, this design system uses **Lucide Icons** (same stroke weight, same 24px grid) from CDN as the closest match. Flag icons use `flagcdn.com`.

> ⚠️ **Substitution note**: Icon SVGs are referenced in Figma but not extractable as a usable sprite. Lucide Icons is used as a stand-in. Request the original icon set SVG sprite from the VR Expert design team for pixel-perfect fidelity.

---

## File Index

```
/
├── README.md                        ← This file
├── SKILL.md                         ← Agent skill definition
├── colors_and_type.css              ← All CSS tokens (colors, type, spacing, shadows)
├── assets/
│   ├── Logo Horizontal.svg          ← Primary logo (dark)
│   ├── Logo Horizontal White.svg    ← Logo on dark backgrounds
│   ├── Logo Horizontal Orange White.svg ← Orange text + white icon variant
│   ├── Logo - Orange-Black - VRX.png   ← VRX sub-brand logo
│   ├── Logo - White - VRX.png          ← VRX white variant
│   ├── Logo Icon - Orange - VRX.png    ← VRX icon mark only
│   └── Logo Icon - White - VRX.png     ← VRX icon mark white
├── preview/
│   ├── colors-primary.html          ← Primary orange palette card
│   ├── colors-secondary.html        ← Secondary teal + navy palette card
│   ├── colors-semantic.html         ← Semantic color tokens card
│   ├── colors-neutrals.html         ← Neutral gray scale card
│   ├── type-display.html            ← Display / heading type specimens
│   ├── type-body.html               ← Body type scale specimens
│   ├── spacing-tokens.html          ← Spacing, radii, shadow tokens
│   ├── components-buttons.html      ← Button components (all 10 variants)
│   ├── components-badges.html       ← Badge / tag components
│   ├── components-cards.html        ← Product card components
│   ├── components-forms.html        ← Form input components
│   ├── components-navigation.html   ← Header bar + mega menu dropdown
│   ├── components-tabs.html         ← Section tabs (pill + underline)
│   ├── components-accordion.html    ← Accordion + feature list items
│   ├── components-stepper.html      ← Checkout stepper + quantity selector + cart item
│   ├── components-search.html       ← Search inputs, results, breadcrumbs, pagination
│   ├── components-footer.html       ← Footer with contact cards, links, bottom bar
│   └── brand-logos.html             ← Logo usage card
└── ui_kits/
    └── website/
        ├── README.md                ← Website UI kit notes
        └── index.html               ← Interactive VR Expert website prototype
```
