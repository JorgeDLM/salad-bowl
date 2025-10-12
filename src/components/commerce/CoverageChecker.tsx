'use client';

import React, { useState } from 'react';
import { deliveryZones } from '@/data/delivery-zones';

export function CoverageChecker() {
  const [cp, setCp] = useState('');
  const [status, setStatus] = useState<'idle' | 'valid' | 'invalid'>('idle');
  const [zoneName, setZoneName] = useState('');

  const handleCheck = () => {
    if (cp.length !== 5) {
      setStatus('invalid');
      return;
    }

    const zone = deliveryZones.find(z => z.postalCodes.includes(cp));
    
    if (zone) {
      setStatus('valid');
      setZoneName(zone.name);
    } else {
      setStatus('invalid');
    }
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-[color:var(--ink)]">
        Código Postal
      </label>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={cp}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '').slice(0, 5);
            setCp(value);
            setStatus('idle');
          }}
          placeholder="06100"
          maxLength={5}
          className="flex-1 px-4 py-3 rounded-full border-2 border-[color:var(--border)] 
                   focus:border-[color:var(--brand-terracotta)] focus:outline-none
                   text-[color:var(--ink)] bg-white transition-colors"
        />
        <button
          onClick={handleCheck}
          className="px-6 py-3 bg-[color:var(--brand-terracotta)] text-white rounded-full
                   font-semibold hover:bg-[color:var(--brand-terracotta-600)] transition-colors
                   disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={cp.length !== 5}
        >
          Verificar
        </button>
      </div>

      {status === 'valid' && (
        <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 px-4 py-3 rounded-lg">
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>¡Excelente! Hacemos entregas en <strong>{zoneName}</strong></span>
        </div>
      )}

      {status === 'invalid' && (
        <div className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 px-4 py-3 rounded-lg">
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>Por el momento no llegamos a esta zona. Contáctanos para más opciones.</span>
        </div>
      )}
    </div>
  );
}
