
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Clock, CheckCircle, ArrowRight, Zap, Target, Palette, Ruler, Package, Star, DollarSign, Repeat } from 'lucide-react'

export default function SampleDevelopmentPage() {
  const processSteps = [
    {
      icon: <Palette className="w-6 h-6 text-emerald-600" />,
      title: "Design Consultation",
      description: "Share your vision, sketches, or tech packs. Our design team provides expert guidance and recommendations.",
      duration: "Day 1"
    },
    {
      icon: <Ruler className="w-6 h-6 text-emerald-600" />,
      title: "Pattern Development",
      description: "Technical pattern creation using advanced CAD software and knitting programming for complex designs.",
      duration: "Day 2"
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      title: "Rapid Prototyping",
      description: "First sample creation using premium materials and expert craftsmanship on Stoll knitting machines.",
      duration: "Day 3-4"
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-600" />,
      title: "Quality Review",
      description: "Comprehensive quality check, fit testing, and refinement based on your specifications.",
      duration: "Day 5"
    },
    {
      icon: <Package className="w-6 h-6 text-emerald-600" />,
      title: "Sample Dispatch",
      description: "Express international shipping with tracking and detailed production specifications document.*",
      duration: "Day 6-7"
    }
  ]

  // New Sample Plans as per PDF
  const samplePlans = [
    {
      name: "Lite",
      price: "$99",
      description: "Perfect for first-time entrepreneurs",
      features: ["1 sample per month", "Basic materials", "Standard lead time", "Email support", "Design consultation"],
      popular: false
    },
    {
      name: "Starter",
      price: "$149", 
      description: "Ideal for growing brands",
      features: ["2 samples per month", "Premium materials", "Priority processing", "WhatsApp support", "Tech pack included", "Color matching"],
      popular: true
    },
    {
      name: "Growth",
      price: "$199",
      description: "For established brands",
      features: ["3 samples per month", "Luxury materials", "Express processing", "Dedicated account manager", "Size range development", "Fit sessions"],
      popular: false
    },
    {
      name: "Studio", 
      price: "$299",
      description: "Professional design studios",
      features: ["5 samples per month", "All material options", "Same-day processing", "Direct line access", "Collection development", "Trend forecasting"],
      popular: false
    }
  ]

  const oneTimePrototype = {
    name: "One-Time Prototype",
    price: "$200", 
    description: "Single piece development for concept testing",
    features: ["1 custom sample", "Premium materials", "Full consultation", "Tech pack delivery", "Express shipping"]
  }

  const advantages = [
    {
      icon: <Clock className="w-8 h-8 text-emerald-600" />,
      title: "Ultra-Fast Turnaround",
      description: "From concept to sample in just 7 days - faster than 95% of manufacturers globally.*"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
      title: "Production-Ready Samples", 
      description: "Every sample is made using production-grade processes, ensuring accurate representation."
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-600" />,
      title: "Unlimited Revisions",
      description: "We work until you're 100% satisfied with the sample, no additional charges for minor adjustments."
    }
  ]

  const faqItems = [
    {
      question: "How does the subscription rollover work?",
      answer: "Unused samples from your monthly allocation roll over to the next month, up to a maximum of 2x your plan limit. For example, Starter plan users can accumulate up to 4 samples."
    },
    {
      question: "What are complexity pricing multipliers?", 
      answer: "Simple designs have no additional cost. Medium complexity (multi-color, special construction) adds 25%. High complexity (intricate patterns, technical features) adds 50% to the base subscription."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel anytime. There are no cancellation fees, and you'll retain access to your remaining sample credits until they're used or expire."
    },
    {
      question: "How long is the typical lead time?",
      answer: "Standard samples: 7-10 days. Express samples (for subscribers): 3-5 days. Rush orders can be completed in 24-48 hours for additional fees."
    },
    {
      question: "Do you ship worldwide?",
      answer: "Yes, we ship globally. Shipping costs are additional and calculated based on destination and urgency. Express shipping options available for all major markets."
    },
    {
      question: "What if I need fabrics not in your library?",
      answer: "Custom fabric sourcing is available with surcharges: Basic fabrics +$25, Premium fabrics +$50, Luxury/Technical fabrics +$100 per sample."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-600 text-white">Sample Development Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              From Concept to Sample in <span className="text-emerald-600">Just 7 Days</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your fashion ideas into tangible samples with our rapid development process. 
              Perfect for startups, designers, and brands looking to test concepts quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{advantage.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{advantage.title}</h3>
                  <p className="text-slate-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto text-sm sm:text-base">
                  <span className="hidden sm:inline">Subscribe to a Plan</span>
                  <span className="sm:hidden">Subscribe Now</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto text-sm sm:text-base"
                onClick={() => window.open('https://wa.me/message/VG35GXG3RFPOD1', '_blank')}
              >
                <span className="hidden sm:inline">Get One-Time Quote</span>
                <span className="sm:hidden">Get Quote</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Choose Your Sample Development Plan
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Flexible subscription plans designed to grow with your business needs
            </p>
          </div>

          {/* Subscription Plans Grid - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {samplePlans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${plan.popular ? 'border-2 border-emerald-500' : ''} mx-auto w-full max-w-sm xl:max-w-none`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-emerald-600 text-white px-3 py-1 text-xs sm:px-4 sm:text-sm">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-3 px-4 sm:px-6 pt-6">
                  <CardTitle className="text-lg sm:text-xl font-bold text-slate-900">{plan.name}</CardTitle>
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-2">
                    {plan.price}
                    <span className="text-xs sm:text-sm font-normal text-slate-500">/month</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-tight">{plan.description}</p>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-600 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className={`w-full text-sm sm:text-base py-2 sm:py-3 ${plan.popular ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-slate-600 hover:bg-slate-700'}`}>
                      <span className="hidden sm:inline">Subscribe to {plan.name}</span>
                      <span className="sm:hidden">Get {plan.name}</span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* One-Time Prototype Option - Mobile Optimized */}
          <div className="max-w-md mx-auto px-4 sm:px-0">
            <Card className="border-2 border-blue-500 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-3 px-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl font-bold text-slate-900">{oneTimePrototype.name}</CardTitle>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">{oneTimePrototype.price}</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-tight">{oneTimePrototype.description}</p>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {oneTimePrototype.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-600 leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base py-2 sm:py-3">
                    <span className="hidden sm:inline">Order One-Time Prototype</span>
                    <span className="sm:hidden">Order Prototype</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Surcharges Table - Mobile Optimized */}
          <div className="mt-12 sm:mt-16 max-w-4xl mx-auto px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">Additional Charges & Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <Card>
                <CardHeader className="pb-3 px-4 sm:px-6">
                  <CardTitle className="text-base sm:text-lg">Fabric & Material Surcharges</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between items-center">
                      <span className="flex-1 pr-2">Basic fabrics/yarns:</span>
                      <span className="font-semibold text-emerald-600">+$25</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex-1 pr-2">Premium materials:</span>
                      <span className="font-semibold text-emerald-600">+$50</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex-1 pr-2">Luxury/Technical fabrics:</span>
                      <span className="font-semibold text-emerald-600">+$100</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3 px-4 sm:px-6">
                  <CardTitle className="text-base sm:text-lg">Complexity Multipliers</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between items-center">
                      <span className="flex-1 pr-2">Simple designs:</span>
                      <span className="font-semibold text-blue-600">No charge</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex-1 pr-2">Medium complexity:</span>
                      <span className="font-semibold text-blue-600">+25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex-1 pr-2">High complexity:</span>
                      <span className="font-semibold text-blue-600">+50%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-slate-600 text-center space-y-1 sm:space-y-2 px-2 sm:px-0">
              <p>• Unused monthly samples roll over to next month (max 2x plan limit)</p>
              <p>• Plans can be canceled anytime without fees</p>
              <p>• International shipping charges apply separately</p>
              <p>• All samples come with detailed production specifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about our sample development process
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 hover:no-underline hover:text-emerald-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-slate-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Process Timeline - Mobile Optimized */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Our 7-Day Sample Development Process
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Streamlined workflow ensuring quality, speed, and precision at every step
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>
            
            {processSteps.map((step, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-emerald-100 text-emerald-800">{step.duration}</Badge>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-full border-4 border-white shadow-lg">
                  {step.icon}
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-emerald-600 rounded-full">
                  <div className="w-5 h-5 text-white">
                    {step.icon}
                  </div>
                </div>
                <Card className="flex-1 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <Badge className="mb-2 bg-emerald-100 text-emerald-800 text-xs">{step.duration}</Badge>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-tight">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-xs text-slate-500 max-w-4xl mx-auto px-2 sm:px-0">
              *Rush services available for limited SKUs using stock fabrics. Standard lead time is 15-25 days. 
              Express lead time starts after design approval and materials readiness.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Bring Your Design Ideas to Life?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful fashion brands who trust our rapid sample development process. 
            Choose a subscription plan or get a one-time prototype quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-gray-100 w-full sm:w-auto text-sm sm:text-base">
                <span className="hidden sm:inline">Subscribe to a Plan</span>
                <span className="sm:hidden">Subscribe Now</span>
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-emerald-700 w-full sm:w-auto text-sm sm:text-base"
              onClick={() => window.open('https://wa.me/message/VG35GXG3RFPOD1', '_blank')}
            >
              <span className="hidden sm:inline">WhatsApp for Urgent Orders</span>
              <span className="sm:hidden">WhatsApp Us</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
