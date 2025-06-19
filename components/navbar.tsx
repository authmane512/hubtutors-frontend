"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/rechercher", label: "Rechercher" },
    { href: "/corriges", label: "Corrigés" },
    { href: "/exercices", label: "Exercices" },
    { href: "/connexion", label: "Connexion" },
    { href: "/inscription", label: "Inscription" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo/logo.png"
                alt="Suisseprof Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold text-black">Suisseprof</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/devenir-enseignant">
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Devenir enseignant
                </Button>
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-gray-700 transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link href="/devenir-enseignant" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-primary text-white hover:bg-primary/90">
                        Devenir enseignant
                      </Button>
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Promotional Banner */}
      <section className="bg-primary text-white py-3 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-center md:text-left">
              <p className="text-sm md:text-base font-medium">
                30 min de cours gratuit et sans engagement puis dès 20 CHF/heure !
              </p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="bg-white text-primary hover:bg-gray-100 font-medium whitespace-nowrap"
            >
              Obtenir un cours gratuit
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}