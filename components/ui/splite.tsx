'use client'

import dynamic from 'next/dynamic'
import { type ComponentProps } from 'react'

// Carga dinámica de Spline SOLO en cliente (evita errores de SSR en Vercel)
const Spline = dynamic(
  () => import('@splinetool/react-spline').then(mod => mod.default),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-neutral-900/30 rounded-2xl">
        <div className="text-center text-neutral-400">
          <div className="w-8 h-8 border-2 border-purple-500/50 border-t-purple-500 rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm">Cargando 3D...</p>
        </div>
      </div>
    )
  }
)

// Wrapper tipado para uso seguro en toda la app
export function SplineScene(props: ComponentProps<typeof Spline>) {
  return <Spline {...props} />
}

export default SplineScene