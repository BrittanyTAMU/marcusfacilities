import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GET_STARTED_PATH } from "./config";

const outcomes = [
  "More opportunities",
  "Less manual work",
  "A brighter next chapter",
];

export function FinalCtaCareer() {
  return (
    <section
      id="platform"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&h=900&fit=crop&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
        <h2
          id="final-cta-heading"
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
        >
          Your career can move even when you&apos;re busy.
          <br />
          We&apos;ll help you run the search.
        </h2>
        <Button variant="accent" size="lg" className="rounded-full px-8 text-base mb-10" asChild>
          <Link to={GET_STARTED_PATH}>
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Link>
        </Button>

        <ul className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10">
          {outcomes.map((o) => (
            <li key={o} className="flex items-center justify-center gap-2 text-white">
              <span className="text-success font-bold" aria-hidden="true">
                ✓
              </span>
              <span className="text-sm sm:text-base">{o}</span>
            </li>
          ))}
        </ul>

        <p className="font-script text-3xl md:text-4xl text-accent">
          Same you. A brighter next chapter.
        </p>
      </div>
    </section>
  );
}
