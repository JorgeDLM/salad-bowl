# Regalazo Image Assets

This directory contains all images for the Regalazo e-commerce site.

## Structure

```
img/
├── brand/                    # Brand assets
│   ├── logo-regalazo.svg
│   ├── logo-regalazo-dark.svg
│   ├── favicon-512.png
│   └── og-cover.webp (1200x630)
│
├── texture/                  # Texture overlays
│   ├── grain.png (1024x1024, tileable)
│   └── paper-soft.jpg (2000x1400)
│
├── hero/                     # Hero/banner images
│   ├── hero-home-a.webp (2400x1400)
│   ├── hero-home-b.webp
│   ├── autumn-hero.webp
│   ├── navidad-hero.webp
│   ├── 10-mayo-hero.webp
│   └── selfcare-hero.webp
│
├── avatars/                  # "Para quién" selector (800x800)
│   ├── pareja.webp
│   ├── mama.webp
│   ├── papa.webp
│   ├── bebe.webp
│   ├── amigo.webp
│   └── jefe-equipo.webp
│
├── ocasion/                  # Occasion icons (SVG)
│   ├── cumpleanos.svg
│   ├── aniversario.svg
│   ├── newborn.svg
│   ├── dia-madres.svg
│   ├── dia-padre.svg
│   ├── navidad.svg
│   ├── halloween.svg
│   ├── graduacion.svg
│   └── housewarming.svg
│
├── estilo/                   # Style icons (SVG)
│   ├── wellness.svg
│   ├── foodie.svg
│   ├── techie.svg
│   ├── eco.svg
│   ├── romantico.svg
│   ├── divertido.svg
│   ├── petlover.svg
│   └── keto.svg
│
├── kits/                     # Product images (1600x1200)
│   ├── aniversario-spa-0499.webp
│   ├── aniversario-spa-0999.webp
│   ├── aniversario-spa-1999.webp
│   ├── newborn-eco-0499.webp
│   ├── newborn-eco-0999.webp
│   ├── newborn-eco-1999.webp
│   ├── novia-galana-0499.webp
│   ├── novia-galana-0999.webp
│   ├── novia-galana-1999.webp
│   ├── autumn-pumpkin-0499.webp
│   ├── autumn-pumpkin-0999.webp
│   ├── autumn-pumpkin-1999.webp
│   ├── selfcare-yogui-0499.webp
│   ├── selfcare-yogui-0999.webp
│   ├── selfcare-yogui-1999.webp
│   ├── selfcare-brujil-0499.webp
│   ├── selfcare-brujil-0999.webp
│   ├── selfcare-brujil-1999.webp
│   ├── mocktail-0499.webp
│   ├── mocktail-0999.webp
│   ├── mocktail-1999.webp
│   ├── keto-0499.webp
│   ├── keto-0999.webp
│   └── keto-1999.webp
│
├── addons/                   # Add-on products (800x800)
│   ├── foto-10x15.webp
│   ├── upgrade-flores.webp
│   └── nota-manuscrita.webp
│
├── badges/                   # Badge graphics (SVG)
│   ├── entrega-hoy.svg
│   ├── mas-vendido.svg
│   └── nuevo.svg
│
├── collections/              # Collection covers (1200x900)
│   ├── autumn.webp
│   ├── selfcare.webp
│   ├── mocktail.webp
│   ├── keto.webp
│   ├── korea.webp
│   ├── navidad.webp
│   └── 10-mayo.webp
│
├── details/                  # Close-up/detail shots (800x800)
│   ├── ribbon-terracotta.webp
│   ├── tela-crema.webp
│   ├── cuadro-tarjeta.webp
│   ├── cuarzo-rose.webp
│   ├── palo-santo.webp
│   ├── mask-sheet.webp
│   ├── choco-trufa.webp
│   └── brush-bebe.webp
│
├── trust/                    # Trust/process images (1200x800)
│   ├── packing-studio.webp
│   ├── same-day-bike.webp
│   ├── card-handwritten.webp
│   └── unboxing.webp
│
└── b2b/                      # B2B/corporate (1600x1200)
    ├── bulk-boxes-01.webp
    ├── bulk-boxes-02.webp
    └── custom-card-logo.webp
```

## Image Guidelines

### Photography Style
- **Light**: Warm, natural light (golden hour preferred)
- **Background**: Cream, paper, or soft fabric textures
- **Props**: Ceramic, wood, natural materials
- **Color Temperature**: 3500K-4500K (warm)
- **Composition**: Clean, minimal, with negative space

### Technical Specs
- **Format**: WebP for photos, SVG for icons/logos
- **Optimization**: Use tools like Squoosh or ImageOptim
- **Alt Text**: Always descriptive for accessibility
- **Lazy Loading**: Enabled for all non-hero images

### Color Palette
- Primary: Terracotta (#C86B5B), Wine (#7A3D36)
- Neutrals: Cream (#F7F1EA), Paper (#F2E7DE), Ink (#3C2C29)
- Accents: Gold (#C2A27E), Sage (#C9D4CC)

## Placeholder Generation

Until real images are available, use:
- https://placehold.co/ for quick placeholders
- https://unsplash.com/ for temporary stock photos
- Match the aspect ratios specified above

## Naming Convention

`{kit-slug}-{tier}.webp` for product images
Example: `selfcare-yogui-0999.webp`
