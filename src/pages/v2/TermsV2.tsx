import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeaderCareer } from "@/career/HeaderCareer";
import { FooterCareer } from "@/career/FooterCareer";

const CONTACT_EMAIL = "sales@marcusfacilities.com";
const DATE = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function TermsV2() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Marcus Facilities</title>
        <meta name="description" content="Terms of Service for Marcus Facilities." />
        <link rel="canonical" href="https://marcusfacilities.com/#/terms" />
      </Helmet>

      <HeaderCareer />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link to="/" className="text-sm text-foreground/70 hover:text-foreground mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-3xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-foreground/80 mb-10"><strong>Last updated:</strong> {DATE}</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">1. Acceptance of Terms</h2>
              <p className="text-foreground/80">
                By accessing or using this website, you agree to these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">2. Services</h2>
              <p className="text-foreground/80">
                Marcus Facilities LLC provides career support services and related platforms, as well as separate facilities and organizational support services. We do not guarantee specific job offers, interview outcomes, or other results.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">3. Limitation of Liability</h2>
              <p className="text-foreground/80">
                To the maximum extent permitted by law, Marcus Facilities LLC is not liable for damages arising from use of this website or reliance on its content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">4. Governing Law</h2>
              <p className="text-foreground/80">
                These Terms are governed by the laws of the State of Texas, United States.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">5. Contact</h2>
              <p className="text-foreground/80">
                Questions: <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline font-semibold">{CONTACT_EMAIL}</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <FooterCareer />
    </>
  );
}
