
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Scissors, Package, Zap, Users, CheckCircle } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      id: 'manufacturing',
      icon: <Scissors className="w-12 h-12 text-emerald-600" />,
      title: 'Custom Apparel Manufacturing',
      description: 'End-to-end apparel production from design concept to finished garments with flexible MOQs perfect for startups and small brands.',
      image: '/images/small-batch-team.png',
      features: [
        'Low MOQ from 50-300 pieces per style',
        'Custom designs and patterns',
        'Quality control at every stage',
        'Flexible production scheduling',
        'Competitive pricing for small batches',
        'Fast turnaround times'
      ],
      process: [
        'Design consultation & material selection',
        'Sample development & approval',
        'Production planning & scheduling',
        'Manufacturing & quality control',
        'Final inspection & packaging'
      ]
    },
    {
      id: 'branding',
      icon: <Package className="w-12 h-12 text-emerald-600" />,
      title: 'Private Label & Branding',
      description: 'Complete branding solutions including custom labels, tags, embroidery, printing, and packaging to establish your brand identity.',
      image: '/images/private-label-bangladeshi.png',
      features: [
        'Custom woven & printed labels',
        'Hang tags & swing tags',
        'Logo embroidery & screen printing',
        'Heat transfer & sublimation',
        'Custom packaging solutions',
        'Brand guideline compliance'
      ],
      process: [
        'Brand consultation & design brief',
        'Label & tag design creation',
        'Sample production & approval',
        'Bulk production & application',
        'Quality check & final delivery'
      ]
    },
    {
      id: 'design',
      icon: <Zap className="w-12 h-12 text-emerald-600" />,
      title: 'Design & Sampling',
      description: 'Professional design support and rapid prototyping services to bring your fashion concepts to life quickly and accurately.',
      image: 'https://images.squarespace-cdn.com/content/v1/5a2825178fd4d28d140369eb/5eeab2b2-d3a1-45aa-89b3-435d2b20adfd/pexels-cottonbro-studio-4622226.jpg',
      features: [
        'Fashion design consultation',
        'Technical spec development',
        'Rapid prototyping',
        'Material sourcing & selection',
        'Fit & size grading',
        'Design optimization'
      ],
      process: [
        'Initial design consultation',
        'Concept development & sketching',
        'Technical specification creation',
        'Sample production',
        'Fit testing & adjustments'
      ]
    },
    {
      id: 'uniforms',
      icon: <Users className="w-12 h-12 text-emerald-600" />,
      title: 'Corporate Uniform Solutions',
      description: 'Specialized uniform manufacturing for corporate, hospitality, healthcare, and retail industries with focus on durability and professional appearance.',
      image: 'https://lh5.googleusercontent.com/wY_8xjys9FZnyITnJeCcTKrrasbnwCK7HpbYfissXPq14oR_9ll_KQOPO3e-5KJqVBWiKkaCeLfK6qBu9QgEFKnsLAimdSXykagBB1xarZRRbiIjzY0nizAADosogVfFZ41rTCB8',
      features: [
        'Industry-specific designs',
        'Durable fabric selection',
        'Corporate branding integration',
        'Size range flexibility',
        'Bulk order discounts',
        'Ongoing supply programs'
      ],
      process: [
        'Industry requirements analysis',
        'Design & fabric consultation',
        'Sample development & approval',
        'Bulk production & delivery',
        'Ongoing support & reorders'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="text-emerald-600">Services</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive apparel manufacturing services designed to support your brand from concept to market, 
              with startup-friendly approaches and global quality standards.
            </p>
          </div>
          
          <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200">
            <Image
              src="https://www.lotogarment.com/uploads/37417/page/p20240418150145dee8e.jpg?size=1152x0"
              alt="KnitCraft Labs manufacturing services overview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-20">
            {services?.map((service, index) => (
              <div key={service?.id} id={service?.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Badge className="mb-4 bg-emerald-100 text-emerald-800">
                    {service?.title}
                  </Badge>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-emerald-50 rounded-lg">
                      {service?.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">
                      {service?.title}
                    </h2>
                  </div>
                  
                  <p className="text-slate-600 text-lg mb-8">
                    {service?.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features:</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service?.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Process:</h3>
                    <div className="space-y-3">
                      {service?.process?.map((step, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-semibold">
                            {idx + 1}
                          </div>
                          <span className="text-slate-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                      Request Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                {/* Image */}
                <div className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-200 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Image
                    src={service?.image || ''}
                    alt={service?.title || ''}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We combine industry expertise with startup-friendly approaches to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Startup Friendly',
                description: 'Low MOQs and flexible terms designed for emerging brands',
                icon: '🚀'
              },
              {
                title: 'Global Standards',
                description: 'International quality control and compliance certifications',
                icon: '🌟'
              },
              {
                title: 'Fast Turnaround',
                description: 'Quick sampling and production cycles for urgent needs',
                icon: '⚡'
              },
              {
                title: 'Full Support',
                description: 'End-to-end support from design to delivery worldwide',
                icon: '🤝'
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit?.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{benefit?.title}</h3>
                  <p className="text-slate-600">{benefit?.description}</p>
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
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Contact our team for a free consultation and learn how we can bring your apparel vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-gray-100">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/process">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-700">
                View Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
