'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Custom hook para el efecto typewriter
function useTypewriter(phrases: string[], currentIndex: number, onComplete: () => void) {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Resetear cuando cambia el índice
  useEffect(() => {
    setCurrentText('');
    setIsDeleting(false);
    setIsPaused(false);
  }, [currentIndex]);

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];

    // Si está en pausa, esperar antes de empezar a borrar
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1000); // Pausa de 1 segundo para ver el texto completo
      return () => clearTimeout(pauseTimer);
    }

    // Si está borrando
    if (isDeleting) {
      if (currentText.length > 0) {
        const deleteTimer = setTimeout(() => {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        }, 25); // Borrar muy rápido
        return () => clearTimeout(deleteTimer);
      } else {
        // Terminó de borrar, pasar al siguiente
        setIsDeleting(false);
        onComplete();
        return;
      }
    }

    // Si está escribiendo
    if (currentText.length < currentPhrase.length) {
      const typeTimer = setTimeout(() => {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      }, 50); // Velocidad de escritura rápida
      return () => clearTimeout(typeTimer);
    } else {
      // Terminó de escribir, iniciar pausa
      setIsPaused(true);
    }
  }, [currentText, isDeleting, isPaused, currentIndex, phrases, onComplete]);

  return { 
    currentText, 
    reset: () => { 
      setCurrentText(''); 
      setIsDeleting(false); 
      setIsPaused(false);
    } 
  };
}

// Custom hook para carousel simple
function useCarousel(itemsCount: number, interval: number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % itemsCount);
    }, interval);
    return () => clearInterval(timer);
  }, [itemsCount, interval]);

  return { currentIndex, setIndex: setCurrentIndex };
}

