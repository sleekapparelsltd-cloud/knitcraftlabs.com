

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Users, Award, Globe, TrendingUp, Zap, Target } from 'lucide-react'

export default function PortfolioPage() {
  const portfolioProjects = [
    {
      id: 'nordic-school-uniforms',
      title: 'Nordic School Uniform Collection',
      category: 'School Uniforms',
      client: 'Scandinavian Educational Group',
      description: 'Complete school uniform solution for 15 Nordic schools featuring premium wool sweaters, polo shirts, and sportswear designed for harsh winter conditions.',
      image: 'https://cdn.abacus.ai/images/4f5c8117-9695-44ce-a6b8-704f8a2fb235.png',
      results: [
        '5,000+ units delivered',
        '15 school institutions',
        'Weather-tested durability',
        '98% client satisfaction'
      ],
      challenges: [
        'Arctic temperature requirements',
        'Custom Nordic color matching',
        'Anti-pilling knit technology',
        'Express 14-day delivery'
      ],
      year: '2024'
    },
    {
      id: 'athleisure-startup',
      title: 'Sustainable Athleisure Brand Launch',
      category: 'Performance Wear',
      client: 'EcoFit Active',
      description: 'Full product line development for eco-conscious athleisure startup, featuring seamless leggings, sports bras, and performance tops from recycled materials.',
      image: 'https://cdn.abacus.ai/images/2198c079-bc9e-4862-9390-b09d0ce7f35f.png',
      results: [
        '3,000+ pieces manufactured',
        'Zero-waste production',
        'OEKO-TEX certified',
        '$2M+ in client revenue'
      ],
      challenges: [
        'Seamless knit construction',
        'Recycled fiber integration',
        'Compression technology',
        'Color fastness testing'
      ],
      year: '2024'
    },
    {
      id: 'corporate-uniforms',
      title: 'International Hotel Chain Uniforms',
      category: 'Corporate Wear',
      client: 'Premium Hospitality Group',
      description: 'Professional uniform collection for luxury hotel chain across 8 countries, featuring branded polo shirts, cardigans, and accessories.',
      image: 'https://cdn.abacus.ai/images/c200b56c-2805-4c1c-b4a2-847d69076afc.png',
      results: [
        '12,000+ uniforms delivered',
        '45 hotel locations',
        'Multi-country distribution',
        'Brand consistency achieved'
      ],
      challenges: [
        'Multi-size grading',
        'Consistent color matching',
        'Durability requirements',
        'Coordinated global delivery'
      ],
      year: '2023'
    },
    {
      id: 'tech-wear-innovation',
      title: 'Smart Textile Integration Project',
      category: 'Tech Wear',
      client: 'Urban Tech Apparel',
      description: 'Innovative wearable tech clothing line incorporating conductive threads, temperature regulation, and sustainable materials for urban professionals.',
      image: 'https://cdn.abacus.ai/images/18f1f338-9a88-4c8f-9a04-dd6c2593b36d.png',
      results: [
        '1,500+ tech garments',
        'Patent-pending features',
        'Award-winning design',
        'Featured in tech magazines'
      ],
      challenges: [
        'Conductive thread integration',
        'Washability testing',
        'Smart pocket engineering',
        'Sustainable material sourcing'
      ],
      year: '2024'
    }
  ]

  const manufacturingProcess = [
    {
      title: 'Modern Manufacturing Floor',
      description: 'State-of-the-art facility with advanced Stoll computerized flat knitting machines operated by skilled technicians.',
      image: 'https://cdn.abacus.ai/images/1d61b467-b9bd-45ee-bd5d-5094df8673f1.png',
      highlights: [
        'Advanced Stoll knitting technology',
        'Skilled Bangladeshi workforce',
        'ISO 9001 certified processes',
        'Sustainable production methods'
      ]
    },
    {
      title: 'Rigorous Quality Control',
      description: 'Multi-stage inspection process ensuring every garment meets international quality standards.',
      image: 'https://cdn.abacus.ai/images/e35b5617-1fad-41bd-aad3-2ab44a2283b6.png',
      highlights: [
        'Professional inspection protocols',
        'Precision measurement tools',
        'Fabric integrity testing',
        'International compliance standards'
      ]
    },
    {
      title: 'Professional Packaging',
      description: 'Systematic packaging and shipping preparation ensuring perfect presentation for international delivery.',
      image: 'https://cdn.abacus.ai/images/30e6dab2-1f58-4c1c-a3d9-fddec56248a8.png',
      highlights: [
        'Export-ready packaging',
        'Professional presentation',
        'Protective shipping methods',
        'Global logistics coordination'
      ]
    },
    {
      title: 'Sample Development Center',
      description: 'Dedicated design workspace for rapid prototyping and custom development with extensive material library.',
      image: 'https://cdn.abacus.ai/images/83a23fd3-b2bf-4532-a7db-1270b645410f.png',
      highlights: [
        'Comprehensive fabric library',
        'Color matching expertise',
        '7-day sample development',
        'Technical design capabilities'
      ]
    }
  ]

  const clientStats = [
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      number: "50+",
      label: "Happy Clients",
      description: "International brands trust our expertise"
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald-600" />,
      number: "25+",
      label: "Countries Served",
      description: "Global reach with local expertise"
    },
    {
      icon: <Award className="w-8 h-8 text-emerald-600" />,
      number: "500K+",
      label: "Garments Produced",
      description: "Proven manufacturing capacity"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      number: "98%",
      label: "Client Satisfaction",
      description: "Exceptional quality and service"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-600 text-white">Our Work Portfolio</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Showcasing Excellence in <span className="text-emerald-600">Manufacturing</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our completed projects, manufacturing processes, and the technical expertise that has earned the trust of international brands across 25+ countries.
            </p>
          </div>

          {/* Client Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {clientStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-slate-700 mb-1">{stat.label}</div>
                  <p className="text-sm text-slate-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Featured Client Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real projects that demonstrate our technical capabilities and commitment to client success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {portfolioProjects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    <Badge className="bg-white/90 text-slate-800">
                      {project.category}
                    </Badge>
                    <Badge className="bg-emerald-600 text-white">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-4">{project.client}</p>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-emerald-600" />
                      Project Results
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                          <span className="text-sm text-slate-600">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Challenges */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-orange-600" />
                      Technical Challenges Solved
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.challenges.map((challenge, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {challenge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Behind the Scenes: Our Manufacturing Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Take a look inside our modern facilities and see the professional processes that ensure consistent quality and timely delivery for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {manufacturingProcess.map((process, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-video overflow-hidden bg-slate-200">
                  <Image
                    src={process.image}
                    alt={process.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {process.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {process.description}
                  </p>

                  <div className="space-y-2">
                    {process.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-slate-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600">
              Real feedback from international brands who have experienced our quality and service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "KnitCraft Labs transformed our school uniform program. Their Nordic-specific designs and quality exceeded our expectations. The 14-day delivery timeline was incredible.",
                client: "Anna Lindqvist",
                company: "Nordic Education Solutions",
                country: "Sweden"
              },
              {
                quote: "The technical expertise in sustainable athleisure manufacturing is unmatched. They helped us launch our eco-friendly brand with zero compromises on performance.",
                client: "Marcus Chen",
                company: "EcoFit Active",
                country: "Canada"
              },
              {
                quote: "Consistency across 45 hotel locations in 8 countries - that's what impressed us most. Their quality control and logistics coordination are world-class.",
                client: "Sarah Johnson",
                company: "Premium Hospitality Group",
                country: "UAE"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <p className="text-slate-600 italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-slate-900">{testimonial.client}</p>
                    <p className="text-sm text-slate-600">{testimonial.company}</p>
                    <p className="text-xs text-emerald-600 font-medium">{testimonial.country}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Certified Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our manufacturing processes are certified by international standards, ensuring quality, safety, and ethical practices in every project.
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join our portfolio of successful international brands. Let's discuss how we can bring your apparel manufacturing vision to life with the same excellence and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-gray-100">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/sample-development">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-700">
                Request Samples First
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

