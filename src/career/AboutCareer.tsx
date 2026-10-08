import { GraduationCap, Cpu, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GET_STARTED_PATH } from "./config";

export function AboutCareer() {
  return (
    <section className="py-20 bg-background" id="about-preview">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <span className="text-sm font-medium text-accent uppercase tracking-wider">About</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
          Hi, I&apos;m Brittany Washington.
        </h2>
        <p className="text-lg text-muted-foreground mb-4">
          I&apos;m a <strong className="text-foreground">3x engineer</strong> (civil, software, and cloud)
          and the founder of Marcus Facilities LLC.
        </p>
        <p className="text-lg text-muted-foreground mb-4">
          Before building this for other people, I built the process for myself. I went through competitive
          job markets where hundreds of people were applying for the same technology roles. Instead of relying
          on recruiters or endlessly clicking Apply, I developed a system around targeted job discovery,
          applications, research, direct outreach, follow-up, and organization.
        </p>
        <p className="text-lg text-muted-foreground mb-4">
          That process helped me consistently generate interviews in 2025—including averaging approximately{" "}
          <strong className="text-foreground">four interviews per month</strong> during a difficult job market.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          Most recruiters say they know how hard it is for job seekers. I was actually once in your shoes—
          and my method worked for me. Then I tested it outside my own industry. It worked there too.
          That&apos;s when I realized: this shouldn&apos;t just be my system. Other people should be able to use it.
        </p>

        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-10">
          <span className="inline-flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-success" aria-hidden="true" />
            Texas A&amp;M University
          </span>
          <span className="inline-flex items-center gap-2">
            <Cpu className="w-4 h-4 text-success" aria-hidden="true" />
            Civil · Software · Cloud
          </span>
          <span className="inline-flex items-center gap-2">
            <Target className="w-4 h-4 text-success" aria-hidden="true" />
            Built from real job-search experience
          </span>
        </div>

        <Button size="lg" variant="accent" asChild>
          <a href={GET_STARTED_PATH}>Work with me</a>
        </Button>
      </div>
    </section>
  );
}
