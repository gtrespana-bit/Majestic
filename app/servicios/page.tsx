'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PageHeader, MagneticButton, HoloCard, GradientBorder } from '@/components/ui-premium'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Globe, Zap, Rocket, Code2 } from 'lucide-react'

const services = [
  { icon: <Globe className="w-6 h-6" />, title: "Diseño Web Corporativo", desc: "Sitios institucionales que reflejan la identidad de tu marca con navegación intuitiva.", features: ["UX/UI personalizado", "SEO técnico on-page", "Integración CMS", "Responsive total"] },
  { icon: <Zap className="w-6 h-6" />, title: "Experiencias 3D e Interactivas", desc: "Implementamos Spline, Three.js y WebGL para crear inmersión real.", features: ["Modelado 3D optimizado", "Animaciones interactivas", "Rendimiento 60fps", "Cross-browser"] },
  { icon: <Rocket className="w-6 h-6" />, title: "E-Commerce & Tiendas Online", desc: "Plataformas de venta escalables con checkout optimizado y pasarelas seguras.", features: ["Shopify / WooCommerce", "Checkout de alta conversión", "Gestión de inventario", "Automatización emails"] },
  { icon: <Code2 className="w-6 h-6" />, title: "Desarrollo Web Apps & SaaS", desc: "Aplicaciones web complejas, dashboards y herramientas internas modernas.", features: ["Next.js / React", "APIs REST & GraphQL", "Auth & Roles", "Despliegue cloud"] }
]

const plans = [
  { name: "Esencial", price: "Desde 950€", desc: "Ideal para startups", features: ["Diseño UI/UX a medida", "Hasta 5 páginas", "SEO básico", "Formulario de contacto", "Entrega en 7-10 días"], popular: false },
  { name: "Profesional", price: "Desde 1.950€", desc: "Para empresas en crecimiento", features: ["Todo lo del plan Esencial", "Hasta 10 páginas + Blog", "Animaciones avanzadas", "Integración CRM/Analytics", "Core Web Vitals", "Soporte 30 días"], popular: true },
  { name: "Enterprise", price: "A medida", desc: "Proyectos complejos", features: ["Arquitectura personalizada", "Desarrollo 3D/Spline", "E-commerce completo", "APIs & Integraciones", "Mantenimiento premium", "SLA garantizado"], popular: false }
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-24">
      <PageHeader title="Nuestros Servicios" subtitle="Soluciones digitales de alto impacto diseñadas para escalar tu negocio." />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[hsl(var(--fg))]">Qué hacemos mejor</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <GradientBorder className="h-full"><HoloCard className="h-full">
                <Card className="bg-[hsl(var(--card))/0.2] border-none h-full group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[hsl(var(--primary))/0.15] flex items-center justify-center text-[hsl(var(--primary))] mb-3 group-hover:scale-110 transition-transform">{s.icon}</div>
                    <CardTitle className="text-xl text-[hsl(var(--fg))]">{s.title}</CardTitle>
                    <CardDescription className="text-[hsl(var(--muted-fg))] mt-2">{s.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {s.features.map((f, j) => (<li key={j} className="flex items-center gap-2 text-sm text-[hsl(var(--fg))]"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> {f}</li>))}
                    </ul>
                  </CardContent>
                </Card>
              </HoloCard></GradientBorder>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[hsl(var(--card))/0.2] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-10">
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-[hsl(var(--accent))/0.2] text-[hsl(var(--accent))] border-[hsl(var(--accent))/0.3]">Planes transparentes</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--fg))]">Inversión adaptada a tus objetivos</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className={p.popular ? "relative" : ""}>
              {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-fg))] text-xs font-bold px-3 py-1 rounded-full shadow-lg">Más elegido</div>}
              <GradientBorder className="h-full"><HoloCard className="h-full">
                <Card className={`h-full flex flex-col border-none bg-[hsl(var(--card))/0.2] ${p.popular ? 'ring-2 ring-[hsl(var(--primary))]' : ''}`}>
                  <CardHeader className="text-center pb-4"><CardTitle className="text-lg text-[hsl(var(--fg))]">{p.name}</CardTitle><div className="text-3xl font-bold text-[hsl(var(--fg))] mt-2">{p.price}</div><CardDescription className="text-[hsl(var(--muted-fg))]">{p.desc}</CardDescription></CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3 mb-6">{p.features.map((f, j) => (<li key={j} className="flex items-start gap-2 text-sm text-[hsl(var(--fg))]"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" /> {f}</li>))}</ul>
                    <MagneticButton><Link href="/contacto" className="block"><Button className={`w-full ${p.popular ? 'bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/0.9] text-[hsl(var(--primary-fg))]' : 'bg-[hsl(var(--bg))] border border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] text-[hsl(var(--fg))]'}`}>Solicitar presupuesto</Button></Link></MagneticButton>
                  </CardContent>
                </Card>
              </HoloCard></GradientBorder>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[hsl(var(--fg))]">¿No sabes qué servicio necesitas?</h2>
        <p className="text-[hsl(var(--muted-fg))] max-w-xl mx-auto mb-6">Agenda una llamada estratégica gratuita.</p>
        <MagneticButton><Link href="/contacto"><Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-6 text-lg group">Agendar consulta gratuita <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Button></Link></MagneticButton>
      </motion.div>
    </div>
  )
}