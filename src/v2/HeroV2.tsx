import { scrollToSection } from "@/lib/scroll";

export function HeroV2() {
  return (
    <section className="relative hero-gradient min-h-[90vh] flex items-center pt-20">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="text-base font-medium text-white">Management Consulting & Technical Operations</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Precision Consulting for
            <br />
            <span className="text-white">Complex Infrastructure</span>
          </h1>

          <p className="text-lg md:text-xl text-white/95 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Empowering organizations through technical expertise, operational excellence, and mission-critical support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-6 py-3.5 text-base font-semibold hover:bg-white/90 transition-colors"
            >
              Request a Consultation
            </a>
            <a
              href="#capabilities"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#capabilities");
              }}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-6 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              Our Capabilities
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-white/90 text-base font-medium animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>Technical & Operational Advisory</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>Compliance & Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>North Texas & Northern New Jersey</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
