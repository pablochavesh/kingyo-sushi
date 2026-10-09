---
name: Kingyo Digital
description: Contemporary digital edition of Kingyo's physical Japanese-fusion menu.
colors:
  ink: "#0b0b0a"
  charcoal: "#151411"
  paper: "#f3ead7"
  paper-muted: "#cfc3ad"
  gold: "#d6ad58"
  gold-soft: "rgba(214, 173, 88, 0.16)"
  vermilion: "#ef5a45"
  vermilion-deep: "#941f17"
  muted-copy: "#b9b09f"
  gold-line: "rgba(214, 173, 88, 0.2)"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(3.35rem, 7.6vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.88
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.75rem, 6vw, 5.3rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.75rem, 3vw, 2.45rem)"
    fontWeight: 600
    lineHeight: 1
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.07em"
rounded:
  square: "0"
  circular: "50%"
spacing:
  1: "8px"
  2: "16px"
  3: "24px"
  4: "32px"
  6: "48px"
  8: "64px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "rgba(11, 11, 10, 0.24)"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 24px"
    height: "52px"
  segmented-selected:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "11px 14px"
  cart-action:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 15px"
    height: "52px"
---

# Design System: Kingyo Digital

## Overview

**Creative North Star: "The Contemporary Kingyo Menu"**

Kingyo Digital behaves like a contemporary edition of the restaurant's physical menu: charcoal lacquer, warm paper, vermilion brushwork, muted gold rules and restrained seigaiha waves. The experience is tactile and editorial, with real sushi photography as the protagonist and a near-black atmosphere that recalls the printed artifact without imitating it literally.

The interface is mobile-first and optimized for quick decisions from a phone or table QR code. Open sections, disciplined type and fine dividers create hierarchy; compact controls support bilingual menu discovery, service pricing and a WhatsApp cart without turning the page into an application dashboard.

**Key Characteristics:**

- Sushi photography leads every major visual moment.
- Charcoal and warm paper establish contrast; gold signals action and value.
- High-contrast serif headlines pair with a restrained humanist interface sans.
- Seigaiha, Japanese marks and vermilion appear as sparse cultural signatures.
- Rectangular controls and fine rules keep the system editorial rather than card-driven.

## Colors

The palette moves between lacquer-black surfaces and warm printed paper, with muted gold as the primary interaction voice and vermilion as a rarer editorial accent.

### Primary

- **Warm Gold:** The default action, price, focus and divider family; it connects the digital surface to the printed menu's metallic detailing.

### Secondary

- **Kingyo Vermilion:** A sharp cultural accent for Japanese labels, location tabs and small moments of emphasis.
- **Deep Vermilion:** Reserved for stronger paper-surface actions and the cart count, where gold would lose contrast or hierarchy.

### Neutral

- **Lacquer Ink:** The global canvas and primary text on light surfaces.
- **Charcoal:** The first tonal lift above ink for media placeholders and quiet structural surfaces.
- **Warm Paper:** Primary text on dark surfaces and the single full light section.
- **Aged Paper:** Softer high-contrast copy and navigation on dark surfaces.
- **Muted Copy:** Paragraph and explanatory text that must recede behind titles and prices.
- **Gold Wash:** Low-opacity gold for subtle surface tinting.
- **Gold Rule:** Low-opacity gold for borders, ledger separators and structural divisions.

**The Rarity Rule.** Gold carries interaction and value; vermilion supplies punctuation. Never let both accents compete at equal weight in the same component.

**The Warm Neutral Rule.** Avoid pure white and blue-gray neutrals. All text and surfaces stay within the warm paper-to-lacquer spectrum.

## Typography

**Display Font:** Cormorant Garamond (with Georgia and serif fallbacks)  
**Body Font:** Manrope (with Arial and sans-serif fallbacks)

**Character:** Cormorant Garamond supplies the physical menu's high-contrast, ceremonial voice; Manrope makes controls, prices and bilingual details feel precise and contemporary. The supplied angular KINGYO wordmark remains an image asset and is never reconstructed with either font.

### Hierarchy

- **Display** (600, fluid hero scale, 0.88 line-height): Used only for the hero statement, with tight tracking and balanced wrapping.
- **Headline** (600, fluid section scale, 0.95 line-height): Used for major section and closing statements.
- **Title** (600, fluid item scale, 1 line-height): Used for menu dishes, location details and drawer headings.
- **Body** (400, 1rem, 1.6 line-height): Used for descriptions and guidance; menu descriptions stay near 68 characters per line.
- **Label** (700, 0.72rem, 0.07em tracking): Used for buttons, tabs and compact metadata, usually uppercase.

**The Two-Voice Rule.** Serif type carries appetite, narrative and prices; sans-serif type carries operation, metadata and controls.

**The Mark Is an Asset Rule.** Always use the supplied angular KINGYO image for the wordmark; never approximate it with display type.

## Layout

The system is mobile-first on an 8px rhythm. Content sits in a centered shell capped at 1180px, with 20px gutters by default and 16px gutters below 600px. Major sections use generous fluid vertical padding while the menu ledger relies on separators and whitespace rather than boxed cards.

