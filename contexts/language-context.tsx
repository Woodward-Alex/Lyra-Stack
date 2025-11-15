"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type LanguageCode = "EN" | "ES" | "FR" | "DE" | "IT" | "PT" | "ZH" | "JA" | "AR"

interface Translations {
  // Hero
  heroTitle: string
  heroSubtitle: string
  heroSubtitle2: string
  getStarted: string
  seeOurImpact: string

  // Services
  whatWeProvide: string
  servicesSubtitle: string
  digitalConsultancy: string
  digitalConsultancyDesc: string
  websitesMobileApps: string
  websitesMobileAppsDesc: string
  websiteMigration: string
  websiteMigrationDesc: string
  onlinePayment: string
  onlinePaymentDesc: string
  bookingScheduling: string
  bookingSchedulingDesc: string
  smartAutomation: string
  smartAutomationDesc: string
  dataAnalytics: string
  dataAnalyticsDesc: string
  chatbotsSupport: string
  chatbotsSupportDesc: string
  brandingCreative: string
  brandingCreativeDesc: string
  emailMarketing: string
  emailMarketingDesc: string
  securityCompliance: string
  securityComplianceDesc: string
  ongoingSupport: string
  ongoingSupportDesc: string

  // Website Stats
  whyWebsiteMatters: string
  websiteStatsDesc: string
  trustIncrease: string
  moreCustomers: string
  alwaysOpen: string
  betterExperience: string

  // Building Blocks
  platformPackages: string
  platformPackagesDesc: string
  nebulaStarter: string
  starCluster: string
  supernovaAI: string
  cosmosEnterprise: string

  // Other
  seeOurWork: string
  getYourQuote: string
  callOurTeam: string
  loginExistingUsers: string

  // Navigation
  whyLyraStack: string
  services: string
  solutions: string
  ourWork: string
  customerPortal: string

  // Footer
  readyToLaunch: string
  createTogether: string
  customersCenter: string
  orchestrateWebsite: string
  contact: string
  registeredUKBusiness: string
  companyNumber: string
  allRightsReserved: string

  // Service Showcase
  seeOurSolutions: string
  realWorldExamples: string
  aiChatbots: string
  aiChatbotsDesc: string
  paymentSystems: string
  paymentSystemsDesc: string
  crmSystems: string
  crmSystemsDesc: string
  analytics: string
  analyticsDesc: string
  bookingSystems: string
  bookingSystemsDesc: string
  ecommerce: string
  ecommerceDesc: string

  why: string
  allSizes: string
  allSizesDesc: string
  worldwide: string
  worldwideDesc: string
  allSectors: string
  allSectorsDesc: string
  complete: string
  completeDesc: string
  fromSimpleTo: string
  includedPlatform: string
  needSomethingCustom: string
  whyChooseLyra: string
  projectDetails: string
  websitesAndApps: string
  paymentSolutions: string
  smartAutomationAndAI: string
  dataAndAnalytics: string
  brandingAndCreative: string

  givingBusinessLeads: string
  setupFeeCovers: string
  fromStartupsToEnterprises: string
  realProjectsResults: string
  businessOutcome: string

  // Quote Form
  name: string
  email: string
  company: string
  currency: string
  selectCurrency: string
  platformType: string
  selectPlatform: string
  timeline: string
  selectTimeline: string
  flexibleTimeline: string
  rushTimeline: string
  addOnFeatures: string
  projectDescription: string
  tellUsAboutYourProject: string
  calculateEstimate: string
  submitForPrototype: string
  estimatedSetupCost: string
  includesFor12Months: string
  freeDomainHosting: string
  professionalEmailAddress: string
  sslCertificateSecurity: string
  support247: string
  freeUpdatesMaintenance: string
  after12Months: string

  // Chatbot Translations
  chatbotWelcome: string
  chatbotQuickQuestions: string
  chatbotAskAnything: string
  chatbotServicesResponse: string
  chatbotPricingResponse: string
  chatbotInternationalResponse: string
  chatbotIndustriesResponse: string
  chatbotTimelineResponse: string
  chatbotBuildingBlocksResponse: string
  chatbotSupportResponse: string
  chatbotDefaultResponse: string

  customerFirstAlways: string
  customerFirstDesc: string
  secureCompliant: string
  secureCompliantDesc: string
  worldwideService: string
  worldwideServiceDesc: string
  allIndustries: string
  allIndustriesDesc: string
  completeSolutions: string
  completeSolutionsDesc: string
  startupsLabel: string
  toEnterprisesLabel: string
  worldwideLabel: string
  anyCountryLabel: string
  allSectorsLabel: string
  everyIndustryLabel: string
  fastResponse: string
  fastResponseLabel: string

  // USP Translations
  instantMVP: string
  instantMVPDesc: string
  onlineFormEstimates: string
  hour24Prototypes: string
  hour24PrototypesDesc: string
  detailedPrototype24hrs: string
  fullSpectrumSolutions: string
  fullSpectrumSolutionsDesc: string
  basicToComplexApps: string
  uniqueApproachDelivers: string
}

