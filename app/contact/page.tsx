
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'
import { Mail, Phone, MapPin, MessageCircle, Send, Building, Clock, ExternalLink } from 'lucide-react'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    productCategory: '',
    estimatedQuantity: '',
    message: ''
  })
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: 'Request Submitted Successfully!',
          description: result.message,
          duration: 5000
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          country: '',
          productCategory: '',
          estimatedQuantity: '',
          message: ''
        })
      } else {
        throw new Error(result.error || 'Failed to submit request')
      }
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: 'Please try again or contact us directly via WhatsApp.',
        variant: 'destructive'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const productCategories = [
    { value: 'SWEATERS', label: 'Sweaters' },
    { value: 'CARDIGANS', label: 'Cardigans' },
    { value: 'TSHIRTS', label: 'T-Shirts' },
    { value: 'POLOS', label: 'Polos' },
    { value: 'SPORTSWEAR', label: 'Sportswear' },
    { value: 'SCHOOL_UNIFORMS', label: 'School Uniforms' },
    { value: 'OTHER', label: 'Other' }
  ]

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-emerald-600" />,
      title: 'Primary Email',
      details: 'connect@knitcraftlabs.com',
      description: 'For general inquiries and project discussions'
    },
    {
      icon: <Mail className="w-6 h-6 text-emerald-600" />,
      title: 'Quote Requests',
      details: 'requestquote@knitcraftlabs.com',
      description: 'Dedicated email for pricing and quotes'
    },
    {
      icon: <Phone className="w-6 h-6 text-emerald-600" />,
      title: 'WhatsApp Business',
      details: '+880 1861 011367',
      description: 'Instant messaging and quick responses',
      action: () => window.open('https://wa.me/message/VG35GXG3RFPOD1', '_blank')
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-emerald-600" />,
      title: 'Enquiries',
      details: 'enquiry@knitcraftlabs.com',
      description: 'For specific product and service questions'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Get In <span className="text-emerald-600">Touch</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to bring your apparel vision to life? Contact our team for a free consultation 
              and discover how we can help your brand succeed with our manufacturing expertise.
            </p>
          </div>
          
          <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5a2825178fd4d28d140369eb/5eeab2b2-d3a1-45aa-89b3-435d2b20adfd/pexels-cottonbro-studio-4622226.jpg"
              alt="Design consultation meeting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
              <Badge className="bg-emerald-600 text-white text-lg px-6 py-2">
                <Clock className="w-5 h-5 mr-2" />
                Response within 1-2 business days
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 flex items-center">
                  <Send className="w-6 h-6 text-emerald-600 mr-3" />
                  Send Us Your Inquiry
                </CardTitle>
                <p className="text-slate-600">
                  Fill out the form below and we'll get back to you with detailed information about your project.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Brand Name</Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        type="text"
                        placeholder="Your country"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="productCategory">Product Category *</Label>
                      <Select value={formData.productCategory || 'none'} onValueChange={(value) => handleInputChange('productCategory', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select product type" />
                        </SelectTrigger>
                        <SelectContent>
                          {productCategories?.map((category) => (
                            <SelectItem key={category?.value} value={category?.value || 'none'}>
                              {category?.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estimatedQuantity">Estimated Quantity *</Label>
                      <Input
                        id="estimatedQuantity"
                        type="text"
                        placeholder="e.g., 100-500 pieces"
                        value={formData.estimatedQuantity}
                        onChange={(e) => handleInputChange('estimatedQuantity', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your requirements, including any specific design details, materials, timeline, or other important information..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-emerald-600 hover:bg-emerald-700" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
                    {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                  </Button>

                  <p className="text-sm text-slate-600 text-center">
                    By submitting this form, you agree to receive communications from KnitCraft Labs regarding your inquiry.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Multiple Ways to Reach Us
                </h2>
                <p className="text-slate-600 text-lg">
                  Choose the most convenient way to connect with our team. We're here to help with all your apparel manufacturing needs.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods?.map((method, index) => (
                  <Card 
                    key={index} 
                    className={`hover:shadow-lg transition-shadow ${method?.action ? 'cursor-pointer' : ''}`}
                    onClick={method?.action}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-emerald-50 rounded-lg">
                          {method?.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
                            {method?.title}
                            {method?.action && <ExternalLink className="w-4 h-4 ml-2 text-slate-500" />}
                          </h3>
                          <p className="text-emerald-600 font-medium mb-2">{method?.details}</p>
                          <p className="text-slate-600 text-sm">{method?.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick WhatsApp CTA */}
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-500 rounded-full">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-2">Need Quick Answers?</h3>
                      <p className="text-slate-600 text-sm mb-3">Connect with us instantly on WhatsApp for immediate responses.</p>
                      <Button 
                        size="sm" 
                        className="bg-green-500 hover:bg-green-600"
                        onClick={() => window.open('https://wa.me/message/VG35GXG3RFPOD1', '_blank')}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp QR Code */}
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Scan & Connect Instantly</h3>
                  <p className="text-slate-300 mb-6">Scan this QR code with your phone to start a WhatsApp conversation with Sleek Apparels Limited</p>
                  
                  <div className="relative w-64 h-64 mx-auto mb-6 bg-white rounded-2xl p-4">
                    <Image
                      src="/images/whatsapp-qr.png"
                      alt="WhatsApp QR Code - Sleek Apparels Limited"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-emerald-400">Sleek Apparels Limited</h4>
                    <p className="text-slate-300">WhatsApp Business Account</p>
                    <p className="text-sm text-slate-400 mt-2">Scan this code to start a WhatsApp chat with us</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Locations */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Global Presence</h2>
            <p className="text-xl text-slate-600">
              Strategic locations to serve our international clientele effectively
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Building className="w-8 h-8 text-emerald-600" />
                  <div>
                    <Badge className="mb-2 bg-blue-100 text-blue-800">Manufacturing Hub</Badge>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Sleek Apparels Limited
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-slate-700 font-medium">House 1, Road 19/A, Sector 4</p>
                      <p className="text-slate-700">Uttara, Dhaka 1230, Bangladesh</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mt-4">
                    Our primary manufacturing facility equipped with modern machinery and skilled artisans 
                    delivering world-class apparel products with ethical production practices.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Building className="w-8 h-8 text-emerald-600" />
                  <div>
                    <Badge className="mb-2 bg-green-100 text-green-800">Business Operations</Badge>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Sleek Apparels LLC
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-slate-700 font-medium">Kentucky, USA</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mt-4">
                    Our US-based entity facilitating seamless business operations, client relations, 
                    and strategic partnerships across North America with local market expertise.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
