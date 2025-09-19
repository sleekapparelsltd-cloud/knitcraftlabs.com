
import { prisma } from '@/lib/prisma'

export interface BusinessMetrics {
  totalLeads: number
  totalCustomers: number
  totalQuotes: number
  totalOrders: number
  totalRevenue: number
  conversionRate: number
  averageOrderValue: number
  recentActivity: any[]
  leadsBySource: { [key: string]: number }
  ordersByStatus: { [key: string]: number }
  monthlyRevenue: { month: string; revenue: number }[]
  topCustomers: any[]
}

export async function getBusinessMetrics(period: 'week' | 'month' | 'quarter' | 'year' = 'month'): Promise<BusinessMetrics> {
  const now = new Date()
  let startDate: Date

  switch (period) {
    case 'week':
      startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
      break
    case 'month':
      startDate = new Date(now.getFullYear(), now.getMonth(), 1)
      break
    case 'quarter':
      startDate = new Date(now.getFullYear(), Math.floor(now.getMonth() / 3) * 3, 1)
      break
    case 'year':
      startDate = new Date(now.getFullYear(), 0, 1)
      break
  }

  const [
    totalLeads,
    totalCustomers,
    totalQuotes,
    totalOrders,
    orders,
    leads,
    customers
  ] = await Promise.all([
    prisma.lead.count({
      where: { createdAt: { gte: startDate } }
    }),
    prisma.customer.count({
      where: { createdAt: { gte: startDate } }
    }),
    prisma.quote.count({
      where: { createdAt: { gte: startDate } }
    }),
    prisma.order.count({
      where: { createdAt: { gte: startDate } }
    }),
    prisma.order.findMany({
      where: { createdAt: { gte: startDate } },
      select: {
        totalAmount: true,
        status: true,
        createdAt: true,
        customer: {
          select: { name: true, company: true }
        }
      }
    }),
    prisma.lead.findMany({
      where: { createdAt: { gte: startDate } },
      select: { source: true, status: true }
    }),
    prisma.customer.findMany({
      where: { createdAt: { gte: startDate } },
      select: {
        name: true,
        company: true,
        totalOrderValue: true,
        orders: {
          select: { totalAmount: true }
        }
      },
      orderBy: { totalOrderValue: 'desc' },
      take: 10
    })
  ])

  const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0)
  const averageOrderValue = orders.length > 0 ? totalRevenue / orders.length : 0
  const conversionRate = totalLeads > 0 ? (totalCustomers / totalLeads) * 100 : 0

  // Group leads by source
  const leadsBySource = leads.reduce((acc: { [key: string]: number }, lead) => {
    acc[lead.source] = (acc[lead.source] || 0) + 1
    return acc
  }, {})

  // Group orders by status
  const ordersByStatus = orders.reduce((acc: { [key: string]: number }, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1
    return acc
  }, {})

  // Monthly revenue (last 6 months)
  const monthlyRevenue = []
  for (let i = 5; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1)
    const nextMonth = new Date(now.getFullYear(), now.getMonth() - i + 1, 1)
    
    const monthOrders = await prisma.order.findMany({
      where: {
        createdAt: {
          gte: date,
          lt: nextMonth
        }
      }
    })
    
    monthlyRevenue.push({
      month: date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      revenue: monthOrders.reduce((sum, order) => sum + order.totalAmount, 0)
    })
  }

  // Recent activity
  const recentActivity = await prisma.contactInquiry.findMany({
    take: 10,
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      company: true,
      productCategory: true,
      createdAt: true,
      status: true
    }
  })

  return {
    totalLeads,
    totalCustomers,
    totalQuotes,
    totalOrders,
    totalRevenue,
    conversionRate,
    averageOrderValue,
    recentActivity,
    leadsBySource,
    ordersByStatus,
    monthlyRevenue,
    topCustomers: customers
  }
}

export async function trackEvent(data: {
  type: string
  eventName: string
  properties?: any
  leadId?: string
  userId?: string
  sessionId?: string
  userAgent?: string
  ipAddress?: string
  country?: string
  referrer?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  pageUrl?: string
}) {
  return prisma.analyticsEvent.create({
    data: {
      type: data.type as any,
      eventName: data.eventName,
      properties: data.properties || {},
      leadId: data.leadId,
      userId: data.userId,
      sessionId: data.sessionId,
      userAgent: data.userAgent,
      ipAddress: data.ipAddress,
      country: data.country,
      referrer: data.referrer,
      utmSource: data.utmSource,
      utmMedium: data.utmMedium,
      utmCampaign: data.utmCampaign,
      pageUrl: data.pageUrl
    }
  })
}
