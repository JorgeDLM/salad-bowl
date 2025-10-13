# Salad Bowl | The destiny of the salad

Sitio web moderno y minimalista para Salad Bowl - restaurante de ensaladas, bowls saludables, wraps, paninis y açaí en Puebla, México.

## 🥗 Características

- **Sin backend, sin CMS, sin APIs externas** - Sitio estático completamente autónomo
- **Íconos propios en SVG** - Sin dependencias de librerías de íconos
- **Diseño aesthetic** - UI limpia y moderna con microanimaciones
- **Bowl Builder interactivo** - Flow de 3 pasos para armar tu bowl
- **Performance optimizado** - Next.js 14 con SSG y optimización de imágenes
- **A11y compliant** - Contraste AA, targets ≥44px, focus visible

## 🛠 Tech Stack

- **Framework**: Next.js 14.2.3
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 3.4
- **Animaciones**: Framer Motion 12.23
- **Íconos**: Custom SVG (sin librerías)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎨 Tokens de Color

Los colores están definidos en `tailwind.config.ts`:

```typescript
'sb-green-700': '#0f4f44',   // forest/teal oscuro (botones, CTA)
'sb-green-500': '#BFD96A',   // verde lima del logo
'sb-teal-200': '#A9D8D4',    // teal claro de fondos
'sb-cream': '#F7F8F3',       // fondo neutral claro
```

**Nota**: Ajusta estos colores usando un color picker directo de `logo-sb.png` y `life-is-now.png` para obtener los tonos exactos de la marca.

## 🖼 Assets Requeridos

Coloca las siguientes imágenes en `public/saladbowl/`:

### Logotipos y Brand
- `logo-sb.png` - Logotipo principal (verde lima + blanco)
- `life-is-now.png` - Arte de marca con claim "Life is now"

### Hero y Fondos
- `hero-bowl.jpg` - Foto hero principal (alta resolución)
- `bg-teal.png` - Fondo teal claro para secciones

### Grid de Productos
- `grid-ensalada.jpg` - Bowl de ensalada/arroz
- `grid-wrap.jpg` - Wrap
- `grid-panino.jpg` - Panino
- `grid-botana.jpg` - Botanas/snacks
- `grid-acai.jpg` - Bowl de açaí

### Opcional
- `barra-ingredientes.jpg` - Close-up de la barra de ingredientes

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal con metadatos SEO
│   ├── page.tsx            # Home page
│   ├── menu/page.tsx       # Página de menú con filtros
│   ├── sucursales/page.tsx # Ubicaciones
│   ├── franquicias/page.tsx # Landing de franquicias
│   └── contacto/page.tsx   # Formulario de contacto
├── components/
│   ├── icons/              # Íconos SVG propios (17 componentes)
│   ├── Hero.tsx            # Hero con parallax y fade-in
│   ├── BowlFlow.tsx        # Bowl builder de 3 pasos
│   ├── ProductGrid.tsx     # Grid de productos responsive
│   ├── LocationCard.tsx    # Tarjeta de sucursal
│   ├── FranchiseCTA.tsx    # Call-to-action franquicias
│   ├── Footer.tsx          # Footer con redes sociales
│   └── navigation/Navbar.tsx # Navbar sticky con scroll effect
├── config.ts               # Configuración del sitio y ubicaciones
└── types/                  # TypeScript types

public/
├── saladbowl/             # Assets de imágenes
├── sitemap.xml            # SEO sitemap
└── robots.txt             # Crawl configuration
```

## 🎯 Componentes Principales

### Hero
- Parallax en imagen de fondo
- Fade-in animado con framer-motion
- CTA con scroll suave al bowl builder

### BowlFlow
- 3 pasos interactivos (Base, Ingredientes, Aderezo)
- Chips seleccionables con estados visuales
- Pricing dinámico por sección

### ProductGrid
- Grid responsive 1-2-3 columnas
- Hover effects con scale y blur
- Links a página de menú

### Navbar
- Sticky con backdrop blur
- Cambio de opacidad on-scroll
- Underline animado en hover
- Mobile menu responsive

## 🚀 Performance & SEO

- **Lighthouse target**: ≥90 en todas las métricas
- **next/image**: Priority en hero, lazy en el resto
- **Metadatos**: Open Graph, Twitter Cards, Schema.org (Restaurant)
- **Sitemap**: Incluido en `public/sitemap.xml`
- **Robots.txt**: Configurado para crawlers

## 🔧 Configuración

Edita `src/config.ts` para actualizar:
- URLs de redes sociales
- Información de contacto (WhatsApp)
- Direcciones de sucursales
- URLs de Google Maps

## 📱 Responsive Design

- **Mobile-first**: Diseño adaptable desde 320px
- **Breakpoints**: xs → sm → md → lg (Tailwind defaults)
- **Touch targets**: Mínimo 44x44px para A11y
- **No CLS**: Aspect ratios definidos en imágenes

## 🎨 Personalización

### Cambiar colores
1. Abre `tailwind.config.ts`
2. Modifica los valores en `extend.colors`
3. Usa un color picker en tus assets de marca

### Añadir íconos
1. Crea componente en `src/components/icons/`
2. Usa `IconBase` para consistencia (24px, stroke 1.75)
3. Exporta en `src/components/icons/index.ts`

## 📝 Notas Importantes

- **Sin base de datos**: Todo el contenido es estático
- **Formularios**: Usan `mailto:` (sin backend)
- **Framer Motion**: Única librería de UI además de Tailwind
- **No usar @heroicons**: Todos los íconos son custom SVG

## 🏗 Build & Deploy

```bash
# Build estático
npm run build

# La carpeta .next/standalone contiene el build optimizado
# Deploy a Netlify, Vercel, o cualquier hosting de Next.js
```

## 📄 Licencia

Proyecto privado - Salad Bowl © 2024

---

**Contacto**: hola@saladbowl.com  
**Instagram**: @saladbowl  
**Ubicaciones**: Puebla, México
