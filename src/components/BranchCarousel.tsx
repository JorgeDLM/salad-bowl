'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Branch {
  id: number;
  name: string;
  plaza: string | null;
  address: string;
  mapsUrl: string | null;
  contactPhone: string | null;
  openingHours: any;
  status: 'OPEN' | 'CLOSED' | 'COMING_SOON';
}

interface BranchCarouselProps {
  branches: Branch[];
}

export default function BranchCarousel({ branches }: BranchCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === branches.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? branches.length - 1 : prevIndex - 1;
      }
    });
  };

  if (branches.length === 0) return null;

  const currentBranch = branches[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-12">
      {/* Carousel Container */}
      <div className="relative overflow-hidden h-[400px] md:h-[450px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full"
          >
            {/* Branch Card */}
            <a
              href={currentBranch.mapsUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-2 border-white/50 flex flex-col items-center">
                {/* Icono */}
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-sb-green-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg mb-6">
                  <svg className="w-10 h-10 md:w-14 md:h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>

                {/* Título */}
                <h3 className="text-2xl md:text-4xl font-black text-sb-green-700 mb-3 text-center group-hover:text-sb-green-500 transition-colors">
                  Suc. {currentBranch.name}
                </h3>

                {/* Plaza */}
                {currentBranch.plaza && (
                  <p className="text-ink/80 text-center mb-2 font-medium text-base md:text-lg">
                    {currentBranch.plaza}
                  </p>
                )}

                {/* Dirección */}
                <p className="text-ink/60 text-center text-sm md:text-base mb-6 max-w-md">
                  {currentBranch.address.split(',').slice(0, 2).join(',')}
                </p>
                
                {/* Botón */}
                <div className="flex items-center justify-center gap-2 text-sb-green-700 group-hover:text-sb-green-500 transition-all text-base font-semibold group-hover:gap-3">
                  <span>Cómo llegar</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Botón Izquierda */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white hover:bg-sb-green-50 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
        aria-label="Anterior"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Botón Derecha */}
      <button
        onClick={() => paginate(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white hover:bg-sb-green-50 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
        aria-label="Siguiente"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-sb-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-6">
        {branches.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-sb-green-700'
                : 'w-2 bg-sb-green-300 hover:bg-sb-green-400'
            }`}
            aria-label={`Ir a sucursal ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
