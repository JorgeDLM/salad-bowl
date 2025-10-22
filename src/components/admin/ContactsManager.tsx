'use client';

import { useState, useEffect } from 'react';

type ContactType = 'GENERAL' | 'LEGAL' | 'FRANCHISE' | 'SALES';

interface Contact {
  id: number;
  type: ContactType;
  email: string;
  phone: string;
  phoneFormatted: string;
  phoneWhatsApp: string;
  isActive: boolean;
}

const contactLabels = {
  GENERAL: 'General / Información',
  LEGAL: 'Legal',
  FRANCHISE: 'Franquicias',
  SALES: 'Ventas',
};

const contactDescriptions = {
  GENERAL: 'Contacto principal para información general y dudas',
  LEGAL: 'Contacto para asuntos legales y contratos',
  FRANCHISE: 'Contacto para interesados en franquicias',
  SALES: 'Contacto para ventas y cotizaciones',
};

export default function ContactsManager() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<number | null>(null);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    try {
      const res = await fetch('/api/admin/contacts');
      const data = await res.json();
      setContacts(data.contacts);
    } catch (error) {
      console.error('Error al cargar contactos:', error);
    } finally {
      setLoading(false);
    }
  }

  function formatPhone(phone: string) {
    // Solo números
    const numbers = phone.replace(/\D/g, '');
    
    if (numbers.length === 10) {
      return {
        phone: numbers,
        phoneFormatted: `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`,
        phoneWhatsApp: `52${numbers}`,
      };
    }
    
    return {
      phone: numbers,
      phoneFormatted: phone,
      phoneWhatsApp: `52${numbers}`,
    };
  }

  function handleEditContact(contact: Contact) {
    setEditingContact({ ...contact });
  }

  function handlePhoneChange(value: string) {
    if (!editingContact) return;
    
    const formatted = formatPhone(value);
    setEditingContact({
      ...editingContact,
      ...formatted,
    });
  }

  async function handleSaveContact() {
    if (!editingContact) return;

    setSaving(editingContact.id);
    try {
      const res = await fetch('/api/admin/contacts', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingContact),
      });

      if (res.ok) {
        const data = await res.json();
        setContacts(contacts.map(c => c.id === data.contact.id ? data.contact : c));
        setEditingContact(null);
      }
    } catch (error) {
      console.error('Error al guardar:', error);
    } finally {
      setSaving(null);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-4 border-sb-green-700 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Info Card */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="font-bold text-blue-900 mb-1">Información importante</h3>
            <p className="text-sm text-blue-800">
              Estos contactos se usan en toda la página web. Al editarlos, se actualizarán automáticamente 
              en formularios de contacto, WhatsApp, footer y todas las secciones donde aparezcan.
            </p>
          </div>
        </div>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden">
            <div className="bg-sb-green-700 p-4 text-white">
              <h3 className="text-xl font-bold">{contactLabels[contact.type]}</h3>
              <p className="text-sb-green-100 text-sm">{contactDescriptions[contact.type]}</p>
            </div>
            
            {editingContact?.id === contact.id ? (
              // Edit Mode
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={editingContact.email}
                    onChange={(e) => setEditingContact({ ...editingContact, email: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-sb-green-700 focus:outline-none"
                    placeholder="email@saladbowl.mx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono (10 dígitos)
                  </label>
                  <input
                    type="tel"
                    value={editingContact.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-sb-green-700 focus:outline-none"
                    placeholder="2222996191"
                    maxLength={10}
                  />
                  <div className="mt-2 space-y-1 text-xs text-gray-600">
                    <p>📱 Formato visible: <strong>{editingContact.phoneFormatted}</strong></p>
                    <p>💬 WhatsApp: <strong>{editingContact.phoneWhatsApp}</strong></p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSaveContact}
                    disabled={saving === contact.id}
                    className="flex-1 bg-sb-green-700 text-white font-bold py-3 px-4 rounded-lg hover:bg-sb-green-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {saving === contact.id ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Guardando...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Guardar
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setEditingContact(null)}
                    className="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              // View Mode
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-semibold text-gray-900">{contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-600">Teléfono</p>
                      <p className="font-semibold text-gray-900">{contact.phoneFormatted}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleEditContact(contact)}
                  className="w-full bg-gray-100 text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Editar Contacto
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
