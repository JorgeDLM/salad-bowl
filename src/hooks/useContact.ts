import { useState, useEffect } from 'react';

interface ContactInfo {
  id: number;
  type: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  phoneWhatsApp: string;
}

export function useContact(type: 'GENERAL' | 'LEGAL' | 'FRANCHISE' | 'SALES') {
  const [contact, setContact] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/contacts?type=${type}`)
      .then(res => res.json())
      .then(data => {
        setContact(data.contact);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar contacto:', err);
        setLoading(false);
      });
  }, [type]);

  return { contact, loading };
}
