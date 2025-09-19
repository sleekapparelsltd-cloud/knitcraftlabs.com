
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, MessageSquare, Clock, Users, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const showcaseProducts = [
  {
    id: 'sweater-merino',
    name: 'Custom Merino Wool Sweaters',
    category: 'Knitwear',
    description: 'Premium merino wool sweaters with custom designs, perfect for fashion startups and luxury brands.',
    image: 'https://cdn.abacus.ai/images/84e41788-32f2-4b13-9975-6c4416792c1c.png',
    priceRange: '$18 - $35',
    moq: '50 pieces',
    leadTime: '15-25 days',
    materials: 'Merino Wool, Cotton Blend',
    highlights: ['Custom Logo Embroidery', '12+ Colors Available', 'Size XS-3XL']
  },
  {
    id: 'polo-shirts',
    name: 'Professional Polo Shirts',
    category: 'Corporate Wear',
    description: 'High-quality polo shirts ideal for corporate uniforms, sports teams, and branded merchandise.',
    image: 'https://cdn.abacus.ai/images/6420486a-58f8-4b6a-9af9-08acb6a2e006.png',
    priceRange: '$8 - $15',
    moq: '100 pieces',
    leadTime: '10-18 days',
    materials: 'Cotton Pique, Cotton-Polyester',
    highlights: ['Moisture-Wicking', 'Custom Embroidery', 'Bulk Discounts']
  },
  {
    id: 'school-uniforms',
    name: 'Nordic School Uniforms',
    category: 'School Uniforms',
    description: 'Complete school uniform solutions for Nordic countries with express 7-day production options.',
    image: 'https://cdn.abacus.ai/images/5360692e-4f42-4eb3-bbf6-bed51cc245f1.png',
    priceRange: '$12 - $28',
    moq: '50 pieces',
    leadTime: '7-14 days',
    materials: 'Cotton, Wool Blend, Polyester',
    highlights: ['Express 7-Day Option', 'Scandinavian Standards', 'Durable Quality']
  },
  {
    id: 'hoodies',
    name: 'Custom Hoodies & Sweatshirts',
    category: 'Streetwear',
    description: 'Trendy hoodies and sweatshirts perfect for fashion startups, influencer brands, and casual wear lines.',
    image: 'https://cdn.abacus.ai/images/ad76a95b-7b4c-4fd2-8dff-f4827ff6c800.png',
    priceRange: '$15 - $32',
    moq: '75 pieces',
    leadTime: '12-20 days',
    materials: 'French Terry, Fleece, Cotton-Polyester',
    highlights: ['Custom Print/Embroidery', 'Premium Zippers', 'Oversized Fit Available']
  },
  {
    id: 'activewear',
    name: 'Performance Activewear',
    category: 'Sportswear',
    description: 'Technical activewear with moisture-wicking and 4-way stretch for sports brands and fitness companies.',
    image: 'https://cdn.abacus.ai/images/145c770f-ad1b-4bf0-8c9f-d1d3d1adfb07.png',
    priceRange: '$12 - $25',
    moq: '100 pieces',
    leadTime: '15-22 days',
    materials: 'Polyester Spandex, Moisture-Wicking Fabric',
    highlights: ['4-Way Stretch', 'Quick-Dry Technology', 'Anti-Bacterial Finish']
  },
  {
    id: 'dresses',
    name: 'Women\'s Fashion Dresses',
    category: 'Women\'s Wear',
    description: 'Elegant dresses for fashion brands targeting contemporary women\'s market with versatile designs.',
    image: 'https://cdn.abacus.ai/images/f08e34f4-fcfc-4bb5-9a8a-fab1b99625fb.png',
    priceRange: '$20 - $45',
    moq: '60 pieces',
    leadTime: '18-28 days',
    materials: 'Cotton, Rayon, Polyester Blends',
    highlights: ['Multiple Style Options', 'Custom Fit Available', 'Print & Embroidery']
  }
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-50 to-emerald-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 text-sm px-3 py-1">
              Request for Quotation Showcase
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Your Custom Quote Today
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Browse our showcase products below and request a custom quote for your specific needs. 
              Each product can be fully customized with your branding, colors, and specifications.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-4 shadow-sm">
                <Users className="w-5 h-5 text-emerald-600" />
                <span className="font-semibold">MOQ from 50 pcs</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-4 shadow-sm">
                <Clock className="w-5 h-5 text-emerald-600" />
                <span className="font-semibold">7-28 days delivery</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-4 shadow-sm">
                <DollarSign className="w-5 h-5 text-emerald-600" />
                <span className="font-semibold">Competitive pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Showcase Products */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popular Product Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each product below is fully customizable. Click "Request Quote" to get pricing based on your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-3 right-3 bg-emerald-600 text-white">
                  {product.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center bg-gray-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-emerald-600">{product.priceRange}</div>
                    <div className="text-xs text-gray-500">Price Range</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-emerald-600">{product.moq}</div>
                    <div className="text-xs text-gray-500">Min MOQ</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {product.leadTime}
                  </span>
                  <span className="text-emerald-600 font-medium">{product.materials}</span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Link href={`/contact?product=${product.id}`}>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Request Custom Quote
                    </Button>
                  </Link>
                  <Link href={`/sample-development?product=${product.id}`}>
                    <Button variant="outline" className="w-full">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Sample Development
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Custom Order?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Get a detailed quote within 24 hours. Upload your designs, specify requirements, 
            and let our experts guide you through the entire production process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Button>
            </Link>
            <Link href="/sample-development">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                <Download className="w-5 h-5 mr-2" />
                Sample Development Guide
              </Button>
            </Link>
            <a href="https://wa.me/8801861011367" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                WhatsApp Direct
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
