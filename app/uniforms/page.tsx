
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Utensils, Building2, Calendar, Clock, Snowflake, Shield, Star } from 'lucide-react'

export default function UniformsPage() {
  const uniformTypes = [
    {
      icon: <GraduationCap className="w-8 h-8 text-emerald-600" />,
      title: "School Uniforms",
      subtitle: "Nordic Climate Specialists",
      description: "Premium school uniforms designed specifically for Nordic countries (Sweden, Norway, Denmark, Finland, Iceland). Specializing in warm sweater uniforms, polo shirts, and durable sportswear for educational institutions.",
      features: [
        "Nordic climate-optimized sweaters",
        "School logo embroidery & printing", 
        "Durable student-grade construction",
        "Washable premium materials",
        "Custom school color matching",
        "Anti-pilling knit technology"
      ],
      moq: "150 pieces",
      turnaround: "7-14 days",
      markets: ["Nordic Schools", "International Schools", "Private Academies"]
    },
    {
      icon: <Utensils className="w-8 h-8 text-emerald-600" />,
      title: "Restaurant Uniforms",
      subtitle: "Professional Hospitality Wear",
      description: "Professional chef coats, server uniforms, and hospitality apparel designed for comfort, durability, and professional appearance in food service environments.",
      features: [
        "Stain-resistant fabrics",
        "Heat-resistant materials",
        "Professional styling",
        "Easy-care construction",
        "Custom logo embroidery",
        "Multiple size ranges"
      ],
      moq: "100 pieces",
      turnaround: "7-10 days", 
      markets: ["Restaurants", "Hotels", "Catering Services"]
    },
    {
      icon: <Building2 className="w-8 h-8 text-emerald-600" />,
      title: "Corporate Uniforms",
      subtitle: "Business Professional Apparel",
      description: "Sophisticated corporate uniforms including polo shirts, dress shirts, and professional attire that represents your brand with style and professionalism.",
      features: [
        "Professional business styling",
        "Corporate color matching",
        "Brand logo integration",
        "Wrinkle-resistant fabrics",
        "Comfortable all-day wear",
        "Executive quality finishing"
      ],
      moq: "100 pieces",
      turnaround: "7-12 days",
      markets: ["Corporate Offices", "Retail Chains", "Service Industries"]
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-600" />,
      title: "Event Uniforms",
      subtitle: "Custom Event Apparel",
      description: "Custom uniforms for events, conferences, trade shows, and special occasions. Quick turnaround times perfect for last-minute event requirements.",
      features: [
        "Ultra-fast production",
        "Custom event branding",
        "Various garment types",
        "Bulk quantity discounts",
        "Express shipping options",
        "Event-specific designs"
      ],
      moq: "50 pieces",
      turnaround: "5-7 days",
      markets: ["Trade Shows", "Conferences", "Festivals"]
    }
  ]

  const nordicAdvantages = [
    {
      icon: <Snowflake className="w-6 h-6 text-blue-600" />,
      title: "Nordic Climate Expertise",
      description: "Deep understanding of harsh Nordic winters and requirements for warm, durable school uniforms."
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: "7-Day Express Service",
      description: "From sample to shipment in just 7 days - perfect for urgent school procurement requirements."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: "School Procurement Ready",
      description: "Experience with educational procurement processes and compliance requirements across Nordic countries."
    }
  ]

  const processSteps = [
    "Submit uniform requirements & quantities",
    "Receive quote within 24 hours", 
    "Approve sample & place order",
    "Production begins immediately",
    "Quality control & packaging",
    "Express shipping to your location",
    "Delivery in 7 days from order"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-emerald-50 to-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-600 text-white">Uniform Manufacturing Specialists</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Professional Uniforms with <span className="text-emerald-600">7-Day Delivery</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Specializing in Nordic school uniforms, restaurant wear, corporate attire, and event apparel. 
              Ultra-fast turnaround times perfect for urgent procurement needs.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              {nordicAdvantages.map((advantage, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    {advantage.icon}
                    <div className="text-left">
                      <p className="font-semibold text-sm text-slate-900">{advantage.title}</p>
                      <p className="text-xs text-slate-600">{advantage.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 mr-4">
                Get Uniform Quote
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://wa.me/message/VG35GXG3RFPOD1', '_blank')}
            >
              WhatsApp for Urgent Orders
            </Button>
          </div>
        </div>
      </section>

      {/* Nordic School Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Nordic Market Specialization</Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                School Sweater Uniforms for Nordic Countries
              </h2>
              <p className="text-slate-600 mb-6">
                As European winter approaches, we're launching focused marketing campaigns targeting Nordic schools 
                (Sweden, Norway, Denmark, Finland, Iceland) with specialized sweater uniforms designed for harsh winters.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Climate-specific yarn selection for warmth and durability",
                  "Anti-pilling technology for long-lasting appearance", 
                  "Easy-care properties for busy school environments",
                  "Custom school colors and logo integration",
                  "Bulk pricing for educational institution budgets",
                  "Compliance with Nordic school uniform standards"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Request Nordic School Quote
                </Button>
              </Link>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-200">
              <Image
                src="https://www.cozyknitsweater.com/images/school-uniform-sweaters/11806552-acrylic-cotton-unisex-children-school-uniform-sweaters-modern-designs-in-white_0_570.webp"
                alt="Nordic school uniform sweater"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Uniform Types Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Comprehensive Uniform Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional uniforms for every industry with express delivery options
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {uniformTypes.map((uniform, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    {uniform.icon}
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{uniform.title}</h3>
                      <p className="text-emerald-600 font-medium">{uniform.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6">{uniform.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm font-medium text-slate-900">MOQ:</p>
                      <p className="text-emerald-600 font-semibold">{uniform.moq}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Delivery:</p>
                      <p className="text-emerald-600 font-semibold">{uniform.turnaround}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-slate-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {uniform.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-slate-900 mb-3">Target Markets:</h4>
                    <div className="flex flex-wrap gap-2">
                      {uniform.markets.map((market, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {market}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Get Quote for {uniform.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7-Day Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Express Service</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              7-Day Sample to Shipment Process
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our streamlined process ensures your uniforms are delivered faster than 95% of manufacturers globally
            </p>
          </div>

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 bg-emerald-600 text-white rounded-full font-bold text-sm mr-4">
                  {index + 1}
                </div>
                <p className="text-slate-700 font-medium">{step}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-600 mb-6">
              Perfect for schools preparing for winter term or restaurants needing urgent uniform replenishment
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Start 7-Day Express Order
              </Button>
            </Link>
            <p className="text-xs text-slate-500 mt-6 max-w-3xl mx-auto">
              *Rush services available for limited SKUs using stock fabrics. Standard lead time is 15-25 days. 
              Express lead time starts after design approval and materials readiness.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Trusted by Educational Institutions Across Nordic Countries
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                institution: "International School of Stockholm",
                country: "Sweden", 
                order: "500 sweater uniforms",
                testimonial: "Excellent quality and delivered exactly on time for the new school year."
              },
              {
                institution: "Bergen Private Academy",
                country: "Norway",
                order: "300 polo shirts + sweaters", 
                testimonial: "Perfect fit for our harsh winters. Students love the comfortable materials."
              },
              {
                institution: "Helsinki International School",
                country: "Finland",
                order: "400 complete uniform sets",
                testimonial: "Professional service and great understanding of our specific requirements."
              }
            ].map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-blue-100 text-blue-800">{story.country}</Badge>
                  <h3 className="font-semibold text-slate-900 mb-2">{story.institution}</h3>
                  <p className="text-emerald-600 font-medium mb-4">{story.order}</p>
                  <p className="text-slate-600 italic">"{story.testimonial}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Winter? Get Your Uniforms in 7 Days
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait until the last minute. Nordic schools and institutions trust us for their urgent uniform needs. 
            Join hundreds of satisfied educational institutions across Scandinavia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-gray-100">
                Get Free Uniform Quote
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-emerald-700"
              onClick={() => window.open('https://wa.me/message/VG35GXG3RFPOD1', '_blank')}
            >
              WhatsApp for Urgent Orders
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
