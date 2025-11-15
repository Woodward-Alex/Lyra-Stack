"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  MessageSquare,
  CreditCard,
  Users,
  BarChart3,
  Calendar,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function ServiceShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const solutions = [
    {
      icon: <MessageSquare className="h-8 w-8 text-lyra-purple-light" />,
      title: t.aiChatbots,
      description: t.aiChatbotsDesc,
      demo: (
        <div className="bg-lyra-darkest/50 rounded-lg p-4 border border-lyra-medium/30 min-h-[200px]">
          <div className="space-y-2">
            {isVisible && (
              <>
                <div className="flex items-start space-x-2 animate-slide-in-left">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-lyra-blue to-lyra-purple flex items-center justify-center text-xs font-bold flex-shrink-0">
                    AI
                  </div>
                  <div className="bg-lyra-medium/40 rounded-lg p-2 max-w-[80%]">
                    <p className="text-xs text-lyra-text-primary">Hi! How can I help you today?</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 justify-end animate-slide-in-right animation-delay-700">
                  <div className="bg-lyra-blue/30 rounded-lg p-2 max-w-[80%]">
                    <p className="text-xs text-lyra-text-primary">What are your business hours?</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 animate-slide-in-left animation-delay-1400">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-lyra-blue to-lyra-purple flex items-center justify-center text-xs font-bold flex-shrink-0">
                    AI
                  </div>
                  <div className="bg-lyra-medium/40 rounded-lg p-2 max-w-[80%]">
                    <p className="text-xs text-lyra-text-primary">We're open 24/7 online!</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ),
    },
    {
      icon: <CreditCard className="h-8 w-8 text-lyra-blue-light" />,
      title: t.paymentSystems,
      description: t.paymentSystemsDesc,
      demo: (
        <div className="bg-lyra-darkest/50 rounded-lg p-4 border border-lyra-medium/30 min-h-[200px]">
          <div className="space-y-3">
            {isVisible && (
              <>
                <div className="bg-gradient-to-r from-lyra-blue/20 to-lyra-purple/20 rounded-lg p-3 border border-lyra-blue-light/30 animate-scale-in">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-lyra-text-secondary">Transaction Total</span>
                    <span className="text-xl font-bold text-lyra-text-primary">£250</span>
                  </div>
                  <div className="h-2 bg-lyra-medium/30 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-gradient-to-r from-lyra-blue to-lyra-purple rounded-full animate-progress-bar w-0"></div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-green-400 font-semibold">✓ Payment Successful</span>
                    <span className="text-lyra-text-muted">Secure SSL</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ),
    },
    {
      icon: <Users className="h-8 w-8 text-lyra-purple-light" />,
      title: t.crmSystems,
      description: t.crmSystemsDesc,
      demo: (
        <div className="bg-lyra-darkest/50 rounded-lg p-4 border border-lyra-medium/30 min-h-[200px]">
          <div className="space-y-2">
            {isVisible &&
              ["Sarah Johnson", "Mike Chen", "Emma Davis"].map((name, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-lyra-medium/30 rounded-lg p-2 hover:bg-lyra-medium/50 transition-all cursor-pointer animate-slide-in-left"
                  style={{ animationDelay: `${i * 300}ms` }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lyra-blue to-lyra-purple flex items-center justify-center text-xs font-bold text-lyra-text-primary">
                      {name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-lyra-text-primary">{name}</p>
                      <p className="text-[10px] text-lyra-text-muted">Last contact: 2d ago</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              ))}
          </div>
        </div>
      ),
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-lyra-blue-light" />,
      title: t.analytics,
      description: t.analyticsDesc,
      demo: (
        <div className="bg-lyra-darkest/50 rounded-lg p-4 border border-lyra-medium/30 min-h-[200px]">
          {isVisible && (
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Visitors", value: "2.4k", change: "+12%" },
                  { label: "Sales", value: "£8.2k", change: "+8%" },
                  { label: "Orders", value: "143", change: "+15%" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-lyra-blue/20 to-lyra-blue/10 rounded-lg p-2 border border-lyra-blue/30 animate-scale-in hover:scale-105 transition-transform cursor-pointer"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <p className="text-[10px] text-lyra-text-muted">{stat.label}</p>
                    <p className="text-sm font-bold text-lyra-blue-light">{stat.value}</p>
                    <p className="text-[10px] text-green-400">{stat.change}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      icon: <Calendar className="h-8 w-8 text-lyra-purple-light" />,
      title: t.bookingSystems,
      description: t.bookingSystemsDesc,
      demo: (
        <div className="bg-lyra-darkest/50 rounded-lg p-4 border border-lyra-medium/30 min-h-[200px]">
          {isVisible && (
            <div className="space-y-2">
              <p className="text-xs text-lyra-text-secondary mb-2">Available Slots</p>
              <div className="grid grid-cols-3 gap-2">
                {["9:00 AM", "10:30 AM", "2:00 PM", "3:30 PM", "4:00 PM", "5:30 PM"].map((time, i) => (
                  <button
                    key={i}
                    className="bg-lyra-blue/20 border border-lyra-blue/30 rounded px-2 py-2 text-xs text-lyra-text-primary hover:bg-lyra-blue/40 hover:scale-105 transition-all animate-scale-in"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-lyra-blue-light" />,
      title: t.ecommerce,
      description: t.ecommerceDesc,
      demo: (
        <div className="bg-lyra-darkest/50 rounded-lg p-4 border border-lyra-medium/30 min-h-[200px]">
          {isVisible && (
            <div className="space-y-2">
              {[
                { name: "Premium Widget", price: "£49.99", stock: "In Stock" },
                { name: "Pro Package", price: "£99.99", stock: "2 left" },
              ].map((product, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 bg-lyra-medium/20 rounded-lg p-2 hover:bg-lyra-medium/40 transition-all cursor-pointer animate-slide-in-left"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-lyra-blue/30 to-lyra-purple/30 rounded flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-lyra-text-primary">{product.name}</p>
                    <p className="text-xs text-lyra-blue-light font-bold">{product.price}</p>
                    <p className="text-[10px] text-green-400">{product.stock}</p>
                  </div>
                  <button className="px-2 py-1 bg-lyra-blue/30 rounded text-[10px] text-lyra-text-primary hover:bg-lyra-blue/50 transition-colors">
                    Add
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ),
    },
  ]

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 350
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" })
    }
  }

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 350
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" })
    }
  }

  return (
    <section id="service-showcase" className="py-12 md:py-16 bg-lyra-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-lyra-dark via-lyra-darkest to-lyra-dark opacity-50"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-3">
              <span className="bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent">
                {t.seeOurSolutions}
              </span>
            </h2>
            <p className="text-base md:text-lg text-lyra-text-secondary max-w-3xl mx-auto font-medium">
              {t.realWorldExamples}
            </p>
          </div>

          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className="min-w-[300px] md:min-w-[350px] flex-shrink-0 snap-start bg-lyra-medium/20 backdrop-blur-sm border-lyra-medium/50 hover:border-lyra-purple-light/50 transition-all duration-500"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-gradient-to-br from-lyra-purple/30 to-lyra-purple-light/30 rounded-lg mr-2">
                        {solution.icon}
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-lyra-text-primary">{solution.title}</h3>
                    </div>
                    {solution.demo}
                    <p className="text-xs text-lyra-text-muted mt-2">{solution.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <Button
                onClick={scrollPrev}
                size="icon"
                variant="outline"
                className="border-lyra-medium bg-lyra-medium/20 hover:bg-lyra-medium/40 text-lyra-text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                onClick={scrollNext}
                size="icon"
                variant="outline"
                className="border-lyra-medium bg-lyra-medium/20 hover:bg-lyra-medium/40 text-lyra-text-primary"
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
