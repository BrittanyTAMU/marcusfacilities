import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, CheckCircle, AlertTriangle, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

const benefits = [
  "Protect common areas, walkways, and parking lots",
  "Reduce liability exposure for the association",
  "Documentation for insurance and legal protection",
  "Maintain property values during freeze events",
  "Prioritized emergency response times",
  "Seasonal contracts for predictable budgeting",
];

const challenges = [
  "Board members personally liable for safety failures",
  "Slip-and-fall claims average $30K–$150K",
  "Residents expect safe conditions during freezes",
  "Traditional landscapers lack ice control expertise",
];

export default function HOAServices() {
  return (
    <>
      <Helmet>
        <title>HOA Ice Prevention Services Texas | Marcus Facilities</title>
        <meta
          name="description"
          content="Professional freeze-event safety and ice control for Texas HOAs and community associations. Pre-treatment, emergency response, and liability documentation for Dallas-Fort Worth."
        />
        <meta
          name="keywords"
          content="HOA ice prevention Dallas-Fort Worth, community freeze safety DFW, HOA snow and ice service Texas, subdivision ice control, HOA liability protection freeze"
        />
        <link rel="canonical" href="https://marcusfacilities.com/services/hoa" />
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "HOA Ice Prevention Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Marcus Facilities"
            },
            "areaServed": ["Houston", "Dallas", "Austin", "San Antonio"],
            "description": "Professional freeze-event safety and ice control services for HOAs and community associations in Texas."
          })}
        </script>
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
                <Home className="w-7 h-7 text-accent" />
              </div>
              <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">
                Service Segment
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              HOA & Community<br />
              <span className="text-accent">Freeze-Event Safety</span>
            </h1>
            
            <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">
              Protect your community's residents and reduce board liability during Texas freeze events. Professional pre-treatment, ice control, and emergency response for HOAs of all sizes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  <Shield className="w-5 h-5 mr-2" />
                  Request HOA Quote
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#faq">Common Questions</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Challenges */}
                <div>
                  <div className="flex items-center gap-2 text-destructive mb-4">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">The Challenge</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Why HOAs Need Freeze Coverage
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

                {/* Benefits */}
                <div>
                  <div className="flex items-center gap-2 text-success mb-4">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">Our Solution</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    How We Help HOAs
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

        {/* Stats */}
        <section className="py-16 section-alt">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-accent mb-2">$30K+</div>
                <p className="text-muted-foreground">Average slip-and-fall claim</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-muted-foreground">HOA liability for common areas</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-accent mb-2">2-4 hrs</div>
                <p className="text-muted-foreground">Priority response time</p>
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
