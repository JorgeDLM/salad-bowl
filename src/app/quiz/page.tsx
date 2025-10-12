'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PersonaSelector } from '@/components/selectors/PersonaSelector';
import { OcasionMultiSelector } from '@/components/selectors/OcasionMultiSelector';
import { EstiloMultiSelector } from '@/components/selectors/EstiloMultiSelector';
import { BudgetChips } from '@/components/selectors/BudgetChips';
import { KitCard } from '@/components/commerce/KitCard';
import { Button } from '@/components/ui/Button';
import { Persona, Ocasion, Estilo, Tier } from '@/types/regalazo';
import { kits } from '@/data/kits';
import { filterKits } from '@/lib/filters';

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedPersona, setSelectedPersona] = useState<Persona | undefined>();
  const [selectedOcasiones, setSelectedOcasiones] = useState<Ocasion[]>([]);
  const [selectedEstilos, setSelectedEstilos] = useState<Estilo[]>([]);
  const [selectedTier, setSelectedTier] = useState<Tier | undefined>();

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return !!selectedPersona;
      case 2:
        return selectedOcasiones.length > 0;
      case 3:
        return true; // Estilo is optional
      case 4:
        return !!selectedTier;
      default:
        return false;
    }
  };

  // Filtrar por múltiples ocasiones y estilos
  const recommendations = kits.filter(kit => {
    if (selectedPersona && !kit.personas.includes(selectedPersona)) return false;
    if (selectedOcasiones.length > 0 && !selectedOcasiones.some(oc => kit.ocasiones.includes(oc))) return false;
    if (selectedEstilos.length > 0 && !selectedEstilos.some(es => kit.estilos.includes(es))) return false;
    return true;
  }).slice(0, 3);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-white border-b border-[color:var(--border)] sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => router.push('/regalazo')}
              className="text-[color:var(--chip-ink)] hover:text-[color:var(--brand-terracotta)] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h1 className="text-xl font-fraunces font-semibold text-ink">
              {step === totalSteps ? 'Tus recomendaciones' : 'Encuentra tu regalo'}
            </h1>
            <div className="w-6" /> {/* Spacer */}
          </div>

          {/* Progress Bar */}
          {step < totalSteps && (
            <div className="w-full bg-[color:var(--muted)] rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-terra to-brand-wine transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Quiz Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {step === 1 && (
          <div className="space-y-8 animate-fade-in-up">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-fraunces font-bold text-ink mb-3">
                ¿Para quién es el regalo?
              </h2>
              <p className="text-lg text-[color:var(--chip-ink)]">
                Paso 1 de {totalSteps}
              </p>
            </div>
            <PersonaSelector selected={selectedPersona} onChange={setSelectedPersona} />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-fade-in-up">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-fraunces font-bold text-ink mb-3">
                ¿Qué ocasión?
              </h2>
              <p className="text-sm text-ink/60">Puedes elegir varias</p>
            </div>
            <OcasionMultiSelector selected={selectedOcasiones} onChange={setSelectedOcasiones} />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8 animate-fade-in-up">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-fraunces font-bold text-ink mb-3">
                ¿Qué estilo?
              </h2>
              <p className="text-sm text-ink/60">(Opcional) Puedes elegir varios</p>
            </div>
            <EstiloMultiSelector selected={selectedEstilos} onChange={setSelectedEstilos} />
          </div>
        )}

        {step === 4 && (
          <div className="space-y-8 animate-fade-in-up">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-fraunces font-bold text-ink mb-3">
                ¿Cuánto quieres gastar?
              </h2>
              <p className="text-lg text-[color:var(--chip-ink)]">
                Máximo que quieres invertir
              </p>
            </div>
            <BudgetChips selected={selectedTier} onChange={setSelectedTier} />
          </div>
        )}

        {/* Results */}
        {step > totalSteps && (
          <div className="space-y-12 animate-fade-in-up">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-fraunces font-bold text-ink mb-3">
                ¡Perfecto! Estos son para ti
              </h2>
              <p className="text-lg text-[color:var(--chip-ink)]">
                {recommendations.length} {recommendations.length === 1 ? 'kit seleccionado' : 'kits seleccionados'} especialmente para ti
              </p>
            </div>

            {recommendations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendations.map((kit) => (
                  <KitCard key={kit.id} kit={kit} selectedTier={selectedTier} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-[color:var(--chip-ink)] mb-6">
                  No encontramos kits exactos, pero tenemos muchas opciones
                </p>
                <Button onClick={() => router.push('/regalazo')}>
                  Ver todos los kits
                </Button>
              </div>
            )}

            <div className="flex justify-center gap-4">
              <Button onClick={() => setStep(1)} variant="outline">
                Reiniciar quiz
              </Button>
              <Button onClick={() => router.push('/regalazo')}>
                Ver todos los kits
              </Button>
            </div>
          </div>
        )}

        {/* Navigation */}
        {step <= totalSteps && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[color:var(--border)] py-4 z-30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-ink/70 hover:text-ink transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Atrás
                </button>
              ) : (
                <div></div>
              )}

              {step === totalSteps ? (
                <Button
                  size="lg"
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className="disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Ver recomendaciones
                </Button>
              ) : (
                <Button
                  size="lg"
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Siguiente
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
