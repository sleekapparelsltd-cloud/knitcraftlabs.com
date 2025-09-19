
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create sample products
  const products = [
    {
      name: 'Premium Cotton Crew Neck Sweater',
      category: 'SWEATERS' as any,
      description: 'High-quality cotton crew neck sweater perfect for school uniforms and casual wear',
      specifications: 'Material: 100% Cotton\nWeight: 280 GSM\nSizes: XS-XXL\nColors: Navy, Black, Grey, White',
      materials: '100% Cotton',
      colors: ['Navy', 'Black', 'Grey', 'White', 'Maroon'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      minimumMOQ: 100,
      unitPrice: 12.50,
      setupCost: 250.00,
      leadTime: 21,
      isActive: true
    },
    {
      name: 'Wool Blend V-Neck Cardigan',
      category: 'CARDIGANS' as any,
      description: 'Professional wool blend cardigan ideal for school and corporate uniforms',
      specifications: 'Material: 70% Wool, 30% Acrylic\nWeight: 320 GSM\nSizes: XS-XXL',
      materials: '70% Wool, 30% Acrylic',
      colors: ['Navy', 'Black', 'Grey', 'Burgundy'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      minimumMOQ: 50,
      unitPrice: 18.75,
      setupCost: 300.00,
      leadTime: 28,
      isActive: true
    },
    {
      name: 'Performance Polo Shirt',
      category: 'POLOS' as any,
      description: 'Moisture-wicking polo shirt perfect for school sports uniforms',
      specifications: 'Material: 65% Polyester, 35% Cotton\nWeight: 220 GSM\nFeatures: Moisture-wicking',
      materials: '65% Polyester, 35% Cotton',
      colors: ['Navy', 'Red', 'White', 'Royal Blue', 'Forest Green'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      minimumMOQ: 100,
      unitPrice: 8.95,
      setupCost: 150.00,
      leadTime: 14,
      isActive: true
    },
    {
      name: 'Classic Cotton T-Shirt',
      category: 'TSHIRTS' as any,
      description: 'Comfortable cotton t-shirt suitable for casual uniforms and promotional wear',
      specifications: 'Material: 100% Cotton\nWeight: 180 GSM\nFit: Regular',
      materials: '100% Cotton',
      colors: ['White', 'Black', 'Navy', 'Red', 'Grey'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      minimumMOQ: 150,
      unitPrice: 6.25,
      setupCost: 100.00,
      leadTime: 10,
      isActive: true
    },
    {
      name: 'School Uniform Blazer',
      category: 'UNIFORMS' as any,
      description: 'Traditional school blazer with customizable badges and embroidery',
      specifications: 'Material: 65% Polyester, 35% Viscose\nLining: Full lined\nFeatures: Custom badges',
      materials: '65% Polyester, 35% Viscose',
      colors: ['Navy', 'Black', 'Bottle Green', 'Maroon'],
      sizes: ['Age 7-8', 'Age 9-10', 'Age 11-12', 'Age 13-14', 'Age 15-16', 'Adult S-XXL'],
      minimumMOQ: 50,
      unitPrice: 35.00,
      setupCost: 500.00,
      leadTime: 35,
      isActive: true
    },
    {
      name: 'Athletic Track Suit',
      category: 'SPORTSWEAR' as any,
      description: 'Complete track suit for school sports and PE uniforms',
      specifications: 'Material: 100% Polyester\nFeatures: Breathable, Quick-dry\nIncludes: Jacket and pants',
      materials: '100% Polyester',
      colors: ['Navy/White', 'Red/Black', 'Royal Blue/White'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      minimumMOQ: 75,
      unitPrice: 22.50,
      setupCost: 350.00,
      leadTime: 21,
      isActive: true
    },
    {
      name: 'Knitted Vest/Waistcoat',
      category: 'SWEATERS' as any,
      description: 'Classic knitted vest perfect for formal school uniforms',
      specifications: 'Material: 100% Acrylic\nWeight: 240 GSM\nStyle: V-neck, sleeveless',
      materials: '100% Acrylic',
      colors: ['Navy', 'Grey', 'Maroon', 'Forest Green'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      minimumMOQ: 100,
      unitPrice: 9.75,
      setupCost: 200.00,
      leadTime: 18,
      isActive: true
    },
    {
      name: 'Custom Hoodie',
      category: 'OTHER' as any,
      description: 'Comfortable hooded sweatshirt with custom branding options',
      specifications: 'Material: 80% Cotton, 20% Polyester\nWeight: 320 GSM\nFeatures: Kangaroo pocket',
      materials: '80% Cotton, 20% Polyester',
      colors: ['Black', 'Navy', 'Grey', 'White', 'Red'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      minimumMOQ: 50,
      unitPrice: 16.25,
      setupCost: 275.00,
      leadTime: 21,
      isActive: true
    }
  ]

  console.log('Creating products...')
  // Clear existing products first
  await prisma.product.deleteMany({})
  
  for (const product of products) {
    await prisma.product.create({
      data: product
    })
  }

  // Create sample business metrics
  const businessMetrics = [
    {
      metricType: 'REVENUE',
      metricName: 'Monthly Revenue',
      value: 15000,
      period: 'MONTHLY',
      periodStart: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      periodEnd: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
    },
    {
      metricType: 'CONVERSION_RATE',
      metricName: 'Lead to Customer',
      value: 22.5,
      period: 'MONTHLY',
      periodStart: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      periodEnd: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
    }
  ]

  console.log('Creating business metrics...')
  // Clear existing metrics first
  await prisma.businessMetric.deleteMany({})
  
  for (const metric of businessMetrics) {
    await prisma.businessMetric.create({
      data: metric
    })
  }

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
