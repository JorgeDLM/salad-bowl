'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LocationCard from '@/components/LocationCard';
import Footer from '@/components/Footer';
import { LOCATIONS } from '@/config';

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
            Visítanos en nuestras dos ubicaciones en Puebla
          </p>
        </motion.div>

        {/* Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {LOCATIONS.map((location, index) => (
            <LocationCard
              key={location.name}
              name={location.name}
              address={location.address}
              mapsUrl={location.mapsUrl}
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
          className="mt-16 bg-white rounded-3xl p-8 shadow-lg max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-ink mb-6 text-center">
            Horarios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div>
              <p className="font-semibold text-ink mb-2">Lunes a Viernes</p>
              <p className="text-ink/70">9:00 AM - 9:00 PM</p>
            </div>
            <div>
              <p className="font-semibold text-ink mb-2">Sábado y Domingo</p>
              <p className="text-ink/70">10:00 AM - 8:00 PM</p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
