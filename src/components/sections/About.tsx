import { Shield, CheckCircle, FileText, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "Committed to delivering consistent, high-quality services that meet government contracting standards.",
  },
  {
    icon: CheckCircle,
    title: "Compliance Ready",
    description: "Full documentation, certifications, and adherence to procurement requirements.",
  },
  {
    icon: FileText,
    title: "Prime & Sub Ready",
    description: "Experienced in working with government agencies and prime contractors.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Responsive team focused on meeting your procurement and operational needs.",
  },
];

export function About() {
  return (
    <section className="py-20 bg-section-alt" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Trusted Partner for Government Contracting
          </h2>
          <p className="text-lg text-muted-foreground">
            Marcus Facilities provides comprehensive facilities operations, logistics, environmental services, and compliance support. We're committed to meeting the unique requirements of government agencies and prime contractors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" role="list">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              role="listitem"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
