'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from './icons';

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  const [currentIngredient, setCurrentIngredient] = useState(0);

  // Lista de ingredientes con direcciones de entrada y posición final
  const ingredients = [
    { src: '/img/aguacate.webp', alt: 'Aguacate', size: 240, startX: -200, startY: -400, endX: -110, endY: 100 },
    { src: '/img/jitomate.webp', alt: 'Jitomate', size: 220, startX: -180, startY: -450, endX: -105, endY: 120 },
    { src: '/img/brocoli.webp', alt: 'Brócoli', size: 260, startX: -100, startY: -500, endX: -115, endY: 95 },
    { src: '/img/espinaca.webp', alt: 'Espinaca', size: 240, startX: -120, startY: -420, endX: -100, endY: 120 },
    { src: '/img/col-morada.webp', alt: 'Col morada', size: 230, startX: -130, startY: -380, endX: -108, endY: 100 },
    { src: '/img/pollo.webp', alt: 'Pollo', size: 280, startX: -150, startY: -460, endX: -112, endY: 90 },
  ];

  // Ciclo de ingredientes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIngredient((prev) => (prev + 1) % ingredients.length);
    }, 1400);
    return () => clearInterval(interval);
  }, [ingredients.length]);

  return (
    <section className="relative h-[screen]-500 h-[screen]-300 min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/bg-image-1.png"
          alt="Fondo Salad Bowl"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay verde semitransparente */}
      <div className="absolute inset-0 bg-gradient-to-br from-sb-green-700/15 via-sb-green-700/10 to-sb-green-500/15" />

      {/* Elementos decorativos flotantes - Aesthetic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculos decorativos grandes */}
        <motion.div
          className="absolute top-10 right-20 w-32 h-32 rounded-full bg-sb-green-400/20 backdrop-blur-sm hidden md:block"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-40 right-60 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm hidden md:block"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-32 right-40 w-24 h-24 rounded-full bg-sb-green-500/15 backdrop-blur-sm hidden md:block"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Elementos pequeños flotantes */}
        <motion.div
          className="absolute top-24 right-96 w-3 h-3 rounded-full bg-white/40 hidden md:block"
          animate={{
            y: [0, -40, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-60 right-28 w-4 h-4 rounded-full bg-sb-green-400/50 hidden md:block"
          animate={{
            y: [0, 35, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
        <motion.div
          className="absolute bottom-40 right-72 w-2 h-2 rounded-full bg-white/60 hidden md:block"
          animate={{
            y: [0, -30, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Elementos izquierda */}
        <motion.div
          className="absolute top-32 left-40 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm hidden md:block"
          animate={{
            y: [0, 25, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
        <motion.div
          className="absolute bottom-48 left-20 w-12 h-12 rounded-full bg-sb-green-400/15 backdrop-blur-sm hidden md:block"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        />
      </div>

      {/* Decorative circles */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-sb-green-400/20 rounded-full blur-3xl hidden md:block"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-sb-teal-200/15 rounded-full blur-3xl hidden md:block"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Container principal con grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid lg:grid-cols-2 gap-12 lg:items-center items-start lg:pt-0">
          {/* Columna izquierda - Texto */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-left relative z-30 mx-auto lg:mx-0 max-w-2xl lg:max-w-none"
          >

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black -mt-60 lg:mt-10 mb-6 md:mb-8 leading-[1.1] tracking-tight">
              <motion.span 
                className="block mb-2 text-white"
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                COME RICO,
              </motion.span>
              <motion.span 
                className="block mb-2 text-sb-green-500"
                initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                RÁPIDO Y
              </motion.span>
              <motion.span 
                className="block text-sb-green-500"
                initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                SALUDABLE
              </motion.span>
            </h1>
          </motion.div>

          {/* Columna derecha - Plato con ingredientes */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-center pt-20 lg:pt-10 items-center lg:relative absolute inset-0 lg:opacity-100 opacity-25 pointer-events-none lg:pointer-events-auto z-0 lg:z-10"
          >
            {/* Plato base */}
            <div className="relative w-[500px] h-[500px]">
              {/* Plato 2 - Capa de FONDO (detrás de todo) con glow animado */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, filter: 'drop-shadow(0 0 20px rgba(191, 217, 106, 0.5)) drop-shadow(0 0 40px rgba(191, 217, 106, 0.3))' }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  filter: [
                    'drop-shadow(0 0 20px rgba(0, 217, 106, 0.4)) drop-shadow(0 0 40px rgba(0, 217, 106, 0.2))',
                    'drop-shadow(0 0 40px rgba(0, 217, 106, 0.6)) drop-shadow(0 0 60px rgba(0, 217, 106, 0.4))',
                    'drop-shadow(0 0 20px rgba(0, 217, 106, 0.4)) drop-shadow(0 0 40px rgba(0, 217, 106, 0.2))'
                  ]
                }}
                transition={{
                  scale: { duration: 1, ease: 'easeOut' },
                  opacity: { duration: 0.6, ease: 'easeOut' },
                  filter: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="absolute inset-0 z-0"
              >
                <Image
                  src="/img/plato2.webp"
                  alt="Plato fondo"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                  priority
                />
              </motion.div>

              {/* Ingrediente cayendo - CAPA MEDIA */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIngredient}
                  initial={{ 
                    y: ingredients[currentIngredient].startY,
                    x: ingredients[currentIngredient].startX,
                    opacity: 1,
                    scale: 1
                  }}
                  animate={{ 
                    y: ingredients[currentIngredient].endY,
                    x: ingredients[currentIngredient].endX,
                    opacity: [1, 1, 1, 0],
                    scale: [1, 1, 0.9, 0.5]
                  }}
                  transition={{ 
                    duration: 1.6,
                    ease: [0.25, 0.1, 0.25, 1],
                    opacity: {
                      duration: 1.6,
                      times: [0, 0.7, 0.9, 1],
                      ease: "easeIn"
                    },
                    scale: {
                      duration: 1.6,
                      times: [0, 0.7, 0.9, 1],
                      ease: "easeIn"
                    }
                  }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
                >
                  <Image
                    src={ingredients[currentIngredient].src}
                    alt={ingredients[currentIngredient].alt}
                    width={ingredients[currentIngredient].size}
                    height={ingredients[currentIngredient].size}
                    className="object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Plato 3 - Capa FRONTAL (delante de todo) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                className="absolute inset-0 z-20"
              >
                <Image
                  src="/img/plato4.png"
                  alt="Plato frontal"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
