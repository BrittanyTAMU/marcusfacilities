const outcomes = [
  "Get unstuck and build momentum",
  "Turn self-doubt into action",
  "You're more qualified than you think",
];

export function ImposterCareer() {
  return (
    <section className="py-16 lg:py-20 bg-blush" aria-labelledby="imposter-heading">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative max-w-md mx-auto lg:mx-0 w-full">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted border border-border shadow-sm">
              <img
                src="/images/imposter-uncertain.jpg?v=2"
                alt="Professional looking stressed and uncertain — the weight of imposter syndrome"
                className="w-full h-full object-cover object-[center_35%]"
                loading="eager"
                width={800}
                height={1000}
              />
            </div>
          </div>

          <div>
            <h2 id="imposter-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Imposter syndrome is real.
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Second-guessing yourself is part of the search. We&apos;ll believe in you, encourage you, and help
              you move anyway with a clear process, steady outreach, and someone in your corner. Let the
              employer tell you you&apos;re not qualified and we&apos;ll help you prove them wrong. Let&apos;s get you
              the job you deserve.
            </p>
            <ul className="space-y-4">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground text-lg">
                  <span className="text-success font-bold text-xl leading-none mt-0.5" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
