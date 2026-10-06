const capabilities = [
  "which job to pursue",
  "whether it's actually still open",
  "whether it's appropriate for this candidate",
  "who to contact",
  "what to say",
  "when to follow up",
  "what already happened at this company",
  "what should happen next",
];

export function MarcusKnowsCareer() {
  return (
    <section className="py-16 lg:py-20 bg-background" id="marcus-knows" aria-labelledby="marcus-knows-heading">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h2
          id="marcus-knows-heading"
          className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight"
        >
          Marcus knows the search so you don&apos;t have to manage all of it.
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Marcus knows which job to pursue, whether it&apos;s actually still open, whether it&apos;s appropriate for
          this candidate, who to contact, what to say, when to follow up, what already happened at this company, and
          what should happen next, without the candidate managing all of it.
        </p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {capabilities.map((item) => (
            <li key={item} className="flex items-start gap-3 text-foreground">
              <span className="text-success font-bold text-lg leading-none mt-0.5" aria-hidden="true">
                ✓
              </span>
              <span className="capitalize">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
