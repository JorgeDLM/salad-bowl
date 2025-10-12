'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TypewriterHero from '@/components/hero/TypewriterHero';
import { KitCard } from '@/components/commerce/KitCard';
import { Button } from '@/components/ui/Button';
import { CheckIcon, TruckIcon, BoxIcon } from '@/components/ui/Icons';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { kits } from '@/data/kits';

export default function RegalazoHome() {
  // Mostramos todos los kits en la home
  const displayKits = kits.slice(0, 6);

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero con typewriter */}
      <TypewriterHero />

      {/* Filtros rápidos */}
      <section className="py-12 bg-white border-b border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-fraunces font-bold text-ink mb-2">
                Filtros rápidos
              </h2>
              <p className="text-ink/60">O explora todos nuestros kits abajo</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <Link href="/para-quien/mama">
                <Button variant="outline" className="hover:scale-105 hover:shadow-md transition-all duration-300">
                  Para Mamá
                </Button>
              </Link>
              <Link href="/para-quien/papa">
                <Button variant="outline" className="hover:scale-105 hover:shadow-md transition-all duration-300">
                  Para Papá
                </Button>
              </Link>
              <Link href="/para-quien/bebe">
                <Button variant="outline" className="hover:scale-105 hover:shadow-md transition-all duration-300">
                  Para Bebé
                </Button>
              </Link>
              <Link href="/para-quien/pareja">
                <Button variant="outline" className="hover:scale-105 hover:shadow-md transition-all duration-300">
                  Para Pareja
                </Button>
              </Link>
              <Link href="/presupuesto/499">
                <Button variant="outline" className="hover:scale-105 hover:shadow-md transition-all duration-300">
                  Desde $499
                </Button>
              </Link>
              <Link href="/presupuesto/999">
                <Button variant="outline" className="hover:scale-105 hover:shadow-md transition-all duration-300">
                  Desde $999
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-br from-paper to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-fraunces font-bold text-ink mb-3">
                Nuestros Regalazos
              </h2>
              <p className="text-lg text-[color:var(--chip-ink)]">
                Los más populares
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayKits.map((kit, index) => (
              <ScrollReveal key={kit.id} delay={index * 100} direction="scale">
                <KitCard kit={kit} />
              </ScrollReveal>
            ))}
          </div>

          {kits.length > 6 && (
            <ScrollReveal delay={600}>
              <div className="text-center mt-12">
                <Link href="/quiz">
                  <Button size="lg" className="hover:scale-105 transition-transform duration-300">
                    Ver todos los kits
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Por qué Regalazo - Con iconos */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-fraunces font-bold text-ink mb-3">
                Por qué <span className="text-brand-terra">Regalazo</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <ScrollReveal delay={100} direction="left">
              <div className="text-center group cursor-default">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-terra/20 to-brand-wine/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-xl">
                  <CheckIcon className="w-10 h-10 text-brand-terra transition-transform duration-500 group-hover:scale-125" />
                </div>
                <h3 className="text-xl font-fraunces font-bold text-ink mb-3 group-hover:text-brand-terra transition-colors duration-300">
                  Hechos con amor
                </h3>
                <p className="text-ink/60 leading-relaxed">
                  Productos seleccionados con cuidado
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="up">
              <div className="text-center group cursor-default">
                <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-sage/30 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-xl">
                  <TruckIcon className="w-10 h-10 text-brand-terra transition-transform duration-500 group-hover:scale-125" />
                </div>
                <h3 className="text-xl font-fraunces font-bold text-ink mb-3 group-hover:text-brand-terra transition-colors duration-300">
                  Entrega rápida
                </h3>
                <p className="text-ink/60 leading-relaxed">
                  En Puebla, pide antes de 12 PM
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} direction="right">
              <div className="text-center group cursor-default">
                <div className="w-20 h-20 bg-gradient-to-br from-sage/20 to-gold/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-xl">
                  <BoxIcon className="w-10 h-10 text-brand-terra transition-transform duration-500 group-hover:scale-125" />
                </div>
                <h3 className="text-xl font-fraunces font-bold text-ink mb-3 group-hover:text-brand-terra transition-colors duration-300">
                  Empaque premium
                </h3>
                <p className="text-ink/60 leading-relaxed">
                  Nota personalizada incluida
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer simple */}
      <footer className="bg-ink py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Image 
                  src="/regalazo.svg" 
                  alt="Regalazo" 
                  width={120} 
                  height={40}
                  className="w-32 brightness-0 invert hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-wrap gap-6 justify-center text-sm text-white/70">
                <Link href="/empresas" className="hover:text-white hover:scale-110 transition-all duration-300">
                  Empresas
                </Link>
                <Link href="/contacto" className="hover:text-white hover:scale-110 transition-all duration-300">
                  Contacto
                </Link>
                <Link href="/quiz" className="hover:text-white hover:scale-110 transition-all duration-300">
                  Quiz
                </Link>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-white/50">
              © {new Date().getFullYear()} Regalazo. Todos los derechos reservados.
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  );
}
