import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";
import { GET_STARTED_PATH } from "./config";

const navigation = [
  { name: "How It Works", to: "/", scrollTo: "how-it-works" as string | null },
  { name: "Platform", to: "/", scrollTo: "platform" as string | null },
  { name: "About", to: "/about", scrollTo: null as string | null },
  { name: "Contact", to: "/", scrollTo: "contact" as string | null },
];

export function HeaderCareer() {
  const [open, setOpen] = useState(false);
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
        <Link to="/" className="group" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl font-bold tracking-wide text-foreground block leading-none">
            MARCUS
          </span>
          <span className="text-xs text-muted-foreground tracking-wide">Job Search Wingman</span>
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
        </div>

        <div className="hidden lg:block">
          <Button variant="accent" className="rounded-full px-6" asChild>
            <Link to={GET_STARTED_PATH}>Get Started</Link>
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
          <Button variant="accent" className="w-full rounded-full" asChild>
            <Link to={GET_STARTED_PATH} onClick={() => setOpen(false)}>
              Get Started
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
