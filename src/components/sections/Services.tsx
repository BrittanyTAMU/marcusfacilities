import { Building2, Truck, Leaf, FileCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";

const serviceBlocks = [
  {
    id: "facilities-operations",
    icon: Building2,
    title: "Facilities Operations",
    services: [
      "Janitorial",
      "Furniture Assembly",
      "Snow Removal",
      "Pressure Washing",
      "Signage",
      "Plumbing",
    ],
  },
  {
    id: "logistics-transport",
    icon: Truck,
    title: "Logistics & Transport",
    services: [
      "USPS HCR/CDS",
      "Courier Services",
      "Shredding",
      "Supply Delivery",
    ],
  },
  {
    id: "environmental-services",
    icon: Leaf,
    title: "Environmental Services",
    services: [
      "Abatement",
      "Weed Control",
      "Mowing",
    ],
  },
  {
    id: "compliance-support",
    icon: FileCheck,
    title: "Compliance & Support",
    services: [
      "Documentation Photography",
      "Fleet Washing",
      "Barricade Rental",
    ],
  },
];

export function Services() {
  return (
    <section className="py-20 bg-background" id="services" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16" id="our-solution">
          <span className="text-sm font-medium text-primary uppercase tracking-wider" id="services-heading">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Comprehensive Facilities &<br />
            Logistics Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional services designed to meet government contracting requirements. Each service includes full documentation, compliance support, and prime contractor readiness.
          </p>
        </div>

        {/* Service Grid - 4 blocks */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12" role="list">
          {serviceBlocks.map((block, index) => (
            <div
              key={index}
              id={block.id}
              className="bg-card border-2 border-border rounded-lg p-8 hover:shadow-lg transition-all scroll-mt-24"
              role="listitem"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <block.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {block.title}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {block.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("#contact");
                      }}
                    >
                      Request Capability Statement
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Partner?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Download our complete Corporate Capability Statement for detailed service descriptions, certifications, and contracting information.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                const pdfUrl = "/Capability_Statement_MarcusFacilitiesLLC_NAICS_561210.pdf";
                window.open(pdfUrl, "_blank");
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Corporate Capability Statement (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
