import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Calendar, Monitor, Wifi, Settings, Users, Building, Laptop } from "lucide-react"

export default function OfficeSetupPage() {
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
                  Complete Office Setup Solutions
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform your workspace with our comprehensive office setup services. 
                  From IT infrastructure to ergonomic workstations, we create productive environments.
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
                  alt="Professional office setup"
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
              Our Office Setup Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete office solutions from planning to implementation, tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Monitor className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">IT Infrastructure</h3>
              <p className="text-muted-foreground mb-4">
                Complete IT setup including networking, servers, and workstation configuration.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Network setup & configuration
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Server installation
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Workstation deployment
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Wifi className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Connectivity Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Reliable internet, Wi-Fi, and communication systems for seamless operations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  High-speed internet setup
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Enterprise Wi-Fi systems
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  VoIP phone systems
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Settings className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Workspace Design</h3>
              <p className="text-muted-foreground mb-4">
                Ergonomic furniture and layout optimization for maximum productivity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Ergonomic furniture
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Space optimization
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Lighting solutions
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Building className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Office Relocation</h3>
              <p className="text-muted-foreground mb-4">
                Seamless office moves with minimal downtime and complete setup at new location.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Pre-move planning
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Equipment relocation
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Quick setup & testing
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Training & Support</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive training and ongoing support for your team and systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Staff training sessions
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Technical documentation
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Ongoing support plans
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Laptop className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Remote Work Setup</h3>
              <p className="text-muted-foreground mb-4">
                Enable hybrid work with secure remote access and collaboration tools.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  VPN configuration
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Cloud solutions
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Security protocols
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
              Our Setup Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to ensure your office is ready for success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-foreground mb-2">Consultation</h3>
              <p className="text-sm text-muted-foreground">Understand your needs and assess requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-foreground mb-2">Planning</h3>
              <p className="text-sm text-muted-foreground">Create detailed setup plan and timeline</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-foreground mb-2">Implementation</h3>
              <p className="text-sm text-muted-foreground">Execute setup with minimal disruption</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold text-foreground mb-2">Support</h3>
              <p className="text-sm text-muted-foreground">Ongoing maintenance and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
            Ready to Transform Your Workspace?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let us help you create an efficient, productive office environment tailored to your business needs.
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
