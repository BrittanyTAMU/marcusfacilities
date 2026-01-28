import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag, CheckCircle, AlertTriangle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

const benefits = [
  "Keep entrances and parking lots accessible",
  "Protect customers and employees from slips",
  "Maintain business operations during freeze events",
  "Documentation for liability protection",
  "Priority response for high-traffic locations",
  "Seasonal contracts for budget predictability",
];

const challenges = [
  "Customer safety is critical for business",
  "Frozen entrances deter customers",
  "Employee injury claims impact operations",
  "Medical facilities need 24/7 accessibility",
];

export default function RetailServices() {
  return (
    <>
      <Helmet>
        <title>Commercial De-Icing Services Texas | Marcus Facilities</title>
        <meta
          name="description"
          content="Professional ice control for Texas retail, medical, and commercial properties. Keep customers safe and businesses open during freeze events. Serving Houston, Dallas, Austin, San Antonio."
        />
        <meta
          name="keywords"
          content="commercial de-icing Austin, retail ice control Houston, medical facility freeze safety, shopping center de-icing Dallas, commercial property ice prevention Texas"
        />
        <link rel="canonical" href="https://marcusfacilities.com/services/retail" />
      </Helmet>

      <Header />
      
      <main>
        {/* Hero */}
        <section className="hero-gradient pt-32 pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center">
                <ShoppingBag className="w-7 h-7 text-accent" />
              </div>
              <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">
                Service Segment
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Retail & Medical<br />
              <span className="text-accent">Ice Control Services</span>
            </h1>
            
            <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">
              Keep your business open and customers safe during Texas freeze events. Professional de-icing for retail centers, medical facilities, and commercial properties.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  <Shield className="w-5 h-5 mr-2" />
                  Request Quote
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#faq">Common Questions</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Challenges & Benefits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-2 text-destructive mb-4">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">The Challenge</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Why Commercial Properties Need Coverage
                  </h2>
                  <ul className="space-y-4">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-success mb-4">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">Our Solution</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    How We Help
                  </h2>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
