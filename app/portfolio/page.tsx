'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { PageHeader, MagneticButton, HoloCard, GradientBorder } from '@/components/ui-premium'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from 'lucide-react'

const projects = [
  { id: 1, title: "E-Commerce Luxury", cat: "Tienda Online", img: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800", metrics: "+210% conversión", year: "2024" },
  { id: 2, title: "App Financiera", cat: "Fintech", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800", metrics: "4.9★ App Store", year: "2023" },
  { id: 3, title: "Studio Creativo", cat: "Portfolio", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800", metrics: "Awwwards Honorable", year: "2024" },
  { id: 4, title: "Startup Tech", cat: "SaaS", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800", metrics: "340% leads", year: "2023" },
  { id: 5, title: "Restaurante Gourmet", cat: "Tienda Online", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800", metrics: "Reservas +150%", year: "2024" },
  { id: 6, title: "Plataforma Educativa", cat: "SaaS", img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800", metrics: "12k usuarios/mes", year: "2023" }
]
const categories = ["Todos", "Tienda Online", "Fintech", "Portfolio", "SaaS"]

export default function PortfolioPage() {
  const [filter, setFilter] = useState("Todos")
  const filtered = filter === "Todos" ? projects : projects.filter(p => p.cat === filter)

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Nuestro Portfolio" subtitle="Proyectos que hablan por sí mismos. Cada sitio es una experiencia diseñada para convertir." />
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(cat => (<button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${filter === cat ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-fg))] border-transparent' : 'bg-transparent border-[hsl(var(--border))] text-[hsl(var(--muted-fg))] hover:text-[hsl(var(--fg))]'}`}>{cat}</button>))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3, delay: i * 0.05 }}>
              <GradientBorder className="rounded-2xl overflow-hidden"><HoloCard className="rounded-2xl overflow-hidden h-full">
                <Card className="border-none bg-[hsl(var(--card))/0.2] h-full flex flex-col group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20">Ver Proyecto <ArrowUpRight className="ml-2 w-4 h-4" /></Button>
                    </div>
                  </div>
                  <CardHeader className="pb-2"><div className="flex justify-between items-start mb-2"><Badge variant="secondary" className="text-xs">{p.cat}</Badge><span className="text-xs text-[hsl(var(--muted-fg))]">{p.year}</span></div><h3 className="text-xl font-semibold text-[hsl(var(--fg))]">{p.title}</h3></CardHeader>
                  <CardContent className="pt-0 mt-auto"><p className="text-sm text-[hsl(var(--muted-fg))] flex items-center gap-1">📈 {p.metrics}</p></CardContent>
                </Card>
              </HoloCard></GradientBorder>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--fg))]">¿Listo para tu caso de éxito?</h3>
        <MagneticButton><Link href="/contacto"><Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-6">Iniciar tu proyecto</Button></Link></MagneticButton>
      </div>
    </div>
  )
}