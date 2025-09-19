
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react'

export function ClosingCTA() {
  const benefits = [
    'Free design consultation',
    'Competitive pricing',
    'Fast turnaround times',
    'Global shipping'
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/608871dd0431b56d468fb16b/4581389a-956f-4522-9a6d-691f8582d299/pexels-ron-lach-9850427.jpg"
          alt="Fashion startup team working together"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <Badge className="mb-6 bg-emerald-600/20 text-emerald-200 border-emerald-400">
          Ready to Start Your Journey?
        </Badge>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Transform Your Fashion Vision into Reality
        </h2>
        
        <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
          Join hundreds of successful brands that trust KnitCraft Labs for ethical, 
          high-quality apparel manufacturing with startup-friendly MOQs.
        </p>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {benefits?.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2 text-left">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-white">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3"
            onClick={() => window.open('https://wa.me/8801861011367', '_blank')}
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            WhatsApp Us
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-slate-300 mb-2">
            Have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-slate-300">
            <span>📧 connect@knitcraftlabs.com</span>
            <span className="hidden sm:block">•</span>
            <span>📱 +880 1861 011367</span>
            <span className="hidden sm:block">•</span>
            <span>⚡ Response within 1-2 business days</span>
          </div>
        </div>
      </div>
    </section>
  )
}
