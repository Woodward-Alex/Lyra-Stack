"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calculator, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function USP() {
  const { t, currentLanguage } = useLanguage()

  const usps = [
    {
      icon: <Calculator className="h-12 w-12 text-blue-400" />,
      title: t.instantMVP,
      description: t.instantMVPDesc,
      highlight: t.onlineFormEstimates,
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-400" />,
      title: t.hour24Prototypes,
      description: t.hour24PrototypesDesc,
      highlight: t.detailedPrototype24hrs,
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-400" />,
      title: t.fullSpectrumSolutions,
      description: t.fullSpectrumSolutionsDesc,
      highlight: t.basicToComplexApps,
    },
  ]

  return (
    <section key={currentLanguage} className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.whyChooseLyra}
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">{t.uniqueApproachDelivers}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-blue-500/50 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="text-center relative z-10">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {usp.icon}
                </div>
                <CardTitle className="text-white text-2xl mb-2">{usp.title}</CardTitle>
                <div className="text-sm font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full inline-block">
                  {usp.highlight}
                </div>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  {usp.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
