
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

function generateQuoteNumber() {
  const date = new Date()
  const year = date.getFullYear().toString().slice(-2)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  return `QT${year}${month}${random}`
}

export async function GET() {
  try {
    const quotes = await prisma.quote.findMany({
      include: {
        lead: true,
        customer: true,
        items: {
          include: {
            product: true
          }
        },
        order: true
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(quotes)
  } catch (error) {
    console.error('Error fetching quotes:', error)
    return NextResponse.json({ error: 'Failed to fetch quotes' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const quote = await prisma.quote.create({
      data: {
        quoteNumber: generateQuoteNumber(),
        status: 'DRAFT',
        totalAmount: data.totalAmount,
        validUntil: new Date(data.validUntil),
        terms: data.terms,
        notes: data.notes,
        leadId: data.leadId,
        items: {
          create: data.items
        }
      },
      include: {
        lead: true,
        items: {
          include: {
            product: true
          }
        }
      }
    })

    return NextResponse.json(quote, { status: 201 })
  } catch (error) {
    console.error('Error creating quote:', error)
    return NextResponse.json({ error: 'Failed to create quote' }, { status: 500 })
  }
}
