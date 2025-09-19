
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MessageCircle, Palette, Factory, Package, CheckCircle, Clock, Users, Shield } from 'lucide-react'

export default function ProcessPage() {
  const processSteps = [
    {
      step: 1,
      title: 'Consultation & Planning',
      subtitle: 'Understanding Your Vision',
      description: 'We begin with a comprehensive consultation to understand your brand requirements, target market, and specific needs. Our team provides expert guidance on materials, designs, and production strategies.',
      image: 'https://images.squarespace-cdn.com/content/v1/5a2825178fd4d28d140369eb/5eeab2b2-d3a1-45aa-89b3-435d2b20adfd/pexels-cottonbro-studio-4622226.jpg',
      icon: <MessageCircle className="w-8 h-8 text-emerald-600" />,
      duration: '1-2 Days',
      activities: [
        'Initial consultation call',
        'Requirement analysis',
        'Material recommendations',
        'MOQ planning',
        'Timeline discussion',
        'Cost estimation'
      ],
      deliverables: [
        'Project brief document',
        'Material samples',
        'Preliminary quote',
        'Production timeline'
      ]
    },
    {
      step: 2,
      title: 'Design & Sampling',
      subtitle: 'Bringing Ideas to Life',
      description: 'Our design team works closely with you to develop detailed technical specifications and create physical samples. We ensure every detail meets your exact requirements before moving to production.',
      image: 'https://images.squarespace-cdn.com/content/v1/608871dd0431b56d468fb16b/4581389a-956f-4522-9a6d-691f8582d299/pexels-ron-lach-9850427.jpg',
      icon: <Palette className="w-8 h-8 text-emerald-600" />,
      duration: '5-7 Days',
      activities: [
        'Technical design creation',
        'Material sourcing',
        'Sample production',
        'Fit testing',
        'Quality review',
        'Approval process'
      ],
      deliverables: [
        'Tech packs',
        'Physical samples',
        'Fit reports',
        'Final specifications'
      ]
    },
    {
      step: 3,
      title: 'Production & Manufacturing',
      subtitle: 'Precision in Every Stitch',
      description: 'Once samples are approved, we move to full-scale production using our state-of-the-art facilities. Every stage is monitored with strict quality control measures to ensure consistency and excellence.',
      image: 'https://thumbs.dreamstime.com/b/image-shows-rows-red-garments-hanging-modern-bright-factory-scene-generated-ai-clean-minimalist-375198065.jpg',
      icon: <Factory className="w-8 h-8 text-emerald-600" />,
      duration: '10-15 Days',
      activities: [
        'Production planning',
        'Material preparation',
        'Cutting & sewing',
        'Quality inspections',
        'Progress monitoring',
        'Final quality check'
      ],
      deliverables: [
        'Finished garments',
        'Quality reports',
        'Production updates',
        'Inspection certificates'
      ]
    },
    {
      step: 4,
      title: 'Branding & Delivery',
      subtitle: 'Your Brand, Perfected',
      description: 'We complete the process with professional branding, custom packaging, and reliable global delivery. Your products arrive ready for market with all branding elements perfectly applied.',
      image: 'https://a.storyblok.com/f/263304/1600X901/518a83aeec/real-thread-blog-header-custom-tags.jpg/m/2560x0/',
      icon: <Package className="w-8 h-8 text-emerald-600" />,
      duration: '3-5 Days',
      activities: [
        'Label application',
        'Branding implementation',
        'Custom packaging',
        'Final inspection',
        'Shipping preparation',
        'Delivery tracking'
      ],
      deliverables: [
        'Branded products',
        'Custom packaging',
        'Shipping documentation',
        'Tracking information'
      ]
    }
  ]

  const qualityFeatures = [
    {
      icon: <CheckCircle className="w-6 h-6 text-emerald-600" />,
      title: 'Multi-Stage Quality Control',
      description: 'Inspection at every production stage ensures consistent quality'
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: 'On-Time Delivery',
      description: 'Rigorous timeline management for reliable delivery schedules'
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: 'Dedicated Support',
      description: 'Personal project manager for seamless communication'
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: 'Quality Guarantee',
      description: 'Comprehensive warranty on all manufactured products'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="text-emerald-600">Process</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A streamlined 4-step approach designed to bring your apparel vision to life 
              with precision, quality, and transparency at every stage.
            </p>
          </div>
          
          <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200">
            <Image
              src="https://www.lotogarment.com/uploads/37417/page/p20240418150145dee8e.jpg?size=1152x0"
              alt="KnitCraft Labs manufacturing process overview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Production Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Two Specialized Production Methods
            </h2>
            <p className="text-xl text-slate-600">
              At Sleek Apparels Limited, we master both knitwear and cut & sew production techniques
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Knitwear Production */}
            <Card className="p-8">
              <div className="text-center mb-6">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src="/images/stoll-machine-bangladeshi.png"
                    alt="Computerized Flat Knitting Machine"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Knitwear Production</h3>
                <p className="text-emerald-600">Computerized Flat Knitting</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Products:</h4>
                  <p className="text-slate-600">Sweaters, Cardigans, Pullovers, Knitted Dresses</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Technology:</h4>
                  <p className="text-slate-600">Stoll computerized flat knitting machines from Germany with advanced programming capabilities</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Process:</h4>
                  <p className="text-slate-600">Direct knitting from yarn to finished garment with minimal waste and superior fit</p>
                </div>
              </div>
            </Card>

            {/* Cut & Sew Production */}
            <Card className="p-8">
              <div className="text-center mb-6">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src="/images/private-label-bangladeshi.png"
                    alt="Cut and Sew Manufacturing"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Cut & Sew Production</h3>
                <p className="text-emerald-600">Traditional Apparel Manufacturing</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Products:</h4>
                  <p className="text-slate-600">T-shirts, Polo shirts, Hoodies, Joggers, School Uniforms</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Technology:</h4>
                  <p className="text-slate-600">Industrial sewing machines, cutting tables, and pressing equipment</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Process:</h4>
                  <p className="text-slate-600">Fabric cutting, sewing, pressing, and finishing for knitted and woven fabrics</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Sweater Production Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Sweater Production Process at Sleek Apparels Limited
            </h2>
            <p className="text-xl text-slate-600">
              From yarn to finished garment: Our comprehensive knitwear manufacturing process
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200" />
            
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: "Yarn Selection & Preparation",
                  description: "Premium yarn selection based on client specifications. Quality inspection, conditioning, and preparation for knitting process.",
                  image: "/images/sustainable-sourcing-bangladeshi.png"
                },
                {
                  step: 2,
                  title: "Pattern Programming",
                  description: "Creating knitting programs using advanced CAD software. Pattern development and technical specifications for Stoll machines.",
                  image: "/images/design-consultation-bangladeshi.png"
                },
                {
                  step: 3,
                  title: "Knitting on Stoll Machines",
                  description: "Production using computerized flat knitting machines. Real-time quality monitoring and adjustment during knitting process.",
                  image: "/images/stoll-machine-bangladeshi.png"
                },
                {
                  step: 4,
                  title: "Linking & Assembly",
                  description: "Professional linking of knitted panels. Precision assembly to ensure perfect fit and finish.",
                  image: "/images/small-batch-team.png"
                },
                {
                  step: 5,
                  title: "Washing & Finishing",
                  description: "Specialized washing programs for different yarn types. Steam pressing and professional finishing.",
                  image: "/images/quality-control-bangladeshi.png"
                },
                {
                  step: 6,
                  title: "Quality Control & Packaging",
                  description: "Multi-point quality inspection. Custom labeling, tagging, and packaging according to client requirements.",
                  image: "/images/packaging-bangladeshi.png"
                }
              ].map((step, index) => (
                <div key={step.step} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className={`grid ${index % 2 === 0 ? 'grid-cols-3' : 'grid-cols-3'} gap-4 items-center`}>
                        <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} col-span-2`}>
                          <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                          <p className="text-slate-600 text-sm">{step.description}</p>
                        </div>
                        <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} col-span-1`}>
                          <div className="relative w-16 h-16 mx-auto">
                            <Image
                              src={step.image}
                              alt={step.title}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Service Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How We Serve Our Customers
            </h2>
            <p className="text-xl text-slate-600">
              Step-by-step customer service process at KnitCraft Labs
            </p>
          </div>

          <div className="space-y-8">
            {processSteps?.map((step, index) => (
              <Card key={step?.step} className="p-8 hover:shadow-lg transition-shadow">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-emerald-50 rounded-lg">
                        {step?.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {step?.title}
                        </h3>
                        <p className="text-emerald-600 font-medium">{step?.subtitle}</p>
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-800">
                        {step?.duration}
                      </Badge>
                    </div>
                    
                    <p className="text-slate-600 mb-6">
                      {step?.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Activities:</h4>
                        <ul className="space-y-2">
                          {step?.activities?.map((activity, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700 text-sm">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">You Receive:</h4>
                        <ul className="space-y-2">
                          {step?.deliverables?.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-slate-700 text-sm">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-200">
                      <Image
                        src={step?.image || ''}
                        alt={`${step?.title} - ${step?.subtitle}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-emerald-600 text-white px-3 py-1">
                          Step {step?.step}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Quality Assurance Throughout
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Every step of our process includes built-in quality measures to ensure exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures?.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{feature?.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{feature?.title}</h3>
                  <p className="text-slate-600">{feature?.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-xl text-slate-600">
              From initial consultation to final delivery in as little as 3 weeks
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200" />
            
            <div className="space-y-12">
              {processSteps?.map((step, index) => (
                <div key={step?.step} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-2">{step?.title}</h3>
                      <p className="text-emerald-600 font-medium mb-2">{step?.duration}</p>
                      <p className="text-slate-600 text-sm">{step?.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    {step?.step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">
              Total Timeline: 19-29 Days
            </Badge>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a customized timeline for your apparel manufacturing project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-gray-100">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-700"
              onClick={() => window.open('https://wa.me/message/VG35GXG3RFPOD1', '_blank')}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
