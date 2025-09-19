
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
  Users,
  Plus,
  Search,
  Filter,
  Mail,
  Phone,
  Globe,
  Calendar,
  MessageSquare,
  FileText,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

interface Lead {
  id: string
  name: string
  email: string
  company?: string | null
  country?: string | null
  phone?: string | null
  website?: string | null
  linkedinUrl?: string | null
  source: string
  status: string
  score: number
  estimatedValue?: number | null
  notes?: string | null
  lastContactDate?: Date | null
  nextFollowUpDate?: Date | null
  createdAt: Date
  updatedAt: Date
  customer?: any
  quotes: any[]
  communications: any[]
  inquiries: any[]
}

interface LeadManagementProps {
  leads: Lead[]
  leadSources: { source: string; count: number }[]
  leadStatuses: { status: string; count: number }[]
}

const LEAD_STATUSES = [
  { value: 'NEW', label: 'New', color: 'bg-blue-500' },
  { value: 'CONTACTED', label: 'Contacted', color: 'bg-yellow-500' },
  { value: 'QUALIFIED', label: 'Qualified', color: 'bg-purple-500' },
  { value: 'PROPOSAL_SENT', label: 'Proposal Sent', color: 'bg-orange-500' },
  { value: 'NEGOTIATION', label: 'Negotiation', color: 'bg-pink-500' },
  { value: 'WON', label: 'Won', color: 'bg-green-500' },
  { value: 'LOST', label: 'Lost', color: 'bg-red-500' },
  { value: 'NURTURING', label: 'Nurturing', color: 'bg-gray-500' }
]

