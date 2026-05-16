import { Metadata } from 'next'
import UxUiContent from '@/components/ux-ui-content'

export const metadata: Metadata = {
  title: "Diseño UX/UI Centrado en Conversión | MajesticWeb",
  description: "Creamos interfaces intuitivas, atractivas y orientadas a resultados. Prototipado, testing y diseño sistemático que convierte visitantes en clientes.",
}

export default function UXUIPage() {
  return <UxUiContent />
}