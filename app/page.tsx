
import { Hero } from '@/components/hero'
import { USPSection } from '@/components/usp-section'
import { FeaturedProducts } from '@/components/featured-products'
import { ServicesPreview } from '@/components/services-preview'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ClosingCTA } from '@/components/closing-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <USPSection />
      <FeaturedProducts />
      <ServicesPreview />
      <TestimonialsSection />
      <ClosingCTA />
    </>
  )
}
