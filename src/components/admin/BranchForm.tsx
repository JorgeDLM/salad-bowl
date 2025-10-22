'use client';

import { createBranch, updateBranch } from '@/app/actions/branch';
import type { Branch, Franchisee } from '@/../../prisma/generated/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface BranchFormProps {
  branch?: (Branch & { franchisee?: Franchisee | null }) | null;
  franchisees: Franchisee[];
  mode: 'create' | 'edit';
}

export default function BranchForm({ branch, franchisees, mode }: BranchFormProps) {
  const router = useRouter();
  const isEdit = mode === 'edit' && branch;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    
    try {
      if (isEdit) {
        const result = await updateBranch(branch.id, formData);
        if (result?.error) {
          setError(result.error);
          setLoading(false);
        }
      } else {
        const result = await createBranch(formData);
        if (result?.error) {
          setError(result.error);
          setLoading(false);
        }
      }
    } catch (err) {
      console.error('Error en submit:', err);
      setError('Error al guardar los cambios');
      setLoading(false);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-6 max-w-2xl" key={branch?.id || 'new'}>
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {isEdit ? 'Editar Sucursal' : 'Nueva Sucursal'}
          </h2>
        </div>

        {/* Franquiciatario */}
        <div>
          <label htmlFor="franchiseeId" className="block text-sm font-semibold text-gray-700 mb-2">
            Franquiciatario
          </label>
          <select
            id="franchiseeId"
            name="franchiseeId"
            defaultValue={branch?.franchiseeId?.toString() || ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
          >
            <option value="">Corporativa (Admin)</option>
            {franchisees.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
          <p className="text-sm text-gray-500 mt-1">
            Si no seleccionas ninguno, la sucursal será corporativa (administrada por el admin)
          </p>
        </div>

        {/* Nombre */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre de la Sucursal *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            defaultValue={branch?.name ?? ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            placeholder="Ej: Vía San Ángel"
          />
        </div>

        {/* Plaza */}
        <div>
          <label htmlFor="plaza" className="block text-sm font-semibold text-gray-700 mb-2">
            Plaza o Lugar
          </label>
          <input
            type="text"
            id="plaza"
            name="plaza"
            defaultValue={branch?.plaza ?? ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            placeholder="Ej: Plaza Vía San Ángel"
          />
          <p className="text-sm text-gray-500 mt-1">
            Opcional. Centro comercial o plaza donde se encuentra
          </p>
        </div>

        {/* Dirección */}
        <div>
          <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
            Dirección *
          </label>
          <textarea
            id="address"
            name="address"
            required
            rows={3}
            defaultValue={branch?.address || ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            placeholder="Dirección completa de la sucursal"
          />
        </div>

        {/* URL de Google Maps */}
        <div>
          <label htmlFor="mapsUrl" className="block text-sm font-semibold text-gray-700 mb-2">
            URL de Google Maps
          </label>
          <input
            type="url"
            id="mapsUrl"
            name="mapsUrl"
            defaultValue={branch?.mapsUrl ?? ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            placeholder="https://www.google.com/maps?q=..."
          />
          <p className="text-sm text-gray-500 mt-1">
            URL para el botón "Cómo llegar"
          </p>
        </div>

        {/* Estado */}
        <div>
          <label htmlFor="status" className="block text-sm font-semibold text-gray-700 mb-2">
            Estado
          </label>
          <select
            id="status"
            name="status"
            defaultValue={branch?.status ?? 'OPEN'}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
          >
            <option value="OPEN">Abierta</option>
            <option value="CLOSED">Cerrada</option>
            <option value="COMING_SOON">Por abrir</option>
          </select>
        </div>

        {/* Manager */}
        <div>
          <label htmlFor="managerName" className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre del Gerente
          </label>
          <input
            type="text"
            id="managerName"
            name="managerName"
            defaultValue={branch?.managerName || ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            placeholder="Ej: María García"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="contactPhone" className="block text-sm font-semibold text-gray-700 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="contactPhone"
            name="contactPhone"
            defaultValue={branch?.contactPhone || ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            placeholder="2221234567"
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-red-800 font-semibold">{error}</p>
          </div>
        </div>
      )}

      {/* Botones */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-sb-green-700 text-white rounded-lg font-semibold hover:bg-sb-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {loading && (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          {loading ? 'Guardando...' : (isEdit ? 'Guardar Cambios' : 'Crear Sucursal')}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          disabled={loading}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors disabled:opacity-50"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
