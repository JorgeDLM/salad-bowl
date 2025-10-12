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
