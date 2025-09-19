
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')
    
    const products = await prisma.product.findMany({
      where: {
        isActive: true,
        ...(category && { category: category as any })
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
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}
