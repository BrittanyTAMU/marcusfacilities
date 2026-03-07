import { FileText, MapPin, Building2 } from "lucide-react";

const PRIMARY_NAICS = "561210";
const SECONDARY_NAICS = ["561720", "561730", "562910", "491110", "492110", "541922", "238220", "561990", "811192"];
const SERVICE_AREAS = ["North Texas (DFW Metroplex)", "Northern New Jersey"];

export function ProcurementSidebar() {
  return (
    <aside className="bg-card border-2 border-primary/20 rounded-lg p-6 sticky top-24">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-bold text-foreground">Procurement Information</h3>
      </div>

      <div className="space-y-6">
        {/* Primary NAICS */}
        <div>
          <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-2">
            Primary NAICS
          </h4>
          <p className="text-base font-semibold text-foreground">
            {PRIMARY_NAICS}
          </p>
          <p className="text-sm text-foreground/70 mt-1">
            Facilities Support Services
          </p>
        </div>

        {/* Secondary NAICS */}
        <div>
          <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-2">
            Secondary NAICS
          </h4>
          <div className="flex flex-wrap gap-2">
            {SECONDARY_NAICS.map((naics, idx) => (
              <span
                key={idx}
                className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium"
              >
                {naics}
              </span>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-2 flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Service Areas
          </h4>
          <ul className="space-y-2">
            {SERVICE_AREAS.map((area, idx) => (
              <li key={idx} className="text-sm text-foreground">
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-border">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.querySelector("#contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-4 rounded transition-colors"
          >
            Request Capability Statement
          </a>
        </div>
      </div>
    </aside>
  );
}
