
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: "https://cdn.abacus.ai/images/b388c843-43d1-46ec-8ae5-c2cf9439de39.png",
      title: "Your One-Stop Apparel Manufacturer",
      subtitle: "& Sourcing Partner in Bangladesh"
    },
    {
      image: "https://cdn.abacus.ai/images/260bb5bc-3718-496e-958d-7030903e5d43.png",
      title: "Low MOQs & Private Labeling",
      subtitle: "for Fashion Startups"
    },
    {
      image: "https://cdn.abacus.ai/images/27642349-d029-4c9b-b818-4d01c6ab5219.png",
      title: "Rush Uniform Options",
      subtitle: "with Ethical Production"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const benefits = [
    "Low MOQs from 50-300 pieces",
    "Private label & branding services", 
    "Ethical & sustainable practices",
    "Rush uniform options available"
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Parallax */}
      {slides?.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide?.image || ''}
            alt={`${slide?.title} - ${slide?.subtitle}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-slate-900/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white py-12">
        <Badge className="mb-4 sm:mb-6 bg-emerald-600/20 text-emerald-200 border-emerald-400 text-sm sm:text-base px-3 py-1">
          <span className="block sm:hidden">50+ Brands Trusted</span>
          <span className="hidden sm:block">Trusted by 50+ brands in 25+ countries</span>
        </Badge>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 fade-in-up px-2">
          Struggling to find reliable apparel manufacturers who accept 
          <span className="text-emerald-400"> low-MOQ orders</span>?
          <br />
          <span className="text-emerald-400">KnitCraft Labs delivers from design to delivery.</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 leading-relaxed">
          From 50-piece minimums to full-scale production. We handle sampling, sourcing, private labeling, 
          and rapid uniform production for startups, schools, and growing brands worldwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 px-2">
          {benefits?.map((benefit, index) => (
            <div key={index} className="flex items-center justify-center sm:justify-start space-x-2 text-center sm:text-left bg-black/20 rounded-lg p-3 sm:p-2 sm:bg-transparent">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-sm sm:text-sm lg:text-base break-words">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
          <Link href="/products" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-slate-900 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              View Products
            </Button>
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-emerald-400' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
