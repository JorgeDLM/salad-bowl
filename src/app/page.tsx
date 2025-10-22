'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '@/components/Hero';
import BowlFlow from '@/components/BowlFlow';
import CounterAnimation from '@/components/CounterAnimation';
import WhyUs from '@/components/WhyUs';
import ProductGrid from '@/components/ProductGrid';
import BranchCarousel from '@/components/BranchCarousel';
import FranchiseCTA from '@/components/FranchiseCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

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

export default function SaladBowlHome() {
  const bowlFlowRef = useRef<HTMLDivElement>(null);
  const sucursalesRef = useRef<HTMLDivElement>(null);
  const [branches, setBranches] = useState<Branch[]>([]);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    fetch('/api/branches/public')
      .then((res) => res.json())
      .then((data) => {
        // Mostrar sucursales abiertas y próximas
        const displayBranches = data.branches.filter((b: Branch) => 
          b.status === 'OPEN' || b.status === 'COMING_SOON'
        );
        setBranches(displayBranches);
      })
      .catch((err) => console.error('Error al cargar sucursales:', err));
  }, []);

  const scrollToBowlFlow = () => {
    bowlFlowRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-sb-cream">
      {/* Hero Section */}
      <Hero onCTAClick={scrollToBowlFlow} />

      {/* Bowl Flow Builder con animación */}
      <motion.div 
        ref={bowlFlowRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <BowlFlow />
      </motion.div>

      {/* Sección de Estadísticas */}
      <section className="py-16 bg-gradient-to-b from-sb-cream to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Ingredientes Frescos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <CounterAnimation
                end={50}
                suffix="+"
                duration={3000}
                className="text-4xl md:text-5xl font-black text-sb-green-700 mb-2"
              />
              <p className="text-xs md:text-sm text-ink/70 font-medium">Ingredientes Frescos</p>
            </motion.div>

            {/* Sucursales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <CounterAnimation
                end={3}
                duration={500}
                className="text-4xl md:text-5xl font-black text-sb-green-700 mb-2"
              />
              <p className="text-xs md:text-sm text-ink/70 font-medium">Sucursales en Puebla</p>
            </motion.div>

            {/* Natural y Fresco */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <CounterAnimation
                end={100}
                suffix="%"
                className="text-4xl md:text-5xl font-black text-sb-green-700 mb-2"
              />
              <p className="text-xs md:text-sm text-ink/70 font-medium">Natural y Fresco</p>
            </motion.div>

            {/* Combinaciones Posibles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-sb-green-700 mb-2">∞</div>
              <p className="text-xs md:text-sm text-ink/70 font-medium">Combinaciones Posibles</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sucursales Section con animación */}
      <motion.section 
        ref={sucursalesRef}
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 1 }}
      >
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/sucursal.JPG"
            alt="Sucursal Salad Bowl"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10">
          {/* Header con animación */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl tracking-tight">
                NUESTRAS SUCURSALES
              </h2>
              <motion.div 
                className="w-24 h-1 bg-white mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>
          </div>

          {/* Carrusel de sucursales - sin padding en móvil */}
          <div className="md:max-w-7xl md:mx-auto md:px-8">
            <BranchCarousel branches={branches} />
          </div>
        </div>
      </motion.section>
      {/* Why Us Section con imágenes y animación */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <WhyUs />
      </motion.div>

      {/* Product Grid */}
      {/* <ProductGrid /> */}

      {/* Franchise CTA */}
      <FranchiseCTA />

      {/* Banner Bottom - Simple y directo */}
      <div className="w-full bg-gradient-to-b from-sb-green-700/5 to-white">
        {/* Desktop */}
        <div className="hidden md:block relative w-full h-56 lg:h-64 -mt-16 lg:-mt-24">
          <Image
            src="/banner-bottom.png"
            alt="Banner Salad Bowl"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        
        {/* Móvil con animación */}
        <div className="block md:hidden relative w-full h-48 overflow-hidden -mt-16">
          <motion.div
            className="absolute inset-0"
            style={{ width: '200%' }}
            animate={{
              x: ['-50%', '0%', '-50%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Image
              src="/banner-bottom.png"
              alt="Banner Salad Bowl"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
