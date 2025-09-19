
import { AdminLayout } from '@/components/admin/admin-layout'
import { LeadManagement } from '@/components/admin/lead-management'
import { prisma } from '@/lib/prisma'

export default async function LeadsPage() {
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

  const leadSources = await prisma.lead.groupBy({
    by: ['source'],
    _count: { id: true }
  })

  const leadStatuses = await prisma.lead.groupBy({
    by: ['status'],
    _count: { id: true }
  })

  return (
    <AdminLayout>
      <LeadManagement 
        leads={leads} 
        leadSources={leadSources.map(s => ({ source: s.source, count: s._count.id }))}
        leadStatuses={leadStatuses.map(s => ({ status: s.status, count: s._count.id }))}
      />
    </AdminLayout>
  )
}
