import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeaderV2 } from "@/v2/HeaderV2";
import { FooterV2 } from "@/v2/FooterV2";

const CONTACT_EMAIL = "sales@marcusfacilities.com";
const DATE = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function TermsV2() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Marcus Facilities</title>
        <meta name="description" content="Terms of Service for Marcus Facilities. Acceptance of terms and legal information." />
        <link rel="canonical" href="https://marcusfacilities.com/#/v2/terms" />
      </Helmet>

      <HeaderV2 />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link to="/v2" className="text-sm text-foreground/70 hover:text-foreground mb-6 inline-block">
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
                Marcus Facilities LLC provides management consulting, technical operations, and advisory services. We do not guarantee specific outcomes or results. Engagement terms are defined in separate agreements where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">3. No Professional Advice</h2>
              <p className="text-foreground/80">
                Content on this site is for general informational purposes only and does not constitute legal, financial, or professional advice. Consult qualified professionals for decisions specific to your situation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">4. Limitation of Liability</h2>
              <p className="text-foreground/80">
                To the maximum extent permitted by law, Marcus Facilities LLC is not liable for any damages arising from use of this website or reliance on its content, including business decisions or outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">5. Third-Party Links</h2>
              <p className="text-foreground/80">
                This site may link to third-party websites. We are not responsible for their content, practices, or availability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">6. Termination</h2>
              <p className="text-foreground/80">
                We may restrict or terminate access to this website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes</h2>
              <p className="text-foreground/80">
                We may update these Terms at any time. Continued use constitutes acceptance of changes. The "Last updated" date reflects the latest revision.
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
                Questions about these Terms: <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline font-semibold">{CONTACT_EMAIL}</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <FooterV2 />
    </>
  );
}
