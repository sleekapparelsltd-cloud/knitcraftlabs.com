'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, ArrowLeft, Share2, User } from 'lucide-react'

// Sample blog posts data - in real implementation, this would come from a CMS
const blogPosts = [
  {
    slug: 'low-moq-manufacturing-guide-startups',
    title: 'The Complete Guide to Low MOQ Manufacturing for Fashion Startups',
    excerpt: 'Learn how to navigate minimum order quantities as a fashion startup, find the right manufacturer, and scale your brand without breaking the bank.',
    image: 'https://cdn.abacus.ai/images/b388c843-43d1-46ec-8ae5-c2cf9439de39.png',
    date: '2024-09-10',
    tags: ['Manufacturing', 'Startups', 'MOQ'],
    readTime: '8 min read',
    author: 'KnitCraft Labs Team',
    content: `
# Starting Your Fashion Brand with Low MOQ Manufacturing

Starting a fashion brand can be challenging, especially when traditional manufacturers require large minimum orders. At KnitCraft Labs, we understand these challenges and have designed our services specifically for emerging brands.

## What Are MOQs and Why They Matter

Minimum Order Quantities (MOQs) represent the smallest amount of product a manufacturer will produce in a single order. Traditional manufacturers often set high MOQs to maximize efficiency, but this creates barriers for startups with limited capital and uncertain demand.

## Benefits of Low MOQ Manufacturing

### 1. Reduced Financial Risk
With lower MOQs starting from just 50 pieces, startups can test markets without significant upfront investment.

### 2. Faster Market Validation
Launch products quickly, gather feedback, and iterate based on real customer demand.

### 3. Better Cash Flow Management
Maintain healthy cash flow by ordering smaller quantities more frequently.

## Choosing the Right Low MOQ Manufacturer

When selecting a manufacturing partner, consider:

- **Quality Standards**: Ensure they maintain high quality even at low volumes
- **Communication**: Look for responsive, English-speaking teams
- **Flexibility**: Choose manufacturers willing to work with your specific needs
- **Scalability**: Partner with someone who can grow with your brand

## Working with KnitCraft Labs

Our approach to low MOQ manufacturing includes:

- Starting orders from 50-300 pieces
- 7-day express sampling
- Private label services
- Nordic market specialization
- Ethical production practices

Ready to start your fashion journey? Contact our team for a free consultation and discover how we can help bring your vision to life.
    `
  },
  {
    slug: 'nordic-school-uniforms-market-trends',
    title: 'Nordic School Uniforms: Market Trends and Manufacturing Insights',
    excerpt: 'Discover the growing demand for school uniforms in Nordic countries and how manufacturers are adapting to climate-specific requirements.',
    image: 'https://cdn.abacus.ai/images/260bb5bc-3718-496e-958d-7030903e5d43.png',
    date: '2024-09-05',
    tags: ['Nordic Market', 'Uniforms', 'Trends'],
    readTime: '6 min read',
    author: 'Nordic Market Specialist',
    content: `
# The Growing Nordic School Uniform Market

The Nordic countries (Sweden, Norway, Denmark, Finland, and Iceland) are experiencing a significant shift toward school uniforms, creating unique opportunities for manufacturers who understand the specific requirements of these markets.

## Market Trends and Demands

### Climate Considerations
Nordic school uniforms must accommodate harsh weather conditions, requiring:
- Moisture-wicking properties
- Thermal regulation
- Durability for active students
- Easy care and maintenance

### Style Preferences
Nordic design principles emphasize:
- Minimalist aesthetics
- Functional design
- Sustainable materials
- Gender-neutral options

## Manufacturing Requirements

Successful Nordic uniform production requires:

1. **Technical Fabrics**: Materials that perform in cold, wet conditions
2. **Quality Construction**: Garments that withstand daily wear and frequent washing
3. **Fast Turnaround**: Schools often need uniforms ready for new academic years
4. **Compliance**: Meeting EU safety and environmental standards

## KnitCraft Labs' Nordic Expertise

Our specialization in the Nordic market includes:

- Understanding of regional preferences and requirements
- Partnerships with certified fabric suppliers
- Express delivery options for urgent school orders
- Compliance with EU regulations
- Experience working with educational institutions

Contact us to learn more about our Nordic school uniform manufacturing capabilities.
    `
  },
  {
    slug: 'sustainable-knitwear-production-bangladesh',
    title: 'Sustainable Knitwear Production: Bangladesh Leading the Way',
    excerpt: 'How Bangladeshi manufacturers are implementing sustainable practices in knitwear production while maintaining competitive pricing.',
    image: 'https://cdn.abacus.ai/images/27642349-d029-4c9b-b818-4d01c6ab5219.png',
    date: '2024-08-28',
    tags: ['Sustainability', 'Knitwear', 'Bangladesh'],
    readTime: '5 min read',
    author: 'Sustainability Expert',
    content: `
# Sustainable Knitwear Production in Bangladesh

Bangladesh has emerged as a global leader in sustainable knitwear manufacturing, combining traditional expertise with modern environmental practices to deliver ethical fashion solutions.

## The Sustainability Revolution

### Environmental Initiatives
- Water recycling systems
- Solar-powered facilities
- Organic and recycled yarn usage
- Minimal waste production

### Social Responsibility
- Fair labor practices
- Worker education programs
- Community development projects
- Health and safety standards

## KnitCraft Labs' Commitment

Our sustainable practices include:
- Working with certified facilities
- Eco-friendly material sourcing
- Transparent supply chain
- Continuous improvement programs

Learn more about our sustainability initiatives and how they benefit your brand.
    `
  },
  {
    slug: 'private-label-manufacturing-success-tips',
    title: '7 Keys to Successful Private Label Manufacturing Partnerships',
    excerpt: 'Essential tips for building strong relationships with private label manufacturers and ensuring quality, timing, and cost efficiency.',
    image: 'https://cdn.abacus.ai/images/b388c843-43d1-46ec-8ae5-c2cf9439de39.png',
    date: '2024-08-20',
    tags: ['Private Label', 'Partnerships', 'Business Tips'],
    readTime: '7 min read',
    author: 'Business Development Team',
    content: `
# 7 Keys to Successful Private Label Manufacturing

Building successful partnerships with private label manufacturers is crucial for fashion brands looking to scale efficiently while maintaining quality and brand integrity.

## Key Success Factors

### 1. Clear Communication
- Detailed specifications
- Regular updates
- Open feedback channels

### 2. Quality Standards
- Sample approvals
- Production audits
- Continuous monitoring

### 3. Reliable Partnerships
- Trusted suppliers
- Proven track records
- Long-term relationships

Private label success requires choosing the right manufacturing partner who understands your brand vision and market requirements.
    `
  },
  {
    slug: 'fast-fashion-vs-ethical-manufacturing',
    title: 'Fast Fashion vs Ethical Manufacturing: Making the Right Choice',
    excerpt: 'Comparing fast fashion and ethical manufacturing approaches, their impact on brands, consumers, and the environment.',
    image: 'https://cdn.abacus.ai/images/260bb5bc-3718-496e-958d-7030903e5d43.png',
    date: '2024-08-15',
    tags: ['Ethics', 'Fast Fashion', 'Sustainability'],
    readTime: '9 min read',
    author: 'Ethics & Sustainability Team',
    content: `
# Fast Fashion vs Ethical Manufacturing

The fashion industry faces a critical choice between speed-to-market and sustainable practices. Understanding these approaches helps brands make informed decisions.

## Fast Fashion Characteristics
- Quick turnaround times
- Low cost focus
- High volume production
- Trend-driven designs

## Ethical Manufacturing Benefits
- Sustainable practices
- Quality focus
- Fair labor conditions
- Long-term brand value

## Making the Right Choice

Consider your brand values, target market, and long-term goals when choosing between fast fashion and ethical manufacturing approaches.
    `
  },
  {
    slug: 'knitting-technology-innovations-2024',
    title: 'Latest Knitting Technology Innovations Transforming Fashion',
    excerpt: 'Explore cutting-edge knitting technologies like computerized flat knitting machines and how they revolutionize garment production.',
    image: 'https://cdn.abacus.ai/images/27642349-d029-4c9b-b818-4d01c6ab5219.png',
    date: '2024-08-10',
    tags: ['Technology', 'Innovation', 'Knitting'],
    readTime: '6 min read',
    author: 'Technical Team',
    content: `
# Latest Knitting Technology Innovations

The knitting industry continues to evolve with advanced technologies that enhance production efficiency, quality, and design capabilities.

## Key Innovations

### Computerized Flat Knitting
- Stoll machine technology
- Complex pattern capabilities
- Precise construction
- Minimal waste production

### Digital Design Tools
- 3D visualization
- Pattern programming
- Color matching systems
- Quality prediction

## Future Trends

The integration of AI and machine learning is revolutionizing how we approach knitting design and production, making it more efficient and sustainable.
    `
  }
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter(p => p.slug !== params.slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <Badge key={index} className="bg-emerald-100 text-emerald-800">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-6 text-slate-600">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      url: window.location.href
                    })
                  } else {
                    navigator.clipboard.writeText(window.location.href)
                    alert('Article link copied to clipboard!')
                  }
                }
              }}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6}\s+/g, match => {
                  const level = match.trim().length - 1
                  return `<h${level + 1} class="text-${4-level}xl font-bold text-slate-900 mt-8 mb-4">`
                }).replace(/### /g, '<h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">').replace(/## /g, '<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">').replace(/# /g, '<h1 class="text-3xl font-bold text-slate-900 mt-8 mb-6">')
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Start Your Manufacturing Journey?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how KnitCraft Labs can help bring your fashion ideas to life with our low MOQ manufacturing solutions.
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
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Related Articles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                <Card className="hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="relative aspect-video overflow-hidden bg-slate-200">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {relatedPost.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs text-emerald-600 border-emerald-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-slate-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{new Date(relatedPost.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}