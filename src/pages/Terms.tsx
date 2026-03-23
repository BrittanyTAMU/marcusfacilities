import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const CONTACT_EMAIL = "sales@marcusfacilities.com";
const DATE = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Marcus Facilities</title>
        <meta name="description" content="Terms of Service for Marcus Facilities. Acceptance of terms, services provided, and legal information." />
        <link rel="canonical" href="https://marcusfacilities.com/terms" />
      </Helmet>

      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link to="/gov" className="text-sm text-foreground/70 hover:text-foreground mb-6 inline-block">
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
              <h2 className="text-xl font-semibold mt-8 mb-2">2. Services Provided</h2>
              <p className="text-foreground/80">
                Marcus Facilities provides facilities operations, logistics, environmental services, and compliance support services for government agencies and prime contractors. We do not guarantee specific contract awards or procurement outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">3. No Professional Advice</h2>
              <p className="text-foreground/80">
                Content provided on this site is for informational purposes only and should not be considered legal, procurement, or professional contracting advice. Consult with qualified procurement professionals for specific contracting needs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">4. Limitation of Liability</h2>
              <p className="text-foreground/80">
                To the maximum extent permitted by law, Marcus Facilities is not liable for any damages arising from the use of this website or reliance on its content. This includes, but is not limited to, procurement decisions, contract awards, or business outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">5. Third-Party Links</h2>
              <p className="text-foreground/80">
                Our website may contain links to third-party sites, including government procurement portals (e.g., SAM.gov, GSA). We are not responsible for their content, practices, or availability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">6. Termination</h2>
              <p className="text-foreground/80">
                We reserve the right to restrict or terminate access to the website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to Terms</h2>
              <p className="text-foreground/80">
                We may update these Terms of Service at any time. Continued use of the website constitutes acceptance of any changes. The "Last updated" date at the top indicates when these terms were last revised.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">8. Governing Law</h2>
              <p className="text-foreground/80">
                These Terms are governed by the laws of the State of Texas, United States, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">9. Contact</h2>
              <p className="text-foreground/80">
                If you have questions about these Terms, contact us at:
              </p>
              <p className="mt-2"><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline font-semibold">{CONTACT_EMAIL}</a></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
