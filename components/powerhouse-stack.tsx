import { Card, CardContent } from "@/components/ui/card"
import { Code, Layers } from "lucide-react"
import Link from "next/link"

export function PowerhouseStack() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="stack">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Part of the </span>
            <span className="text-neon">Powerhouse Stack</span>
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            The Governance & Security Platform is one of the three core platforms of Powerhouse. Learn more about the
            two other platforms:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gray-900/50 border border-gray-800 hover:border-neon/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="h-12 w-12 rounded-full bg-neon/10 flex items-center justify-center">
                  <Layers className="h-6 w-6 text-neon" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Decentralized Operations</h3>
              <p className="text-gray-400 mb-4">Streamlining Processes for Distributed Organizations</p>
              <Link
                href="https://www.powerhouse.inc/connect"
                className="text-neon hover:underline text-sm flex items-center gap-1"
              >
                Learn more <span className="text-lg">→</span>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border border-gray-800 hover:border-neon/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="h-12 w-12 rounded-full bg-neon/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-neon" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Builder Platform</h3>
              <p className="text-gray-400 mb-4">Build for the Future. Get Credited and Compensated.</p>
              <Link href="#" className="text-neon hover:underline text-sm flex items-center gap-1">
                Learn more <span className="text-lg">→</span>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
