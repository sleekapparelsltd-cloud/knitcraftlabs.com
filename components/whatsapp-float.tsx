
'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/VG35GXG3RFPOD1', '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        size="sm"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>
    </div>
  )
}
