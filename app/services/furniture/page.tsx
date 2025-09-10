import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Calendar, Sofa, Hammer, Wrench, Palette, Shield, Star, Package } from "lucide-react"

export default function FurniturePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#C9E4F7] to-[#E0C3FC] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                  Professional Furniture Services
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Complete furniture solutions for your home and office. From custom designs to repairs, 
                  assembly to restoration - we bring your furniture vision to life with expert craftsmanship.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/office-setup.jpeg"
                  alt="Professional furniture services"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Our Furniture Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive furniture solutions with skilled craftsmen and attention to detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Sofa className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Custom Furniture Design</h3>
              <p className="text-muted-foreground mb-4">
                Bespoke furniture pieces designed and crafted to your exact specifications and space requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Custom sofas & seating
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Built-in wardrobes
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Kitchen cabinets
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Hammer className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Furniture Assembly</h3>
              <p className="text-muted-foreground mb-4">
                Professional assembly service for all types of furniture with precision and care.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  IKEA & flat-pack assembly
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Office furniture setup
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Complex installations
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Wrench className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Furniture Repair</h3>
              <p className="text-muted-foreground mb-4">
                Expert repair services to restore your beloved furniture to its original condition.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Wood restoration
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Upholstery repair
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Hardware replacement
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Palette className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Furniture Refinishing</h3>
              <p className="text-muted-foreground mb-4">
                Transform old furniture with professional refinishing and modern styling techniques.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Wood staining & painting
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Surface restoration
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Color matching
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Package className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Furniture Moving</h3>
              <p className="text-muted-foreground mb-4">
                Safe and efficient furniture moving services with proper equipment and techniques.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Local furniture moving
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Disassembly & reassembly
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Protective packaging
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Star className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Office Furniture Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Complete office furniture setup and ergonomic workspace solutions for businesses.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Ergonomic workstations
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Conference room setup
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Storage solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Our Furniture Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we ensure every piece meets your expectations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-foreground mb-2">Consultation</h3>
              <p className="text-sm text-muted-foreground">Discuss your needs, style preferences, and budget</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-foreground mb-2">Design & Quote</h3>
              <p className="text-sm text-muted-foreground">Create detailed designs and provide transparent pricing</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-foreground mb-2">Crafting</h3>
              <p className="text-sm text-muted-foreground">Expert craftsmen bring your furniture to life</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold text-foreground mb-2">Delivery & Setup</h3>
              <p className="text-sm text-muted-foreground">Professional installation and final touches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Why Choose Our Furniture Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Quality Materials</h3>
              <p className="text-muted-foreground">
                We use only premium materials and hardware to ensure durability and longevity.
              </p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Expert Craftsmanship</h3>
              <p className="text-muted-foreground">
                Skilled artisans with years of experience in furniture design and construction.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Custom Solutions</h3>
              <p className="text-muted-foreground">
                Every piece is tailored to your specific needs, space, and style preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Our Furniture Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the quality and craftsmanship in our recent furniture projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/office-setup.jpeg"
                alt="Office furniture setup"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Modern Office Setup</h3>
                <p className="text-sm text-muted-foreground">Complete ergonomic workstation with custom storage solutions</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/bathroom-fixtures.jpeg"
                alt="Custom furniture project"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Custom Built-ins</h3>
                <p className="text-sm text-muted-foreground">Space-saving storage solutions with modern design</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/ceiling-light.jpeg"
                alt="Furniture restoration"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Furniture Restoration</h3>
                <p className="text-sm text-muted-foreground">Antique furniture brought back to life with expert care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let us create the perfect furniture solutions for your home or office. Contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 8270982709
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-primary-foreground/10">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
