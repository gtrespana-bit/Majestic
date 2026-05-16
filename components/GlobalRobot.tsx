'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'

export default function GlobalRobot() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.4 }}
      className="fixed bottom-24 right-6 z-40 hidden md:block"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className={`relative overflow-hidden rounded-xl border backdrop-blur-md transition-all duration-300 ${
        isHovered 
          ? 'w-[150px] h-[150px] border-[hsl(var(--primary))/0.4] shadow-xl shadow-purple-500/20' 
          : 'w-[120px] h-[120px] border-[hsl(var(--border))/0.3] shadow-lg'
      }`}>
        <SplineScene className="w-full h-full" />
      </div>
    </motion.div>
  )
}