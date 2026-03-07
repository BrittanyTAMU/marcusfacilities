import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your primary NAICS code?",
    answer: "Our primary NAICS code is 561210 (Facilities Support Services). We also hold secondary NAICS codes: 561720, 561730, 562910, 491110, 492110, 541922, 238220, 561990, and 811192.",
  },
  {
    question: "What certifications do you hold?",
    answer: "We are currently pursuing SBE (Small Business Enterprise) certification in New Jersey and HUB (Historically Underutilized Business) certification in Texas. Status updates are available upon request.",
  },
  {
    question: "What geographic areas do you serve?",
    answer: "We currently serve North Texas (DFW Metroplex) and Northern New Jersey. We can discuss expansion to additional regions based on contract requirements.",
  },
  {
    question: "Do you work as a prime contractor or subcontractor?",
    answer: "We are prepared to work in both capacities. We have experience partnering with prime contractors and are ready to serve as prime contractors when appropriate for contract requirements.",
  },
  {
    question: "What services are included in Facilities Operations?",
    answer: "Our Facilities Operations services include: Janitorial services, Furniture assembly, Snow removal, Pressure washing, Signage installation and maintenance, and Plumbing services.",
  },
  {
    question: "What is USPS HCR/CDS?",
    answer: "HCR (Highway Contract Route) and CDS (Contract Delivery Service) are USPS contracting programs for mail transportation and delivery services. We provide qualified personnel and vehicles for these routes.",
  },
  {
    question: "Do you provide environmental abatement services?",
    answer: "Yes. Our Environmental Services division provides abatement services, weed control, and mowing services. All work is performed in compliance with environmental regulations and includes full documentation.",
  },
  {
    question: "What documentation do you provide?",
    answer: "We provide comprehensive documentation including: Timestamped service logs, Photographic documentation, Compliance reports, Safety certifications, and All records required for government contracting audits.",
  },
  {
    question: "How do I request your Capability Statement?",
    answer: "You can download our Corporate Capability Statement directly from our website, or fill out the contact form to receive it via email. The capability statement includes detailed service descriptions, NAICS codes, certifications, and contracting information.",
  },
  {
    question: "What is your UEI and CAGE code?",
    answer: "Our UEI is 000000000 and our CAGE code is XXXXX. These are listed in our Capability Statement and can be verified in SAM.gov.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 section-alt" id="faq">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Procurement Questions
          </h2>
          <p className="text-lg text-foreground/80">
            Common questions about our services, certifications, and contracting capabilities.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
