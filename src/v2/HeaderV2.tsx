import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";

const navigation = [
  { name: "Capabilities", href: "#capabilities", scrollTo: "capabilities" },
  { name: "About", href: "/v2/about", isPage: true },
  { name: "Contact", href: "#contact", scrollTo: "contact" },
];

export function HeaderV2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/v2";

  const handleScrollClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    scrollToSection(target.startsWith("#") ? target : `#${target}`);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8" aria-label="Main navigation">
        <Link to="/v2" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">MF</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-lg text-foreground">Marcus Facilities</span>
            <span className="block text-sm text-muted-foreground">Management Consulting</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) =>
            item.isPage ? (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : isHome ? (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollClick(e, item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to="/v2"
                state={{ scrollTo: item.scrollTo }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          {isHome ? (
            <Button variant="accent" asChild>
              <a href="#contact" onClick={(e) => handleScrollClick(e, "#contact")}>
                Request for Information
              </a>
            </Button>
          ) : (
            <Button variant="accent" asChild>
              <Link to="/v2" state={{ scrollTo: "contact" }}>
                Request for Information
              </Link>
            </Button>
          )}
        </div>

        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <nav className="lg:hidden bg-background border-b border-border" aria-label="Mobile navigation">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigation.map((item) =>
              item.isPage ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-base font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : isHome ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-muted-foreground hover:text-foreground cursor-pointer"
                  onClick={(e) => handleScrollClick(e, item.href)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to="/v2"
                  state={{ scrollTo: item.scrollTo }}
                  className="block text-base font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-border">
              {isHome ? (
                <Button variant="accent" className="w-full" asChild>
                  <a href="#contact" onClick={(e) => handleScrollClick(e, "#contact")}>
                    Request for Information
                  </a>
                </Button>
              ) : (
                <Button variant="accent" className="w-full" asChild>
                  <Link to="/v2" state={{ scrollTo: "contact" }}>
                    Request for Information
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
