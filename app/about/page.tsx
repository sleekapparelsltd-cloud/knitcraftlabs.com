
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building, Users, Globe, Award, Shield, Leaf, Clock, Star, Target } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About <span className="text-emerald-600">KnitCraft Labs</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your trusted partner in ethical apparel manufacturing, empowering startups and small brands with professional-grade production capabilities.
            </p>
          </div>
          
          <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200">
            <Image
              src="https://cdn.abacus.ai/images/b388c843-43d1-46ec-8ae5-c2cf9439de39.png"
              alt="KnitCraft Labs modern manufacturing facility"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <Badge className="mb-4 bg-emerald-100 text-emerald-800">Meet Our Founder & Managing Director</Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Leading Innovation in Textile Manufacturing
              </h2>
              <p className="text-slate-600 mb-6">
                As Managing Director of Sleek Apparels Limited, our founder brings over 10+ years of hands-on expertise in knitting technology and apparel manufacturing. His technical mastery spans computerized flat knitting machines, knitting programming tools, and advanced design software, enabling precision production of complex knitwear patterns.
              </p>
              <p className="text-slate-600 mb-6">
                With international teaching experience in China and extensive work with clients across multiple countries, he has developed deep insights into global fashion trends and manufacturing requirements. His expertise in knitting design software, pattern development, and production optimization has helped establish Sleek Apparels Limited as a trusted Alibaba Global Gold Supplier.
              </p>
              <p className="text-slate-600 mb-6">
                Leading our family-owned, export-oriented knitwear manufacturing company, he has successfully scaled operations to serve international brands while maintaining the highest quality standards. His technical proficiency in network systems and manufacturing automation ensures efficient, sustainable production processes.
              </p>
              <p className="text-slate-600 mb-8 italic border-l-4 border-emerald-500 pl-4">
                "Technology and craftsmanship must work in harmony. At KnitCraft Labs, powered by Sleek Apparels Limited, we combine cutting-edge knitting technology with traditional expertise to create exceptional garments for emerging brands worldwide."
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Start Your Journey
                </Button>
              </Link>
            </div>
            <div className="lg:col-span-1">
              <div className="relative w-64 h-80 mx-auto rounded-lg overflow-hidden bg-slate-200 shadow-lg">
                <Image
                  src="https://cdn.abacus.ai/images/1b90c9f5-4683-4c52-841a-13af05d1bb79.png"
                  alt="KnitCraft Labs Managing Director - Manufacturing Expert"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="font-bold text-slate-900">Managing Director</h3>
                <p className="text-emerald-600 font-medium">Sleek Apparels Limited</p>
                <p className="text-sm text-slate-600 mt-2">10+ Years in Textile Manufacturing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Why Choose KnitCraft Labs</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Your Perfect Manufacturing Partner
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand the unique challenges of startups and small brands. Our approach combines global expertise with personal attention, ensuring your success in the competitive fashion industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Users className="w-8 h-8 text-emerald-600" />,
                title: "Startup-Friendly MOQs",
                description: "Start your brand with just 50-300 pieces per style. No massive investment required - perfect for testing markets and launching collections.",
                highlight: "From 50 pieces"
              },
              {
                icon: <Clock className="w-8 h-8 text-emerald-600" />,
                title: "Ultra-Fast Turnaround",
                description: "Sample to shipment in just 7 days for urgent orders. Quick sampling, rapid production cycles, and priority handling for your deadlines.",
                highlight: "7-day delivery"
              },
              {
                icon: <Star className="w-8 h-8 text-emerald-600" />,
                title: "School Uniform Expertise",
                description: "Specialized in school uniforms and winter wear for international markets. Understanding of various climate requirements and educational institution needs.",
                highlight: "Uniform specialist"
              },
              {
                icon: <Award className="w-8 h-8 text-emerald-600" />,
                title: "Quality Excellence",
                description: "Rigorous quality control processes, international certifications, and zero-tolerance defect policy ensure your brand reputation.",
                highlight: "Certified quality"
              },
              {
                icon: <Target className="w-8 h-8 text-emerald-600" />,
                title: "Complete Brand Support",
                description: "From design consultation to packaging, labeling, and branding - we handle everything so you can focus on growing your business.",
                highlight: "Full service"
              },
              {
                icon: <Shield className="w-8 h-8 text-emerald-600" />,
                title: "Ethical Manufacturing",
                description: "Fair labor practices, safe working conditions, and transparent supply chain management with full compliance certifications.",
                highlight: "100% ethical"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform">{item.icon}</div>
                    <Badge className="bg-emerald-50 text-emerald-700 text-xs">{item.highlight}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Ready to Start Your Success Story?
              </h3>
              <p className="text-slate-600 mb-6">
                Join hundreds of successful startups and small brands that chose KnitCraft Labs for their manufacturing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link href="/sample-development">
                  <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Start With Samples
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-200">
              <Image
                src="https://cdn.abacus.ai/images/260bb5bc-3718-496e-958d-7030903e5d43.png"
                alt="KnitCraft Labs quality control team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Our Mission</Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Democratizing Fashion Manufacturing for Emerging Brands
              </h2>
              <p className="text-slate-600 mb-6">
                Founded with a vision to break down barriers in apparel manufacturing, KnitCraft Labs emerged from understanding the frustrations faced by startups and small fashion brands. Traditional manufacturers often impose prohibitive MOQs, complex processes, and impersonal service.
              </p>
              <p className="text-slate-600 mb-6">
                We revolutionized this approach by creating a startup-friendly ecosystem: flexible MOQs, transparent pricing, personalized support, and rapid turnaround times. Our commitment goes beyond manufacturing - we're your strategic partner in bringing fashion visions to life.
              </p>
              <p className="text-slate-600 mb-8">
                Today, we proudly serve 20+ happy clients across 8 key markets with 10+ years combined experience, specializing in international requirements and maintaining our core values of ethical production and sustainable practices.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Partner Facility Certifications & Compliance
            </h2>
            <p className="text-xl text-slate-600">
              We work with certified partner facilities (BSCI, OEKO-TEX, WRAP) ensuring ethical, sustainable, and quality-assured production standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src="/images/oeko-tex-badge.png"
                  alt="OEKO-TEX Standard 100 Certification"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-slate-700">OEKO-TEX Standard 100</p>
              <p className="text-xs text-slate-500">Textile Safety</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src="/images/bsci-badge.png"
                  alt="BSCI Certification - Business Social Compliance Initiative"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-slate-700">BSCI Certification</p>
              <p className="text-xs text-slate-500">Social Compliance</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src="/images/wrap-badge.png"
                  alt="WRAP Certification - Worldwide Responsible Accredited Production"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-slate-700">WRAP Certified</p>
              <p className="text-xs text-slate-500">Responsible Production</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src="https://cdn.abacus.ai/images/ffd0decb-6cf9-444b-ba4d-5bd7836c0f0c.png"
                  alt="Alibaba Gold Supplier Certification"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-slate-700">Alibaba Gold Supplier</p>
              <p className="text-xs text-orange-600">Sleek Apparels Limited</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Entities */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Global Operations</h2>
            <p className="text-xl text-slate-600">
              Strategic entities positioned to serve our international clientele with seamless operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-blue-100 text-blue-800">Manufacturing Hub</Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Sleek Apparels Limited
                </h3>
                <p className="text-slate-600 mb-6">
                  Our primary manufacturing facility in Bangladesh, equipped with state-of-the-art computerized flat knitting machines and skilled artisans delivering world-class apparel products to global brands.
                </p>
                <div className="space-y-3 text-slate-700">
                  <div>
                    <p><strong>Headquarters:</strong> 01, Rd 19A, Sector 04</p>
                    <p>Uttara East, Dhaka 1230, Bangladesh</p>
                  </div>
                  <div>
                    <p><strong>Manufacturing Plant:</strong> 114/3 Khapara Rd</p>
                    <p>Tongi West, Gazipur-1712, Bangladesh</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded">
                    <p><strong>Business Identification Number (BIN):</strong></p>
                    <p className="font-mono text-sm">006626088-0102</p>
                  </div>
                  <p><strong>Certification:</strong> Alibaba Gold Supplier</p>
                  <p><strong>Specialization:</strong> Knitwear & School Uniforms</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-green-100 text-green-800">Business Operations</Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Sleek Apparels LLC
                </h3>
                <p className="text-slate-600 mb-6">
                  Our US-based entity facilitating seamless business operations, client relations, and strategic partnerships across North America, providing local support for international clients.
                </p>
                <div className="space-y-3 text-slate-700">
                  <div>
                    <p><strong>Address:</strong> 271 W. Short St Ste 410 #2082</p>
                    <p>Lexington, Kentucky 40507, USA</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded">
                    <p><strong>Registered in:</strong> State of Kentucky</p>
                    <p><strong>Business / Entity ID:</strong> 1476861</p>
                  </div>
                  <p><strong>Focus:</strong> Client Relations & Partnerships</p>
                  <p><strong>Target Market:</strong> North American Brands</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Fashion Brand?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join the growing community of successful brands that trust KnitCraft Labs for their manufacturing needs. Let's make your vision a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-gray-100">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/uniforms">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-700">
                School Uniforms Specialist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
