import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeaderCareer } from "@/career/HeaderCareer";
import { FooterCareer } from "@/career/FooterCareer";

const CONTACT_EMAIL = "sales@marcusfacilities.com";

export default function PrivacyV2() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Marcus Facilities</title>
        <meta
          name="description"
          content="Privacy Policy for Marcus Reemployment by Marcus Facilities LLC, including Gmail, the Application Helper, and how providers are used."
        />
        <link rel="canonical" href="https://www.marcusfacilities.com/privacy/" />
      </Helmet>

      <HeaderCareer />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link to="/" className="text-sm text-foreground/70 hover:text-foreground mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-lg text-foreground/80 mb-4">
            Marcus Facilities LLC (“Marcus,” “we,” “us,” or “our”) operates Marcus Reemployment at
            www.marcusfacilities.com and the platform at app.marcusfacilities.com. This Privacy Policy explains how we
            collect, use, and protect information when you use the website, the platform, and the Application Helper.
            The words Candidate, Case, Worker, Sponsor Organization, Sponsor User, Target Company, and Application
            Passport have the meanings given in the <Link to="/terms" className="text-primary hover:underline font-semibold">Terms of Service</Link>.
          </p>
          <p className="text-lg text-foreground/80 mb-10">
            <strong>Last updated:</strong> October 7, 2026
          </p>

          <div className="max-w-none space-y-8 text-lg leading-relaxed text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information we collect</h2>
              <p className="mb-2">When you use Marcus, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account information.</strong> Your name, email address, role, and login credentials. The
                  password is stored by our sign-in provider, not as plain text in the application.
                </li>
                <li>
                  <strong>Application Passport and career information.</strong> Resume files, work history, contact
                  details, job-search preferences, and application answers you or an assigned Worker enter for a Case.
                </li>
                <li>
                  <strong>Job-search activity.</strong> Saved role and location, postings shown to you, applications you
                  mark, contact suggestions, and outreach you ask the platform to draft or send.
                </li>
                <li>
                  <strong>Gmail connection.</strong> If you connect Gmail, we receive the Google permissions described
                  below, including authorization credentials that let the platform keep the connection, and the email
                  address of the connected account. We do not request permission to read your inbox, and we do not
                  connect Google Calendar.
                </li>
                <li>
                  <strong>Payment information.</strong> Subscription and one-time payments are processed by Stripe. We
                  do not store full card numbers.
                </li>
                <li>
                  <strong>Support messages.</strong> Information you send to {CONTACT_EMAIL} or submit in the product
                  when you ask for help.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">2. How we use your information</h2>
              <p className="mb-2">We use this information to provide Marcus Reemployment:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Run the job search for the saved role and location</li>
                <li>Store the Application Passport and resume versions for that Case</li>
                <li>Suggest professional contacts at a Target Company and prepare outreach</li>
                <li>Send email you or an assigned Worker choose to send from the connected Gmail mailbox</li>
                <li>Draft application answers and resume help with GPT from the career information provided for that request</li>
                <li>Show a Sponsor User the limited Case information described below</li>
                <li>Process subscriptions, credits, and customer support</li>
              </ul>
              <p className="mt-3">We do not sell your personal information, and we do not use it for advertising.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">3. Who can see a Case</h2>
              <p>
                A Candidate can see that Candidate’s own Case. An assigned Worker and a platform administrator can work
                that Case.
              </p>
              <p className="mt-3">
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
              <h2 className="text-2xl font-semibold mt-8 mb-2">4. Google account and Gmail</h2>
              <p>
                Connecting Gmail is optional. Marcus requests only the Google permissions necessary for the Gmail
                functionality described in this policy. When required to maintain a Gmail connection, Marcus may
                securely store authorization credentials, such as access or refresh tokens, that allow the platform to
                perform authorized Gmail actions without requiring you to reconnect each time. These credentials are
                used only for the authorized Gmail functionality described in this policy.
              </p>
              <p className="mt-3">
                When you disconnect Gmail or revoke Marcus’s Google access, Marcus will stop using the authorization to
                send Gmail messages. Authorization credentials maintained solely for the connection will be deleted,
                revoked, disabled, or otherwise made unusable within a reasonable period, subject to limited security,
                backup, fraud-prevention, and legal-retention requirements.
              </p>
              <p className="mt-3">
                The platform connection used to send mail does not request Gmail inbox-reading permission and does not
                read, store, or analyze the personal contents of a private inbox. We do not use Gmail data for
                advertising. You can disconnect Gmail in the platform. You can also revoke Marcus in your Google Account
                settings under Security and third-party access.
              </p>
              <p className="mt-3">
                For Do It for You, use a dedicated job-search mailbox that you own. That mailbox is for job-search
                communications, not your personal inbox. By authorizing that mailbox, you explicitly authorize Marcus
                and Workers assigned to your Case to manage job-search communications in it. Assigned Workers may read
                recruiter and employer replies and manage those threads. Marcus will not use that mailbox for unrelated
                marketing or unrelated communications.
              </p>
              <p className="mt-3">
                If Worker-assisted sending is enabled for your Case, you authorize Marcus and Workers assigned to that
                Case to cause approved job-search outreach to be sent from the mailbox you connected. You may withdraw
                this authorization by disabling Worker-assisted sending, disconnecting the mailbox, revoking Google’s
                authorization, or closing the applicable Case, subject to messages already transmitted. Marcus may
                require an additional confirmation before Worker-assisted sending is enabled.
              </p>
              <p className="mt-3">
                Our use of information received from Google APIs adheres to the Google API Services User Data Policy,
                including the Limited Use requirements:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>We use Google user data only for the job-search sending described in this policy and as you authorize</li>
                <li>We do not use Google user data for advertising</li>
                <li>We do not sell Google user data</li>
                <li>
                  We do not allow people to read Google user data unless you ask us to, it is needed for security, it is
                  required by law, or the data is aggregated and used internally to operate the service
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">5. The Application Helper</h2>
              <p>
                The Application Helper works in Google Chrome and Microsoft Edge. It loads autofill-safe Application
                Passport fields so you can copy them onto a job application, and it can ask GPT to draft an answer. It
                does not submit the application. Protected demographic attributes are not loaded into the helper.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">6. Providers that process information</h2>
              <p>
                Parts of the job search are performed by service providers. When you ask for a draft, resume help, a job
                search, or contact research, the information needed for that task can be sent to the provider that
                performs it. Review anything they produce before you use it on an application or in an email.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>OpenAI (GPT).</strong> Drafts application answers, outreach, and job-search research from the
                  career information supplied for that request. Do not enter Social Security numbers, government
                  identification numbers, banking information, passwords, medical information, or other highly sensitive
                  information into GPT prompts unless Marcus expressly instructs you that the information is necessary
                  and provides an approved method for doing so.
                </li>
                <li><strong>Stripe.</strong> Processes subscriptions and one-time payments and handles the card number.</li>
                <li>
                  <strong>Google.</strong> Sends the email you or your Worker choose to send from the Gmail account you
                  connect, and returns that account’s email address. Marcus may also store the authorization credentials
                  described above so the connection can continue.
                </li>
                <li>
                  <strong>Job search.</strong> Your saved role and location are sent to a job-listing search provider so
                  Marcus can return individual postings.
                </li>
                <li>
                  <strong>Professional email lookup.</strong> A Target Company domain and a professional name may be
                  sent to an email-finding provider. An address that is inferred, predicted, pattern-based, or otherwise
                  unverified should not be treated as independently confirmed.
                </li>
                <li>
                  <strong>Hosting and account email.</strong> Sign-in, Case records, and resume files are stored with
                  our database host. Invite and account email may be sent by an email delivery provider.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">7. Data sharing</h2>
              <p>We do not sell, rent, or trade your personal information. We share information with:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>The providers above, only as needed to deliver the service</li>
                <li>An assigned Worker, platform administrator, or Sponsor User, as described in this policy</li>
                <li>A recipient of outreach you or your Worker choose to send</li>
                <li>Authorities or advisors when the law requires it, or when it is needed to protect our rights or users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">8. Storage and security</h2>
              <p>
                The platform is served over HTTPS. Sign-in is required for Case information, and access is limited to
                the people authorized for that Case. No method of storage or transmission is perfectly secure. Use a
                unique password for your Marcus account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">9. How long we keep information</h2>
              <p>
                We keep Case information while the account or service is active and for a reasonable period afterward to
                complete the engagement, meet legal duties, and resolve disputes. You may request deletion by emailing{" "}
                {CONTACT_EMAIL}. We may retain records we are required to keep, such as payment records, and limited
                security, backup, fraud-prevention, and legal-retention copies of authorization credentials after a
                Gmail disconnection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">10. Your rights</h2>
              <p>Depending on where you live and applicable law, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Ask whether we process personal information about you</li>
                <li>Request access to personal information we maintain about you</li>
                <li>Ask us to correct inaccurate information</li>
                <li>Ask us to delete certain personal information</li>
                <li>Request a portable copy of certain personal information</li>
                <li>Opt out of the sale of personal information, targeted advertising, or qualifying profiling where applicable</li>
                <li>Appeal certain decisions we make regarding a privacy request where applicable</li>
                <li>Disconnect Gmail or revoke Marcus’s access through your Google Account</li>
                <li>Stop using the platform and cancel a subscription through Manage billing</li>
              </ul>
              <p className="mt-3">
                Marcus does not currently sell personal information or use personal information for targeted
                advertising.
              </p>
              <p className="mt-3">
                You may submit a privacy request by emailing {CONTACT_EMAIL}. We may take reasonable steps to verify
                your identity before completing a request. If applicable law gives you a right to appeal our response to
                a privacy request, you may submit an appeal to the same email address with the subject line “Privacy
                Appeal.”
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">11. Cookies</h2>
              <p>
                The platform uses essential cookies to keep you signed in. We do not use advertising cookies or
                analytics cookies on the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">12. Changes to this policy</h2>
              <p>
                We may update this Privacy Policy. We will post the updated policy on this page and change the “Last
                updated” date. If a change is material, we may also provide notice by email, through the platform, or by
                another reasonable method.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-2">13. Contact us</h2>
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
                <br />
                Platform:{" "}
                <a href="https://app.marcusfacilities.com/" className="text-primary hover:underline font-semibold">
                  app.marcusfacilities.com
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