Desktop compositions pair editorial columns or media and copy. At 860px, navigation is simplified, major two-column sections stack, and menu controls become vertical. At 600px, hero actions fill the available width, menu rows reorganize into a two-column ledger, proof points stack, and the cart drawer uses compact padding while retaining the full viewport height.

Photography uses deliberate crops rather than generic thumbnails: the hero image fills the viewport, the craft image behaves like a tall editorial plate, and dish thumbnails remain square. The floating cart is fixed to the lower-right edge and the order drawer enters from the right at a maximum width of 470px.

**The Ledger Rule.** Prefer open rows, rules and typographic hierarchy over repeated card containers.

**The One Ornament Rule.** Use no more than one cultural pattern on a surface; ornament must never compete with food photography.

## Elevation & Depth

Depth is mostly structural: tonal layering, photography, translucent dark overlays, thin gold rules and selective blur. Shadows are rare and purposeful, reserved for the map pin, floating cart and modal drawer. The header and photographic caption may use restrained backdrop blur because they sit directly over content; ordinary sections remain flat.

### Shadow Vocabulary

- **Floating Action** (`0 14px 34px rgba(0,0,0,.38)`): Grounds the persistent cart above the page.
- **Map Marker** (`0 18px 38px rgba(0,0,0,.5)`): Separates the circular location mark from the abstract map.
- **Drawer Edge** (`-24px 0 70px rgba(0,0,0,.48)`): Establishes the WhatsApp order drawer as a temporary top layer.

**The Flat-by-Default Rule.** Static content stays flat; shadow appears only when an element genuinely floats or overlays another surface.

## Shapes

The dominant silhouette is square and editorial. Buttons, filters, inputs, media frames, ledgers and panels use hard corners with thin rules. Circles are identity-bearing exceptions: the fish mark, map pin and cart count. The seigaiha pattern contributes curved geometry only as a low-contrast background detail.

**The Circle Means Kingyo Rule.** Reserve circular forms for the official mark, its location echo and small numeric indicators; do not round whole cards or primary controls.

## Components

### Buttons

- **Shape:** Rectangular, hard-cornered and at least 52px high for primary actions.
- **Primary:** Warm gold on lacquer ink with compact horizontal padding; it shifts to warm paper and lifts 2px on hover.
- **Hover / Focus:** Short color transitions use the system easing; keyboard focus is a 2px gold outline with a 4px offset.
- **Ghost:** Warm-paper text on a translucent ink surface with a fine paper border; hover changes the border and text to gold.

### Chips

- **Style:** Category filters are transparent uppercase labels; the selected category changes to gold without adding a capsule.
- **State:** Service pricing uses a square segmented control; the selected segment becomes gold with ink text.

### Cards / Containers

- **Corner Style:** Square.
- **Background:** Menu rows remain open on the section surface; location and cart containers use subtly distinct charcoal tones.
- **Shadow Strategy:** Flat by default; refer to the three explicit elevation roles above.
- **Border:** Fine translucent gold rules divide content.
- **Internal Padding:** Based on the 8px rhythm, expanding substantially for editorial sections and tightening in the cart.

### Inputs / Fields

- **Style:** The menu search is an open, transparent field inside a ruled toolbar, paired with a fine-stroke gold search icon.
- **Focus:** The input itself removes the browser outline while the global keyboard-visible treatment remains available on actionable controls; the caret is gold.
- **Placeholder:** Warm, subdued copy that remains distinct from entered paper-colored text.

### Navigation

The fixed header uses blurred ink, a fine lower rule and uppercase Manrope links. Link hover draws a gold line from left to right. Below 860px, the desktop navigation is removed in favor of the brand, language switch and direct order action.

### Menu Ledger

Each dish is one open row with a square image, serif title, small vermilion Japanese label, muted description, gold metadata, tabular gold price and a bordered add action. At phone width the price and action move beneath the copy while the image remains a compact visual anchor.

### WhatsApp Cart

The persistent gold cart action opens a full-height charcoal drawer over a blurred ink overlay. Totals use serif tabular numerals; quantity controls remain square; the final WhatsApp action is the one purposeful green exception because it communicates the destination service.

## Do's and Don'ts

### Do:

- **Do** let authentic sushi photography dominate the hero and food storytelling.
- **Do** preserve the 8px rhythm, open ledger rows and warm paper-to-lacquer contrast.
- **Do** use gold for interaction, prices, focus and fine structural rules.
- **Do** keep all content visible when animation libraries fail or reduced motion is requested.
- **Do** preserve the supplied circular mark and angular wordmark as image assets.

### Don't:

- **Don't** introduce rounded cards, pill buttons, chromatic glows or decorative glass stacks.
- **Don't** place multiple Japanese patterns or marks in competition on one surface.
- **Don't** use pure white, cool blue-gray or extra accent colors outside the established palette and WhatsApp action.
- **Don't** approximate the KINGYO wordmark with typography.
- **Don't** allow ornament or interface chrome to outrank the food.
