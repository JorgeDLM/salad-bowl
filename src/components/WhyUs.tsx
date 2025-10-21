'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhyUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-bowl-4.png"
          alt="Fondo Bowl"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/20 to-white/25 z-0" />
      
            {/* Partículas flotantes animadas */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Partículas grandes */}
              <motion.div
                className="absolute top-20 left-10 w-20 h-20 rounded-full bg-sb-green-400/20"
                animate={{
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute top-40 right-20 w-16 h-16 rounded-full bg-sb-green-500/15"
                animate={{
                  y: [0, 40, 0],
                  x: [0, -15, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
              <motion.div
                className="absolute bottom-32 left-32 w-24 h-24 rounded-full bg-sb-teal-700/10"
                animate={{
                  y: [0, -25, 0],
                  x: [0, 15, 0],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
              <motion.div
                className="absolute bottom-40 right-40 w-14 h-14 rounded-full bg-sb-green-400/25"
                animate={{
                  y: [0, 30, 0],
                  x: [0, -20, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              />
      
              {/* Partículas pequeñas */}
              <motion.div
                className="absolute top-60 left-60 w-3 h-3 rounded-full bg-sb-green-500/40"
                animate={{
                  y: [0, -50, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute top-32 right-48 w-4 h-4 rounded-full bg-sb-green-700/30"
                animate={{
                  y: [0, 45, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              />
              <motion.div
                className="absolute bottom-60 left-96 w-2 h-2 rounded-full bg-sb-teal-700/50"
                animate={{
                  y: [0, -35, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
              />
              <motion.div
                className="absolute top-96 right-80 w-3 h-3 rounded-full bg-sb-green-400/35"
                animate={{
                  y: [0, 40, 0],
                  x: [0, -10, 0],
                  opacity: [0.35, 0.9, 0.35],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              />
      
              {/* Círculos blur de fondo */}
              <div className="absolute top-20 left-10 w-72 h-72 bg-sb-green-700/10 rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-sb-teal-700/10 rounded-full blur-3xl" />
            </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-sb-green-700 mb-4 opacity-90">
            ¿Por qué Salad Bowl?
          </h2>
          <p className="text-xl text-sb-green-600 max-w-2xl mx-auto">
            Frescura, calidad y sabor en cada bowl
          </p>
        </motion.div>

        {/* Grid con imágenes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1 - Empleado Sirviendo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-sb-green-700/10"
          >
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-sb-green-700 to-sb-green-700/80">
              <Image
                src="/empleado-sirviendo.JPG"
                alt="Empleado preparando bowl fresco"
                fill
                className="object-cover group-hover:scale-105 brightness-90 group-hover:brightness-100 transition-all duration-700"
              />
              {/* Overlay más sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Badge decorativo */}
              <div className="absolute top-4 right-4 bg-sb-green-500 text-sb-green-700 px-4 py-2 rounded-full text-sm font-black shadow-lg">
                Fresh
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0  px-8 pb-5 pt-2 text-white backdrop-blur-sm bg-gradient-to-t from-black/40 to-transparent">
              <h3 className="text-3xl font-black mb-3 drop-shadow-lg">Preparación Fresca</h3>
              <p className="text-white/95 leading-relaxed text-base drop-shadow-md">
                Cada ingrediente es preparado al momento por nuestro equipo especializado
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Panino */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-sb-green-700/10"
          >
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-sb-green-500 to-sb-teal-200">
              <Image
                src="/panino.JPG"
                alt="Delicioso panino fresco"
                fill
                className="object-cover object-[center_25%] group-hover:scale-105 brightness-90 group-hover:brightness-100 transition-all duration-700"
              />
              {/* Overlay más sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Badge decorativo */}
              <div className="absolute top-4 right-4 bg-sb-green-500 text-sb-green-700 px-4 py-2 rounded-full text-sm font-black shadow-lg">
                Premium
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0  px-8 pb-12 pt-2 text-white backdrop-blur-sm bg-gradient-to-t from-black/40 to-transparent">
              <h3 className="text-3xl font-black mb-3 drop-shadow-lg">Variedad Premium</h3>
              <p className="text-white/95 leading-relaxed text-base drop-shadow-md">
                Además de bowls, ofrecemos paninos y burritos artesanales con ingredientes de calidad
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Sucursal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-sb-green-700/10"
          >
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-sb-teal-200 to-sb-cream">
              <Image
                src="/sucursal.JPG"
                alt="Sucursal Salad Bowl"
                fill
                className="object-cover group-hover:scale-105 brightness-90 group-hover:brightness-100 transition-all duration-700"
              />
              {/* Overlay más sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Badge decorativo */}
              <div className="absolute top-4 right-4 bg-sb-green-500 text-sb-green-700 px-4 py-2 rounded-full text-sm font-black shadow-lg">
                Cozy
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-8 pb-5 pt-2 text-white backdrop-blur-sm bg-gradient-to-t from-black/40 to-transparent">
              <h3 className="text-3xl font-black mb-3 drop-shadow-lg">Ambiente Acogedor</h3>
              <p className="text-white/95 leading-relaxed text-base drop-shadow-md">
                Espacios diseñados para disfrutar tu comida en un ambiente moderno y cómodo
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
