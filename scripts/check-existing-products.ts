
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function checkExistingProducts() {
  try {
    const products = await prisma.product.findMany()
    console.log('Existing products:', JSON.stringify(products, null, 2))
    console.log(`Found ${products.length} products`)
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkExistingProducts()
