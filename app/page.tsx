import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { GovernanceParadigm } from "@/components/governance-paradigm"
import { WhyItWorks } from "@/components/why-it-works"
import { InPractice } from "@/components/in-practice"
import { PowerhouseStack } from "@/components/powerhouse-stack"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <GovernanceParadigm />
      <FeaturesSection />
      <WhyItWorks />
      <InPractice />
      <PowerhouseStack />
      <CtaSection />
    </>
  )
}
