/** In-browser mock of the MARCUS dashboard — no external image required */
export function PlatformPreview() {
  const stats = [
    { label: "Job Matches", value: "24" },
    { label: "Applications", value: "12" },
    { label: "Outreach Sent", value: "8" },
    { label: "Interviews", value: "5" },
  ];

  const jobs = [
    { role: "Product Manager", company: "Northstar Health", match: "94%" },
    { role: "Operations Analyst", company: "Brightline Logistics", match: "91%" },
    { role: "Customer Success Lead", company: "Harbor Cloud", match: "88%" },
  ];

  return (
    <div className="relative mx-auto max-w-lg" aria-hidden="true">
      {/* Desk props */}
      <div className="absolute -left-4 bottom-8 w-16 h-24 rounded-lg bg-muted border border-border rotate-[-8deg] shadow-sm hidden sm:block" />
      <div className="absolute -right-2 top-10 w-10 h-16 rounded-md bg-primary/90 rotate-6 shadow-md hidden sm:block" />
      <div className="absolute right-8 -bottom-2 w-14 h-14 rounded-full border-4 border-border bg-card shadow-sm hidden sm:block" />

      {/* Laptop shell */}
      <div className="relative z-10 rounded-xl border border-border bg-primary shadow-2xl overflow-hidden">
        <div className="bg-primary px-3 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <div className="flex-1 text-center text-[10px] text-white/50 font-medium tracking-wide">
            MARCUS · Your search
          </div>
        </div>
        <div className="bg-[#F9F6F0] p-4 sm:p-5">
          <p className="font-serif text-sm font-semibold text-foreground mb-3">Your search at a glance</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg bg-white border border-border/80 px-3 py-2">
                <div className="text-lg font-bold text-foreground leading-none">{s.value}</div>
                <div className="text-[10px] text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs font-semibold text-foreground mb-2">Recent Job Matches</p>
          <ul className="space-y-2">
            {jobs.map((j) => (
              <li
                key={j.role}
                className="flex items-center justify-between rounded-md bg-white border border-border/80 px-3 py-2"
              >
                <div>
                  <div className="text-xs font-semibold text-foreground">{j.role}</div>
                  <div className="text-[10px] text-muted-foreground">{j.company}</div>
                </div>
                <span className="text-[10px] font-bold text-success">{j.match}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto h-2 w-[92%] rounded-b-lg bg-primary/80" />
      <div className="mx-auto h-1.5 w-1/3 rounded-b-md bg-primary/50" />
    </div>
  );
}
