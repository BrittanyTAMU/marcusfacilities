import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What kinds of organizations do you work with?",
    a: "We work with organizations that need technical advisory, operational support, and compliance alignment. Our approach is tailored to each client’s needs and context.",
  },
  {
    q: "How do you approach complex projects?",
    a: "We use a systems-engineering approach: we clarify requirements, identify constraints, and deliver structured solutions that align with your goals and standards.",
  },
  {
    q: "What geographic areas do you serve?",
    a: "We are based in North Texas (DFW) and Northern New Jersey and serve clients in those regions. Remote or hybrid engagements may be possible depending on scope.",
  },
  {
    q: "How can I request more information or a consultation?",
    a: "Use the Request for Information form on this site or email us directly. We respond within 24 hours and will guide you through next steps.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Yes. We do not sell or share your personal information with third parties. Details are in our Privacy Policy.",
  },
];

export function FAQV2() {
  return (
    <section className="py-20 bg-section-alt" id="faq" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider" id="faq-heading">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Common Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            General information about our approach and how to get in touch.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-foreground">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
