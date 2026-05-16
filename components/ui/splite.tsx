'use client'

import { lazy, Suspense, type ComponentProps } from 'react'

// Cargar Spline dinámicamente (sin catch complejo para evitar errores de tipos en Vercel)
const Spline = lazy(() => import('@splinetool/react-spline'))

// Fallback visual mientras carga
const SplineFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-900/30 rounded-2xl">
    <div className="text-center text-neutral-400">
      <div className="w-8 h-8 border-2 border-purple-500/50 border-t-purple-500 rounded-full animate-spin mx-auto mb-3" />
      <p className="text-sm">Cargando experiencia 3D...</p>
    </div>
  </div>
)

// Wrapper tipado para Spline
export function SplineScene(props: ComponentProps<typeof Spline>) {
  return (
    <Suspense fallback={<SplineFallback />}>
      <Spline {...props} />
    </Suspense>
  )
}

export default SplineScene