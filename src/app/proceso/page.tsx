import React from 'react';
import { Button } from '@/components/ui/Button';
import { TargetIcon, PencilIcon, BoxIcon, TruckIcon } from '@/components/ui/Icons';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Link from 'next/link';

export default function ProcesoPage() {
  const steps = [
    {
      number: '01',
      title: 'Elige tu Regalazo',
      description: 'Usa nuestro quiz interactivo para encontrar el kit perfecto basado en tu presupuesto, destinatario y ocasión.',
      Icon: TargetIcon,
    },
    {
      number: '02',
      title: 'Personaliza',
      description: 'Agrega una nota personalizada y elige tu nivel de kit (Mini, Clásico o Deluxe).',
      Icon: PencilIcon,
    },
    {
      number: '03',
      title: 'Nosotros lo armamos',
      description: 'Preparamos tu kit con amor, cuidando cada detalle del empaque para que se vea hermoso.',
      Icon: BoxIcon,
    },
    {
      number: '04',
      title: 'Lo entregamos',
      description: 'Lo llevamos directamente a tu persona especial en Puebla. Tú solo relájate.',
      Icon: TruckIcon,
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
    <div className="min-h-screen bg-gradient-to-b from-cream via-paper to-cream pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-brand-terra/10 rounded-full mb-4">
              <span className="text-brand-terra font-semibold">Proceso Simple</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-fraunces font-bold text-ink mb-4">
              ¿Cómo funciona?
            </h1>
            <p className="text-xl md:text-2xl text-ink/70 max-w-2xl mx-auto">
              Crear el regalo perfecto nunca fue tan fácil
            </p>
          </div>
        </ScrollReveal>

        {/* Proceso */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 100} direction={index % 2 === 0 ? "left" : "right"}>
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl h-full group hover:shadow-2xl transition-all duration-500 border border-brand-terra/10">
                  <div className="flex items-start gap-6">
                    {/* Número y decoración */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-terra/20 to-brand-wine/20 rounded-2xl transform rotate-6"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-br from-brand-terra to-brand-wine rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          <span className="text-3xl font-fraunces font-bold text-white">{step.number}</span>
                        </div>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="flex-1">
                      {/* Icono grande */}
                      <div className="inline-flex p-3 bg-gradient-to-br from-brand-terra/10 to-brand-wine/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-500">
                        <step.Icon className="w-8 h-8 text-brand-terra" />
                      </div>
                      
                      <h3 className="text-2xl font-fraunces font-bold text-ink mb-3 group-hover:text-brand-terra transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-lg text-ink/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Decoración inferior */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/5 to-transparent rounded-tl-full"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* FAQs */}
        <ScrollReveal delay={400}>
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
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={500}>
          <div className="text-center bg-gradient-to-br from-brand-terra/10 to-brand-wine/10 rounded-3xl p-12">
            <h2 className="text-3xl font-fraunces font-bold text-ink mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-xl text-ink/70 mb-6">
              Crea tu Regalazo perfecto en menos de 2 minutos
            </p>
            <Link href="/quiz">
              <Button size="lg" className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Iniciar Quiz
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
