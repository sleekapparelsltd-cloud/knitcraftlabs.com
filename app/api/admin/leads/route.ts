
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { adminMiddleware } from '../middleware'

export const dynamic = 'force-dynamic'

export async function GET() {
export async function GET(req: NextRequest) {
  const middlewareResponse = await adminMiddleware(req)
  if (middlewareResponse.status !== 200) {
    return middlewareResponse
  }
  try {
    const leads = await prisma.lead.findMany({
      include: {
        customer: true,
        quotes: true,
        communications: {
          orderBy: { createdAt: 'desc' },
          take: 3
        },
        inquiries: true
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(leads)
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const middlewareResponse = await adminMiddleware(request)
  if (middlewareResponse.status !== 200) {
    return middlewareResponse
  }
  try {
    const data = await request.json()

    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company,
        country: data.country,
        phone: data.phone,
        website: data.website,
        linkedinUrl: data.linkedinUrl,
        source: data.source,
        status: data.status,
        estimatedValue: data.estimatedValue,
        notes: data.notes,
        nextFollowUpDate: data.nextFollowUpDate
      }
    })

    return NextResponse.json(lead, { status: 201 })
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 })
  }
}
