import { Card, CardContent } from "@/components/ui/card"
import { GitFork, Lock, FileText } from "lucide-react"

export function GovernanceParadigm() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="paradigm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">From Forks to Permissions: A New Governance Paradigm</h2>
          <p className="text-lg text-gray-400">
            In most DAOs, governance stops at voting. But in the Powerhouse model, governance is a process—a dynamic
            interplay between permissioned authority, public transparency, and consensus-triggered change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-900/50 border border-gray-800 hover:border-neon/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="h-12 w-12 rounded-full bg-neon/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-neon" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Private-to-Public Flow</h3>
              <p className="text-gray-400 mb-4">"You can't do good governance without good drafts."</p>
              <p className="text-sm text-gray-500">
                Governance starts with private peer-to-peer collaboration. Contributors draft rule changes, budgets, and
                workflows in local sandboxes—fully owned and editable in tools like Connect.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border border-gray-800 hover:border-neon/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="h-12 w-12 rounded-full bg-neon/10 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-neon" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Permissioned Execution</h3>
              <p className="text-gray-400 mb-4">"Not everything needs a vote—some things just need a checklist."</p>
              <p className="text-sm text-gray-500">
                Powerhouse emphasizes delegated authority: certain groups or roles are granted permissions to act
                autonomously within a well-defined scope.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border border-gray-800 hover:border-neon/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="h-12 w-12 rounded-full bg-neon/10 flex items-center justify-center">
                  <GitFork className="h-6 w-6 text-neon" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Forkable Rulebooks, Onchain Finality</h3>
              <p className="text-gray-400 mb-4">
                "The blockchain is the official source of truth—but only once it's worth the cost."
              </p>
              <p className="text-sm text-gray-500">
                Once a rulebook update, budget, or policy has gone through discussion and feedback, it can be submitted
                for a formal vote. If approved, it becomes part of the immutable Atlas.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Where companies have charters and nations have constitutions, network organizations need a rulebook—living
            documents that evolve alongside the teams they serve.
          </p>
        </div>
      </div>
    </section>
  )
}
