# Assets Requeridos para Salad Bowl

Este archivo lista todas las imágenes que debes colocar en `public/saladbowl/` para que el sitio funcione correctamente.

## 📸 Lista de Assets

### ✅ Logotipos y Brand (PRIORITARIO)
- [x] **logo.png** - Logotipo principal (en /public)
  - Dimensiones sugeridas: 400x160px o superior
  - Formato: PNG con transparencia
  - Uso: Navbar, Hero, Footer

### ✅ Pasos del Bowl Builder (PRIORITARIO)
- [x] **paso-1.png** - Pantalla de bienvenida/start
  - Dimensiones: 1600x1000px (ratio 16:10)
  - Uso: Primera pantalla del bowl builder
  
- [x] **paso-2.png** - Paso 1: Elige tu base
  - Dimensiones: 1600x1000px (ratio 16:10)
  - Muestra opciones de bases
  
- [x] **paso-3.png** - Paso 2: Ingredientes
  - Dimensiones: 1600x1000px (ratio 16:10)
  - Muestra barra de ingredientes
  
- [x] **paso-4.png** - Complementos
  - Dimensiones: 1600x1000px (ratio 16:10)
  - Opciones de complementos adicionales
  
- [x] **paso-5.png** - Bebidas
  - Dimensiones: 1600x1000px (ratio 16:10)
  - Opciones de bebidas

### ✅ Hero y Fondos (OPCIONAL)
- [ ] **hero-bowl.jpg** - Foto hero principal (si quieres cambiar el fondo del hero)
  - Dimensiones: 1920x1080px o superior
  - Actualmente se puede usar una de las imágenes de pasos

### ✅ Grid de Productos (IMPORTANTE)
- [ ] **grid-ensalada.jpg** - Bowl de ensalada/arroz
  - Dimensiones: 800x600px (ratio 4:3)
  
- [ ] **grid-wrap.jpg** - Wrap
  - Dimensiones: 800x600px (ratio 4:3)
  
- [ ] **grid-panino.jpg** - Panino
  - Dimensiones: 800x600px (ratio 4:3)
  
- [ ] **grid-botana.jpg** - Botanas/snacks
  - Dimensiones: 800x600px (ratio 4:3)
  
- [ ] **grid-acai.jpg** - Bowl de açaí
  - Dimensiones: 800x600px (ratio 4:3)

### 🎨 Opcional
- [ ] **barra-ingredientes.jpg** - Close-up de la barra
  - Para usar como divisor de secciones
  - Dimensiones: 1920x600px

## 🎨 Ajuste de Colores

Una vez que tengas `logo-sb.png` y `life-is-now.png`, usa un color picker (como [imagecolorpicker.com](https://imagecolorpicker.com)) para obtener los colores exactos de la marca.

Luego actualiza en `tailwind.config.ts`:

```typescript
colors: {
  'sb-green-700': '#0f4f44',   // Samplea el verde oscuro del logo
  'sb-green-500': '#BFD96A',   // Samplea el verde lima principal
  'sb-teal-200': '#A9D8D4',    // Samplea el teal de fondos
  'sb-cream': '#F7F8F3',       // Mantén este o ajusta según tu paleta
}
```

## ✅ Checklist de Implementación

1. [ ] Crear carpeta `public/saladbowl/` si no existe
2. [ ] Colocar todas las imágenes con los nombres exactos listados arriba
3. [ ] Verificar que las imágenes tengan buena calidad (no pixeladas)
4. [ ] Optimizar imágenes (usa TinyPNG o similar antes de subirlas)
5. [ ] Ajustar colores en Tailwind según los assets reales
6. [ ] Probar el sitio en desarrollo (`npm run dev`)
7. [ ] Verificar que todas las imágenes cargan correctamente

## 🚨 Importante

- **Nombres exactos**: Los componentes esperan estos nombres específicos
- **Formato**: JPG para fotos, PNG para logos con transparencia
- **Optimización**: Comprime las imágenes antes de subirlas (target: <500KB cada una)
- **Aspect ratios**: Respeta las proporciones sugeridas para evitar CLS (Cumulative Layout Shift)

## 📝 Notas

Si no tienes alguna imagen, puedes usar placeholders temporales de:
- [Unsplash](https://unsplash.com/s/photos/salad-bowl)
- [Pexels](https://pexels.com/search/healthy-food/)

Pero recuerda reemplazarlas con las imágenes finales antes del deploy a producción.
