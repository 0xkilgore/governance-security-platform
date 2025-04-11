import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function InPractice() {
  return (
    <section className="py-20 bg-black" id="practice">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">In Practice: The Sky Atlas Deployment</span>
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                Atlas powers the rulebook for Sky (formerly MakerDAO)—one of the largest and most complex decentralized
                organizations in the world.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Sky's Atlas defines every aspect of contributor authority, compensation flows, and budget governance. It
                is live, forkable, and built to scale.
              </p>
              <Button asChild className="bg-neon hover:bg-neon/90 text-black font-medium">
                <Link href="https://atlas.sky.m.money" target="_blank" className="flex items-center gap-2">
                  View it at atlas.sky.m.money
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative h-[400px] md:h-[450px]">
              {/* First Atlas screenshot with blue glow */}
              <div className="absolute top-0 right-0 w-[85%] h-auto z-10 group">
                <div className="absolute inset-0 rounded-lg bg-neon/30 blur-[2px] -m-0.5 transition-all duration-300 group-hover:bg-neon/60 group-hover:blur-[4px]"></div>
                <div className="relative rounded-lg overflow-hidden border border-gray-800 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/images/atlas-1.png"
                    alt="Atlas Governance Structure"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Second Atlas screenshot with blue glow */}
              <div className="absolute bottom-0 left-0 w-[85%] h-auto group">
                <div className="absolute inset-0 rounded-lg bg-neon/30 blur-[2px] -m-0.5 transition-all duration-300 group-hover:bg-neon/60 group-hover:blur-[4px]"></div>
                <div className="relative rounded-lg overflow-hidden border border-gray-800 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/images/atlas-2.png"
                    alt="Atlas Stability Scope"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
