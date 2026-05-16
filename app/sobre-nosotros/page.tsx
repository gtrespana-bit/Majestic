'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PageHeader, MagneticButton, HoloCard, GradientBorder } from '@/components/ui-premium'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Palette, Zap, ShieldCheck, Rocket, ArrowRight } from 'lucide-react'

const values = [
  { icon: <Palette className="w-6 h-6" />, title: "Diseño Centrado", desc: "Cada píxel tiene un propósito. Investigamos, prototipamos y validamos antes de escribir código." },
  { icon: <Zap className="w-6 h-6" />, title: "Rendimiento Extremo", desc: "Optimizamos assets, aplicamos SSR y priorizamos Core Web Vitals. Tu web vuela." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Seguridad & Escalabilidad", desc: "Arquitecturas modernas, backups automáticos y estándares WCAG." },
  { icon: <Rocket className="w-6 h-6" />, title: "Resultados Medibles", desc: "Entregamos métricas: conversión, retención y ROI claro." }
]
const stack = ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "Figma", "Spline", "Vercel", "Stripe"]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      <PageHeader title="Sobre Nosotros" subtitle="El equipo detrás de cada píxel y cada línea de código." />
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[hsl(var(--fg))]">Nuestros Pilares</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}>
              <GradientBorder className="h-full"><HoloCard className="h-full">
                <Card className="bg-[hsl(var(--card))/0.2] border-none h-full hover:border-[hsl(var(--primary))/0.4] transition-all">
                  <CardHeader className="pb-2"><div className="w-12 h-12 rounded-lg bg-[hsl(var(--primary))/0.15] flex items-center justify-center text-[hsl(var(--primary))] mb-3">{v.icon}</div><CardTitle className="text-lg text-[hsl(var(--fg))]">{v.title}</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-[hsl(var(--muted-fg))] leading-relaxed">{v.desc}</p></CardContent>
                </Card>
              </HoloCard></GradientBorder>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[hsl(var(--fg))]">Stack Tecnológico</h2>
        <p className="text-[hsl(var(--muted-fg))] max-w-2xl mx-auto mb-8">Herramientas modernas, probadas y escalables.</p>
        <div className="flex flex-wrap justify-center gap-3">{stack.map((tech, i) => (<motion.div key={i} initial={{ scale:0.9, opacity:0 }} whileInView={{ scale:1, opacity:1 }} viewport={{ once:true }} transition={{ delay: i*0.05 }}><Badge variant="outline" className="px-4 py-2 text-sm border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-colors cursor-default">{tech}</Badge></motion.div>))}</div>
      </section>
      <section className="bg-[hsl(var(--card))/0.2] border border-[hsl(var(--border))] rounded-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="mb-4 bg-[hsl(var(--accent))/0.2] text-[hsl(var(--accent))] border-[hsl(var(--accent))/0.3]">Nuestro Proceso</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[hsl(var(--fg))]">De la idea al lanzamiento en 4 pasos</h2>
            <ul className="space-y-4">{["Descubrimiento & Estrategia", "Diseño UX/UI & Prototipos", "Desarrollo & Testing", "Lanzamiento & Optimización"].map((step, i) => (<li key={i} className="flex items-start gap-3"><div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center text-sm font-bold mt-0.5">{i+1}</div><p className="text-[hsl(var(--fg))]">{step}</p></li>))}</ul>
            <MagneticButton><Link href="/contacto"><Button className="mt-6 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/0.9] text-[hsl(var(--primary-fg))] group">Ver detalles del proceso <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button></Link></MagneticButton>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-[hsl(var(--border))] aspect-square md:aspect-auto bg-gradient-to-br from-[hsl(var(--primary))/0.1] to-[hsl(var(--accent))/0.1] flex items-center justify-center"><Code2 className="w-24 h-24 text-[hsl(var(--primary))/0.3]" /></div>
        </div>
      </section>
    </div>
  )
}