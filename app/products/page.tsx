
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowRight, Filter, Star } from 'lucide-react'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 'premium-sweaters',
      name: 'Premium Sweaters',
      category: 'knitwear',
      description: 'High-quality crew neck and cardigan sweaters crafted with premium materials and superior craftsmanship for lasting comfort and style.',
      image: 'https://cdn.abacus.ai/images/325d1a9e-262b-4ad2-b2a8-983ed46bd886.png',
      moq: '100 pcs',
      priceRange: '$15-35',
      features: [
        'Premium wool and cotton blends',
        'Custom color matching',
        'Various neck styles available',
        'Reinforced seams',
        'Anti-pilling treatment'
      ],
      applications: ['Fashion brands', 'Retail stores', 'Corporate gifts']
    },
    {
      id: 'cardigans',
      name: 'Women\'s Cardigans',
      category: 'knitwear',
      description: 'Elegant cardigans in button-up and open-front styles, perfect for professional and casual wear with custom design options.',
      image: 'https://cdn.abacus.ai/images/ea24bf71-02d0-4329-b20b-0c79b7231bd7.png',
      moq: '100 pcs',
      priceRange: '$18-40',
      features: [
        'Multiple style options',
        'Premium knit fabrics',
        'Custom button selection',
        'Tailored fits',
        'Seasonal color ranges'
      ],
      applications: ['Women\'s fashion', 'Professional wear', 'Seasonal collections']
    },
    {
      id: 'custom-tshirts',
      name: 'Custom T-Shirts',
      category: 'basics',
      description: 'Premium cotton t-shirts with custom printing, embroidery, and private label options perfect for brand building.',
      image: 'https://cdn.abacus.ai/images/602ae993-e17f-416f-9489-bd6b96a029d7.png',
      moq: '50 pcs',
      priceRange: '$8-18',
      features: [
        '100% cotton options',
        'Organic and sustainable materials',
        'Custom screen printing',
        'Embroidery services',
        'Wide color selection'
      ],
      applications: ['Startups', 'Events', 'Promotional merchandise']
    },
    {
      id: 'business-polos',
      name: 'Business Polo Shirts',
      category: 'corporate',
      description: 'Professional polo shirts designed for corporate uniforms, hospitality, and business casual environments.',
      image: 'https://cdn.abacus.ai/images/fbb71087-422e-405d-82f0-750381fe85ad.png',
      moq: '100 pcs',
      priceRange: '$12-25',
      features: [
        'Professional collar design',
        'Moisture-wicking fabric',
        'Logo embroidery ready',
        'Fade-resistant colors',
        'Easy care fabric'
      ],
      applications: ['Corporate uniforms', 'Hospitality', 'Golf clubs']
    },
    {
      id: 'sportswear',
      name: 'Athletic Sportswear',
      category: 'athletic',
      description: 'Performance sportswear including activewear, joggers, and athletic tops designed for comfort and durability.',
      image: 'https://cdn.abacus.ai/images/7b3c169b-7ee6-40ec-b7c0-b5ed8ce2b76a.png',
      moq: '150 pcs',
      priceRange: '$20-45',
      features: [
        'Moisture-wicking technology',
        'Four-way stretch fabric',
        'Anti-bacterial treatment',
        'Flatlock seams',
        'UV protection'
      ],
      applications: ['Sports brands', 'Fitness centers', 'Athletic teams']
    },
    {
      id: 'school-uniforms',
      name: 'School Uniforms',
      category: 'uniforms',
      description: 'Comprehensive school uniform solutions featuring premium sweater uniforms, polo shirts, and sportswear for educational institutions worldwide.',
      image: 'https://cdn.abacus.ai/images/5b17b9b2-6661-433c-a058-a166cd37db33.png',
      moq: '150 pcs',
      priceRange: '$20-45',
      features: [
        'Climate-appropriate sweaters',
        'School logo embroidery & printing',
        'Durable student-grade construction',
        'Washable premium materials',
        'Custom school color matching',
        'Anti-pilling knit technology'
      ],
      applications: ['International Schools', 'Private Academies', 'Educational Institutions', 'Sports Teams']
    },
    {
      id: 'knit-scarves',
      name: 'Knit Scarves',
      category: 'accessories',
      description: 'Premium knitted scarves in various styles and materials, perfect for completing your knitwear collection or as standalone accessories.',
      image: 'https://cdn.abacus.ai/images/9c44722a-094b-470f-92ca-fec94a9813c4.png',
      moq: '100 pcs',
      priceRange: '$8-25',
      features: [
        'Multiple knit patterns',
        'Custom color options',
        'Soft premium yarns',
        'Various lengths available',
        'Brand label integration'
      ],
      applications: ['Fashion accessories', 'Winter collections', 'Gift items']
    },
    {
      id: 'beanies',
      name: 'Knit Beanies',
      category: 'accessories',
      description: 'Comfortable knitted beanies and winter hats designed for warmth and style, perfect for cold climates and winter collections.',
      image: 'https://cdn.abacus.ai/images/5b443b6d-40ab-4f12-9054-49360c479c75.png',
      moq: '100 pcs',
      priceRange: '$6-18',
      features: [
        'Cold climate suitable',
        'Various knit styles',
        'Custom embroidery options',
        'Premium yarn materials',
        'One-size-fits-all design'
      ],
      applications: ['Winter wear', 'School accessories', 'Corporate gifts']
    },
    {
      id: 'athleisure-performance',
      name: 'Athleisure Performance Wear',
      category: 'athleisure',
      description: 'Premium athleisure collection featuring seamless leggings, sports bras, and performance tops with advanced compression technology and moisture-wicking properties.',
      image: 'https://cdn.abacus.ai/images/2198c079-bc9e-4862-9390-b09d0ce7f35f.png',
      moq: '200 pcs',
      priceRange: '$25-55',
      features: [
        'Seamless knit construction',
        '4-way stretch compression fabric',
        'Anti-microbial treatment',
        'Flatlock seaming technology',
        'UV protection UPF 50+',
        'Body-contouring fit'
      ],
      applications: ['Fitness brands', 'Athleisure startups', 'Wellness companies', 'Yoga studios']
    },
    {
      id: 'sustainable-tech-wear',
      name: 'Sustainable Tech Wear',
      category: 'tech-wear',
      description: 'Cutting-edge sustainable apparel combining recycled materials with technical features like temperature regulation, water resistance, and smart fabric integration.',
      image: 'https://cdn.abacus.ai/images/18f1f338-9a88-4c8f-9a04-dd6c2593b36d.png',
      moq: '150 pcs',
      priceRange: '$35-75',
      features: [
        'Recycled ocean plastic fibers',
        'Phase change material integration',
        'Water-resistant DWR coating',
        'Reflective safety elements',
        'Phone pocket with conductive threads',
        'Biodegradable components'
      ],
      applications: ['Tech companies', 'Urban fashion brands', 'Outdoor enthusiasts', 'Eco-conscious consumers']
    }
  ]

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'knitwear', label: 'Knitwear' },
    { value: 'basics', label: 'Basics' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'athletic', label: 'Athletic' },
    { value: 'athleisure', label: 'Athleisure Performance' },
    { value: 'tech-wear', label: 'Sustainable Tech Wear' },
    { value: 'uniforms', label: 'School Uniforms' },
    { value: 'accessories', label: 'Accessories' }
  ]

  const yarnOptions = [
    {
      name: "Merino Wool",
      description: "Premium soft wool with excellent temperature regulation",
      applications: ["Sweaters", "Cardigans", "Luxury knitwear"],
      benefits: ["Naturally antimicrobial", "Moisture-wicking", "Ultra-soft feel"]
    },
    {
      name: "Organic Cotton",
      description: "Sustainable, breathable cotton for eco-conscious brands", 
      applications: ["T-shirts", "Casual wear", "Summer collections"],
      benefits: ["Hypoallergenic", "Eco-friendly", "Soft texture"]
    },
    {
      name: "Bamboo Fiber",
      description: "Innovative sustainable fiber with antibacterial properties",
      applications: ["Activewear", "Undergarments", "Eco collections"],
      benefits: ["UV protection", "Antibacterial", "Moisture-wicking"]
    },
    {
      name: "Cashmere Blend",
      description: "Luxurious blend offering premium softness and warmth",
      applications: ["Premium sweaters", "Scarves", "Luxury accessories"],
      benefits: ["Ultimate softness", "Lightweight warmth", "Premium feel"]
    },
    {
      name: "Recycled Polyester",
      description: "Sustainable option made from recycled plastic bottles",
      applications: ["Sportswear", "Jackets", "Technical wear"],
      benefits: ["Eco-friendly", "Durable", "Quick-dry"]
    },
    {
      name: "Alpaca Wool",
      description: "Hypoallergenic luxury fiber with excellent insulation",
      applications: ["Winter wear", "Nordic uniforms", "Premium knitwear"],
      benefits: ["Hypoallergenic", "Super warm", "Water-resistant"]
    }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product?.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="text-emerald-600">Products</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our comprehensive range of high-quality apparel products, from premium knitwear 
              to specialized school uniforms for Nordic markets, all manufactured with startup-friendly MOQs.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <Filter className="w-5 h-5 text-slate-600" />
              <span className="text-slate-700 font-medium">Filter by category:</span>
            </div>
            <Select value={selectedCategory || 'all'} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories?.map((category) => (
                  <SelectItem key={category?.value} value={category?.value || 'all'}>
                    {category?.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {filteredProducts?.map((product, index) => (
              <Card key={product?.id} id={product?.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={product?.image || ''}
                    alt={product?.name || ''}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    <Badge className="bg-white/90 text-slate-800 capitalize">
                      {product?.category}
                    </Badge>
                    <Badge className="bg-emerald-600 text-white">
                      MOQ: {product?.moq}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-slate-900/80 text-white">
                      {product?.priceRange}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {product?.name}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {product?.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {product?.features?.slice(0, 3)?.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Perfect For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product?.applications?.map((app, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                        Request Quote
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      onClick={() => window.open('https://wa.me/message/VG35GXG3RFPOD1', '_blank')}
                      className="sm:w-auto"
                    >
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Yarns & Fabrics Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Material Excellence</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Premium Yarns & Fabric Options
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our extensive library of premium yarns and fabrics, sourced from certified suppliers worldwide 
              to meet your specific requirements and sustainability goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yarnOptions.map((yarn, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {yarn.name}
                  </h3>
                  <p className="text-slate-600 mb-4">{yarn.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-slate-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {yarn.applications.map((app, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Benefits:</h4>
                    <div className="space-y-1">
                      {yarn.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                          <span className="text-xs text-slate-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-600 mb-6">
              Need a specific yarn or fabric not listed here? We work with suppliers worldwide to source your exact requirements.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Discuss Material Requirements
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Capabilities */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Manufacturing Capabilities
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Advanced production facilities and quality control systems ensure consistent excellence across all product lines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Premium Materials',
                description: 'Certified organic, sustainable, and luxury yarns from global suppliers',
                icon: '🧵'
              },
              {
                title: 'Custom Design',
                description: 'In-house design team with advanced CAD and knitting programming',
                icon: '✏️'
              },
              {
                title: 'Quality Assurance',
                description: 'Multi-stage inspection process with international compliance standards',
                icon: '🔍'
              },
              {
                title: 'Express Delivery',
                description: 'Worldwide shipping with 7-day express service for urgent orders',
                icon: '🚚'
              }
            ].map((capability, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{capability?.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{capability?.title}</h3>
                  <p className="text-slate-600">{capability?.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            We specialize in custom manufacturing solutions with startup-friendly MOQs. 
            Contact us to discuss your specific product and material requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-gray-100">
                Custom Product Inquiry
              </Button>
            </Link>
            <Link href="/sample-development">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-700">
                Start With Samples
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
