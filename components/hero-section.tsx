import { Button } from "@/components/ui/button"
import { AnimatedGrid } from "./animated-grid"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <AnimatedGrid />
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Governance & Security Platform</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-300">
            Structure for Consensus. Power for Execution.
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto">
            Powerhouse's Governance & Security Platform gives distributed organizations the tools to codify authority,
            manage permissions, and evolve through consensus.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-neon hover:bg-neon/90 text-black font-medium">
              <Link href="#cta">Request Access</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-neon text-neon hover:bg-neon/10">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}
