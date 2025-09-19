
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'EcoFash Apparel',
      location: 'San Francisco, USA',
      text: 'KnitCraft Labs transformed our startup vision into reality. Their low MOQ options and exceptional quality helped us launch our sustainable fashion line without massive upfront investment.',
      rating: 5,
      productType: 'Organic T-Shirts & Hoodies'
    },
    {
      name: 'Marcus Thompson',
      company: 'UrbanThreads Co.',
      location: 'London, UK',
      text: 'The private labeling service exceeded our expectations. From custom tags to packaging, every detail was perfect. Our customers love the premium quality and professional finish.',
      rating: 5,
      productType: 'Premium Streetwear'
    },
    {
      name: 'Priya Patel',
      company: 'Corporate Uniforms Plus',
      location: 'Toronto, Canada',
      text: 'Working with KnitCraft Labs for our corporate uniform needs has been seamless. Fast turnaround, consistent quality, and excellent customer service. Highly recommended!',
      rating: 5,
      productType: 'Corporate Uniforms'
    },
    {
      name: 'Ahmed Al-Rashid',
      company: 'Desert Sports',
      location: 'Dubai, UAE',
      text: 'Their sportswear manufacturing capabilities are impressive. The moisture-wicking fabrics and athletic fit of our activewear line received excellent feedback from our customers.',
      rating: 5,
      productType: 'Athletic Wear'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Knit & Co.',
      location: 'Barcelona, Spain',
      text: 'Amazing sweater quality! The custom designs and attention to detail in their knitwear production helped establish our brand in the European market successfully.',
      rating: 5,
      productType: 'Premium Knitwear'
    },
    {
      name: 'James Wilson',
      company: 'Startup Apparel',
      location: 'Melbourne, Australia',
      text: 'As a new brand, their startup-friendly approach and flexible minimum orders were exactly what we needed. The design consultation helped refine our initial concepts perfectly.',
      rating: 5,
      productType: 'Casual Wear Collection'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">Client Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Trusted by Brands Worldwide
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From startups to established brands, our clients across 25+ countries trust us 
            to deliver exceptional quality and service for their apparel manufacturing needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials?.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial?.rating || 5)]?.map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-emerald-200 mb-4" />

                {/* Testimonial Text */}
                <p className="text-slate-700 mb-6 italic leading-relaxed">
                  "{testimonial?.text}"
                </p>

                {/* Product Type */}
                <Badge className="mb-4 bg-emerald-50 text-emerald-700 text-xs">
                  {testimonial?.productType}
                </Badge>

                {/* Client Info */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="font-semibold text-slate-900">
                    {testimonial?.name}
                  </div>
                  <div className="text-sm text-emerald-600 font-medium">
                    {testimonial?.company}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial?.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-sm text-slate-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">25+</div>
              <div className="text-sm text-slate-600">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-sm text-slate-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
