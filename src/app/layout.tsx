import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/config";
import Navbar from "@/components/navigation/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Regalazo - Kits de Regalo Estéticos | Entrega Mismo Día",
    template: "%s | Regalazo",
  },
  description:
    "Kits de regalo estéticos hechos con amor. Productos locales, empaque hermoso y entrega el mismo día. Desde $499. Nota personalizada incluida.",
  keywords: [
    "regalos",
    "kits de regalo",
    "regalos estéticos",
    "entrega mismo día",
    "regalos CDMX",
    "regalos personalizados",
    "gift box",
    "regalos para ella",
    "regalos para él",
    "regalos bebé",
  ],
  authors: [{ name: SITE.brand }],
  creator: SITE.brand,
  publisher: SITE.brand,
  robots: "index, follow",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE.url,
    siteName: SITE.brand,
    title: "Regalazo - Kits de Regalo Estéticos",
    description: "Kits de regalo hechos con amor. Entrega mismo día en CDMX.",
    images: [
      {
        url: "/img/brand/og-cover.webp",
        width: 1200,
        height: 630,
        alt: "Regalazo - Kits de Regalo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regalazo - Kits de Regalo Estéticos",
    description: "Kits de regalo hechos con amor. Entrega mismo día en CDMX.",
    images: ["/img/brand/og-cover.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C86B5B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.brand,
              url: SITE.url,
              logo: `${SITE.url}/img/brand/logo-regalazo.svg`,
              description:
                "Kits de regalo estéticos con entrega mismo día en CDMX",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: SITE.whatsapp,
                contactType: "Customer Service",
                areaServed: "MX",
                availableLanguage: ["Spanish"],
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-cream min-h-screen antialiased`}>
        <Navbar />
        <main className="select-none">{children}</main>
      </body>
    </html>
  );
}
