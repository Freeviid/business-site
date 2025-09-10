import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Calendar, Zap, Shield, Clock, Award } from "lucide-react"

export default function ElectricalServicesPage() {
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
                  Professional Electrical Services
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Expert electrical solutions for homes and businesses. From installations to repairs, 
                  we ensure your electrical systems are safe, efficient, and up to code.
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
                  Schedule Service
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/electrical-work-1.jpeg"
                  alt="Professional electrical work"
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
              Our Electrical Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electrical solutions with certified professionals and quality guarantee
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Wiring & Installation</h3>
              <p className="text-muted-foreground mb-4">
                Complete electrical wiring for new constructions, renovations, and upgrades.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  New home wiring
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Panel upgrades
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Outlet installation
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Safety & Repairs</h3>
              <p className="text-muted-foreground mb-4">
                Emergency repairs and safety inspections to keep your property secure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Emergency repairs
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Safety inspections
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Code compliance
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Maintenance Plans</h3>
              <p className="text-muted-foreground mb-4">
                Regular maintenance to prevent issues and extend system lifespan.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Scheduled inspections
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Preventive maintenance
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Priority support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-foreground">
                Why Choose Our Electrical Services?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Licensed & Certified</h3>
                    <p className="text-muted-foreground">All our electricians are fully licensed and certified professionals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Safety First</h3>
                    <p className="text-muted-foreground">We prioritize safety in every project with proper protocols and equipment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">24/7 Emergency Service</h3>
                    <p className="text-muted-foreground">Available for emergency electrical repairs anytime, day or night.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/electrical-work-2.jpeg"
                  alt="Electrical maintenance work"
                  width={500}
                  height={350}
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Contact us today for a free consultation and quote for your electrical needs.
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
