# Logo SVG - Guía de Uso

El logo de Salad Bowl está disponible en formato SVG de alta calidad con dos variantes de color.

## Componente Logo

Ubicación: `src/components/Logo.tsx`

### Variantes Disponibles

#### 1. **Light** (Por defecto)
- **SALAD**: Verde lima (#c4d45b)
- **BOWL**: Blanco (#ffffff)
- **Uso**: Fondos oscuros, Footer

```tsx
import Logo from '@/components/Logo';

<Logo variant="light" width={200} height={113} />
```

#### 2. **Dark**
- **SALAD**: Verde lima (#c4d45b)
- **BOWL**: Verde oscuro (#0f4f44)
- **Uso**: Navbar, fondos claros

```tsx
import Logo from '@/components/Logo';

<Logo variant="dark" width={80} height={46} />
```

#### 3. **White** (Todo blanco)
- **SALAD**: Blanco (#ffffff)
- **BOWL**: Blanco (#ffffff)
- **Uso**: Hero con overlay oscuro, contextos con mucho contraste necesario

```tsx
import Logo from '@/components/Logo';

<Logo variant="white" width={300} height={170} />
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'light' \| 'dark' \| 'white'` | `'light'` | Variante de color |
| `width` | `number` | `200` | Ancho en píxeles |
| `height` | `number` | `113` | Alto en píxeles |
| `className` | `string` | `''` | Clases CSS adicionales |

## Ejemplos de Uso

### Hero (con overlay oscuro)
```tsx
<Logo 
  variant="white" 
  width={300}
  height={170}
  className="drop-shadow-2xl"
/>
```

### Navbar (fondo verde oscuro)
```tsx
<Logo 
  variant="dark"
  width={80}
  height={46}
  className="drop-shadow-sm"
/>
```

### Footer (fondo negro)
```tsx
<Logo
  variant="light"
  width={120}
  height={68}
/>
```

## Aspect Ratio

El logo mantiene un aspect ratio de **1081:610.49** (~1.77:1)

Para calcular dimensiones proporcionales:
- Si width = 200, entonces height = 113
- Si width = 280, entonces height = 158
- Si width = 80, entonces height = 45

## Recomendaciones

✅ **DO:**
- Usar `variant="light"` en fondos oscuros (verde + blanco)
- Usar `variant="dark"` en fondos claros o verde oscuro (verde + verde oscuro)
- Usar `variant="white"` en overlays oscuros o cuando necesites máximo contraste
- Mantener el aspect ratio original
- Añadir drop-shadow para mejor visibilidad

❌ **DON'T:**
- No distorsionar el logo (mantener proporciones)
- No usar colores personalizados (solo las 3 variantes definidas)
- No hacer el logo demasiado pequeño (mínimo 60px de ancho)

## Archivo SVG Original

Ubicación: `public/salad-logo.svg`

Estructura de clases:
- `.cls-1`: Blanco (#fff) - Para "BOWL"
- `.cls-2`: Verde lima (#c4d45b) - Para "SALAD"
