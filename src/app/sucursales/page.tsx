'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BranchCard from '@/components/BranchCard';
import Footer from '@/components/Footer';
import { ArrowRight } from '@/components/icons';

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

export default function SucursalesPage() {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/branches/public')
      .then((res) => res.json())
      .then((data) => {
        setBranches(data.branches);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al cargar sucursales:', err);
        setLoading(false);
      });
  }, []);

  const openBranches = branches.filter((b) => b.status === 'OPEN');
  const comingSoonBranches = branches.filter((b) => b.status === 'COMING_SOON');

  return (
    <div className="min-h-screen relative pt-20">
      {/* Imagen de fondo */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/sucursal.JPG"
          alt="Sucursal Salad Bowl"
          fill
          className="object-cover"
        />
        {/* Overlay para mejor contraste */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black text-sb-green-700 mb-4 drop-shadow-sm">
            Sucursales
          </h1>
          <p className="text-xl text-sb-green-600 font-medium">
            Visítanos en nuestras ubicaciones
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-sb-green-700 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Sucursales Abiertas */}
            {openBranches.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Nuestras Sucursales</h2>
                <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                  {openBranches.map((branch, index) => (
                    <div key={branch.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                      <BranchCard
                        name={branch.name}
                        plaza={branch.plaza}
                        address={branch.address}
                        mapsUrl={branch.mapsUrl}
                        phone={branch.contactPhone}
                        schedule={branch.openingHours}
                        status={branch.status}
                        delay={index * 0.15}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Próximamente */}
            {comingSoonBranches.length > 0 && (
              <div>
                <h2 className="text-3xl font-black text-sb-orange mb-8 text-center">¡Próximamente!</h2>
                <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                  {comingSoonBranches.map((branch, index) => (
                    <div key={branch.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                      <BranchCard
                        name={branch.name}
                        plaza={branch.plaza}
                        address={branch.address}
                        mapsUrl={branch.mapsUrl}
                        phone={branch.contactPhone}
                        schedule={branch.openingHours}
                        status={branch.status}
                        delay={index * 0.15}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 bg-sb-green-700 rounded-3xl p-8 md:p-10 shadow-xl max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Tienes preguntas?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-8">
            Llámanos o visítanos en cualquiera de nuestras sucursales
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
