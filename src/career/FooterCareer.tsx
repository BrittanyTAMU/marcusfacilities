import { Link, useLocation } from "react-router-dom";
import { Mail } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { GET_STARTED_PATH } from "./config";
import { HELP_LINKS } from "./help-links";

export function FooterCareer() {
  const year = new Date().getFullYear();
  const isHome = useLocation().pathname === "/";

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="font-serif text-2xl font-bold tracking-wide block">MARCUS</span>
            <span className="text-sm text-primary-foreground/80">Job Search Wingman</span>
            <p className="mt-4 text-primary-foreground/85 text-sm leading-relaxed max-w-xs">
              Keep your day job. We&apos;ll help you find your next one.
            </p>
            <a
              href="mailto:sales@marcusfacilities.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-primary-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              sales@marcusfacilities.com
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/70">
              Explore
            </h4>
            <ul className="space-y-2 text-primary-foreground/90 text-sm">
              <li>
                {isHome ? (
                  <a
                    href="#how-it-works"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#how-it-works");
                    }}
                    className="hover:text-accent transition-colors cursor-pointer"
                  >
                    How It Works
                  </a>
                ) : (
                  <Link to="/" state={{ scrollTo: "how-it-works" }} className="hover:text-accent transition-colors">
                    How It Works
                  </Link>
                )}
              </li>
              <li>
                {isHome ? (
                  <a
                    href="#platform"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#platform");
                    }}
                    className="hover:text-accent transition-colors cursor-pointer"
                  >
                    Platform
                  </a>
                ) : (
                  <Link to="/" state={{ scrollTo: "platform" }} className="hover:text-accent transition-colors">
                    Platform
                  </Link>
                )}
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a href={GET_STARTED_PATH} className="hover:text-accent transition-colors">
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/70">
              Who we help
            </h4>
            <ul className="space-y-2 text-primary-foreground/90 text-sm">
              {HELP_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-accent transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/70">
              Legal
            </h4>
            <ul className="space-y-2 text-primary-foreground/90 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-5 text-primary-foreground/70 text-sm">
          © {year} Marcus Facilities LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
