import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const serviceAreas = [
  "Dallas-Fort Worth",
];

const services = [
  "Pre-Treatment",
  "Emergency Response",
  "Ice Control",
  "Documentation",
];

const segments = [
  { name: "HOAs", href: "/services/hoa" },
  { name: "Apartments", href: "/services/apartments" },
  { name: "Retail", href: "/services/retail" },
  { name: "Logistics", href: "/services/logistics" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

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
              Professional freeze-event safety and ice control services for Texas commercial and residential properties.
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
                <li key={service}>
                  <a
                    href="#services"
                    className="text-base text-primary-foreground hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Serve */}
          <div>
            <h4 className="font-semibold mb-4 text-base text-primary-foreground">Who We Serve</h4>
            <ul className="space-y-2">
              {segments.map((segment) => (
                <li key={segment.name}>
                  <Link
                    to={segment.href}
                    className="text-base text-primary-foreground hover:text-accent transition-colors"
                  >
                    {segment.name}
                  </Link>
                </li>
              ))}
            </ul>
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
              <a
                href="#"
                className="text-base text-primary-foreground/90 hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-base text-primary-foreground/90 hover:text-accent transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
