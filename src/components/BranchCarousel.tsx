'use client';

import { motion } from 'framer-motion';
import InfiniteCarousel from './InfiniteCarousel';

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
  if (branches.length === 0) return null;

  const branchCards = branches.map((branch, index) => {
    const isComingSoon = branch.status === 'COMING_SOON';
    
    return (
      <motion.a
        key={branch.id}
        href={branch.mapsUrl || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="group block cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
      >
        <div className="relative w-[280px] md:w-[340px] bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-2 border-white/50 flex flex-col h-full overflow-hidden">
          {/* Banner Próximamente */}
          {isComingSoon && (
            <div className="absolute top-4 right-4 z-10">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-br from-sb-teal-400 to-sb-teal-500 text-white px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-[10px] md:text-xs font-black tracking-wide">PRÓXIMAMENTE</span>
              </motion.div>
            </div>
          )}

          <div className="flex justify-center mb-4 md:mb-6">
            <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${isComingSoon ? 'bg-sb-teal-400' : 'bg-sb-green-500'} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
              <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
          </div>
        <h3 className={`text-xl md:text-2xl font-black mb-2 md:mb-3 text-center transition-colors ${
          isComingSoon 
            ? 'text-sb-teal-600 group-hover:text-sb-teal-500' 
            : 'text-sb-green-700 group-hover:text-sb-green-500'
        }`}>
          {branch.name}
        </h3>
        {branch.plaza && (
          <p className="text-ink/80 text-center mb-1 font-medium text-sm md:text-base">{branch.plaza}</p>
        )}
        <p className="text-ink/60 text-center text-xs md:text-sm mb-4 line-clamp-2 min-h-[40px]">
          {branch.address.split(',')[0]}
        </p>
        
          <div className={`mt-auto flex items-center justify-center gap-2 transition-all text-sm font-semibold group-hover:gap-3 ${
            isComingSoon 
              ? 'text-sb-teal-600 group-hover:text-sb-teal-500' 
              : 'text-sb-green-700 group-hover:text-sb-green-500'
          }`}>
            <span>Cómo llegar</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </motion.a>
    );
  });

  return (
    <div className="relative w-full py-8">
      <InfiniteCarousel 
        baseSpeed={2}
        gap={32}
        className="py-4 pl-4 md:pl-0"
      >
        {branchCards}
      </InfiniteCarousel>
    </div>
  );
}
