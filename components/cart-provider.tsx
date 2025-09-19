
'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { toast } from 'react-hot-toast'

interface CartItem {
  productId: string
  productName: string
  unitPrice: number
  quantity: number
  imageUrl?: string
  sku?: string
  category: string
  customizations?: {
    colors?: string
    sizes?: string
    specialRequests?: string
  }
}

interface CartState {
  items: CartItem[]
  totalItems: number
  totalAmount: number
  isOpen: boolean
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
} | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.productId === action.payload.productId)
      let newItems: CartItem[]
      
      if (existingItem) {
        newItems = state.items.map(item =>
          item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
      } else {
        newItems = [...state.items, action.payload]
      }
      
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const totalAmount = newItems.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0)
      
      return {
        ...state,
        items: newItems,
        totalItems,
        totalAmount
      }
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.productId !== action.payload)
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const totalAmount = newItems.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0)
      
      return {
        ...state,
        items: newItems,
        totalItems,
        totalAmount
      }
    }
    
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: action.payload.productId })
      }
      
      const newItems = state.items.map(item =>
        item.productId === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const totalAmount = newItems.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0)
      
      return {
        ...state,
        items: newItems,
        totalItems,
        totalAmount
      }
    }
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        totalItems: 0,
        totalAmount: 0
      }
    
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen
      }
    
    case 'LOAD_CART': {
      const totalItems = action.payload.reduce((sum, item) => sum + item.quantity, 0)
      const totalAmount = action.payload.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0)
      
      return {
        ...state,
        items: action.payload,
        totalItems,
        totalAmount
      }
    }
    
    default:
      return state
  }
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
  isOpen: false
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('knitcraft-cart')
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart)
        dispatch({ type: 'LOAD_CART', payload: cartItems })
      } catch (error) {
        console.error('Error loading cart from localStorage:', error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('knitcraft-cart', JSON.stringify(state.items))
  }, [state.items])

  const addToCart = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    const cartItem: CartItem = {
      ...item,
      quantity: item.quantity || 1
    }
    dispatch({ type: 'ADD_ITEM', payload: cartItem })
    toast.success('Added to inquiry cart!')
  }

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId })
    toast.success('Removed from cart')
  }

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
    toast.success('Cart cleared')
  }

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }

  return (
    <CartContext.Provider value={{
      state,
      dispatch,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
