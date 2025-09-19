
'use client'

import { X, Plus, Minus, Trash2, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { useCart } from '@/components/cart-provider'
import Link from 'next/link'

export function CartSidebar() {
  const { state, removeFromCart, updateQuantity, clearCart, toggleCart } = useCart()

  const handleWhatsAppInquiry = () => {
    const itemsList = state.items.map(item => 
      `• ${item.productName} - ${item.quantity} pcs @ $${item.unitPrice.toFixed(2)} each`
    ).join('\n')
    
    const message = `Hi! I'm interested in the following products:\n\n${itemsList}\n\nTotal: $${state.totalAmount.toFixed(2)} for ${state.totalItems} pieces\n\nCan you provide a detailed quote?`
    const whatsappUrl = `https://wa.me/8801521520608?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Sheet open={state.isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span>Inquiry Cart ({state.totalItems})</span>
            {state.items.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearCart}>
                Clear All
              </Button>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full pt-6">
          {state.items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">🛒</span>
              </div>
              <h3 className="text-lg font-medium">Your cart is empty</h3>
              <p className="text-gray-600 mb-4">
                Add some products to your inquiry cart to get started
              </p>
              <Link href="/shop">
                <Button onClick={toggleCart}>
                  Browse Products
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 space-y-4 overflow-y-auto">
                {state.items.map((item) => (
                  <div key={item.productId} className="bg-white border rounded-lg p-4">
                    <div className="flex space-x-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.imageUrl || '/api/placeholder/64/64'}
                          alt={item.productName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">
                          {item.productName}
                        </h4>
                        
                        <div className="flex flex-wrap gap-1 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {item.category.replace(/_/g, ' ')}
                          </Badge>
                          {item.sku && (
                            <Badge variant="outline" className="text-xs">
                              {item.sku}
                            </Badge>
                          )}
                        </div>
                        
                        <div className="text-sm text-gray-600">
                          ${item.unitPrice.toFixed(2)} per piece
                        </div>
                        
                        {item.customizations && (
                          <div className="text-xs text-gray-500 mt-1">
                            {item.customizations.colors && (
                              <div>Colors: {item.customizations.colors}</div>
                            )}
                            {item.customizations.sizes && (
                              <div>Sizes: {item.customizations.sizes}</div>
                            )}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-col items-end space-y-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.productId)}
                          className="h-8 w-8 p-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                        
                        <div className="flex items-center space-x-1">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          
                          <span className="w-12 text-center text-sm">
                            {item.quantity}
                          </span>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        
                        <div className="text-sm font-medium">
                          ${(item.unitPrice * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total Estimate:</span>
                  <span>${state.totalAmount.toFixed(2)}</span>
                </div>
                
                <div className="text-sm text-gray-600 text-center">
                  Final pricing may vary based on customizations and quantities
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  <Button onClick={handleWhatsAppInquiry} className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Inquiry
                  </Button>
                  
                  <Link href="/contact" className="w-full">
                    <Button variant="outline" className="w-full" onClick={toggleCart}>
                      Request Detailed Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
