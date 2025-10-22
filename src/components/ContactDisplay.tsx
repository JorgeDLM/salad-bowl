'use client';

import { useContact } from '@/hooks/useContact';

interface ContactDisplayProps {
  type: 'GENERAL' | 'LEGAL' | 'FRANCHISE' | 'SALES';
  className?: string;
  variant?: 'default' | 'white';
}

export default function ContactDisplay({ type, className = '', variant = 'default' }: ContactDisplayProps) {
  const { contact, loading } = useContact(type);

  if (loading) {
    return (
      <div className={`flex justify-center gap-4 ${className}`}>
        <div className={`rounded-xl p-4 animate-pulse ${variant === 'white' ? 'bg-white/20' : 'bg-sb-green-50 border-2 border-sb-green-200'}`}>
          <p className={`text-sm font-semibold ${variant === 'white' ? 'text-white/60' : 'text-gray-400'}`}>Email</p>
          <div className={`h-5 rounded w-32 mt-1 ${variant === 'white' ? 'bg-white/30' : 'bg-gray-200'}`}></div>
        </div>
        <div className={`rounded-xl p-4 animate-pulse ${variant === 'white' ? 'bg-white/20' : 'bg-sb-teal-50 border-2 border-sb-teal-200'}`}>
          <p className={`text-sm font-semibold ${variant === 'white' ? 'text-white/60' : 'text-gray-400'}`}>Teléfono</p>
          <div className={`h-5 rounded w-32 mt-1 ${variant === 'white' ? 'bg-white/30' : 'bg-gray-200'}`}></div>
        </div>
      </div>
    );
  }

  if (variant === 'white') {
    return (
      <div className={`flex justify-center gap-4 ${className}`}>
        <div className="bg-white/20 rounded-xl p-4">
          <p className="text-sm font-semibold text-sb-green-100">Email</p>
          <p className="text-white font-bold">{contact?.email || 'No disponible'}</p>
        </div>
        <div className="bg-white/20 rounded-xl p-4">
          <p className="text-sm font-semibold text-sb-green-100">Teléfono</p>
          <p className="text-white font-bold">{contact?.phoneFormatted || 'No disponible'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex justify-center gap-4 ${className}`}>
      <div className="bg-sb-green-50 rounded-xl p-4 border-2 border-sb-green-200">
        <p className="text-sm font-semibold text-gray-900">Email</p>
        <p className="text-sb-green-700">{contact?.email || 'No disponible'}</p>
      </div>
      <div className="bg-sb-teal-50 rounded-xl p-4 border-2 border-sb-teal-200">
        <p className="text-sm font-semibold text-gray-900">Teléfono</p>
        <p className="text-sb-teal-700">{contact?.phoneFormatted || 'No disponible'}</p>
      </div>
    </div>
  );
}
