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
        url: "/icono-app.png",
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
    images: ["/icono-app.png"]
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
      <head>
        <meta property="og:title" content="WeLoveCode | Desarrollo de Software que Genera Millones" />
        <meta property="og:description" content="Convertimos tu idea en un negocio de $1M+. Somos arquitectos de ingresos digitales con más de $50M recaudados por nuestros clientes." />
        <meta property="og:image" content="/icono-app.png" />
        <meta property="og:url" content="https://welovecode.mx" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="WeLoveCode" />
        <meta property="og:locale" content="es_MX" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WeLoveCode | Desarrollo de Software que Genera Millones" />
        <meta name="twitter:description" content="Convertimos tu idea en un negocio de $1M+. Somos arquitectos de ingresos digitales con más de $50M recaudados por nuestros clientes." />
        <meta name="twitter:image" content="/icono-app.png" />
        
        <meta name="description" content="Convertimos tu idea en un negocio de $1M+. Somos arquitectos de ingresos digitales con más de $50M recaudados por nuestros clientes." />
        <meta name="keywords" content="desarrollo de software, páginas web, apps móviles, CRM, sistemas administrativos, programación México, desarrollo web profesional" />
        <meta name="author" content="WeLoveCode" />
        <meta name="robots" content="index, follow" />
        
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className + " bg-gray-50 min-h-screen select-none"}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

