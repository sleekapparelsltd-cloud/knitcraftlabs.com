
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Star } from 'lucide-react'

export function FeaturedProducts() {
  const products = [
    {
      id: 'sweaters',
      name: 'Premium Sweaters',
      description: 'High-quality knitwear including crew necks, cardigans, and custom designs with superior craftsmanship.',
      image: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/461066/item/goods_02_461066_3x4.jpg?width=600',
      moq: 'From 100 pcs',
      category: 'Knitwear',
      features: ['Custom designs', 'Premium materials', 'Various styles']
    },
    {
      id: 'tshirts',
      name: 'Custom T-Shirts',
      description: 'Premium cotton t-shirts with custom printing, embroidery, and private label options for your brand.',
      image: 'https://photobookpress.com/cdn/shop/files/4_24351_PremiumWhiteShirtAdultS_1_1024x1024.png?v=1692819524',
      moq: 'From 50 pcs',
      category: 'Basics',
      features: ['100% cotton', 'Custom printing', 'Multiple colors']
    },
    {
      id: 'polos',
      name: 'Business Polos',
      description: 'Professional polo shirts perfect for corporate uniforms, hospitality, and business casual wear.',
      image: 'https://static.vecteezy.com/system/resources/previews/059/490/667/non_2x/white-polo-shirt-with-a-soft-and-breathable-texture-isolated-on-transparent-background-png.png',
      moq: 'From 100 pcs',
      category: 'Corporate',
      features: ['Professional fit', 'Durable fabric', 'Logo embroidery']
    },
    {
      id: 'sportswear',
      name: 'Sportswear Collection',
      description: 'Athletic wear designed for performance including activewear, joggers, and school sports uniforms.',
      image: 'https://thumbs.dreamstime.com/b/white-jogger-pants-isolated-background-float-perfect-showcasing-apparel-product-designs-fashion-concepts-391088036.jpg',
      moq: 'From 150 pcs',
      category: 'Athletic',
      features: ['Moisture-wicking', 'Flexible fabrics', 'Performance fit']
    },
    {
      id: 'school-uniforms',
      name: 'Nordic School Uniforms',
      description: 'Premium school uniforms specializing in Nordic market requirements - sweater uniforms, polo shirts, and sportswear for educational institutions.',
      image: 'https://www.cozyknitsweater.com/images/school-uniform-sweaters/11806552-acrylic-cotton-unisex-children-school-uniform-sweaters-modern-designs-in-white_0_570.webp',
      moq: 'From 150 pcs',
      category: 'School Uniforms',
      features: ['Nordic climate designs', 'School logo printing', 'Durable materials']
    },
    {
      id: 'accessories',
      name: 'Knit Accessories',
      description: 'Premium scarves, beanies, and caps to complete your knitwear collection with matching designs and materials.',
      image: 'https://www.shutterstock.com/image-photo/soft-beige-knitted-scarf-isolated-260nw-1047351310.jpg',
      moq: 'From 100 pcs',
      category: 'Accessories',
      features: ['Matching colors', 'Custom branding', 'Winter ready']
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-slate-100 text-slate-800">Featured Products</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Our Signature Product Lines
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From premium knitwear to specialized Nordic school uniforms, we specialize in manufacturing 
            high-quality apparel that meets your brand's unique requirements with startup-friendly MOQs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products?.map((product, index) => (
            <Card key={product?.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={product?.image || ''}
                  alt={product?.name || ''}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-white/90 text-slate-800">
                  {product?.category}
                </Badge>
                <Badge className="absolute top-4 right-4 bg-emerald-600 text-white">
                  {product?.moq}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {product?.name}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-2">
                  {product?.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {product?.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href={`/products#${product?.id}`}>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 group">
                    Request Quote
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/products">
            <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
