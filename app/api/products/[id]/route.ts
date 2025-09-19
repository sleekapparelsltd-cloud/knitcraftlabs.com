
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: params.id,
        isActive: true
      },
      select: {
        id: true,
        name: true,
        category: true,
        description: true,
        unitPrice: true,
        minimumMOQ: true,
        leadTime: true,
        imageUrl: true,
        materials: true,
        colors: true,
        sizes: true,
        specifications: true,
        setupCost: true,
        isActive: true,
        createdAt: true,
        updatedAt: true
      }
    })

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}
