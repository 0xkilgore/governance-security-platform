import { Card, CardContent } from "@/components/ui/card"
import { Book, Shield, Activity, FileCode } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-20 bg-black" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What is <span className="text-neon">Included</span>
          </h2>
          <p className="text-lg text-gray-400">
            Good governance isn't just about voting. It's about knowing who can do what, when—and why it matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-900/30 border border-gray-800 hover:border-neon/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="h-12 w-12 rounded-full bg-neon/10 flex items-center justify-center">
                  <Book className="h-6 w-6 text-neon" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Modular Rulebook Framework</h3>
              <p className="text-gray-400">
                A living constitution for your org, versioned like code. Propose changes via pull request.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border border-gray-800 hover:border-neon/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="h-12 w-12 rounded-full bg-neon/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-neon" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Permissioned Authority</h3>
              <p className="text-gray-400">
                Assign roles and scopes so decisions don't get stuck. Automate repeatable actions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border border-gray-800 hover:border-neon/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="h-12 w-12 rounded-full bg-neon/10 flex items-center justify-center">
                  <Activity className="h-6 w-6 text-neon" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent Flows</h3>
              <p className="text-gray-400">
                Every action—voted or delegated—is logged, auditable, and permission-aware.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/30 border border-gray-800 hover:border-neon/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="h-12 w-12 rounded-full bg-neon/10 flex items-center justify-center">
                  <FileCode className="h-6 w-6 text-neon" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Governance Templates</h3>
              <p className="text-gray-400">
                Tailor your own flows: budget approvals, roadmap governance, domain ownership, hiring policies, and
                more.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
