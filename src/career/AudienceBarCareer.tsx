import { Briefcase, Shuffle, Building2, Car, Compass, HandHelping } from "lucide-react";

const segments = [
  { icon: Briefcase, label: "Working full-time" },
  { icon: Shuffle, label: "Changing industries" },
  { icon: Building2, label: "Returning to corporate" },
  { icon: Car, label: "Gig work while searching" },
  { icon: Compass, label: "Looking for something better" },
  { icon: HandHelping, label: "Tired of searching alone" },
];

export function AudienceBarCareer() {
  return (
    <section className="py-10 bg-muted/80 border-y border-border" aria-label="Who Marcus is for">
      <div className="container mx-auto px-4 lg:px-8">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {segments.map((s) => (
            <li key={s.label} className="flex flex-col items-center text-center gap-2">
              <s.icon className="w-5 h-5 text-foreground" aria-hidden="true" />
              <span className="text-xs sm:text-sm text-muted-foreground leading-snug">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
