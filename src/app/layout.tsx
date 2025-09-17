import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DynamicHeader from "@/components/DynamicHeader";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jorge de la Mora Menéndez | Emprendedor • Producto & Operaciones • Tech-driven",
  description: "Emprendedor mexicano especializado en producto y operaciones. Fundador de Mercado a la Mano (+$1,000,000 MXN/mes), WeLoveCode y Zephir Jewelry.",
  keywords: "emprendedor, producto, operaciones, tecnología, marketplace, distribución, México, Puebla",
  authors: [{ name: "Jorge de la Mora Menéndez" }],
  creator: "Jorge de la Mora Menéndez",
  publisher: "Jorge de la Mora Menéndez",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://jorgedlm.com",
    siteName: "Jorge de la Mora Menéndez",
    title: "Jorge de la Mora Menéndez | Emprendedor • Producto & Operaciones • Tech-driven",
    description: "Emprendedor mexicano especializado en producto y operaciones. Fundador de Mercado a la Mano (+$1,000,000 MXN/mes), WeLoveCode y Zephir Jewelry.",
    images: [
      {
        url: "/jorge-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Jorge de la Mora Menéndez - Emprendedor y Fundador"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorge de la Mora Menéndez | Emprendedor • Producto & Operaciones • Tech-driven",
    description: "Emprendedor mexicano especializado en producto y operaciones. Fundador de Mercado a la Mano (+$1,000,000 MXN/mes), WeLoveCode y Zephir Jewelry.",
    images: ["/jorge-profile.jpg"]
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f2937"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* JSON-LD Schema for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jorge de la Mora Menéndez",
              "jobTitle": "Emprendedor • Producto & Operaciones • Tech-driven",
              "description": "Emprendedor mexicano especializado en producto y operaciones. Fundador de Mercado a la Mano, WeLoveCode y Zephir Jewelry.",
              "url": "https://jorgedlm.com",
              "image": "https://jorgedlm.com/jorge-profile.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Puebla",
                "addressCountry": "México"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Universidad Iberoamericana Puebla",
                "description": "Licenciatura en Economía y Finanzas"
              },
              "knowsLanguage": [
                {
                  "@type": "Language",
                  "name": "Español",
                  "proficiencyLevel": "Nativo"
                },
                {
                  "@type": "Language", 
                  "name": "Inglés",
                  "proficiencyLevel": "Fluido"
                },
                {
                  "@type": "Language",
                  "name": "Francés", 
                  "proficiencyLevel": "Fluido"
                },
                {
                  "@type": "Language",
                  "name": "Italiano",
                  "proficiencyLevel": "Básico"
                }
              ],
              "foundedOrganization": [
                {
                  "@type": "Organization",
                  "name": "Mercado a la Mano",
                  "url": "https://www.mercadoalamano.com"
                },
                {
                  "@type": "Organization", 
                  "name": "WeLoveCode",
                  "url": "https://www.welovecode.mx"
                },
                {
                  "@type": "Organization",
                  "name": "Zephir Jewelry",
                  "url": "https://www.zephir.mx"
                }
              ],
              "email": "hola@welovecode.mx"
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white min-h-screen antialiased`}>
        <div className="select-none">
          <DynamicHeader />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

