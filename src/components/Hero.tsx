'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from './icons';
import Logo from './Logo';

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax effect based on scroll
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1920&q=90"
          alt="Fresh Salad Bowl"
          fill
          priority
          className="object-cover brightness-100 saturate-125"
          quality={90}
        />
        {/* Panel oscuro solo en el centro para texto */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-full max-w-4xl h-[70%] bg-gradient-to-b from-black/40 via-black/50 to-black/40 blur-3xl" />
        </div>
        {/* Vignette muy sutil solo en extremos */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-sb-green-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-sb-teal-200/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content with Parallax */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ 
          y,
          opacity,
          x: mousePosition.x,
        }}
      >
        {/* Logo with Float Animation - Con backdrop para destacar */}
        <motion.div
          initial={{ y: 30, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ 
            delay: 0.2, 
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex justify-center mb-8"
          >
            {/* Logo completamente blanco */}
            <div className="relative">
              <Logo 
                variant="white" 
                width={300}
                height={170}
                className="drop-shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Title with Stagger Animation - Blanco sobre fondo oscuro */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 relative"
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ 
              textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,1)' 
            }}
          >
            Life
          </motion.span>
          {' '}
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ 
              textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,1)' 
            }}
          >
            is
          </motion.span>
          {' '}
          <motion.span
            className="inline-block font-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ 
              color: '#BFD96A',
              textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,1), 0 0 30px rgba(191, 217, 106, 0.4)' 
            }}
          >
            now
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl md:text-2xl text-white mb-10 font-semibold"
          style={{ 
            textShadow: '0 3px 10px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,1)' 
          }}
        >
          Arma tu bowl perfecto en 3 pasos
        </motion.p>

        {/* CTA Button - Blanco con verde */}
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ 
            scale: 1.08,
            boxShadow: "0 20px 70px rgba(255, 255, 255, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onCTAClick}
          className="group relative inline-flex items-center gap-3 bg-white text-sb-green-700 px-12 py-6 rounded-full text-xl font-black hover:bg-sb-green-500 hover:text-white transition-all shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-4 overflow-hidden"
          style={{
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Button Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-sb-green-500 to-sb-teal-200 opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          
          {/* Pulse effect ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-white/50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          
          <span className="relative z-10">Armar ahora</span>
          <motion.div
            className="relative z-10"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Scroll Indicator with Bounce */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={onCTAClick}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-white font-semibold drop-shadow-lg">Descubre más</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2 bg-black/20 backdrop-blur-sm">
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
