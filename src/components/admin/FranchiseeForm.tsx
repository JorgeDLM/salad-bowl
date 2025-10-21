'use client';

import { createFranchisee, updateFranchisee } from '@/app/actions/franchisee';
import type { Franchisee } from '@/../../prisma/generated/client';
import { useRouter } from 'next/navigation';

interface FranchiseeFormProps {
  franchisee?: Franchisee | null;
  mode: 'create' | 'edit';
}

export default function FranchiseeForm({ franchisee, mode }: FranchiseeFormProps) {
  const router = useRouter();
  const isEdit = mode === 'edit' && franchisee;

  async function handleSubmit(formData: FormData) {
    if (isEdit) {
      await updateFranchisee(franchisee.id, formData);
    } else {
      await createFranchisee(formData);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {isEdit ? 'Editar Franquiciatario' : 'Nuevo Franquiciatario'}
          </h2>
        </div>

        {/* Nombre del Franquiciatario */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre del Franquiciatario *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            defaultValue={franchisee?.name || ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            placeholder="Ej: Grupo Restaurantero ABC"
          />
        </div>

        {/* Nombre de Contacto */}
        <div>
          <label htmlFor="contactName" className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre de Contacto
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            defaultValue={franchisee?.contactName || ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            placeholder="Ej: Juan Pérez"
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
            defaultValue={franchisee?.contactPhone || ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            placeholder="2221234567"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contactEmail" className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            defaultValue={franchisee?.contactEmail || ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            placeholder="contacto@ejemplo.com"
          />
        </div>

        {/* Notas */}
        <div>
          <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
            Notas
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            defaultValue={franchisee?.notes || ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            placeholder="Notas adicionales..."
          />
        </div>
      </div>

      {/* Botones */}
      <div className="flex gap-4">
        <button
          type="submit"
          className="px-6 py-2 bg-sb-green-700 text-white rounded-lg font-semibold hover:bg-sb-green-600 transition-colors"
        >
          {isEdit ? 'Guardar Cambios' : 'Crear Franquiciatario'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
