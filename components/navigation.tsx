"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  ChevronDown,
  LogIn,
  Lightbulb,
  CreditCard,
  Calendar,
  Brain,
  Palette,
  Database,
  Users,
  ArrowUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AnimatedLogo } from "@/components/animated-logo"
import { AuthDialog } from "@/components/auth-dialog"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [authDialogOpen, setAuthDialogOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-lyra-darkest/95 backdrop-blur-md border-b border-lyra-blue/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
              aria-label="Go to top"
            >
              <AnimatedLogo width={56} height={56} navVersion={true} />
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent">
                Lyra Stack
              </span>
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-lyra-text-secondary hover:text-lyra-blue-light transition-colors font-medium">
                  {t.services} <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-lyra-dark/98 backdrop-blur-md border-lyra-medium/50 shadow-xl w-[600px] p-4">
                  <div className="grid grid-cols-2 gap-2">
                    <DropdownMenuItem className="text-lyra-text-secondary hover:text-lyra-blue-light hover:bg-lyra-medium/20 p-3 cursor-pointer">
                      <button
                        onClick={() => scrollToSection("services")}
                        className="w-full text-left flex items-center gap-3"
                      >
                        <Lightbulb className="h-5 w-5 text-lyra-blue-light flex-shrink-0" />
                        <span>{t.digitalConsultancy}</span>
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lyra-text-secondary hover:text-lyra-purple-light hover:bg-lyra-medium/20 p-3 cursor-pointer">
                      <button
                        onClick={() => scrollToSection("building-blocks")}
                        className="w-full text-left flex items-center gap-3"
                      >
                        <Database className="h-5 w-5 text-lyra-purple-light flex-shrink-0" />
                        <span>{t.websitesAndApps}</span>
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lyra-text-secondary hover:text-lyra-purple-light hover:bg-lyra-medium/20 p-3 cursor-pointer">
                      <button
                        onClick={() => scrollToSection("services")}
                        className="w-full text-left flex items-center gap-3"
                      >
                        <Database className="h-5 w-5 text-lyra-purple-light flex-shrink-0" />
                        <span>{t.websitesAndApps}</span>
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lyra-text-secondary hover:text-lyra-blue-light hover:bg-lyra-medium/20 p-3 cursor-pointer">
                      <button
                        onClick={() => scrollToSection("services")}
                        className="w-full text-left flex items-center gap-3"
                      >
                        <CreditCard className="h-5 w-5 text-lyra-blue-light flex-shrink-0" />
                        <span>{t.paymentSolutions}</span>
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lyra-text-secondary hover:text-lyra-purple-light hover:bg-lyra-medium/20 p-3 cursor-pointer">
                      <button
                        onClick={() => scrollToSection("services")}
                        className="w-full text-left flex items-center gap-3"
                      >
                        <Calendar className="h-5 w-5 text-lyra-purple-light flex-shrink-0" />
                        <span>{t.bookingSystems}</span>
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lyra-text-secondary hover:text-lyra-blue-light hover:bg-lyra-medium/20 p-3 cursor-pointer">
                      <button
                        onClick={() => scrollToSection("services")}
                        className="w-full text-left flex items-center gap-3"
                      >
                        <Brain className="h-5 w-5 text-lyra-blue-light flex-shrink-0" />
                        <span>{t.smartAutomationAndAI}</span>
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lyra-text-secondary hover:text-lyra-purple-light hover:bg-lyra-medium/20 p-3 cursor-pointer">
                      <button
                        onClick={() => scrollToSection("services")}
                        className="w-full text-left flex items-center gap-3"
                      >
                        <Users className="h-5 w-5 text-lyra-purple-light flex-shrink-0" />
                        <span>{t.dataAndAnalytics}</span>
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lyra-text-secondary hover:text-lyra-purple-light hover:bg-lyra-medium/20 p-3 cursor-pointer">
                      <button
                        onClick={() => scrollToSection("services")}
                        className="w-full text-left flex items-center gap-3"
                      >
                        <Palette className="h-5 w-5 text-lyra-blue-light flex-shrink-0" />
                        <span>{t.brandingAndCreative}</span>
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lyra-text-secondary hover:text-lyra-purple-light hover:bg-lyra-medium/20 p-3 cursor-pointer">
                      <button
                        onClick={() => scrollToSection("building-blocks")}
                        className="w-full text-left flex items-center gap-3"
                      >
                        <Database className="h-5 w-5 text-lyra-purple-light flex-shrink-0" />
                        <span>{t.platformPackages}</span>
                      </button>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={() => scrollToSection("website-stats")}
                className="text-lyra-text-secondary hover:text-lyra-purple-light transition-colors font-medium"
              >
                {t.why}
              </button>

              <button
                onClick={() => scrollToSection("service-showcase")}
                className="text-lyra-text-secondary hover:text-lyra-purple-light transition-colors font-medium"
              >
                {t.solutions}
              </button>

               <button
                onClick={() => scrollToSection("building-blocks")}
                className="text-lyra-text-secondary hover:text-lyra-purple-light transition-colors font-medium"
              >
                Packages
              </button>

              <LanguageSelector />
              
              <Button
                variant="outline"
                className="border-lyra-medium text-lyra-text-secondary hover:bg-lyra-medium/20 bg-transparent font-medium"
                onClick={() => setAuthDialogOpen(true)}
              >
                <LogIn className="h-4 w-4 mr-2" />
                {t.customerPortal}
              </Button>
              <Button
                onClick={() => scrollToSection("quote")}
                className="bg-gradient-to-r from-lyra-blue to-lyra-purple hover:from-lyra-blue-dark hover:to-lyra-purple-dark text-lyra-text-primary font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t.getStarted}
              </Button>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X className="h-6 w-6 text-lyra-text-primary" />
                ) : (
                  <Menu className="h-6 w-6 text-lyra-text-primary" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-lyra-darkest/98 backdrop-blur-md border-t border-lyra-medium/30 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("website-stats")}
                className="block w-full text-left px-3 py-2 text-lyra-text-secondary hover:text-lyra-purple-light font-medium rounded-md hover:bg-lyra-medium/20 transition-all duration-200"
              >
                {t.why}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-lyra-text-secondary hover:text-lyra-blue-light font-medium rounded-md hover:bg-lyra-medium/20 transition-all duration-200"
              >
                {t.services}
              </button>
              <button
                onClick={() => scrollToSection("building-blocks")}
                className="block w-full text-left px-3 py-2 text-lyra-text-secondary hover:text-lyra-purple-light font-medium rounded-md hover:bg-lyra-medium/20 transition-all duration-200"
              >
                {t.platformPackages}
              </button>
              <button
                onClick={() => scrollToSection("service-showcase")}
                className="block w-full text-left px-3 py-2 text-lyra-text-secondary hover:text-lyra-blue-light font-medium rounded-md hover:bg-lyra-medium/20 transition-all duration-200"
              >
                {t.solutions}
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left px-3 py-2 text-lyra-text-secondary hover:text-lyra-blue-light font-medium rounded-md hover:bg-lyra-medium/20 transition-all duration-200"
              >
                {t.ourWork}
              </button>
              <button
                onClick={() => setAuthDialogOpen(true)}
                className="block w-full text-left px-3 py-2 text-lyra-text-secondary hover:text-lyra-blue-light font-medium rounded-md hover:bg-lyra-medium/20 transition-all duration-200"
              >
                {t.customerPortal}
              </button>
            </div>
          </div>
        )}
      </nav>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-lyra-blue to-lyra-purple hover:from-lyra-blue-dark hover:to-lyra-purple-dark text-lyra-text-primary p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} />
    </>
  )
}
