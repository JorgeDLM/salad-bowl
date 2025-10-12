'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SITE } from '@/config';

export default function EmpresasPage() {
  const router = useRouter();

  const handleWhatsAppB2B = () => {
    const message = 'Hola, me interesa conocer más sobre los servicios corporativos de Regalazo.';
    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-wine via-brand-terra to-brand-terra-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver
          </button>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold mb-6">
              Regalos corporativos que dejan huella
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Fortalece tu cultura empresarial con regalos significativos y estéticos.
            </p>
            <Button
              size="lg"
              onClick={handleWhatsAppB2B}
              className="bg-white text-brand-terra hover:bg-cream"
            >
              Solicitar cotización
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-fraunces font-bold text-ink text-center mb-12">
            ¿Por qué Regalazo para tu empresa?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-fraunces font-semibold text-ink mb-3">
                Volumen sin esfuerzo
              </h3>
              <p className="text-[color:var(--chip-ink)]">
                Gestión completa de pedidos masivos. Desde 10 hasta 500+ kits coordinados.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-sage/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-fraunces font-semibold text-ink mb-3">
                Personalización total
              </h3>
              <p className="text-[color:var(--chip-ink)]">
                Tu logo, tus colores, tu mensaje. Tarjetas co-branded y empaque personalizado.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-brand-terra/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-fraunces font-semibold text-ink mb-3">
                Logística coordinada
              </h3>
              <p className="text-[color:var(--chip-ink)]">
                Entregas simultáneas o escalonadas. Rastreo por destinatario.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-fraunces font-bold text-ink text-center mb-12">
            Casos de uso
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-fraunces font-bold text-ink mb-4">
                🎉 Onboarding & Aniversarios
              </h3>
              <p className="text-[color:var(--chip-ink)] mb-4">
                Dale la bienvenida a tu equipo o celebra trayectorias con kits que transmiten cultura.
              </p>
              <ul className="space-y-2 text-[color:var(--chip-ink)]">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automatización de fechas clave
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mensaje personalizado por líder
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Envío a domicilio o oficina
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-fraunces font-bold text-ink mb-4">
                🎁 Clientes & Partners
              </h3>
              <p className="text-[color:var(--chip-ink)] mb-4">
                Fortalece relaciones comerciales con detalles memorables y de alta calidad.
              </p>
              <ul className="space-y-2 text-[color:var(--chip-ink)]">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Logo corporativo en tarjeta
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Rangos de presupuesto flexibles
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Facturación directa
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-fraunces font-bold text-ink mb-4">
                🌟 Eventos & Conferencias
              </h3>
              <p className="text-[color:var(--chip-ink)] mb-4">
                Welcome kits o agradecimientos para asistentes que realmente quieran conservar.
              </p>
              <ul className="space-y-2 text-[color:var(--chip-ink)]">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Diseño exclusivo del evento
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Entrega en venue o remoto
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Coordinación de última hora
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-fraunces font-bold text-ink mb-4">
                🏆 Reconocimientos
              </h3>
              <p className="text-[color:var(--chip-ink)] mb-4">
                Premia desempeño, cumpleaños o logros con algo tangible y especial.
              </p>
              <ul className="space-y-2 text-[color:var(--chip-ink)]">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Kits por nivel de reconocimiento
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mensaje del CEO/gerencia
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Preferencias individuales
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-fraunces font-bold text-ink text-center mb-4">
            Precios corporativos
          </h2>
          <p className="text-xl text-[color:var(--chip-ink)] text-center mb-12 max-w-2xl mx-auto">
            Descuentos por volumen y servicios adicionales según necesidad
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <h3 className="text-lg font-fraunces font-semibold text-ink mb-2">
                Starter
              </h3>
              <p className="text-3xl font-bold text-brand-terra mb-4">
                10-50 kits
              </p>
              <p className="text-sm text-[color:var(--chip-ink)]">
                5% descuento • Tarjetas personalizadas • Coordinación básica
              </p>
            </Card>

            <Card className="p-6 text-center border-2 border-gold">
              <div className="inline-block px-3 py-1 bg-gold/20 rounded-full text-xs font-semibold text-gold mb-2">
                Más popular
              </div>
              <h3 className="text-lg font-fraunces font-semibold text-ink mb-2">
                Growth
              </h3>
              <p className="text-3xl font-bold text-brand-terra mb-4">
                51-200 kits
              </p>
              <p className="text-sm text-[color:var(--chip-ink)]">
                10% descuento • Logo corporativo • Account manager dedicado
              </p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-lg font-fraunces font-semibold text-ink mb-2">
                Enterprise
              </h3>
              <p className="text-3xl font-bold text-brand-terra mb-4">
                200+ kits
              </p>
              <p className="text-sm text-[color:var(--chip-ink)]">
                15% descuento • Diseño personalizado • Logística dedicada
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={handleWhatsAppB2B}>
              Solicitar cotización
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cream to-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-fraunces font-bold text-ink mb-6">
            ¿Listo para sorprender a tu equipo?
          </h2>
          <p className="text-xl text-[color:var(--chip-ink)] mb-8">
            Contáctanos y te enviamos propuestas en menos de 24 horas.
          </p>
          <Button size="lg" onClick={handleWhatsAppB2B}>
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contactar vía WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
