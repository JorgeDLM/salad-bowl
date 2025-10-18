import { Kit, KitVariant } from '@/types/regalazo';
import { SITE } from '@/config';

export function generateKitJsonLd(kit: Kit, variant: KitVariant) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: kit.title,
    description: `Kit de regalo ${kit.title} - ${variant.contents.join(', ')}`,
    image: `${SITE.url}${variant.image}`,
    sku: variant.sku,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'MXN',
      lowPrice: kit.variants[0].tier,
      highPrice: kit.variants[kit.variants.length - 1].tier,
      offerCount: kit.variants.length,
      availability: variant.availableSameDay
        ? 'https://schema.org/InStock'
        : 'https://schema.org/PreOrder',
      url: `${SITE.url}/kit/${kit.slug}`,
    },
    brand: {
      '@type': 'Brand',
      name: SITE.brand,
    },
  };
}

export function generateFAQJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Hacen entregas el mismo día?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, si realizas tu pedido antes de las 12:00 PM hora de México, podemos entregarlo el mismo día en zonas seleccionadas de CDMX y área metropolitana.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puedo personalizar el mensaje?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, todos nuestros kits incluyen una tarjeta personalizada escrita a mano con tu mensaje.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuál es el mínimo de compra?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nuestros kits inician desde $499 MXN. Tenemos opciones para todos los presupuestos.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo realizo mi pedido?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Selecciona tu kit, personalízalo y completa tu pedido vía WhatsApp. Te confirmamos disponibilidad y te enviamos los detalles de pago.',
        },
      },
    ],
  };
}

// Generate Menu Items JSON-LD para productos
export function generateMenuItemJsonLd(item: {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MenuItem',
    name: item.name,
    description: item.description,
    image: `${SITE.url}${item.image}`,
    offers: {
      '@type': 'Offer',
      price: item.price,
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
    },
    menuCategory: item.category,
    suitableForDiet: ['VegetarianDiet', 'VeganDiet', 'LowCalorieDiet'],
  };
}

// SEO Keywords generator para búsquedas locales
export const SEO_KEYWORDS = {
  primary: [
    'restaurante de ensaladas',
    'restaurante de ensaladas puebla',
    'ensaladas frescas',
    'ensaladas puebla',
  ],
  secondary: [
    'bowl personalizado',
    'arma tu ensalada',
    'comida saludable puebla',
    'restaurante saludable',
  ],
  location: [
    'ensaladas angelópolis',
    'ensaladas zavaleta',
    'restaurante plaza vía',
    'comida saludable angelópolis',
  ],
  product: [
    'açaí bowl',
    'wraps saludables',
    'paninis',
    'ensaladas gourmet',
  ],
};

// Alt text generator para imágenes
export function generateImageAlt(context: string, location?: string): string {
  const base = `Salad Bowl ${context}`;
  const locationSuffix = location ? ` en ${location}` : ' en Puebla';
  return `${base} - Restaurante de ensaladas frescas${locationSuffix}`;
}
