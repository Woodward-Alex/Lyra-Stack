import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, FileCheck, Globe2, Server, Database } from "lucide-react"

export function SecurityCompliance() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-lyra-blue-light" />,
      title: "Enterprise Security",
      description: "Bank-level encryption, SSL certificates, and secure hosting as standard.",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-lyra-purple-light" />,
      title: "Local Compliance",
      description: "GDPR, CCPA, and regional data protection regulations fully covered.",
    },
    {
      icon: <Database className="h-10 w-10 text-lyra-blue-light" />,
      title: "Data & Analytics",
      description: "Powerful insights to understand customers and drive business growth.",
    },
    {
      icon: <Lock className="h-10 w-10 text-lyra-purple-light" />,
      title: "Secure Payments",
      description: "PCI-DSS compliant payment processing with fraud protection.",
    },
    {
      icon: <Server className="h-10 w-10 text-lyra-blue-light" />,
      title: "Regular Backups",
      description: "Automated daily backups with instant recovery options.",
    },
    {
      icon: <Globe2 className="h-10 w-10 text-lyra-purple-light" />,
      title: "Global Standards",
      description: "ISO 27001, SOC 2, and industry-specific compliance certifications.",
    },
  ]

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-lyra-darkest">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent">
                Security & Compliance First
              </span>
            </h2>
            <p className="text-lg md:text-xl text-lyra-text-secondary max-w-3xl mx-auto font-medium">
              Your data security and regulatory compliance are our top priorities. We follow international standards and
              local regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-lyra-medium/20 backdrop-blur-sm border-lyra-medium/50 hover:border-lyra-blue-light/50 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-lyra-text-primary mb-3">{feature.title}</h3>
                  <p className="text-lyra-text-muted text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-lyra-medium/30 backdrop-blur-sm rounded-2xl px-8 py-6 border border-lyra-medium/50">
              <p className="text-lyra-text-secondary font-medium mb-2">
                <span className="text-lyra-blue-light font-semibold">Trusted by businesses worldwide</span> to protect
                their data and customers
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-lyra-text-muted">
                <span>• GDPR Compliant</span>
                <span>• ISO 27001</span>
                <span>• SOC 2 Type II</span>
                <span>• PCI-DSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
