"use client"

import { Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  const scrollToQuote = () => {
    const quoteSection = document.getElementById("quote")
    quoteSection?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-lyra-darkest border-t border-lyra-medium/30">
      <div className="bg-gradient-to-r from-lyra-blue/10 to-lyra-purple/10 border-b border-lyra-medium/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent">
              {t.readyToLaunch}
            </span>
          </h2>
          <p className="text-lg text-lyra-text-secondary mb-8 max-w-2xl mx-auto font-medium">{t.createTogether}</p>
          <div className="flex justify-center">
            <Button
              onClick={scrollToQuote}
              size="lg"
              className="bg-gradient-to-r from-lyra-blue to-lyra-purple hover:from-lyra-blue-dark hover:to-lyra-purple-dark text-lyra-text-primary text-lg px-8 py-6 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              {t.getStarted}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-4 mb-4 hover:opacity-80 transition-opacity"
            >
              <AnimatedLogo width={64} height={64} navVersion={true} />
              <span className="text-3xl font-display font-bold bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent">
                Lyra Stack
              </span>
            </button>
            <p className="text-lyra-text-muted mb-6 max-w-md font-medium">{t.customersCenter}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-lyra-text-muted hover:text-lyra-blue-light transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-lyra-text-muted hover:text-lyra-purple-light transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:hello@lyrastack.com"
                className="text-lyra-text-muted hover:text-lyra-blue-light transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lyra-text-primary font-semibold mb-4">{t.services}</h3>
            <ul className="space-y-2 text-lyra-text-muted font-medium">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-lyra-blue-light transition-colors"
                >
                  {t.digitalConsultancy}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-lyra-purple-light transition-colors"
                >
                  Websites & Apps
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-lyra-blue-light transition-colors"
                >
                  Payment Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-lyra-purple-light transition-colors"
                >
                  Booking Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-lyra-blue-light transition-colors"
                >
                  Smart Automation & AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-lyra-purple-light transition-colors"
                >
                  Data & Analytics
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-lyra-blue-light transition-colors"
                >
                  Branding & Creative
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lyra-text-primary font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-2 text-lyra-text-muted font-medium">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-lyra-blue-light" />
                hello@lyrastack.com
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-lyra-purple-light" />
                +44 (0) 7596 527 901
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-lyra-medium/30 mt-8 pt-8 text-center text-lyra-text-muted">
          <p className="font-medium mb-2">&copy; 2025 Lyra Stack LTD {t.allRightsReserved}</p>
          <p className="text-sm">
            {t.registeredUKBusiness} 
          </p>
        </div>
      </div>
    </footer>
  )
}
