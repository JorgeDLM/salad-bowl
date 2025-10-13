'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from '@/components/icons';
import Footer from '@/components/Footer';

export default function FranquiciasPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    ciudad: '',
    mensaje: '',
  });

  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dummy form submission - mailto
    const subject = encodeURIComponent('Solicitud de Franquicia - Salad Bowl');
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\nTeléfono: ${formData.telefono}\nCorreo: ${formData.correo}\nCiudad: ${formData.ciudad}\nMensaje: ${formData.mensaje}`
    );
    window.location.href = `mailto:franquicias@saladbowl.com?subject=${subject}&body=${body}`;
    
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
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-ink mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                required
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sb-green-700 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-ink mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="correo"
                required
                value={formData.correo}
                onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sb-green-700 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="ciudad" className="block text-sm font-medium text-ink mb-2">
                Ciudad de interés
              </label>
              <input
                type="text"
                id="ciudad"
                required
                value={formData.ciudad}
                onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sb-green-700 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-ink mb-2">
                Mensaje (opcional)
              </label>
              <textarea
                id="mensaje"
                rows={4}
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sb-green-700 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sb-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-sb-green-700/90 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sb-green-500 focus:ring-offset-2"
            >
              Enviar solicitud
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
          <span className="font-medium">¡Solicitud enviada!</span>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
