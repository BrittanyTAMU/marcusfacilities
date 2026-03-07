import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";

export function Hero() {
  const handleDownloadCapabilityStatement = () => {
    // TODO: Replace with actual PDF URL when available
    const pdfUrl = "/Capability_Statement_MarcusFacilitiesLLC_NAICS_561210.pdf";
    window.open(pdfUrl, "_blank");
  };

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
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <FileText className="w-5 h-5 text-white" />
            <span className="text-base font-medium text-white">Government Contracting Services</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Trusted Facilities &<br />
            <span className="text-white">Logistics Solutions</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Professional facilities operations, logistics, environmental services, and compliance support for government agencies and prime contractors. Serving North Texas and Northern New Jersey.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={handleDownloadCapabilityStatement}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Download className="w-5 h-5 mr-2" aria-hidden="true" />
              Download Capability Statement (PDF)
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              asChild
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
            >
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#services");
                }}
                aria-label="View our services"
              >
                View Services
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 text-foreground text-base font-semibold animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>NAICS 561210 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>UEI Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Prime & Subcontractor Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
