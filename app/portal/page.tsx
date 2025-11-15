"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  Download,
  Eye,
  DollarSign,
  Calendar,
  User,
  Mail,
  Phone,
  Building,
  LogOut,
} from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState("quotes")
  const { t, currentLanguage } = useLanguage()

  const portalTranslations = {
    signOut: {
      EN: "Sign Out",
      ES: "Cerrar Sesión",
      FR: "Se Déconnecter",
      DE: "Abmelden",
      IT: "Esci",
      PT: "Sair",
      ZH: "登出",
      JA: "ログアウト",
      AR: "تسجيل الخروج",
    },
    manageQuotes: {
      EN: "Manage your quotes and projects in one place",
      ES: "Gestiona tus cotizaciones y proyectos en un solo lugar",
      FR: "Gérez vos devis et projets en un seul endroit",
      DE: "Verwalten Sie Ihre Angebote und Projekte an einem Ort",
      IT: "Gestisci le tue quotazioni e progetti in un unico posto",
      PT: "Gerencie suas cotações e projetos em um só lugar",
      ZH: "在一个地方管理您的报价和项目",
      JA: "見積もりとプロジェクトを一か所で管理",
      AR: "إدارة عروض الأسعار والمشاريع في مكان واحد",
    },
    accountDetails: {
      EN: "Account Details",
      ES: "Detalles de la Cuenta",
      FR: "Détails du Compte",
      DE: "Kontodetails",
      IT: "Dettagli Account",
      PT: "Detalhes da Conta",
      ZH: "账户详情",
      JA: "アカウント詳細",
      AR: "تفاصيل الحساب",
    },
    phone: {
      EN: "Phone",
      ES: "Teléfono",
      FR: "Téléphone",
      DE: "Telefon",
      IT: "Telefono",
      PT: "Telefone",
      ZH: "电话",
      JA: "電話",
      AR: "الهاتف",
    },
    myQuotes: {
      EN: "My Quotes",
      ES: "Mis Cotizaciones",
      FR: "Mes Devis",
      DE: "Meine Angebote",
      IT: "I Miei Preventivi",
      PT: "Minhas Cotações",
      ZH: "我的报价",
      JA: "私の見積もり",
      AR: "عروض الأسعار الخاصة بي",
    },
    activeProjects: {
      EN: "Active Projects",
      ES: "Proyectos Activos",
      FR: "Projets Actifs",
      DE: "Aktive Projekte",
      IT: "Progetti Attivi",
      PT: "Projetos Ativos",
      ZH: "活跃项目",
      JA: "アクティブプロジェクト",
      AR: "المشاريع النشطة",
    },
    quoteID: {
      EN: "Quote ID",
      ES: "ID de Cotización",
      FR: "ID de Devis",
      DE: "Angebots-ID",
      IT: "ID Preventivo",
      PT: "ID da Cotação",
      ZH: "报价编号",
      JA: "見積もりID",
      AR: "معرف العرض",
    },
    includedServices: {
      EN: "Included Services",
      ES: "Servicios Incluidos",
      FR: "Services Inclus",
      DE: "Enthaltene Dienstleistungen",
      IT: "Servizi Inclusi",
      PT: "Serviços Incluídos",
      ZH: "包含的服务",
      JA: "含まれるサービス",
      AR: "الخدمات المشمولة",
    },
    viewDetails: {
      EN: "View Details",
      ES: "Ver Detalles",
      FR: "Voir Détails",
      DE: "Details Anzeigen",
      IT: "Vedi Dettagli",
      PT: "Ver Detalhes",
      ZH: "查看详情",
      JA: "詳細を見る",
      AR: "عرض التفاصيل",
    },
    downloadPDF: {
      EN: "Download PDF",
      ES: "Descargar PDF",
      FR: "Télécharger PDF",
      DE: "PDF Herunterladen",
      IT: "Scarica PDF",
      PT: "Baixar PDF",
      ZH: "下载PDF",
      JA: "PDFをダウンロード",
      AR: "تحميل PDF",
    },
    noActiveProjects: {
      EN: "No Active Projects",
      ES: "Sin Proyectos Activos",
      FR: "Aucun Projet Actif",
      DE: "Keine Aktiven Projekte",
      IT: "Nessun Progetto Attivo",
      PT: "Nenhum Projeto Ativo",
      ZH: "没有活跃项目",
      JA: "アクティブなプロジェクトはありません",
      AR: "لا توجد مشاريع نشطة",
    },
    quoteApproved: {
      EN: "Once a quote is approved, your project will appear here",
      ES: "Una vez que se apruebe una cotización, su proyecto aparecerá aquí",
      FR: "Une fois qu'un devis est approuvé, votre projet apparaîtra ici",
      DE: "Sobald ein Angebot genehmigt wird, erscheint Ihr Projekt hier",
      IT: "Una volta approvato un preventivo, il tuo progetto apparirà qui",
      PT: "Assim que uma cotação for aprovada, seu projeto aparecerá aqui",
      ZH: "一旦报价获得批准，您的项目将出现在这里",
      JA: "見積もりが承認されると、プロジェクトがここに表示されます",
      AR: "بمجرد الموافقة على العرض، سيظهر مشروعك هنا",
    },
    requestNewQuote: {
      EN: "Request New Quote",
      ES: "Solicitar Nueva Cotización",
      FR: "Demander un Nouveau Devis",
      DE: "Neues Angebot Anfordern",
      IT: "Richiedi Nuovo Preventivo",
      PT: "Solicitar Nova Cotação",
      ZH: "请求新报价",
      JA: "新しい見積もりをリクエスト",
      AR: "طلب عرض أسعار جديد",
    },
  }

  // Mock user data
  const user = {
    name: "John Smith",
    email: "john.smith@example.com",
    company: "Tech Innovations Ltd",
    phone: "+1 (555) 123-4567",
  }

  // Mock quotes data
  const quotes = [
    {
      id: "Q-2024-001",
      projectName: "E-commerce Platform",
      date: "2024-01-15",
      amount: 15000,
      currency: "USD",
      status: "approved",
      items: ["Full Stack Development", "Payment Integration", "Mobile App"],
    },
    {
      id: "Q-2024-002",
      projectName: "Booking System",
      date: "2024-01-20",
      amount: 8500,
      currency: "USD",
      status: "pending",
      items: ["Booking System", "Calendar Integration", "Email Automation"],
    },
    {
      id: "Q-2024-003",
      projectName: "AI Chatbot Integration",
      date: "2024-01-25",
      amount: 12000,
      currency: "USD",
      status: "draft",
      items: ["AI Integration", "Chatbot Development", "Analytics Dashboard"],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-500/20 text-green-400 border-green-500/50"
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
      case "draft":
        return "bg-blue-500/20 text-blue-400 border-blue-500/50"
      case "rejected":
        return "bg-red-500/20 text-red-400 border-red-500/50"
      default:
        return "bg-lyra-medium/20 text-lyra-text-secondary border-lyra-medium/50"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle2 className="h-4 w-4" />
      case "pending":
        return <Clock className="h-4 w-4" />
      case "rejected":
        return <XCircle className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-lyra-darkest">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-lyra-darkest/95 backdrop-blur-md border-b border-lyra-blue/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-4">
              <AnimatedLogo width={56} height={56} />
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent">
                Lyra Stack
              </span>
            </Link>
            <Button
              variant="outline"
              className="border-lyra-medium text-lyra-text-secondary hover:bg-lyra-medium/20 bg-transparent"
            >
              <LogOut className="h-4 w-4 mr-2" />
              {portalTranslations.signOut[currentLanguage]}
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-display font-bold mb-2">
              <span className="bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent">
                {t.customerPortal}
              </span>
            </h1>
            <p className="text-lyra-text-secondary">{portalTranslations.manageQuotes[currentLanguage]}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar - User Info */}
            <div className="lg:col-span-1">
              <Card className="bg-lyra-medium/20 backdrop-blur-sm border-lyra-medium/50">
                <CardHeader>
                  <CardTitle className="text-lyra-text-primary">
                    {portalTranslations.accountDetails[currentLanguage]}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-lyra-blue-light" />
                    <div>
                      <p className="text-sm text-lyra-text-muted">{t.name}</p>
                      <p className="text-lyra-text-primary font-medium">{user.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-lyra-purple-light" />
                    <div>
                      <p className="text-sm text-lyra-text-muted">{t.email}</p>
                      <p className="text-lyra-text-primary font-medium text-sm">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-lyra-blue-light" />
                    <div>
                      <p className="text-sm text-lyra-text-muted">{t.company}</p>
                      <p className="text-lyra-text-primary font-medium">{user.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-lyra-purple-light" />
                    <div>
                      <p className="text-sm text-lyra-text-muted">{portalTranslations.phone[currentLanguage]}</p>
                      <p className="text-lyra-text-primary font-medium">{user.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="bg-lyra-medium/20 border border-lyra-medium/50">
                  <TabsTrigger value="quotes" className="data-[state=active]:bg-lyra-blue/30">
                    {portalTranslations.myQuotes[currentLanguage]}
                  </TabsTrigger>
                  <TabsTrigger value="projects" className="data-[state=active]:bg-lyra-purple/30">
                    {portalTranslations.activeProjects[currentLanguage]}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="quotes" className="mt-6">
                  <div className="space-y-4">
                    {quotes.map((quote) => (
                      <Card
                        key={quote.id}
                        className="bg-lyra-medium/20 backdrop-blur-sm border-lyra-medium/50 hover:border-lyra-blue-light/50 transition-all duration-300"
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lyra-text-primary text-xl mb-2">{quote.projectName}</CardTitle>
                              <CardDescription className="text-lyra-text-muted">
                                {portalTranslations.quoteID[currentLanguage]}: {quote.id}
                              </CardDescription>
                            </div>
                            <Badge className={getStatusColor(quote.status)}>
                              {getStatusIcon(quote.status)}
                              <span className="ml-1 capitalize">{quote.status}</span>
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4 text-lyra-blue-light" />
                              <span className="text-lyra-text-secondary text-sm">
                                {new Date(quote.date).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <DollarSign className="h-4 w-4 text-lyra-purple-light" />
                              <span className="text-lyra-text-primary font-semibold">
                                {quote.currency} {quote.amount.toLocaleString()}
                              </span>
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-sm text-lyra-text-muted mb-2">
                              {portalTranslations.includedServices[currentLanguage]}:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {quote.items.map((item, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="bg-lyra-blue/10 text-lyra-blue-light border-lyra-blue/30"
                                >
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-lyra-blue to-lyra-purple hover:from-lyra-blue-dark hover:to-lyra-purple-dark"
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              {portalTranslations.viewDetails[currentLanguage]}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-lyra-medium text-lyra-text-secondary hover:bg-lyra-medium/20 bg-transparent"
                            >
                              <Download className="h-4 w-4 mr-1" />
                              {portalTranslations.downloadPDF[currentLanguage]}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="projects" className="mt-6">
                  <Card className="bg-lyra-medium/20 backdrop-blur-sm border-lyra-medium/50">
                    <CardContent className="py-12 text-center">
                      <FileText className="h-16 w-16 text-lyra-blue-light mx-auto mb-4 opacity-50" />
                      <h3 className="text-xl font-semibold text-lyra-text-primary mb-2">
                        {portalTranslations.noActiveProjects[currentLanguage]}
                      </h3>
                      <p className="text-lyra-text-muted mb-6">{portalTranslations.quoteApproved[currentLanguage]}</p>
                      <Button className="bg-gradient-to-r from-lyra-blue to-lyra-purple hover:from-lyra-blue-dark hover:to-lyra-purple-dark">
                        {portalTranslations.requestNewQuote[currentLanguage]}
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
