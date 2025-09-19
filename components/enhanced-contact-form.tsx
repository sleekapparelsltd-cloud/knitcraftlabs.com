
'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Mail, 
  Phone, 
  Building, 
  Globe, 
  MapPin, 
  Package,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Send
} from 'lucide-react'
import { toast } from 'sonner'

interface EnhancedContactFormProps {
  title?: string
  subtitle?: string
  defaultCategory?: string
  showPricing?: boolean
  className?: string
}

const PRODUCT_CATEGORIES = [
  { value: 'SWEATERS', label: 'Sweaters & Pullovers', estimatedPrice: '$12-18' },
  { value: 'CARDIGANS', label: 'Cardigans', estimatedPrice: '$15-22' },
  { value: 'UNIFORMS', label: 'School Uniforms', estimatedPrice: '$20-40' },
  { value: 'POLOS', label: 'Polo Shirts', estimatedPrice: '$8-12' },
  { value: 'TSHIRTS', label: 'T-Shirts', estimatedPrice: '$5-8' },
  { value: 'SPORTSWEAR', label: 'Sportswear', estimatedPrice: '$18-25' },
  { value: 'OTHER', label: 'Other Products', estimatedPrice: '$10-20' }
]

const COUNTRIES = [
  'Norway', 'Sweden', 'Denmark', 'Finland', 'Iceland',
  'United Kingdom', 'Ireland', 'Netherlands', 'Germany', 'Belgium',
  'France', 'Spain', 'Italy', 'Switzerland', 'Austria',
  'United States', 'Canada', 'Australia', 'New Zealand',
  'Other'
]

const QUANTITY_RANGES = [
  { value: '50-100', label: '50-100 pieces (Minimum Order)' },
  { value: '100-300', label: '100-300 pieces' },
  { value: '300-500', label: '300-500 pieces' },
  { value: '500-1000', label: '500-1,000 pieces' },
  { value: '1000-2500', label: '1,000-2,500 pieces' },
  { value: '2500+', label: '2,500+ pieces' }
]

export function EnhancedContactForm({ 
  title = "Get Your Custom Quote",
  subtitle = "Professional apparel manufacturing with low MOQs. Get a personalized quote in 24 hours.",
  defaultCategory,
  showPricing = true,
  className = ""
}: EnhancedContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    country: '',
    productCategory: defaultCategory || '',
    estimatedQuantity: '',
    message: '',
    urgentOrder: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const selectedCategory = PRODUCT_CATEGORIES.find(cat => cat.value === formData.productCategory)
  const estimatedValue = calculateEstimatedValue()

  function calculateEstimatedValue(): number {
    if (!formData.productCategory || !formData.estimatedQuantity) return 0
    
    const category = PRODUCT_CATEGORIES.find(cat => cat.value === formData.productCategory)
    if (!category) return 0
    
    // Extract base price from estimatedPrice string
    const priceMatch = category.estimatedPrice.match(/\$(\d+)-(\d+)/)
    if (!priceMatch) return 0
    
    const avgPrice = (parseInt(priceMatch[1]) + parseInt(priceMatch[2])) / 2
    
    // Extract quantity
    let quantity = 0
    if (formData.estimatedQuantity.includes('+')) {
      quantity = parseInt(formData.estimatedQuantity.split('+')[0])
    } else if (formData.estimatedQuantity.includes('-')) {
      const parts = formData.estimatedQuantity.split('-')
      quantity = (parseInt(parts[0]) + parseInt(parts[1])) / 2
    } else {
      quantity = parseInt(formData.estimatedQuantity)
    }
    
    return quantity * avgPrice
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          formType: 'enhanced_contact',
          pageUrl: window.location.href
        })
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        toast.success('Thank you! We\'ll send you a detailed quote within 24 hours.')
        
        // Track conversion event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            event_category: 'Lead',
            event_label: formData.productCategory,
            value: estimatedValue
          })
        }
      } else {
        throw new Error(result.error || 'Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Something went wrong. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className={`${className} border-green-200 bg-green-50`}>
        <CardContent className="p-8 text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Thank You for Your Inquiry!
          </h3>
          <p className="text-green-700 mb-4">
            We've received your request and will prepare a detailed quote for you.
          </p>
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span>Expected Response Time:</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Clock className="w-3 h-3 mr-1" />
                Within 24 hours
              </Badge>
            </div>
          </div>
          <p className="text-sm text-green-600">
            You'll receive a comprehensive quote including pricing, specifications, and production timeline.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Send className="h-5 w-5 text-blue-600" />
          {title}
        </CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Contact Information
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="John Smith"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company">Company/Organization *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  placeholder="School/Brand Name"
                />
              </div>
              <div>
                <Label htmlFor="country">Country *</Label>
                <Select 
                  value={formData.country} 
                  onValueChange={(value) => setFormData({ ...formData, country: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRIES.map((country) => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="website">Website (Optional)</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://www.yourwebsite.com"
                />
              </div>
            </div>
          </div>

          {/* Product Requirements */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 flex items-center">
              <Package className="w-4 h-4 mr-2" />
              Product Requirements
            </h4>

            <div>
              <Label htmlFor="productCategory">Product Category *</Label>
              <Select 
                value={formData.productCategory} 
                onValueChange={(value) => setFormData({ ...formData, productCategory: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select product type" />
                </SelectTrigger>
                <SelectContent>
                  {PRODUCT_CATEGORIES.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      <div className="flex justify-between w-full">
                        <span>{category.label}</span>
                        {showPricing && (
                          <Badge variant="outline" className="ml-2">
                            {category.estimatedPrice}
                          </Badge>
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="estimatedQuantity">Estimated Quantity *</Label>
              <Select 
                value={formData.estimatedQuantity} 
                onValueChange={(value) => setFormData({ ...formData, estimatedQuantity: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select quantity range" />
                </SelectTrigger>
                <SelectContent>
                  {QUANTITY_RANGES.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {estimatedValue > 0 && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-900">
                    Estimated Order Value:
                  </span>
                  <Badge className="bg-blue-100 text-blue-800 text-lg font-semibold">
                    ${estimatedValue.toLocaleString()}
                  </Badge>
                </div>
                <p className="text-xs text-blue-700 mt-1">
                  *Final pricing may vary based on specifications and customization
                </p>
              </div>
            )}
          </div>

          {/* Additional Details */}
          <div>
            <Label htmlFor="message">
              Project Details & Special Requirements *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              placeholder="Please describe your requirements: colors, sizes, special features, timeline, budget range, etc."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processing Your Request...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Send className="w-4 h-4 mr-2" />
                  Get My Custom Quote
                </div>
              )}
            </Button>
            
            <div className="flex items-center justify-center mt-3 text-xs text-gray-500">
              <AlertCircle className="w-3 h-3 mr-1" />
              We'll respond within 24 hours with a detailed quote
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
