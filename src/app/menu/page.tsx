'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const categories = ['Todas', 'Ensaladas', 'Wraps', 'Paninis', 'Botanas', 'Açaí'];

const menuItems = [
  {
    id: 1,
    title: 'Bowl Mediterráneo',
    category: 'Ensaladas',
    description: 'Lechuga, queso feta, aceitunas, tomate, pepino',
    image: '/saladbowl/grid-ensalada.jpg',
  },
  {
    id: 2,
    title: 'Caesar Bowl',
    category: 'Ensaladas',
    description: 'Lechuga romana, pollo, parmesano, crutones, aderezo césar',
    image: '/saladbowl/grid-ensalada.jpg',
  },
  {
    id: 3,
    title: 'Wrap de Pollo',
    category: 'Wraps',
    description: 'Tortilla integral, pollo, verduras frescas, aderezo especial',
    image: '/saladbowl/grid-wrap.jpg',
  },
  {
    id: 4,
    title: 'Wrap Vegano',
    category: 'Wraps',
    description: 'Hummus, vegetales asados, espinaca, aguacate',
    image: '/saladbowl/grid-wrap.jpg',
  },
  {
    id: 5,
    title: 'Panino Caprese',
    category: 'Paninis',
    description: 'Mozzarella, tomate, albahaca, pesto',
    image: '/saladbowl/grid-panino.jpg',
  },
  {
    id: 6,
    title: 'Panino de Pollo',
    category: 'Paninis',
    description: 'Pollo a la parrilla, queso, verduras, mostaza miel',
    image: '/saladbowl/grid-panino.jpg',
  },
  {
    id: 7,
    title: 'Mix de Nueces',
    category: 'Botanas',
    description: 'Almendras, nueces, arándanos, semillas',
    image: '/saladbowl/grid-botana.jpg',
  },
  {
    id: 8,
    title: 'Bowl de Açaí',
    category: 'Açaí',
    description: 'Açaí, granola, frutas frescas, miel',
    image: '/saladbowl/grid-acai.jpg',
  },
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const filteredItems = selectedCategory === 'Todas'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-sb-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-ink mb-4">
            Nuestro Menú
          </h1>
          <p className="text-lg text-ink/60">
            Frescura y sabor en cada plato
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-sb-green-700 text-white shadow-lg'
                  : 'bg-white text-ink hover:bg-sb-green-500/10 hover:text-sb-green-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-sb-green-500/20 rounded-full px-3 py-1 mb-3">
                    <span className="text-xs font-semibold text-sb-green-700">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-ink/60 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
