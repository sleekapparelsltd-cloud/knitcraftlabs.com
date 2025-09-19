
import { AdminLayout } from '@/components/admin/admin-layout'
import { DashboardOverview } from '@/components/admin/dashboard-overview'
import { getBusinessMetrics } from '@/lib/business/analytics'

export default async function AdminDashboard() {
  const metrics = await getBusinessMetrics('month')

  return (
    <AdminLayout>
      <DashboardOverview metrics={metrics} />
    </AdminLayout>
  )
}
