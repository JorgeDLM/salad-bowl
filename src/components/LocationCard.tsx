'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from './icons';

interface LocationCardProps {
  name: string;
  address: string;
  mapsUrl: string;
  delay?: number;
}

export default function LocationCard({ name, address, mapsUrl, delay = 0 }: LocationCardProps) {
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
        <div>
          <h3 className="text-xl font-bold text-ink mb-2">{name}</h3>
          <p className="text-ink/70">{address}</p>
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
