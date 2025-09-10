import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Calendar, Home, Paintbrush, Wrench, Hammer, Shield, Star } from "lucide-react"

export default function HomeRenovationPage() {
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
                  Complete Home Renovation Services
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform your living space with our comprehensive renovation services. 
                  From kitchen makeovers to complete home remodeling, we bring your vision to life.
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
                  src="/bathroom-renovation.jpeg"
                  alt="Professional home renovation"
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
              Our Renovation Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert craftsmanship and attention to detail in every project, big or small
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Home className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Kitchen Renovation</h3>
              <p className="text-muted-foreground mb-4">
                Complete kitchen makeovers including cabinets, countertops, and appliance installation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Custom cabinet installation
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Countertop replacement
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Appliance integration
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Paintbrush className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Bathroom Remodeling</h3>
              <p className="text-muted-foreground mb-4">
                Modern bathroom designs with quality fixtures and professional installation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Tile installation
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Fixture replacement
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Plumbing updates
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Wrench className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Interior Painting</h3>
              <p className="text-muted-foreground mb-4">
                Professional painting services to refresh and transform your living spaces.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Interior wall painting
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Ceiling treatments
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Color consultation
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Hammer className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Flooring Installation</h3>
              <p className="text-muted-foreground mb-4">
                Quality flooring solutions including hardwood, tile, and laminate installation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Hardwood installation
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Tile & stone work
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Laminate & vinyl
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Home Repairs</h3>
              <p className="text-muted-foreground mb-4">
                General maintenance and repair services to keep your home in perfect condition.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Drywall repair
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Door & window fixes
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  General maintenance
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Star className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Custom Projects</h3>
              <p className="text-muted-foreground mb-4">
                Unique renovation projects tailored to your specific needs and preferences.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Built-in storage
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Room additions
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Custom carpentry
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Our Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the transformation we've achieved for our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/bathroom-fixtures.jpeg"
                alt="Bathroom renovation project"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Modern Bathroom Makeover</h3>
                <p className="text-sm text-muted-foreground">Complete renovation with modern fixtures and elegant tiling</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/ceiling-light.jpeg"
                alt="Ceiling lighting installation"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Lighting Upgrade</h3>
                <p className="text-sm text-muted-foreground">Modern ceiling lighting installation with dimmer controls</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/window.svg"
                alt="Window renovation"
                width={400}
                height={250}
                className="w-full h-48 object-cover bg-muted"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Window Replacement</h3>
                <p className="text-sm text-muted-foreground">Energy-efficient windows with improved insulation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Why Choose Our Renovation Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                We stand behind our work with comprehensive warranties and quality assurance.
              </p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Expert Craftsmanship</h3>
              <p className="text-muted-foreground">
                Skilled professionals with years of experience in home renovation projects.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">On-Time Delivery</h3>
              <p className="text-muted-foreground">
                We respect your time and complete projects within agreed timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Contact us today for a free consultation and let's discuss your renovation dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 98765 43210
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
