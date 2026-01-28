import { AlertTriangle, DollarSign, Building2, Scale } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: "$30K–$150K",
    label: "Average slip-and-fall lawsuit",
  },
  {
    icon: Building2,
    value: "72+ Hours",
    label: "Typical operational shutdown",
  },
  {
    icon: Scale,
    value: "100%",
    label: "Property owner liability",
  },
];

export function Problem() {
  return (
    <section className="py-20 bg-background" id="problem">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive rounded-full px-4 py-2 mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">The Problem</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Texas Doesn't Get Snow —<br />
            <span className="text-destructive">It Gets Ice</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A single freeze event can shut down operations, injure tenants, and create costly liability claims. Private property owners are responsible for safety on parking lots, walkways, stairs, loading docks, and entrances during freeze events.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto" role="list">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
              role="listitem"
            >
              <div className="w-14 h-14 rounded-lg bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-destructive" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Additional context */}
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-muted rounded-lg border border-border">
          <p className="text-center text-muted-foreground">
            <strong className="text-foreground">Did you know?</strong> Texas gets ice instead of snow because temperatures hover near freezing, causing rain to freeze on contact. This creates dangerous black ice conditions that standard maintenance crews aren't equipped to handle.
          </p>
        </div>
      </div>
    </section>
  );
}
