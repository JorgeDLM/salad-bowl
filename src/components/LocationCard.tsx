'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from './icons';

interface LocationCardProps {
  name: string;
  address: string;
  shortAddress?: string; // Dirección corta para landing
  mapsUrl: string;
  phone?: string | null;
  schedule?: {
    weekdays: string;
    weekend: string | null;
  };
  delay?: number;
}

export default function LocationCard({ 
  name, 
  address, 
  shortAddress,
  mapsUrl, 
  phone, 
  schedule,
  delay = 0 
}: LocationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-sb-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
          <MapPin className="w-6 h-6 text-sb-green-700" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-ink mb-2">{name}</h3>
          <p className="text-ink/70 text-sm mb-3">{shortAddress || address}</p>
          
          {/* Teléfono */}
          {phone && (
            <a 
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="text-sb-green-700 hover:text-sb-green-500 font-semibold text-sm flex items-center gap-2 mb-3"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phone}
            </a>
          )}

          {/* Horario */}
          {schedule && (
            <div className="bg-sb-cream/50 rounded-xl p-3 mb-4">
              <p className="text-xs font-semibold text-sb-green-700 mb-1">Horario:</p>
              <p className="text-xs text-ink/80">{schedule.weekdays}</p>
              {schedule.weekend && (
                <p className="text-xs text-ink/80 mt-1">{schedule.weekend}</p>
              )}
            </div>
          )}
        </div>
      </div>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-sb-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-sb-green-700/90 transition-all hover:gap-3 focus:outline-none focus:ring-2 focus:ring-sb-green-500 focus:ring-offset-2"
      >
        Cómo llegar
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  );
}
