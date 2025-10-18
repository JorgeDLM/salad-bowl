'use client';

import React, { useState } from 'react';
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
    'Modelo de negocio probado',
    'Capacitación completa',
    'Soporte continuo',
    'Marketing y branding',
    'Recetas y proveedores',
    'Sistema POS incluido',
  ];

  const requirements = [
    'Inversión inicial desde $500,000 MXN',
    'Espacio de 40-60 m²',
    'Ubicación estratégica',
    'Pasión por comida saludable',
  ];

  return (
    <div className="min-h-screen bg-sb-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-sb-green-500/20 rounded-2xl px-4 py-2 mb-6">
            <span className="text-sb-green-700 font-semibold text-sm uppercase tracking-wider">
              Únete a la familia
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-ink mb-4">
            Franquicias Salad Bowl
          </h1>
          <p className="text-lg text-ink/60 max-w-2xl mx-auto">
            Sé parte de la revolución saludable. Lleva Salad Bowl a tu ciudad.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12"
        >
          <h2 className="text-3xl font-bold text-ink mb-8 text-center">
            Beneficios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-sb-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-sb-green-700" />
                </div>
                <span className="text-ink font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gradient-to-br from-sb-teal-200/30 to-sb-green-500/10 rounded-3xl p-8 md:p-12 mb-12"
        >
          <h2 className="text-3xl font-bold text-ink mb-8 text-center">
            Requisitos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {requirements.map((requirement, index) => (
              <motion.div
                key={requirement}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 bg-sb-green-700 rounded-full mt-2 flex-shrink-0" />
                <span className="text-ink">{requirement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-ink mb-6 text-center">
            Solicita información
          </h2>
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
