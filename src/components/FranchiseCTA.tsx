'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from './icons';

export default function FranchiseCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-sb-teal-200/30 to-sb-green-500/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-12 shadow-xl text-center"
        >
          <div className="inline-block bg-sb-green-500/20 rounded-2xl px-4 py-2 mb-6">
            <span className="text-sb-green-700 font-semibold text-sm uppercase tracking-wider">
              Únete a nosotros
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            ¿Quieres una franquicia?
          </h2>
          
          <p className="text-lg text-ink/70 mb-8 max-w-2xl mx-auto">
            Forma parte de Salad Bowl y lleva vida saludable a más personas. 
            Conoce nuestro modelo de negocio.
          </p>

          <Link href="/franquicias">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-sb-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-sb-green-700/90 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sb-green-500 focus:ring-offset-2"
            >
              Quiero franquicia
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
