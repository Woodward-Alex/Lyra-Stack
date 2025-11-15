"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Blocks, Check, ArrowRight, Sparkles, Rocket, Zap, Orbit } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function BuildingBlocks() {
  const { t, currentLanguage } = useLanguage()

  const translations = {
    professionalWebsiteDesign: {
      EN: "Professional website design",
      ES: "Diseño de sitio web profesional",
      FR: "Conception de site web professionnel",
      DE: "Professionelles Website-Design",
      IT: "Design sito web professionale",
      PT: "Design de site profissional",
      ZH: "专业网站设计",
      JA: "プロフェッショナルなウェブサイトデザイン",
      AR: "تصميم موقع ويب احترافي",
    },
    mobileResponsive: {
      EN: "Mobile responsive",
      ES: "Adaptable a móviles",
      FR: "Responsive mobile",
      DE: "Mobilfreundlich",
      IT: "Mobile responsive",
      PT: "Responsivo para mobile",
      ZH: "移动响应",
      JA: "モバイル対応",
      AR: "متجاوب مع الجوال",
    },
    contactForms: {
      EN: "Contact forms",
      ES: "Formularios de contacto",
      FR: "Formulaires de contact",
      DE: "Kontaktformulare",
      IT: "Moduli di contatto",
      PT: "Formulários de contato",
      ZH: "联系表单",
      JA: "お問い合わせフォーム",
      AR: "نماذج الاتصال",
    },
    
    seoOptimized: {
     EN: "SEO optimized",
      ES: "Optimizado para SEO",
      FR: "Optimisé SEO",
      DE: "SEO-optimiert",
      IT: "Ottimizzato SEO",
      PT: "Otimizado para SEO",
      ZH: "SEO优化",
      JA: "SEO最適化",
      AR: "محسّن لمحركات البحث",
    },
    socialMediaLinks: {
      EN: "Social media links",
      ES: "Enlaces a redes sociales",
      FR: "Liens réseaux sociaux",
      DE: "Social Media Links",
      IT: "Link social media",
      PT: "Links de mídia social",
      ZH: "社交媒体链接",
      JA: "ソーシャルメディアリンク",
      AR: "روابط وسائل التواصل الاجتماعي",
    },
    everythingInNebula: {
      EN: "Everything in Nebula",
      ES: "Todo en Nebulosa",
      FR: "Tout dans Nébuleuse",
      DE: "Alles in Nebel",
      IT: "Tutto in Nebulosa",
      PT: "Tudo em Nebulosa",
      ZH: "星云的所有功能",
      JA: "ネビュラのすべて",
      AR: "كل شيء في السديم",
    },
    ecommerceIntegration: {
      EN: "E-commerce integration",
      ES: "Integración de comercio electrónico",
      FR: "Intégration e-commerce",
      DE: "E-Commerce-Integration",
      IT: "Integrazione e-commerce",
      PT: "Integração de e-commerce",
      ZH: "电子商务集成",
      JA: "Eコマース統合",
      AR: "تكامل التجارة الإلكترونية",
    },
    bookingSystem: {
      EN: "Booking system",
      ES: "Sistema de reservas",
      FR: "Système de réservation",
      DE: "Buchungssystem",
      IT: "Sistema di prenotazione",
      PT: "Sistema de reservas",
      ZH: "预订系统",
      JA: "予約システム",
      AR: "نظام الحجز",
    },
    paymentProcessing: {
      EN: "Payment processing",
      ES: "Procesamiento de pagos",
      FR: "Traitement des paiements",
      DE: "Zahlungsabwicklung",
      IT: "Elaborazione pagamenti",
      PT: "Processamento de pagamentos",
      ZH: "支付处理",
      JA: "決済処理",
      AR: "معالجة الدفع",
    },
    analyticsDashboard: {
      EN: "Customer Analytics dashboard",
      ES: "Panel de análisis",
      FR: "Tableau de bord analytique",
      DE: "Analyse-Dashboard",
      IT: "Dashboard analitica",
      PT: "Painel de análises",
      ZH: "分析仪表板",
      JA: "分析ダッシュボード",
      AR: "لوحة تحكم التحليلات",
    },
    everythingInConstellation: {
      EN: "Everything in Star Cluster",
      ES: "Todo en Cúmulo Estelar",
      FR: "Tout dans Amas d'Étoiles",
      DE: "Alles in Sternhaufen",
      IT: "Tutto in Ammasso Stellare",
      PT: "Tudo em Aglomerado Estelar",
      ZH: "星团的所有功能",
      JA: "星団のすべて",
      AR: "كل شيء في المجموعة النجمية",
    },
    aiChatbotAssistant: {
      EN: "AI chatbot assistant",
      ES: "Asistente chatbot de IA",
      FR: "Assistant chatbot IA",
      DE: "KI-Chatbot-Assistent",
      IT: "Assistente chatbot IA",
      PT: "Assistente chatbot de IA",
      ZH: "AI聊天机器人助手",
      JA: "AIチャットボットアシスタント",
      AR: "مساعد روبوت الدردشة بالذكاء الاصطناعي",
    },
    smartRecommendations: {
      EN: "Smart recommendations",
      ES: "Recomendaciones inteligentes",
      FR: "Recommandations intelligentes",
      DE: "Intelligente Empfehlungen",
      IT: "Raccomandazioni intelligenti",
      PT: "Recomendações inteligentes",
      ZH: "智能推荐",
      JA: "スマートレコメンデーション",
      AR: "توصيات ذكية",
    },
    automatedWorkflows: {
      EN: "Automated workflows",
      ES: "Flujos de trabajo automatizados",
      FR: "Flux de travail automatisés",
      DE: "Automatisierte Workflows",
      IT: "Flussi di lavoro automatizzati",
      PT: "Fluxos de trabalho automatizados",
      ZH: "自动化工作流",
      JA: "自動化ワークフロー",
      AR: "سير عمل آلي",
    },
    advancedIntegrations: {
      EN: "Advanced e-commerce integrations",
      ES: "Integraciones avanzadas",
      FR: "Intégrations avancées",
      DE: "Erweiterte Integrationen",
      IT: "Integrazioni avanzate",
      PT: "Integrações avançadas",
      ZH: "高级集成",
      JA: "高度な統合",
      AR: "تكاملات متقدمة",
    },
    everythingInSupernova: {
      EN: "Everything in Supernova",
      ES: "Todo en Supernova",
      FR: "Tout dans Supernova",
      DE: "Alles in Supernova",
      IT: "Tutto in Supernova",
      PT: "Tudo em Supernova",
      ZH: "超新星的所有功能",
      JA: "スーパーノバのすべて",
      AR: "كل شيء في السوبرنوفا",
    },
    customIntegrations: {
      EN: "Custom integrations",
      ES: "Integraciones personalizadas",
      FR: "Intégrations personnalisées",
      DE: "Benutzerdefinierte Integrationen",
      IT: "Integrazioni personalizzate",
      PT: "Integrações personalizadas",
      ZH: "自定义集成",
      JA: "カスタム統合",
      AR: "تكاملات مخصصة",
    },
    multiPlatformApps: {
      EN: "Multi-platform apps",
      ES: "Aplicaciones multiplataforma",
      FR: "Applications multi-plateformes",
      DE: "Multi-Plattform-Apps",
      IT: "App multi-piattaforma",
      PT: "Aplicativos multi-plataforma",
      ZH: "多平台应用",
      JA: "マルチプラットフォームアプリ",
      AR: "تطبيقات متعددة المنصات",
    },
    dedicatedAccountManager: {
      EN: "Dedicated account manager",
      ES: "Gerente de cuenta dedicado",
      FR: "Gestionnaire de compte dédié",
      DE: "Dedizierter Account Manager",
      IT: "Account manager dedicato",
      PT: "Gerente de conta dedicado",
      ZH: "专属客户经理",
      JA: "専任アカウントマネージャー",
      AR: "مدير حساب مخصص",
    },
    prioritySupport: {
      EN: "Priority support",
      ES: "Soporte prioritario",
      FR: "Support prioritaire",
      DE: "Prioritätssupport",
      IT: "Supporto prioritario",
      PT: "Suporte prioritário",
      ZH: "优先支持",
      JA: "優先サポート",
      AR: "دعم ذو أولوية",
    },
    perfectForGettingStarted: {
      EN: "Perfect for getting started",
      ES: "Perfecto para comenzar",
      FR: "Parfait pour commencer",
      DE: "Perfekt zum Einstieg",
      IT: "Perfetto per iniziare",
      PT: "Perfeito para começar",
      ZH: "非常适合入门",
      JA: "始めるのに最適",
      AR: "مثالي للبدء",
    },
    scaleYourBusiness: {
      EN: "Scale your business",
      ES: "Escala tu negocio",
      FR: "Faites évoluer votre entreprise",
      DE: "Skalieren Sie Ihr Geschäft",
      IT: "Scala la tua attività",
      PT: "Escale seu negócio",
      ZH: "扩展您的业务",
      JA: "ビジネスを拡大",
      AR: "قم بتوسيع نطاق عملك",
    },
    intelligentAutomation: {
      EN: "Intelligent automation",
      ES: "Automatización inteligente",
      FR: "Automatisation intelligente",
      DE: "Intelligente Automatisierung",
      IT: "Automazione intelligente",
      PT: "Automação inteligente",
      ZH: "智能自动化",
      JA: "インテリジェント自動化",
      AR: "أتمتة ذكية",
    },
    completeSolution: {
      EN: "Complete solution",
      ES: "Solución completa",
      FR: "Solution complète",
      DE: "Komplette Lösung",
      IT: "Soluzione completa",
      PT: "Solução completa",
      ZH: "完整解决方案",
      JA: "完全なソリューション",
      AR: "حل كامل",
    },
    mostPopular: {
      EN: "Most Popular",
      ES: "Más Popular",
      FR: "Le Plus Populaire",
      DE: "Am Beliebtesten",
      IT: "Più Popolare",
      PT: "Mais Popular",
      ZH: "最受欢迎",
      JA: "最も人気",
      AR: "الأكثر شعبية",
    },
    oneTimeSetup: {
      EN: "one-time setup",
      ES: "configuración única",
      FR: "configuration unique",
      DE: "einmalige Einrichtung",
      IT: "configurazione unica",
      PT: "configuração única",
      ZH: "一次性设置",
      JA: "1回限りのセットアップ",
      AR: "إعداد لمرة واحدة",
    },
    freeMonthsDomainHosting: {
      EN: "12 months free domain hosting",
      ES: "12 meses de alojamiento de dominio gratuito",
      FR: "12 mois d'hébergement de domaine gratuit",
      DE: "12 Monate kostenloses Domain-Hosting",
      IT: "12 mesi di hosting dominio gratuito",
      PT: "12 meses de hospedagem de domínio gratuita",
      ZH: "12个月免费域名托管",
      JA: "12ヶ月無料ドメインホスティング",
      AR: "12 شهرًا من استضافة النطاق المجانية",
    },
    professionalEmailAddress: {
      EN: "Professional email address",
      ES: "Dirección de correo electrónico profesional",
      FR: "Adresse e-mail professionnelle",
      DE: "Professionelle E-Mail-Adresse",
      IT: "Indirizzo email professionale",
      PT: "Endereço de email profissional",
      ZH: "专业电子邮件地址",
      JA: "プロフェッショナルメールアドレス",
      AR: "عنوان بريد إلكتروني احترافي",
    },
    sslCertificateSecurity: {
      EN: "SSL certificate & security",
      ES: "Certificado SSL y seguridad",
      FR: "Certificat SSL et sécurité",
      DE: "SSL-Zertifikat und Sicherheit",
      IT: "Certificato SSL e sicurezza",
      PT: "Certificado SSL e segurança",
      ZH: "SSL证书和安全",
      JA: "SSL証明書とセキュリティ",
      AR: "شهادة SSL والأمان",
    },
     basicAnalytics: {
      EN: "Customer analytics & data",
      ES: "Análisis y datos del cliente",
      FR: "Analytique et Données clients",
      DE: "Kundenanalyse & daten",
      IT: "Analisi e dati dei clienti",
      PT: "Análise e dados do cliente",
      ZH: "客户分析与数据",
      JA: "顧客分析とデータ",
      AR: "تحليلات وبيانات العملاء",
    },
    support247For12Months: {
      EN: "24/7 support for 12 months",
      ES: "Soporte 24/7 durante 12 meses",
      FR: "Support 24/7 pendant 12 mois",
      DE: "24/7-Support für 12 Monate",
      IT: "Supporto 24/7 per 12 mesi",
      PT: "Suporte 24/7 por 12 meses",
      ZH: "12个月24/7支持",
      JA: "12ヶ月間24/7サポート",
      AR: "دعم 24/7 لمدة 12 شهرًا",
    },
    freeUpdatesMaintenance: {
      EN: "Free updates & maintenance",
      ES: "Actualizaciones y mantenimiento gratuitos",
      FR: "Mises à jour et maintenance gratuites",
      DE: "Kostenlose Updates und Wartung",
      IT: "Aggiornamenti e manutenzione gratuiti",
      PT: "Atualizações e manutenção gratuitas",
      ZH: "免费更新和维护",
      JA: "無料アップデートとメンテナンス",
      AR: "تحديثات وصيانة مجانية",
    },
    backupRecovery: {
      EN: "Backup & recovery",
      ES: "Copia de seguridad y recuperación",
      FR: "Sauvegarde et récupération",
      DE: "Backup & Wiederherstellung",
      IT: "Backup e ripristino",
      PT: "Backup e recuperação",
      ZH: "备份和恢复",
      JA: "バックアップと復元",
      AR: "النسخ الاحتياطي والاسترداد",
    },
  }

  const blocks = [
    {
      name: t.nebulaStarter,
      price: "£250",
      description: translations.perfectForGettingStarted[currentLanguage],
      icon: <Sparkles className="h-6 w-6" />,
      features: [
        translations.professionalWebsiteDesign[currentLanguage],
        translations.mobileResponsive[currentLanguage],
        translations.contactForms[currentLanguage],
        translations.seoOptimized[currentLanguage],
        translations.socialMediaLinks[currentLanguage],
      ],
      popular: false,
    },
    {
      name: t.starCluster,
      price: "£750",
      description: translations.scaleYourBusiness[currentLanguage],
      icon: <Rocket className="h-6 w-6" />,
      features: [
        translations.everythingInNebula[currentLanguage],
        translations.bookingSystem[currentLanguage],
        translations.paymentProcessing[currentLanguage],
        translations.analyticsDashboard[currentLanguage],
      ],
      popular: true,
    },
    {
      name: t.supernovaAI,
      price: "£1,250",
      description: translations.intelligentAutomation[currentLanguage],
      icon: <Zap className="h-6 w-6" />,
      features: [
        translations.everythingInConstellation[currentLanguage],
        translations.aiChatbotAssistant[currentLanguage],
        translations.automatedWorkflows[currentLanguage],
        translations.advancedIntegrations[currentLanguage],
      ],
      popular: false,
    },
    {
      name: t.cosmosEnterprise,
      price: "£2,500",
      description: translations.completeSolution[currentLanguage],
      icon: <Orbit className="h-6 w-6" />,
      features: [
        translations.everythingInSupernova[currentLanguage],
        translations.customIntegrations[currentLanguage],
        translations.multiPlatformApps[currentLanguage],
        translations.prioritySupport[currentLanguage],
      ],
      popular: false,
    },
  ]

  const includedStandard = [
    translations.freeMonthsDomainHosting[currentLanguage],
    //translations.professionalEmailAddress[currentLanguage],
    translations.sslCertificateSecurity[currentLanguage],
    //translations.support247For12Months[currentLanguage],
    translations.freeUpdatesMaintenance[currentLanguage],
    translations.backupRecovery[currentLanguage],
    translations.support247For12Months[currentLanguage],
    translations.basicAnalytics[currentLanguage],
  ]

  return (
    <section id="building-blocks" className="py-16 md:py-20 lg:py-24 bg-lyra-dark" key={currentLanguage}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="p-3 md:p-4 bg-gradient-to-r from-lyra-blue/20 to-lyra-purple/20 rounded-full">
                <Blocks className="h-10 w-10 md:h-12 md:w-12 text-lyra-blue-light" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-4">
              <span className="bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent">
                {t.platformPackages}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-lyra-text-secondary max-w-3xl mx-auto mb-3 md:mb-4 font-medium px-4">
              {t.platformPackagesDesc}
            </p>
           </div>

          <div className="mb-8 md:mb-12 bg-gradient-to-r from-lyra-blue/10 to-lyra-purple/10 rounded-2xl p-6 md:p-8 border border-lyra-medium/50">
          <h3 className="text-xl md:text-2xl font-bold text-center text-lyra-text-primary mb-4 md:mb-6">
            {t.includedPlatform}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto">
            {includedStandard.map((item, index) => (
              <div key={index} className="flex items-center justify-center sm:justify-start space-x-2">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-lyra-purple-light flex-shrink-0" />
                <span className="text-sm md:text-base text-lyra-text-secondary font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-lyra-text-muted mt-4 md:mt-6 text-xs md:text-sm px-4">{t.setupFeeCovers}</p>
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {blocks.map((block, index) => (
              <Card
                key={index}
                className={`relative bg-lyra-medium/20 backdrop-blur-sm border-lyra-medium/50 hover:border-lyra-blue-light/50 transition-all duration-300 group ${
                  block.popular ? "ring-2 ring-lyra-purple-light/50 sm:scale-105" : ""
                }`}
              >
                {block.popular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-lyra-blue to-lyra-purple text-lyra-text-primary px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap shadow-lg">
                      {translations.mostPopular[currentLanguage]}
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pt-6 md:pt-8">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-gradient-to-br from-lyra-blue/20 to-lyra-purple/20 rounded-lg text-lyra-blue-light">
                      {block.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lyra-text-primary text-lg md:text-xl mb-2">{block.name}</CardTitle>
                  <div className="text-2xl md:text-3xl font-bold text-lyra-blue-light mb-1">{block.price}</div>
                  <div className="text-xs text-lyra-text-muted mb-2">{translations.oneTimeSetup[currentLanguage]}</div>
                  <CardDescription className="text-lyra-text-muted text-sm">{block.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-4 md:px-6">
                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {block.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-lyra-text-muted text-xs md:text-sm flex items-start">
                        <Check className="h-3 w-3 md:h-4 md:w-4 text-lyra-purple-light mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => {
                      const quoteSection = document.getElementById("quote")
                      quoteSection?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className={`w-full text-sm md:text-base ${
                      block.popular
                        ? "bg-gradient-to-r from-lyra-blue to-lyra-purple hover:from-lyra-blue-dark hover:to-lyra-purple-dark text-lyra-text-primary shadow-lg hover:shadow-xl"
                        : "bg-lyra-medium hover:bg-lyra-medium/80 text-lyra-text-primary"
                    } transition-all duration-300`}
                  >
                    {t.getStarted}
                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  )
}
