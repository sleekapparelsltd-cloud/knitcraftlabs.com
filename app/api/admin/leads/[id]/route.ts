
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const lead = await prisma.lead.findUnique({
      where: { id: params.id },
      include: {
        customer: true,
        quotes: true,
        communications: {
          orderBy: { createdAt: 'desc' }
        },
        inquiries: true
      }
    })

    if (!lead) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
    }

    return NextResponse.json(lead)
  } catch (error) {
    console.error('Error fetching lead:', error)
    return NextResponse.json({ error: 'Failed to fetch lead' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await request.json()

    const lead = await prisma.lead.update({
      where: { id: params.id },
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
        nextFollowUpDate: data.nextFollowUpDate,
        lastContactDate: new Date()
      }
    })

    return NextResponse.json(lead)
  } catch (error) {
    console.error('Error updating lead:', error)
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.lead.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ message: 'Lead deleted successfully' })
  } catch (error) {
    console.error('Error deleting lead:', error)
    return NextResponse.json({ error: 'Failed to delete lead' }, { status: 500 })
  }
}
