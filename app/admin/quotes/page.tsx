
import { AdminLayout } from '@/components/admin/admin-layout'
import { QuoteManagement } from '@/components/admin/quote-management'
import { prisma } from '@/lib/prisma'

export default async function QuotesPage() {
  const quotes = await prisma.quote.findMany({
    include: {
      lead: true,
      customer: true,
      items: {
        include: {
          product: true
        }
      },
      order: true
    },
    orderBy: { createdAt: 'desc' }
  })

  const products = await prisma.product.findMany({
    where: { isActive: true },
    orderBy: { name: 'asc' }
  })

  const leads = await prisma.lead.findMany({
    where: { status: { in: ['QUALIFIED', 'PROPOSAL_SENT', 'NEGOTIATION'] } },
    orderBy: { name: 'asc' }
  })

  const quoteStats = await prisma.quote.groupBy({
    by: ['status'],
    _count: { id: true }
  })

  return (
    <AdminLayout>
      <QuoteManagement 
        quotes={quotes}
        products={products}
        leads={leads}
        quoteStats={quoteStats.map(s => ({ status: s.status, count: s._count.id }))}
      />
    </AdminLayout>
  )
}
