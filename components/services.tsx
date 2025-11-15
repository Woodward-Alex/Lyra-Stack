"use client"
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code,
  Brain,
  Shield,
  BarChart3,
  MessageSquare,
  Palette,
  Headphones,
  CreditCard,
  Calendar,
  Mail,
  Lightbulb,
  Layers,
} from "lucide-react"

import { useLanguage } from "@/contexts/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Lightbulb className="h-8 w-8 text-lyra-purple-light" />,
      title: t.digitalConsultancy,
      description: t.digitalConsultancyDesc,
    },
    {
      icon: <Code className="h-8 w-8 text-lyra-blue-light" />,
      title: t.websitesMobileApps,
      description: t.websitesMobileAppsDesc,
    },
    {
      icon: <Layers className="h-8 w-8 text-lyra-purple-light" />,
      title: t.websiteMigration,
      description: t.websiteMigrationDesc,
    },
    {
      icon: <CreditCard className="h-8 w-8 text-lyra-blue-light" />,
      title: t.onlinePayment,
      description: t.onlinePaymentDesc,
    },
    {
      icon: <Calendar className="h-8 w-8 text-lyra-purple-light" />,
      title: t.bookingScheduling,
      description: t.bookingSchedulingDesc,
    },
    {
      icon: <Brain className="h-8 w-8 text-lyra-blue-light" />,
      title: t.smartAutomation,
      description: t.smartAutomationDesc,
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-lyra-purple-light" />,
      title: t.dataAnalytics,
      description: t.dataAnalyticsDesc,
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-lyra-blue-light" />,
      title: t.chatbotsSupport,
      description: t.chatbotsSupportDesc,
    },
    {
      icon: <Palette className="h-8 w-8 text-lyra-purple-light" />,
      title: t.brandingCreative,
      description: t.brandingCreativeDesc,
    },
    {
      icon: <Mail className="h-8 w-8 text-lyra-blue-light" />,
      title: t.emailMarketing,
      description: t.emailMarketingDesc,
    },
    {
      icon: <Shield className="h-8 w-8 text-lyra-purple-light" />,
      title: t.securityCompliance,
      description: t.securityComplianceDesc,
    },
    {
      icon: <Headphones className="h-8 w-8 text-lyra-blue-light" />,
      title: t.ongoingSupport,
      description: t.ongoingSupportDesc,
    },
  ]

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-lyra-darkest to-lyra-dark">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-4">
              <span className="bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent">
                {t.whatWeProvide}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-lyra-text-secondary max-w-3xl mx-auto font-medium px-4">
              {t.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-lyra-medium/20 backdrop-blur-sm border-lyra-medium/50 hover:border-lyra-blue-light/50 hover:bg-lyra-medium/30 transition-all duration-300 group h-full"
              >
                <CardHeader className="pb-3 md:pb-4">
                  <div className="mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lyra-text-primary text-base md:text-lg leading-tight font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lyra-text-muted text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
