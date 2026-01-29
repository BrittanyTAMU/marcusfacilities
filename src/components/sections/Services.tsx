import { Droplets, Thermometer, Wind, Clock, FileText, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Thermometer,
    title: "Pre-Treatment",
    description: "Applied before freeze events to prevent ice formation. Our brine solutions are effective down to ~-20°F.",
  },
  {
    icon: Droplets,
    title: "Brine & Chemical Application",
    description: "Liquid de-icers applied to prevent bonding between ice and pavement. More effective than rock salt alone.",
  },
  {
    icon: Wind,
    title: "Sanding & Ice Control",
    description: "Abrasive materials for traction on icy surfaces. Essential for walkways, ramps, and loading areas.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description: "Round-the-clock availability during freeze events. Priority response times for contract customers.",
  },
  {
    icon: FileText,
    title: "Documentation for Insurers",
    description: "Timestamped photos, treatment logs, and weather records. Protect yourself against liability claims.",
  },
  {
    icon: Calendar,
    title: "Seasonal Subscriptions",
    description: "Lock in coverage for the entire freeze season (Nov–Mar). Predictable costs, guaranteed response.",
  },
];

const coverageOptions = [
  {
    title: "Seasonal Coverage",
    period: "November – March",
    description: "Full-season protection with scheduled pre-treatment and priority emergency response.",
    popular: true,
  },
  {
    title: "On-Call Response",
    period: "Per-event basis",
    description: "Pay-per-service for properties that need occasional coverage during major freeze events.",
    popular: false,
  },
  {
    title: "Priority SLA",
    period: "For Logistics & Industrial",
    description: "Guaranteed response times with dedicated crews. Minimize operational downtime.",
    popular: false,
  },
];

export function Services() {
  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Our Solution</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Comprehensive Freeze-Event<br />
            Prevention & Response
          </h2>
          <p className="text-lg text-muted-foreground">
            From pre-treatment to emergency response, we provide end-to-end ice control services that protect your property and your bottom line.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20" role="list">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
              role="listitem"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage options */}
        <div className="max-w-5xl mx-auto" id="coverage-options">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Coverage Options
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {coverageOptions.map((option, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-lg border-2 ${
                  option.popular
                    ? "border-accent bg-accent/5"
                    : "border-border bg-card"
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  {option.title}
                </h4>
                <p className="text-sm text-accent font-medium mb-3">
                  {option.period}
                </p>
                <p className="text-base text-muted-foreground mb-4">
                  {option.description}
                </p>
                <Button
                  variant={option.popular ? "accent" : "outline"}
                  className="w-full"
                  asChild
                >
                  <a href="#contact">Get Quote</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
