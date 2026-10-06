import { Search, FileText, Users, MessageSquare, CalendarCheck, Briefcase } from "lucide-react";

const painPoints = [
  {
    title: "You already have one.",
    body: "Maybe you're working full-time. Maybe you're driving Uber while trying to get back into corporate life. Maybe you're unemployed and spending hours every day searching, applying, rewriting resumes, following up, preparing for interviews—and not getting responses.",
  },
  {
    title: "Life doesn't stop.",
    body: "There's still work. Family. Kids. Clients. Sleep. Relationships. The gym. Bills. Everything else.",
  },
];

const weHandle = [
  { icon: Search, title: "Targeted opportunities", text: "Roles that match your experience, goals, location, and compensation—not whatever appears first on a job board." },
  { icon: FileText, title: "Applications that fit", text: "Spend less of your week searching, copying information, tailoring materials, and tracking where you've applied." },
  { icon: Users, title: "People inside the company", text: "We identify relevant people at the companies you're applying to, so you have another way to get noticed." },
  { icon: MessageSquare, title: "Outreach & follow-up", text: "Personalized outreach and follow-ups put a person behind the application." },
  { icon: CalendarCheck, title: "You show up to interviews", text: "That's the part we can't do for you. When the interview comes, you'll know why you applied and why you fit." },
  { icon: Briefcase, title: "You keep living", text: "Keep working. Keep taking care of your family. Keep living your life. We'll help you run the search." },
];

export function ProblemCareer() {
  return (
    <section className="py-20 bg-background" id="problem">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="max-w-3xl mb-14">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">The reality</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Most people aren&apos;t failing the job search.
            <br />
            They&apos;re out of hours.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            {painPoints.map((p) => (
              <div key={p.title}>
                <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
            <p className="text-foreground font-medium">That&apos;s where we come in.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {weHandle.map((item) => (
            <div key={item.title} className="border border-border rounded-lg p-6 bg-card">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
