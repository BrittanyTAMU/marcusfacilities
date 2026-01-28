import { Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative hero-gradient min-h-[90vh] flex items-center pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <AlertTriangle className="w-5 h-5 text-accent" />
            <span className="text-base font-medium text-primary-foreground">Texas Freeze Season: November – March</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Freeze Event Safety &<br />
            <span className="text-accent">Property Continuity Services</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We help Texas properties prevent injuries, shutdowns, and liability during winter freeze events. Pretreatment, ice control, and emergency response for HOAs, apartments, retail, and logistics.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact" aria-label="Request seasonal coverage for freeze prevention">
                <Shield className="w-5 h-5 mr-2" aria-hidden="true" />
                Request Seasonal Coverage
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services" aria-label="Learn how freeze prevention services work">
                Learn How It Works
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 text-primary-foreground/90 text-base animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              <span>24/7 Emergency Response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              <span>Documentation for Insurers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
