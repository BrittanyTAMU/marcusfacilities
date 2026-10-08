import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeaderCareer } from "@/career/HeaderCareer";
import { FooterCareer } from "@/career/FooterCareer";

const CONTACT_EMAIL = "sales@marcusfacilities.com";

export default function TermsV2() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Marcus Facilities</title>
        <meta
          name="description"
          content="Terms of Service for Marcus Reemployment by Marcus Facilities LLC, including subscription billing, cancellation, and refunds."
        />
        <link rel="canonical" href="https://www.marcusfacilities.com/terms/" />
      </Helmet>

      <HeaderCareer />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link to="/" className="text-sm text-foreground/70 hover:text-foreground mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-lg text-foreground/80 mb-4">
            These Terms of Service (“Terms”) govern your use of Marcus Reemployment, the website at
            www.marcusfacilities.com, and the platform at app.marcusfacilities.com, operated by Marcus Facilities LLC
            (“Marcus,” “we,” “us,” or “our”).
          </p>
          <p className="text-lg text-foreground/80 mb-10">
            <strong>Last updated:</strong> October 7, 2026
          </p>

          <div className="max-w-none space-y-8 text-lg leading-relaxed text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">1. Acceptance of terms</h2>
              <p>
                By creating an account, purchasing a subscription, or using the website or platform, you agree to these
                Terms and to the <Link to="/privacy" className="text-primary hover:underline font-semibold">Privacy Policy</Link>.
                If you use Marcus for a Sponsor Organization, you also agree that you are authorized to act for that
                organization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">2. Definitions</h2>
              <p>For these Terms:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Candidate</strong> means the individual whose job search is being managed through a Case.</li>
                <li><strong>Case</strong> means the workspace or record Marcus uses to organize a Candidate’s job-search activity.</li>
                <li><strong>Application Passport</strong> means the career, employment, contact, and application information maintained for a Candidate and used to assist with job applications.</li>
                <li><strong>Worker</strong> means a person authorized by Marcus and assigned to assist with a Candidate’s Case.</li>
                <li><strong>Sponsor Organization</strong> means an organization that is authorized to sponsor, fund, administer, or monitor one or more Cases.</li>
                <li><strong>Sponsor User</strong> means an authorized representative of a Sponsor Organization who is permitted to view the limited Case information made available to that organization.</li>
                <li><strong>Target Company</strong> means an employer or prospective employer associated with a job opportunity or professional outreach activity.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">3. Services</h2>
              <p>
                Marcus Reemployment helps a Candidate search for work. Depending on the plan, the platform can recommend
                job postings, store an Application Passport, help with a resume, suggest professional contacts at a
                Target Company, draft application answers, and send outreach from a Gmail mailbox that Candidate
                connects. A Worker assigned to a Case may perform those steps for that Candidate. A Sponsor User can
                view the limited Case information described below.
              </p>
              <p className="mt-3">
                Marcus provides job-search assistance. We do not guarantee a job offer, an interview, a reply from an
                employer, or any other employment result.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">4. What a Sponsor User can see</h2>
              <p>
                A Sponsor User may see only the Case information Marcus makes available to that Sponsor Organization for
                program administration or progress monitoring. Depending on the Sponsor program, this may include the
                Candidate’s name, Case status, job-search activity, employers or positions associated with the Case,
                application status and dates, interview or progress status, and aggregate activity or outcome
                information.
              </p>
              <p className="mt-3">
                Sponsor Users do not receive access to Application Passport fields designated as private to the
                Candidate, Workers, and Marcus administrators unless the Candidate separately authorizes that disclosure
                or applicable law permits or requires it. Marcus may provide more specific Sponsor disclosures when a
                Candidate joins a sponsored program.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">5. Accounts</h2>
              <p>
                Each person uses an individual login. You agree to provide accurate account information and to keep your
                password confidential. You are responsible for activity under your login. Do not share credentials, and
                do not sign in as another person.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">6. The Application Helper</h2>
              <p>
                The Application Helper works in Google Chrome and Microsoft Edge. Download Chrome or Edge to use the
                full helper. It can show autofill-safe Application Passport fields and draft an answer with GPT. You
                review the application and submit it yourself. The helper does not submit the form.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">7. Connected Gmail</h2>
              <p>
                Connecting Gmail is optional. Marcus requests only the Google permissions necessary for the Gmail
                functionality described in these Terms and the Privacy Policy. Marcus does not request Gmail
                inbox-reading permission for this functionality and does not read, store, or analyze the personal
                contents of your Gmail inbox.
              </p>
              <p className="mt-3">
                If Worker-assisted sending is enabled for your Case, you authorize Marcus and Workers assigned to that
                Case to cause approved job-search outreach to be sent from the Gmail mailbox you connected. Marcus will
                not use the connected mailbox for unrelated marketing or unrelated communications. Marcus may require an
                additional confirmation before Worker-assisted sending is enabled.
              </p>
              <p className="mt-3">
                You may withdraw this authorization by disabling Worker-assisted sending, disconnecting Gmail, revoking
                Google’s authorization, or closing the applicable Case, subject to messages already transmitted. When
                you disconnect Gmail or revoke Marcus’s Google access, Marcus will stop using the authorization to send
                Gmail messages. Authorization credentials maintained solely for the connection will be deleted, revoked,
                disabled, or otherwise made unusable within a reasonable period, subject to limited security, backup,
                fraud-prevention, and legal-retention requirements. You are responsible for messages already sent from a
                mailbox you connect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">8. Drafts and your review</h2>
              <p>
                Text produced by GPT or another provider is a draft. You are responsible for what you submit on an
                application and for email sent from a connected mailbox. Read a draft before you use it.
              </p>
              <p className="mt-3">
                Do not enter Social Security numbers, government identification numbers, banking information, passwords,
                medical information, or other highly sensitive information into GPT prompts unless Marcus expressly
                instructs you that the information is necessary and provides an approved method for doing so.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">9. Acceptable use</h2>
              <p>You agree to use Marcus for a lawful job search and related account administration. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Provide false or misleading account, resume, or application information</li>
                <li>Use the platform to harass anyone or to send messages that are outside a professional job search</li>
                <li>Attempt to access a Case, account, or system you are not authorized to use</li>
                <li>Interfere with the platform or probe it for a vulnerability without our written permission</li>
                <li>Resell, copy, or scrape the platform or its results</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">10. Subscription billing, cancellation, and refunds</h2>
              <p>
                This section applies to a paid subscription you purchase in the platform, including Starter, Search,
                Intensive, and Do it for you.
              </p>
              <p className="mt-3">
                Paid subscriptions are billed in advance on a recurring monthly basis and automatically renew until
                canceled. By purchasing a subscription, you authorize Marcus Facilities LLC and its payment processor to
                charge the applicable recurring subscription fee and any applicable taxes to your selected payment
                method.
              </p>
              <p className="mt-3">
                You may cancel your subscription at any time through Manage billing. Cancellation prevents future
                renewal charges but does not immediately terminate access to services already paid for. Unless otherwise
                required by applicable law, you will continue to have access to paid features through the end of your
                current paid billing period.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">No prorated refunds</h3>
              <p>
                Except where required by applicable law, subscription fees that have already been charged are
                non-refundable. Marcus Facilities LLC does not provide prorated refunds or credits for partially used
                billing periods, unused subscription time, unused applications or searches, failure to use the platform,
                or cancellation before the end of a paid billing period.
              </p>
              <p className="mt-3">
                Once the current paid billing period ends, paid features, including Find jobs, the Application Helper,
                contact search, and other subscription-only functionality, may become unavailable.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Discretionary refunds</h3>
              <p>
                Marcus Facilities LLC may, in its sole discretion, issue a full or partial refund, credit, or other
                accommodation in exceptional circumstances. Providing a discretionary refund in one instance does not
                create an obligation to provide a refund in the same or similar circumstances in the future.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Failed, reversed, or disputed payments</h3>
              <p>
                If a payment is declined, reversed, disputed, charged back, or remains unpaid, Marcus Facilities LLC may
                suspend or terminate access to paid services. If our payment processor reports a subscription as
                canceled, deleted, delinquent, or unpaid, the associated account or Case may be marked canceled and
                access to paid functionality may be restricted.
              </p>
              <p className="mt-3">
                Nothing in this section limits any refund, cancellation, or other consumer right that cannot legally be
                waived under applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">11. Price changes</h2>
              <p>
                Marcus may change subscription prices from time to time. A price change will apply prospectively and
                will not retroactively change the price of a billing period already paid for. Where required by
                applicable law, Marcus will provide advance notice of a price change before charging the new recurring
                price and will obtain any additional consent required by law. If you do not wish to continue at the new
                price, you may cancel before the price change takes effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">12. Third-party information</h2>
              <p>
                Marcus may obtain or display job postings, employer information, professional contact information,
                compensation information, and other information originating from third parties. Third-party information
                can change without notice. Marcus does not guarantee that a displayed job remains available, that an
                employer is actively hiring, that compensation or other job terms remain unchanged, that a job posting
                is complete or accurate, that a professional contact remains employed by the listed organization, that
                an email address is deliverable or current, or that a third-party website, applicant tracking system, or
                application page will remain available or function properly.
              </p>
              <p className="mt-3">
                Where Marcus identifies an email address as inferred, predicted, pattern-based, or otherwise unverified,
                the address should not be treated as independently confirmed. Users should review material employment
                information before relying on it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">13. Intellectual property</h2>
              <p>
                The website, platform, and Marcus name and logo are owned by Marcus Facilities LLC and are protected by
                applicable intellectual property laws. You keep the rights to the resume and other materials you upload.
                You give Marcus permission to host and use those materials to provide the service. You may not copy the
                platform or create a substitute product from it without our written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">14. Limitation of liability</h2>
              <p>
                The website and platform are provided “as is.” To the maximum extent permitted by law, Marcus Facilities
                LLC is not liable for indirect, incidental, special, consequential, or punitive damages, or for lost
                employment opportunities, arising from your use of the website, the platform, drafts, contact
                suggestions, or reliance on their content.
              </p>
              <p className="mt-3">
                To the maximum extent permitted by applicable law, Marcus Facilities LLC’s total aggregate liability
                arising out of or relating to the services or these Terms will not exceed the greater of (a) the amount
                you paid Marcus during the six months immediately preceding the event giving rise to the claim or (b)
                $100. This limitation does not apply to liability that cannot lawfully be limited or excluded.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">15. Ending access</h2>
              <p>
                You may cancel a subscription you purchased, as described above, or stop using the platform at any time.
                We may suspend or close access if these Terms are broken, a payment fails or is disputed, or we must do
                so to protect the platform or another person. When access ends, we stop sending from a Gmail mailbox
                connected for that Case. You may ask us to delete account information as described in the Privacy
                Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">16. Changes to these terms</h2>
              <p>
                Marcus may update these Terms from time to time. We will post the updated Terms and update the “Last
                updated” date. If a change is material, we may also provide notice by email, through the platform, or by
                another reasonable method. Changes will apply prospectively from the stated effective date. Where
                applicable law requires affirmative consent to a particular change, Marcus will request that consent
                rather than relying solely on continued use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">17. Governing law</h2>
              <p>
                These Terms are governed by the laws of the State of Texas, United States, without regard to conflict of
                law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">18. Contact</h2>
              <p>
                Marcus Facilities LLC
                <br />
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline font-semibold">
                  {CONTACT_EMAIL}
                </a>
                <br />
                <a href="https://www.marcusfacilities.com/" className="text-primary hover:underline font-semibold">
                  www.marcusfacilities.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <FooterCareer />
    </>
  );
}
