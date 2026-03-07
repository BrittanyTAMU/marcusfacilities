import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeaderV2 } from "@/v2/HeaderV2";
import { FooterV2 } from "@/v2/FooterV2";

const CONTACT_EMAIL = "sales@marcusfacilities.com";
const DATE = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function PrivacyV2() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Marcus Facilities</title>
        <meta name="description" content="Privacy Policy for Marcus Facilities. How we collect, use, and protect your information." />
        <link rel="canonical" href="https://marcusfacilities.com/#/v2/privacy" />
      </Helmet>

      <HeaderV2 />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link to="/v2" className="text-sm text-foreground/70 hover:text-foreground mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-foreground/80 mb-10"><strong>Last updated:</strong> {DATE}</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">1. Introduction</h2>
              <p className="text-foreground/80">
                This Privacy Policy describes how Marcus Facilities LLC collects, uses, and protects information you provide when you use our website or contact us. We are committed to protecting your privacy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">2. Information We Collect</h2>
              <p className="text-foreground/80 mb-2">We may collect information you choose to provide, such as:</p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Name and email address</li>
                <li>Organization name</li>
                <li>Phone number (if provided)</li>
                <li>Message or inquiry content</li>
              </ul>
              <p className="text-foreground/80 mt-2">We do not collect payment information, Social Security numbers, or other sensitive identifiers through this website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">3. How We Use Information</h2>
              <p className="text-foreground/80 mb-2">We use the information you provide to:</p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Respond to your inquiries and requests</li>
                <li>Communicate about our services</li>
                <li>Send requested information or documentation</li>
                <li>Improve our website and operations</li>
              </ul>
              <p className="text-foreground/80 mt-2">We do not sell, rent, or trade your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">4. Third-Party Services</h2>
              <p className="text-foreground/80">
                We may use third-party tools (such as email or analytics) to operate our business. These providers receive only the information necessary to perform their services and are expected to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Security</h2>
              <p className="text-foreground/80">
                We take reasonable steps to protect your information using industry-standard practices. No internet transmission is completely secure; we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">6. Your Choices</h2>
              <p className="text-foreground/80">
                You may request that we update, correct, or delete your information by contacting us. You are not required to provide information through this site and may contact us directly by email if you prefer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to This Policy</h2>
              <p className="text-foreground/80">
                We may update this Privacy Policy from time to time. Changes will be posted here with a revised "Last updated" date. Continued use after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact</h2>
              <p className="text-foreground/80">
                Questions about this policy or your information: <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline font-semibold">{CONTACT_EMAIL}</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <FooterV2 />
    </>
  );
}
