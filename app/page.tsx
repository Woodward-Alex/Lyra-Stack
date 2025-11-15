import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WebsiteStats } from "@/components/website-stats"
import { ServiceShowcase } from "@/components/service-showcase"
import { BuildingBlocks } from "@/components/building-blocks-section"
import { USP } from "@/components/usp"
//import { Portfolio } from "@/components/portfolio"
import { QuoteForm } from "@/components/quote-form"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { GalaxyBackground } from "@/components/galaxy-background"
import { ShootingStars } from "@/components/shooting-stars"
import { NebulaEffect } from "@/components/nebula-effect"
import { LyraChatbot } from "@/components/lyra-chatbot"
import { StackingSection } from "@/components/stacking-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-lyra-darkest relative overflow-x-hidden">
      <GalaxyBackground />
      <ShootingStars />
      <NebulaEffect />

      <div className="relative z-10">
        <Navigation />
        <div id="hero">
          <Hero />
        </div>

        <div className="stacking-container space-y-8">
          <div id="services">
            <StackingSection index={0} totalSections={7}>
              <Services />
            </StackingSection>
          </div>

          <div id="website-stats">
            <StackingSection index={1} totalSections={7}>
              <WebsiteStats />
            </StackingSection>
          </div>

          <StackingSection index={2} totalSections={7}>
            <USP />
          </StackingSection>

          <div id="service-showcase">
            <StackingSection index={3} totalSections={7}>
              <ServiceShowcase />
            </StackingSection>
          </div>

          <div id="building-blocks">
            <StackingSection index={4} totalSections={7}>
              <BuildingBlocks />
            </StackingSection>
          </div>

          {/* <div id="portfolio">
            <StackingSection index={5} totalSections={7}>
            <Portfolio />
            </StackingSection>
          </div> */}

          <StackingSection index={6} totalSections={7}>
            <QuoteForm />
          </StackingSection>
        </div>

        <Footer />
      </div>

      <LyraChatbot />
    </div>
  )
}
