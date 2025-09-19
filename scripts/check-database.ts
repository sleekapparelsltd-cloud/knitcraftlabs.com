
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const prisma = new PrismaClient()

async function checkDatabase() {
  try {
    console.log('Checking database contents...')
    
    // Check Contact Inquiries
    const inquiries = await prisma.contactInquiry.findMany()
    console.log(`Contact Inquiries: ${inquiries.length}`)
    
    // Check Leads
    const leads = await prisma.lead.findMany()
    console.log(`Leads: ${leads.length}`)
    
    // Check Customers
    const customers = await prisma.customer.findMany()
    console.log(`Customers: ${customers.length}`)
    
    // Check Products
    const products = await prisma.product.findMany()
    console.log(`Products: ${products.length}`)
    
    // Check Users
    const users = await prisma.user.findMany()
    console.log(`Users: ${users.length}`)
    
    // Check Analytics Events
    const analytics = await prisma.analyticsEvent.findMany()
    console.log(`Analytics Events: ${analytics.length}`)
    
    console.log('Database check complete!')
  } catch (error) {
    console.error('Error checking database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkDatabase()
