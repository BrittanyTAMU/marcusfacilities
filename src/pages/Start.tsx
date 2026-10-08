import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeaderCareer } from "@/career/HeaderCareer";
import { FooterCareer } from "@/career/FooterCareer";
import { Button } from "@/components/ui/button";
import { GET_STARTED_PATH } from "@/career/config";

/**
 * Old Get Started URL. Sends visitors to the Vercel app.
 */
export default function Start() {
  useEffect(() => {
    window.location.replace(GET_STARTED_PATH);
  }, []);

  return (
    <>
      <Helmet>
        <title>Get Started | MARCUS Job Search Wingman</title>
        <meta
          name="description"
          content="Start your job search with MARCUS. Reach out to begin — keep your day job while we help run the search."
        />
        <link rel="canonical" href="https://marcusfacilities.com/#/start" />
      </Helmet>
      <HeaderCareer />
      <main className="min-h-[75vh] py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-lg">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <p className="font-serif text-sm font-semibold tracking-wide text-muted-foreground mb-2">
              MARCUS
            </p>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-3">Get started</h1>
            <p className="text-muted-foreground mb-6">
              Keep your day job. We&apos;ll help you run the search. Tell us where you are — we&apos;ll take it from
              there.
            </p>
            <p className="text-muted-foreground mb-8">
              <strong className="text-foreground font-semibold">Pricing is shown when you begin.</strong>
            </p>
            <div className="flex flex-col gap-3">
              <Button variant="accent" size="lg" className="w-full rounded-full" asChild>
                <a href={GET_STARTED_PATH}>Continue to the platform</a>
              </Button>
              <Button variant="outline" size="lg" className="w-full rounded-full" asChild>
                <Link to="/" state={{ scrollTo: "contact" }}>
                  Contact form
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              <Link to="/" className="underline hover:text-foreground">
                ← Back to home
              </Link>
            </p>
          </div>
        </div>
      </main>
      <FooterCareer />
    </>
  );
}
