import { GraduationCap, Cpu, MapPin } from "lucide-react";

export function AboutUsV2() {
  return (
    <section className="py-20 bg-section-alt" id="about" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider" id="about-heading">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Led by Technical Excellence
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Marcus Facilities LLC is led by a <strong className="text-foreground">3x engineer</strong>(civil, software, and cloud)and{" "}
            <strong className="text-foreground">Texas A&M University alumna</strong> who brings a rigorous, data-driven approach to management consulting. As a{" "}
            <strong className="text-foreground">minority woman-owned enterprise</strong>, the firm is built on a foundation of technical excellence and a commitment to high-stakes problem-solving.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            With a background rooted in complex engineering systems, our founder translates technical requirements into seamless operational realities, ensuring that every project meets the highest standards of precision and integrity.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We apply a <strong className="text-foreground">systems-engineering approach</strong> to every engagement whether advising on regulatory frameworks, managing facility and asset operations, or aligning teams with industry standards. Our deep roots in the <strong className="text-foreground">Texas infrastructure landscape</strong> and presence in Northern New Jersey position us to deliver results where it matters most.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-primary" />
            Texas A&M University
          </span>
          <span className="inline-flex items-center gap-2">
            <Cpu className="w-4 h-4 text-primary" />
            Civil • Software • Cloud
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            North Texas • Northern New Jersey
          </span>
        </div>
      </div>
    </section>
  );
}
