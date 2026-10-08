import { ArrowRight, Briefcase, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GET_STARTED_PATH } from "./config";
import { PlatformPreview } from "./PlatformPreview";

const audiences = [
  { icon: Briefcase, label: "For working professionals" },
  { icon: GraduationCap, label: "For students & new grads" },
  { icon: Users, label: "For gig workers & career changers" },
];

export function HeroCareer() {
  return (
    <section className="relative overflow-hidden bg-background pt-10 pb-16 lg:pt-16 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-foreground leading-[1.15] mb-6">
              Keep your day job.
              <br />
              We&apos;ll help you find your next one.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Your job-search wingman. We help you find the right opportunities, manage applications,
              find company contacts, craft outreach, and keep follow-up on track, so you can focus on
              your life and crush the interviews.
            </p>
            <Button variant="accent" size="lg" className="rounded-full px-8 text-base" asChild>
              <a href={GET_STARTED_PATH}>
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </a>
            </Button>

            <ul className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6" aria-label="Who it's for">
              {audiences.map((a) => (
                <li key={a.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <a.icon className="w-4 h-4 text-foreground shrink-0" aria-hidden="true" />
                  <span>{a.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <PlatformPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
