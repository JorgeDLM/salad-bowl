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

const kitImages = [
  { src: '/img/kits/aniversario-spa-0999.png', alt: 'Kit Aniversario Spa' },
  { src: '/img/kits/novia-galana-0999.png', alt: 'Kit Novia Galana' },
  { src: '/img/kits/selfcare-yogui-0499.png', alt: 'Kit Selfcare Yogui' },
  { src: '/img/kits/autumn-pumpkin-0499.png', alt: 'Kit Autumn Pumpkin' },
  { src: '/img/kits/mocktail-0999.png', alt: 'Kit Mocktail Bar' },
];

export default function TypewriterHero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // Carrusel de imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % kitImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Carrusel de fondo para móvil */}
      <div className="absolute inset-0 lg:hidden">
        {kitImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Overlay oscuro para legibilidad en móvil */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink/75"></div>
      </div>

      {/* Fondo con textura de papel - Solo desktop */}
      <div 
        className="absolute inset-0 hidden lg:block" 
        style={{ 
          backgroundImage: 'url(/img/texture/paper-soft-2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Overlay sutil para mejor contraste - Solo desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-transparent to-paper/40 hidden lg:block"></div>

      {/* Efectos de luz muy suaves - Solo desktop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-terra/5 via-transparent to-transparent hidden lg:block"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/8 via-transparent to-transparent hidden lg:block"></div>

      {/* Partículas flotantes elegantes - Solo desktop */}
      <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-brand-terra/30 rounded-full animate-float opacity-50 blur-[1px] hidden lg:block"></div>
      <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-gold/25 rounded-full animate-float-delayed opacity-40 blur-[1px] hidden lg:block"></div>
      <div className="absolute bottom-[20%] left-[20%] w-2.5 h-2.5 bg-brand-wine/25 rounded-full animate-float opacity-35 blur-[1px] hidden lg:block"></div>
      <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-sage/30 rounded-full animate-float-delayed opacity-40 blur-[1px] hidden lg:block"></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto - Izquierda */}
          <div className="text-center lg:text-left">
            {/* Typewriter effect */}
            <div className="mb-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-fraunces font-bold text-white lg:text-ink mb-3 drop-shadow-lg lg:drop-shadow-none">
                Regala
              </h1>
              <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center lg:justify-start">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold bg-gradient-to-r from-gold via-white to-gold lg:from-brand-terra lg:via-brand-wine lg:to-brand-terra bg-clip-text text-transparent drop-shadow-lg">
                  {currentText}
                </h2>
              </div>
            </div>

            {/* Mensaje principal */}
            <p className="text-xl md:text-2xl text-white/95 lg:text-ink/80 mb-6 font-medium max-w-xl mx-auto lg:mx-0 drop-shadow-lg lg:drop-shadow-none">
              Regalos pensados, tú eliges, nosotros entregamos
            </p>

            {/* Subtítulo con icono */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
              <SparkleIcon className="w-5 h-5 text-gold animate-pulse drop-shadow-lg" />
              <p className="text-lg md:text-xl text-white/90 lg:text-ink/70 font-medium drop-shadow-lg lg:drop-shadow-none">
                Kits únicos · Entrega en Puebla
              </p>
              <SparkleIcon className="w-5 h-5 text-gold animate-pulse drop-shadow-lg" />
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <Link href="/quiz">
                <Button
                  size="lg"
                  className="min-w-[240px] shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  Armar mi Regalazo
                </Button>
              </Link>
            </div>

            {/* Indicadores del carrusel para móvil */}
            <div className="flex justify-center gap-2 mt-8 lg:hidden">
              {kitImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'bg-white w-8 shadow-lg'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Ver imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Carrusel de imágenes - Derecha (Desktop) */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
              {kitImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Indicadores del carrusel */}
            <div className="flex justify-center gap-2 mt-6">
              {kitImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'bg-brand-terra w-8'
                      : 'bg-ink/30 hover:bg-ink/50'
                  }`}
                  aria-label={`Ver imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
