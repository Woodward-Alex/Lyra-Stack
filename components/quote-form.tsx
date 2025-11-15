"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useLanguage } from "@/contexts/language-context"
import {
  Send,
  Sparkles,
  ShoppingCart,
  Star,
  Share2,
  Palette,
  Package,
  MessageSquare,
  CreditCard,
  Calendar,
  Globe,
  BarChart3,
  Settings,
  Upload,
} from "lucide-react"

export function QuoteForm() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    timeline: "",
    description: "",
    widgets: [] as string[],
    currency: "GBP",
  })

  const [estimate, setEstimate] = useState<number | null>(null)

  const currencies = [
    { value: "GBP", label: "GBP (£)", symbol: "£", rate: 1 },
    { value: "USD", label: "USD ($)", symbol: "$", rate: 1.27 },
    { value: "EUR", label: "EUR (€)", symbol: "€", rate: 1.17 },
    { value: "AUD", label: "AUD (A$)", symbol: "A$", rate: 1.93 },
    { value: "CAD", label: "CAD (C$)", symbol: "C$", rate: 1.72 },
  ]

  const projectTypes = [
    { value: "starter", label: "Starter Platform", basePrice: 250 },
    { value: "growth", label: "Growth Platform", basePrice: 750 },
    { value: "ai", label: "AI Platform", basePrice: 1250 },
    { value: "enterprise", label: "Enterprise Platform", basePrice: 2500 },
    { value: "custom", label: "Custom Solution", basePrice: 500 },
  ]

  const widgets = [
    { id: "shopify", label: "Shopify E-commerce", price: 300, icon: <Package className="h-4 w-4" /> },
    { id: "cart", label: "Shopping Cart", price: 200, icon: <ShoppingCart className="h-4 w-4" /> },
    { id: "ratings", label: "Reviews & Ratings", price: 150, icon: <Star className="h-4 w-4" /> },
    { id: "social", label: "Social Media Integration", price: 100, icon: <Share2 className="h-4 w-4" /> },
    { id: "branding", label: "Logo, Branding & AI Images", price: 350, icon: <Palette className="h-4 w-4" /> },
    { id: "chatbot", label: "AI Chatbot", price: 300, icon: <MessageSquare className="h-4 w-4" /> },
    { id: "payment", label: "Payment Processing", price: 250, icon: <CreditCard className="h-4 w-4" /> },
    { id: "booking", label: "Booking System", price: 300, icon: <Calendar className="h-4 w-4" /> },
    { id: "analytics", label: "Data & Analytics Dashboard", price: 200, icon: <BarChart3 className="h-4 w-4" /> },
    { id: "multi-lang", label: "Multi-Language Support", price: 200, icon: <Globe className="h-4 w-4" /> },
    { id: "crm", label: "CRM System", price: 350, icon: <Settings className="h-4 w-4" /> },
    { id: "migration", label: "Website Migration & Hosting", price: 150, icon: <Upload className="h-4 w-4" /> },
  ]

  const calculateEstimate = () => {
    let total = 0

    const baseProject = projectTypes.find((p) => p.value === formData.projectType)
    if (baseProject) {
      total += baseProject.basePrice
    }

    formData.widgets.forEach((widgetId) => {
      const widget = widgets.find((w) => w.id === widgetId)
      if (widget) total += widget.price
    })

    if (formData.timeline === "rush") total *= 1.3

    const selectedCurrency = currencies.find((c) => c.value === formData.currency)
    if (selectedCurrency) {
      total *= selectedCurrency.rate
    }

    setEstimate(total)
  }

  const handleWidgetChange = (widgetId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      widgets: checked ? [...prev.widgets, widgetId] : prev.widgets.filter((id) => id !== widgetId),
    }))
  }

  const formatPrice = (price: number) => {
    const selectedCurrency = currencies.find((c) => c.value === formData.currency)
    if (!selectedCurrency) return `£${price}`
    const convertedPrice = Math.round(price * selectedCurrency.rate)
    return `${selectedCurrency.symbol}${convertedPrice.toLocaleString()}`
  }

  return (
    <section id="quote" className="py-20 bg-lyra-darkest">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent">
                {t.getYourQuote}
              </span>
            </h2>
            <p className="text-xl text-lyra-text-secondary">Real-time estimates - get your prototype in 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6">
              <Button
                variant="outline"
                className="border-lyra-medium text-lyra-text-secondary hover:bg-lyra-medium/20 bg-transparent"
                onClick={() => (window.location.href = "tel:+447596527901")}
              >
                📞 {t.callOurTeam}
              </Button>
            </div>
          </div>

          <Card className="bg-lyra-medium/20 backdrop-blur-sm border-lyra-medium/50">
            <CardHeader>
              <CardTitle className="text-lyra-text-primary text-2xl flex items-center">
                <Sparkles className="mr-2 h-6 w-6 text-lyra-blue-light" />
                {t.projectDetails}
              </CardTitle>
              <CardDescription className="text-lyra-text-muted">
                Tell us about your project and get an instant estimate
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lyra-text-primary">
                    {t.name}
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="bg-lyra-dark border-lyra-medium text-lyra-text-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lyra-text-primary">
                    {t.email}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="bg-lyra-dark border-lyra-medium text-lyra-text-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-lyra-text-primary">
                  {t.company}
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                  className="bg-lyra-dark border-lyra-medium text-lyra-text-primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label className="text-lyra-text-primary">{t.currency}</Label>
                  <Select
                    value={formData.currency}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, currency: value }))}
                  >
                    <SelectTrigger className="bg-lyra-dark border-lyra-medium text-lyra-text-primary">
                      <SelectValue placeholder={t.selectCurrency} />
                    </SelectTrigger>
                    <SelectContent className="bg-lyra-dark border-lyra-medium">
                      {currencies.map((currency) => (
                        <SelectItem key={currency.value} value={currency.value} className="text-lyra-text-primary">
                          {currency.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-lyra-text-primary">{t.platformType}</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, projectType: value }))}
                  >
                    <SelectTrigger className="bg-lyra-dark border-lyra-medium text-lyra-text-primary">
                      <SelectValue placeholder={t.selectPlatform} />
                    </SelectTrigger>
                    <SelectContent className="bg-lyra-dark border-lyra-medium">
                      {projectTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value} className="text-lyra-text-primary">
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-lyra-text-primary">{t.timeline}</Label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, timeline: value }))}
                  >
                    <SelectTrigger className="bg-lyra-dark border-lyra-medium text-lyra-text-primary">
                      <SelectValue placeholder={t.selectTimeline} />
                    </SelectTrigger>
                    <SelectContent className="bg-lyra-dark border-lyra-medium">
                      <SelectItem value="flexible" className="text-lyra-text-primary">
                        {t.flexibleTimeline}
                      </SelectItem>
                      <SelectItem value="rush" className="text-lyra-text-primary">
                        {t.rushTimeline}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-lyra-text-primary text-lg">{t.addOnFeatures}</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {widgets.map((widget) => (
                    <div
                      key={widget.id}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-lyra-dark/50 border border-lyra-medium/30 hover:border-lyra-blue-light/50 transition-colors"
                    >
                      <Checkbox
                        id={widget.id}
                        checked={formData.widgets.includes(widget.id)}
                        onCheckedChange={(checked) => handleWidgetChange(widget.id, checked as boolean)}
                        className="border-lyra-medium"
                      />
                      <div className="flex items-center flex-1">
                        <div className="mr-2 text-lyra-blue-light">{widget.icon}</div>
                        <Label htmlFor={widget.id} className="text-lyra-text-secondary flex-1 cursor-pointer">
                          {widget.label}
                        </Label>
                        <span className="text-lyra-purple-light font-semibold">{formatPrice(widget.price)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-lyra-text-primary">
                  {t.projectDescription}
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  className="bg-lyra-dark border-lyra-medium text-lyra-text-primary min-h-[120px]"
                  placeholder={t.tellUsAboutYourProject}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={calculateEstimate}
                  className="bg-gradient-to-r from-lyra-blue to-lyra-purple hover:from-lyra-blue-dark hover:to-lyra-purple-dark flex-1"
                  disabled={!formData.projectType}
                >
                  {t.calculateEstimate}
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 flex-1">
                  {t.submitForPrototype}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {estimate && (
                <div className="mt-6 p-6 bg-gradient-to-r from-lyra-blue/20 to-lyra-purple/20 rounded-lg border border-lyra-blue-light/30">
                  <h3 className="text-2xl font-bold text-lyra-text-primary mb-2">{t.estimatedSetupCost}</h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent mb-4">
                    {formatPrice(estimate)}
                  </div>
                  <div className="space-y-2 text-lyra-text-secondary text-sm">
                    <p className="font-semibold">{t.includesFor12Months}</p>
                    <ul className="list-disc list-inside space-y-1 text-lyra-text-muted">
                      <li>{t.freeDomainHosting}</li>
                      <li>{t.professionalEmailAddress}</li>
                      <li>{t.sslCertificateSecurity}</li>
                      <li>{t.support247}</li>
                      <li>{t.freeUpdatesMaintenance}</li>
                    </ul>
                    <p className="text-lyra-purple-light font-medium mt-3">{t.after12Months}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
