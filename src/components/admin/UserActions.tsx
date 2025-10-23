'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface UserActionsProps {
  userId: number;
  userEmail: string;
  isAdmin: boolean;
}

export default function UserActions({ userId, userEmail, isAdmin }: UserActionsProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = () => {
    router.push(`/admin/dashboard/users/${userId}/edit`);
  };

  const handleDelete = async () => {
    if (isAdmin) {
      alert('No se puede eliminar el usuario administrador');
      return;
    }

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al eliminar usuario');
      }

      // Recargar la página
      router.refresh();
      setShowDeleteModal(false);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <button
        onClick={handleEdit}
        className="text-sb-green-700 hover:text-sb-green-600 mr-4 font-medium"
      >
        Editar
      </button>
      {!isAdmin && <button
        onClick={() => {
          if (isAdmin) {
            alert('No se puede eliminar el usuario administrador');
            return;
          }
          setShowDeleteModal(true);
        }}
        className={`font-medium ${
          isAdmin 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-red-600 hover:text-red-500'
        }`}
        disabled={isAdmin}
      >
        Eliminar
      </button>}

      {/* Modal de confirmación */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 text-center mb-3">
              ¿Eliminar usuario?
            </h3>
            
            <div className="text-center mb-6">
              <p className="text-gray-600 text-sm mb-2">
                ¿Estás seguro de que deseas eliminar al usuario:
              </p>
              <p className="font-semibold text-gray-900 text-sm break-all px-2">
                {userEmail}
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Esta acción no se puede deshacer
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                disabled={isDeleting}
                className="flex-1 px-4 py-2.5 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors disabled:opacity-50"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {isDeleting ? 'Eliminando...' : 'Eliminar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
