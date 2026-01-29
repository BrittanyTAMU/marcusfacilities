import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const CONTACT_EMAIL = "sales@marcusfacilities.com";
const DATE = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Marcus Facilities</title>
        <meta name="description" content="Privacy Policy for Marcus Facilities. How we collect, use, and protect your information." />
        <link rel="canonical" href="https://marcusfacilities.com/privacy" />
      </Helmet>

      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10"><strong>Last updated:</strong> {DATE}</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">1. Introduction</h2>
              <p className="text-muted-foreground">
                This Privacy Policy explains how we collect, use, and protect information you voluntarily provide when you visit our website or contact us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-2">We currently collect only limited personal information, including:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Any information you choose to include in a contact form message</li>
              </ul>
              <p className="text-muted-foreground mt-2">We do <strong>not</strong> collect payment information at this time.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">3. How We Use Information</h2>
              <p className="text-muted-foreground mb-2">We use the information you provide to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Respond to inquiries</li>
                <li>Communicate about our services</li>
                <li>Improve our operations and website</li>
              </ul>
              <p className="text-muted-foreground mt-2">We do not sell, rent, or trade your personal information.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">4. Third-Party Services</h2>
              <p className="text-muted-foreground">
                We may use standard third-party tools (such as email or website analytics services) to operate our business. These providers are only given access to information necessary to perform their services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Security</h2>
              <p className="text-muted-foreground">
                We take reasonable measures to protect your information. However, no method of transmission over the internet is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">6. Your Choices</h2>
              <p className="text-muted-foreground">
                You may request that we update or delete your information by contacting us at the email address listed below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Updates will be posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, contact us at:
              </p>
              <p className="mt-2"><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
