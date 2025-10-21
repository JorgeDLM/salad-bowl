'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from './icons';

export default function FranchiseCTA() {
  return (
    <section className="pt-20 pb-32 relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-saladbowl.webp"
          alt="Fondo Salad Bowl"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Overlay verde */}
      <div className="absolute inset-0 bg-gradient-to-br from-sb-green-700/90 to-sb-green-700/85 z-0" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-12 shadow-xl text-center"
        >
          <div className="inline-block bg-sb-green-700 rounded-2xl py-1 mb-6">
            <span className="text-white font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-sb-teal-200/80 rounded-2xl">
              Únete a nosotros
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Conviértete en socio <span className="text-sb-green-500">Salad</span> <span className="text-sb-green-700">Bowl</span>
          </h2>
          
          <p className="text-lg text-ink/70 mb-8 max-w-2xl mx-auto">
            Una marca que está revolucionando la comida saludable.
          </p>

          <Link href="/franquicias">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-sb-green-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-sb-green-700/90 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sb-green-500 focus:ring-offset-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v2h20V7L12 2zm-8 7v11h4v-6h8v6h4V9H4zm6 11v-4h4v4h-4z"/>
                <path d="M4 20h16v2H4z"/>
              </svg>
              Inicia tu franquicia
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
