'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from './icons';

export default function BowlFlow() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    { id: 0, name: 'Start', image: '/paso-1.png', title: '¡Bienvenido!', subtitle: 'Comienza a armar tu bowl perfecto', step: 'Inicio' },
    { id: 1, name: 'Base', image: '/paso-2.png', title: 'Elige tu base', subtitle: 'Bowl o Burrito', step: 'Paso 1' },
    { id: 2, name: 'Ingredientes', image: '/paso-3.png', title: 'Ingredientes', subtitle: 'Elige tus secciones favoritas', step: 'Paso 2' },
    { id: 3, name: '', image: '/paso-4.png', title: 'Complementos', subtitle: 'Dale el toque final', step: 'Complementos' },
    { id: 4, name: '', image: '/paso-5.png', title: 'Bebidas', subtitle: 'Completa tu orden', step: 'Bebidas' },
  ];

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-sb-cream to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-ink mb-4">
            Arma tu bowl perfecto
          </h2>
          <p className="text-xl text-ink/60 md:hidden">Desliza para descubrir cada paso</p>
          <p className="text-xl text-ink/60 hidden md:block">Sigue estos simples pasos</p>
        </motion.div>

        {/* DESKTOP: Horizontal Timeline con todas las imágenes */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
                className="relative group"
              >
                {/* Número del paso */}
                <motion.div 
                  className="absolute -top-8 left-1/2 -translate-x-1/2 z-10"
                  animate={{ scale: hoveredStep === index ? 1.1 : 1 }}
                >
                  <div className="bg-sb-green-700 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {index === 0 ? '★' : index}
                  </div>
                </motion.div>

                {/* Imagen del paso */}
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow bg-white"
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain p-2"
                  />
                  
                  {/* Overlay con info al hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredStep === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4"
                  >
                    <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-white/90 text-sm">{step.subtitle}</p>
                  </motion.div>
                </motion.div>

                {/* Título debajo */}
                <div className="mt-4 text-center">
                  <p className="text-sm font-semibold text-sb-green-700">{step.step}</p>
                  <p className="text-xs text-ink/60 mt-1">{step.name}</p>
                </div>

                {/* Flecha conectora (excepto el último) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/3 -right-3 z-0">
                    <ArrowRight className="w-6 h-6 text-sb-green-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/menu'}
              className="bg-sb-green-700 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-sb-green-700/90 transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-3"
            >
              Ver menú completo
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>

        {/* MOBILE/TABLET: Carousel (como estaba) */}
        <div className="relative max-w-5xl mx-auto lg:hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.3 },
              }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Step Image Container with Arrows Inside */}
              <div className="relative w-full bg-gradient-to-br from-sb-cream to-sb-teal-200/20">
                {/* Image with Menu-like aspect ratio */}
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] max-w-2xl mx-auto p-8">
                  <Image
                    src={steps[currentStep].image}
                    alt={steps[currentStep].title}
                    fill
                    className="object-contain drop-shadow-2xl rounded-2xl"
                    priority={currentStep === 0}
                  />
                </div>

                {/* Previous Arrow - INSIDE, with transparency */}
                {currentStep > 0 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={goToPrevStep}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 backdrop-blur-sm text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center transition-all"
                    aria-label="Anterior"
                  >
                    <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.button>
                )}

                {/* Next Arrow - INSIDE, with transparency */}
                {currentStep < steps.length - 1 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={goToNextStep}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 backdrop-blur-sm text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center transition-all"
                    aria-label="Siguiente"
                  >
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.button>
                )}
              </div>

              {/* Step Info */}
              <div className="p-8 md:p-12">
                <div className="text-center">
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold text-ink mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    {steps[currentStep].title}
                  </motion.h3>
                  <motion.p 
                    className="text-base md:text-lg text-ink/60 mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    {steps[currentStep].subtitle}
                  </motion.p>

                  {currentStep === 0 && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={goToNextStep}
                      className="bg-sb-green-700 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-sb-green-700/90 transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-3"
                    >
                      Comenzar ahora
                      <ArrowRight className="w-6 h-6" />
                    </motion.button>
                  )}

                  {currentStep === steps.length - 1 && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.location.href = '/menu'}
                      className="bg-sb-green-700 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-sb-green-700/90 transition-all shadow-xl hover:shadow-2xl"
                    >
                      Ver menú completo
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
