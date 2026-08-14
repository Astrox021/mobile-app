---
name: Lumina Mobile
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#464554'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#4f5d70'
  on-tertiary: '#ffffff'
  tertiary-container: '#677689'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d4e4fa'
  tertiary-fixed-dim: '#b9c8de'
  on-tertiary-fixed: '#0d1c2d'
  on-tertiary-fixed-variant: '#39485a'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  margin-mobile: 20px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 48px
---

## Brand & Style

This design system is built for high-end creator platforms, focusing on a **Minimalist** and **Glassmorphic** aesthetic. The brand personality is sophisticated, silent, and premium, acting as a neutral gallery-style frame that allows user-generated content to take center stage. 

The emotional response should be one of "effortless power"—a professional tool that feels as light as a social app. We achieve this through:
- **Spaciousness:** Generous negative space to prevent visual fatigue.
- **Translucency:** Using glassmorphism to maintain context and depth during navigation.
- **Precision:** Geometric alignment and high-quality typography that signals reliability.

## Colors

The palette is anchored by a high-contrast foundation of **Clean Whites** (#FFFFFF) and **Deep Slate Grays** (#0F172A). 

- **Primary:** A vibrant Indigo (#6366F1) serves as the "Electric" accent for critical calls to action and active states.
- **Surface:** The background uses a subtle off-white (#F8FAFC) to reduce eye strain compared to pure white.
- **Overlay:** Glassmorphic surfaces use a semi-transparent white (rgba(255, 255, 255, 0.7)) with a heavy background blur (20px-40px).
- **Text:** Primary headings use the Deep Slate Gray to ensure maximum legibility and a grounded feel.

## Typography

This design system utilizes **Inter** for its systematic, geometric clarity. To achieve a premium feel, we employ a strategy of contrast between tight tracking on large headers and generous letter spacing on smaller labels.

- **Headlines:** Use tighter letter-spacing and heavier weights to create a strong visual anchor.
- **Labels:** Small functional text (caps) uses increased tracking (8%) to maintain readability and aesthetic "air."
- **Mobile Scaling:** Headlines larger than 24px should wrap gracefully; do not scale down font size aggressively, as large type is a key characteristic of the premium aesthetic.

## Layout & Spacing

The layout follows a **Fluid Grid** model optimized for mobile-first interactions. 

- **Safe Zones:** A mandatory 20px horizontal margin is maintained on all screens to ensure content doesn't feel cramped against the bezel.
- **Rhythm:** Spacing follows a base-8 scale (8, 16, 32, 48). 
- **Verticality:** We use "stacking" units to define relationships. Small 8px gaps for related items (label + input), and 48px gaps between distinct content sections.
- **Floating Elements:** Content cards should never touch the edge of the screen; they should always "float" within the 20px margin container.

## Elevation & Depth

Depth is conveyed through a mix of **Tonal Layers** and **Glassmorphism**, avoiding heavy black shadows in favor of ambient, tinted depth.

- **Level 1 (Base):** Off-white background (#F8FAFC).
- **Level 2 (Cards):** Pure white surfaces with a very soft, diffused shadow: `0px 10px 30px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Modals/Overlays):** Glassmorphic panels with 70% opacity white background, 32px background-blur, and a subtle 1px white border (inner glow) to define the edges.
- **Interaction:** Upon press, elements should subtly scale (98%) rather than increasing shadow depth, reinforcing the tactile, physical nature of the UI.

## Shapes

The shape language is defined by **Soft-Roundedness**. While the variable scale is set to `2`, specific "Super-Ellipses" are used for high-level containers.

- **Primary Containers:** Use `rounded-xl` (24px) for main feed cards and content blocks to create a friendly, approachable feel.
- **Buttons & Inputs:** Use `rounded-lg` (16px) to maintain a consistent look without becoming fully circular.
- **Visual Style:** Avoid sharp 90-degree angles entirely to support the "fluid" and "organic" creator vibe.

## Components

### Buttons
- **Primary:** Solid Indigo (#6366F1) with white text. 16px corner radius. No shadow; use a subtle scale-down on tap.
- **Secondary:** Transparent with a 1px Slate (#E2E8F0) border.
- **Ghost:** No border or background; uses Indigo text for actions.

### Cards
- **Feed Cards:** White background, 24px border radius, 20px internal padding. The shadow should be barely perceptible, giving the card a "floated" appearance.

### Input Fields
- **Default State:** Off-white background (#F1F5F9), 16px radius, no border.
- **Focused State:** White background, 1px Indigo border, and a soft Indigo glow (outer shadow).

### Chips
- **Category Chips:** Semi-transparent light gray (rgba(15, 23, 42, 0.05)) with 100px (pill) radius and `label-caps` typography.

### Glass Overlays
- **Bottom Sheets:** 70% white with a 40px blur. The handle at the top should be a subtle Slate Gray, 4px thick, with fully rounded ends.