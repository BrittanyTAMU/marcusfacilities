import { Link, useLocation } from "react-router-dom";
import { Mail, MapPin, FileText } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const serviceAreas = [
  "North Texas (DFW Metroplex)",
  "Northern New Jersey",
];

const services = [
  { name: "Facilities Operations", scrollId: "facilities-operations" },
  { name: "Logistics & Transport", scrollId: "logistics-transport" },
  { name: "Environmental Services", scrollId: "environmental-services" },
  { name: "Compliance & Support", scrollId: "compliance-support" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === "/gov";

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-md bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-lg">MF</span>
              </div>
              <div>
                <span className="font-bold text-lg">Marcus Facilities</span>
              </div>
            </div>
            <p className="text-primary-foreground text-base mb-6">
              Professional facilities operations, logistics, environmental services, and compliance support for government agencies and prime contractors.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:sales@marcusfacilities.com"
                className="flex items-center gap-2 text-base text-primary-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                sales@marcusfacilities.com
              </a>
            </div>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="font-semibold mb-4 text-base text-primary-foreground">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="flex items-center gap-2 text-base text-primary-foreground">
                    <MapPin className="w-4 h-4" />
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-base text-primary-foreground">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.scrollId}>
                  {isHome ? (
                    <a
                      href={`#${service.scrollId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(`#${service.scrollId}`);
                      }}
                      className="text-base text-primary-foreground hover:text-accent transition-colors cursor-pointer"
                    >
                      {service.name}
                    </a>
                  ) : (
                    <Link
                      to="/gov"
                      state={{ scrollTo: service.scrollId }}
                      className="text-base text-primary-foreground hover:text-accent transition-colors"
                    >
                      {service.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Procurement Info */}
          <div>
            <h4 className="font-semibold mb-4 text-base text-primary-foreground flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Procurement
            </h4>
            <div className="space-y-2 text-sm text-primary-foreground/90">
              <div>
                <span className="font-medium">UEI:</span> 000000000
              </div>
              <div>
                <span className="font-medium">CAGE:</span> XXXXX
              </div>
              <div>
                <span className="font-medium">Primary NAICS:</span> 561210
              </div>
              <div>
                <span className="font-medium">Secondary NAICS:</span> 561720, 561730, 562910, 491110, 492110, 541922, 238220, 561990, 811192
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-primary-foreground/90">
              © {currentYear} Marcus Facilities LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/gov/privacy"
                className="text-base text-primary-foreground/90 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/gov/terms"
                className="text-base text-primary-foreground/90 hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
