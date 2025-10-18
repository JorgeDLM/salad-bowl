'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function BowlFlow() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [currentBase, setCurrentBase] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);

  // Bases con imágenes
  const bases = [
    { name: 'Lechuga', image: '/img/bases/0.png' },
    { name: 'Espinaca', image: '/img/bases/1.png' },
    { name: 'Arroz integral', image: '/img/bases/2.png' },
    { name: 'Arroz', image: '/img/bases/3.png' },
    { name: 'Pasta', image: '/img/bases/4.png' },
  ];

  // Categorías de ingredientes
  const categories = [
    { name: 'Vegetales' },
    { name: 'Proteínas' },
    { name: 'Quesos' },
    { name: 'Toppings' },
  ];

  // Ciclo automático del carousel de bases
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBase((prev) => (prev + 1) % bases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [bases.length]);

  // Ciclo automático del carousel de categorías
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % categories.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [categories.length]);

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
    <section className="py-24 bg-gradient-to-b from-white via-sb-cream/30 to-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sb-green-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sb-teal-700/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-black text-sb-green-700 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            El bowl perfecto
          </motion.h2>
          <motion.p 
            className="text-3xl md:text-5xl font-black text-sb-green-500"
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
                      <div className="relative h-72 mb-4 bg-gradient-to-br from-sb-green-50 to-white rounded-2xl overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentBase}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ 
                              duration: 0.6,
                              ease: [0.25, 0.1, 0.25, 1]
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

                      {/* Nombre del producto */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentBase}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ 
                            duration: 0.4,
                            ease: [0.25, 0.1, 0.25, 1],
                            delay: 0.1
                          }}
                          className="text-center mb-4"
                        >
                          <p className="text-2xl font-black text-sb-green-700">
                            {bases[currentBase].name}
                          </p>
                        </motion.div>
                      </AnimatePresence>

                      {/* Indicadores de puntos */}
                      <div className="flex justify-center gap-2">
                        {bases.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentBase(i)}
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
                      <div className="relative h-72 mb-4 rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={step.backgroundImage || ''}
                          alt="Barra de ingredientes"
                          fill
                          className="object-cover brightness-90"
                        />
                        {/* Overlay gradiente aesthetic */}
                        <div className="absolute inset-0 bg-gradient-to-t from-sb-green-700/70 via-sb-green-700/30 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
                        
                        {/* Categoría actual con animación suave */}
                        <div className="absolute inset-0 flex items-center justify-center z-10 p-6">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentCategory}
                              initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                              exit={{ opacity: 0, scale: 1.05, filter: 'blur(4px)' }}
                              transition={{ 
                                duration: 0.7,
                                ease: [0.25, 0.1, 0.25, 1]
                              }}
                              className="text-center w-full"
                            >
                              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-4 border-2 border-white/20 shadow-2xl">
                                <p className="text-4xl font-black text-white drop-shadow-2xl tracking-tight">
                                  {categories[currentCategory].name}
                                </p>
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Indicadores de puntos */}
                      <div className="flex justify-center gap-2">
                        {categories.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentCategory(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i === currentCategory 
                                ? 'bg-sb-green-700 w-6' 
                                : 'bg-sb-green-500 hover:bg-sb-green-500'
                            }`}
                            aria-label={`Ver ${categories[i].name}`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : step.hasImage ? (
                    <div className="relative">
                      {/* Imagen vertical del producto terminado */}
                      <div className="relative h-80 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-sb-cream/50 to-white">
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
                  ) : (
                    <ul className="space-y-3">
                      {step.options?.map((option, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex items-center gap-3 text-ink/70"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} />
                          <span className="text-sm lg:text-base">{option}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
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
