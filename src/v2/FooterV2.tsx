import { Link, useLocation } from "react-router-dom";
import { Mail, MapPin, FileText } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const serviceAreas = ["North Texas (DFW Metroplex)", "Northern New Jersey"];

export function FooterV2() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === "/v2";

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-md bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-lg">MF</span>
              </div>
              <span className="font-bold text-lg">Marcus Facilities</span>
            </div>
            <p className="text-primary-foreground/90 text-base mb-6">
              Precision consulting for complex infrastructure. Technical expertise, operational excellence, and mission-critical support.
            </p>
            <a
              href="mailto:sales@marcusfacilities.com"
              className="flex items-center gap-2 text-base text-primary-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              sales@marcusfacilities.com
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base text-primary-foreground">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2 text-primary-foreground/90">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base text-primary-foreground">Explore</h4>
            <ul className="space-y-2">
              <li>
                {isHome ? (
                  <a
                    href="#capabilities"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#capabilities");
                    }}
                    className="text-primary-foreground/90 hover:text-accent transition-colors cursor-pointer"
                  >
                    Capabilities
                  </a>
                ) : (
                  <Link
                    to="/v2"
                    state={{ scrollTo: "capabilities" }}
                    className="text-primary-foreground/90 hover:text-accent transition-colors"
                  >
                    Capabilities
                  </Link>
                )}
              </li>
              <li>
                <Link to="/v2/about" className="text-primary-foreground/90 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                {isHome ? (
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#contact");
                    }}
                    className="text-primary-foreground/90 hover:text-accent transition-colors cursor-pointer"
                  >
                    Request for Information
                  </a>
                ) : (
                  <Link
                    to="/v2"
                    state={{ scrollTo: "contact" }}
                    className="text-primary-foreground/90 hover:text-accent transition-colors"
                  >
                    Request for Information
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base text-primary-foreground flex items-center gap-2">
              <FileText className="w-4 h-4" />
              For Contracting & Procurement
            </h4>
            <p className="text-sm text-primary-foreground/80 mb-2">
              NAICS 561210. Capability statements and contracting information available upon request.
            </p>
            {isHome ? (
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="text-sm font-medium text-primary-foreground hover:text-accent transition-colors underline cursor-pointer"
              >
                Request capability information
              </a>
            ) : (
              <Link
                to="/v2"
                state={{ scrollTo: "contact" }}
                className="text-sm font-medium text-primary-foreground hover:text-accent transition-colors underline"
              >
                Request capability information
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-primary-foreground/90">
              © {currentYear} Marcus Facilities LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/v2/privacy" className="text-primary-foreground/90 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/v2/terms" className="text-primary-foreground/90 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
