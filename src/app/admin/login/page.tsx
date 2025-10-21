'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { loginAction } from '@/app/actions/auth';

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-sb-green-700 text-white px-8 py-4 rounded-full font-bold hover:bg-sb-green-700/90 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sb-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'Iniciando sesión...' : 'Iniciar Sesión'}
    </button>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [state, formAction] = useFormState(loginAction, null);

  useEffect(() => {
    if (state?.success && state?.redirectPath) {
      router.push(state.redirectPath);
    }
  }, [state, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sb-green-700 via-sb-green-600 to-sb-green-700 p-4">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Card de Login */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-20">
              <Image
                src="/logo.png"
                alt="Salad Bowl"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Título */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-sb-green-700 mb-2">
              Panel de Administración
            </h1>
            <p className="text-ink/60">
              Ingresa tus credenciales para continuar
            </p>
          </div>

          {/* Error Message */}
          {state?.error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
            >
              <p className="text-red-600 text-sm font-medium text-center">
                {state.error}
              </p>
            </motion.div>
          )}

          {/* Formulario */}
          <form action={formAction} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sb-green-700 focus:outline-none transition-colors text-base"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-ink mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                autoComplete="current-password"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sb-green-700 focus:outline-none transition-colors text-base"
                placeholder="••••••••"
              />
            </div>

            <SubmitButton />
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-ink/60">
              ¿Problemas para acceder?{' '}
              <a href="/contacto" className="text-sb-green-700 hover:text-sb-green-600 font-semibold">
                Contáctanos
              </a>
            </p>
          </div>
        </div>

        {/* Volver al sitio */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-white/90 hover:text-white font-medium text-sm transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al sitio web
          </a>
        </div>
      </motion.div>
    </div>
  );
}
