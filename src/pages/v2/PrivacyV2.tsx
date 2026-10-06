import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeaderCareer } from "@/career/HeaderCareer";
import { FooterCareer } from "@/career/FooterCareer";

const CONTACT_EMAIL = "sales@marcusfacilities.com";
const DATE = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function PrivacyV2() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Marcus Facilities</title>
        <meta name="description" content="Privacy Policy for Marcus Facilities. How we collect, use, and protect your information." />
        <link rel="canonical" href="https://marcusfacilities.com/#/privacy" />
      </Helmet>

      <HeaderCareer />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link to="/" className="text-sm text-foreground/70 hover:text-foreground mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-foreground/80 mb-10"><strong>Last updated:</strong> {DATE}</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">1. Introduction</h2>
              <p className="text-foreground/80">
                This Privacy Policy describes how Marcus Facilities LLC collects, uses, and protects information you provide when you use our website, platform, or contact us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">2. Information We Collect</h2>
              <p className="text-foreground/80 mb-2">We may collect information you choose to provide, such as:</p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Name and email address</li>
                <li>Organization or career information you share</li>
                <li>Phone number (if provided)</li>
                <li>Message or inquiry content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">3. How We Use Information</h2>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Respond to your inquiries and requests</li>
                <li>Communicate about our services and platform</li>
                <li>Improve our website and operations</li>
              </ul>
              <p className="text-foreground/80 mt-2">We do not sell, rent, or trade your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-2">4. Contact</h2>
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
