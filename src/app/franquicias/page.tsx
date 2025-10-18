'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from '@/components/icons';
import Footer from '@/components/Footer';

export default function FranquiciasPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    mensaje: '',
  });

  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enviar por WhatsApp
    const mensaje = `Hola! Me interesa una franquicia de Salad Bowl.\n\nNombre: ${formData.nombre}\nMensaje: ${formData.mensaje}`;
    const whatsappUrl = `https://wa.me/5212222996191?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
    
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const benefits = [
    {
      title: 'Inversión inteligente',
      desc: 'ROI comprobado con modelo de negocio rentable'
    },
    {
      title: 'Soporte total',
      desc: 'Capacitación, marketing y sistema POS incluido'
    },
    {
      title: 'Marca establecida',
      desc: 'Aprovecha el prestigio de Salad Bowl en Puebla'
    },
  ];

  return (
    <div className="min-h-screen relative pt-20">
      {/* Imagen de fondo */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/panino.JPG"
          alt="Panino Salad Bowl"
          fill
          className="object-cover object-center"
        />
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 backdrop-blur-sm" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header impactante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block bg-sb-green-700 text-white px-6 py-2 rounded-full text-sm font-bold mb-6"
          >
            OPORTUNIDAD DE NEGOCIO
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-sb-green-700 mb-6">
            Abre tu Salad Bowl
          </h1>
          <p className="text-2xl text-ink font-semibold mb-4">
            La franquicia de comida saludable #1 en Puebla
          </p>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto">
            Únete al negocio más rentable del sector saludable con inversión accesible y retorno garantizado
          </p>
        </motion.div>

        {/* Beneficios destacados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-sb-green-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-black text-sb-green-700 mb-2">
                {benefit.title}
              </h3>
              <p className="text-ink/70">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Datos clave */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-sb-green-700 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black text-sb-green-500 mb-2">$500K</div>
              <div className="text-white/90">Inversión inicial desde</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-sb-green-500 mb-2">40-60m²</div>
              <div className="text-white/90">Espacio requerido</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-sb-green-500 mb-2">12-18</div>
              <div className="text-white/90">Meses de recuperación</div>
            </div>
          </div>
        </motion.div>

        {/* Form con CTA fuerte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl p-10 md:p-12 shadow-2xl max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-black text-ink mb-3 text-center">
            ¿Listo para empezar?
          </h2>
          <p className="text-center text-ink/70 mb-8">
            Déjanos tus datos y te contactaremos para brindarte toda la información
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-ink mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sb-green-700 focus:outline-none transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-ink mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={6}
                required
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sb-green-700 focus:outline-none transition-colors resize-none"
                placeholder="Cuéntanos sobre tu interés en abrir una franquicia..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sb-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-sb-green-700/90 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sb-green-500 focus:ring-offset-2 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Enviar por WhatsApp
            </button>
          </form>
        </motion.div>
      </div>

      {/* Toast */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 bg-sb-green-700 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50"
        >
          <Check className="w-5 h-5" />
          <span className="font-medium">¡Abriendo WhatsApp!</span>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
