const focus = [
  "Your experience",
  "Your goals",
  "Your salary target",
  "Your location",
  "Your next move",
];

export function WingmanCareer() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground" aria-labelledby="wingman-heading">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="wingman-heading" className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Not your recruiter.
              <br />
              Your job-search wingman.
            </h2>
            <p className="text-white/85 text-lg leading-relaxed">
              Traditional recruiters work for employers. We work for you. We start with what you want, 
              then we run the behind-the-scenes work so you can keep living your life.
            </p>
          </div>

          <div>
            <ul className="space-y-4 mb-10">
              {focus.map((item) => (
                <li key={item} className="flex items-center gap-3 text-lg text-white">
                  <span className="text-success font-bold text-xl" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-script text-3xl md:text-4xl text-accent leading-snug">
              Your goals. Our focus. Greater possibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
