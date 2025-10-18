import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import { SITE } from '@/config';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} - Arma tu Bowl Perfecto | Ensaladas Frescas en Puebla`,
    template: `%s | ${SITE.name}`,
  },
  description: 'Arma tu bowl perfecto con ingredientes frescos. Salad Bowl ofrece ensaladas, wraps, paninis y açaí en Puebla. Elige tu base, ingredientes y aderezo. ¡Ordena ahora!',
  keywords: [
    // Palabras clave principales
    'arma tu ensalada',
    'restaurante de ensaladas puebla',
    'ensaladas a tu gusto',
    'bowl personalizado',
    'salad bowl puebla',
    // Long-tail keywords
    'armar bowl ensalada puebla',
    'ensaladas frescas puebla',
    'comida saludable puebla',
    'restaurante saludable',
    'bowls personalizados',
    'ensaladas personalizadas',
    // Productos
    'wraps saludables',
    'paninis',
    'açaí bowl',
    'ensaladas gourmet',
    // Localización
    'ensaladas angelópolis',
    'restaurantes saludables puebla',
    'comida fitness puebla',
    'healthy food puebla',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Salad Bowl - Arma tu Ensalada Perfecta en Puebla',
    description: 'Ensaladas frescas personalizadas, wraps, paninis y açaí. Elige tu base, ingredientes de la barra y tu aderezo favorito. 2 ubicaciones en Puebla.',
    siteName: SITE.brand,
    title: "Salad Bowl | The destiny of the salad",
    description: "Arma tu bowl perfecto en 3 pasos. El platillo perfecto lo creas Tú.",
    images: [
      {
        url: "/saladbowl/life-is-now.png",
        width: 1200,
        height: 630,
        alt: "Salad Bowl - El platillo perfecto lo creas Tú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salad Bowl | The destiny of the salad",
    description: "Arma tu bowl perfecto en 3 pasos. El platillo perfecto lo creas Tú.",
    images: ["/saladbowl/life-is-now.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f4f44",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD Structured Data para Rich Snippets de Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Restaurant',
        '@id': `${SITE.url}#restaurant`,
        name: 'Salad Bowl',
        image: `${SITE.url}/logo.png`,
        description: 'Restaurante de ensaladas frescas personalizadas, wraps, paninis y açaí en Puebla, México.',
        servesCuisine: ['Ensaladas', 'Comida Saludable', 'Bowls', 'Wraps', 'Açaí'],
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Blvd. del Niño Poblano 2510',
          addressLocality: 'Puebla',
          addressRegion: 'Puebla',
          addressCountry: 'MX',
        },
        telephone: '+52-222-123-4567',
        url: SITE.url,
        sameAs: [
          SITE.instagram,
          SITE.facebook,
        ],
        hasMenu: `${SITE.url}/menu`,
        acceptsReservations: false,
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
              description:
                "Salad Bowl - Arma tu bowl perfecto. Ensaladas frescas, wraps, paninis y açaí en Puebla.",
              servesCuisine: "Healthy Food",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Blvd. Atlixcáyotl 1504, local B5",
                addressLocality: "Puebla",
                addressCountry: "MX",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: SITE.whatsapp,
                contactType: "Customer Service",
                areaServed: "MX",
                availableLanguage: ["Spanish"],
              },
              sameAs: [SITE.instagram, SITE.facebook],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-sb-cream min-h-screen antialiased`}>
        <Navbar />
        <main className="select-none">{children}</main>
      </body>
    </html>
  );
}
