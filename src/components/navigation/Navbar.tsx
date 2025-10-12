'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[color:var(--border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/regalazo.svg" 
              alt="Regalazo" 
              width={120} 
              height={40}
              className="w-28 md:w-32 drop-shadow-sm"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/quiz" 
              className="text-ink hover:text-brand-terra transition-all duration-300 font-medium relative group"
            >
              Arma tu kit
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-terra group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              href="/nosotros" 
              className="text-ink hover:text-brand-terra transition-all duration-300 font-medium relative group"
            >
              Nosotros
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-terra group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              href="/proceso" 
              className="text-ink hover:text-brand-terra transition-all duration-300 font-medium relative group"
            >
              Cómo funciona
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-terra group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              href="/contacto" 
              className="text-ink hover:text-brand-terra transition-all duration-300 font-medium relative group"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-terra group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/quiz">
              <Button size="sm" className="hover:scale-105 hover:shadow-lg transition-all duration-300">
                Crear regalo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-cream transition-colors"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6 text-ink" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[color:var(--border)]">
            <div className="flex flex-col gap-4">
              <Link 
                href="/quiz" 
                className="text-ink hover:text-brand-terra transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Arma tu kit
              </Link>
              <Link 
                href="/nosotros" 
                className="text-ink hover:text-brand-terra transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                href="/proceso" 
                className="text-ink hover:text-brand-terra transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cómo funciona
              </Link>
              <Link 
                href="/contacto" 
                className="text-ink hover:text-brand-terra transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link href="/quiz" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="w-full">
                  Crear regalo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
