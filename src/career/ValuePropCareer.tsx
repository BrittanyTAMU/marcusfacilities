const portraits = [
  {
    caption: "Same responsibilities. A brighter future.",
    // Diverse professional stock — replace with licensed photos later
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80",
    alt: "Professional woman smiling at work",
  },
  {
    caption: "More opportunities. Less stress.",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80",
    alt: "Professional man outdoors",
  },
  {
    caption: "Keep living your life. We'll handle the rest.",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&q=80",
    alt: "Professional woman looking thoughtful",
  },
];

export function ValuePropCareer() {
  return (
    <section className="py-16 lg:py-20 bg-background" aria-labelledby="value-heading">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <h2
          id="value-heading"
          className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center max-w-2xl mx-auto mb-12"
        >
          Job searching is a second job.
          <br />
          You already have one.
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {portraits.map((p) => (
            <figure key={p.caption} className="text-center">
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-muted">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={400}
                  height={500}
                />
              </div>
              <figcaption className="font-serif text-base md:text-lg text-foreground leading-snug px-2">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
