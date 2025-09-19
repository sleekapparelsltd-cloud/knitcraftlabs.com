
import { AdminLayout } from '@/components/admin/admin-layout'
import { CustomerManagement } from '@/components/admin/customer-management'
import { prisma } from '@/lib/prisma'

export default async function CustomersPage() {
  const customers = await prisma.customer.findMany({
    include: {
      lead: true,
      quotes: {
        orderBy: { createdAt: 'desc' },
        take: 5
      },
      orders: {
        orderBy: { createdAt: 'desc' },
        take: 5
      },
      communications: {
        orderBy: { createdAt: 'desc' },
        take: 5
      }
    },
    orderBy: { createdAt: 'desc' }
  })

  const customerStats = await prisma.customer.groupBy({
    by: ['status'],
    _count: { id: true }
  })

  return (
    <AdminLayout>
      <CustomerManagement 
        customers={customers}
        customerStats={customerStats.map(s => ({ status: s.status, count: s._count.id }))}
      />
    </AdminLayout>
  )
}
