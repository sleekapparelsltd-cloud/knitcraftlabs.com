
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const quote = await prisma.quote.findUnique({
      where: { id: params.id },
      include: {
        lead: true,
        customer: true,
        items: {
          include: {
            product: true
          }
        },
        order: true
      }
    })

    if (!quote) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 })
    }

    return NextResponse.json(quote)
  } catch (error) {
    console.error('Error fetching quote:', error)
    return NextResponse.json({ error: 'Failed to fetch quote' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await request.json()

    const quote = await prisma.quote.update({
      where: { id: params.id },
      data: {
        status: data.status,
        totalAmount: data.totalAmount,
        validUntil: data.validUntil ? new Date(data.validUntil) : undefined,
        terms: data.terms,
        notes: data.notes,
        sentDate: data.status === 'SENT' ? new Date() : undefined,
        respondedDate: ['ACCEPTED', 'REJECTED'].includes(data.status) ? new Date() : undefined
      }
    })

    return NextResponse.json(quote)
  } catch (error) {
    console.error('Error updating quote:', error)
    return NextResponse.json({ error: 'Failed to update quote' }, { status: 500 })
  }
}