export default function BowlFlow() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  
  // Bases con imágenes
  const bases = [
    { name: 'Lechuga', image: '/img/bases/0.png' },
    { name: 'Espinaca', image: '/img/bases/1.png' },
    { name: 'Arroz integral', image: '/img/bases/2.png' },
    { name: 'Arroz blanco', image: '/img/bases/3.png' },
    { name: 'Pasta', image: '/img/bases/4.png' },
  ];

  // Categorías de ingredientes
  const categories = [
    { name: 'Vegetales' },
    { name: 'Proteínas' },
    { name: 'Quesos' },
    { name: 'Toppings' },
  ];

  // Hook para carousel de categorías
  const categoryCarousel = useCarousel(categories.length, 2500);

  // Hook para bases con typewriter y cambio automático
  const [currentBase, setCurrentBase] = useState(0);
  const baseNames = bases.map(b => b.name);
  
  // Cambio automático cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBase((prev) => (prev + 1) % bases.length);
    }, 2000); // Cambia cada 2 segundos
    return () => clearInterval(interval);
  }, [bases.length]);

  const typewriter = useTypewriter(baseNames, currentBase, () => {
    // Ya no controla el cambio, solo muestra el texto
  });

  // Función para cambiar base manualmente (también resetea el intervalo)
  const handleBaseChange = (index: number) => {
    setCurrentBase(index);
  };

  const steps = [
    { 
      id: 1, 
      title: 'Elige tu base', 
      subtitle: 'Elige o combina entre:',
      hasCarousel: true, // Indicador de que este paso tiene carousel
      color: 'from-sb-green-700 to-sb-green-700',
      iconBg: 'bg-sb-green-500',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 12c0-4.5 3-8 9-8s9 3.5 9 8-3 8-9 8-9-3.5-9-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 10c.5-1 1.5-2 4-2s3.5 1 4 2" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    { 
      id: 2, 
      title: 'Elige tus ingredientes', 
      subtitle: 'Más de 50 ingredientes frescos',
      hasCarousel: true,
      hasBackgroundImage: true,
      backgroundImage: '/img/barra.JPG',
      color: 'from-sb-green-500 to-sb-green-500',
      iconBg: 'bg-sb-green-700',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2c-1 2-2 3-4 4-1 .5-2 1-2 3 0 1.5.5 2 1 2.5M12 2c1 2 2 3 4 4 1 .5 2 1 2 3 0 1.5-.5 2-1 2.5M12 2v9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 14c.5 1 1 2 1.5 3 .5 1 1 2 1 3.5.5 0 1 .5 1.5.5s1-.5 1.5-.5c0-1.5.5-2.5 1-3.5s1-2 1.5-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    { 
      id: 3, 
      title: 'Elige tus aderezos', 
      subtitle: 'El toque final perfecto',
      hasImage: true,
      image: '/img/terminado.JPG',
      color: 'from-sb-green-500 to-sb-green-400',
      iconBg: 'bg-sb-green-500',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2v6M9 4l3 2 3-2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="9" y="8" width="6" height="12" rx="1" strokeWidth="2" />
          <path d="M10 14h4M10 17h4" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
  ];


  return (
    <section className="py-12 md:py-16 lg:py-20 overflow-hidden relative">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-bowl-3.png"
          alt="Fondo Bowl"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/10 to-sb-cream/10 z-0" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-sb-green-700 mb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            El platillo perfecto
          </motion.h2>
          <motion.p 
            className="text-3xl md:text-4xl font-black text-sb-green-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            lo creas TÚ
          </motion.p>
        </motion.div>

        {/* Grid de 3 pasos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredStep(index)}
              onHoverEnd={() => setHoveredStep(null)}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-white rounded-3xl shadow-xl overflow-visible h-full border-2 border-transparent hover:border-sb-green-500 transition-all duration-300">
                {/* Número del paso */}
                <div className="absolute -top-6 left-6 z-30">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl ${step.iconBg} flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-300`}
                    animate={{ 
                      rotate: hoveredStep === index ? 0 : 12,
                      scale: hoveredStep === index ? 1.1 : 1
                    }}
                  >
                    <span className="text-3xl font-black text-white">{step.id}</span>
                  </motion.div>
                </div>

                {/* Contenido */}
                <div className="pt-16 pb-8 px-8">

                  {/* Título */}
                  <h3 className="text-2xl lg:text-3xl font-black text-sb-green-800 mb-3 text-center">
                    {step.title}
                  </h3>

                  {/* Subtítulo */}
                  <p className="text-sm lg:text-base text-sb-green-700 font-semibold mb-6 text-center">
                    {step.subtitle}
                  </p>

                  {/* Carousel de bases, categorías de ingredientes con imagen de fondo, imagen vertical o lista de opciones */}
                  {step.hasCarousel && step.id === 1 ? (
                    <div className="relative">
                      {/* Carousel de imágenes */}
                      <div className="relative h-60 mb-4 bg-gradient-to-br from-sb-green-50 to-white rounded-2xl overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentBase}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ 
                              duration: 0.5,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <Image
                              src={bases[currentBase].image}
                              alt={bases[currentBase].name}
                              width={350}
                              height={350}
                              className="object-cover drop-shadow-2xl rounded-2xl"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Nombre del producto con efecto typewriter */}
                      <div className="text-center mb-4 h-10 flex items-center justify-center">
                        <p className="text-2xl font-black text-sb-green-700">
                          {typewriter.currentText}
                          <span className="inline-block w-0.5 h-7 bg-sb-green-700 ml-1 animate-pulse"></span>
                        </p>
                      </div>

                      {/* Indicadores de puntos */}
                      <div className="flex justify-center gap-2">
                        {bases.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => handleBaseChange(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i === currentBase 
                                ? 'bg-sb-green-700 w-6' 
                                : 'bg-sb-green-500 hover:bg-sb-green-500'
                            }`}
                            aria-label={`Ver ${bases[i].name}`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : step.hasCarousel && step.id === 2 ? (
                    <div className="relative">
                      {/* Imagen de fondo de la barra */}
                      <div className="relative h-72 -mb-2 rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={step.backgroundImage || ''}
                          alt="Barra de ingredientes"
                          fill
                          className="object-cover brightness-90"
                        />
                        {/* Overlay gradiente aesthetic */}
                      </div>
                    </div>
                  ) : step.hasImage ? (
                    <div className="relative">
                      {/* Imagen vertical del producto terminado */}
                      <div className="relative h-60 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-sb-cream/50 to-white">
                        <Image
                          src={step.image || ''}
                          alt="Bowl terminado"
                          fill
                          className="object-cover rounded-2xl"
                        />
                      </div>
                      <p className="text-center text-lg font-bold text-sb-green-700">
                        ¡Tu bowl perfecto está listo!
                      </p>
                    </div>
                  ) : null}
                </div>

                {/* Decoración de fondo */}
                <motion.div
                  className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-sb-green-500 opacity-10 blur-2xl"
                  animate={{ 
                    scale: hoveredStep === index ? 1.5 : 1,
                    opacity: hoveredStep === index ? 0.15 : 0.08
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Conector de flecha (solo entre pasos) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 z-10">
                  <motion.div
                    animate={{ x: hoveredStep === index ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-8 h-8 text-sb-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/sucursales"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-sb-green-700 to-sb-green-700 text-white px-12 py-5 rounded-full text-lg font-black shadow-2xl hover:shadow-3xl transition-all"
          >
            <span>Encuentra tu sucursal</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
