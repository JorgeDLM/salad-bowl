// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DynamicHeader from "@/components/DynamicHeader";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jorge-de-la-mora-cv.netlify.app/"),
  title:
    "Producto & Operaciones para escalar negocios | Jorge de la Mora",
  description:
    "Ayudo a escalar operaciones y producto con enfoque en métricas, procesos y tecnología. Fundador de Mercado a la Mano, WeLoveCode y Zephir Jewelry.",
  keywords: [
    "producto",
    "operaciones",
    "estrategia",
    "tecnología",
    "marketplace",
    "México",
    "Puebla",
  ],
  authors: [{ name: "Jorge de la Mora Menéndez", url: "https://jorge-de-la-mora-cv.netlify.app/" }],
  creator: "Jorge de la Mora Menéndez",
  publisher: "Jorge de la Mora Menéndez",
  robots: "index, follow",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://jorge-de-la-mora-cv.netlify.app/",
    siteName: "Jorge de la Mora",
    title: "Producto & Operaciones para escalar negocios",
    description:
      "Ejecución y estrategia de producto/ops para crecer con márgenes sanos.",
    images: [
      // JPG fallback primero (WhatsApp-friendly)
      { url: "/yoFoto.jpg", width: 1200, height: 630, alt: "Jorge de la Mora - cover" },
      // Opcional: versión WebP
      { url: "/yoFoto.webp", width: 1200, height: 630, alt: "Jorge de la Mora - cover", type: "image/webp" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@", // si tienes usuario, colócalo
    title: "Producto & Operaciones | Jorge de la Mora",
    description:
      "Estrategia y ejecución para escalar con tecnología y procesos.",
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f2937",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* JSON-LD (opc: simplifícalo, evita props no estándar) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://jorge-de-la-mora-cv.netlify.app//#person",
              name: "Jorge de la Mora Menéndez",
              jobTitle: "Producto & Operaciones",
              url: "https://jorge-de-la-mora-cv.netlify.app/",
              image: "https://jorge-de-la-mora-cv.netlify.app//og.jpg",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Universidad Iberoamericana Puebla",
              },
              knowsLanguage: ["es", "en", "fr", "it"],
              sameAs: [
                // agrega redes si quieres
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white min-h-screen antialiased`}>
        <div className="select-none">
          <DynamicHeader />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
