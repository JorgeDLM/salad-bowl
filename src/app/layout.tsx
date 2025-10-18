import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import { SITE } from '@/config';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Restaurante de Ensaladas en Puebla | Salad Bowl - Ensaladas Frescas y Personalizadas',
    template: `%s | ${SITE.brand}`,
  },
  description: 'Restaurante de ensaladas frescas y personalizadas en Puebla. Arma tu bowl perfecto, elige base, proteínas, verduras y aderezos. Wraps, paninis y açaí bowls. 3 sucursales: Angelópolis, Zavaleta y Plaza Vía. Comida saludable para llevar y en sitio. ¡Ordena ya!',
  keywords: [
    'restaurante de ensaladas',
    'restaurante de ensaladas puebla',
    'ensaladas frescas',
    'ensaladas puebla',
    'restaurante saludable puebla',
    'arma tu ensalada',
    'ensaladas personalizadas',
    'bowl personalizado',
    'ensaladas a tu gusto',
    'salad bowl puebla',
    'ensaladas frescas puebla',
    'comida saludable puebla',
    'comida saludable angelópolis',
    'restaurante ensaladas angelópolis',
    'ensaladas angelópolis',
    'ensaladas zavaleta',
    'comida fit puebla',
    'comida fitness puebla',
    'healthy food puebla',
    'bowls saludables',
    'bowls personalizados',
    'wraps saludables',
    'wraps puebla',
    'paninis puebla',
    'açaí bowl puebla',
    'açaí puebla',
    'ensaladas gourmet',
    'ensaladas premium',
    'bar de ensaladas',
    'barra de ensaladas puebla',
    'restaurante vegetariano puebla',
    'comida vegetariana puebla',
    'comida vegana puebla',
    'opciones veganas puebla',
    'comida orgánica puebla',
    'comida fresca puebla',
    'almuerzo saludable puebla',
    'cena saludable puebla',
    'dónde comer ensaladas puebla',
    'mejores ensaladas puebla',
    'ensaladas cerca de mí',
    'restaurante fitness',
    'proteína bowl',
    'power bowl',
    'ensalada césar puebla',
    'ensalada con pollo',
    'ensalada con atún',
  ],
  authors: [{ name: SITE.brand }],
  creator: SITE.brand,
  publisher: SITE.brand,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: SITE.url,
    siteName: SITE.brand,
    title: 'Restaurante de Ensaladas en Puebla | Salad Bowl - Ensaladas Frescas',
    description: 'El mejor restaurante de ensaladas frescas y personalizadas en Puebla. Bowls, wraps, paninis y açaí. 3 sucursales en Angelópolis, Zavaleta y Plaza Vía. ¡Arma tu ensalada perfecta!',
    images: [
      {
        url: '/empleado-sirviendo.JPG',
        width: 1200,
        height: 630,
        alt: 'Salad Bowl - Restaurante de Ensaladas Frescas en Puebla',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurante de Ensaladas Puebla | Salad Bowl',
    description: 'Restaurante de ensaladas frescas y personalizadas en Puebla. Bowls, wraps, paninis y açaí. 3 sucursales. ¡Ordena ahora!',
    images: ['/empleado-sirviendo.JPG'],
    creator: '@saladbowlmx',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f4f44',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Structured Data para Rich Snippets de Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Restaurant',
        '@id': `${SITE.url}#restaurant`,
        name: 'Salad Bowl - Restaurante de Ensaladas',
        alternateName: 'Salad Bowl Puebla',
        image: [
          `${SITE.url}/logo.png`,
          `${SITE.url}/paso-1.png`,
          `${SITE.url}/paso-2.png`,
        ],
        description: 'Restaurante de ensaladas frescas personalizadas, wraps, paninis y açaí bowls en Puebla, México. Arma tu bowl perfecto con ingredientes frescos.',
        servesCuisine: ['Ensaladas', 'Comida Saludable', 'Bowls', 'Wraps', 'Açaí', 'Comida Vegetariana', 'Comida Vegana'],
        priceRange: '$$',
        paymentAccepted: 'Efectivo, Tarjeta de Crédito, Tarjeta de Débito',
        currenciesAccepted: 'MXN',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Blvd. Atlixcáyotl 1405, Local B 5',
          addressLocality: 'Puebla',
          addressRegion: 'PUE',
          postalCode: '72192',
          addressCountry: 'MX',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 19.0414398,
          longitude: -98.2062727,
        },
        telephone: '+52-222-225-2125',
        url: SITE.url,
        sameAs: [
          SITE.instagram,
          SITE.facebook,
        ],
        hasMenu: `${SITE.url}/#menu`,
        acceptsReservations: false,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '09:00',
            closes: '20:30',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '150',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}#website`,
        url: SITE.url,
        name: 'Salad Bowl',
        description: 'Arma tu bowl perfecto con ingredientes frescos en Puebla',
        publisher: {
          '@id': `${SITE.url}#organization`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE.url}/menu?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE.url}#organization`,
        name: 'Salad Bowl',
        url: SITE.url,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE.url}/logo.png`,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+52-222-123-4567',
          contactType: 'customer service',
          areaServed: 'MX',
          availableLanguage: ['es', 'en'],
        },
        sameAs: [
          SITE.instagram,
          SITE.facebook,
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE.url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: SITE.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Menú',
            item: `${SITE.url}/menu`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Sucursales',
            item: `${SITE.url}/sucursales`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE.url}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Dónde encuentro restaurante de ensaladas en Puebla?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Salad Bowl es el mejor restaurante de ensaladas en Puebla. Tenemos 3 sucursales: Plaza Vía San Ángel (Atlixcáyotl), Zavaleta y Lomas de Angelópolis. Ofrecemos ensaladas frescas personalizadas, bowls, wraps, paninis y açaí bowls.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cómo funciona armar tu ensalada en Salad Bowl?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'En 3 pasos: 1) Elige tu base (lechuga, pasta, quinoa), 2) Selecciona ingredientes de nuestra barra fresca (verduras, proteínas, quesos, frutos secos), 3) Elige tu aderezo favorito. ¡Crea tu bowl perfecto!',
            },
          },
          {
            '@type': 'Question',
            name: '¿Tienen opciones vegetarianas y veganas?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí, tenemos muchas opciones vegetarianas y veganas. Puedes armar tu ensalada con verduras frescas, legumbres, quinoa, frutos secos y aderezos veganos. Pregunta por nuestras opciones plant-based.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Salad Bowl ofrece servicio a domicilio?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí, hacemos entregas a domicilio en Puebla. Puedes ordenar por WhatsApp o mediante apps de delivery. Mantén tus ensaladas frescas con nuestro servicio rápido.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Qué horarios tienen las sucursales?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Plaza Vía y Zavaleta: Lunes a Domingo 9:00 AM - 8:30 PM. Lomas de Angelópolis: Lunes a Viernes 9:00 AM - 8:30 PM, Sábado y Domingo 12:00 PM - 8:30 PM.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cuánto cuesta una ensalada en Salad Bowl?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nuestros bowls y ensaladas tienen precios accesibles desde $100 MXN. El precio depende de tu base, ingredientes y proteínas. Ofrecemos excelente relación calidad-precio con ingredientes frescos.',
            },
          },
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE.url}#location-zavaleta`,
        name: 'Salad Bowl Zavaleta',
        image: `${SITE.url}/logo.png`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Calz Zavaleta 3916',
          addressLocality: 'Puebla',
          addressRegion: 'PUE',
          postalCode: '72150',
          addressCountry: 'MX',
        },
        telephone: '+52-222-169-5444',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '11:00',
          closes: '20:00',
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE.url}#location-angelopolis`,
        name: 'Salad Bowl Lomas de Angelópolis',
        image: `${SITE.url}/logo.png`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Blvd. los Reyes 6201',
          addressLocality: 'Puebla',
          addressRegion: 'PUE',
          postalCode: '72830',
          addressCountry: 'MX',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '20:30',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday', 'Sunday'],
            opens: '12:00',
            closes: '20:30',
          },
        ],
      },
    ],
  };

  return (
    <html lang="es-MX">
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Geo Tags para SEO Local */}
        <meta name="geo.region" content="MX-PUE" />
        <meta name="geo.placename" content="Puebla" />
        <meta name="geo.position" content="19.0414398;-98.2062727" />
        <meta name="ICBM" content="19.0414398, -98.2062727" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect para rendimiento */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className='select-none'>{children}</main>
      </body>
    </html>
  );
}
