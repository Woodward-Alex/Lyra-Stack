"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Target, TrendingUp, Heart } from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"
import { ParallaxSection } from "@/components/parallax-section"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  const scrollToQuote = () => {
    const quoteSection = document.getElementById("quote")
    quoteSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Starry background with parallax effect */}
      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div className="absolute inset-0 bg-[#070c16]">
          <div className="absolute inset-0 bg-[radial-gradient(#fbffff_1px,transparent_1px)] [background-size:50px_50px] opacity-15"></div>
          {/* Animated stars */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-lyra-text-secondary rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </ParallaxSection>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12 md:mb-16 flex justify-center animate-fade-in">
            <AnimatedLogo
              width={120}
              height={120}
              className="animate-float sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px]"
            />
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 md:mb-6 animate-fade-in-up px-2"
            style={{ animationDelay: "200ms" }}
          >
            <span className="bg-gradient-to-r from-lyra-blue-light via-lyra-purple-light to-lyra-blue-light bg-clip-text text-transparent leading-tight block">
              {t. heroTitle}
            </span>
          </h1>
            <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 md:mb-6 animate-fade-in-up px-2"
            style={{ animationDelay: "200ms" }}
          >
            <span className="bg-gradient-to-r from-lyra-blue-light via-lyra-purple-light to-lyra-blue-light bg-clip-text text-transparent leading-tight block">
              {t.heroTitle2}
            </span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl font-bold lg:text-3xl text-lyra-text-secondary mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in-up px-4"
            style={{ animationDelay: "400ms" }}
          >
            {t.heroSubtitle}
          </p>

           <p
            className="text-base sm:text-lg md:text-xl lg:text-1xl text-lyra-text-secondary mb-6 md:mb-8 max-w-1xl mx-auto leading-relaxed font-medium animate-fade-in-up px-2"
            style={{ animationDelay: "400ms" }}
          >
            {t.heroSubtitle2}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center mb-8 md:mb-12 animate-fade-in-up px-4"
            style={{ animationDelay: "600ms" }}
          >
            <Button
              onClick={scrollToQuote}
              size="lg"
              className="bg-gradient-to-r from-lyra-blue to-lyra-purple hover:from-lyra-blue-dark hover:to-lyra-purple-dark text-lyra-text-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 font-medium shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              {t.getStarted}
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8 px-2">
            {[
              {
                icon: Heart,
                color: "purple",
                title: t.allSizes,
                desc: t.allSizesDesc,
                delay: "700ms",
              },
              { icon: Target, color: "blue", title: t.worldwide, desc: t.worldwideDesc, delay: "800ms" },
              { icon: TrendingUp, color: "purple", title: t.allSectors, desc: t.allSectorsDesc, delay: "900ms" },
              { icon: Sparkles, color: "blue", title: t.complete, desc: t.completeDesc, delay: "1000ms" },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="p-4 md:p-6 bg-lyra-medium/30 backdrop-blur-sm border border-lyra-blue/30 hover:bg-lyra-medium/40 hover:scale-105 transition-all duration-300 animate-fade-in-up rounded-lg"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="flex items-center justify-center mb-2 md:mb-3">
                    <Icon className={`h-6 w-6 md:h-8 md:w-8 text-lyra-${stat.color}-light`} />
                  </div>
                  <div className={`text-lg md:text-2xl font-bold text-lyra-${stat.color}-light mb-1 md:mb-2`}>
                    {stat.title}
                  </div>
                  <div className="text-xs md:text-sm text-lyra-text-muted font-medium">{stat.desc}</div>
                </div>
              )
            })}
          </div>

          <div className="text-center animate-fade-in-up px-4" style={{ animationDelay: "1100ms" }}>
            <p className="text-sm md:text-base text-lyra-text-muted mb-3 md:mb-4 font-medium">{t.fromSimpleTo}</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm text-lyra-text-muted font-medium">
              <span>• Digital Consultancy</span>
              <span>• Online Payments</span>
              <span>• Booking Systems</span>
              <span>• Smart Automation</span>
              <span>• Beautiful Websites</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
