import { useState } from "react";
import { Send, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { GET_STARTED_PATH } from "./config";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "@/lib/emailjs";

export function ContactCareer() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({ title: "Missing information", description: "Name and email are required.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: "Not provided",
          company: "Career inquiry",
          department: "Not provided",
          reason_for_inquiry: "Career / reverse recruiting",
          message: formData.message || "No message provided",
          reply_to: formData.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setIsSubmitted(true);
      toast({ title: "Message sent", description: "We'll get back to you soon." });
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      const detail =
        err && typeof err === "object" && "text" in err
          ? String((err as { text: string }).text)
          : err instanceof Error
            ? err.message
            : "Unknown error";
      toast({
        title: "Failed to send",
        description: `${detail}. Or email sales@marcusfacilities.com.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-background" id="contact" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 id="contact-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Questions before you start?
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Send a note or jump straight into the platform.{" "}
              <strong className="text-foreground font-semibold">Pricing is shown after you sign up.</strong>
            </p>
            <Button variant="accent" className="rounded-full px-6 mb-6" asChild>
              <Link to={GET_STARTED_PATH}>Get Started</Link>
            </Button>
            <div>
              <a
                href="mailto:sales@marcusfacilities.com"
                className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 text-accent" aria-hidden="true" />
                sales@marcusfacilities.com
              </a>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" aria-hidden="true" />
                <h3 className="font-serif text-xl font-bold mb-2">Thanks... we got it.</h3>
                <p className="text-muted-foreground mb-6">We&apos;ll reply soon.</p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
                <div className="space-y-2">
                  <Label htmlFor="career-name">Name *</Label>
                  <Input
                    id="career-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="career-email">Email *</Label>
                  <Input
                    id="career-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="career-message">Message</Label>
                  <textarea
                    id="career-message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us where you are in your search..."
                  />
                </div>
                <Button type="submit" variant="accent" className="w-full rounded-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                      Send message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
