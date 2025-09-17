'use client';

interface ClientInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientInfoModal({ isOpen, onClose }: ClientInfoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 max-w-lg w-full shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Estado del Proyecto</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">95% Completado</h3>
          </div>

          <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
            <p>
              <strong>Desarrollo completado al 95%</strong> - La plataforma está prácticamente terminada 
              con todas las funcionalidades principales implementadas.
            </p>
            <p>
              <strong>Estado actual:</strong> Proyecto pausado temporalmente debido a limitaciones 
              de capital y tiempo personal, pero con planes de reactivación.
            </p>
            <p>
              <strong>Potencial comprobado:</strong> Con 2,500 propiedades y 2,300 corredores ya integrados, 
              el concepto demostró su viabilidad en el mercado inmobiliario.
            </p>
            <p>
              <strong>Oportunidad:</strong> Busco inversionista estratégico para finalizar el desarrollo. 
              Ofrezco liderazgo técnico y construcción de equipo para garantizar el éxito del proyecto.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
