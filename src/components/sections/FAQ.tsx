import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqs = [
    {
      question: "Why does Texas get ice instead of snow?",
      answer: "Texas freeze events typically occur when temperatures hover around 32°F (0°C). Rain falls as liquid but freezes on contact with cold surfaces, creating dangerous ice layers. Unlike northern states where snow falls and can be plowed, Texas gets freezing rain that bonds to pavement, making it extremely hazardous and difficult to remove without proper treatment.",
    },
    {
      question: "Why is sand used instead of salt in Texas?",
      answer: "Texas doesn't typically salt roads because freeze events are infrequent and salt can damage vegetation, concrete, and water supplies. Sand provides traction without the environmental concerns. However, for private properties, we use specialized brine solutions and de-icers that are more effective than sand alone while being property-safe.",
    },
    {
      question: "Who is responsible for ice on private property in Texas?",
      answer: "Property owners and managers are legally responsible for maintaining safe conditions on their premises, including during freeze events. This includes parking lots, walkways, stairs, ramps, and entrances. Failure to address hazardous ice conditions can result in slip-and-fall liability claims averaging $30,000–$150,000.",
    },
    {
      question: "Why do HOAs need pre-treatment services?",
      answer: "Pre-treatment is the most effective way to prevent ice formation. Applied before a freeze event, brine solutions prevent the bond between ice and pavement, making any ice that does form much easier to remove. For HOAs, this means safer common areas, fewer liability claims, and faster post-storm recovery.",
    },
    {
      question: "How quickly can you respond to a freeze event?",
      answer: "Seasonal contract customers receive priority response, typically within 2–4 hours of notification. For logistics and industrial clients with Priority SLA agreements, we guarantee response times based on their operational requirements. On-call customers are served based on availability during active freeze events.",
    },
    {
      question: "What areas in Texas do you serve?",
      answer: "We currently serve the Dallas-Fort Worth metroplex and surrounding communities. Contact us to confirm service availability for your specific location.",
    },
    {
      question: "Do you provide documentation for insurance purposes?",
      answer: "Yes. All treatments include timestamped photographs, detailed treatment logs, and weather condition records. This documentation helps protect property owners against slip-and-fall claims by demonstrating proactive hazard mitigation efforts.",
    },
    {
      question: "What's included in seasonal coverage?",
      answer: "Seasonal coverage (November–March) includes: weather monitoring and event prediction, pre-treatment applications before forecasted freeze events, emergency response during active events, post-event inspection and additional treatment if needed, and full documentation for all services performed.",
    },
    {
      question: "Is the brine pet safe?",
      answer: "Yes — the brine we use is considered the most pet-friendly de-icing choice. It's gentler on paws and skin, and it avoids the sharp rock grains that can lodge between pads or cause irritation.",
    },
    {
      question: "Do I need drain covers for the sand?",
      answer: "For most properties, no. However, for properties with sensitive landscaping, water features, native plant buffers, or steep grading near storm drains, we offer optional temporary drain covers to prevent grit or sand from entering waterways during runoff. This is most common for: HOAs with ponds/lakes, Apartment complexes with bioswales, Commercial properties with engineered drainage systems.",
    },
    {
      question: "Do I need sand cleanup?",
      answer: "It prevents sand accumulation, clogged drains, and erosion. It's also solves the visual annoyance factor.",
    },
    {
      question: "Why Not Rock Salt (NaCl)?",
      answer: "Dry rock salt can be: slower acting, easily washed away in rain, more corrosive to concrete and vehicles, more damaging to lawns and pets. Because Texas storms are often wet freeze events, brine performs more reliably on sidewalks, driveways, and shaded areas.",
    },
  ];
  
  export function FAQ() {
    return (
      <section className="py-20 section-alt" id="faq">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about freeze-event safety and our services.
            </p>
          </div>
  
          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
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
  