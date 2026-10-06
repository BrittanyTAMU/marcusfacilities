const outcomes = [
  "More opportunities pursued",
  "Less time spent searching",
  "A consistent outreach process",
  "You stay focused on interviews",
];

export function OutcomesCareer() {
  return (
    <section className="py-16 bg-background" id="outcomes" aria-labelledby="outcomes-heading">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h2 id="outcomes-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          What you get
        </h2>
        <ul className="space-y-4">
          {outcomes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-foreground">
              <span className="text-success font-bold text-xl leading-none mt-0.5" aria-hidden="true">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
