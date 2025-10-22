'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Check } from '@/components/icons';
import Footer from '@/components/Footer';
import { SITE } from '@/config';

interface ContactInfo {
  email: string;
  phone: string;
  phoneFormatted: string;
  phoneWhatsApp: string;
}

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    mensaje: '',
  });

  const [showToast, setShowToast] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);

  useEffect(() => {
    // Obtener contacto general
    fetch('/api/contacts?type=GENERAL')
      .then(res => res.json())
      .then(data => setContactInfo(data.contact))
      .catch(err => console.error('Error al cargar contacto:', err));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactInfo) return;
    
    // Enviar por WhatsApp con URL correcta
    const mensaje = `Hola! Me gustaría contactar con Salad Bowl.\n\nNombre: ${formData.nombre}\nMensaje: ${formData.mensaje}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${contactInfo.phoneWhatsApp}&text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
    
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen relative pt-20">
      {/* Imagen de fondo */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/img/barra.JPG"
          alt="Barra Salad Bowl"
          fill
          className="object-cover"
        />
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black text-sb-green-700 mb-4 drop-shadow-sm">
            Contacto
          </h1>
          <p className="text-xl text-sb-green-600 font-medium">
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
            <h2 className="text-3xl font-bold text-sb-green-700 mb-6">
              Información de contacto
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-sb-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-sb-green-700" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-ink mb-1">Teléfono</p>
                  <a href={`tel:${contactInfo?.phone || ''}`} className="text-lg text-ink/80 hover:text-sb-green-700 transition-colors">
                    {contactInfo?.phoneFormatted || 'Cargando...'}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-sb-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-sb-green-700" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-ink mb-1">Email</p>
                  <a href={`mailto:${contactInfo?.email || ''}`} className="text-lg text-ink/80 hover:text-sb-green-700 transition-colors">
                    {contactInfo?.email || 'Cargando...'}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-sb-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-7 h-7 text-sb-green-700" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-ink mb-1">Instagram</p>
                  <a 
                    href={SITE.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg text-ink/80 hover:text-sb-green-700 transition-colors"
                  >
                    @saladbowlmx
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
            <h2 className="text-3xl font-bold text-sb-green-700 mb-6">
              Envíanos un mensaje
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-base font-semibold text-ink mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-sb-green-700 focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-base font-semibold text-ink mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={6}
                  required
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-sb-green-700 focus:outline-none transition-colors resize-none"
                  placeholder="¿En qué podemos ayudarte?"
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
      </div>

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
