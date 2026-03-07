import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";

const navigation = [
  { name: "Services", href: "#services", scrollState: "services" },
  { name: "About", href: "#about", scrollState: "about" },
  { name: "FAQ", href: "#faq", scrollState: null },
  { name: "Contact", href: "#contact", scrollState: null },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setMobileMenuOpen(false);
  };

  const handleDownloadCapabilityStatement = () => {
    const pdfUrl = "/Capability_Statement_MarcusFacilitiesLLC_NAICS_561210.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8" aria-label="Main navigation">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">MF</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-lg text-foreground">Marcus Facilities</span>
            <span className="block text-sm text-muted-foreground">Government Contracting</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) =>
            isHome ? (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            ) : item.scrollState ? (
              <Link
                key={item.name}
                to="/"
                state={{ scrollTo: item.scrollState }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {isHome ? (
            <Button variant="accent" asChild>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Request Capability Statement</a>
            </Button>
          ) : (
            <Button variant="accent" onClick={handleDownloadCapabilityStatement}>
              <Download className="w-4 h-4 mr-2" aria-hidden="true" />
              Download Capability Statement
            </Button>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav id="mobile-menu" className="lg:hidden bg-background border-b border-border" aria-label="Mobile navigation">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigation.map((item) =>
              isHome ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-muted-foreground hover:text-foreground cursor-pointer"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ) : item.scrollState ? (
                <Link
                  key={item.name}
                  to="/"
                  state={{ scrollTo: item.scrollState }}
                  className="block text-base font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-muted-foreground hover:text-foreground cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              )
            )}
            <div className="pt-4 border-t border-border">
              {isHome ? (
                <Button variant="accent" className="w-full" asChild>
                  <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Request Capability Statement</a>
                </Button>
              ) : (
                <Button variant="accent" className="w-full" onClick={handleDownloadCapabilityStatement}>
                  <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                  Download Capability Statement
                </Button>
              )}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
