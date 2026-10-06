import { Search, FileText, Users, Send, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "We Find the Jobs",
    text: "Roles matched to your goals, experience, location, and salary, not endless scrolling. This isn't TikTok.",
  },
  {
    icon: FileText,
    title: "We Help With the Applications",
    text: "Tailored materials and submissions so you spend less time copying and pasting.",
  },
  {
    icon: Users,
    title: "We Find the People",
    text: "Hiring managers and warm paths inside the companies you care about.",
  },
  {
    icon: Send,
    title: "We Prepare the Outreach",
    text: "Personalized messages and follow-ups that put a human behind the application.",
  },
  {
    icon: CalendarCheck,
    title: "You Handle the Interview",
    text: "When they want to talk, they talk to you. We'll help you show up ready.",
  },
];

export function HowItWorksCareer() {
  return (
    <section className="py-16 lg:py-24 bg-section-alt" id="how-it-works" aria-labelledby="hiw-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="hiw-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            You show up. We help run the search.
          </h2>
          <p className="text-muted-foreground text-lg">
            A modern, human approach to job search support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {steps.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-full bg-blush flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
