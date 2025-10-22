'use client';

import { useState } from 'react';

interface DaySchedule {
  open: string;
  close: string;
  isOpen: boolean;
}

interface BusinessHours {
  mon: DaySchedule;
  tue: DaySchedule;
  wed: DaySchedule;
  thu: DaySchedule;
  fri: DaySchedule;
  sat: DaySchedule;
  sun: DaySchedule;
}

const DAYS = [
  { key: 'mon', label: 'Lunes' },
  { key: 'tue', label: 'Martes' },
  { key: 'wed', label: 'Miércoles' },
  { key: 'thu', label: 'Jueves' },
  { key: 'fri', label: 'Viernes' },
  { key: 'sat', label: 'Sábado' },
  { key: 'sun', label: 'Domingo' },
];

interface BusinessHoursSelectorProps {
  defaultValue?: any;
  name: string;
}

export default function BusinessHoursSelector({ defaultValue, name }: BusinessHoursSelectorProps) {
  // Determinar si tiene horario definido
  const hasInitialSchedule = defaultValue && typeof defaultValue === 'object' && Object.keys(defaultValue).length > 0;
  
  const [hasSchedule, setHasSchedule] = useState(hasInitialSchedule);
  const [hours, setHours] = useState<BusinessHours>(() => {
    // Convertir el defaultValue a nuestro formato
    if (defaultValue && typeof defaultValue === 'object') {
      const converted: any = {};
      DAYS.forEach(({ key }) => {
        if (defaultValue[key]) {
          converted[key] = {
            open: defaultValue[key].open || '09:00',
            close: defaultValue[key].close || '20:00',
            isOpen: true,
          };
        } else {
          converted[key] = {
            open: '09:00',
            close: '20:00',
            isOpen: false,
          };
        }
      });
      return converted;
    }

    // Default: todos cerrados
    const defaultHours: any = {};
    DAYS.forEach(({ key }) => {
      defaultHours[key] = { open: '09:00', close: '20:00', isOpen: false };
    });
    return defaultHours;
  });

  const toggleDay = (day: string) => {
    setHours(prev => ({
      ...prev,
      [day]: {
        ...prev[day as keyof BusinessHours],
        isOpen: !prev[day as keyof BusinessHours].isOpen,
      },
    }));
  };

  const updateTime = (day: string, field: 'open' | 'close', value: string) => {
    setHours(prev => ({
      ...prev,
      [day]: {
        ...prev[day as keyof BusinessHours],
        [field]: value,
      },
    }));
  };

  const copyToAll = (sourceDay: string) => {
    const source = hours[sourceDay as keyof BusinessHours];
    const newHours: any = {};
    DAYS.forEach(({ key }) => {
      newHours[key] = {
        open: source.open,
        close: source.close,
        isOpen: hours[key as keyof BusinessHours].isOpen,
      };
    });
    setHours(newHours);
  };

  // Convertir a JSON para el FormData (solo si tiene horario)
  const jsonValue = hasSchedule ? JSON.stringify(
    Object.fromEntries(
      Object.entries(hours)
        .filter(([_, schedule]) => schedule.isOpen)
        .map(([day, schedule]) => [day, { open: schedule.open, close: schedule.close }])
    )
  ) : '';

  return (
    <div className="space-y-4">
      <input type="hidden" name={name} value={jsonValue} />
      
      {/* Checkbox principal */}
      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
        <input
          type="checkbox"
          id="hasSchedule"
          checked={hasSchedule}
          onChange={(e) => setHasSchedule(e.target.checked)}
          className="w-5 h-5 text-sb-green-700 rounded focus:ring-2 focus:ring-sb-green-500 cursor-pointer"
        />
        <label htmlFor="hasSchedule" className="font-semibold text-gray-900 cursor-pointer select-none">
          Tiene horario de atención definido
        </label>
      </div>

      {/* Selector de horarios (solo si está activo) */}
      {hasSchedule && (
        <>
          <div className="space-y-3">
        {DAYS.map(({ key, label }) => {
          const schedule = hours[key as keyof BusinessHours];
          return (
            <div
              key={key}
              className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
                schedule.isOpen
                  ? 'border-sb-green-200 bg-sb-green-50/50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              {/* Checkbox */}
              <label className="flex items-center gap-3 cursor-pointer min-w-[120px]">
                <input
                  type="checkbox"
                  checked={schedule.isOpen}
                  onChange={() => toggleDay(key)}
                  className="w-5 h-5 text-sb-green-700 rounded focus:ring-2 focus:ring-sb-green-500 cursor-pointer"
                />
                <span className={`font-semibold ${schedule.isOpen ? 'text-gray-900' : 'text-gray-400'}`}>
                  {label}
                </span>
              </label>

              {/* Horarios */}
              {schedule.isOpen && (
                <>
                  <div className="flex items-center gap-2 flex-1">
                    <div className="flex-1">
                      <label className="block text-xs text-gray-600 mb-1">Apertura</label>
                      <input
                        type="time"
                        value={schedule.open}
                        onChange={(e) => updateTime(key, 'open', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
                      />
                    </div>
                    <span className="text-gray-400 mt-5">→</span>
                    <div className="flex-1">
                      <label className="block text-xs text-gray-600 mb-1">Cierre</label>
                      <input
                        type="time"
                        value={schedule.close}
                        onChange={(e) => updateTime(key, 'close', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sb-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Botón copiar */}
                  <button
                    type="button"
                    onClick={() => copyToAll(key)}
                    className="px-3 py-2 text-xs font-medium text-sb-green-700 hover:bg-sb-green-100 rounded-lg transition-colors whitespace-nowrap"
                    title="Copiar este horario a todos los días abiertos"
                  >
                    Copiar a todos
                  </button>
                </>
              )}

              {!schedule.isOpen && (
                <span className="text-sm text-gray-400 italic">Cerrado</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Atajos rápidos */}
      <div className="flex gap-2 pt-2">
        <button
          type="button"
          onClick={() => {
            const newHours: any = {};
            DAYS.forEach(({ key }) => {
              newHours[key] = { open: '09:00', close: '20:00', isOpen: true };
            });
            setHours(newHours);
          }}
          className="px-3 py-1.5 text-xs font-medium text-sb-green-700 bg-sb-green-50 hover:bg-sb-green-100 rounded-lg transition-colors"
        >
          Todos los días 9:00 - 20:00
        </button>
        <button
          type="button"
          onClick={() => {
            const newHours: any = {};
            DAYS.forEach(({ key }, index) => {
              if (index < 5) { // Lun-Vie
                newHours[key] = { open: '09:00', close: '20:00', isOpen: true };
              } else {
                newHours[key] = { open: '09:00', close: '20:00', isOpen: false };
              }
            });
            setHours(newHours);
          }}
          className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          Solo Lun-Vie
        </button>
      </div>
        </>
      )}
    </div>
  );
}
