// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DynamicHeader from "@/components/DynamicHeader";
import Footer from "@/components/Footer";
import TranslationProvider from "@/components/TranslationProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jorge-de-la-mora-cv.netlify.app/"),
  title:
    "Creative Project Manager & Marketing Strategist | Adriana Mejía Rivera",
  description:
    "Creative y data-driven Project Manager con 8+ años en marketing y liderazgo creativo. Especialista en campañas multi-canal, gestión de equipos internacionales y estrategias de performance digital.",
  keywords: [
    "project manager",
    "marketing",
    "creative",
    "digital marketing",
    "meta ads",
    "scrum",
    "kanban",
    "México",
    "Puebla",
  ],
  authors: [{ name: "Marcela Adriana Mejía Rivera", url: "https://jorge-de-la-mora-cv.netlify.app/" }],
  creator: "Marcela Adriana Mejía Rivera",
  publisher: "Marcela Adriana Mejía Rivera",
  robots: "index, follow",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://jorge-de-la-mora-cv.netlify.app/",
    siteName: "Adriana Mejía Rivera",
    title: "Creative Project Manager & Marketing Strategist",
    description:
      "Creative y data-driven Project Manager con 8+ años transformando el rendimiento de marketing con ROI medible.",
    images: [
      // JPG fallback primero (WhatsApp-friendly)
      { url: "/adriana-foto.jpg", width: 1200, height: 630, alt: "Adriana Mejía Rivera - cover" },
      // Opcional: versión WebP
      { url: "/adriana-foto.webp", width: 1200, height: 630, alt: "Adriana Mejía Rivera - cover", type: "image/webp" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@", // si tienes usuario, colócalo
    title: "Creative Project Manager | Adriana Mejía Rivera",
    description:
      "Creative y data-driven Project Manager especializada en marketing digital y liderazgo de equipos internacionales.",
    images: ["/adriana-foto.jpg"],
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
              name: "Marcela Adriana Mejía Rivera",
              jobTitle: "Creative Project Manager & Marketing Strategist",
              url: "https://jorge-de-la-mora-cv.netlify.app/",
              image: "https://jorge-de-la-mora-cv.netlify.app//adriana-foto.jpg",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "UPAEP, Puebla, México",
              },
              knowsLanguage: ["es", "en", "fr"],
              sameAs: [
                // agrega redes si quieres
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white min-h-screen antialiased`}>
        <div className="select-none">
          <TranslationProvider>
            <DynamicHeader />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </TranslationProvider>
        </div>
      </body>
    </html>
  );
}
