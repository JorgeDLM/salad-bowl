'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LocationCard from '@/components/LocationCard';
import Footer from '@/components/Footer';
import { LOCATIONS } from '@/config';
import { ArrowRight } from '@/components/icons';

export default function SucursalesPage() {
  return (
    <div className="min-h-screen bg-sb-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-ink mb-4">
            Sucursales
          </h1>
          <p className="text-lg text-ink/60">
            Visítanos en nuestras tres ubicaciones en Puebla
          </p>
        </motion.div>

        {/* Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {LOCATIONS.map((location, index) => (
            <LocationCard
              key={location.name}
              name={location.name}
              address={location.address}
              mapsUrl={location.mapsUrl}
              phone={location.phone}
              schedule={location.schedule}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-sb-green-700 to-sb-green-500 rounded-3xl p-8 shadow-lg max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            ¿Tienes preguntas?
          </h2>
          <p className="text-white/90 mb-6">
            Llámanos o visítanos en cualquiera de nuestras tres sucursales
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 bg-white text-sb-green-700 px-8 py-4 rounded-full font-bold hover:bg-sb-cream transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Contáctanos
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