const translations: Record<LanguageCode, Translations> = {
  EN: {
    heroTitle: "Propelling your business from",
    heroTitle2: "concept to cosmos",
    heroSubtitle:
      "Built to stack and scale",
        heroSubtitle2:
      "Orchestrating your digital presence across web, mobile, and desktop.",
    getStarted: "Get Started",
    //seeOurImpact: "See Our Impact",
    whatWeProvide: "Our Services",
    servicesSubtitle: "From expert consultancy to hands-on development, complete digital solutions for your business.",
    digitalConsultancy: "Digital Consultancy",
    digitalConsultancyDesc: "Expert guidance to choose the right digital solutions for your business goals.",
    websitesMobileApps: "Websites & Mobile Apps",
    websitesMobileAppsDesc: "Custom websites and mobile apps that work perfectly on any device.",
    websiteMigration: "Website Migration",
    websiteMigrationDesc: "Move your existing website to us - we'll host it better and make it faster.",
    onlinePayment: "Ecommerce & Payment Systems",
    onlinePaymentDesc: "Catalogues and online payments securely with Stripe, PayPal, Shopify and other popular methods.",
    bookingScheduling: "Booking & Scheduling",
    bookingSchedulingDesc: "Let customers book appointments online with automatic reminders.",
    smartAutomation: "Smart Automation & AI",
    smartAutomationDesc: "Automate tasks with intelligent systems that save time and money.",
    dataAnalytics: "Data & Analytics",
    dataAnalyticsDesc: "Powerful insights that empower your business decisions and growth.",
    chatbotsSupport: "Chatbots & Support",
    chatbotsSupportDesc: "Automated chat assistants that answer questions 24/7.",
    brandingCreative: "Branding & Creative Package",
    brandingCreativeDesc: "Logos, AI-generated images, graphics, and compelling copy for your brand.",
    emailMarketing: "Email & Marketing",
    emailMarketingDesc: "Professional email setup and automated campaigns.",
    securityCompliance: "Security & Compliance",
    securityComplianceDesc: "Enterprise-grade security ensuring you and your customers data is secure.",
    ongoingSupport: "Ongoing Support",
    ongoingSupportDesc: "We keep everything running smoothly with guaranteed response times.",
    whyWebsiteMatters: "Why your website matters",
    websiteStatsDesc:
      "Your website is your storefront",
    websiteStatsDesc2:
    "Lyra Stack combines cutting-edge technology with deep customer insights to build platforms that convert visitors into advocates and data into decisions.",
    trustIncrease: "Brand trust increase",
    moreCustomers: "More customers",
    alwaysOpen: "Always Open",
    betterExperience: "Better Experience",
    platformPackages: "Platform Packages",
    platformPackagesDesc:
      "Tailored packages that scale with your business - from basic websites to full AI-powered solutions",
    nebulaStarter: "Nebula Starter",
    starCluster: "Star Cluster",
    supernovaAI: "Supernova AI",
    cosmosEnterprise: "Cosmos Enterprise",
    seeOurWork: "See Our Work",
    getYourQuote: "Get your instant quote",
    callOurTeam: "Call Our Team",
    loginExistingUsers: "Login for Existing Users",
    whyLyraStack: "Why Lyra Stack",
    services: "Services",
    solutions: "Solutions",
    ourWork: "Our Work",
    customerPortal: "Customer Portal",
    readyToLaunch: "Ready to launch your project?",
    createTogether: "Let's create something amazing together - your digital transformation starts here.",
    customersCenter:
      "Lyra Stack orchestrates your website and brand so you can focus on what matters in your business.",
    orchestrateWebsite: "Lyra Stack orchestrates your website and brand so you can focus on what matters in your business.",
    contact: "Contact",
    registeredUKBusiness: "Registered UK Business",
    companyNumber: "Company No. 12345678",
    allRightsReserved: "all rights reserved.",
    seeOurSolutions: "Browse from our catalogue of solutions",
    realWorldExamples: "How we help businesses thrive",
    aiChatbots: "AI Chatbots",
    aiChatbotsDesc: "24/7 automated customer support",
    paymentSystems: "Payment Systems",
    paymentSystemsDesc: "Secure payment processing",
    crmSystems: "CRM Systems",
    crmSystemsDesc: "Customer relationship management",
    analytics: "Analytics",
    analyticsDesc: "Data-driven insights",
    bookingSystems: "Booking Systems",
    bookingSystemsDesc: "Appointment scheduling",
    ecommerce: "E-commerce",
    ecommerceDesc: "Complete online store",
    why: "Why?",
    allSizes: "All Sizes",
    allSizesDesc: "Startups to Enterprises",
    worldwide: "Worldwide",
    worldwideDesc: "Any Country",
    allSectors: "All Sectors",
    allSectorsDesc: "Any Industry",
    complete: "Complete",
    completeDesc: "End-to-End Solutions",
    fromSimpleTo:
      "From simple websites to complete platforms - we handle everything so you can focus on what matters most",
    includedPlatform: "Included with every platform",
    needSomethingCustom: "Need Something Custom?",
    whyChooseLyra: "Why choose Lyra Stack?",
    projectDetails: "Project Details",
    websitesAndApps: "Websites & Apps",
    paymentSolutions: "Payment Solutions",
    smartAutomationAndAI: "Smart Automation & AI",
    dataAndAnalytics: "Data & Analytics",
    brandingAndCreative: "Branding & Creative",
    givingBusinessLeads: "Giving you new business leads and customers.",
    setupFeeCovers:
      "Setup fee covers initial build + 12 months of everything above. After 12 months: monthly cost to continue.",
    fromStartupsToEnterprises:
      "From startups to global enterprises - we build solutions that scale with you. Serving all industries worldwide with secure, compliant platforms.",
    realProjectsResults: "Real projects, real results. Every solution designed for measurable business impact.",
    businessOutcome: "Business Outcome:",
    name: "Name",
    email: "Email",
    company: "Company",
    currency: "Currency",
    selectCurrency: "Select currency",
    platformType: "Platform Type",
    selectPlatform: "Select platform",
    timeline: "Timeline",
    selectTimeline: "Select timeline",
    flexibleTimeline: "Flexible (4-6 weeks)",
    rushTimeline: "Rush (2-3 weeks) +30%",
    addOnFeatures: "Add-On Features",
    projectDescription: "Project Description",
    tellUsAboutYourProject: "Tell us about your project goals and requirements...",
    calculateEstimate: "Calculate Estimate",
    submitForPrototype: "Submit for 24h Prototype",
    estimatedSetupCost: "Estimated Setup Cost",
    includesFor12Months: "Includes for 12 Months:",
    freeDomainHosting: "Free domain & hosting",
    professionalEmailAddress: "Professional email address",
    sslCertificateSecurity: "SSL certificate & security",
    support247: "24/7 support",
    freeUpdatesMaintenance: "Free updates & maintenance",
    after12Months: "After 12 months: £20/month to continue all services",

    chatbotWelcome: "Hello! I'm Lyra, your digital solutions guide. How can I help you today?",
    chatbotQuickQuestions: "Quick questions:",
    chatbotAskAnything: "Ask me anything...",
    chatbotServicesResponse:
      "We offer complete digital solutions including websites, mobile apps, payment systems, booking platforms, AI integration, chatbots, CRM systems, analytics dashboards, and digital consultancy. Everything from simple websites to complex enterprise platforms!",
    chatbotPricingResponse:
      "Our starter platform begins at £250 which includes setup, 12 months free domain hosting, email address, SSL security, and 24/7 support for a year. We also offer custom quotes based on your specific needs. Would you like to get a personalized quote?",
    chatbotInternationalResponse:
      "Yes! We work with businesses worldwide, serving clients in any country. Our solutions are designed to work globally with multi-currency support and international best practices.",
    chatbotIndustriesResponse:
      "We serve all sectors including finance, health & fitness, property, energy, and more. From freelancers and startups to large enterprises, we've got you covered.",
    chatbotTimelineResponse:
      "Simple websites can be ready in as little as 1-2 weeks. For complex platforms, timelines vary based on features. We offer rush delivery options and provide detailed project timelines during consultation.",
    chatbotBuildingBlocksResponse:
      "Our building blocks are modular components you can add to your platform. Think of them like Lego pieces - payment systems, user authentication, analytics, AI features, etc. You only pay for what you need and can add more as you grow!",
    chatbotSupportResponse:
      "Every platform includes 12 months of support. We monitor, maintain, and help you succeed. After the first year, we offer flexible support packages to match your needs.",
    chatbotDefaultResponse:
      "I'd be happy to help you with that! For detailed information, I recommend getting a personalized quote or speaking with our team. You can also explore our services section to learn more about what we offer.",

    customerFirstAlways: "Customer-First Always",
    customerFirstDesc: "Your success drives everything we do.",
    secureCompliant: "Secure & Compliant",
    secureCompliantDesc: "GDPR, CCPA, and local compliance. Bank-level security.",
    worldwideService: "Worldwide Service",
    worldwideServiceDesc: "We work with clients in any country.",
    allIndustries: "All Industries",
    allIndustriesDesc: "Finance, health, property, energy, and more.",
    completeSolutions: "Complete Solutions",
    completeSolutionsDesc: "From concept to launch and beyond.",
    startupsLabel: "Startups",
    toEnterprisesLabel: "to Enterprises",
    worldwideLabel: "Worldwide",
    anyCountryLabel: "Any Country",
    allSectorsLabel: "All Sectors",
    everyIndustryLabel: "Every Industry",
    fastResponse: "24hrs",
    fastResponseLabel: "Fast Response",

    // USP Translations
    instantMVP: "Instant MVP Quotes",
    instantMVPDesc:
      "Get real-time estimates for your project with our intelligent quote system. No waiting, no surprises.",
    onlineFormEstimates: "Online Form + Real-time Estimates",
    hour24Prototypes: "24-Hour Prototypes",
    hour24PrototypesDesc:
      "Receive an interactive website prototype within 24 hours of submitting your requirements. See your vision come to life.",
    detailedPrototype24hrs: "Detailed Prototype in 24hrs",
    fullSpectrumSolutions: "Full Spectrum Solutions",
    fullSpectrumSolutionsDesc:
      "From basic websites to complex UIs, AI integration, and full-stack applications. We do it all.",
    basicToComplexApps: "Basic to Complex Applications",
    uniqueApproachDelivers: "As a UK based company, our unique approach delivers results faster than other traditional companies.",
  },
  ES: {
    heroTitle: "Lyra Stack impulsa su negocio del concepto al cosmos.",
    heroSubtitle:
      "Orquestando su negocio en web, móvil y escritorio tan fluido como la luz de las estrellas—construido para apilar y escalar desde su primer usuario hasta su millonésimo.",
    getStarted: "Comenzar",
    seeOurImpact: "Ver Nuestro Impacto",
    whatWeProvide: "Lo Que Ofrecemos",
    servicesSubtitle:
      "Desde consultoría experta hasta desarrollo práctico - soluciones digitales completas para su negocio",
    digitalConsultancy: "Consultoría Digital",
    digitalConsultancyDesc: "Orientación experta para elegir las soluciones digitales adecuadas para sus objetivos.",
    websitesMobileApps: "Sitios Web y Apps Móviles",
    websitesMobileAppsDesc: "Sitios web y aplicaciones móviles personalizados que funcionan perfectamente.",
    websiteMigration: "Migración de Sitios Web",
    websiteMigrationDesc: "Traslade su sitio web existente - lo alojaremos mejor y más rápido.",
    onlinePayment: "Sistemas de Pago en Línea",
    onlinePaymentDesc: "Acepte pagos de forma segura con Stripe, PayPal y otros métodos populares.",
    bookingScheduling: "Reservas y Programación",
    bookingSchedulingDesc: "Permita que los clientes reserven citas en línea con recordatorios automáticos.",
    smartAutomation: "Automatización Inteligente e IA",
    smartAutomationDesc: "Automatice tareas con sistemas inteligentes que ahorran tiempo y dinero.",
    dataAnalytics: "Datos y Análisis",
    dataAnalyticsDesc: "Información poderosa que potencia las decisiones y el crecimiento de su negocio.",
    chatbotsSupport: "Chatbots y Soporte",
    chatbotsSupportDesc: "Asistentes de chat automatizados que responden preguntas 24/7.",
    brandingCreative: "Paquete de Marca y Creatividad",
    brandingCreativeDesc: "Logotipos, imágenes generadas por IA, gráficos y textos para su marca.",
    emailMarketing: "Email y Marketing",
    emailMarketingDesc: "Configuración de correo profesional y campañas automatizadas.",
    securityCompliance: "Seguridad y Cumplimiento",
    securityComplianceDesc: "Seguridad empresarial con cumplimiento de GDPR y normativas locales.",
    ongoingSupport: "Soporte Continuo",
    ongoingSupportDesc: "Mantenemos todo funcionando sin problemas con tiempos de respuesta garantizados.",
    whyWebsiteMatters: "Por Qué Importa Su Sitio Web",
    websiteStatsDesc:
      "Su sitio web es su escaparate—su acelerador de negocios más poderoso. Lyra Stack combina tecnología de vanguardia con conocimientos profundos del cliente para construir plataformas que convierten visitantes en defensores y datos en decisiones.",
    trustIncrease: "Aumento de Confianza en la Marca",
    moreCustomers: "Más Clientes",
    alwaysOpen: "Siempre Abierto",
    betterExperience: "Mejor Experiencia",
    platformPackages: "Paquetes de Plataforma",
    platformPackagesDesc:
      "Paquetes de plataforma con temática galáctica que escalan con su negocio—desde sitios web básicos hasta soluciones completas con IA",
    nebulaStarter: "Nebulosa Inicial",
    starCluster: "Cúmulo Estelar",
    supernovaAI: "Supernova IA",
    cosmosEnterprise: "Cosmos Empresarial",
    seeOurWork: "Ver Nuestro Trabajo",
    getYourQuote: "Obtenga Su Cotización",
    callOurTeam: "Llame a Nuestro Equipo",
    loginExistingUsers: "Iniciar Sesión",
    whyLyraStack: "Por Qué Lyra Stack",
    services: "Servicios",
    solutions: "Soluciones",
    ourWork: "Nuestro Trabajo",
    customerPortal: "Portal del Cliente",
    readyToLaunch: "¿Listo para Lanzar Su Proyecto?",
    createTogether: "Creemos algo increíble juntos. Su transformación digital comienza aquí.",
    customersCenter:
      "Los clientes en el centro de nuestro universo. Lyra Stack orquesta su sitio web y marca para que pueda concentrarse en lo que importa en el negocio.",
    orchestrateWebsite:
      "Lyra Stack orquesta su sitio web y marca para que pueda concentrarse en lo que importa en el negocio.",
    contact: "Contacto",
    registeredUKBusiness: "Empresa Registrada en el Reino Unido",
    companyNumber: "Empresa No. 12345678",
    allRightsReserved: "Todos los derechos reservados. Los clientes en el centro de nuestro universo.",
    seeOurSolutions: "Vea Nuestras Soluciones en Acción",
    realWorldExamples: "Ejemplos del mundo real de cómo ayudamos a las empresas a prosperar",
    aiChatbots: "Chatbots de IA",
    aiChatbotsDesc: "Soporte al cliente automatizado 24/7",
    paymentSystems: "Sistemas de Pago",
    paymentSystemsDesc: "Procesamiento de pagos seguro",
    crmSystems: "Sistemas CRM",
    crmSystemsDesc: "Gestión de relaciones con clientes",
    analytics: "Análisis",
    analyticsDesc: "Insights basados en datos",
    bookingSystems: "Sistemas de Reserva",
    bookingSystemsDesc: "Programación de citas",
    ecommerce: "Comercio Electrónico",
    ecommerceDesc: "Tienda en línea completa",
    why: "¿Por Qué?",
    allSizes: "Todos los Tamaños",
    allSizesDesc: "Startups a Empresas",
    worldwide: "Mundial",
    worldwideDesc: "Cualquier País",
    allSectors: "Todos los Sectores",
    allSectorsDesc: "Cualquier Industria",
    complete: "Completo",
    completeDesc: "Soluciones Integrales",
    fromSimpleTo:
      "Desde sitios web simples hasta plataformas completas - manejamos todo para que pueda concentrarse en lo que más importa",
    includedPlatform: "Incluido con Cada Plataforma",
    needSomethingCustom: "¿Necesita Algo Personalizado?",
    whyChooseLyra: "Por Qué Elegir Lyra Stack",
    projectDetails: "Detalles del Proyecto",
    websitesAndApps: "Sitios Web y Apps",
    paymentSolutions: "Soluciones de Pago",
    smartAutomationAndAI: "Automatización Inteligente e IA",
    dataAndAnalytics: "Datos y Análisis",
    brandingAndCreative: "Branding y Creatividad",
    givingBusinessLeads: "Dándole nuevos clientes potenciales y clientes.",
    setupFeeCovers:
      "La tarifa de configuración cubre la construcción inicial + 12 meses de todo lo anterior. Después de 12 meses: £20/mes para continuar.",
    fromStartupsToEnterprises:
      "De startups a empresas globales - construimos soluciones que escalan con usted. Sirviendo todas las industrias en todo el mundo con plataformas seguras y conformes.",
    realProjectsResults:
      "Proyectos reales, resultados reales. Cada solución diseñada para un impacto comercial medible.",
    businessOutcome: "Resultado Comercial:",
    name: "Nombre",
    email: "Correo electrónico",
    company: "Empresa",
    currency: "Moneda",
    selectCurrency: "Seleccionar moneda",
    platformType: "Tipo de Plataforma",
    selectPlatform: "Seleccionar plataforma",
    timeline: "Plazo",
    selectTimeline: "Seleccionar plazo",
    flexibleTimeline: "Flexible (4-6 semanas)",
    rushTimeline: "Urgente (2-3 semanas) +30%",
    addOnFeatures: "Características Adicionales",
    projectDescription: "Descripción del Proyecto",
    tellUsAboutYourProject: "Cuéntanos sobre los objetivos y requisitos de tu proyecto...",
    calculateEstimate: "Calcular Presupuesto",
    submitForPrototype: "Enviar para Prototipo 24h",
    estimatedSetupCost: "Costo de Configuración Estimado",
    includesFor12Months: "Incluye por 12 Meses:",
    freeDomainHosting: "Dominio y alojamiento gratuitos",
    professionalEmailAddress: "Dirección de correo electrónico profesional",
    sslCertificateSecurity: "Certificado SSL y seguridad",
    support247: "Soporte 24/7",
    freeUpdatesMaintenance: "Actualizaciones y mantenimiento gratuitos",
    after12Months: "Después de 12 meses: £20/mes para continuar todos los servicios",

    chatbotWelcome: "¡Hola! Soy Lyra, su guía de soluciones digitales. ¿Cómo puedo ayudarle hoy?",
    chatbotQuickQuestions: "Preguntas rápidas:",
    chatbotAskAnything: "Pregúntame cualquier cosa...",
    chatbotServicesResponse:
      "Ofrecemos soluciones digitales completas que incluyen sitios web, aplicaciones móviles, sistemas de pago, plataformas de reservas, integración de IA, chatbots, sistemas CRM, paneles de análisis y consultoría digital. ¡Desde sitios web simples hasta plataformas empresariales complejas!",
    chatbotPricingResponse:
      "Nuestra plataforma inicial comienza en £250, que incluye configuración, 12 meses de alojamiento de dominio gratuito, dirección de correo electrónico, seguridad SSL y soporte 24/7 durante un año. También ofrecemos cotizaciones personalizadas según sus necesidades específicas. ¿Le gustaría obtener una cotización personalizada?",
    chatbotInternationalResponse:
      "¡Sí! Trabajamos con empresas de todo el mundo, atendiendo clientes en cualquier país. Nuestras soluciones están diseñadas para funcionar globalmente con soporte multimoneda y mejores prácticas internacionales.",
    chatbotIndustriesResponse:
      "Atendemos todos los sectores, incluidos finanzas, salud y fitness, propiedades, energía y más. Desde freelancers y startups hasta grandes empresas, lo tenemos cubierto.",
    chatbotTimelineResponse:
      "Los sitios web simples pueden estar listos en tan solo 1-2 semanas. Para plataformas complejas, los plazos varían según las características. Ofrecemos opciones de entrega urgente y proporcionamos cronogramas detallados del proyecto durante la consulta.",
    chatbotBuildingBlocksResponse:
      "Nuestros bloques de construcción son componentes modulares que puede agregar a su plataforma. Piense en ellos como piezas de Lego: sistemas de pago, autenticación de usuarios, análisis, características de IA, etc. ¡Solo paga por lo que necesita y puede agregar más a medida que crece!",
    chatbotSupportResponse:
      "Cada plataforma incluye 12 meses de soporte 24/7. Monitoreamos, mantenemos y ayudamos a tener éxito. Después del primer año, ofrecemos paquetes de soporte flexibles para satisfacer sus necesidades.",
    chatbotDefaultResponse:
      "¡Estaré encantada de ayudarte con eso! Para obtener información detallada, recomiendo obtener una cotización personalizada o hablar con nuestro equipo. También puede explorar nuestra sección de servicios para obtener más información sobre lo que ofrecemos.",

    customerFirstAlways: "Cliente Primero Siempre",
    customerFirstDesc: "Su éxito impulsa todo lo que hacemos.",
    secureCompliant: "Seguro y Conforme",
    secureCompliantDesc: "GDPR, CCPA y cumplimiento local. Seguridad de nivel bancario.",
    worldwideService: "Servicio Mundial",
    worldwideServiceDesc: "Trabajamos con clientes en cualquier país.",
    allIndustries: "Todas las Industrias",
    allIndustriesDesc: "Finanzas, salud, propiedades, energía y más.",
    completeSolutions: "Soluciones Completas",
    completeSolutionsDesc: "Desde el concepto hasta el lanzamiento y más allá.",
    startupsLabel: "Startups",
    toEnterprisesLabel: "a Empresas",
    worldwideLabel: "Mundial",
    anyCountryLabel: "Cualquier País",
    allSectorsLabel: "Todos los Sectores",
    everyIndustryLabel: "Cada Industria",
    fastResponse: "24hrs",
    fastResponseLabel: "Respuesta Rápida",

    // USP Translations
    instantMVP: "Cotizaciones MVP Instantáneas",
    instantMVPDesc:
      "Obtenga estimaciones en tiempo real para su proyecto con nuestro sistema de cotización inteligente. Sin esperas, sin sorpresas.",
    onlineFormEstimates: "Formulario en Línea + Estimaciones en Tiempo Real",
    hour24Prototypes: "Prototipos en 24 Horas",
    hour24PrototypesDesc:
      "Reciba un prototipo detallado del sitio web dentro de las 24 horas de enviar sus requisitos. Vea su visión cobrar vida.",
    detailedPrototype24hrs: "Prototipo Detallado en 24hrs",
    fullSpectrumSolutions: "Soluciones de Espectro Completo",
    fullSpectrumSolutionsDesc:
      "Desde sitios web básicos hasta interfaces complejas, integración de IA, chatbots y aplicaciones full-stack. Lo hacemos todo.",
    basicToComplexApps: "Aplicaciones Básicas a Complejas",
    uniqueApproachDelivers: "Nuestro enfoque único entrega resultados más rápido que el desarrollo tradicional",
  },
  FR: {
    heroTitle: "Lyra Stack propulse votre entreprise du concept au cosmos.",
    heroSubtitle:
      "Orchestrer votre entreprise sur le web, mobile et desktop aussi fluide que la lumière des étoiles—conçu pour s'empiler et évoluer de votre premier utilisateur à votre millionième.",
    getStarted: "Commencer",
    seeOurImpact: "Voir Notre Impact",
    whatWeProvide: "Ce Que Nous Offrons",
    servicesSubtitle:
      "Du conseil expert au développement pratique - des solutions numériques complètes pour votre entreprise",
    digitalConsultancy: "Conseil Numérique",
    digitalConsultancyDesc: "Conseils d'experts pour choisir les bonnes solutions numériques pour vos objectifs.",
    websitesMobileApps: "Sites Web et Applications Mobiles",
    websitesMobileAppsDesc: "Sites web et applications mobiles personnalisés qui fonctionnent parfaitement.",
    websiteMigration: "Migration de Site Web",
    websiteMigrationDesc: "Transférez votre site web existant - nous l'hébergerons mieux et plus rapidement.",
    onlinePayment: "Systèmes de Paiement en Ligne",
    onlinePaymentDesc: "Acceptez les paiements en toute sécurité avec Stripe, PayPal et d'autres méthodes.",
    bookingScheduling: "Réservation et Planification",
    bookingSchedulingDesc: "Permettez aux clients de réserver des rendez-vous en ligne avec rappels automatiques.",
    smartAutomation: "Automatisation Intelligente et IA",
    smartAutomationDesc: "Automatisez les tâches avec des systèmes intelligents qui économisent temps et argent.",
    dataAnalytics: "Données et Analyses",
    dataAnalyticsDesc: "Des informations puissantes qui renforcent vos décisions et votre croissance.",
    chatbotsSupport: "Chatbots et Support",
    chatbotsSupportDesc: "Assistants de chat automatisés qui répondent aux questions 24/7.",
    brandingCreative: "Pack Branding et Créatif",
    brandingCreativeDesc: "Logos, images IA, graphiques et textes convaincants pour votre marque.",
    emailMarketing: "Email et Marketing",
    emailMarketingDesc: "Configuration d'e-mail professionnelle et campagnes automatisées.",
    securityCompliance: "Sécurité et Conformité",
    securityComplianceDesc: "Sécurité de niveau entreprise avec conformité RGPD et locale.",
    ongoingSupport: "Support Continu",
    ongoingSupportDesc: "Nous maintenons tout en bon état avec des temps de réponse garantis.",
    whyWebsiteMatters: "Pourquoi Votre Site Web Compte",
    websiteStatsDesc:
      "Votre site web est votre vitrine—votre accélérateur commercial le plus puissant. Lyra Stack combine technologie de pointe et connaissances client pour créer des plateformes qui transforment visiteurs en défenseurs et données en décisions.",
    trustIncrease: "Augmentation de la Confiance",
    moreCustomers: "Plus de Clients",
    alwaysOpen: "Toujours Ouvert",
    betterExperience: "Meilleure Expérience",
    platformPackages: "Packs Plateforme",
    platformPackagesDesc:
      "Packs de plateforme sur le thème galactique qui évoluent avec votre entreprise—des sites web basiques aux solutions IA complètes",
    nebulaStarter: "Nébuleuse Débutant",
    starCluster: "Amas d'Étoiles",
    supernovaAI: "Supernova IA",
    cosmosEnterprise: "Cosmos Entreprise",
    seeOurWork: "Voir Notre Travail",
    getYourQuote: "Obtenez Votre Devis",
    callOurTeam: "Appelez Notre Équipe",
    loginExistingUsers: "Connexion",
    whyLyraStack: "Pourquoi Lyra Stack",
    services: "Services",
    solutions: "Solutions",
    ourWork: "Notre Travail",
    customerPortal: "Portail Client",
    readyToLaunch: "Prêt à Lancer Votre Projet?",
    createTogether: "Créons quelque chose d'incroyable ensemble. Votre transformation numérique commence ici.",
    customersCenter:
      "Les clients au centre de notre univers. Lyra Stack orchestre votre site web et votre marque pour que vous puissiez vous concentrer sur ce qui compte dans les affaires.",
    orchestrateWebsite:
      "Lyra Stack orchestre votre site web et votre marque pour que vous puissiez vous concentrer sur ce qui compte dans les affaires.",
    contact: "Contact",
    registeredUKBusiness: "Entreprise Enregistrée au Royaume-Uni",
    companyNumber: "Société No. 12345678",
    allRightsReserved: "Tous droits réservés. Les clients au centre de notre univers.",
    seeOurSolutions: "Voyez Nos Solutions en Action",
    realWorldExamples: "Exemples concrets de la façon dont nous aidons les entreprises à prospérer",
    aiChatbots: "Chatbots IA",
    aiChatbotsDesc: "Support client automatisé 24/7",
    paymentSystems: "Systèmes de Paiement",
    paymentSystemsDesc: "Traitement des paiements sécurisé",
    crmSystems: "Systèmes CRM",
    crmSystemsDesc: "Gestion de la relation client",
    analytics: "Analytique",
    analyticsDesc: "Insights basés sur les données",
    bookingSystems: "Systèmes de Réservation",
    bookingSystemsDesc: "Planification de rendez-vous",
    ecommerce: "E-commerce",
    ecommerceDesc: "Boutique en ligne complète",
    why: "Pourquoi?",
    allSizes: "Toutes Tailles",
    allSizesDesc: "Startups aux Entreprises",
    worldwide: "Mondial",
    worldwideDesc: "N'importe Quel Pays",
    allSectors: "Tous Secteurs",
    allSectorsDesc: "Toute Industrie",
    complete: "Complet",
    completeDesc: "Solutions de Bout en Bout",
    fromSimpleTo:
      "Des sites web simples aux plateformes complètes - nous gérons tout pour que vous puissiez vous concentrer sur ce qui compte le plus",
    includedPlatform: "Inclus avec Chaque Plateforme",
    needSomethingCustom: "Besoin de Quelque Chose de Personnalisé?",
    whyChooseLyra: "Pourquoi Choisir Lyra Stack",
    projectDetails: "Détails du Projet",
    websitesAndApps: "Sites Web et Apps",
    paymentSolutions: "Solutions de Paiement",
    smartAutomationAndAI: "Automatisation Intelligente et IA",
    dataAndAnalytics: "Données et Analyses",
    brandingAndCreative: "Branding et Créatif",
    givingBusinessLeads: "Vous apportant de nouveaux prospects et clients.",
    setupFeeCovers:
      "Les frais de configuration couvrent la construction initiale + 12 mois de tout ce qui précède. Après 12 mois : £20/mois pour continuer.",
    fromStartupsToEnterprises:
      "Des startups aux entreprises mondiales - nous créons des solutions qui évoluent avec vous. Au service de toutes les industries dans le monde avec des plateformes sécurisées et conformes.",
    realProjectsResults: "Projets réels, résultats réels. Chaque solution conçue pour un impact commercial mesurable.",
    businessOutcome: "Résultat Commercial:",
    name: "Nom",
    email: "Email",
    company: "Entreprise",
    currency: "Devise",
    selectCurrency: "Sélectionner la devise",
    platformType: "Type de Plateforme",
    selectPlatform: "Sélectionner la plateforme",
    timeline: "Délai",
    selectTimeline: "Sélectionner le délai",
    flexibleTimeline: "Flexible (4-6 semaines)",
    rushTimeline: "Urgent (2-3 semaines) +30%",
    addOnFeatures: "Fonctionnalités Supplémentaires",
    projectDescription: "Description du Projet",
    tellUsAboutYourProject: "Parlez-nous de vos objectifs et exigences...",
    calculateEstimate: "Calculer l'Estimation",
    submitForPrototype: "Soumettre pour Prototype 24h",
    estimatedSetupCost: "Coût de Configuration Estimé",
    includesFor12Months: "Inclus pendant 12 Mois:",
    freeDomainHosting: "Domaine et hébergement gratuits",
    professionalEmailAddress: "Adresse e-mail professionnelle",
    sslCertificateSecurity: "Certificat SSL et sécurité",
    support247: "Support 24/7",
    freeUpdatesMaintenance: "Mises à jour et maintenance gratuites",
    after12Months: "Après 12 mois: £20/mois pour continuer tous les services",

    chatbotWelcome:
      "Bonjour! Je suis Lyra, votre guide de solutions numériques. Comment puis-je vous aider aujourd'hui?",
    chatbotQuickQuestions: "Questions rapides:",
    chatbotAskAnything: "Demandez-moi n'importe quoi...",
    chatbotServicesResponse:
      "Nous offrons des solutions numériques complètes incluant sites web, applications mobiles, systèmes de paiement, plateformes de réservation, intégration IA, chatbots, systèmes CRM, tableaux de bord analytiques et consultation numérique. De simples sites web aux plateformes d'entreprise complexes!",
    chatbotPricingResponse:
      "Notre plateforme de démarrage commence à 250 £, ce qui inclut la configuration, 12 mois d'hébergement de domaine gratuit, adresse e-mail, sécurité SSL et support 24/7 pendant un an. Nous proposons également des devis personnalisés en fonction de vos besoins spécifiques. Souhaitez-vous obtenir un devis personnalisé?",
    chatbotInternationalResponse:
      "Oui! Nous travaillons avec des entreprises du monde entier, servant des clients dans n'importe quel pays. Nos solutions sont conçues pour fonctionner globalement avec un support multi-devises et des meilleures pratiques internationales.",
    chatbotIndustriesResponse:
      "Nous servons tous les secteurs, y compris la finance, la santé et le fitness, l'immobilier, l'énergie, et plus encore. Des freelances et startups aux grandes entreprises, nous avons ce qu'il vous faut.",
    chatbotTimelineResponse:
      "Les sites web simples peuvent être prêts en aussi peu que 1-2 semaines. Pour les plateformes complexes, les délais varient en fonction des fonctionnalités. Nous offrons des options de livraison rapide et fournissons des calendriers de projet détaillés lors de la consultation.",
    chatbotBuildingBlocksResponse:
      "Nos blocs de construction sont des composants modulaires que vous pouvez ajouter à votre plateforme. Pensez-y comme des pièces de Lego - systèmes de paiement, authentification utilisateur, analyses, fonctionnalités IA, etc. Vous ne payez que pour ce dont vous avez besoin et pouvez en ajouter plus à mesure que vous grandissez!",
    chatbotSupportResponse:
      "Chaque plateforme inclut 12 mois de support 24/7. Nous surveillons, maintenons et vous aidons à réussir. Après la première année, nous proposons des forfaits de support flexibles pour répondre à vos besoins.",
    chatbotDefaultResponse:
      "Je serais heureuse de vous aider avec ça! Pour des informations détaillées, je recommande d'obtenir un devis personnalisé ou de parler avec notre équipe. Vous pouvez également explorer notre section services pour en savoir plus sur ce que nous offrons.",

    customerFirstAlways: "Le client avant tout",
    customerFirstDesc: "Votre succès motive tout ce que nous faisons.",
    secureCompliant: "Sécurisé et Conforme",
    secureCompliantDesc: "Conformité RGPD, CCPA et locale. Sécurité de niveau bancaire.",
    worldwideService: "Service Mondial",
    worldwideServiceDesc: "Nous travaillons avec des clients dans n'importe quel pays.",
    allIndustries: "Toutes Industries",
    allIndustriesDesc: "Finance, santé, immobilier, énergie, et plus.",
    completeSolutions: "Solutions Complètes",
    completeSolutionsDesc: "Du concept au lancement et au-delà.",
    startupsLabel: "Startups",
    toEnterprisesLabel: "aux Entreprises",
    worldwideLabel: "Mondial",
    anyCountryLabel: "N'importe Quel Pays",
    allSectorsLabel: "Tous Secteurs",
    everyIndustryLabel: "Chaque Industrie",
    fastResponse: "24h",
    fastResponseLabel: "Réponse Rapide",

    // USP Translations
    instantMVP: "Devis MVP Instantanés",
    instantMVPDesc:
      "Obtenez des estimations en temps réel pour votre projet avec notre système de devis intelligent. Pas d'attente, pas de surprises.",
    onlineFormEstimates: "Formulaire en Ligne + Estimations en Temps Réel",
    hour24Prototypes: "Prototypes en 24 Heures",
    hour24PrototypesDesc:
      "Recevez un prototype détaillé de site web dans les 24 heures suivant la soumission de vos exigences. Voyez votre vision prendre vie.",
    detailedPrototype24hrs: "Prototype Détaillé en 24h",
    fullSpectrumSolutions: "Solutions Complètes",
    fullSpectrumSolutionsDesc:
      "Des sites web de base aux interfaces complexes, intégration IA, chatbots et applications full-stack. Nous faisons tout.",
    basicToComplexApps: "Applications Basiques à Complexes",
    uniqueApproachDelivers:
      "Notre approche unique livre des résultats plus rapidement que le développement traditionnel",
  },
  DE: {
    heroTitle: "Lyra Stack treibt Ihr Unternehmen vom Konzept zum Kosmos.",
    heroSubtitle:
      "Orchestrierung Ihres Unternehmens über Web, Mobil und Desktop so nahtlos wie Sternenlicht—gebaut zum Stapeln und Skalieren von Ihrem ersten Benutzer bis zu Ihrem Millionsten.",
    getStarted: "Loslegen",
    seeOurImpact: "Unsere Wirkung Sehen",
    whatWeProvide: "Was Wir Bieten",
    servicesSubtitle: "Von Expertenberatung bis zur praktischen Entwicklung - complete digitale Lösungen",
    digitalConsultancy: "Digitale Beratung",
    digitalConsultancyDesc: "Expertenberatung für die richtigen digitalen Lösungen für Ihre Ziele.",
    websitesMobileApps: "Websites und Mobile Apps",
    websitesMobileAppsDesc: "Individuelle Websites und mobile Apps, die perfekt funktionieren.",
    websiteMigration: "Website-Migration",
    websiteMigrationDesc: "Übertragen Sie Ihre bestehende Website - wir hosten sie besser und schneller.",
    onlinePayment: "Online-Zahlungssysteme",
    onlinePaymentDesc: "Akzeptieren Sie Zahlungen sicher mit Stripe, PayPal und anderen Methoden.",
    bookingScheduling: "Buchung und Terminplanung",
    bookingSchedulingDesc: "Kunden können online Termine buchen mit automatischen Erinnerungen.",
    smartAutomation: "Intelligente Automatisierung und KI",
    smartAutomationDesc: "Automatisieren Sie Aufgaben mit intelligenten Systemen, die Zeit und Geld sparen.",
    dataAnalytics: "Daten und Analysen",
    dataAnalyticsDesc: "Leistungsstarke Einblicke, die Ihre Geschäftsentscheidungen stärken.",
    chatbotsSupport: "Chatbots und Support",
    chatbotsSupportDesc: "Automatisierte Chat-Assistenten, die 24/7 Fragen beantworten.",
    brandingCreative: "Branding und Kreativpaket",
    brandingCreativeDesc: "Logos, KI-generierte Bilder, Grafiken und überzeugende Texte für Ihre Marke.",
    emailMarketing: "E-Mail und Marketing",
    emailMarketingDesc: "Professionelle E-Mail-Einrichtung und automatisierte Kampagnen.",
    securityCompliance: "Sicherheit und Compliance",
    securityComplianceDesc: "Unternehmenssicherheit mit DSGVO und lokaler Compliance.",
    ongoingSupport: "Laufender Support",
    ongoingSupportDesc: "Wir halten alles reibungslos am Laufen mit garantierten Reaktionszeiten.",
    whyWebsiteMatters: "Warum Ihre Website Wichtig Ist",
    websiteStatsDesc:
      "Ihre Website ist Ihr Schaufenster—Ihr mächtigster Geschäftsbeschleuniger. Lyra Stack kombiniert modernste Technologie mit tiefen Kundeneinblicken, um Plattformen zu schaffen, die Besucher zu Befürwortern machen.",
    trustIncrease: "Markenvertrauen Erhöhen",
    moreCustomers: "Mehr Kunden",
    alwaysOpen: "Immer Geöffnet",
    betterExperience: "Bessere Erfahrung",
    platformPackages: "Plattform-Pakete",
    platformPackagesDesc:
      "Galaxie-thematische Plattformpakete, die mit Ihrem Unternehmen wachsen—von einfachen Websites bis zu KI-Lösungen",
    nebulaStarter: "Nebel-Starter",
    starCluster: "Sternhaufen",
    supernovaAI: "Supernova KI",
    cosmosEnterprise: "Kosmos Enterprise",
    seeOurWork: "Unsere Arbeit Sehen",
    getYourQuote: "Ihr Angebot Erhalten",
    callOurTeam: "Unser Team Anrufen",
    loginExistingUsers: "Anmelden",
    whyLyraStack: "Warum Lyra Stack",
    services: "Dienstleistungen",
    solutions: "Lösungen",
    ourWork: "Unsere Arbeit",
    customerPortal: "Kundenportal",
    readyToLaunch: "Bereit Ihr Projekt zu Starten?",
    createTogether: "Lassen Sie uns gemeinsam etwas Erstaunliches schaffen. Ihre digitale Transformation beginnt hier.",
    customersCenter:
      "Kunden im Zentrum unseres Universums. Lyra Stack orchestriert Ihre Website und Marke, damit Sie sich auf das Wesentliche konzentrieren können.",
    orchestrateWebsite:
      "Lyra Stack orchestriert Ihre Website und Marke, damit Sie sich auf das Wesentliche konzentrieren können.",
    contact: "Kontakt",
    registeredUKBusiness: "Registriertes UK-Unternehmen",
    companyNumber: "Unternehmen Nr. 12345678",
    allRightsReserved: "Alle Rechte vorbehalten. Kunden im Zentrum unseres Universums.",
    seeOurSolutions: "Sehen Sie Unsere Lösungen in Aktion",
    realWorldExamples: "Reale Beispiele, wie wir Unternehmen zum Erfolg verhelfen",
    aiChatbots: "KI-Chatbots",
    aiChatbotsDesc: "24/7 automatisierter Kundensupport",
    paymentSystems: "Zahlungssysteme",
    paymentSystemsDesc: "Sichere Zahlungsabwicklung",
    crmSystems: "CRM-Systeme",
    crmSystemsDesc: "Kundenbeziehungsmanagement",
    analytics: "Analytik",
    analyticsDesc: "Datengestützte Erkenntnisse",
    bookingSystems: "Buchungssysteme",
    bookingSystemsDesc: "Terminplanung",
    ecommerce: "E-Commerce",
    ecommerceDesc: "Vollständiger Online-Shop",
    why: "Warum?",
    allSizes: "Alle Größen",
    allSizesDesc: "Startups bis Unternehmen",
    worldwide: "Weltweit",
    worldwideDesc: "Jedes Land",
    allSectors: "Alle Sektoren",
    allSectorsDesc: "Jede Branche",
    complete: "Komplett",
    completeDesc: "End-to-End-Lösungen",
    fromSimpleTo:
      "Von einfachen Websites bis zu kompletten Plattformen - wir kümmern uns um alles, damit Sie sich auf das Wesentliche konzentrieren können",
    includedPlatform: "In Jeder Plattform Enthalten",
    needSomethingCustom: "Brauchen Sie Etwas Individuelles?",
    whyChooseLyra: "Warum Lyra Stack Wählen",
    projectDetails: "Projektdetails",
    websitesAndApps: "Websites und Apps",
    paymentSolutions: "Zahlungslösungen",
    smartAutomationAndAI: "Intelligente Automatisierung und KI",
    dataAndAnalytics: "Daten und Analysen",
    brandingAndCreative: "Branding und Kreativ",
    givingBusinessLeads: "Gibt Ihnen neue Geschäftsleads und Kunden.",
    setupFeeCovers:
      "Die Einrichtungsgebühr deckt den anfänglichen Aufbau + 12 Monate von allem oben ab. Nach 12 Monaten: £20/Monat zum Fortsetzen.",
    fromStartupsToEnterprises:
      "Von Startups bis zu globalen Unternehmen - wir bauen Lösungen, die mit Ihnen wachsen. Wir bedienen alle Branchen weltweit mit sicheren, konformen Plattformen.",
    realProjectsResults: "Echte Projekte, echte Ergebnisse. Jede Lösung für messbaren Geschäftserfolg konzipiert.",
    businessOutcome: "Geschäftsergebnis:",
    name: "Name",
    email: "E-Mail",
    company: "Unternehmen",
    currency: "Währung",
    selectCurrency: "Währung auswählen",
    platformType: "Plattformtyp",
    selectPlatform: "Plattform auswählen",
    timeline: "Zeitrahmen",
    selectTimeline: "Zeitrahmen auswählen",
    flexibleTimeline: "Flexibel (4-6 Wochen)",
    rushTimeline: "Dringend (2-3 Wochen) +30%",
    addOnFeatures: "Zusätzliche Funktionen",
    projectDescription: "Projektbeschreibung",
    tellUsAboutYourProject: "Erzählen Sie uns von Ihren Projektzielen und Anforderungen...",
    calculateEstimate: "Schätzung Berechnen",
    submitForPrototype: "Für 24h-Prototyp Einreichen",
    estimatedSetupCost: "Geschätzte Einrichtungskosten",
    includesFor12Months: "Enthalten für 12 Monate:",
    freeDomainHosting: "Kostenlose Domain und Hosting",
    professionalEmailAddress: "Professionelle E-Mail-Adresse",
    sslCertificateSecurity: "SSL-Zertifikat und Sicherheit",
    support247: "24/7-Support",
    freeUpdatesMaintenance: "Kostenlose Updates und Wartung",
    after12Months: "Nach 12 Monaten: £20/Monat für alle Dienste",

    chatbotWelcome: "Hallo! Ich bin Lyra, Ihr digitaler Lösungsführer. Wie kann ich Ihnen heute helfen?",
    chatbotQuickQuestions: "Schnelle Fragen:",
    chatbotAskAnything: "Fragen Sie mich alles...",
    chatbotServicesResponse:
      "Wir bieten vollständige digitale Lösungen an, einschließlich Websites, mobiler Apps, Zahlungssysteme, Buchungsplattformen, KI-Integration, Chatbots, CRM-Systeme, Analyse-Dashboards und digitale Beratung. Von einfachen Websites bis hin zu komplexen Unternehmensplattformen!",
    chatbotPricingResponse:
      "Unsere Starter-Plattform beginnt bei £250, was Setup, 12 Monate kostenloses Domain-Hosting, E-Mail-Adresse, SSL-Sicherheit und 24/7-Support für ein Jahr umfasst. Wir bieten auch individuelle Angebote basierend auf Ihren spezifischen Anforderungen. Möchten Sie ein personalisiertes Angebot erhalten?",
    chatbotInternationalResponse:
      "Ja! Wir arbeiten mit Unternehmen weltweit zusammen und bedienen Kunden in jedem Land. Unsere Lösungen sind so konzipiert, dass sie global mit Multi-Währungsunterstützung und internationalen Best Practices funktionieren.",
    chatbotIndustriesResponse:
      "Wir bedienen alle Sektoren, einschließlich Finanzen, Gesundheit & Fitness, Immobilien, Energie und mehr. Von Freelancern und Startups bis hin zu großen Unternehmen - wir haben alles im Griff.",
    chatbotTimelineResponse:
      "Einfache Websites können in nur 1-2 Wochen fertig sein. Für komplexe Plattformen variieren die Zeitpläne je nach Funktionen. Wir bieten Express-Lieferoptionen an und stellen während der Beratung detaillierte Projektzeitpläne bereit.",
    chatbotBuildingBlocksResponse:
      "Unsere Bausteine sind modulare Komponenten, die Sie Ihrer Plattform hinzufügen können. Denken Sie an sie wie an Lego-Steine - Zahlungssysteme, Benutzerauthentifizierung, Analysen, KI-Funktionen usw. Sie zahlen nur für das, was Sie benötigen, und können mehr hinzufügen, wenn Sie wachsen!",
    chatbotSupportResponse:
      "Jede Plattform beinhaltet 12 Monate 24/7-Support. Wir überwachen, warten und helfen Ihnen zum Erfolg. Nach dem ersten Jahr bieten wir flexible Support-Pakete an, die Ihren Bedürfnissen entsprechen.",
    chatbotDefaultResponse:
      "Ich helfe Ihnen gerne dabei! Für detaillierte Informationen empfehle ich, ein personalisiertes Angebot zu erhalten oder mit unserem Team zu sprechen. Sie können auch unseren Service-Bereich erkunden, um mehr über unser Angebot zu erfahren.",

    customerFirstAlways: "Kunden zuerst immer",
    customerFirstDesc: "Ihr Erfolg treibt alles an, was wir tun.",
    secureCompliant: "Sicher und Konform",
    secureCompliantDesc: "DSGVO, CCPA und lokale Compliance. Banksichere Sicherheit.",
    worldwideService: "Weltweiter Service",
    worldwideServiceDesc: "Wir arbeiten mit Kunden in jedem Land.",
    allIndustries: "Alle Branchen",
    allIndustriesDesc: "Finanzen, Gesundheit, Immobilien, Energie und mehr.",
    completeSolutions: "Komplette Lösungen",
    completeSolutionsDesc: "Vom Konzept bis zur Einführung und darüber hinaus.",
    startupsLabel: "Startups",
    toEnterprisesLabel: "bis Unternehmen",
    worldwideLabel: "Weltweit",
    anyCountryLabel: "Jedes Land",
    allSectorsLabel: "Alle Sektoren",
    everyIndustryLabel: "Jede Branche",
    fastResponse: "24hrs",
    fastResponseLabel: "Schnelle Antwort",

    // USP Translations
    instantMVP: "Sofortige MVP-Angebote",
    instantMVPDesc:
      "Erhalten Sie Echtzeit-Schätzungen für Ihr Projekt mit unserem intelligenten Angebotssystem. Kein Warten, keine Überraschungen.",
    onlineFormEstimates: "Online-Formular + Echtzeit-Schätzungen",
    hour24Prototypes: "24-Stunden-Prototypen",
    hour24PrototypesDesc:
      "Erhalten Sie innerhalb von 24 Stunden nach Einreichung Ihrer Anforderungen einen detaillierten Website-Prototyp. Sehen Sie Ihre Vision zum Leben erwachen.",
    detailedPrototype24hrs: "Detaillierter Prototyp in 24 Std.",
    fullSpectrumSolutions: "Vollspektrum-Lösungen",
    fullSpectrumSolutionsDesc:
      "Von einfachen Websites bis zu komplexen UIs, KI-Integration, Chatbots und Full-Stack-Anwendungen. Wir machen alles.",
    basicToComplexApps: "Einfache bis Komplexe Anwendungen",
    uniqueApproachDelivers: "Unser einzigartiger Ansatz liefert Ergebnisse schneller als die traditionelle Entwicklung",
  },
  IT: {
    heroTitle: "Lyra Stack spinge la tua azienda dal concetto al cosmo.",
    heroSubtitle:
      "Orchestrare la tua azienda su web, mobile e desktop fluido come la luce stellare—costruito per impilare e scalare dal tuo primo utente al tuo milionesimo.",
    getStarted: "Iniziare",
    seeOurImpact: "Vedi Il Nostro Impatto",
    whatWeProvide: "Cosa Forniamo",
    servicesSubtitle:
      "Dalla consulenza esperta allo sviluppo pratico - soluzioni digitali complete per il tuo business",
    digitalConsultancy: "Consulenza Digitale",
    digitalConsultancyDesc: "Guida esperta per scegliere le giuste soluzioni digitali per i tuoi obiettivi.",
    websitesMobileApps: "Siti Web e App Mobili",
    websitesMobileAppsDesc: "Siti web e app mobile personalizzati che funzionano perfettamente.",
    websiteMigration: "Migrazione Sito Web",
    websiteMigrationDesc: "Sposta il tuo sito web esistente - lo ospiteremo meglio e più velocemente.",
    onlinePayment: "Sistemi di Pagamento Online",
    onlinePaymentDesc: "Accetta pagamenti in sicurezza con Stripe, PayPal e altri metodi.",
    bookingScheduling: "Prenotazione e Pianificazione",
    bookingSchedulingDesc: "Consenti ai clienti di prenotare appuntamenti online con promemoria automatici.",
    smartAutomation: "Automazione Intelligente e IA",
    smartAutomationDesc: "Automatizza le attività con sistemi intelligenti che risparmiano tempo e denaro.",
    dataAnalytics: "Dati e Analytics",
    dataAnalyticsDesc: "Informazioni potenti che potenziano le tue decisioni aziendali e la crescita.",
    chatbotsSupport: "Chatbot e Supporto",
    chatbotsSupportDesc: "Assistenti chat automatizzati che rispondono alle domande 24/7.",
    brandingCreative: "Pacchetto Branding e Creatività",
    brandingCreativeDesc: "Loghi, immagini IA, grafica e testi convincenti per il tuo brand.",
    emailMarketing: "Email e Marketing",
    emailMarketingDesc: "Configurazione email professionale e campagne automatizzate.",
    securityCompliance: "Sicurezza e Conformità",
    securityComplianceDesc: "Sicurezza di livello aziendale con conformità GDPR e locale.",
    ongoingSupport: "Supporto Continuo",
    ongoingSupportDesc: "Manteniamo tutto in funzione con tempi di risposta garantiti.",
    whyWebsiteMatters: "Perché Il Tuo Sito Web Conta",
    websiteStatsDesc:
      "Il tuo sito web è la tua vetrina—il tuo acceleratore aziendale più potente. Lyra Stack combina tecnologia all'avanguardia con approfondite intuizioni sui clienti per creare piattaforme che trasformano i visitatori in sostenitori.",
    trustIncrease: "Aumento Fiducia nel Brand",
    moreCustomers: "Più Clienti",
    alwaysOpen: "Sempre Aperto",
    betterExperience: "Esperienza Migliore",
    platformPackages: "Pacchetti Piattaforma",
    platformPackagesDesc:
      "Pacchetti piattaforma a tema galattico che crescono con la tua azienda—da siti web base a soluzioni IA complete",
    nebulaStarter: "Nebulosa Starter",
    starCluster: "Ammasso Stellare",
    supernovaAI: "Supernova IA",
    cosmosEnterprise: "Cosmo Enterprise",
    seeOurWork: "Vedi Il Nostro Lavoro",
    getYourQuote: "Ottieni Il Tuo Preventivo",
    callOurTeam: "Chiama Il Nostro Team",
    loginExistingUsers: "Accedi",
    whyLyraStack: "Perché Lyra Stack",
    services: "Servizi",
    solutions: "Soluzioni",
    ourWork: "Il Nostro Lavoro",
    customerPortal: "Portale Cliente",
    readyToLaunch: "Pronto a Lanciare Il Tuo Progetto?",
    createTogether: "Creiamo qualcosa di straordinario insieme. La tua trasformazione digitale inizia qui.",
    customersCenter:
      "I clienti sono al centro del nostro universo. Lyra Stack orchestra il tuo sito web e il tuo brand così puoi concentrarti su ciò che conta nel business.",
    orchestrateWebsite:
      "Lyra Stack orchestra il tuo sito web e il tuo brand così puoi concentrarti su ciò che conta nel business.",
    contact: "Contatto",
    registeredUKBusiness: "Azienda Registrata nel Regno Unito",
    companyNumber: "Numero Azienda 12345678",
    allRightsReserved: "Tutti i diritti riservati. I clienti sono al centro del nostro universo.",
    seeOurSolutions: "Vedi Le Nostre Soluzioni in Azione",
    realWorldExamples: "Esempi del mondo reale di come aiutiamo le aziende a prosperare",
    aiChatbots: "Chatbot IA",
    aiChatbotsDesc: "Supporto clienti automatizzato 24/7",
    paymentSystems: "Sistemi di Pagamento",
    paymentSystemsDesc: "Processamento di pagamento sicuro",
    crmSystems: "Sistemi CRM",
    crmSystemsDesc: "Gestione delle relazioni con i clienti",
    analytics: "Analitiche",
    analyticsDesc: "Insights basati sui dati",
    bookingSystems: "Sistemi di Prenotazione",
    bookingSystemsDesc: "Pianificazione delle prenotazioni",
    ecommerce: "E-commerce",
    ecommerceDesc: "Negozio online completo",
    why: "Perché?",
    allSizes: "Tutte le Dimensioni",
    allSizesDesc: "Startup alle Imprese",
    worldwide: "Mondiale",
    worldwideDesc: "Qualsiasi Paese",
    allSectors: "Tutti i Settori",
    allSectorsDesc: "Qualsiasi Industria",
    complete: "Completo",
    completeDesc: "Soluzioni End-to-End",
    fromSimpleTo:
      "Da siti web semplici a piattaforme complete - gestiamo tutto così puoi concentrarti su ciò che conta di più",
    includedPlatform: "Incluso con Ogni Piattaforma",
    needSomethingCustom: "Hai Bisogno di Qualcosa di Personalizzato?",
    whyChooseLyra: "Perché Scegliere Lyra Stack",
    projectDetails: "Dettagli del Progetto",
    websitesAndApps: "Siti Web e App",
    paymentSolutions: "Soluzioni di Pagamento",
    smartAutomationAndAI: "Automazione Intelligente e IA",
    dataAndAnalytics: "Dati e Analitiche",
    brandingAndCreative: "Branding e Creativo",
    givingBusinessLeads: "Fornendoti nuovi contatti commerciali e clienti.",
    setupFeeCovers:
      "Il costo di configurazione copre la costruzione iniziale + 12 mesi di tutto quanto sopra. Dopo 12 mesi: £20/mese per continuare.",
    fromStartupsToEnterprises:
      "Dalle startup alle imprese globali - costruiamo soluzioni che crescono con te. Al servizio di tutte le industrie in tutto il mondo con piattaforme sicure e conformi.",
    realProjectsResults:
      "Progetti reali, risultati reali. Ogni soluzione progettata per un impatto aziendale misurabile.",
    businessOutcome: "Risultato Aziendale:",
    name: "Nome",
    email: "Email",
    company: "Azienda",
    currency: "Valuta",
    selectCurrency: "Seleziona valuta",
    platformType: "Tipo di Piattaforma",
    selectPlatform: "Seleziona piattaforma",
    timeline: "Tempistica",
    selectTimeline: "Seleziona tempistica",
    flexibleTimeline: "Flessibile (4-6 settimane)",
    rushTimeline: "Urgente (2-3 settimane) +30%",
    addOnFeatures: "Funzionalità Aggiuntive",
    projectDescription: "Descrizione del Progetto",
    tellUsAboutYourProject: "Parlaci degli obiettivi e dei requisiti del tuo progetto...",
    calculateEstimate: "Calcola Preventivo",
    submitForPrototype: "Invia per Prototipo 24h",
    estimatedSetupCost: "Costo di Configurazione Stimato",
    includesFor12Months: "Include per 12 Mesi:",
    freeDomainHosting: "Dominio e hosting gratuiti",
    professionalEmailAddress: "Indirizzo email professionale",
    sslCertificateSecurity: "Certificato SSL e sicurezza",
    support247: "Supporto 24/7",
    freeUpdatesMaintenance: "Aggiornamenti e manutenzione gratuiti",
    after12Months: "Dopo 12 mesi: £20/mese per continuare tutti i servizi",

    chatbotWelcome: "Ciao! Sono Lyra, la tua guida alle soluzioni digitali. Come posso aiutarti oggi?",
    chatbotQuickQuestions: "Domande rapide:",
    chatbotAskAnything: "Chiedi qualsiasi cosa...",
    chatbotServicesResponse:
      "Offriamo soluzioni digitali complete tra cui siti web, app mobili, sistemi di pagamento, piattaforme di prenotazione, integrazione IA, chatbot, sistemi CRM, dashboard di analisi e consulenza digitale. Da semplici siti web a piattaforme aziendali complesse!",
    chatbotPricingResponse:
      "La nostra piattaforma starter inizia a £250, che include configurazione, 12 mesi di hosting dominio gratuito, indirizzo email, sicurezza SSL e supporto 24/7 per un anno. Offriamo anche preventivi personalizzati in base alle tue esigenze specifiche. Vorresti ottenere un preventivo personalizzato?",
    chatbotInternationalResponse:
      "Sì! Lavoriamo con aziende in tutto il mondo, servendo clienti in qualsiasi paese. Le nostre soluzioni sono progettate per funzionare globalmente con supporto multi-valuta e best practice internazionali.",
    chatbotIndustriesResponse:
      "Serviamo tutti i settori tra cui finanza, salute e fitness, immobiliare, energia e altro. Da freelancer e startup a grandi imprese, abbiamo tutto coperto.",
    chatbotTimelineResponse:
      "I siti web semplici possono essere pronti in appena 1-2 settimane. Per le piattaforme complesse, i tempi variano in base alle funzionalità. Offriamo opzioni di consegna rapida e forniamo cronologie dettagliate del progetto durante la consulenza.",
    chatbotBuildingBlocksResponse:
      "I nostri blocchi di costruzione sono componenti modulari che puoi aggiungere alla tua piattaforma. Pensali come pezzi di Lego - sistemi di pagamento, autenticazione utente, analisi, funzionalità IA, ecc. Paghi solo per ciò di cui hai bisogno e puoi aggiungere di più man mano che cresci!",
    chatbotSupportResponse:
      "Ogni piattaforma include 12 mesi di supporto 24/7. Monitoriamo, manteniamo e ti aiutiamo ad avere successo. Dopo il primo anno, offriamo pacchetti di supporto flessibili per soddisfare le tue esigenze.",
    chatbotDefaultResponse:
      "Sarei felice di aiutarti con questo! Per informazioni dettagliate, consiglio di ottenere un preventivo personalizzato o parlare con il nostro team. Puoi anche esplorare la nostra sezione servizi per saperne di più su ciò che offriamo.",

    customerFirstAlways: "Il cliente prima di tutto",
    customerFirstDesc: "Il tuo successo guida tutto ciò che facciamo.",
    secureCompliant: "Sicuro e Conforme",
    secureCompliantDesc: "Conformità GDPR, CCPA e locale. Sicurezza a livello bancario.",
    worldwideService: "Servizio Mondiale",
    worldwideServiceDesc: "Lavoriamo con clienti in qualsiasi paese.",
    allIndustries: "Tutte le Industrie",
    allIndustriesDesc: "Finanza, salute, immobiliare, energia e altro.",
    completeSolutions: "Soluzioni Complete",
    completeSolutionsDesc: "Dal concetto al lancio e oltre.",
    startupsLabel: "Startup",
    toEnterprisesLabel: "alle Imprese",
    worldwideLabel: "Globale",
    anyCountryLabel: "Qualsiasi Paese",
    allSectorsLabel: "Tutti i Settori",
    everyIndustryLabel: "Ogni Industria",
    fastResponse: "24 ore",
    fastResponseLabel: "Risposta Rapida",

    // USP Translations
    instantMVP: "Preventivi MVP Istantanei",
    instantMVPDesc:
      "Ottieni stime in tempo reale per il tuo progetto con il nostro sistema di preventivi intelligente. Nessuna attesa, nessuna sorpresa.",
    onlineFormEstimates: "Modulo Online + Stime in Tempo Reale",
    hour24Prototypes: "Prototipi in 24 Ore",
    hour24PrototypesDesc:
      "Ricevi un prototipo di sito web dettagliato entro 24 ore dall'invio dei tuoi requisiti. Vedi la tua visione prendere vita.",
    detailedPrototype24hrs: "Prototipo Dettagliato in 24 Ore",
    fullSpectrumSolutions: "Soluzioni a Spettro Completo",
    fullSpectrumSolutionsDesc:
      "Da siti web di base a interfacce complesse, integrazione AI, chatbot e applicazioni full-stack. Facciamo tutto.",
    basicToComplexApps: "Applicazioni da Base a Complesse",
    uniqueApproachDelivers: "Il nostro approccio unico offre risultati più velocemente dello sviluppo tradizionale",
  },
  PT: {
    heroTitle: "Lyra Stack impulsiona seu negócio do conceito ao cosmos.",
    heroSubtitle:
      "Orquestrando seu negócio na web, mobile e desktop tão fluido quanto a luz das estrelas—construído para empilhar e escalar do seu primeiro usuário ao seu milionésimo.",
    getStarted: "Começar",
    seeOurImpact: "Veja Nosso Impacto",
    whatWeProvide: "O Que Oferecemos",
    servicesSubtitle: "De consultoria especializada ao desenvolvimento prático - soluções digitais completas",
    digitalConsultancy: "Consultoria Digital",
    digitalConsultancyDesc: "Orientação especializada para escolher as soluções digitais certas para seus objetivos.",
    websitesMobileApps: "Sites e Apps Móveis",
    websitesMobileAppsDesc: "Sites e aplicativos móveis personalizados que funcionam perfeitamente.",
    websiteMigration: "Migração de Site",
    websiteMigrationDesc: "Transfira seu site existente - hospedaremos melhor e mais rápido.",
    onlinePayment: "Sistemas de Pagamento Online",
    onlinePaymentDesc: "Aceite pagamentos com segurança via Stripe, PayPal e outros métodos.",
    bookingScheduling: "Reservas e Agendamento",
    bookingSchedulingDesc: "Permita que clientes reservem online com lembretes automáticos.",
    smartAutomation: "Automação Inteligente e IA",
    smartAutomationDesc: "Automatize tarefas com sistemas inteligentes que economizam tempo e dinheiro.",
    dataAnalytics: "Dados e Análises",
    dataAnalyticsDesc: "Insights poderosos que impulsionam suas decisões e crescimento empresarial.",
    chatbotsSupport: "Chatbots e Suporte",
    chatbotsSupportDesc: "Assistentes de chat automatizados que respondem perguntas 24/7.",
    brandingCreative: "Pacote de Branding e Criativo",
    brandingCreativeDesc: "Logotipos, imagens IA, gráficos e textos convincentes para sua marca.",
    emailMarketing: "Email e Marketing",
    emailMarketingDesc: "Configuração de email profissional e campanhas automatizadas.",
    securityCompliance: "Segurança e Conformidade",
    securityComplianceDesc: "Segurança empresarial com conformidade GDPR e local.",
    ongoingSupport: "Suporte Contínuo",
    ongoingSupportDesc: "Mantemos tudo funcionando perfeitamente com tempos de resposta garantidos.",
    whyWebsiteMatters: "Por Que Seu Site Importa",
    websiteStatsDesc:
      "Seu site é sua vitrine—seu acelerador de negócios mais poderoso. Lyra Stack combina tecnologia de ponta com insights profundos do cliente para criar plataformas que transformam visitantes em defensores.",
    trustIncrease: "Aumento de Confiança na Marca",
    moreCustomers: "Mais Clientes",
    alwaysOpen: "Sempre Aberto",
    betterExperience: "Melhor Experiência",
    platformPackages: "Pacotes de Plataforma",
    platformPackagesDesc:
      "Pacotes de plataforma com tema galáctico que crescem com seu negócio—de sites básicos a soluções IA completas",
    nebulaStarter: "Nebulosa Iniciante",
    starCluster: "Aglomerado Estelar",
    supernovaAI: "Supernova IA",
    cosmosEnterprise: "Cosmos Empresarial",
    seeOurWork: "Veja Nosso Trabalho",
    getYourQuote: "Obtenha Seu Orçamento",
    callOurTeam: "Ligue Para Nossa Equipe",
    loginExistingUsers: "Entrar",
    whyLyraStack: "Por Que Lyra Stack",
    services: "Serviços",
    solutions: "Soluções",
    ourWork: "Nosso Trabalho",
    customerPortal: "Portal do Cliente",
    readyToLaunch: "Pronto para Lançar Seu Projeto?",
    createTogether: "Vamos criar algo incrível juntos. Sua transformação digital começa aqui.",
    customersCenter:
      "Clientes no centro do nosso universo. Lyra Stack orquestra seu site e marca para que você possa focar no que importa nos negócios.",
    orchestrateWebsite: "Lyra Stack orquestra seu site e marca para que você possa focar no que importa nos negócios.",
    contact: "Contato",
    registeredUKBusiness: "Empresa Registrada no Reino Unido",
    companyNumber: "Empresa No. 12345678",
    allRightsReserved: "Todos os direitos reservados. Clientes no centro do nosso universo.",
    seeOurSolutions: "Veja Nossas Soluções em Ação",
    realWorldExamples: "Exemplos do mundo real de como ajudamos empresas a prosperar",
    aiChatbots: "Chatbots de IA",
    aiChatbotsDesc: "Suporte ao cliente automatizado 24/7",
    paymentSystems: "Sistemas de Pagamento",
    paymentSystemsDesc: "Processamento de pagamento seguro",
    crmSystems: "Sistemas CRM",
    crmSystemsDesc: "Gestão de relacionamento com cliente",
    analytics: "Análises",
    analyticsDesc: "Insights baseados em dados",
    bookingSystems: "Sistemas de Reserva",
    bookingSystemsDesc: "Agendamento de compromissos",
    ecommerce: "E-commerce",
    ecommerceDesc: "Loja online completa",
    why: "Por Quê?",
    allSizes: "Todos os Tamanhos",
    allSizesDesc: "Startups a Empresas",
    worldwide: "Mundial",
    worldwideDesc: "Qualquer País",
    allSectors: "Todos os Setores",
    allSectorsDesc: "Qualquer Indústria",
    complete: "Completo",
    completeDesc: "Soluções End-to-End",
    fromSimpleTo: "De sites simples a plataformas completas - cuidamos de tudo para você focar no que mais importa",
    includedPlatform: "Incluído em Toda Plataforma",
    needSomethingCustom: "Precisa de Algo Personalizado?",
    whyChooseLyra: "Por Que Escolher Lyra Stack",
    projectDetails: "Detalhes do Projeto",
    websitesAndApps: "Sites e Apps",
    paymentSolutions: "Soluções de Pagamento",
    smartAutomationAndAI: "Automação Inteligente e IA",
    dataAndAnalytics: "Dados e Análises",
    brandingAndCreative: "Branding e Criativo",
    givingBusinessLeads: "Fornecendo novos leads e clientes para o seu negócio.",
    setupFeeCovers:
      "A taxa de configuração cobre a construção inicial + 12 meses de tudo acima. Após 12 meses: £20/mês para continuar.",
    fromStartupsToEnterprises:
      "De startups a empresas globais - construímos soluções que crescem com você. Atendendo todas as indústrias em todo o mundo com plataformas seguras e conformes.",
    realProjectsResults:
      "Projetos reais, resultados reais. Cada solução projetada para impacto empresarial mensurável.",
    businessOutcome: "Resultado Empresarial:",
    name: "Nome",
    email: "Email",
    company: "Empresa",
    currency: "Moeda",
    selectCurrency: "Selecionar moeda",
    platformType: "Tipo de Plataforma",
    selectPlatform: "Selecionar plataforma",
    timeline: "Prazo",
    selectTimeline: "Selecionar prazo",
    flexibleTimeline: "Flexível (4-6 semanas)",
    rushTimeline: "Urgente (2-3 semanas) +30%",
    addOnFeatures: "Recursos Adicionais",
    projectDescription: "Descrição do Projeto",
    tellUsAboutYourProject: "Conte-nos sobre os objetivos e requisitos do seu projeto...",
    calculateEstimate: "Calcular Orçamento",
    submitForPrototype: "Enviar para Protótipo 24h",
    estimatedSetupCost: "Custo de Configuração Estimado",
    includesFor12Months: "Inclui por 12 Meses:",
    freeDomainHosting: "Domínio e hospedagem gratuitos",
    professionalEmailAddress: "Endereço de email profissional",
    sslCertificateSecurity: "Certificado SSL e segurança",
    support247: "Suporte 24/7",
    freeUpdatesMaintenance: "Atualizações e manutenção gratuitas",
    after12Months: "Após 12 meses: £20/mês para continuar todos os serviços",

    chatbotWelcome: "Olá! Sou Lyra, sua guia de soluções digitais. Como posso ajudar hoje?",
    chatbotQuickQuestions: "Perguntas rápidas:",
    chatbotAskAnything: "Pergunte-me qualquer coisa...",
    chatbotServicesResponse:
      "Oferecemos soluções digitais completas, incluindo sites, aplicativos móveis, sistemas de pagamento, plataformas de reserva, integração de IA, chatbots, sistemas CRM, painéis de análise e consultoria digital. De sites simples a plataformas empresariais complexas!",
    chatbotPricingResponse:
      "Nossa plataforma inicial começa em £250, que inclui configuração, 12 meses de hospedagem de domínio gratuita, endereço de e-mail, segurança SSL e suporte 24/7 por um ano. Também oferecemos orçamentos personalizados com base em suas necessidades específicas. Gostaria de obter um orçamento personalizado?",
    chatbotInternationalResponse:
      "Sim! Trabalhamos com empresas em todo o mundo, atendendo clientes em qualquer país. Nossas soluções são projetadas para funcionar globalmente com suporte multi-moeda e melhores práticas internacionais.",
    chatbotIndustriesResponse:
      "Atendemos todos os setores, incluindo finanças, saúde e fitness, imobiliário, energia e muito mais. De freelancers e startups a grandes empresas, temos tudo coberto.",
    chatbotTimelineResponse:
      "Sites simples podem estar prontos em apenas 1-2 semanas. Para plataformas complexas, os prazos variam de acordo com os recursos. Oferecemos opções de entrega expressa e fornecemos cronogramas detalhados do projeto durante a consulta.",
    chatbotBuildingBlocksResponse:
      "Nossos blocos de construção são componentes modulares que você pode adicionar à sua plataforma. Pense neles como peças de Lego - sistemas de pagamento, autenticação de usuário, análises, recursos de IA, etc. Você só paga pelo que precisa e pode adicionar mais conforme cresce!",
    chatbotSupportResponse:
      "Cada plataforma inclui 12 meses de suporte 24/7. Monitoramos, mantemos e ajudamos você a ter sucesso. Após o primeiro ano, oferecemos pacotes de suporte flexíveis para atender suas necessidades.",
    chatbotDefaultResponse:
      "Ficaria feliz em ajudá-lo com isso! Para informações detalhadas, recomendo obter um orçamento personalizado ou falar com nossa equipe. Você também pode explorar nossa seção de serviços para saber mais sobre o que oferecemos.",

    customerFirstAlways: "Cliente em Primeiro Lugar Sempre",
    customerFirstDesc: "Seu sucesso impulsiona tudo o que fazemos.",
    secureCompliant: "Seguro e Conforme",
    secureCompliantDesc: "Conformidade GDPR, CCPA e local. Segurança de nível bancário.",
    worldwideService: "Serviço Mundial",
    worldwideServiceDesc: "Trabalhamos com clientes em qualquer país.",
    allIndustries: "Todas as Indústrias",
    allIndustriesDesc: "Finanças, saúde, imóveis, energia e muito mais.",
    completeSolutions: "Soluções Completas",
    completeSolutionsDesc: "Do conceito ao lançamento e além.",
    startupsLabel: "Startups",
    toEnterprisesLabel: "a Empresas",
    worldwideLabel: "Mundial",
    anyCountryLabel: "Qualquer País",
    allSectorsLabel: "Todos os Setores",
    everyIndustryLabel: "Cada Indústria",
    fastResponse: "24hrs",
    fastResponseLabel: "Resposta Rápida",

    // USP Translations
    instantMVP: "Cotizações MVP Instantâneas",
    instantMVPDesc:
      "Obtenha estimações em tempo real para seu projeto com nosso sistema de cotação inteligente. Sem espera, sem surpresas.",
    onlineFormEstimates: "Formulário Online + Estimativas em Tempo Real",
    hour24Prototypes: "Protótipos em 24 Horas",
    hour24PrototypesDesc:
      "Receba um protótipo de site detalhado em 24 horas após o envio de seus requisitos. Veja sua visão ganhar vida.",
    detailedPrototype24hrs: "Protótipo Detalhado em 24h",
    fullSpectrumSolutions: "Soluções de Espectro Completo",
    fullSpectrumSolutionsDesc:
      "De sites básicos a UIs complexos, integração de IA, chatbots e aplicativos full-stack. Fazemos tudo.",
    basicToComplexApps: "Aplicações Básicas a Complexas",
    uniqueApproachDelivers: "Nossa abordagem única entrega resultados mais rápido que o desenvolvimento tradicional",
  },
  ZH: {
    heroTitle: "Lyra Stack 推动您的业务从概念到宇宙。",
    heroSubtitle: "像星光一样无缝地在网络、移动和桌面上编排您的业务——专为从第一个用户扩展到第一百万个用户而构建。",
    getStarted: "开始使用",
    seeOurImpact: "查看我们的影响",
    whatWeProvide: "我们提供什么",
    servicesSubtitle: "从专家咨询到实际开发 - 为您的业务提供完整的数字解决方案",
    digitalConsultancy: "数字咨询",
    digitalConsultancyDesc: "专家指导，为您的业务目标选择正确的数字解决方案。",
    websitesMobileApps: "网站和移动应用",
    websitesMobileAppsDesc: "定制网站和移动应用，在任何设备上完美运行。",
    websiteMigration: "网站迁移",
    websiteMigrationDesc: "迁移您现有的网站 - 我们将提供更好、更快的托管。",
    onlinePayment: "在线支付系统",
    onlinePaymentDesc: "通过Stripe、PayPal等流行方式安全接受付款。",
    bookingScheduling: "预订和日程安排",
    bookingSchedulingDesc: "让客户在线预订，自动提醒。",
    smartAutomation: "智能自动化和人工智能",
    smartAutomationDesc: "使用智能系统自动化任务，节省时间和金钱。",
    dataAnalytics: "数据和分析",
    dataAnalyticsDesc: "强大的洞察力，增强您的业务决策和增长。",
    chatbotsSupport: "聊天机器人和支持",
    chatbotsSupportDesc: "全天候回答问题的自动聊天助手。",
    brandingCreative: "品牌和创意套餐",
    brandingCreativeDesc: "徽标、AI生成的图像、图形和引人注目的文案。",
    emailMarketing: "电子邮件和营销",
    emailMarketingDesc: "专业的电子邮件设置和自动化活动。",
    securityCompliance: "安全和合规",
    securityComplianceDesc: "企业级安全，涵盖GDPR和当地合规性。",
    ongoingSupport: "持续支持",
    ongoingSupportDesc: "我们保证响应时间，保持一切顺利运行。",
    whyWebsiteMatters: "为什么您的网站很重要",
    websiteStatsDesc:
      "您的网站是您的店面——您最强大的业务加速器。Lyra Stack结合尖端技术和深入的客户洞察，构建将访客转化为倡导者、将数据转化为决策的平台。",
    trustIncrease: "品牌信任增加",
    moreCustomers: "更多客户",
    alwaysOpen: "始终开放",
    betterExperience: "更好的体验",
    platformPackages: "平台套餐",
    platformPackagesDesc: "星系主题的平台套餐，随着您的业务扩展——从基本网站到完整的AI解决方案",
    nebulaStarter: "星云入门",
    starCluster: "星团",
    supernovaAI: "超新星AI",
    cosmosEnterprise: "宇宙企业",
    seeOurWork: "查看我们的作品",
    getYourQuote: "获取您的报价",
    callOurTeam: "致电我们的团队",
    loginExistingUsers: "登录",
    whyLyraStack: "为什么选择 Lyra Stack",
    services: "服务",
    solutions: "解决方案",
    ourWork: "我们的作品",
    customerPortal: "客户门户",
    readyToLaunch: "准备启动您的项目？",
    createTogether: "让我们一起创造惊人的东西。您的数字化转型从这里开始。",
    customersCenter: "客户是我们宇宙的中心。Lyra Stack编排您的网站和品牌，让您专注于业务中重要的事情。",
    orchestrateWebsite: "Lyra Stack编排您的网站和品牌，让您专注于业务中重要的事情。",
    contact: "联系方式",
    registeredUKBusiness: "英国注册企业",
    companyNumber: "公司编号 12345678",
    allRightsReserved: "版权所有。客户是我们宇宙的中心。",
    seeOurSolutions: "查看我们的解决方案实例",
    realWorldExamples: "我们如何帮助企业蓬勃发展的真实案例",
    aiChatbots: "AI聊天机器人",
    aiChatbotsDesc: "24/7自动客户支持",
    paymentSystems: "支付系统",
    paymentSystemsDesc: "安全支付处理",
    crmSystems: "CRM系统",
    crmSystemsDesc: "客户关系管理",
    analytics: "分析",
    analyticsDesc: "数据驱动的洞察",
    bookingSystems: "预订系统",
    bookingSystemsDesc: "预约安排",
    ecommerce: "电子商务",
    ecommerceDesc: "完整的在线商店",
    why: "为什么？",
    allSizes: "所有规模",
    allSizesDesc: "从创业公司到企业",
    worldwide: "全球",
    worldwideDesc: "任何国家",
    allSectors: "所有行业",
    allSectorsDesc: "任何产业",
    complete: "完整",
    completeDesc: "端到端解决方案",
    fromSimpleTo: "从简单的网站到完整的平台 - 我们处理一切，让您专注于最重要的事情",
    includedPlatform: "每个平台包含",
    needSomethingCustom: "需要定制吗？",
    whyChooseLyra: "为什么选择 Lyra Stack",
    projectDetails: "项目详情",
    websitesAndApps: "网站和应用",
    paymentSolutions: "支付解决方案",
    smartAutomationAndAI: "智能自动化和人工智能",
    dataAndAnalytics: "数据和分析",
    brandingAndCreative: "品牌和创意",
    givingBusinessLeads: "为您提供新的业务线索和客户。",
    setupFeeCovers: "设置费包括初始构建 + 12个月的所有上述内容。12个月后：每月£20继续。",
    fromStartupsToEnterprises:
      "从初创公司到全球企业 - 我们构建随您扩展的解决方案。为全球所有行业提供安全、合规的平台。",
    realProjectsResults: "真实项目，真实结果。每个解决方案都旨在产生可衡量的业务影响。",
    businessOutcome: "业务成果：",
    name: "姓名",
    email: "电子邮件",
    company: "公司",
    currency: "货币",
    selectCurrency: "选择货币",
    platformType: "平台类型",
    selectPlatform: "选择平台",
    timeline: "时间表",
    selectTimeline: "选择时间表",
    flexibleTimeline: "灵活（4-6周）",
    rushTimeline: "紧急（2-3周）+30%",
    addOnFeatures: "附加功能",
    projectDescription: "项目描述",
    tellUsAboutYourProject: "告诉我们您的项目目标和要求...",
    calculateEstimate: "计算估价",
    submitForPrototype: "提交24小时原型",
    estimatedSetupCost: "估计设置成本",
    includesFor12Months: "包括12个月：",
    freeDomainHosting: "免费域名和托管",
    professionalEmailAddress: "专业电子邮件地址",
    sslCertificateSecurity: "SSL证书和安全",
    support247: "24/7支持",
    freeUpdatesMaintenance: "免费更新和维护",
    after12Months: "12个月后：每月£20继续所有服务",

    chatbotWelcome: "你好！我是Lyra，您的数字解决方案指南。今天我能帮您什么？",
    chatbotQuickQuestions: "快速问题：",
    chatbotAskAnything: "问我任何问题...",
    chatbotServicesResponse:
      "我们提供完整的数字解决方案，包括网站、移动应用、支付系统、预订平台、AI集成、聊天机器人、CRM系统、分析仪表板和数字咨询。从简单的网站到复杂的企业平台！",
    chatbotPricingResponse:
      "我们的入门平台从£250开始，包括设置、12个月免费域名托管、电子邮件地址、SSL安全和一年的24/7支持。我们还根据您的具体需求提供定制报价。您想获得个性化报价吗？",
    chatbotInternationalResponse:
      "是的！我们与全球企业合作，为任何国家的客户提供服务。我们的解决方案旨在全球运作，支持多币种和国际最佳实践。",
    chatbotIndustriesResponse:
      "我们服务所有行业，包括金融、健康与健身、房地产、能源等。从自由职业者和初创公司到大型企业，我们都能满足。",
    chatbotTimelineResponse:
      "简单的网站最快可以在1-2周内准备好。对于复杂的平台，时间表根据功能而异。我们提供快速交付选项，并在咨询期间提供详细的项目时间表。",
    chatbotBuildingBlocksResponse:
      "我们的构建块是您可以添加到平台的模块化组件。把它们想象成乐高积木 - 支付系统、用户认证、分析、AI功能等。您只为所需的功能付费，并可以随着成长添加更多！",
    chatbotSupportResponse:
      "每个平台都包括12个月的24/7支持。我们监控、维护并帮助您成功。第一年后，我们提供灵活的支持套餐以满足您的需求。",
    chatbotDefaultResponse:
      "我很乐意帮助您！有关详细信息，我建议获取个性化报价或与我们的团队交谈。您还可以浏览我们的服务部分，了解更多关于我们提供的服务。",

    customerFirstAlways: "客户至上，始终如一",
    customerFirstDesc: "您的成功是我们一切工作的驱动力。",
    secureCompliant: "安全合规",
    secureCompliantDesc: "符合GDPR、CCPA及当地法规。银行级安全。",
    worldwideService: "全球服务",
    worldwideServiceDesc: "我们与任何国家的客户合作。",
    allIndustries: "所有行业",
    allIndustriesDesc: "金融、健康、房产、能源等。",
    completeSolutions: "完整解决方案",
    completeSolutionsDesc: "从概念到上线及之后。",
    startupsLabel: "初创公司",
    toEnterprisesLabel: "至大型企业",
    worldwideLabel: "全球",
    anyCountryLabel: "任何国家",
    allSectorsLabel: "所有领域",
    everyIndustryLabel: "每个行业",
    fastResponse: "24小时",
    fastResponseLabel: "快速响应",

    // USP Translations
    instantMVP: "即时MVP报价",
    instantMVPDesc: "通过我们智能的报价系统，为您的项目获取实时估价。无需等待，无需惊喜。",
    onlineFormEstimates: "在线表格 + 实时估价",
    hour24Prototypes: "24小时原型",
    hour24PrototypesDesc: "在提交需求后的24小时内收到详细的网站原型。让您的愿景成真。",
    detailedPrototype24hrs: "24小时内提供详细原型",
    fullSpectrumSolutions: "全光谱解决方案",
    fullSpectrumSolutionsDesc: "从基础网站到复杂的UI、AI集成、聊天机器人和全栈应用。我们无所不能。",
    basicToComplexApps: "基础到复杂应用",
    uniqueApproachDelivers: "我们独特的方法比传统开发更快地交付成果",
  },
  JA: {
    heroTitle: "Lyra Stackは、ビジネスをコンセプトから宇宙へと推進します。",
    heroSubtitle:
      "星明かりのようにシームレスに、ウェブ、モバイル、デスクトップでビジネスをオーケストレート—最初のユーザーから百万番目のユーザーまでスタックしスケールするように構築されています。",
    getStarted: "始める",
    seeOurImpact: "私たちの影響を見る",
    whatWeProvide: "提供するもの",
    servicesSubtitle: "専門家のコンサルティングから実践的な開発まで - ビジネスのための完全なデジタルソリューション",
    digitalConsultancy: "デジタルコンサルティング",
    digitalConsultancyDesc: "ビジネス目標に適したデジタルソリューションを選択するための専門家のガイダンス。",
    websitesMobileApps: "ウェブサイトとモバイルアプリ",
    websitesMobileAppsDesc: "どのデバイスでも完璧に動作するカスタムウェブサイトとモバイルアプリ。",
    websiteMigration: "ウェブサイト移行",
    websiteMigrationDesc: "既存のウェブサイトを移行 - より良く、より速くホストします。",
    onlinePayment: "オンライン決済システム",
    onlinePaymentDesc: "Stripe、PayPalなどの人気の方法で安全に支払いを受け付けます。",
    bookingScheduling: "予約とスケジューリング",
    bookingSchedulingDesc: "顧客がオンラインで予約でき、自動リマインダー付き。",
    smartAutomation: "スマート自動化とAI",
    smartAutomationDesc: "時間とお金を節約する賢いシステムでタスクを自動化します。",
    dataAnalytics: "データと分析",
    dataAnalyticsDesc: "ビジネスの意思決定と成長を強化する強力な洞察。",
    chatbotsSupport: "チャットボットとサポート",
    chatbotsSupportDesc: "24時間365日質問に答える自動チャットアシスタント。",
    brandingCreative: "ブランディングとクリエイティブパッケージ",
    brandingCreativeDesc: "ロゴ、AI生成画像、グラフィックス、魅力的なコピー。",
    emailMarketing: "メールとマーケティング",
    emailMarketingDesc: "プロフェッショナルなメール設定と自動化されたキャンペーン。",
    securityCompliance: "セキュリティとコンプライアンス",
    securityComplianceDesc: "GDPRおよび地域のコンプライアンスを備えたエンタープライズグレードのセキュリティ。",
    ongoingSupport: "継続的なサポート",
    ongoingSupportDesc: "保証された応答時間で、すべてをスムーズに実行し続けます。",
    whyWebsiteMatters: "ウェブサイトが重要な理由",
    websiteStatsDesc:
      "ウェブサイトは店頭であり、最も強力なビジネスアクセラレーターです。Lyra Stackは最先端のテクノロジーと深い顧客インサイトを組み合わせて、訪問者を支持者に、データを決定に変えるプラットフォームを構築します。",
    trustIncrease: "ブランド信頼の向上",
    moreCustomers: "より多くの顧客",
    alwaysOpen: "常に営業",
    betterExperience: "より良い体験",
    platformPackages: "プラットフォームパッケージ",
    platformPackagesDesc:
      "ビジネスと共に成長する銀河テーマのプラットフォームパッケージ—基本的なウェブサイトから完全なAIソリューションまで",
    nebulaStarter: "ネビュラスターター",
    starCluster: "星団",
    supernovaAI: "スーパーノバAI",
    cosmosEnterprise: "コスモスエンタープライズ",
    seeOurWork: "私たちの仕事を見る",
    getYourQuote: "見積もりを取得",
    callOurTeam: "チームに電話する",
    loginExistingUsers: "ログイン",
    whyLyraStack: "Lyra Stackを選ぶ理由",
    services: "サービス",
    solutions: "ソリューション",
    ourWork: "私たちの仕事",
    customerPortal: "カスタマーポータル",
    readyToLaunch: "プロジェクトを開始する準備はできていますか？",
    createTogether:
      "一緒に素晴らしいものを作りましょう。あなたのデジタルトランスフォーメーションはここから始まります。",
    customersCenter:
      "顧客は私たちの宇宙の中心です。Lyra Stackはあなたのウェブサイトとブランドを調整し、ビジネスで重要なことに集中できるようにします。",
    orchestrateWebsite:
      "Lyra Stackはあなたのウェブサイトとブランドを調整し、ビジネスで重要なことに集中できるようにします。",
    contact: "お問い合わせ",
    registeredUKBusiness: "英国登録企業",
    companyNumber: "会社番号 12345678",
    allRightsReserved: "全著作権所有。顧客は私たちの宇宙の中心です。",
    seeOurSolutions: "ソリューションの実例を見る",
    realWorldExamples: "ビジネスの成功を支援する実例",
    aiChatbots: "AIチャットボット",
    aiChatbotsDesc: "24時間365日の自動カスタマーサポート",
    paymentSystems: "決済システム",
    paymentSystemsDesc: "安全な決済処理",
    crmSystems: "CRMシステム",
    crmSystemsDesc: "顧客関係管理",
    analytics: "分析",
    analyticsDesc: "データ駆動型インサイト",
    bookingSystems: "予約システム",
    bookingSystemsDesc: "予約スケジューリング",
    ecommerce: "Eコマース",
    ecommerceDesc: "完全なオンラインストア",
    why: "なぜ？",
    allSizes: "すべてのサイズ",
    allSizesDesc: "スタートアップから企業まで",
    worldwide: "世界中",
    worldwideDesc: "どの国でも",
    allSectors: "すべてのセクター",
    allSectorsDesc: "あらゆる業界",
    complete: "完全",
    completeDesc: "エンドツーエンドソリューション",
    fromSimpleTo:
      "シンプルなウェブサイトから完全なプラットフォームまで - 最も重要なことに集中できるよう、すべてを処理します",
    includedPlatform: "すべてのプラットフォームに含まれる",
    needSomethingCustom: "カスタムが必要ですか？",
    whyChooseLyra: "Lyra Stackを選ぶ理由",
    projectDetails: "プロジェクトの詳細",
    websitesAndApps: "ウェブサイトとアプリ",
    paymentSolutions: "決済ソリューション",
    smartAutomationAndAI: "スマート自動化とAI",
    dataAndAnalytics: "データと分析",
    brandingAndCreative: "ブランディングとクリエイティブ",
    givingBusinessLeads: "新しいビジネスリードと顧客を提供します。",
    setupFeeCovers: "セットアップ料金は初期構築 + 上記すべての12ヶ月をカバーします。12ヶ月後：継続するには月£20。",
    fromStartupsToEnterprises:
      "スタートアップからグローバル企業まで - あなたと共に成長するソリューションを構築します。安全でコンプライアンスに準拠したプラットフォームで世界中のすべての業界にサービスを提供します。",
    realProjectsResults:
      "実際のプロジェクト、実際の結果。測定可能なビジネスインパクトのために設計されたすべてのソリューション。",
    businessOutcome: "ビジネス成果：",
    name: "名前",
    email: "メール",
    company: "会社",
    currency: "通貨",
    selectCurrency: "通貨を選択",
    platformType: "プラットフォームタイプ",
    selectPlatform: "プラットフォームを選択",
    timeline: "タイムライン",
    selectTimeline: "タイムラインを選択",
    flexibleTimeline: "フレキシブル（4-6週間）",
    rushTimeline: "急ぎ（2-3週間）+30%",
    addOnFeatures: "追加機能",
    projectDescription: "プロジェクトの説明",
    tellUsAboutYourProject: "プロジェクトの目標と要件についてお聞かせください...",
    calculateEstimate: "見積もりを計算",
    submitForPrototype: "24時間プロトタイプを提出",
    estimatedSetupCost: "推定セットアップコスト",
    includesFor12Months: "12ヶ月間含まれるもの：",
    freeDomainHosting: "無料ドメインとホスティング",
    professionalEmailAddress: "プロフェッショナルメールアドレス",
    sslCertificateSecurity: "SSL証明書とセキュリティ",
    support247: "24時間365日サポート",
    freeUpdatesMaintenance: "無料アップデートとメンテナンス",
    after12Months: "12ヶ月後：すべてのサービスを継続するには月£20",

    chatbotWelcome: "こんにちは！私はLyraです。デジタルソリューションガイドです。今日はどのようにお手伝いできますか？",
    chatbotQuickQuestions: "よくある質問：",
    chatbotAskAnything: "何でも聞いてください...",
    chatbotServicesResponse:
      "ウェブサイト、モバイルアプリ、決済システム、予約プラットフォーム、AI統合、チャットボット、CRMシステム、分析ダッシュボード、デジタルコンサルティングを含む完全なデジタルソリューションを提供しています。シンプルなウェブサイトから複雑なエンタープライズプラットフォームまで！",
    chatbotPricingResponse:
      "スタータープラットフォームは£250から始まり、セットアップ、12ヶ月の無料ドメインホスティング、メールアドレス、SSLセキュリティ、1年間の24/7サポートが含まれます。特定のニーズに基づいてカスタム見積もりも提供しています。パーソナライズされた見積もりを取得しますか？",
    chatbotInternationalResponse:
      "はい！世界中の企業と協力し、どの国のクライアントにもサービスを提供しています。私たちのソリューションは、マルチカレンシーサポートと国際的なベストプラクティスでグローバルに機能するように設計されています。",
    chatbotIndustriesResponse:
      "金融、健康とフィットネス、不動産、エネルギーなど、すべてのセクターにサービスを提供しています。フリーランサーやスタートアップから大企業まで、すべてをカバーしています。",
    chatbotTimelineResponse:
      "シンプルなウェブサイトは1〜2週間で準備できます。複雑なプラットフォームの場合、タイムラインは機能によって異なります。急ぎの配送オプションを提供し、コンサルテーション中に詳細なプロジェクトタイムラインを提供します。",
    chatbotBuildingBlocksResponse:
      "私たちのビルディングブロックは、プラットフォームに追加できるモジュラーコンポーネントです。レゴブロックのように考えてください - 決済システム、ユーザー認証、分析、AI機能など。必要なものだけに支払い、成長するにつれてさらに追加できます！",
    chatbotSupportResponse:
      "すべてのプラットフォームには12ヶ月の24/7サポートが含まれています。監視、保守を行い、成功をサポートします。1年後、ニーズに合わせた柔軟なサポートパッケージを提供します。",
    chatbotDefaultResponse:
      "喜んでお手伝いします！詳細については、パーソナライズされた見積もりを取得するか、チームとお話しすることをお勧めします。サービスセクションを探索して、提供内容の詳細を確認することもできます。",

    customerFirstAlways: "常にお客様第一",
    customerFirstDesc: "お客様の成功が私たちのすべてを動かします。",
    secureCompliant: "安全・準拠",
    secureCompliantDesc: "GDPR、CCPA、および地域のコンプライアンス。銀行レベルのセキュリティ。",
    worldwideService: "ワールドワイドサービス",
    worldwideServiceDesc: "どの国のお客様とも協力します。",
    allIndustries: "すべての産業",
    allIndustriesDesc: "金融、健康、不動産、エネルギーなど。",
    completeSolutions: "包括的なソリューション",
    completeSolutionsDesc: "コンセプトからローンチ、そしてその先へ。",
    startupsLabel: "スタートアップ",
    toEnterprisesLabel: "から企業へ",
    worldwideLabel: "世界中",
    anyCountryLabel: "どの国でも",
    allSectorsLabel: "すべてのセクター",
    everyIndustryLabel: "すべての産業",
    fastResponse: "24時間",
    fastResponseLabel: "迅速な対応",

    // USP Translations
    instantMVP: "即時MVP見積もり",
    instantMVPDesc:
      "インテリジェントな見積もりシステムで、プロジェクトのリアルタイム見積もりを取得します。待つ必要も、驚くこともありません。",
    onlineFormEstimates: "オンラインフォーム + リアルタイム見積もり",
    hour24Prototypes: "24時間プロトタイプ",
    hour24PrototypesDesc:
      "要件提出後24時間以内に詳細なウェブサイトプロトタイプを受け取ります。あなたのビジョンが実現するのを見てください。",
    detailedPrototype24hrs: "24時間で詳細プロトタイプ",
    fullSpectrumSolutions: "フルスペクトルソリューション",
    fullSpectrumSolutionsDesc:
      "基本的なウェブサイトから複雑なUI、AI統合、チャットボット、フルスタックアプリケーションまで。すべてを行います。",
    basicToComplexApps: "基本的なアプリケーションから複雑なアプリケーションまで",
    uniqueApproachDelivers: "私たち独自ののアプローチは、従来の開発よりも迅速に成果をもたらします",
  },
  AR: {
    heroTitle: "تدفع Lyra Stack عملك من المفهوم إلى الكون.",
    heroSubtitle:
      "تنظيم عملك عبر الويب والهاتف المحمول وسطح المكتب بسلاسة مثل ضوء النجوم - مبني للتكديس والتوسع من المستخدم الأول إلى المليون.",
    getStarted: "ابدأ الآن",
    seeOurImpact: "انظر تأثيرنا",
    whatWeProvide: "ما نقدمه",
    servicesSubtitle: "من الاستشارات الخبيرة إلى التطوير العملي - حلول رقمية كاملة لعملك",
    digitalConsultancy: "استشارات رقمية",
    digitalConsultancyDesc: "إرشادات الخبراء لاختيار الحلول الرقمية المناسبة لأهدافك.",
    websitesMobileApps: "مواقع الويب وتطبيقات الجوال",
    websitesMobileAppsDesc: "مواقع ويب وتطبيقات جوال مخصصة تعمل بشكل مثالي.",
    websiteMigration: "نقل الموقع",
    websiteMigrationDesc: "انقل موقعك الحالي - سنستضيفه بشكل أفضل وأسرع.",
    onlinePayment: "أنظمة الدفع عبر الإنترنت",
    onlinePaymentDesc: "اقبل المدفوعات بشكل آمن عبر Stripe و PayPal وطرق أخرى.",
    bookingScheduling: "الحجز والجدولة",
    bookingSchedulingDesc: "اسمح للعملاء بحجز المواعيد عبر الإنترنت مع تذكيرات تلقائية.",
    smartAutomation: "الأتمتة الذكية والذكاء الاصطناعي",
    smartAutomationDesc: "أتمتة المهام بأنظمة ذكية توفر الوقت والمال.",
    dataAnalytics: "البيانات والتحليلات",
    dataAnalyticsDesc: "رؤى قوية تعزز قرارات عملك ونموه.",
    chatbotsSupport: "روبوتات الدردشة والدعم",
    chatbotsSupportDesc: "مساعدو دردشة آلية تجيب على الأسئلة على مدار الساعة.",
    brandingCreative: "حزمة العلامة التجارية والإبداع",
    brandingCreativeDesc: "شعارات، صور ذكاء اصطناعي، رسومات ونصوص مقنعة لعلامتك.",
    emailMarketing: "البريد الإلكتروني والتسويق",
    emailMarketingDesc: "إعداد بريد إلكتروني احترافي وحملات آلية.",
    securityCompliance: "الأمان والامتثال",
    securityComplianceDesc: "أمان على مستوى المؤسسات مع امتثال GDPR والمحلي.",
    ongoingSupport: "دعم مستمر",
    ongoingSupportDesc: "نحافظ على كل شيء يعمل بسلاسة مع أوقات استجابة مضمونة.",
    whyWebsiteMatters: "لماذا يهم موقعك",
    websiteStatsDesc:
      "موقعك الإلكتروني هو واجهة متجرك - معجلك التجاري الأقوى. تجمع Lyra Stack بين التكنولوجيا المتطورة والرؤى العميقة للعملاء لبناء منصات تحول الزوار إلى مؤيدين والبيانات إلى قرارات.",
    trustIncrease: "زيادة الثقة بالعلامة التجارية",
    moreCustomers: "المزيد من العملاء",
    alwaysOpen: "مفتوح دائماً",
    betterExperience: "تجربة أفضل",
    platformPackages: "حزم المنصة",
    platformPackagesDesc: "حزم منصة بموضوع المجرة تنمو مع عملك - من مواقع بسيطة إلى حلول ذكاء اصطناعي كاملة",
    nebulaStarter: "سديم البداية",
    starCluster: "مجموعة النجوم",
    supernovaAI: "سوبرنوفا AI",
    cosmosEnterprise: "كوزموس المؤسسة",
    seeOurWork: "انظر عملنا",
    getYourQuote: "احصل على عرضك",
    callOurTeam: "اتصل بفريقنا",
    loginExistingUsers: "تسجيل الدخول",
    whyLyraStack: "لماذا Lyra Stack",
    services: "الخدمات",
    solutions: "الحلول",
    ourWork: "أعمالنا",
    customerPortal: "بوابة العملاء",
    readyToLaunch: "هل أنت مستعد لإطلاق مشروعك؟",
    createTogether: "لنصنع شيئًا مذهلاً معًا. يبدأ تحولك الرقمي من هنا.",
    customersCenter:
      "العملاء في مركز كوننا. تنظم Lyra Stack موقعك الإلكتروني وعلامتك التجارية حتى تتمكن من التركيز على ما يهم في العمل.",
    orchestrateWebsite: "تنظم Lyra Stack موقعك الإلكتروني وعلامتك التجارية حتى تتمكن من التركيز على ما يهم في العمل.",
    contact: "اتصل بنا",
    registeredUKBusiness: "شركة مسجلة في المملكة المتحدة",
    companyNumber: "رقم الشركة 12345678",
    allRightsReserved: "جميع الحقوق محفوظة. العملاء في مركز كوننا.",
    seeOurSolutions: "شاهد حلولنا في العمل",
    realWorldExamples: "أمثلة واقعية لكيفية مساعدتنا للشركات على الازدهار",
    aiChatbots: "روبوتات الدردشة الذكية",
    aiChatbotsDesc: "دعم عملاء آلي على مدار الساعة",
    paymentSystems: "أنظمة الدفع",
    paymentSystemsDesc: "معالجة دفع آمنة",
    crmSystems: "أنظمة CRM",
    crmSystemsDesc: "إدارة علاقات العملاء",
    analytics: "التحليلات",
    analyticsDesc: "رؤى مستندة إلى البيانات",
    bookingSystems: "أنظمة الحجز",
    bookingSystemsDesc: "جدولة المواعيد",
    ecommerce: "التجارة الإلكترونية",
    ecommerceDesc: "متجر إلكتروني كامل",
    why: "لماذا؟",
    allSizes: "جميع الأحجام",
    allSizesDesc: "من الشركات الناشئة إلى المؤسسات",
    worldwide: "عالمي",
    worldwideDesc: "أي بلد",
    allSectors: "جميع القطاعات",
    allSectorsDesc: "أي صناعة",
    complete: "كامل",
    completeDesc: "حلول شاملة",
    fromSimpleTo: "من مواقع الويب البسيطة إلى المنصات الكاملة - نتعامل مع كل شيء حتى تتمكن من التركيز على ما يهم أكثر",
    includedPlatform: "مشمول مع كل منصة",
    needSomethingCustom: "هل تحتاج شيء مخصص؟",
    whyChooseLyra: "لماذا تختار Lyra Stack",
    projectDetails: "تفاصيل المشروع",
    websitesAndApps: "المواقع والتطبيقات",
    paymentSolutions: "حلول الدفع",
    smartAutomationAndAI: "الأتمتة الذكية والذكاء الاصطناعي",
    dataAndAnalytics: "البيانات والتحليلات",
    brandingAndCreative: "العلامة التجارية والإبداع",
    givingBusinessLeads: "يمنحك عملاء محتملين جدد وعملاء.",
    setupFeeCovers: "تغطي رسوم الإعداد البناء الأولي + 12 شهرًا من كل ما سبق. بعد 12 شهرًا: £20/شهر للاستمرار.",
    fromStartupsToEnterprises:
      "من الشركات الناشئة إلى المؤسسات العالمية - نبني حلولاً تنمو معك. نخدم جميع الصناعات في جميع أنحاء العالم بمنصات آمنة ومتوافقة.",
    realProjectsResults: "مشاريع حقيقية، نتائج حقيقية. كل حل مصمم لتأثير تجاري قابل للقياس.",
    businessOutcome: "النتيجة التجارية:",
    name: "الاسم",
    email: "البريد الإلكتروني",
    company: "الشركة",
    currency: "العملة",
    selectCurrency: "اختر العملة",
    platformType: "نوع المنصة",
    selectPlatform: "اختر المنصة",
    timeline: "الجدول الزمني",
    selectTimeline: "اختر الجدول الزمني",
    flexibleTimeline: "مرن (4-6 أسابيع)",
    rushTimeline: "عاجل (2-3 أسابيع) +30%",
    addOnFeatures: "ميزات إضافية",
    projectDescription: "وصف المشروع",
    tellUsAboutYourProject: "أخبرنا عن أهداف ومتطلبات مشروعك...",
    calculateEstimate: "احسب التقدير",
    submitForPrototype: "إرسال للنموذج الأولي 24 ساعة",
    estimatedSetupCost: "التكلفة المقدرة للإعداد",
    includesFor12Months: "يشمل لمدة 12 شهرًا:",
    freeDomainHosting: "نطاق واستضافة مجانية",
    professionalEmailAddress: "عنوان بريد إلكتروني احترافي",
    sslCertificateSecurity: "شهادة SSL والأمان",
    support247: "دعم على مدار الساعة",
    freeUpdatesMaintenance: "تحديثات وصيانة مجانية",
    after12Months: "بعد 12 شهرًا: £20/شهر لمواصلة جميع الخدمات",

    chatbotWelcome: "مرحباً! أنا Lyra، دليلك للحلول الرقمية. كيف يمكنني مساعدتك اليوم؟",
    chatbotQuickQuestions: "أسئلة سريعة:",
    chatbotAskAnything: "اسألني أي شيء...",
    chatbotServicesResponse:
      "نقدم حلولاً رقمية كاملة بما في ذلك مواقع الويب وتطبيقات الجوال وأنظمة الدفع ومنصات الحجز وتكامل الذكاء الاصطناعي وروبوتات الدردشة وأنظمة CRM ولوحات التحليلات والاستشارات الرقمية. من مواقع الويب البسيطة إلى منصات المؤسسات المعقدة!",
    chatbotPricingResponse:
      "تبدأ منصتنا الأولية من £250 والتي تشمل الإعداد و12 شهرًا من استضافة النطاق المجانية وعنوان البريد الإلكتروني وأمان SSL ودعم 24/7 لمدة عام. نقدم أيضًا عروض أسعار مخصصة بناءً على احتياجاتك المحددة. هل تريد الحصول على عرض أسعار شخصي؟",
    chatbotInternationalResponse:
      "نعم! نعمل مع الشركات في جميع أنحاء العالم، ونخدم العملاء في أي بلد. تم تصميم حلولنا للعمل عالميًا مع دعم متعدد العملات وأفضل الممارسات الدولية.",
    chatbotIndustriesResponse:
      "نخدم جميع القطاعات بما في ذلك التمويل والصحة واللياقة البدنية والعقارات والطاقة والمزيد. من المستقلين والشركات الناشئة إلى المؤسسات الكبيرة، لدينا كل ما تحتاجه.",
    chatbotTimelineResponse:
      "يمكن أن تكون مواقع الويب البسيطة جاهزة في أقل من 1-2 أسبوع. بالنسبة للمنصات المعقدة، تختلف الجداول الزمنية بناءً على الميزات. نقدم خيارات تسليم سريعة ونوفر جداول زمنية مفصلة للمشروع أثناء الاستشارة.",
    chatbotBuildingBlocksResponse:
      "كتل البناء الخاصة بنا هي مكونات معيارية يمكنك إضافتها إلى منصتك. فكر فيها مثل قطع الليغو - أنظمة الدفع، مصادقة المستخدم، التحليلات، ميزات الذكاء الاصطناعي، إلخ. تدفع فقط مقابل ما تحتاجه ويمكنك إضافة المزيد كلما نمت!",
    chatbotSupportResponse:
      "تتضمن كل منصة 12 شهرًا من الدعم على مدار الساعة. نراقب ونحافظ ونساعدك على النجاح. بعد السنة الأولى، نقدم حزم دعم مرنة لتلبية احتياجاتك.",
    chatbotDefaultResponse:
      "سأكون سعيدة بمساعدتك في ذلك! للحصول على معلومات مفصلة، أوصي بالحصول على عرض أسعار شخصي أو التحدث مع فريقنا. يمكنك أيضًا استكشاف قسم الخدمات لمعرفة المزيد عما نقدمه.",

    customerFirstAlways: "العميل أولاً دائماً",
    customerFirstDesc: "نجاحك يقود كل ما نقوم به.",
    secureCompliant: "آمن ومتوافق",
    secureCompliantDesc: "امتثال GDPR و CCPA المحلي. أمان بمستوى البنك.",
    worldwideService: "خدمة عالمية",
    worldwideServiceDesc: "نعمل مع عملاء في أي بلد.",
    allIndustries: "جميع الصناعات",
    allIndustriesDesc: "التمويل، الصحة، العقارات، الطاقة، والمزيد.",
    completeSolutions: "حلول كاملة",
    completeSolutionsDesc: "من المفهوم إلى الإطلاق وما بعده.",
    startupsLabel: "شركات ناشئة",
    toEnterprisesLabel: "إلى مؤسسات",
    worldwideLabel: "عالمي",
    anyCountryLabel: "أي بلد",
    allSectorsLabel: "جميع القطاعات",
    everyIndustryLabel: "كل صناعة",
    fastResponse: "24 ساعة",
    fastResponseLabel: "استجابة سريعة",

    // USP Translations
    instantMVP: "عروض MVP فورية",
    instantMVPDesc:
      "احصل على تقديرات في الوقت الفعلي لمشروعك باستخدام نظام عروض الأسعار الذكي الخاص بنا. لا انتظار، لا مفاجآت.",
    onlineFormEstimates: "نموذج عبر الإنترنت + تقديرات في الوقت الفعلي",
    hour24Prototypes: "نماذج أولية في 24 ساعة",
    hour24PrototypesDesc: "احصل على نموذج أولي مفصل للموقع في غضون 24 ساعة من إرسال متطلباتك. شاهد رؤيتك تتحقق.",
    detailedPrototype24hrs: "نموذج أولي مفصل في 24 ساعة",
    fullSpectrumSolutions: "حلول الطيف الكامل",
    fullSpectrumSolutionsDesc:
      "من المواقع الأساسية إلى واجهات المستخدم المعقدة، وتكامل الذكاء الاصطناعي، وروبوتات الدردشة، والتطبيقات الكاملة. نقوم بكل شيء.",
    basicToComplexApps: "تطبيقات أساسية إلى معقدة",
    uniqueApproachDelivers: "نهجنا الفريد يقدم نتائج أسرع من التطوير التقليدي",
  },
}

interface LanguageContextType {
  currentLanguage: LanguageCode
  setCurrentLanguage: (lang: LanguageCode) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>("EN")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage") as LanguageCode
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("preferredLanguage", currentLanguage)
  }, [currentLanguage])

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, t: translations[currentLanguage] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export { translations }
