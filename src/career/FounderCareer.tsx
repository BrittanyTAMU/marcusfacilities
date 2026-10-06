import { Cpu, HeartHandshake, Rocket } from "lucide-react";

const journey = [
  { icon: Cpu, label: "3x Engineer" },
  { icon: HeartHandshake, label: "Job Search Advocate" },
  { icon: Rocket, label: "Founder, Marcus Facilites LLC" },
];

export function FounderCareer() {
  return (
    <section className="py-16 lg:py-24 bg-background" id="about-preview" aria-labelledby="founder-heading">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="shrink-0 w-40 h-52 sm:w-52 sm:h-64 rounded-2xl overflow-hidden bg-muted shadow-sm">
              <img
                src="/images/founder-brittany.jpg?v=2"
                alt="Brittany Washington, founder of Marcus Facilities LLC, at Texas A&M graduation"
                className="w-full h-full object-cover object-[48%_88%]"
                width={208}
                height={256}
              />
            </div>
            <div>
              <h2 id="founder-heading" className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Built from a real job search, not a recruiting playbook.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hi, I&apos;m Brittany Washington, a 3x engineer (civil, software, and cloud) and founder of
                Marcus Facilites LLC. Before building this for other people, I built the process for myself in a hard tech
                market. Targeted discovery, applications, research, outreach, follow-up, and organization
                helped me consistently generate interviews, including averaging about four interviews a
                month in 2025.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most recruiters say they know how hard it is. I was once in your shoes, and my method
                worked. Then I tested it outside my own industry. It worked there too. That&apos;s Marcus Facilites LLC (Marcus iOS).
              </p>
            </div>
          </div>

          <aside className="bg-card border border-border rounded-2xl p-6" aria-label="My journey">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-5">My Journey</h3>
            <ul className="space-y-4">
              {journey.map((j) => (
                <li key={j.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center">
                    <j.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <span className="font-medium text-foreground">{j.label}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Texas A&amp;M University · Civil · Software · Cloud
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
