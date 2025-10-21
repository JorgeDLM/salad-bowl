'use client';

import { createBranch, updateBranch } from '@/app/actions/branch';
import type { Branch, Franchisee } from '@/../../prisma/generated/client';
import { useRouter } from 'next/navigation';

interface BranchFormProps {
  branch?: (Branch & { franchisee?: Franchisee | null }) | null;
  franchisees: Franchisee[];
  mode: 'create' | 'edit';
}

export default function BranchForm({ branch, franchisees, mode }: BranchFormProps) {
  const router = useRouter();
  const isEdit = mode === 'edit' && branch;

  async function handleSubmit(formData: FormData) {
    if (isEdit) {
      await updateBranch(branch.id, formData);
    } else {
      await createBranch(formData);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-6 max-w-2xl">
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
            defaultValue={branch?.name || ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            placeholder="Ej: Plaza Vía San Ángel"
          />
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

        {/* Coordenadas */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="latitude" className="block text-sm font-semibold text-gray-700 mb-2">
              Latitud
            </label>
            <input
              type="number"
              step="0.0000001"
              id="latitude"
              name="latitude"
              defaultValue={branch?.latitude?.toString() || ''}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
              placeholder="19.0414398"
            />
          </div>
          <div>
            <label htmlFor="longitude" className="block text-sm font-semibold text-gray-700 mb-2">
              Longitud
            </label>
            <input
              type="number"
              step="0.0000001"
              id="longitude"
              name="longitude"
              defaultValue={branch?.longitude?.toString() || ''}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
              placeholder="-98.2062727"
            />
          </div>
        </div>
      </div>

      {/* Botones */}
      <div className="flex gap-4">
        <button
          type="submit"
          className="px-6 py-2 bg-sb-green-700 text-white rounded-lg font-semibold hover:bg-sb-green-600 transition-colors"
        >
          {isEdit ? 'Guardar Cambios' : 'Crear Sucursal'}
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
