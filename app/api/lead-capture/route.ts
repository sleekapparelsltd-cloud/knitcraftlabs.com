
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { trackEvent } from '@/lib/business/analytics'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Create contact inquiry first
    const inquiry = await prisma.contactInquiry.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company,
        country: data.country,
        productCategory: data.productCategory,
        estimatedQuantity: data.estimatedQuantity,
        message: data.message,
        formType: data.formType || 'contact',
        status: 'NEW'
      }
    })

    // Check if lead already exists with this email
    let lead = await prisma.lead.findUnique({
      where: { email: data.email }
    })

    if (!lead) {
      // Create new lead
      const leadScore = calculateLeadScore(data)
      
      lead = await prisma.lead.create({
        data: {
          name: data.name,
          email: data.email,
          company: data.company || undefined,
          country: data.country || undefined,
          phone: data.phone || undefined,
          website: data.website || undefined,
          source: determineLeadSource(request) as any,
          status: 'NEW',
          score: leadScore,
          estimatedValue: estimateLeadValue(data),
          notes: `Initial inquiry: ${data.message}`,
          lastContactDate: new Date()
        }
      })

      // Track lead creation event
      await trackEvent({
        type: 'CONTACT_FORM',
        eventName: 'Lead Created',
        properties: {
          leadId: lead.id,
          source: lead.source,
          category: data.productCategory,
          score: leadScore
        },
        leadId: lead.id,
        userAgent: request.headers.get('user-agent') || undefined,
        ipAddress: request.ip || request.headers.get('x-forwarded-for') || undefined,
        referrer: request.headers.get('referer') || undefined,
        pageUrl: data.pageUrl
      })
    } else {
      // Update existing lead
      lead = await prisma.lead.update({
        where: { id: lead.id },
        data: {
          lastContactDate: new Date(),
          notes: lead.notes ? `${lead.notes}\n\nNew inquiry: ${data.message}` : `New inquiry: ${data.message}`
        }
      })
    }

    // Link inquiry to lead
    await prisma.contactInquiry.update({
      where: { id: inquiry.id },
      data: { leadId: lead.id }
    })

    // Send notification email (you can implement this later)
    // await sendLeadNotification(lead, inquiry)

    return NextResponse.json({ 
      message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
      success: true,
      leadId: lead.id
    })

  } catch (error) {
    console.error('Error processing lead capture:', error)
    return NextResponse.json(
      { error: 'Failed to process your inquiry. Please try again.' },
      { status: 500 }
    )
  }
}

function calculateLeadScore(data: any): number {
  let score = 0
  
  // Base score for making contact
  score += 10
  
  // Company provided
  if (data.company && data.company.trim() !== '') {
    score += 20
  }
  
  // Phone number provided
  if (data.phone && data.phone.trim() !== '') {
    score += 15
  }
  
  // Website provided
  if (data.website && data.website.trim() !== '') {
    score += 10
  }
  
  // Product category scoring
  if (['UNIFORMS', 'SWEATERS'].includes(data.productCategory)) {
    score += 15 // Higher value categories
  } else {
    score += 5
  }
  
  // Quantity scoring
  const quantity = parseInt(data.estimatedQuantity)
  if (quantity >= 1000) {
    score += 25
  } else if (quantity >= 500) {
    score += 15
  } else if (quantity >= 100) {
    score += 10
  }
  
  // Message quality (basic scoring)
  if (data.message && data.message.length > 50) {
    score += 10
  }
  
  return Math.min(score, 100)
}

function determineLeadSource(request: NextRequest): string {
  const referer = request.headers.get('referer') || ''
  const userAgent = request.headers.get('user-agent') || ''
  
  if (referer.includes('google')) {
    return 'GOOGLE_ADS'
  } else if (referer.includes('linkedin')) {
    return 'LINKEDIN'
  } else if (referer.includes('facebook') || referer.includes('instagram')) {
    return 'SOCIAL_MEDIA'
  } else {
    return 'WEBSITE'
  }
}

function estimateLeadValue(data: any): number | null {
  const quantity = parseInt(data.estimatedQuantity) || 0
  
  // Basic estimation based on product category and quantity
  let basePrice = 0
  
  switch (data.productCategory) {
    case 'UNIFORMS':
      basePrice = 25
      break
    case 'SWEATERS':
      basePrice = 15
      break
    case 'CARDIGANS':
      basePrice = 18
      break
    case 'POLOS':
      basePrice = 9
      break
    case 'TSHIRTS':
      basePrice = 6
      break
    case 'SPORTSWEAR':
      basePrice = 20
      break
    default:
      basePrice = 12
  }
  
  return quantity > 0 ? quantity * basePrice : null
}
