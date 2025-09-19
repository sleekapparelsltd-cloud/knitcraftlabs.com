
'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Heart, Share2, ShoppingCart, Truck, Shield, Award, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useCart } from '@/components/cart-provider'
import { toast } from 'react-hot-toast'

interface Product {
  id: string
  name: string
  category: string
  description?: string
  unitPrice: number
  minimumMOQ: number
  leadTime: number
  imageUrl?: string
  materials?: string
  colors: string[]
  sizes: string[]
  specifications?: string
  setupCost?: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(100)
  const [customizations, setCustomizations] = useState({
    colors: '',
    sizes: '',
    specialRequests: ''
  })

  const { addToCart } = useCart()

  useEffect(() => {
    if (id) {
      fetchProduct()
    }
  }, [id])

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/products/${id}`)
      if (response.ok) {
        const data = await response.json()
        setProduct(data)
        setQuantity(Math.max(100, data.minimumMOQ))
      } else {
        toast.error('Product not found')
      }
    } catch (error) {
      console.error('Error fetching product:', error)
      toast.error('Failed to load product')
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = () => {
    if (!product) return
    
    if (quantity < product.minimumMOQ) {
      toast.error(`Minimum order quantity is ${product.minimumMOQ} pieces`)
      return
    }
    
    addToCart({
      productId: product.id,
      productName: product.name,
      unitPrice: product.unitPrice,
      quantity: quantity,
      imageUrl: product.imageUrl,
      sku: product.id,
      category: product.category,
      customizations: customizations.colors || customizations.sizes || customizations.specialRequests 
        ? customizations 
        : undefined
    })
  }

  const handleRequestQuote = () => {
    // Navigate to quote request with pre-filled data
    toast.success('Redirecting to quote request...')
  }

  const handleWhatsAppInquiry = () => {
    const message = `Hi! I'm interested in ${product?.name} (ID: ${product?.id}). Quantity: ${quantity} pieces. Can you provide more details?`
    const whatsappUrl = `https://wa.me/8801521520608?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading product details...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Link href="/shop">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Shop
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const images = product.imageUrl 
    ? [product.imageUrl] 
    : ['/api/placeholder/600/600']

  const totalPrice = quantity * product.unitPrice

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
          <Link href="/shop" className="hover:text-blue-600">Shop</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.setupCost && (
                <Badge className="absolute top-4 right-4 bg-blue-500 text-white">
                  Setup: ${product.setupCost}
                </Badge>
              )}
            </div>
            
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary">
                  {product.category.replace(/_/g, ' ')}
                </Badge>
                {product.materials && (
                  <Badge variant="outline">
                    {product.materials.split(',')[0]}
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-4">
                {product.description || 'High-quality apparel manufacturing with professional finish and attention to detail.'}
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-blue-600">
                  ${product.unitPrice.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500">per piece</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Min MOQ:</span>
                  <span className="font-medium ml-2">{product.minimumMOQ.toLocaleString()} pcs</span>
                </div>
                <div>
                  <span className="text-gray-500">Lead Time:</span>
                  <span className="font-medium ml-2">{product.leadTime} days</span>
                </div>
                <div>
                  <span className="text-gray-500">Category:</span>
                  <span className="font-medium ml-2">{product.category.replace(/_/g, ' ')}</span>
                </div>
                {product.setupCost && (
                  <div>
                    <span className="text-gray-500">Setup Cost:</span>
                    <span className="font-medium ml-2">${product.setupCost}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Order Configuration */}
            <Card>
              <CardHeader>
                <CardTitle>Configure Your Order</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity (Min: {product.minimumMOQ} pcs)
                  </label>
                  <Input
                    type="number"
                    min={product.minimumMOQ}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || product.minimumMOQ)}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Colors (Optional)
                  </label>
                  <Input
                    placeholder="e.g., Navy Blue, White, Black"
                    value={customizations.colors}
                    onChange={(e) => setCustomizations(prev => ({ ...prev, colors: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sizes (Optional)
                  </label>
                  <Input
                    placeholder="e.g., S, M, L, XL"
                    value={customizations.sizes}
                    onChange={(e) => setCustomizations(prev => ({ ...prev, sizes: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <Input
                    placeholder="Any special requirements or customizations"
                    value={customizations.specialRequests}
                    onChange={(e) => setCustomizations(prev => ({ ...prev, specialRequests: e.target.value }))}
                  />
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Estimated Total:</span>
                    <span className="text-2xl font-bold text-blue-600">
                      ${totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    For {quantity.toLocaleString()} pieces at ${product.unitPrice.toFixed(2)} each
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Button onClick={handleAddToCart} variant="outline" className="flex-1">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button onClick={handleRequestQuote} className="flex-1">
                      Request Quote
                    </Button>
                  </div>
                  
                  <Button onClick={handleWhatsAppInquiry} variant="outline" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Inquiry
                  </Button>

                  <div className="flex gap-3">
                    <Button variant="ghost" size="sm">
                      <Heart className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                <p className="text-xs text-gray-600">Fast Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                <p className="text-xs text-gray-600">Quality Assured</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                <p className="text-xs text-gray-600">ISO Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="p-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description || 'This high-quality apparel item is manufactured using premium materials and processes. Our experienced team ensures attention to detail and excellent finish quality for all products.'}
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Available Colors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.length > 0 ? (
                      product.colors.map(color => (
                        <Badge key={color} variant="outline">{color}</Badge>
                      ))
                    ) : (
                      <span className="text-gray-500">Contact us for available colors</span>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Available Sizes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.length > 0 ? (
                      product.sizes.map(size => (
                        <Badge key={size} variant="outline">{size}</Badge>
                      ))
                    ) : (
                      <span className="text-gray-500">Custom sizes available</span>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Product ID:</span>
                      <span className="font-medium">{product.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lead Time:</span>
                      <span className="font-medium">{product.leadTime} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Setup Cost:</span>
                      <span className="font-medium">{product.setupCost ? `$${product.setupCost}` : 'None'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium">{product.category.replace(/_/g, ' ')}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Custom Specifications</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      {product.specifications || 'We can customize this product according to your specific requirements. Contact us to discuss your needs.'}
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="materials" className="p-6">
              <h3 className="text-xl font-semibold mb-4">Materials & Composition</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  {product.materials || 'High-quality materials sourced from trusted suppliers. We use only premium fabrics and components to ensure durability and comfort.'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold mb-2">Quality Standards</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• OEKO-TEX Standard 100 certified</li>
                      <li>• BSCI compliant manufacturing</li>
                      <li>• WRAP certified facility</li>
                      <li>• Pre-shrunk and colorfast</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Care Instructions</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Machine wash cold water</li>
                      <li>• Tumble dry low heat</li>
                      <li>• Iron medium temperature</li>
                      <li>• Do not bleach</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="shipping" className="p-6">
              <h3 className="text-xl font-semibold mb-4">Shipping & Delivery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Production Timeline</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sample Time:</span>
                      <span className="font-medium">7-10 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Production Time:</span>
                      <span className="font-medium">{product.leadTime} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quality Check:</span>
                      <span className="font-medium">2-3 days</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Shipping Options</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Express: DHL, FedEx, UPS (3-5 days)</li>
                    <li>• Sea Freight: 15-30 days</li>
                    <li>• Air Freight: 5-7 days</li>
                    <li>• FOB, CIF, DDP terms available</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
