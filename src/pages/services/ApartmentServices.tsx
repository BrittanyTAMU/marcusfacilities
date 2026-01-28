import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Building, CheckCircle, AlertTriangle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

const benefits = [
  "Protect tenants on walkways, stairs, and parking areas",
  "Reduce slip-and-fall liability exposure",
  "Timestamped documentation for legal protection",
  "Maintain occupancy during freeze events",
  "24/7 emergency response availability",
  "Multi-property contracts for portfolio coverage",
];

const challenges = [
  "Tenants expect safe conditions during freezes",
  "Multi-story buildings have complex access points",
  "Slip-and-fall lawsuits average $30K–$150K",
  "Property managers may lack ice control resources",
];

export default function ApartmentServices() {
  return (
    <>
      <Helmet>
        <title>Apartment Ice Safety Services Texas | Marcus Facilities</title>
        <meta
          name="description"
          content="Professional freeze-event safety for Texas apartments and multifamily properties. Protect tenants, reduce liability, and maintain occupancy during winter freezes. Serving Houston, Dallas, Austin."
        />
        <meta
          name="keywords"
          content="apartment ice safety Texas, multifamily freeze protection Houston, apartment complex de-icing Dallas, tenant safety freeze events, multifamily ice control Austin"
        />
        <link rel="canonical" href="https://marcusfacilities.com/services/apartments" />
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
                <Building className="w-7 h-7 text-accent" />
              </div>
              <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">
                Service Segment
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Apartment & Multifamily<br />
              <span className="text-accent">Freeze-Event Safety</span>
            </h1>
            
            <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">
              Keep tenants safe and reduce liability exposure during Texas freeze events. Professional ice control for apartment complexes, condominiums, and multifamily properties.
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
                    Why Apartments Need Coverage
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
