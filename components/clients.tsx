import { Card, CardContent } from "@/components/ui/card"

export function Clients() {
  const clients = [
    { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120" },
    { name: "HealthPlus", logo: "/placeholder.svg?height=60&width=120" },
    { name: "FinanceFlow", logo: "/placeholder.svg?height=60&width=120" },
    { name: "EduTech", logo: "/placeholder.svg?height=60&width=120" },
    { name: "RetailMax", logo: "/placeholder.svg?height=60&width=120" },
    { name: "StartupX", logo: "/placeholder.svg?height=60&width=120" },
  ]

  const partners = [
    { name: "AWS", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Google Cloud", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Microsoft Azure", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Vercel", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section id="clients" className="py-20 bg-slate-950">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Trusted by Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From startups to enterprises, we've helped businesses across industries achieve their digital goals
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Our Clients</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {clients.map((client, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/30 backdrop-blur-sm border-slate-800 hover:border-slate-700 transition-all duration-300 group"
                >
                  <CardContent className="p-6 flex items-center justify-center">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      className="max-w-full h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">Technology Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/30 backdrop-blur-sm border-slate-800 hover:border-slate-700 transition-all duration-300 group"
                >
                  <CardContent className="p-6 flex items-center justify-center">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="max-w-full h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
