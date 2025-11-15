"use client"

import { Target, Heart, Lightbulb, Globe, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function About() {
  const { t, currentLanguage } = useLanguage()

  return (
    <section id="about" className="py-20 bg-lyra-dark" key={currentLanguage}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent">
                {t.whyChooseLyra}
              </span>
            </h2>
            <p className="text-xl text-lyra-text-secondary mb-8 leading-relaxed font-medium">{t.orchestrateWebsite}</p>
            <p className="text-lg text-lyra-text-muted mb-8 font-medium">{t.fromStartupsToEnterprises}</p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Heart className="h-6 w-6 text-lyra-purple-light mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-lyra-text-primary mb-2">{t.customerFirstAlways}</h3>
                  <p className="text-lyra-text-muted font-medium">{t.customerFirstDesc}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-lyra-blue-light mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-lyra-text-primary mb-2">{t.secureCompliant}</h3>
                  <p className="text-lyra-text-muted font-medium">{t.secureCompliantDesc}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Globe className="h-6 w-6 text-lyra-purple-light mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-lyra-text-primary mb-2">{t.worldwideService}</h3>
                  <p className="text-lyra-text-muted font-medium">{t.worldwideServiceDesc}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Target className="h-6 w-6 text-lyra-blue-light mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-lyra-text-primary mb-2">{t.allIndustries}</h3>
                  <p className="text-lyra-text-muted font-medium">{t.allIndustriesDesc}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Lightbulb className="h-6 w-6 text-lyra-blue-light mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-lyra-text-primary mb-2">{t.completeSolutions}</h3>
                  <p className="text-lyra-text-muted font-medium">{t.completeSolutionsDesc}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-lyra-blue/20 to-lyra-purple/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-lyra-medium/30 backdrop-blur-sm rounded-3xl p-8 border border-lyra-medium/50">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-lyra-purple-light mb-2">{t.startupsLabel}</div>
                  <div className="text-lyra-text-muted font-medium">{t.toEnterprisesLabel}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-lyra-blue-light mb-2">{t.worldwideLabel}</div>
                  <div className="text-lyra-text-muted font-medium">{t.anyCountryLabel}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-lyra-purple-light mb-2">{t.allSectorsLabel}</div>
                  <div className="text-lyra-text-muted font-medium">{t.everyIndustryLabel}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-lyra-blue-light mb-2">{t.fastResponse}</div>
                  <div className="text-lyra-text-muted font-medium">{t.fastResponseLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
