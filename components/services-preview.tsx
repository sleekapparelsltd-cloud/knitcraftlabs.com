
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Zap, Scissors, Package, Users } from 'lucide-react'

export function ServicesPreview() {
  const services = [
    {
      icon: <Scissors className="w-8 h-8 text-emerald-600" />,
      title: 'Custom Manufacturing',
      description: 'End-to-end apparel production from design concept to finished garments with flexible MOQs.',
      image: 'https://thumbs.dreamstime.com/b/image-shows-rows-red-garments-hanging-modern-bright-factory-scene-generated-ai-clean-minimalist-375198065.jpg',
      features: ['Low MOQ from 50 pieces', 'Custom designs', 'Quality assurance'],
      link: '/services#manufacturing'
    },
    {
      icon: <Package className="w-8 h-8 text-emerald-600" />,
      title: 'Private Label & Branding',
      description: 'Complete branding solutions including labels, tags, embroidery, printing, and custom packaging.',
      image: 'https://a.storyblok.com/f/263304/1600X901/518a83aeec/real-thread-blog-header-custom-tags.jpg/m/2560x0/',
      features: ['Custom labels & tags', 'Logo embroidery', 'Packaging design'],
      link: '/services#branding'
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-600" />,
      title: 'Design & Sampling',
      description: 'Professional design support and rapid prototyping to bring your vision to life quickly.',
      image: 'https://images.squarespace-cdn.com/content/v1/5a2825178fd4d28d140369eb/5eeab2b2-d3a1-45aa-89b3-435d2b20adfd/pexels-cottonbro-studio-4622226.jpg',
      features: ['Design consultation', 'Rapid prototyping', 'Material selection'],
      link: '/services#design'
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: 'School Uniform Solutions',
      description: 'Specialized school uniform manufacturing for Nordic schools, featuring premium sweater uniforms, polo shirts, and athletic wear for educational institutions.',
      image: 'https://workuniformcompany.co.uk/cdn/shop/collections/prosecco-blouse-6709396.jpg?v=1756917054&width=1080',
      features: ['Nordic climate-optimized designs', 'School logo embroidery', 'Bulk production for schools'],
      link: '/services#uniforms'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Comprehensive Manufacturing Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From initial design concepts to final delivery, we provide complete apparel manufacturing 
            services tailored to your brand's needs and growth stage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services?.map((service, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm">
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
                    {service?.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {service?.title}
                    </h3>
                    <p className="text-slate-600">{service?.description}</p>
                  </div>
                </div>

                <div className="relative aspect-video mb-6 rounded-lg overflow-hidden bg-slate-200">
                  <Image
                    src={service?.image || ''}
                    alt={service?.title || ''}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-2 mb-6">
                  {service?.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={service?.link || '/services'}>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
