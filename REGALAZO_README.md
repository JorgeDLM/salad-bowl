# 🎁 Regalazo - E-commerce de Kits de Regalo

Tienda online de kits de regalo estéticos y hechos con amor, construida sobre Next.js 14.

## 🚀 Características

- **Sin backend**: Todo funcional en cliente
- **Filtrado dinámico**: Por persona, ocasión, estilo y presupuesto
- **Same-day delivery**: Badge y lógica de corte horario
- **WhatsApp checkout**: CTA prellenado
- **Quiz interactivo**: 4 pasos
- **SEO optimizado**: JSON-LD, metadata

## 📁 Rutas principales

- `/regalazo` - Home
- `/regalazo/quiz` - Quiz
- `/regalazo/kit/[slug]` - Detalle de kit
- `/regalazo/para-quien/[slug]` - PLP por persona
- `/regalazo/ocasion/[slug]` - PLP por ocasión
- `/regalazo/empresas` - B2B landing
- `/regalazo/contacto` - Contacto

## 🎨 Design System

### Colores
- Cream: #F7F1EA
- Terracotta: #C86B5B
- Ink: #3C2C29
- Gold: #C2A27E

### Fonts
- Fraunces (títulos)
- Inter (texto)

## 📦 Agregar kit nuevo

Edita `src/data/kits.ts` y agrega imágenes en `/public/img/kits/`

## ⚙️ Configuración

Edita `src/config.ts` para cambiar WhatsApp, timezone, etc.

## 📸 Imágenes

Ver `/public/img/README.md` para estructura completa de assets.

## 🔧 Desarrollo

```bash
npm run dev
# Visita http://localhost:3000/regalazo
```
