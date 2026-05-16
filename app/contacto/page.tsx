'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHeader, HoloCard, GradientBorder } from '@/components/ui-premium'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', project: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setStatus('sending')
    setTimeout(() => setStatus('success'), 1500)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Contáctanos" subtitle="Agenda una consulta gratuita y llevemos tu proyecto al siguiente nivel." />
      <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto mt-8">
        <motion.div className="lg:col-span-2 space-y-6" initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.2 }}>
          <GradientBorder><HoloCard><Card className="bg-[hsl(var(--card))/0.2] border-none">
            <CardHeader><CardTitle className="text-xl text-[hsl(var(--fg))]">Hablemos de tu proyecto</CardTitle><p className="text-[hsl(var(--muted-fg))] text-sm">Responderemos en menos de 24 horas.</p></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-[hsl(var(--muted-fg))]"><div className="w-10 h-10 rounded-lg bg-[hsl(var(--primary))/0.15] flex items-center justify-center text-[hsl(var(--primary))]"><Mail className="w-5 h-5" /></div><div><div className="text-sm font-medium text-[hsl(var(--fg))]">Email</div><div>hola@majesticweb.studio</div></div></div>
              <div className="flex items-center gap-3 text-[hsl(var(--muted-fg))]"><div className="w-10 h-10 rounded-lg bg-[hsl(var(--primary))/0.15] flex items-center justify-center text-[hsl(var(--primary))]"><Phone className="w-5 h-5" /></div><div><div className="text-sm font-medium text-[hsl(var(--fg))]">Teléfono</div><div>+34 612 345 678</div></div></div>
              <div className="flex items-center gap-3 text-[hsl(var(--muted-fg))]"><div className="w-10 h-10 rounded-lg bg-[hsl(var(--primary))/0.15] flex items-center justify-center text-[hsl(var(--primary))]"><MapPin className="w-5 h-5" /></div><div><div className="text-sm font-medium text-[hsl(var(--fg))]">Oficina</div><div>Madrid, España (Remoto Global)</div></div></div>
            </CardContent>
          </Card></HoloCard></GradientBorder>
          <GradientBorder><HoloCard><Card className="bg-gradient-to-br from-[hsl(var(--primary))/0.1] to-[hsl(var(--accent))/0.1] border-[hsl(var(--primary))/0.3] border-none">
            <CardContent className="p-6"><Badge className="mb-3 bg-[hsl(var(--primary))] text-[hsl(var(--primary-fg))]">Horario</Badge><p className="text-[hsl(var(--fg))] mb-2">Lunes a Viernes: 9:00 - 19:00</p><p className="text-sm text-[hsl(var(--muted-fg))]">Consultas urgentes: Soporte 24/7 para clientes activos.</p></CardContent>
          </Card></HoloCard></GradientBorder>
        </motion.div>

        <motion.div className="lg:col-span-3" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3 }}>
          <GradientBorder><HoloCard><Card className="bg-[hsl(var(--card))/0.2] border-none">
            <CardContent className="p-6 md:p-8">
              {status === 'success' ? (
                <motion.div initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }} className="text-center py-12"><CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" /><h3 className="text-2xl font-bold text-[hsl(var(--fg))] mb-2">¡Mensaje enviado!</h3><p className="text-[hsl(var(--muted-fg))]">Gracias {formState.name || ''}. Te contactaremos muy pronto.</p><Button onClick={() => setStatus('idle')} className="mt-6 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/0.9]">Enviar otro mensaje</Button></motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div><label className="block text-sm font-medium text-[hsl(var(--fg))] mb-2">Nombre</label><input required type="text" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--bg))] border border-[hsl(var(--border))] text-[hsl(var(--fg))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/0.5] focus:border-transparent transition-all placeholder:text-[hsl(var(--muted-fg))]" placeholder="Tu nombre" /></div>
                    <div><label className="block text-sm font-medium text-[hsl(var(--fg))] mb-2">Email</label><input required type="email" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--bg))] border border-[hsl(var(--border))] text-[hsl(var(--fg))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/0.5] focus:border-transparent transition-all placeholder:text-[hsl(var(--muted-fg))]" placeholder="tu@email.com" /></div>
                  </div>
                  <div><label className="block text-sm font-medium text-[hsl(var(--fg))] mb-2">Tipo de proyecto</label><select value={formState.project} onChange={e => setFormState({...formState, project: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--bg))] border border-[hsl(var(--border))] text-[hsl(var(--fg))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/0.5] focus:border-transparent transition-all appearance-none"><option value="">Selecciona una opción</option><option value="web">Sitio Web Corporativo</option><option value="ecommerce">E-Commerce</option><option value="app">Aplicación Web / SaaS</option><option value="3d">Experiencia 3D / Interactiva</option><option value="other">Otro</option></select></div>
                  <div><label className="block text-sm font-medium text-[hsl(var(--fg))] mb-2">Cuéntanos más</label><textarea required rows={4} value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--bg))] border border-[hsl(var(--border))] text-[hsl(var(--fg))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/0.5] focus:border-transparent transition-all placeholder:text-[hsl(var(--muted-fg))] resize-none" placeholder="Describe tu proyecto, objetivos y plazo ideal..." /></div>
                  <Button type="submit" disabled={status === 'sending'} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-6 text-lg group">{status === 'sending' ? 'Enviando...' : <>Enviar consulta <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></>}</Button>
                  <p className="text-xs text-center text-[hsl(var(--muted-fg))]">Al enviar, aceptas nuestra política de privacidad.</p>
                </form>
              )}
            </CardContent>
          </Card></HoloCard></GradientBorder>
        </motion.div>
      </div>
    </div>
  )
}