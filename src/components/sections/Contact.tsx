import { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const propertyTypes = [
  "HOA / Community",
  "Apartment / Multifamily",
  "Retail / Medical",
  "Logistics / Industrial",
  "Airport / Transportation Hub",
  "School / University",
  "Other",
];

const coverageTypes = [
  "Seasonal Coverage",
  "On-Call Response",
  "Priority SLA",
];

const serviceTypes = [
  "Drain Cover",
  "Sand",
  "Sand Cleanup",
];

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    coverageType: "",
    addOnServices: [] as string[],
    city: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.propertyType || !formData.coverageType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // EmailJS configuration - Get from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Configuration Error",
        description: "Email service is not configured. Please contact support directly.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        property_type: formData.propertyType,
        coverage_type: formData.coverageType,
        add_on_services: formData.addOnServices.length > 0 
          ? formData.addOnServices.join(", ") 
          : "None selected",
        city: formData.city || "Not provided",
        message: formData.message || "No message provided",
        reply_to: formData.email,
      };

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSubmitted(true);
      toast({
        title: "Request Submitted Successfully",
        description: "We've received your request and will contact you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        coverageType: "",
        addOnServices: [],
        city: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background" id="contact">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-success" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Thank You for Your Interest
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We've received your request and will contact you within 24 hours to discuss your freeze-event safety needs.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  propertyType: "",
                  coverageType: "",
                  addOnServices: [],
                  city: "",
                  message: "",
                });
              }}
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Info */}
            <div>
              <span className="text-sm font-medium text-accent uppercase tracking-wider">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Request Coverage
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Fill out the form and we'll contact you within 24 hours to discuss your property's freeze-event safety needs and provide a customized quote.
              </p>

              {/* Contact info */}
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+1-800-000-0000"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-base">(800) 000-0000</p>
                    <p className="text-base">Mon–Fri 8am–6pm CST</p>
                  </div>
                </a>
                <a
                  href="mailto:operations@marcusfacilities.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-base">operations@marcusfacilities.com</p>
                    <p className="text-base">We respond within 24 hours</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-base">Service Areas</p>
                    <p className="text-base">Houston • Dallas • Austin • San Antonio</p>
                  </div>
                </div>
              </div>

              {/* Join freeze list CTA */}
              <div className="p-6 bg-accent/10 border border-accent/20 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  Join Our Priority Freeze List
                </h3>
                <p className="text-base text-muted-foreground mb-4">
                  Get early notifications before freeze events and priority scheduling for emergency response.
                </p>
                <Button variant="accent" size="sm" asChild>
                  <a href="mailto:operations@marcusfacilities.com?subject=Priority%20Freeze%20List%20Signup">
                    Join the List
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="bg-card border border-border rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      maxLength={100}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      maxLength={255}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      maxLength={20}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="Houston, Dallas, etc."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      maxLength={100}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="propertyType">Property Type *</Label>
                  <Select
                    value={formData.propertyType}
                    onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
                  >
                    <SelectTrigger aria-label="Select property type">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      {propertyTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverageType">Coverage Type *</Label>
                  <Select
                    value={formData.coverageType}
                    onValueChange={(value) => setFormData({ ...formData, coverageType: value })}
                  >
                    <SelectTrigger aria-label="Select coverage type">
                      <SelectValue placeholder="Select coverage type" />
                    </SelectTrigger>
                    <SelectContent>
                      {coverageTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Add-on Services (Select one or more)</Label>
                  <div className="space-y-3">
                    {serviceTypes.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={`service-${service}`}
                          checked={formData.addOnServices.includes(service)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({
                                ...formData,
                                addOnServices: [...formData.addOnServices, service],
                              });
                            } else {
                              setFormData({
                                ...formData,
                                addOnServices: formData.addOnServices.filter((s) => s !== service),
                              });
                            }
                          }}
                        />
                        <label
                          htmlFor={`service-${service}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your property and coverage needs..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    maxLength={1000}
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Request Information
                    </>
                  )}
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  By submitting this form, you agree to be contacted about our services.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
