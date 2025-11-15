"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Portfolio() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      description: "Complete e-commerce solution with AI recommendations and automated inventory management",
      image: "/modern-ecommerce-dashboard.png",
      tags: ["AI", "E-commerce", "Analytics"],
      outcome: "300% increase in conversion rates",
    },
    {
      title: "Healthcare Analytics Dashboard",
      description: "Real-time patient analytics with predictive insights for healthcare providers",
      image: "/healthcare-analytics-dashboard.png",
      tags: ["Healthcare", "Analytics", "Dashboard"],
      outcome: "50% reduction in patient wait times",
    },
    {
      title: "Smart City Mobile App",
      description: "Citizen engagement platform with maps, chatbot, and service requests",
      image: "/mobile-app-city-services.jpg",
      tags: ["Mobile", "Maps", "Chatbot"],
      outcome: "85% citizen satisfaction rate",
    },
    {
      title: "FinTech Trading Platform",
      description: "Real-time trading platform with AI-powered market analysis and automated alerts",
      image: "/financial-trading-platform.jpg",
      tags: ["FinTech", "AI", "Real-time"],
      outcome: "40% faster trade execution",
    },
    {
      title: "Property Management System",
      description: "Complete property listing and booking platform with virtual tours and payments",
      image: "/property-management-website.jpg",
      tags: ["Property", "Booking", "Payments"],
      outcome: "60% more bookings",
    },
    {
      title: "Energy Monitoring Dashboard",
      description: "Real-time energy consumption tracking with AI-powered efficiency recommendations",
      image: "/energy-monitoring-dashboard.jpg",
      tags: ["Energy", "AI", "Analytics"],
      outcome: "35% cost reduction",
    },
  ]

  const itemsPerPage = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= projects.length ? 0 : prev + itemsPerPage))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0 ? Math.max(0, projects.length - itemsPerPage) : prev - itemsPerPage,
    )
  }

  return (
    <section id="portfolio" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-lyra-dark to-lyra-darkest">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent">
                {t.seeOurWork}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-lyra-text-secondary max-w-3xl mx-auto font-medium">
              {t.realProjectsResults}
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {projects.slice(currentIndex, currentIndex + itemsPerPage).map((project, index) => (
                <Card
                  key={index}
                  className="bg-lyra-medium/20 backdrop-blur-sm border-lyra-medium/50 hover:border-lyra-blue-light/50 transition-all duration-300 group overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-lyra-text-primary mb-2 line-clamp-1">{project.title}</h3>
                    <p className="text-sm text-lyra-text-secondary mb-3 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-lyra-blue/20 text-lyra-blue-light rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-green-900/30 to-lyra-blue/30 rounded-lg p-2 mb-3 border border-green-500/20">
                      <div className="text-xs font-semibold text-green-400 mb-1">{t.businessOutcome}</div>
                      <div className="text-lyra-text-primary text-sm font-medium">{project.outcome}</div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-lyra-medium hover:bg-lyra-medium/80 text-xs flex-1">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-lyra-medium text-lyra-text-secondary bg-transparent hover:bg-lyra-medium/20 text-xs flex-1"
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Case
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="border-lyra-medium text-lyra-text-primary hover:bg-lyra-medium/30 bg-lyra-medium/10"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(projects.length / itemsPerPage) }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i * itemsPerPage)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      Math.floor(currentIndex / itemsPerPage) === i
                        ? "bg-lyra-blue-light w-8"
                        : "bg-lyra-medium hover:bg-lyra-medium/80"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="border-lyra-medium text-lyra-text-primary hover:bg-lyra-medium/30 bg-lyra-medium/10"
                disabled={currentIndex + itemsPerPage >= projects.length}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
