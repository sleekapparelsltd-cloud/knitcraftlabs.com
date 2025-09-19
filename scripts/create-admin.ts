
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function createAdmin() {
  try {
    // Check if admin already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: 'admin@knitcraftlabs.com' }
    })

    if (existingAdmin) {
      console.log('Admin user already exists!')
      return
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash('KnitCraft2025!', 12)

    // Create admin user
    const admin = await prisma.user.create({
      data: {
        email: 'admin@knitcraftlabs.com',
        firstName: 'Admin',
        lastName: 'KnitCraft',
        password: hashedPassword,
        role: 'ADMIN',
        isActive: true
      }
    })

    console.log('Admin user created successfully!')
    console.log('Email: admin@knitcraftlabs.com')
    console.log('Password: KnitCraft2025!')
    console.log('Admin ID:', admin.id)

  } catch (error) {
    console.error('Error creating admin user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createAdmin()
