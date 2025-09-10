import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/logo.jpg"
              alt="Artha Business Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-background/80 text-sm leading-relaxed">
              Professional Repair and Maintenance services for homes and businesses. Trusted expertise since 2022.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/60 hover:text-background cursor-pointer" />
              <Twitter className="h-5 w-5 text-background/60 hover:text-background cursor-pointer" />
              <Instagram className="h-5 w-5 text-background/60 hover:text-background cursor-pointer" />
              <Linkedin className="h-5 w-5 text-background/60 hover:text-background cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/electrical" className="text-background/80 hover:text-background" prefetch={true}>
                  Electrical Services
                </Link>
              </li>
              <li>
                <Link href="/services/office-setup" className="text-background/80 hover:text-background" prefetch={true}>
                  Office Setup
                </Link>
              </li>
              <li>
                <Link href="/services/home-renovation" className="text-background/80 hover:text-background" prefetch={true}>
                  Home Renovation
                </Link>
              </li>
              <li>
                <Link href="/services/furniture" className="text-background/80 hover:text-background" prefetch={true}>
                  Furniture
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-background/80 hover:text-background">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-background/80 hover:text-background">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-background/80 hover:text-background">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-background/80">arthaamenities@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-background/80">Pondicherry, Chennai, Vellore</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2025 Artha Business. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
