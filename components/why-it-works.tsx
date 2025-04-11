import { CheckCircle } from "lucide-react"

export function WhyItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black" id="why">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-neon">⚖</span> Why It Works
          </h2>
          <p className="text-lg text-gray-400">
            Most DAO tools fall into two traps: Either they over-centralize by default or grind to a halt waiting for a
            vote.
            <br />
            <br />
            <span className="font-bold text-white">Atlas avoids both.</span>
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-8">
            It gives contributors and leadership teams a structured, forkable foundation for governance—without
            sacrificing speed, clarity, or legitimacy.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-neon flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Governance with memory</h3>
                <p className="text-gray-400">
                  Track the evolution of your organization's rules and decisions over time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-neon flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Permissions with transparency</h3>
                <p className="text-gray-400">
                  Delegate authority while maintaining clear accountability and visibility.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-neon flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Consensus when it counts</h3>
                <p className="text-gray-400">
                  Reserve voting for critical decisions while enabling day-to-day operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
