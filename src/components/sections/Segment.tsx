import { Home, Building, ShoppingBag, Truck, Plane, GraduationCap } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const segments = [
  {
    icon: Home,
    title: "HOAs & Communities",
    description: "Protect residents and common areas during freeze events. Pre-treatment and rapid response for walkways, stairs, and parking areas.",
    keywords: "HOA ice prevention, community freeze safety",
  },
  {
    icon: Building,
    title: "Apartments & Multifamily",
    description: "Keep tenants safe and reduce liability exposure. Documentation services help protect against slip-and-fall claims.",
    keywords: "Apartment ice safety, multifamily freeze protection",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Medical",
    description: "Maintain customer access and employee safety. Priority response ensures business continuity during freeze events.",
    keywords: "Commercial de-icing, retail ice control",
  },
  {
    icon: Truck,
    title: "Logistics & Industrial",
    description: "Keep loading docks, warehouses, and distribution centers operational. Minimize costly operational shutdowns.",
    keywords: "Industrial ice prevention, warehouse freeze safety",
  },
  {
    icon: Plane,
    title: "Airports & Hubs",
    description: "Critical infrastructure requires specialized attention. We serve passenger areas, cargo facilities, and ground transportation.",
    keywords: "Airport ice control, transportation hub safety",
  },
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    description: "Student safety is paramount. Comprehensive coverage for walkways, parking lots, and athletic facilities.",
    keywords: "Campus ice safety, school freeze prevention",
  },
];

export function Segments() {
  return (
    <section className="py-20 section-alt" id="segments">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Who We Serve</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Protecting Texas Properties<br />
            Across Every Sector
          </h2>
          <p className="text-lg text-muted-foreground">
            From residential communities to major logistics hubs, we provide tailored freeze-event safety solutions for your specific needs.
          </p>
        </div>

        {/* Segments grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" role="list">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
              role="listitem"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <segment.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {segment.title}
              </h3>
              <p className="text-muted-foreground text-base mb-4">
                {segment.description}
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="text-sm font-medium text-primary hover:text-accent transition-colors"
                aria-label={`Request coverage for ${segment.title}`}
              >
                Request coverage →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