const LEAD_SOURCES = [
  'WEBSITE', 'REFERRAL', 'SOCIAL_MEDIA', 'EMAIL_MARKETING', 
  'TRADE_SHOW', 'COLD_OUTREACH', 'GOOGLE_ADS', 'LINKEDIN', 'OTHER'
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export function LeadManagement({ leads, leadSources, leadStatuses }: LeadManagementProps) {
  const [filteredLeads, setFilteredLeads] = useState(leads)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sourceFilter, setSourceFilter] = useState('all')
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  useEffect(() => {
    let filtered = leads

    if (searchTerm) {
      filtered = filtered.filter(lead =>
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.company?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.status === statusFilter)
    }

    if (sourceFilter !== 'all') {
      filtered = filtered.filter(lead => lead.source === sourceFilter)
    }

    setFilteredLeads(filtered)
  }, [leads, searchTerm, statusFilter, sourceFilter])

  const getStatusBadge = (status: string) => {
    const statusConfig = LEAD_STATUSES.find(s => s.value === status)
    return (
      <Badge variant="secondary" className={`text-white ${statusConfig?.color || 'bg-gray-500'}`}>
        {statusConfig?.label || status}
      </Badge>
    )
  }

  const getLeadScore = (lead: Lead) => {
    let score = 0
    if (lead.company) score += 20
    if (lead.phone) score += 15
    if (lead.website) score += 10
    if (lead.estimatedValue && lead.estimatedValue > 1000) score += 25
    if (lead.communications.length > 0) score += 20
    if (lead.quotes.length > 0) score += 30
    return Math.min(score, 100)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const statusChartData = leadStatuses.map(stat => ({
    name: LEAD_STATUSES.find(s => s.value === stat.status)?.label || stat.status,
    value: stat.count
  }))

  const sourceChartData = leadSources.map(source => ({
    name: source.source.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase()),
    value: source.count
  }))

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Lead Management</h2>
          <p className="text-muted-foreground">
            Track and nurture your leads through the sales pipeline
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Lead
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Lead</DialogTitle>
              <DialogDescription>
                Enter the details for the new lead
              </DialogDescription>
            </DialogHeader>
            <LeadForm onClose={() => setIsAddDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Analytics Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{leads.length}</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hot Leads</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {leads.filter(lead => getLeadScore(lead) >= 80).length}
            </div>
            <p className="text-xs text-muted-foreground">
              Score 80+
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {leads.length > 0 ? ((leads.filter(lead => lead.status === 'WON').length / leads.length) * 100).toFixed(1) : 0}%
            </div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Follow-ups Due</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {leads.filter(lead => 
                lead.nextFollowUpDate && new Date(lead.nextFollowUpDate) <= new Date()
              ).length}
            </div>
            <p className="text-xs text-muted-foreground">
              Require attention
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Leads by Status</CardTitle>
            <CardDescription>Current lead distribution</CardDescription>
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
            <CardTitle>Lead Sources</CardTitle>
            <CardDescription>Where leads are coming from</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sourceChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Lead Pipeline</CardTitle>
          <CardDescription>Manage and track all your leads</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search leads..."
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
                {LEAD_STATUSES.map(status => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                {LEAD_SOURCES.map(source => (
                  <SelectItem key={source} value={source}>
                    {source.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Leads Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Lead</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Est. Value</TableHead>
                  <TableHead>Last Contact</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLeads.map((lead) => {
                  const score = getLeadScore(lead)
                  return (
                    <TableRow key={lead.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{lead.name}</div>
                          <div className="text-sm text-muted-foreground">{lead.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>{lead.company || '-'}</TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {lead.source.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                        </Badge>
                      </TableCell>
                      <TableCell>{getStatusBadge(lead.status)}</TableCell>
                      <TableCell>
                        <span className={`font-medium ${getScoreColor(score)}`}>
                          {score}%
                        </span>
                      </TableCell>
                      <TableCell>
                        {lead.estimatedValue ? `$${lead.estimatedValue.toLocaleString()}` : '-'}
                      </TableCell>
                      <TableCell>
                        {lead.lastContactDate 
                          ? new Date(lead.lastContactDate).toLocaleDateString()
                          : 'Never'
                        }
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setSelectedLead(lead)
                              setIsEditDialogOpen(true)
                            }}
                          >
                            Edit
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
                  )
                })}
              </TableBody>
            </Table>
            {filteredLeads.length === 0 && (
              <div className="text-center py-12">
                <Users className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-semibold text-gray-900">No leads found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {searchTerm || statusFilter !== 'all' || sourceFilter !== 'all'
                    ? 'Try adjusting your filters'
                    : 'Get started by adding a new lead'
                  }
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Edit Lead Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Lead</DialogTitle>
            <DialogDescription>
              Update lead information and track progress
            </DialogDescription>
          </DialogHeader>
          {selectedLead && (
            <LeadForm 
              lead={selectedLead} 
              onClose={() => {
                setIsEditDialogOpen(false)
                setSelectedLead(null)
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Lead Form Component
function LeadForm({ lead, onClose }: { lead?: Lead; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: lead?.name || '',
    email: lead?.email || '',
    company: lead?.company || '',
    country: lead?.country || '',
    phone: lead?.phone || '',
    website: lead?.website || '',
    linkedinUrl: lead?.linkedinUrl || '',
    source: lead?.source || 'WEBSITE',
    status: lead?.status || 'NEW',
    estimatedValue: lead?.estimatedValue?.toString() || '',
    notes: lead?.notes || '',
    nextFollowUpDate: lead?.nextFollowUpDate ? new Date(lead.nextFollowUpDate).toISOString().split('T')[0] : ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const url = lead ? `/api/admin/leads/${lead.id}` : '/api/admin/leads'
      const method = lead ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          estimatedValue: formData.estimatedValue ? parseFloat(formData.estimatedValue) : null,
          nextFollowUpDate: formData.nextFollowUpDate ? new Date(formData.nextFollowUpDate) : null
        })
      })

      if (response.ok) {
        onClose()
        window.location.reload() // Refresh the page to show updated data
      } else {
        console.error('Failed to save lead')
      }
    } catch (error) {
      console.error('Error saving lead:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label htmlFor="source">Source</Label>
          <Select value={formData.source} onValueChange={(value) => setFormData({ ...formData, source: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {LEAD_SOURCES.map(source => (
                <SelectItem key={source} value={source}>
                  {source.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {LEAD_STATUSES.map(status => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="estimatedValue">Estimated Value ($)</Label>
          <Input
            id="estimatedValue"
            type="number"
            value={formData.estimatedValue}
            onChange={(e) => setFormData({ ...formData, estimatedValue: e.target.value })}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="nextFollowUpDate">Next Follow-up Date</Label>
        <Input
          id="nextFollowUpDate"
          type="date"
          value={formData.nextFollowUpDate}
          onChange={(e) => setFormData({ ...formData, nextFollowUpDate: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          rows={3}
        />
      </div>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">
          {lead ? 'Update Lead' : 'Add Lead'}
        </Button>
      </DialogFooter>
    </form>
  )
}
