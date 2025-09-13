import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeLoveCode | Desarrollo de Software que Genera Millones",
  description: "Convertimos tu idea en un negocio de $1M+. Somos arquitectos de ingresos digitales con más de $50M recaudados por nuestros clientes.",
  keywords: "desarrollo de software, páginas web, apps móviles, CRM, sistemas administrativos, programación México, desarrollo web profesional",
  authors: [{ name: "WeLoveCode" }],
  creator: "WeLoveCode",
  publisher: "WeLoveCode",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://welovecode.mx",
    siteName: "WeLoveCode",
    title: "WeLoveCode | Desarrollo de Software que Genera Millones",
    description: "Convertimos tu idea en un negocio de $1M+. Somos arquitectos de ingresos digitales con más de $50M recaudados por nuestros clientes.",
    images: [
      {
        url: "/WeLoveCode-logo.png",
        width: 1200,
        height: 630,
        alt: "WeLoveCode - Desarrollo de Software Profesional"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "WeLoveCode | Desarrollo de Software que Genera Millones",
    description: "Convertimos tu idea en un negocio de $1M+. Somos arquitectos de ingresos digitales con más de $50M recaudados por nuestros clientes.",
    images: ["/WeLoveCode-logo.png"]
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7c3aed"
};

import ClientLayout from "./ClientLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className + " bg-gray-50 min-h-screen select-none"}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

