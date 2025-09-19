
'use client'

import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/components/cart-provider'

export function CartIcon() {
  const { state, toggleCart } = useCart()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleCart}
      className="relative"
    >
      <ShoppingCart className="w-5 h-5" />
      {state.totalItems > 0 && (
        <Badge 
          className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-blue-600 text-white text-xs"
        >
          {state.totalItems > 99 ? '99+' : state.totalItems}
        </Badge>
      )}
    </Button>
  )
}
