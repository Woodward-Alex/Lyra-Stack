"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Award, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function WebsiteStats() {
  const { t, currentLanguage } = useLanguage()

  const stats = [
    {
      icon: <TrendingUp className="h-12 w-12 text-lyra-purple-light" />,
      stat: "88%",
      description:
        currentLanguage === "EN"
          ? "of consumers research online before making a purchase"
          : currentLanguage === "ES"
            ? "de los consumidores investigan en línea antes de realizar una compra"
            : currentLanguage === "FR"
              ? "des consommateurs recherchent en ligne avant d'effectuer un achat"
              : currentLanguage === "DE"
                ? "der Verbraucher recherchieren online vor dem Kauf"
                : currentLanguage === "IT"
                  ? "dei consumatori effettua ricerche online prima di acquistare"
                  : currentLanguage === "PT"
                    ? "dos consumidores pesquisam online antes de fazer uma compra"
                    : currentLanguage === "ZH"
                      ? "的消费者在购买前会在线研究"
                      : currentLanguage === "JA"
                        ? "の消費者が購入前にオンラインで調査します"
                        : "من المستهلكين يبحثون عبر الإنترنت قبل الشراء",
      source: "BrightLocal Study",
    },
    {
      icon: <Users className="h-12 w-12 text-lyra-blue-light" />,
      stat: "75%",
      description:
        currentLanguage === "EN"
          ? "judge a company's credibility based on website design"
          : currentLanguage === "ES"
            ? "juzgan la credibilidad de una empresa según el diseño del sitio web"
            : currentLanguage === "FR"
              ? "jugent la crédibilité d'une entreprise selon la conception du site web"
              : currentLanguage === "DE"
                ? "beurteilen die Glaubwürdigkeit eines Unternehmens anhand des Website-Designs"
                : currentLanguage === "IT"
                  ? "giudica la credibilità di un'azienda in base al design del sito web"
                  : currentLanguage === "PT"
                    ? "julgam a credibilidade de uma empresa com base no design do site"
                    : currentLanguage === "ZH"
                      ? "根据网站设计判断公司的可信度"
                      : currentLanguage === "JA"
                        ? "ウェブサイトのデザインで企業の信頼性を判断します"
                        : "يحكمون على مصداقية الشركة بناءً على تصميم الموقع",
      source: "Stanford Research",
    },
    {
      icon: <Award className="h-12 w-12 text-lyra-purple-light" />,
      stat: "48%",
      description:
        currentLanguage === "EN"
          ? "of people cited website design as the top factor in business credibility"
          : currentLanguage === "ES"
            ? "de las personas citaron el diseño del sitio web como el factor principal en la credibilidad empresarial"
            : currentLanguage === "FR"
              ? "des personnes ont cité la conception du site web comme facteur principal de crédibilité commerciale"
              : currentLanguage === "DE"
                ? "der Menschen nannten Website-Design als Hauptfaktor für Geschäftsglaubwürdigkeit"
                : currentLanguage === "IT"
                  ? "delle persone ha citato il design del sito web come fattore principale nella credibilità aziendale"
                  : currentLanguage === "PT"
                    ? "das pessoas citaram o design do site como principal fator de credibilidade empresarial"
                    : currentLanguage === "ZH"
                      ? "的人认为网站设计是企业可信度的首要因素"
                      : currentLanguage === "JA"
                        ? "の人がウェブサイトデザインをビジネスの信頼性の最重要要因としています"
                        : "من الناس ذكروا تصميم الموقع كعامل رئيسي في مصداقية الأعمال",
      source: "Blue Corona",
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-lyra-blue-light" />,
      stat: "94%",
      description:
        currentLanguage === "EN"
          ? "of first impressions are design-related"
          : currentLanguage === "ES"
            ? "de las primeras impresiones están relacionadas con el diseño"
            : currentLanguage === "FR"
              ? "des premières impressions sont liées à la conception"
              : currentLanguage === "DE"
                ? "der ersten Eindrücke sind designbezogen"
                : currentLanguage === "IT"
                  ? "delle prime impressioni sono legate al design"
                  : currentLanguage === "PT"
                    ? "das primeiras impressões estão relacionadas ao design"
                    : currentLanguage === "ZH"
                      ? "的第一印象与设计有关"
                      : currentLanguage === "JA"
                        ? "の第一印象はデザインに関連しています"
                        : "من الانطباعات الأولى تتعلق بالتصميم",
      source: "ResearchGate",
    },
  ]

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-lyra-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-lyra-darkest/50 to-lyra-dark/50"></div>
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-4">
              <span className="bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent">
                {t.whyWebsiteMatters}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-lyra-text-secondary max-w-5xl mx-auto font-medium font-bold px-6 leading-relaxed">
              {t.websiteStatsDesc}
            </p>
            <p><br></br></p>
            <p className="text-lg md:text-s text-lyra-text-secondary max-w-2xl mx-auto px-4 leading-relaxed">
              {t.websiteStatsDesc2}
            </p>
            
            <p className="text-base md:text-lg text-lyra-purple-light max-w-2xl mx-auto mt-3 px-4 font-semibold">
              {t.givingBusinessLeads}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-lyra-medium/30 backdrop-blur-sm border-lyra-medium/50 hover:border-lyra-blue-light/50 transition-all duration-300 group"
              >
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-lyra-blue-light to-lyra-purple-light bg-clip-text text-transparent mb-3">
                    {stat.stat}
                  </div>
                  <p className="text-lyra-text-secondary text-sm md:text-base mb-2 font-medium leading-relaxed">
                    {stat.description}
                  </p>
                  <p className="text-lyra-text-muted text-xs italic">{stat.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="relative rounded-2xl overflow-hidden group h-64 md:h-80">
              <img
                src="/professional-business-website-on-laptop.jpg"
                alt="Professional business website"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lyra-darkest via-lyra-darkest/50 to-transparent flex items-end p-6 md:p-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-lyra-text-primary mb-2">{t.trustIncrease}</h3>
                  <p className="text-lyra-text-secondary text-sm md:text-base">
                    {currentLanguage === "EN"
                      ? "A polished website shows professionalism and credibility"
                      : currentLanguage === "ES"
                        ? "Un sitio web pulido muestra profesionalismo y credibilidad"
                        : currentLanguage === "FR"
                          ? "Un site web soigné montre professionnalisme et crédibilité"
                          : currentLanguage === "DE"
                            ? "Eine professionelle Website zeigt Professionalität und Glaubwürdigkeit"
                            : currentLanguage === "IT"
                              ? "Un sito web curato mostra professionalità e credibilità"
                              : currentLanguage === "PT"
                                ? "Um site bem elaborado mostra profissionalismo e credibilidade"
                                : currentLanguage === "ZH"
                                  ? "精美的网站展现专业性和可信度"
                                  : currentLanguage === "JA"
                                    ? "洗練されたウェブサイトは専門性と信頼性を示します"
                                    : "موقع ويب احترافي يُظهر الاحترافية والمصداقية"}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group h-64 md:h-80">
              <img
                src="/mobile-phone-showing-business-website-with-custome.jpg"
                alt="Mobile website with customers"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lyra-darkest via-lyra-darkest/50 to-transparent flex items-end p-6 md:p-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-lyra-text-primary mb-2">{t.moreCustomers}</h3>
                  <p className="text-lyra-text-secondary text-sm md:text-base">
                    {currentLanguage === "EN"
                      ? "Be found online 24/7 and grow your customer base"
                      : currentLanguage === "ES"
                        ? "Sea encontrado en línea 24/7 y haga crecer su base de clientes"
                        : currentLanguage === "FR"
                          ? "Soyez trouvé en ligne 24/7 et développez votre clientèle"
                          : currentLanguage === "DE"
                            ? "Seien Sie online 24/7 auffindbar und erweitern Sie Ihren Kundenstamm"
                            : currentLanguage === "IT"
                              ? "Fatti trovare online 24/7 e aumenta la tua base clienti"
                              : currentLanguage === "PT"
                                ? "Seja encontrado online 24/7 e expanda sua base de clientes"
                                : currentLanguage === "ZH"
                                  ? "全天候在线被发现并扩大客户群"
                                  : currentLanguage === "JA"
                                    ? "24時間365日オンラインで見つけられ、顧客ベースを拡大"
                                    : "كن متاحًا على الإنترنت على مدار الساعة واجذب المزيد من العملاء"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
