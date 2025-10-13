'use client';

import React, { useRef } from 'react';
import Hero from '@/components/Hero';
import BowlFlow from '@/components/BowlFlow';
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

      {/* Product Grid */}
      <ProductGrid />

      {/* Sucursales Section */}
      <section className="py-20 bg-gradient-to-b from-white to-sb-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
              Encuéntranos
            </h2>
            <p className="text-lg text-ink/60">Dos ubicaciones en Puebla</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div>
      </section>

      {/* Franchise CTA */}
      <FranchiseCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
