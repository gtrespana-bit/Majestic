import React from 'react'
'use client'

import { useState, useEffect } from 'react'

// ✅ TU ESCENA DE SPLINE
const SPLINE_EMBED_URL = "https://my.spline.design/nexbotrobotcharacterconcept-vpDGeeHrll7A8gjDFeSDRA3n/"

interface SplineSceneProps {
  className?: string
}

export function SplineScene({ className = '' }: SplineSceneProps) {
  const [loaded, setLoaded] = useState(false)
  const [showFallback, setShowFallback] = useState(false)

  // Timeout: si tarda >4s, muestra fallback
  useEffect(() => {
    const timer = setTimeout(() => { 
      if (!loaded) setShowFallback(true) 
    }, 4000)
    return () => clearTimeout(timer)
  }, [loaded])

  if (showFallback) {
    return React.createElement('div', 
      { className: `relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center ${className}` },
      React.createElement('div',
        { className: 'text-center relative z-10 px-6' },
        React.createElement('div',
          { className: 'w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm' },
          React.createElement('span', { className: 'text-2xl' }, '🤖')
        ),
        React.createElement('p', { className: 'text-neutral-300 text-sm' }, 'Cargando NexBot...')
      )
    )
  }

  return React.createElement('div',
    { className: `relative w-full h-full overflow-hidden rounded-2xl ${className}` },
    !loaded && React.createElement('div',
      { className: 'absolute inset-0 flex items-center justify-center bg-neutral-900/30' },
      React.createElement('div', { className: 'w-8 h-8 border-2 border-purple-500/50 border-t-purple-400 rounded-full animate-spin' })
    ),
    React.createElement('iframe', {
      src: SPLINE_EMBED_URL,
      className: 'w-full h-full border-0',
      title: 'NexBot 3D Robot',
      loading: 'lazy',
      allow: 'autoplay; fullscreen; pointer-lock',
      sandbox: 'allow-scripts allow-same-origin allow-pointer-lock',
      onLoad: () => setLoaded(true),
      style: { opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }
    })
  )
}

export default SplineScene