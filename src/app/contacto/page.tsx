'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram } from '@/components/icons';
import Footer from '@/components/Footer';
import { SITE } from '@/config';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    instagram: '',
    mensaje: '',
  });

  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent('Contacto - Salad Bowl');
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\nTeléfono: ${formData.telefono}\nCorreo: ${formData.correo}\nInstagram: ${formData.instagram}\n\nMensaje:\n${formData.mensaje}`
    );
    window.location.href = `mailto:hola@saladbowl.com?subject=${subject}&body=${body}`;
    
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-sb-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-ink mb-4">
            Contacto
          </h1>
          <p className="text-lg text-ink/60">
            Estamos aquí para ayudarte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-ink mb-6">
              Información de contacto
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sb-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-sb-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-ink mb-1">Teléfono</p>
                  <a href={`tel:${SITE.whatsapp}`} className="text-ink/70 hover:text-sb-green-700 transition-colors">
                    {SITE.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sb-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-sb-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-ink mb-1">Email</p>
                  <a href="mailto:hola@saladbowl.com" className="text-ink/70 hover:text-sb-green-700 transition-colors">
                    hola@saladbowl.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sb-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-sb-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-ink mb-1">Instagram</p>
                  <a 
                    href={SITE.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-ink/70 hover:text-sb-green-700 transition-colors"
                  >
                    @saladbowl
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-ink mb-6">
              Envíanos un mensaje
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-ink mb-2">
                  Nombre
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
                  Correo
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
                <label htmlFor="instagram" className="block text-sm font-medium text-ink mb-2">
                  Instagram (opcional)
                </label>
                <input
                  type="text"
                  id="instagram"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sb-green-700 focus:outline-none transition-colors"
                  placeholder="@tu_usuario"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-ink mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  required
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sb-green-700 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sb-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-sb-green-700/90 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sb-green-500 focus:ring-offset-2"
              >
                Enviar mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 bg-sb-green-700 text-white px-6 py-4 rounded-2xl shadow-2xl z-50"
        >
          ¡Mensaje enviado!
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
