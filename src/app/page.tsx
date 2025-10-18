'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import BowlFlow from '@/components/BowlFlow';
import WhyUs from '@/components/WhyUs';
import ProductGrid from '@/components/ProductGrid';
import LocationCard from '@/components/LocationCard';
import FranchiseCTA from '@/components/FranchiseCTA';
import Footer from '@/components/Footer';
import { LOCATIONS } from '@/config';

export default function SaladBowlHome() {
  const bowlFlowRef = useRef<HTMLDivElement>(null);

  const scrollToBowlFlow = () => {
    bowlFlowRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-sb-cream">
      {/* Hero Section */}
      <Hero onCTAClick={scrollToBowlFlow} />

      {/* Bowl Flow Builder */}
      <div ref={bowlFlowRef}>
        <BowlFlow />
      </div>

      {/* Sucursales Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/sucursal.JPG"
            alt="Sucursal Salad Bowl"
            fill
            className="object-cover brightness-40"
          />
          {/* Overlay con gradiente para más contraste */}
          <div className="absolute inset-0 " />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl tracking-tight">
              NUESTRAS SUCURSALES
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          {/* Grid de sucursales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sucursal 1 */}
            <a
              href={LOCATIONS[0].mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-2 border-white/50">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-sb-green-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-sb-green-700 mb-3 text-center group-hover:text-sb-green-500 transition-colors">
                  Suc. Vía San Ángel
                </h3>
                <p className="text-ink/80 text-center mb-1 font-medium">Centro Comercial Vía San Ángel</p>
                <p className="text-ink/60 text-center text-sm">Blvd. Atlixcáyotl 1504 L. B5</p>
              </div>
            </a>

            {/* Sucursal 2 */}
            <a
              href={LOCATIONS[1].mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-2 border-white/50">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-sb-green-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-sb-green-700 mb-3 text-center group-hover:text-sb-green-500 transition-colors">
                  Suc. Zavaleta
                </h3>
                <p className="text-ink/80 text-center mb-1 font-medium">Calzada de Zavaleta 3916</p>
                <p className="text-ink/60 text-center text-sm">Plaza Office Depot</p>
              </div>
            </a>

            {/* Sucursal 3 */}
            <a
              href={LOCATIONS[2].mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-2 border-white/50">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-sb-green-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-sb-green-700 mb-3 text-center group-hover:text-sb-green-500 transition-colors">
                  Suc. Elysee
                </h3>
                <p className="text-ink/80 text-center mb-1 font-medium">Plaza Elysee</p>
                <p className="text-ink/60 text-center text-sm">Lomas de Angelópolis</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* Why Us Section con imágenes */}
      <WhyUs />

      {/* Product Grid */}
      {/* <ProductGrid /> */}


      {/* Franchise CTA */}
      <FranchiseCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
