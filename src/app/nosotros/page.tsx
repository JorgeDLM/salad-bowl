import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { PaletteIcon, LeafIcon, GiftIcon, SparkleIcon } from '@/components/ui/Icons';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Link from 'next/link';

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-paper to-cream">
      {/* Hero Section con fondo aesthetic */}
      <section className="relative py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-terra/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-terra to-transparent mx-auto mb-6"></div>
              </div>
              <h1 className="text-5xl md:text-7xl font-fraunces font-bold text-ink mb-6 leading-tight">
                Creamos <span className="text-brand-terra">Momentos</span><br/>
                que Perduran
              </h1>
              <p className="text-xl md:text-2xl text-ink/60 max-w-2xl mx-auto leading-relaxed">
                Cada regalo cuenta una historia, cada detalle importa
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Historia Section con diseño aesthetic */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={100} direction="left">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-terra/10 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full"></div>
                <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-brand-terra/10">
                  <div className="inline-block p-3 bg-brand-terra/10 rounded-2xl mb-6">
                    <GiftIcon className="w-10 h-10 text-brand-terra" />
                  </div>
                  <h2 className="text-4xl font-fraunces font-bold text-ink mb-6">
                    Nuestra Historia
                  </h2>
                  <div className="space-y-5 text-lg text-ink/70 leading-relaxed">
                    <p>
                      Regalazo nació de la idea de hacer regalos memorables más accesibles. 
                      Sabemos que encontrar el regalo perfecto puede ser estresante.
                    </p>
                    <p>
                      Creamos kits cuidadosamente curados que combinan productos locales de alta calidad 
                      con presentaciones que hacen que cada regalo sea especial.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="right">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-brand-terra/5 to-brand-wine/5 rounded-3xl p-8 border border-brand-terra/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">💝</span>
                    </div>
                    <h3 className="text-2xl font-fraunces font-bold text-ink">
                      Con Amor
                    </h3>
                  </div>
                  <p className="text-ink/70 leading-relaxed">
                    Cada kit es preparado con dedicación y atención al detalle
                  </p>
                </div>

                <div className="bg-gradient-to-br from-sage/10 to-gold/5 rounded-3xl p-8 border border-sage/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <h3 className="text-2xl font-fraunces font-bold text-ink">
                      Local
                    </h3>
                  </div>
                  <p className="text-ink/70 leading-relaxed">
                    Apoyamos negocios de Puebla y priorizamos productos sostenibles
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gold/10 to-brand-terra/5 rounded-3xl p-8 border border-gold/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-2xl font-fraunces font-bold text-ink">
                      Especial
                    </h3>
                  </div>
                  <p className="text-ink/70 leading-relaxed">
                    Transformamos simples regalos en experiencias memorables
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Valores Section con grid aesthetic */}
      <section className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-brand-terra/10 rounded-full mb-4">
                <span className="text-brand-terra font-semibold">Nuestros Valores</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-fraunces font-bold text-ink">
                Lo que nos Define
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={200} direction="left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-terra/20 to-brand-wine/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-terra/20 to-brand-wine/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <PaletteIcon className="w-10 h-10 text-brand-terra" />
                  </div>
                  <h3 className="text-2xl font-fraunces font-bold text-ink mb-3 group-hover:text-brand-terra transition-colors duration-300">
                    Curación
                  </h3>
                  <p className="text-ink/70 leading-relaxed">
                    Cada producto es seleccionado con dedicación para crear experiencias únicas y memorables
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} direction="up">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-gold/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-br from-sage/30 to-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <LeafIcon className="w-10 h-10 text-brand-terra" />
                  </div>
                  <h3 className="text-2xl font-fraunces font-bold text-ink mb-3 group-hover:text-brand-terra transition-colors duration-300">
                    Sostenibilidad
                  </h3>
                  <p className="text-ink/70 leading-relaxed">
                    Apoyamos negocios locales de Puebla y priorizamos productos eco-friendly y sostenibles
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} direction="right">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-brand-terra/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-brand-terra/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <GiftIcon className="w-10 h-10 text-brand-terra" />
                  </div>
                  <h3 className="text-2xl font-fraunces font-bold text-ink mb-3 group-hover:text-brand-terra transition-colors duration-300">
                    Experiencia
                  </h3>
                  <p className="text-ink/70 leading-relaxed">
                    Desde el empaque hasta la entrega, cada detalle está pensado para sorprender
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Final con diseño aesthetic */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={500}>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-terra via-brand-wine to-brand-terra opacity-90"></div>
              <div className="relative px-8 py-16 text-center">
                <div className="inline-block mb-6">
                  <SparkleIcon className="w-12 h-12 text-gold animate-pulse" />
                </div>
                <h2 className="text-3xl md:text-4xl font-fraunces font-bold text-white mb-4">
                  ¿Listo para crear momentos especiales?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">
                  Descubre el kit perfecto para tu persona especial
                </p>
                <Link href="/quiz">
                  <Button size="lg" className="bg-white text-brand-terra hover:bg-cream hover:scale-105 transition-all duration-300 shadow-2xl">
                    Armar mi Regalazo
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
