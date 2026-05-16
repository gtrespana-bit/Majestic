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

// ✅ URLs PÚBLICAS de Spline como fallback si la original da 403
const PUBLIC_SCENES = [
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode",
  "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
  "https://prod.spline.design/SPv3j1X2j9q2v5Q6/scene.splinecode"
]

interface SplineSceneProps {
  scene?: string
  className?: string
}

export function SplineScene({ scene, className = '' }: SplineSceneProps) {
  const [sceneUrl, setSceneUrl] = useState(scene || PUBLIC_SCENES[0])
  const [error, setError] = useState(false)

  // Fallback automático si la escena da 403
  useEffect(() => {
    if (error && scene) {
      console.warn("⚠️ Escena bloqueada. Usando alternativa pública...")
      const fallback = PUBLIC_SCENES.find(url => url !== scene)
      if (fallback) setSceneUrl(fallback)
    }
  }, [error, scene])

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