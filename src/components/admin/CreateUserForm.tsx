'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface CreateUserFormProps {
  franchisees: any[];
  branches: any[];
}

export default function CreateUserForm({ franchisees, branches }: CreateUserFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    role: 'EMPLOYEE' as 'ADMIN' | 'FRANCHISEE' | 'EMPLOYEE',
    franchiseeId: '',
    branchId: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          franchiseeId: formData.franchiseeId ? parseInt(formData.franchiseeId.toString()) : null,
          branchId: formData.branchId ? parseInt(formData.branchId.toString()) : null,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error al crear usuario');
      }

      router.push('/admin/dashboard/users');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8">
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="space-y-6">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contraseña *
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            required
            minLength={6}
          />
          <p className="mt-1 text-sm text-gray-500">
            Mínimo 6 caracteres
          </p>
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre de usuario
          </label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
          />
        </div>

        {/* Rol */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rol *
          </label>
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            required
          >
            <option value="EMPLOYEE">Empleado</option>
            <option value="FRANCHISEE">Franquiciatario</option>
            <option value="ADMIN">Administrador</option>
          </select>
        </div>

        {/* Franquicia (solo para FRANCHISEE) */}
        {formData.role === 'FRANCHISEE' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Franquicia
            </label>
            <select
              value={formData.franchiseeId}
              onChange={(e) => setFormData({ ...formData, franchiseeId: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            >
              <option value="">Ninguna</option>
              {franchisees.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Sucursal (solo para EMPLOYEE) */}
        {formData.role === 'EMPLOYEE' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sucursal
            </label>
            <select
              value={formData.branchId}
              onChange={(e) => setFormData({ ...formData, branchId: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
            >
              <option value="">Ninguna</option>
              {branches.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Botones */}
      <div className="flex gap-4 mt-8">
        <button
          type="button"
          onClick={() => router.push('/admin/dashboard/users')}
          className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          disabled={loading}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex-1 px-6 py-3 bg-sb-green-700 text-white rounded-lg font-semibold hover:bg-sb-green-600 transition-colors disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Creando...' : 'Crear Usuario'}
        </button>
      </div>
    </form>
  );
}
