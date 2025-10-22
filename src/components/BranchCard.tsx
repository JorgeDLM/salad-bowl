'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface BranchCardProps {
  name: string;
  plaza?: string | null;
  address: string;
  mapsUrl?: string | null;
  phone?: string | null;
  schedule?: any;
  status: 'OPEN' | 'CLOSED' | 'COMING_SOON';
  delay?: number;
}

export default function BranchCard({
  name,
  plaza,
  address,
  mapsUrl,
  phone,
  schedule,
  status,
  delay = 0,
}: BranchCardProps) {
  const isComingSoon = status === 'COMING_SOON';
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number }>>([]);

  useEffect(() => {
    if (isComingSoon) {
      // Generar partículas de confeti
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -20,
        color: ['#4CAF50', '#8BC34A', '#FFC107', '#FF9800'][Math.floor(Math.random() * 4)],
        delay: Math.random() * 2,
      }));
      setParticles(newParticles);
    }
  }, [isComingSoon]);

  const formatSchedule = () => {
    if (!schedule || Object.keys(schedule).length === 0) return null;
    
    const days = Object.keys(schedule);
    const firstDay = schedule[days[0]];
    
    // Verificar si todos tienen el mismo horario
    const allSameHours = days.every(
      day => schedule[day].open === firstDay.open && schedule[day].close === firstDay.close
    );
    
    if (allSameHours && days.length === 7) {
      return `Lunes a Domingo: ${firstDay.open} - ${firstDay.close}`;
    } else if (allSameHours && days.length === 5 && days.every(d => ['mon', 'tue', 'wed', 'thu', 'fri'].includes(d))) {
      return `Lunes a Viernes: ${firstDay.open} - ${firstDay.close}`;
    } else if (allSameHours) {
      return `${firstDay.open} - ${firstDay.close}`;
    }
    
    return `${firstDay.open} - ${firstDay.close}`;
  };
  
  const scheduleText = formatSchedule();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="relative group w-full"
    >
      {/* Confeti animado para COMING_SOON */}
      {isComingSoon && (
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ y: -20, x: `${particle.x}%`, opacity: 0, rotate: 0 }}
              animate={{
                y: ['0%', '120%'],
                opacity: [0, 1, 1, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                delay: particle.delay,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
              className="absolute w-2 h-2 rounded-sm"
              style={{ backgroundColor: particle.color, left: `${particle.x}%` }}
            />
          ))}
        </div>
      )}

      <div
        className={`relative bg-white rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-6 transition-all duration-300 overflow-hidden ${
          isComingSoon
            ? 'border-4 border-sb-teal-300 group-hover:shadow-2xl'
            : 'group-hover:shadow-xl group-hover:-translate-y-1'
        }`}
      >
        {/* Badge de estado */}
        {isComingSoon && (
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-2 right-2 md:top-4 md:right-4 bg-gradient-to-r from-sb-green-400 to-sb-teal-400 text-white text-[10px] md:text-xs font-black px-2 md:px-3 py-1 rounded-full shadow-lg"
          >
            COMING SOON!
          </motion.div>
        )}

        {/* Icono de ubicación */}
        <div
          className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full mb-3 md:mb-4 ${
            isComingSoon ? 'bg-sb-teal-300/20' : 'bg-sb-green-100'
          }`}
        >
          <svg
            className={`w-5 h-5 md:w-6 md:h-6 ${isComingSoon ? 'text-sb-teal-600' : 'text-sb-green-700'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        {/* Nombre */}
        <h3 className="text-lg md:text-2xl font-black text-gray-900 mb-1">{name}</h3>

        {/* Plaza */}
        {plaza && <p className="text-xs md:text-sm font-semibold text-sb-green-600 mb-2 md:mb-3">{plaza}</p>}

        {/* Dirección */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{address}</p>

        {/* Teléfono */}
        {phone && !isComingSoon && (
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-4 h-4 text-sb-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a href={`tel:${phone}`} className="text-sm text-sb-green-700 font-semibold hover:underline">
              {phone}
            </a>
          </div>
        )}

        {/* Horario */}
        {scheduleText && !isComingSoon && (
          <div className="mb-4 bg-gray-50 rounded-lg p-2">
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 text-sb-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-xs text-gray-600">
                <p className="font-semibold">Horario:</p>
                <p>{scheduleText}</p>
              </div>
            </div>
          </div>
        )}

        {/* Mensaje para próximamente */}
        {isComingSoon && (
          <p className="text-sm text-gray-600 italic mb-4">
            Estamos preparando todo para abrir nuestras puertas. ¡Muy pronto!
          </p>
        )}

        {/* Botón de cómo llegar */}
        {mapsUrl && (
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all ${
              isComingSoon
                ? 'bg-sb-teal-500 text-white hover:bg-sb-teal-600'
                : 'bg-sb-green-700 text-white hover:bg-sb-green-600'
            }`}
          >
            Cómo llegar
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}
