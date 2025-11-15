import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Building2, Home, Zap } from "lucide-react"

export function Industries() {
  const industries = [
    {
      icon: <Heart className="h-12 w-12 text-lyra-purple-light" />,
      title: "Healthcare",
      description: "Patient portals, appointment booking, secure data management, and telehealth solutions.",
      examples: ["Patient Management", "Appointment Systems", "Health Records", "Telemedicine Platforms"],
    },
    {
      icon: <Building2 className="h-12 w-12 text-lyra-blue-light" />,
      title: "Finance",
      description: "Secure payment processing, financial dashboards, banking portals, and investment platforms.",
      examples: ["Payment Gateways", "Trading Platforms", "Banking Apps", "Financial Analytics"],
    },
    {
      icon: <Home className="h-12 w-12 text-lyra-purple-light" />,
      title: "Property",
      description: "Property listings, virtual tours, tenant management, and real estate booking systems.",
      examples: ["Property Portals", "Booking Systems", "Virtual Tours", "Tenant Management"],
    },
    {
      icon: <Zap className="h-12 w-12 text-lyra-blue-light" />,
      title: "Energy",
      description: "Smart meter integration, usage dashboards, billing systems, and energy management platforms.",
      examples: ["Usage Monitoring", "Billing Systems", "Smart Grids", "Energy Analytics"],
    },
  ]

  return (
    <section id="industries" className="py-20 bg-gradient-to-b from-lyra-dark to-lyra-darkest">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent">
                Industries We Serve
              </span>
            </h2>
            <p className="text-xl text-lyra-text-secondary max-w-3xl mx-auto font-medium">
              Specialized solutions for healthcare, finance, property, and energy sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="bg-lyra-medium/20 backdrop-blur-sm border-lyra-medium/50 hover:border-lyra-blue-light/50 hover:bg-lyra-medium/30 transition-all duration-300 group h-full"
              >
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-lyra-text-primary text-2xl font-semibold">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-lyra-text-muted text-base leading-relaxed mb-6">
                    {industry.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {industry.examples.map((example, exampleIndex) => (
                      <div
                        key={exampleIndex}
                        className="text-sm text-lyra-text-secondary bg-lyra-medium/30 rounded-full px-3 py-1.5 inline-block mx-1"
                      >
                        {example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
