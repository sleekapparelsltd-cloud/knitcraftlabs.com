
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
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  FileText,
  Plus,
  Search,
  Filter,
  Send,
  Eye,
  Edit,
  Trash2,
  Download,
  DollarSign,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle
} from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

interface Quote {
  id: string
  quoteNumber: string
  status: string
  totalAmount: number
  validUntil: Date
  terms?: string | null
  notes?: string | null
  sentDate?: Date | null
  respondedDate?: Date | null
  createdAt: Date
  updatedAt: Date
  lead: any
  customer?: any
  items: QuoteItem[]
  order?: any
}

interface QuoteItem {
  id: string
  quantity: number
  unitPrice: number
  totalPrice: number
  specifications?: string | null
  notes?: string | null
  product: any
}

interface Product {
  id: string
  name: string
  category: string
  unitPrice: number
  minimumMOQ: number
  leadTime: number
}

interface Lead {
  id: string
  name: string
  email: string
  company?: string | null
}

interface QuoteManagementProps {
  quotes: Quote[]
  products: Product[]
  leads: Lead[]
  quoteStats: { status: string; count: number }[]
}

const QUOTE_STATUSES = [
  { value: 'DRAFT', label: 'Draft', color: 'bg-gray-500', icon: Edit },
  { value: 'SENT', label: 'Sent', color: 'bg-blue-500', icon: Send },
  { value: 'UNDER_REVIEW', label: 'Under Review', color: 'bg-yellow-500', icon: Clock },
  { value: 'REVISED', label: 'Revised', color: 'bg-purple-500', icon: Edit },
  { value: 'ACCEPTED', label: 'Accepted', color: 'bg-green-500', icon: CheckCircle },
  { value: 'REJECTED', label: 'Rejected', color: 'bg-red-500', icon: XCircle },
  { value: 'EXPIRED', label: 'Expired', color: 'bg-orange-500', icon: AlertCircle }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#FF6B6B', '#FFA726']

export function QuoteManagement({ quotes, products, leads, quoteStats }: QuoteManagementProps) {
  const [filteredQuotes, setFilteredQuotes] = useState(quotes)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)

  useEffect(() => {
    let filtered = quotes

    if (searchTerm) {
      filtered = filtered.filter(quote =>
        quote.quoteNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.lead.company?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(quote => quote.status === statusFilter)
    }

    setFilteredQuotes(filtered)
  }, [quotes, searchTerm, statusFilter])

  const getStatusBadge = (status: string) => {
    const statusConfig = QUOTE_STATUSES.find(s => s.value === status)
    const Icon = statusConfig?.icon || FileText
    return (
      <Badge variant="secondary" className={`text-white ${statusConfig?.color || 'bg-gray-500'}`}>
        <Icon className="w-3 h-3 mr-1" />
        {statusConfig?.label || status}
      </Badge>
    )
  }

  const getTotalQuoteValue = () => {
    return quotes.reduce((sum, quote) => sum + quote.totalAmount, 0)
  }

  const getAcceptanceRate = () => {
    const accepted = quotes.filter(q => q.status === 'ACCEPTED').length
    return quotes.length > 0 ? (accepted / quotes.length) * 100 : 0
  }

  const statusChartData = quoteStats.map(stat => ({
    name: QUOTE_STATUSES.find(s => s.value === stat.status)?.label || stat.status,
    value: stat.count
  }))

  const monthlyQuoteData = (): { month: string; value: number; count: number }[] => {
    const months = []
    const now = new Date()
    
    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1)
      const monthQuotes = quotes.filter(quote => {
        const quoteDate = new Date(quote.createdAt)
        return quoteDate.getMonth() === date.getMonth() && 
               quoteDate.getFullYear() === date.getFullYear()
      })
      
      months.push({
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        value: monthQuotes.reduce((sum, quote) => sum + quote.totalAmount, 0),
        count: monthQuotes.length
      })
    }
    
    return months
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Quote Management</h2>
          <p className="text-muted-foreground">
            Generate, track, and manage quotes for your manufacturing services
          </p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Quote
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>Create New Quote</DialogTitle>
              <DialogDescription>
                Generate a professional quote for your client
              </DialogDescription>
            </DialogHeader>
            <QuoteForm 
              products={products}
              leads={leads}
              onClose={() => setIsCreateDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* Analytics Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Quotes</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{quotes.length}</div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quote Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${getTotalQuoteValue().toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Total quoted amount
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Acceptance Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{getAcceptanceRate().toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">
              Quote conversion rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Responses</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {quotes.filter(q => ['SENT', 'UNDER_REVIEW'].includes(q.status)).length}
            </div>
            <p className="text-xs text-muted-foreground">
              Awaiting client response
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quote Status Distribution</CardTitle>
            <CardDescription>Current status of all quotes</CardDescription>
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
            <CardTitle>Quote Activity</CardTitle>
            <CardDescription>Quote generation over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyQuoteData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value, name) => [
                  name === 'value' ? `$${Number(value).toLocaleString()}` : value,
                  name === 'value' ? 'Quote Value' : 'Count'
                ]} />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quote List */}
      <Card>
        <CardHeader>
          <CardTitle>Quote Pipeline</CardTitle>
          <CardDescription>All quotes and their current status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search quotes..."
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
                {QUOTE_STATUSES.map(status => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Quotes Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Quote #</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Valid Until</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredQuotes.map((quote) => (
                  <TableRow key={quote.id}>
                    <TableCell>
                      <div className="font-medium">{quote.quoteNumber}</div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{quote.lead.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {quote.lead.company || quote.lead.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">${quote.totalAmount.toLocaleString()}</div>
                    </TableCell>
                    <TableCell>{getStatusBadge(quote.status)}</TableCell>
                    <TableCell>
                      {new Date(quote.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className={`${new Date(quote.validUntil) < new Date() ? 'text-red-600' : ''}`}>
                        {new Date(quote.validUntil).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedQuote(quote)
                            setIsViewDialogOpen(true)
                          }}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Send className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {filteredQuotes.length === 0 && (
              <div className="text-center py-12">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-semibold text-gray-900">No quotes found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {searchTerm || statusFilter !== 'all'
                    ? 'Try adjusting your filters'
                    : 'Create your first quote to get started'
                  }
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* View Quote Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Quote Details</DialogTitle>
            <DialogDescription>
              Complete quote information and line items
            </DialogDescription>
          </DialogHeader>
          {selectedQuote && (
            <QuoteDetail 
              quote={selectedQuote}
              onClose={() => {
                setIsViewDialogOpen(false)
                setSelectedQuote(null)
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Quote Form Component
function QuoteForm({ products, leads, onClose }: { 
  products: Product[]
  leads: Lead[]
  onClose: () => void 
}) {
  const [formData, setFormData] = useState({
    leadId: '',
    validDays: '30',
    terms: 'Payment: 30% advance, 70% before shipment\nDelivery: FOB Bangladesh\nPrices valid for 30 days',
    notes: ''
  })
  
  const [quoteItems, setQuoteItems] = useState([
    { productId: '', quantity: '', unitPrice: '', specifications: '', notes: '' }
  ])

  const addItem = () => {
    setQuoteItems([...quoteItems, { productId: '', quantity: '', unitPrice: '', specifications: '', notes: '' }])
  }

  const removeItem = (index: number) => {
    setQuoteItems(quoteItems.filter((_, i) => i !== index))
  }

  const updateItem = (index: number, field: string, value: string) => {
    const updated = [...quoteItems]
    updated[index] = { ...updated[index], [field]: value }
    setQuoteItems(updated)
  }

  const calculateTotal = () => {
    return quoteItems.reduce((sum, item) => {
      const quantity = parseFloat(item.quantity) || 0
      const price = parseFloat(item.unitPrice) || 0
      return sum + (quantity * price)
    }, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const validUntil = new Date()
    validUntil.setDate(validUntil.getDate() + parseInt(formData.validDays))

    const quoteData = {
      leadId: formData.leadId,
      totalAmount: calculateTotal(),
      validUntil,
      terms: formData.terms,
      notes: formData.notes,
      items: quoteItems.filter(item => item.productId && item.quantity).map(item => ({
        productId: item.productId,
        quantity: parseInt(item.quantity),
        unitPrice: parseFloat(item.unitPrice),
        totalPrice: parseInt(item.quantity) * parseFloat(item.unitPrice),
        specifications: item.specifications,
        notes: item.notes
      }))
    }

    try {
      const response = await fetch('/api/admin/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quoteData)
      })

      if (response.ok) {
        onClose()
        window.location.reload()
      }
    } catch (error) {
      console.error('Error creating quote:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="leadId">Select Lead/Client *</Label>
          <Select value={formData.leadId} onValueChange={(value) => setFormData({ ...formData, leadId: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Choose client" />
            </SelectTrigger>
            <SelectContent>
              {leads.map(lead => (
                <SelectItem key={lead.id} value={lead.id}>
                  {lead.name} {lead.company && `(${lead.company})`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="validDays">Valid for (days)</Label>
          <Input
            id="validDays"
            type="number"
            value={formData.validDays}
            onChange={(e) => setFormData({ ...formData, validDays: e.target.value })}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <Label>Quote Items</Label>
          <Button type="button" onClick={addItem} size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add Item
          </Button>
        </div>
        
        <div className="space-y-4">
          {quoteItems.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Item {index + 1}</h4>
                {quoteItems.length > 1 && (
                  <Button 
                    type="button" 
                    onClick={() => removeItem(index)}
                    size="sm"
                    variant="outline"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <Label>Product</Label>
                  <Select value={item.productId} onValueChange={(value) => updateItem(index, 'productId', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select product" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map(product => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Quantity</Label>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateItem(index, 'quantity', e.target.value)}
                  />
                </div>
                <div>
                  <Label>Unit Price ($)</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={item.unitPrice}
                    onChange={(e) => updateItem(index, 'unitPrice', e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <Label>Specifications</Label>
                <Textarea
                  value={item.specifications}
                  onChange={(e) => updateItem(index, 'specifications', e.target.value)}
                  rows={2}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center text-lg font-semibold">
            <span>Total Amount:</span>
            <span>${calculateTotal().toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="terms">Terms & Conditions</Label>
        <Textarea
          id="terms"
          value={formData.terms}
          onChange={(e) => setFormData({ ...formData, terms: e.target.value })}
          rows={4}
        />
      </div>

      <div>
        <Label htmlFor="notes">Internal Notes</Label>
        <Textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          rows={2}
        />
      </div>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={!formData.leadId || quoteItems.every(item => !item.productId)}>
          Create Quote
        </Button>
      </DialogFooter>
    </form>
  )
}

// Quote Detail Component
function QuoteDetail({ quote, onClose }: { quote: Quote; onClose: () => void }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-sm font-medium">Quote Information</Label>
          <div className="space-y-1 text-sm mt-2">
            <div><strong>Quote #:</strong> {quote.quoteNumber}</div>
            <div><strong>Client:</strong> {quote.lead.name}</div>
            <div><strong>Company:</strong> {quote.lead.company || 'N/A'}</div>
            <div><strong>Status:</strong> {quote.status}</div>
          </div>
        </div>
        <div>
          <Label className="text-sm font-medium">Dates & Amount</Label>
          <div className="space-y-1 text-sm mt-2">
            <div><strong>Created:</strong> {new Date(quote.createdAt).toLocaleDateString()}</div>
            <div><strong>Valid Until:</strong> {new Date(quote.validUntil).toLocaleDateString()}</div>
            <div><strong>Total Amount:</strong> ${quote.totalAmount.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <div>
        <Label className="text-sm font-medium">Quote Items</Label>
        <div className="mt-2 border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Unit Price</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quote.items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{item.product.name}</div>
                      {item.specifications && (
                        <div className="text-sm text-muted-foreground">{item.specifications}</div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>${item.unitPrice.toLocaleString()}</TableCell>
                  <TableCell>${item.totalPrice.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {quote.terms && (
        <div>
          <Label className="text-sm font-medium">Terms & Conditions</Label>
          <div className="mt-2 p-3 bg-gray-50 rounded-lg text-sm whitespace-pre-wrap">
            {quote.terms}
          </div>
        </div>
      )}

      <DialogFooter>
        <Button variant="outline" onClick={onClose}>Close</Button>
        <Button>Send Quote</Button>
      </DialogFooter>
    </div>
  )
}
