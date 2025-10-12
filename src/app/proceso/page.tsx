import React from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ProcesoPage() {
  const steps = [
    {
      number: '01',
      title: 'Elige tu Regalazo',
      description: 'Usa nuestro quiz interactivo para encontrar el kit perfecto basado en tu presupuesto, destinatario y ocasión.',
      icon: '🎯',
    },
    {
      number: '02',
      title: 'Personaliza',
      description: 'Agrega una nota personalizada y elige tu nivel de kit (Mini, Clásico o Deluxe).',
      icon: '✍️',
    },
    {
      number: '03',
      title: 'Nosotros lo armamos',
      description: 'Preparamos tu kit con amor, cuidando cada detalle del empaque para que se vea hermoso.',
      icon: '📦',
    },
    {
      number: '04',
      title: 'Lo entregamos',
      description: 'Lo llevamos directamente a tu persona especial en Puebla. Tú solo relájate.',
      icon: '🚚',
    },
  ];

  const faqs = [
    {
      question: '¿Qué incluye el servicio?',
      answer: 'Cada Regalazo incluye el kit seleccionado, empaque premium, tarjeta personalizada y entrega en Puebla.',
    },
    {
      question: '¿Cuánto tiempo tarda la entrega?',
      answer: 'La mayoría de nuestros kits tienen disponibilidad para entrega el mismo día o al día siguiente.',
    },
    {
      question: '¿Puedo hacer cambios después de ordenar?',
      answer: 'Sí, puedes hacer cambios contactándonos por WhatsApp antes de que preparemos tu kit.',
    },
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-fraunces font-bold text-ink mb-4">
            ¿Cómo funciona?
          </h1>
          <p className="text-xl md:text-2xl text-ink/70 max-w-2xl mx-auto">
            Crear el regalo perfecto nunca fue tan fácil
          </p>
        </div>

        {/* Proceso */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-3xl p-6 shadow-lg h-full">
                {/* Número */}
                <div className="text-6xl font-fraunces font-bold text-brand-terra/20 mb-2">
                  {step.number}
                </div>
                
                {/* Icono */}
                <div className="text-5xl mb-4">{step.icon}</div>
                
                {/* Contenido */}
                <h3 className="text-xl font-fraunces font-bold text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-ink/70">
                  {step.description}
                </p>
              </div>

              {/* Flecha conectora (excepto último) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-brand-terra/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
          <h2 className="text-3xl font-fraunces font-bold text-ink mb-8 text-center">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[color:var(--border)] pb-6 last:border-0">
                <h3 className="text-xl font-bold text-ink mb-2">
                  {faq.question}
                </h3>
                <p className="text-lg text-ink/70">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-brand-terra/10 to-brand-wine/10 rounded-3xl p-12">
          <h2 className="text-3xl font-fraunces font-bold text-ink mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-ink/70 mb-6">
            Crea tu Regalazo perfecto en menos de 2 minutos
          </p>
          <Link href="/quiz">
            <Button size="lg" className="shadow-xl hover:shadow-2xl">
              Iniciar Quiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
