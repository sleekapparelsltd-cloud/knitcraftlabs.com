
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  UserCheck,
  Plus,
  Search,
  Filter,
  Mail,
  Phone,
  Globe,
  Calendar,
  MessageSquare,
  FileText,
  ShoppingCart,
  Building,
  DollarSign,
  TrendingUp,
  Users,
  Package
} from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts'

interface Customer {
  id: string
  name: string
  email: string
  company: string
  country: string
  phone?: string | null
  website?: string | null
  address?: string | null
  businessType?: string | null
  establishedYear?: number | null
  teamSize?: string | null
  annualVolume?: string | null
  preferredMOQ?: string | null
  status: string
  lifecycleValue?: number | null
  totalOrderValue: number
  lastOrderDate?: Date | null
  notes?: string | null
  createdAt: Date
  updatedAt: Date
  lead: any
  quotes: any[]
  orders: any[]
  communications: any[]
}

interface CustomerManagementProps {
  customers: Customer[]
  customerStats: { status: string; count: number }[]
}

const CUSTOMER_STATUSES = [
  { value: 'PROSPECT', label: 'Prospect', color: 'bg-blue-500' },
  { value: 'ACTIVE', label: 'Active', color: 'bg-green-500' },
  { value: 'INACTIVE', label: 'Inactive', color: 'bg-yellow-500' },
  { value: 'CHURNED', label: 'Churned', color: 'bg-red-500' }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export function CustomerManagement({ customers, customerStats }: CustomerManagementProps) {
  const [filteredCustomers, setFilteredCustomers] = useState(customers)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false)

  useEffect(() => {
    let filtered = customers

    if (searchTerm) {
      filtered = filtered.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.company.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(customer => customer.status === statusFilter)
    }

    setFilteredCustomers(filtered)
  }, [customers, searchTerm, statusFilter])

  const getStatusBadge = (status: string) => {
    const statusConfig = CUSTOMER_STATUSES.find(s => s.value === status)
    return (
      <Badge variant="secondary" className={`text-white ${statusConfig?.color || 'bg-gray-500'}`}>
        {statusConfig?.label || status}
      </Badge>
    )
  }

  const getCustomerValue = (customer: Customer) => {
    return customer.totalOrderValue || 0
  }

  const getTotalRevenue = () => {
    return customers.reduce((sum, customer) => sum + getCustomerValue(customer), 0)
  }

  const getActiveCustomers = () => {
    return customers.filter(customer => customer.status === 'ACTIVE').length
  }

  const statusChartData = customerStats.map(stat => ({
    name: CUSTOMER_STATUSES.find(s => s.value === stat.status)?.label || stat.status,
    value: stat.count
  }))

  const topCustomers = [...customers]
    .sort((a, b) => getCustomerValue(b) - getCustomerValue(a))
    .slice(0, 5)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Customer Management</h2>
          <p className="text-muted-foreground">
            Manage relationships and track customer lifetime value
          </p>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{customers.length}</div>
            <p className="text-xs text-muted-foreground">
              +8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{getActiveCustomers()}</div>
            <p className="text-xs text-muted-foreground">
              {customers.length > 0 ? ((getActiveCustomers() / customers.length) * 100).toFixed(1) : 0}% of total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${getTotalRevenue().toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +22% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Customer Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${customers.length > 0 ? (getTotalRevenue() / customers.length).toLocaleString() : 0}
            </div>
            <p className="text-xs text-muted-foreground">
              Per customer
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Customer Status Distribution</CardTitle>
            <CardDescription>Current customer lifecycle distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Customers by Value</CardTitle>
            <CardDescription>Highest revenue generating customers</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topCustomers.map(c => ({ name: c.name, value: c.totalOrderValue }))}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Revenue']} />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Customer List */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Database</CardTitle>
          <CardDescription>Complete customer relationship management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                {CUSTOMER_STATUSES.map(status => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Customers Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total Value</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Last Order</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{customer.name}</div>
                        <div className="text-sm text-muted-foreground">{customer.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>{customer.company}</TableCell>
                    <TableCell>{customer.country}</TableCell>
                    <TableCell>{getStatusBadge(customer.status)}</TableCell>
                    <TableCell>
                      <div className="font-medium">${getCustomerValue(customer).toLocaleString()}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                        {customer.orders.length}
                      </div>
                    </TableCell>
                    <TableCell>
                      {customer.lastOrderDate 
                        ? new Date(customer.lastOrderDate).toLocaleDateString()
                        : 'Never'
                      }
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedCustomer(customer)
                            setIsDetailDialogOpen(true)
                          }}
                        >
                          View
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                        >
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {filteredCustomers.length === 0 && (
              <div className="text-center py-12">
                <UserCheck className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-semibold text-gray-900">No customers found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {searchTerm || statusFilter !== 'all'
                    ? 'Try adjusting your filters'
                    : 'Customers will appear here when leads convert'
                  }
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Customer Detail Dialog */}
      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Customer Details</DialogTitle>
            <DialogDescription>
              Complete customer information and relationship history
            </DialogDescription>
          </DialogHeader>
          {selectedCustomer && (
            <CustomerDetail 
              customer={selectedCustomer}
              onClose={() => {
                setIsDetailDialogOpen(false)
                setSelectedCustomer(null)
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Customer Detail Component
function CustomerDetail({ customer, onClose }: { customer: Customer; onClose: () => void }) {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="communications">Communications</TabsTrigger>
        <TabsTrigger value="quotes">Quotes</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-4 mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Contact Information</Label>
            <div className="space-y-1 text-sm">
              <div><strong>Name:</strong> {customer.name}</div>
              <div><strong>Email:</strong> {customer.email}</div>
              <div><strong>Phone:</strong> {customer.phone || 'Not provided'}</div>
              <div><strong>Website:</strong> {customer.website || 'Not provided'}</div>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Company Information</Label>
            <div className="space-y-1 text-sm">
              <div><strong>Company:</strong> {customer.company}</div>
              <div><strong>Country:</strong> {customer.country}</div>
              <div><strong>Business Type:</strong> {customer.businessType || 'Not specified'}</div>
              <div><strong>Team Size:</strong> {customer.teamSize || 'Not specified'}</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Business Metrics</Label>
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">${customer.totalOrderValue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Total Order Value</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">{customer.orders.length}</div>
                <p className="text-xs text-muted-foreground">Total Orders</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">{customer.quotes.length}</div>
                <p className="text-xs text-muted-foreground">Total Quotes</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {customer.notes && (
          <div className="space-y-2">
            <Label className="text-sm font-medium">Notes</Label>
            <div className="p-3 bg-gray-50 rounded-md text-sm">
              {customer.notes}
            </div>
          </div>
        )}
      </TabsContent>

      <TabsContent value="orders" className="space-y-4 mt-4">
        <div className="space-y-2">
          {customer.orders.length > 0 ? (
            customer.orders.map((order: any) => (
              <div key={order.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium">Order #{order.orderNumber}</div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${order.totalAmount.toLocaleString()}</div>
                    <Badge>{order.status}</Badge>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground py-8">No orders yet</p>
          )}
        </div>
      </TabsContent>

      <TabsContent value="communications" className="space-y-4 mt-4">
        <div className="space-y-2">
          {customer.communications.length > 0 ? (
            customer.communications.map((comm: any) => (
              <div key={comm.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium">{comm.subject || comm.type}</div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(comm.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <Badge variant="outline">{comm.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{comm.content}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground py-8">No communications yet</p>
          )}
        </div>
      </TabsContent>

      <TabsContent value="quotes" className="space-y-4 mt-4">
        <div className="space-y-2">
          {customer.quotes.length > 0 ? (
            customer.quotes.map((quote: any) => (
              <div key={quote.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium">Quote #{quote.quoteNumber}</div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(quote.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${quote.totalAmount.toLocaleString()}</div>
                    <Badge>{quote.status}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Valid until: {new Date(quote.validUntil).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground py-8">No quotes yet</p>
          )}
        </div>
      </TabsContent>
      
      <DialogFooter className="mt-6">
        <Button onClick={onClose}>Close</Button>
      </DialogFooter>
    </Tabs>
  )
}
