---
name: Jeju Damgyul
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#564334'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#897362'
  outline-variant: '#ddc1ae'
  surface-tint: '#904d00'
  primary: '#904d00'
  on-primary: '#ffffff'
  primary-container: '#ff8c00'
  on-primary-container: '#623200'
  inverse-primary: '#ffb77d'
  secondary: '#496640'
  on-secondary: '#ffffff'
  secondary-container: '#caecbc'
  on-secondary-container: '#4f6c45'
  tertiary: '#5f5f59'
  on-tertiary: '#ffffff'
  tertiary-container: '#abaaa3'
  on-tertiary-container: '#3e3f39'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#caecbc'
  secondary-fixed-dim: '#afd0a1'
  on-secondary-fixed: '#062104'
  on-secondary-fixed-variant: '#324e2a'
  tertiary-fixed: '#e4e3db'
  tertiary-fixed-dim: '#c8c7bf'
  on-tertiary-fixed: '#1b1c17'
  on-tertiary-fixed-variant: '#474742'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  margin-mobile: 20px
  gutter-mobile: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 40px
---

## Brand & Style

The brand identity of this design system is rooted in the "Boutique Orchard" aesthetic—a blend of modern e-commerce efficiency and rustic, farm-to-table warmth. The emotional goal is to evoke the scent of fresh citrus and the reliability of a direct-from-farmer connection. 

The visual style follows a **Modern Tactile** approach. It avoids the clinical coldness of flat design by utilizing soft, organic shadows and a warm color base, while maintaining the clarity of a premium digital experience. The interface prioritizes high-quality, high-saturation product photography, using the UI as a subtle, elegant frame that highlights the natural beauty of Jeju island produce.

## Colors

The palette is designed to feel appetizing and grounded. 

- **Primary (Tangerine Orange):** Used for primary actions and key brand moments. It is high-energy and stimulates appetite.
- **Secondary (Soft Moss Green):** Used for "Freshness" indicators, trust badges, and organic accents. It balances the heat of the orange with a cooling, natural earthiness.
- **Background (Cream/Ivory):** Replaces pure white to reduce eye strain and provide a "paper-like" organic texture to the screen.
- **Text (Warm Gray):** A softened charcoal that maintains high legibility without the harshness of absolute black, preserving the gentle tone of the design system.

## Typography

This design system utilizes **Plus Jakarta Sans** for headlines to provide a modern, slightly rounded, and friendly geometric structure. For body copy and labels, **Be Vietnam Pro** is used for its exceptional legibility and warm, contemporary character.

The typographic hierarchy focuses on clear scanning. Headlines use tighter letter-spacing and heavier weights to feel "plump" and substantial, reflecting the fruit itself. Body text remains airy to ensure effortless reading of farm stories and product descriptions.

## Layout & Spacing

This design system employs a **Fluid Grid** model optimized for mobile-first consumption. 

- **Mobile:** A 4-column grid with 20px outside margins and 16px gutters.
- **Desktop/Tablet:** Scales to a 12-column centered layout with a max-width of 1140px.
- **Rhythm:** An 8px base unit drives all spatial relationships. Vertical "stack" spacing is generous to create a relaxed, premium shopping pace rather than a cluttered discount-store feel. Elements should feel like they have "room to breathe," mirroring the open air of a Jeju orchard.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and **Tonal Layering**. 

Surface depth is kept shallow. Cards and buttons use very soft, diffused shadows (Blur: 15-20px, Opacity: 6-8%) with a tiny hint of the Warm Gray color mixed into the shadow value to prevent a "dirty" look. Primary buttons may use a subtle glow effect using a low-opacity version of Tangerine Orange to suggest interactivity. 

Large image containers should appear slightly inset or flush, while actionable cards (product items) should appear slightly raised to invite tapping.

## Shapes

The shape language is defined by **Rounded** corners, avoiding sharp 90-degree angles to maintain a friendly, organic feel. 

- **Standard Elements:** 8px (0.5rem) radius for standard cards and input fields.
- **Large Elements:** 16px (1rem) for featured banners and promotional modules.
- **Pill Shapes:** Used exclusively for tags, badges (e.g., "Freshly Picked"), and secondary action buttons to distinguish them from the structured primary buttons.

## Components

### Buttons
- **Primary (Buy Now):** Solid Tangerine Orange with white text. High-contrast, bold, and uses `rounded-lg`.
- **Secondary (Add to Cart):** Outlined Tangerine Orange or Solid Cream with Orange text. Focuses on the "Add" action without competing for visual dominance.

### Cards
- Product cards feature a full-bleed top section for photography. The bottom section uses the Cream background with a soft shadow. Use `rounded-lg` for the container and a slightly smaller `rounded-md` for internal image clips.

### Trust Badges
- Small, pill-shaped components using the Soft Moss Green background. Icons should be minimal and organic (e.g., a simple leaf or sun line-art). Text should be in `label-sm` weight.

### Input Fields
- Subtle Warm Gray borders (1px) that thicken and turn Tangerine Orange on focus. Backgrounds should be slightly lighter than the main page background to create a "hollow" affordance.

### Innovative Component: "Orchard Progress"
- A custom progress tracker for seasonal harvests, using a thin Moss Green line and Tangerine Orange nodes to show users when their fruit is being picked, packed, and shipped.