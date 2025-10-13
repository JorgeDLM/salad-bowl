'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from './icons';

const products = [
  {
    id: 'ensaladas',
    title: 'Ensaladas',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=85',
    href: '/menu',
  },
  {
    id: 'wrap',
    title: 'Wrap',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=85',
    href: '/menu',
  },
  {
    id: 'panino',
    title: 'Panino',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&q=85',
    href: '/menu',
  },
  {
    id: 'botanas',
    title: 'Botanas',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800&q=85',
    href: '/menu',
  },
  {
    id: 'acai',
    title: 'Açaí',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=85',
    href: '/menu',
  },
];

export default function ProductGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Nuestro menú
          </h2>
          <p className="text-lg text-ink/60">Frescura en cada bocado</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link href={product.href} className="group block">
                <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/90 group-hover:gap-3 transition-all">
                      <span className="text-sm font-medium">Ver menú</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
