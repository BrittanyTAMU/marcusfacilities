import { Button } from "@/components/ui/button";
import { GET_STARTED_PATH } from "./config";

const audiences = [
  "Working full-time but ready for more money",
  "Trying to change industries",
  "Returning to corporate life",
  "Doing gig work while searching for your next opportunity",
  "Looking for something better without risking your current position",
  "Simply tired of doing the job search alone",
];

export function WhoItsForCareer() {
  return (
    <section className="py-20 bg-section-alt" id="who">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <span className="text-sm font-medium text-accent uppercase tracking-wider">Who it&apos;s for</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
          You don&apos;t need to be unemployed.
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          You don&apos;t need to hate your current job. And you don&apos;t need to spend every night on LinkedIn.
          Wherever you&apos;re starting, we&apos;ll help you keep it moving.
        </p>
        <ul className="space-y-3 mb-10">
          {audiences.map((item) => (
            <li key={item} className="flex items-start gap-3 text-foreground">
              <span className="text-success font-bold" aria-hidden="true">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground mb-8">
          If you feel like you already make the right decision every time and can do this with no help,
          this isn&apos;t the platform for you. For everyone else—opposition is going to arise, and you may
          need someone in your corner. We&apos;ll be there.
        </p>
        <Button size="lg" variant="accent" asChild>
          <a href={GET_STARTED_PATH}>Get Started</a>
        </Button>
      </div>
    </section>
  );
}
