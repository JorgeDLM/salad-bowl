import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeLoveCode | Desarrollo de Software que Genera Millones",
  description: "Convertimos tu idea en un negocio de $1M+. Somos arquitectos de ingresos digitales con más de $50M recaudados por nuestros clientes."
};

import ClientLayout from "./ClientLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className + " bg-gray-50 min-h-screen"}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

