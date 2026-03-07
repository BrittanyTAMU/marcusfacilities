import { useState } from "react";
import { Send, Mail, MapPin, CheckCircle, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const REASON_OPTIONS = [
  "Logistics & Postal Operations (CDS/HCR)",
  "Facilities Maintenance (Janitorial/Snow/Pressure Washing)",
  "Specialized Environmental (Abatement/Remediation)",
  "General Procurement / Prime Contractor Inquiries",
];

const PRIMARY_NAICS = "561210";
const SECONDARY_NAICS = ["561720", "561730", "562910", "491110", "492110", "541922", "238220", "561990", "811192"];

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    department: "",
    reasonForInquiry: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.reasonForInquiry) {
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

    // EmailJS configuration
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
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        department: formData.department || "Not provided",
        reason_for_inquiry: formData.reasonForInquiry,
        message: formData.message || "No message provided",
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSubmitted(true);
      toast({
        title: "Request Submitted Successfully",
        description: "We've received your inquiry and will contact you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        department: "",
        reasonForInquiry: "",
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
              Thank You for Your Inquiry
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We've received your request and will contact you within 24 hours to discuss your procurement needs.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  company: "",
                  department: "",
                  reasonForInquiry: "",
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
            {/* Left side - Company Info */}
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Request Capability Statement
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Fill out the form to receive our Corporate Capability Statement and discuss your procurement needs.
              </p>

              {/* Procurement Information */}
              <div className="space-y-6 mb-8 p-6 bg-card border-2 border-primary/20 rounded-lg">
                <div>
                  <h3 className="font-semibold text-foreground mb-4 text-lg flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Procurement Information
                  </h3>
                  <div className="space-y-3 text-base">
                    <div>
                      <span className="font-semibold text-foreground">Primary NAICS:</span>{" "}
                      <span className="text-foreground font-bold">{PRIMARY_NAICS}</span>{" "}
                      <span className="text-foreground/80">(Facilities Support Services)</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Secondary NAICS:</span>{" "}
                      <span className="text-foreground">{SECONDARY_NAICS.join(", ")}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Certifications:</span>{" "}
                      <span className="text-foreground">SBE (NJ) - Pending, HUB (Texas) - Pending</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="space-y-4">
                <a
                  href="mailto:sales@marcusfacilities.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-base">sales@marcusfacilities.com</p>
                    <p className="text-base text-foreground/80">We respond within 24 hours</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-base">Service Areas</p>
                    <p className="text-base text-foreground/80">North Texas (DFW Metroplex) • Northern New Jersey</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="bg-card border-2 border-border rounded-xl p-8">
              {/* Download Capability Statement Button */}
              <div className="mb-8 p-6 bg-primary/5 border-2 border-primary/20 rounded-lg text-center">
                <h3 className="font-bold text-foreground mb-2 text-lg">
                  Download Our Corporate Capability Statement
                </h3>
                <p className="text-sm text-foreground/80 mb-4">
                  Get detailed service descriptions, certifications, and contracting information.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => {
                    const pdfUrl = "/Capability_Statement_MarcusFacilitiesLLC_NAICS_561210.pdf";
                    window.open(pdfUrl, "_blank");
                  }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Capability Statement (PDF)
                </Button>
              </div>

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
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Agency</Label>
                    <Input
                      id="company"
                      placeholder="Your company or agency"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    placeholder="Your department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reasonForInquiry">Reason for Inquiry *</Label>
                  <Select
                    value={formData.reasonForInquiry}
                    onValueChange={(value) => setFormData({ ...formData, reasonForInquiry: value })}
                    required
                  >
                    <SelectTrigger id="reasonForInquiry" aria-label="Select reason for inquiry">
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                      {REASON_OPTIONS.map((reason) => (
                        <SelectItem key={reason} value={reason}>
                          {reason}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message</Label>
                  <textarea
                    id="message"
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us more about your procurement needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    maxLength={1000}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Request
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
