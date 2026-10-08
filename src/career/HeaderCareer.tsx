import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";
import { GET_STARTED_PATH } from "./config";
import { HELP_LINKS } from "./help-links";

const navigation = [
  { name: "How It Works", to: "/", scrollTo: "how-it-works" as string | null },
  { name: "Platform", to: "/", scrollTo: "platform" as string | null },
  { name: "About", to: "/about", scrollTo: null as string | null },
  { name: "Contact", to: "/", scrollTo: "contact" as string | null },
];

export function HeaderCareer() {
  const [open, setOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleScroll = (e: React.MouseEvent, id: string | null) => {
    if (!id || !isHome) return;
    e.preventDefault();
    scrollToSection(`#${id}`);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/60">
      <nav
        className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8"
        aria-label="Main navigation"
      >
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/marcus-oauth-logo.png" width="40" height="40" alt="" />
          <span>
            <span className="font-serif text-2xl font-bold tracking-wide text-foreground block leading-none">
              MARCUS
            </span>
            <span className="text-xs text-muted-foreground tracking-wide">Marcus Reemployment</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => {
            if ("href" in item && item.href) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              );
            }
            if (item.scrollTo) {
              return isHome ? (
                <a
                  key={item.name}
                  href={`#${item.scrollTo}`}
                  onClick={(e) => handleScroll(e, item.scrollTo)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to="/"
                  state={{ scrollTo: item.scrollTo }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              );
            }
            return (
              <Link
                key={item.name}
                to={item.to!}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            );
          })}
          <div className="relative">
            <button
              type="button"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              aria-expanded={helpOpen}
              aria-controls="who-we-help-menu"
              onClick={() => setHelpOpen((value) => !value)}
            >
              Who we help
            </button>
            {helpOpen ? (
              <div
                id="who-we-help-menu"
                className="absolute left-0 top-full z-50 mt-3 w-64 rounded-xl border border-border bg-background p-2 shadow-lg"
              >
                {HELP_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="hidden lg:block">
          <Button variant="accent" className="rounded-full px-6" asChild>
            <a href={GET_STARTED_PATH}>Get Started</a>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          {navigation.map((item) => {
            if ("href" in item && item.href) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-muted-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              );
            }
            if (item.scrollTo && isHome) {
              return (
                <a
                  key={item.name}
                  href={`#${item.scrollTo}`}
                  onClick={(e) => handleScroll(e, item.scrollTo)}
                  className="block text-base font-medium text-muted-foreground"
                >
                  {item.name}
                </a>
              );
            }
            return (
              <Link
                key={item.name}
                to={item.scrollTo ? "/" : item.to!}
                state={item.scrollTo ? { scrollTo: item.scrollTo } : undefined}
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-muted-foreground"
              >
                {item.name}
              </Link>
            );
          })}
          <p className="pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Who we help</p>
          {HELP_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-base font-medium text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button variant="accent" className="w-full rounded-full" asChild>
            <a href={GET_STARTED_PATH} onClick={() => setOpen(false)}>
              Get Started
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
