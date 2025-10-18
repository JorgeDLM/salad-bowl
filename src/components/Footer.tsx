'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook } from './icons';
import { SITE } from '@/config';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-ink py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Logo
              variant="light"
              width={120}
              height={68}
            />
            <p className="text-white/60 text-sm mt-2">El platillo perfecto lo creas Tú</p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Inicio
              </Link>
              <Link
                href="/menu"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Menú
              </Link>
              <Link
                href="/sucursales"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Sucursales
              </Link>
              <Link
                href="/franquicias"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Franquicias
              </Link>
              <Link
                href="/contacto"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Contacto
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Salad Bowl. Todos los derechos reservados.
            </p>
            <Link
              href="/aviso-privacidad"
              className="text-white/50 hover:text-white/70 transition-colors text-sm"
            >
              Aviso de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
