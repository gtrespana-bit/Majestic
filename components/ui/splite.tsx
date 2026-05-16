'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

// Carga solo en cliente para evitar errores de Webpack/SSR
const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-neutral-900/20 rounded-2xl">
      <div className="text-center text-neutral-400">
        <div className="w-8 h-8 border-2 border-purple-500/50 border-t-purple-500 rounded-full animate-spin mx-auto mb-3" />
        <p className="text-sm">Cargando 3D...</p>
      </div>
    </div>
  )
})

// ✅ URLs PÚBLICAS de Spline que permiten embed sin restricciones
const PUBLIC_SCENES = [
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode", // Tu escena original
  "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",  // Robot oficial (abierto)
  "https://prod.spline.design/SPv3j1X2j9q2v5Q6/scene.splinecode"   // Escena demo (abierta)
]

export function SplineScene({ className = '' }: { className?: string }) {
  const [sceneUrl, setSceneUrl] = useState(PUBLIC_SCENES[0])
  const [error, setError] = useState(false)

  // Fallback automático si la escena original da 403
  useEffect(() => {
    if (error) {
      console.warn("⚠️ Escena original bloqueada. Cambiando a alternativa pública...")
      setSceneUrl(PUBLIC_SCENES[1]) // Cambia a la escena alternativa
    }
  }, [error])

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-2xl ${className}`}>
      <Spline 
        scene={sceneUrl} 
        onError={() => setError(true)}
        className="w-full h-full pointer-events-auto"
      />
    </div>
  )
}

export default SplineScene