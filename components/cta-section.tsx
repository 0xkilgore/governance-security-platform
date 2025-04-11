import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="py-20 bg-gray-900" id="cta">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Ready to Use or Fork</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Atlas is open source, modular, and designed to evolve with your organization.
            <br />
            Use it out of the box—or fork it to match your team's needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-neon hover:bg-neon/90 text-black font-medium">
              <Link href="#">Request Access</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-neon text-neon hover:bg-neon/10">
              <Link href="https://atlas.sky.m.money" target="_blank">
                Explore Atlas on Sky
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
