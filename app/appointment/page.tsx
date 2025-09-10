"use client"
import React, { useState, FormEvent } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const [result, setResult] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setResult("Sending...");

    const data = new FormData(event.target as HTMLFormElement);
    data.append("access_key", "7a80acce-0c24-4e15-af20-e17f2a9d6e96");


    data.append("replyto", formData.email);



    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const resultData = await response.json();

      if (resultData.success) {
        setResult("Form Submitted Successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          preferredDate: "",
          preferredTime: "",
          message: ""
        });
      } else {
        console.error("Error", resultData);
        setResult(resultData.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setResult("An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="relative bg-gradient-to-br from-[#C9E4F7] to-[#E0C3FC] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
              Book Your Appointment
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Schedule a consultation with our experts. We'll get back to you within 24 hours to confirm your appointment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Schedule Your Service
              </h2>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground" placeholder="Enter your full name" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">Service Required *</label>
                  <select id="service" name="service" value={formData.service} onChange={handleInputChange} required className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground">
                    <option value="">Select a service</option>
                    <option value="electrical">Electrical Services</option>
                    <option value="office-setup">Office Setup</option>
                    <option value="home-renovation">Home Renovation</option>
                    <option value="maintenance">General Maintenance</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-foreground mb-2">Preferred Date *</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <input type="date" id="preferredDate" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange} required min={new Date().toISOString().split('T')[0]} className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-2">Preferred Time *</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <select id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleInputChange} required className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground">
                        <option value="">Select time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Additional Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground resize-none" placeholder="Tell us more about your requirements..."></textarea>
                  </div>
                </div>
                <Button type="submit" disabled={submitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg">{submitting ? "Submitting..." : "Book Appointment"}</Button>
                {result && (
                  <div className={`flex items-center space-x-2 p-3 rounded-lg ${result.toLowerCase().includes("success") ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"}`}>
                    {result.toLowerCase().includes("success") ? (<CheckCircle className="h-5 w-5" />) : (<AlertCircle className="h-5 w-5" />)}
                    <span>{result}</span>
                  </div>
                )}
              </form>
            </div>
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 8270982709</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">info@arthabusiness.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-muted-foreground">Mon-Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">Why Book With Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Free Consultation</p>
                      <p className="text-sm text-muted-foreground">Initial assessment at no cost</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Expert Technicians</p>
                      <p className="text-sm text-muted-foreground">Certified and experienced professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Quality Guarantee</p>
                      <p className="text-sm text-muted-foreground">100% satisfaction guaranteed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Quick Response</p>
                      <p className="text-sm text-muted-foreground">24-hour response time</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
                <h3 className="text-xl font-serif font-bold mb-4">Need Emergency Service?</h3>
                <p className="mb-4">For urgent repairs, call us directly</p>
                <Button variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                  <Phone className="mr-2 h-5 w-5" />Call Now: +91 8270982709
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}