"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-black py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logos/ph-logo-light.png" alt="Powerhouse" width={188} height={47} />
        </Link>

        <nav className="hidden md:flex items-center justify-center gap-8 flex-1 mx-12">
          <Link
            href="https://www.powerhouse.inc/renown"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
          >
            <Image src="/logos/renown-logo.svg" alt="Renown" width={24} height={24} />
          </Link>
          <Link
            href="https://www.powerhouse.inc/connect"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
          >
            <Image src="/logos/connect-logo.svg" alt="Connect" width={24} height={24} />
          </Link>
          <Link
            href="https://www.powerhouse.inc/fusion"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
          >
            <Image src="/logos/fusion-logo.svg" alt="Fusion" width={24} height={24} />
          </Link>
          <Link
            href="https://www.powerhouse.inc/switchboard"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
          >
            <Image src="/logos/switchboard-logo.svg" alt="Switchboard" width={24} height={24} />
          </Link>
          <Link
            href="https://www.powerhouse.inc/academy"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
          >
            <Image src="/logos/academy-logo.svg" alt="Academy" width={24} height={24} />
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://discord.com/invite/h7GKvqDyDP"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
          >
            <Image src="/logos/discord-logo.svg" alt="Discord" width={24} height={24} />
          </Link>
          <Link
            href="https://twitter.com/PowerhouseDAO"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
          >
            <Image src="/logos/x-logo.png" alt="X" width={24} height={24} />
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-wrap gap-6 justify-center">
            <Link
              href="https://www.powerhouse.inc/renown"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image src="/logos/renown-logo.svg" alt="Renown" width={24} height={24} />
            </Link>
            <Link
              href="https://www.powerhouse.inc/connect"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image src="/logos/connect-logo.svg" alt="Connect" width={24} height={24} />
            </Link>
            <Link
              href="https://www.powerhouse.inc/fusion"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image src="/logos/fusion-logo.svg" alt="Fusion" width={24} height={24} />
            </Link>
            <Link
              href="https://www.powerhouse.inc/switchboard"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image src="/logos/switchboard-logo.svg" alt="Switchboard" width={24} height={24} />
            </Link>
            <Link
              href="https://www.powerhouse.inc/academy"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image src="/logos/academy-logo.svg" alt="Academy" width={24} height={24} />
            </Link>

            <div className="w-full border-t border-gray-800 my-2"></div>

            <Link
              href="https://discord.com/invite/h7GKvqDyDP"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image src="/logos/discord-logo.svg" alt="Discord" width={24} height={24} />
            </Link>
            <Link
              href="https://twitter.com/PowerhouseDAO"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image src="/logos/x-logo.png" alt="X" width={24} height={24} />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
