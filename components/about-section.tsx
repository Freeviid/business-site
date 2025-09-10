import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-8 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">About Artha Business</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Artha Amenities was founded by Mr. Ram Kumar and Mr. Prem in July 2022, starting as a specialized R&M
                company focused on repairs and maintenance for Jio stores in Pondicherry.
              </p>
              <p>
                Since our inception, we have evolved and expanded our services, venturing into comprehensive B2B
                renovations and repairs across multiple cities including Chennai and Vellore. Now, we&apos;re bringing our
                trusted expertise directly to homeowners and small businesses.
              </p>
              <p>
                Our transition from B2B to B2C represents our commitment to making professional repair and maintenance
                services accessible to everyone, with innovative subscription models and streamlined booking processes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-2xl font-bold text-primary">2022</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Cities</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 border-border">
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading and most trusted provider of repair and maintenance services, recognized for
                excellence, innovation, and commitment to enhancing the longevity and performance of our clients&apos;
                assets.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 border-border">
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to deliver reliable, efficient, and cost-effective repair and maintenance solutions that
                maximize equipment uptime and safety. We are dedicated to building lasting relationships through quality
                workmanship and responsive service.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
