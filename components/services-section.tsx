import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Building2, Droplets, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Professional electrical installations, repairs, and maintenance for homes and offices.",
    images: ["/electrical-work-1.jpeg", "/electrical-work-2.jpeg", "/ceiling-light.jpeg"],
    features: ["Wiring & Rewiring", "Lighting Installation", "Electrical Repairs", "Safety Inspections"],
    link: "/services/electrical",
  },
  {
    icon: Building2,
    title: "Office Setup & Renovation",
    description: "Complete office setup solutions including furniture installation and space optimization.",
    images: ["/office-setup.jpeg"],
    features: ["Furniture Installation", "Space Planning", "Office Renovation", "Equipment Setup"],
    link: "/services/office-setup",
  },
  {
    icon: Droplets,
    title: "Bathroom Renovation",
    description: "Modern bathroom renovations with quality fixtures and professional installation.",
    images: ["/bathroom-renovation.jpeg", "/bathroom-fixtures.jpeg"],
    features: ["Fixture Installation", "Plumbing Work", "Tile & Flooring", "Complete Renovation"],
    link: "/services/home-renovation",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">Our Expert Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From electrical work to complete renovations, we bring professional expertise and quality craftsmanship to
            every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Service Images */}
                <div className="grid grid-cols-2 gap-2">
                  {service.images.slice(0, 2).map((image, imgIndex) => (
                    <div key={imgIndex} className="relative rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${service.title} example ${imgIndex + 1}`}
                        width={200}
                        height={150}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={service.link} passHref>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
