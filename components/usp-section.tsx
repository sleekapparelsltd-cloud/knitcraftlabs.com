
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShoppingBag, Users, Globe, Award, Clock, Shield } from 'lucide-react'

export function USPSection() {
  const usps = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-emerald-600" />,
      title: "Low MOQs",
      description: "Start with just 50-300 pieces per style. Perfect for startups and small brands testing the market.",
      highlight: "From 50 pieces"
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-600" />,
      title: "7-Day Express Service",
      description: "Ultra-fast turnaround from sample to shipment in just 7 days for urgent orders and Nordic school uniforms.*",
      highlight: "Express delivery"
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: "Nordic Market Specialist",
      description: "Deep expertise in Nordic school uniforms and climate-appropriate materials for Scandinavian markets.",
      highlight: "Nordic expert"
    },
    {
      icon: <Award className="w-8 h-8 text-emerald-600" />,
      title: "Quality Excellence",
      description: "International certifications, rigorous quality control, and production-ready samples ensure your brand's success.",
      highlight: "Certified quality"
    }
  ]

  // Static numbers as per PDF requirements
  const stats = [
    {
      number: 50,
      suffix: '+',
      label: 'Happy Clients',
      icon: <Users className="w-6 h-6 text-emerald-600" />
    },
    {
      number: 25,
      suffix: '+',
      label: 'Countries Served',
      icon: <Globe className="w-6 h-6 text-emerald-600" />
    },
    {
      number: 10,
      suffix: '+',
      label: 'Years Combined Experience',
      icon: <Award className="w-6 h-6 text-emerald-600" />
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800">Why Choose KnitCraft Labs</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Startup-Friendly Manufacturing Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We understand the unique challenges of emerging brands and provide tailored solutions 
            that grow with your business while maintaining exceptional quality standards.
          </p>
        </div>

        {/* Stats - Updated with consistent numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {stats?.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="flex justify-center mb-3">{stat?.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                  {stat?.number}{stat?.suffix}
                </div>
                <div className="text-xs sm:text-sm text-slate-600">{stat?.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* USPs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps?.map((usp, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {usp?.icon}
                </div>
                <Badge className="mb-3 bg-emerald-50 text-emerald-700 text-xs">
                  {usp?.highlight}
                </Badge>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">{usp?.title}</h3>
                <p className="text-sm sm:text-base text-slate-600">{usp?.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* 7-Day Service Footnote */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 max-w-4xl mx-auto">
            *Rush services available for limited SKUs using stock fabrics. Standard lead time is 15-25 days. 
            Express lead time starts after design approval and materials readiness.
          </p>
        </div>
      </div>
    </section>
  )
}
