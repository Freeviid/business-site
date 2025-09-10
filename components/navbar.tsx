"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
<nav className="bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.jpg" alt="Artha Business Logo" width={120} height={40} className="w-15 h-13 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/#services" className="text-foreground hover:text-primary transition-colors" prefetch={true}>
                Services
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors" prefetch={true}>
                About
              </Link>
              {/* <Link href="#subscription" className="text-foreground hover:text-primary transition-colors">
                Subscription Plans
              </Link> */}
              <Link href="/appointment" className="text-foreground hover:text-primary transition-colors" prefetch={true}>
                Appointment
              </Link>
              <Link href="/#contact" className="text-foreground hover:text-primary transition-colors" prefetch={true}>
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+91 8270982709</span>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Get Quote</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <Link
                href="/#services"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                prefetch={true}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                prefetch={true}
              >
                About
              </Link>
              <Link
                href="/#subscription"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                prefetch={true}
              >
                Subscription Plans
              </Link>
              <Link
                href="/appointment"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                prefetch={true}
              >
                Appointment
              </Link>
              <Link
                href="/#contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                prefetch={true}
              >
                Contact
              </Link>
              <div className="px-3 py-2 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 8270982709</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Get Quote</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
