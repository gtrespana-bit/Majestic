'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHeader, GradientBorder } from '@/components/ui-premium'
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
          <GradientBorder><div className="bg-[hsl(var(--card))] rounded-xl p-6">
            <h3 className="text-xl font-bold text-[hsl(var(--fg))] mb-1">Hablemos de tu proyecto</h3>
            <p className="text-[hsl(var(--muted-fg))] text-sm mb-4">Responderemos en menos de 24 horas.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[hsl(var(--muted-fg))]"><div className="w-10 h-10 rounded-lg bg-[hsl(var(--primary))/0.15] flex items-center justify-center text-[hsl(var(--primary))]"><Mail className="w-5 h-5" /></div><div><div className="text-sm font-medium text-[hsl(var(--fg))]">Email</div><div>hola@majesticweb.studio</div></div></div>
              <div className="flex items-center gap-3 text-[hsl(var(--muted-fg))]"><div className="w-10 h-10 rounded-lg bg-[hsl(var(--primary))/0.15] flex items-center justify-center text-[hsl(var(--primary))]"><Phone className="w-5 h-5" /></div><div><div className="text-sm font-medium text-[hsl(var(--fg))]">Teléfono</div><div>+34 612 345 678</div></div></div>
              <div className="flex items-center gap-3 text-[hsl(var(--muted-fg))]"><div className="w-10 h-10 rounded-lg bg-[hsl(var(--primary))/0.15] flex items-center justify-center text-[hsl(var(--primary))]"><MapPin className="w-5 h-5" /></div><div><div className="text-sm font-medium text-[hsl(var(--fg))]">Oficina</div><div>Madrid, España (Remoto Global)</div></div></div>
            </div>
          </div></GradientBorder>
          <GradientBorder><div className="bg-gradient-to-br from-[hsl(var(--primary))/0.1] to-[hsl(var(--accent))/0.1] border border-[hsl(var(--primary))/0.3] rounded-xl p-6">
            <h4 className="font-semibold text-[hsl(var(--fg))] mb-2">Horario</h4>
            <p className="text-[hsl(var(--fg))]">Lunes a Viernes: 9:00 - 19:00</p>
            <p className="text-sm text-[hsl(var(--muted-fg))] mt-1">Consultas urgentes: Soporte 24/7 para clientes activos.</p>
          </div></GradientBorder>
        </motion.div>

        <motion.div className="lg:col-span-3" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3 }}>
          <GradientBorder><div className="bg-[hsl(var(--card))] rounded-xl p-6 md:p-8">
            {status === 'success' ? (
              <motion.div initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }} className="text-center py-12"><CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" /><h3 className="text-2xl font-bold text-[hsl(var(--fg))] mb-2">¡Mensaje enviado!</h3><p className="text-[hsl(var(--muted-fg))]">Gracias {formState.name || ''}. Te contactaremos muy pronto.</p><button onClick={() => setStatus('idle')} className="mt-6 px-6 py-2 rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-fg))]">Enviar otro mensaje</button></motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-medium text-[hsl(var(--fg))] mb-2">Nombre</label><input required type="text" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--bg))] border border-[hsl(var(--border))] text-[hsl(var(--fg))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/0.5] focus:border-transparent transition-all placeholder:text-[hsl(var(--muted-fg))]" placeholder="Tu nombre" /></div>
                  <div><label className="block text-sm font-medium text-[hsl(var(--fg))] mb-2">Email</label><input required type="email" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--bg))] border border-[hsl(var(--border))] text-[hsl(var(--fg))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/0.5] focus:border-transparent transition-all placeholder:text-[hsl(var(--muted-fg))]" placeholder="tu@email.com" /></div>
                </div>
                <div><label className="block text-sm font-medium text-[hsl(var(--fg))] mb-2">Tipo de proyecto</label><select value={formState.project} onChange={e => setFormState({...formState, project: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--bg))] border border-[hsl(var(--border))] text-[hsl(var(--fg))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/0.5] focus:border-transparent transition-all appearance-none"><option value="">Selecciona una opción</option><option value="web">Sitio Web Corporativo</option><option value="ecommerce">E-Commerce</option><option value="app">Aplicación Web / SaaS</option><option value="3d">Experiencia 3D / Interactiva</option><option value="other">Otro</option></select></div>
                <div><label className="block text-sm font-medium text-[hsl(var(--fg))] mb-2">Cuéntanos más</label><textarea required rows={4} value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--bg))] border border-[hsl(var(--border))] text-[hsl(var(--fg))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/0.5] focus:border-transparent transition-all placeholder:text-[hsl(var(--muted-fg))] resize-none" placeholder="Describe tu proyecto, objetivos y plazo ideal..." /></div>
                <button type="submit" disabled={status === 'sending'} className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-xl shadow-purple-500/20 transition-all group">{status === 'sending' ? 'Enviando...' : <>Enviar consulta <Send className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></>}</button>
                <p className="text-xs text-center text-[hsl(var(--muted-fg))]">Al enviar, aceptas nuestra política de privacidad.</p>
              </form>
            )}
          </div></GradientBorder>
        </motion.div>
      </div>
    </div>
  )
}