'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { SparkleIcon } from '@/components/ui/Icons';

const phrases = [
  'AMOR',
  'FELICIDAD',
  'SORPRESAS',
  'MOMENTOS',
  'ALEGRÍA',
  'EMOCIONES'
];

export default function TypewriterHero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
          setTypingSpeed(150);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setTypingSpeed(0);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Fondo con textura de papel */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: 'url(/img/texture/paper-soft-2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Overlay sutil para mejor contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-transparent to-paper/40"></div>

      {/* Efectos de luz muy suaves */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-terra/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/8 via-transparent to-transparent"></div>

      {/* Partículas flotantes elegantes */}
      <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-brand-terra/30 rounded-full animate-float opacity-50 blur-[1px]"></div>
      <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-gold/25 rounded-full animate-float-delayed opacity-40 blur-[1px]"></div>
      <div className="absolute bottom-[20%] left-[20%] w-2.5 h-2.5 bg-brand-wine/25 rounded-full animate-float opacity-35 blur-[1px]"></div>
      <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-sage/30 rounded-full animate-float-delayed opacity-40 blur-[1px]"></div>
      <div className="absolute bottom-[30%] left-[70%] w-1.5 h-1.5 bg-brand-terra/25 rounded-full animate-float opacity-35 blur-[1px]"></div>
      <div className="absolute top-[40%] left-[5%] w-2 h-2 bg-gold/20 rounded-full animate-float-delayed opacity-25 blur-[1px]"></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo con color */}
          <div className="flex justify-center mb-8">
            <Image 
              src="/regalazo.svg" 
              alt="Regalazo" 
              width={200} 
              height={67}
              className="w-40 md:w-48 drop-shadow-[0_2px_8px_rgba(200,107,91,0.3)]"
              priority
            />
          </div>

          {/* Typewriter effect */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-fraunces font-bold text-ink mb-2 md:mb-4">
              Obsequia
            </h1>
            <div className="h-16 sm:h-20 md:h-28 flex items-center justify-center">
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-fraunces font-bold bg-gradient-to-r from-brand-terra via-brand-wine to-brand-terra bg-clip-text text-transparent">
                {currentText}
              </h2>
            </div>
          </div>

          {/* Subtítulo con icono */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <SparkleIcon className="w-5 h-5 text-gold animate-pulse" />
            <p className="text-lg sm:text-xl md:text-2xl text-ink/70 font-medium">
              Kits de regalo · Entrega mismo día · CDMX
            </p>
            <SparkleIcon className="w-5 h-5 text-gold animate-pulse" />
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Link href="/quiz">
              <Button
                size="lg"
                className="min-w-[220px] shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Armar mi Regalazo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
