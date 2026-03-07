import { Compass, Settings, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    id: "strategic-advisory",
    icon: Compass,
    title: "Strategic Advisory",
    description: "Navigating regulatory frameworks and organizational transitions.",
  },
  {
    id: "technical-operations",
    icon: Settings,
    title: "Technical Operations",
    description: "Engineering-led solutions for facility and asset management.",
  },
  {
    id: "compliance-risk",
    icon: ShieldCheck,
    title: "Compliance & Risk",
    description: "Ensuring operational alignment with industry standards and governance.",
  },
];

export function CapabilitiesV2() {
  return (
    <section className="py-20 bg-background" id="capabilities" aria-labelledby="capabilities-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider" id="capabilities-heading">
            Core Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Technical Expertise & Operational Excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            We deliver mission-critical support through a systems-engineering approach—translating complex requirements into clear, executable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" role="list">
          {capabilities.map((item) => (
            <div
              key={item.id}
              className="bg-card border-2 border-border rounded-lg p-8 hover:shadow-lg transition-all text-center"
              role="listitem"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
