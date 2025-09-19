'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

// Sample blog posts - in real implementation, this would come from a CMS or markdown files
const blogPosts = [
  {
    slug: 'low-moq-manufacturing-guide-startups',
    title: 'The Complete Guide to Low MOQ Manufacturing for Fashion Startups',
    excerpt: 'Learn how to navigate minimum order quantities as a fashion startup, find the right manufacturer, and scale your brand without breaking the bank.',
    image: 'https://cdn.abacus.ai/images/b388c843-43d1-46ec-8ae5-c2cf9439de39.png',
    date: '2024-09-10',
    tags: ['Manufacturing', 'Startups', 'MOQ'],
    readTime: '8 min read'
  },
  {
    slug: 'nordic-school-uniforms-market-trends',
    title: 'Nordic School Uniforms: Market Trends and Manufacturing Insights',
    excerpt: 'Discover the growing demand for school uniforms in Nordic countries and how manufacturers are adapting to climate-specific requirements.',
    image: 'https://cdn.abacus.ai/images/260bb5bc-3718-496e-958d-7030903e5d43.png',
    date: '2024-09-05',
    tags: ['Nordic Market', 'Uniforms', 'Trends'],
    readTime: '6 min read'
  },
  {
    slug: 'sustainable-knitwear-production-bangladesh',
    title: 'Sustainable Knitwear Production: Bangladesh Leading the Way',
    excerpt: 'How Bangladeshi manufacturers are implementing sustainable practices in knitwear production while maintaining competitive pricing.',
    image: 'https://cdn.abacus.ai/images/27642349-d029-4c9b-b818-4d01c6ab5219.png',
    date: '2024-08-28',
    tags: ['Sustainability', 'Knitwear', 'Bangladesh'],
    readTime: '5 min read'
  },
  {
    slug: 'private-label-manufacturing-success-tips',
    title: '7 Keys to Successful Private Label Manufacturing Partnerships',
    excerpt: 'Essential tips for building strong relationships with private label manufacturers and ensuring quality, timing, and cost efficiency.',
    image: 'https://cdn.abacus.ai/images/b388c843-43d1-46ec-8ae5-c2cf9439de39.png',
    date: '2024-08-20',
    tags: ['Private Label', 'Partnerships', 'Business Tips'],
    readTime: '7 min read'
  },
  {
    slug: 'fast-fashion-vs-ethical-manufacturing',
    title: 'Fast Fashion vs Ethical Manufacturing: Making the Right Choice',
    excerpt: 'Comparing fast fashion and ethical manufacturing approaches, their impact on brands, consumers, and the environment.',
    image: 'https://cdn.abacus.ai/images/260bb5bc-3718-496e-958d-7030903e5d43.png',
    date: '2024-08-15',
    tags: ['Ethics', 'Fast Fashion', 'Sustainability'],
    readTime: '9 min read'
  },
  {
    slug: 'knitting-technology-innovations-2024',
    title: 'Latest Knitting Technology Innovations Transforming Fashion',
    excerpt: 'Explore cutting-edge knitting technologies like computerized flat knitting machines and how they revolutionize garment production.',
    image: 'https://cdn.abacus.ai/images/27642349-d029-4c9b-b818-4d01c6ab5219.png',
    date: '2024-08-10',
    tags: ['Technology', 'Innovation', 'Knitting'],
    readTime: '6 min read'
  }
]

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const remainingPosts = blogPosts.slice(1)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Manufacturing <span className="text-emerald-600">Insights & News</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights in apparel manufacturing, 
              fashion business, and textile industry from our experts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <Badge className="bg-emerald-100 text-emerald-800">Featured Article</Badge>
          </div>
          
          <Link href={`/blog/${featuredPost.slug}`}>
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative aspect-video lg:aspect-square overflow-hidden bg-slate-200">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-emerald-600 border-emerald-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Latest Articles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="relative aspect-video overflow-hidden bg-slate-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs text-emerald-600 border-emerald-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated with Manufacturing Insights
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Get the latest articles, industry trends, and manufacturing tips delivered 
            directly to your inbox. Join our community of fashion entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <button 
              onClick={() => alert('Thank you for your interest! Newsletter functionality will be available soon.')}
              className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </div>
          <p className="text-sm text-emerald-200 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  )
}