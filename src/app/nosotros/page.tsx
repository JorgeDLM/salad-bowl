import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-fraunces font-bold text-ink mb-4">
            Nosotros
          </h1>
          <p className="text-xl md:text-2xl text-ink/70">
            Creamos momentos especiales con amor y dedicación
          </p>
        </div>

        {/* Historia */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-8">
          <h2 className="text-3xl font-fraunces font-bold text-ink mb-6">
            Nuestra Historia
          </h2>
          <div className="space-y-4 text-lg text-ink/80">
            <p>
              Regalazo nació de la idea de hacer regalos memorables más accesibles. 
              Sabemos que encontrar el regalo perfecto puede ser estresante y consumir mucho tiempo.
            </p>
            <p>
              Por eso creamos kits cuidadosamente curados que combinan productos locales de alta calidad 
              con presentaciones hermosas que hacen que cada regalo sea especial.
            </p>
            <p>
              Operamos en Puebla y nos enorgullece apoyar a negocios locales mientras entregamos 
              alegría a nuestros clientes.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-fraunces font-bold text-ink mb-2">
              Curación con Amor
            </h3>
            <p className="text-ink/70">
              Cada producto es seleccionado cuidadosamente para crear experiencias únicas
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-fraunces font-bold text-ink mb-2">
              Local & Sostenible
            </h3>
            <p className="text-ink/70">
              Apoyamos negocios locales y priorizamos productos eco-friendly
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-4">💝</div>
            <h3 className="text-xl font-fraunces font-bold text-ink mb-2">
              Experiencia Total
            </h3>
            <p className="text-ink/70">
              Desde el empaque hasta la entrega, cuidamos cada detalle
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-ink/70 mb-6">
            ¿Listo para crear tu Regalazo perfecto?
          </p>
          <Link href="/quiz">
            <Button size="lg">
              Armar mi Regalazo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
