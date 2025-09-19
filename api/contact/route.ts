
export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, country, productCategory, estimatedQuantity, message } = body

    // Validate required fields
    if (!name || !email || !country || !productCategory || !estimatedQuantity || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate product category
    const validCategories = ['SWEATERS', 'CARDIGANS', 'TSHIRTS', 'POLOS', 'SPORTSWEAR', 'UNIFORMS', 'OTHER']
    if (!validCategories.includes(productCategory)) {
      return NextResponse.json(
        { error: 'Invalid product category' },
        { status: 400 }
      )
    }

    // Save to database
    const inquiry = await prisma.contactInquiry.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: company ? company.trim() : null,
        country: country.trim(),
        productCategory,
        estimatedQuantity: estimatedQuantity.trim(),
        message: message.trim(),
        status: 'NEW'
      }
    })

    // Here you would typically send an email notification
    // For now, we'll just log it
    console.log('New inquiry received:', {
      id: inquiry.id,
      name: inquiry.name,
      email: inquiry.email,
      company: inquiry.company,
      productCategory: inquiry.productCategory
    })

    return NextResponse.json({
      success: true,
      message: "We've received your request. We'll reply within 1–2 business days.",
      inquiryId: inquiry.id
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
