import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const site = "https://www.marcusfacilities.com";
const start = "https://app.marcusfacilities.com/login";
const mail = "mailto:sales@marcusfacilities.com";

const nav = [
  ["Home", "/"],
  ["Laid off", "/job-search-after-layoff/"],
  ["On a PIP", "/job-search-while-on-a-pip/"],
  ["Need a Second Job", "/find-a-second-job/"],
  ["Veterans", "/job-search-help-for-veterans/"],
  ["Employers", "/outplacement-services/"],
  ["Layoffs / WARN", "/layoff-warn-outplacement/"],
  ["Workforce Programs", "/workforce-development-services/"],
  ["Sponsors / Nonprofits", "/sponsored-job-search-services/"],
  ["FAQ", "/faq/"],
];

const pages = [
  {
    slug: "job-search-after-layoff",
    title: "Job Search Help After a Layoff | Marcus",
    description:
      "Got laid off? Marcus helps you get back to work with job search, applications, and outreach while you review every step.",
    eyebrow: "Laid off",
    h1: "Got laid off? We'll help you get back to work.",
    lede: "Need a job? We can help. Don't have time to apply? We can help with your job search.",
    cta: { href: start, label: "Start your job search" },
    sections: [
      {
        h2: "The first weeks after a layoff are a second job",
        paragraphs: [
          "A layoff notice does not come with extra hours. You still have to find open roles, tailor a résumé, fill out applications, and figure out who to contact. Marcus Reemployment, from Marcus Facilities LLC, does that search work with you.",
          "You save one role and one location. Marcus looks for recent public postings. You review them. The Application Helper can copy information you already provided onto an application and draft an answer. You review the form. Marcus does not submit it for you by itself.",
        ],
      },
      {
        h2: "What we help with",
        list: [
          "Finding jobs that match the role and location you saved",
          "Keeping an Application Passport and résumé ready",
          "Drafting application answers for you to review",
          "Looking for named contacts at the company after you apply",
          "Sending outreach from your own Gmail when you choose to send it",
        ],
      },
      {
        h2: "If you want a person to run the search",
        paragraphs: [
          "Starter, Search, and Intensive are for people who want the tools and will submit applications themselves. Do it for you is for people who want a Marcus worker to run the search, applications, and outreach. A person still reviews the work. We do not guarantee a job offer or an interview.",
        ],
      },
    ],
    faqs: [
      ["I got laid off. What should I do next?", "Save the role you want and the city you can work in, then start a search while the notice is still fresh. Marcus can queue recent postings so you are not starting from a blank job board."],
      ["Can you help me find a job after a layoff?", "Yes. Marcus helps with the search, the applications, and the follow-up. You review jobs and drafts before they are used."],
      ["Can someone apply to jobs for me?", "On Do it for you, a Marcus worker can help complete applications by hand. The software does not submit an application on its own. On the other plans, you submit on the employer site after Marcus helps you prepare."],
    ],
  },
  {
    slug: "job-search-while-on-a-pip",
    title: "Job Search While on a PIP | Marcus",
    description:
      "Got put on a PIP? Start a private job search now. Marcus helps you look for the next job while you are still employed.",
    eyebrow: "On a PIP",
    h1: "Got put on a PIP? Start your job search now.",
    lede: "If you were put on a performance improvement plan, the useful question is not what the letters mean. It is whether you should be looking for another job while you still have this one.",
    cta: { href: start, label: "Start a search while you are employed" },
    sections: [
      {
        h2: "A PIP is a reason to look, not a definition to study",
        paragraphs: [
          "People search “got put on a PIP,” “should I look for a job while on a PIP,” “what to do after getting a PIP,” and “can I get fired after a PIP” because the plan already feels like a warning. Marcus is not your employment lawyer and does not tell you to quit. A PIP can end in improvement, a transfer, or a firing. Starting a search while you are still employed keeps the next step in your hands.",
          "You can look without posting that you are looking. Marcus uses the role and location you save. You decide which jobs to open. Nothing is submitted until a person reviews it.",
        ],
      },
      {
        h2: "You do not have evenings to spare",
        paragraphs: [
          "A PIP usually adds meetings and documentation on top of the regular job. That is the same problem as any search you do not have time to run. Marcus can find postings, help with application answers, and prepare outreach. You keep working. The search does not have to wait until the plan ends.",
        ],
      },
    ],
    faqs: [
      ["Should I look for a job while on a PIP?", "Many people do. A PIP is a signal to prepare the next role while you still have income. Marcus can run the search beside the job you have now."],
      ["What should I do after getting a PIP?", "Read the plan, keep records, and start a job search you control. Marcus helps with roles, applications, and contacts. We do not replace advice from an employment lawyer."],
      ["Can I get fired after a PIP?", "Yes, some people are fired after a PIP, and some are not. Marcus does not predict your employer’s decision. The search is there so a firing is not the first day you start looking."],
      ["I’m on a PIP. Should I start looking for another job?", "If you want another option, yes. You can search now and still finish the plan at your current job."],
    ],
  },
  {
    slug: "find-a-second-job",
    title: "Find a Second Job | Marcus",
    description:
      "Need a second job or more money? Marcus helps you find the next opportunity when you do not have time to apply.",
    eyebrow: "Need a second job",
    h1: "Need a second job or more money? We'll help you find your next opportunity.",
    lede: "Need a job? We can help. Don't have time to apply? We can help with your job search.",
    cta: { href: start, label: "Find a second job" },
    sections: [
      {
        h2: "A second job search has to fit around the first job",
        paragraphs: [
          "You already work. The applications still ask for the same résumé, the same forms, and the same follow-up. Marcus is built for that squeeze. You keep the job you have. We help you look for the extra role, the better role, or the one that replaces a shift you cannot keep.",
          "You pick one target role and one location. Marcus queues recent postings. You review them when you have a break, not after a three-hour scroll.",
        ],
      },
      {
        h2: "Help with the applications, not another chore",
        paragraphs: [
          "The Application Helper, in Chrome or Edge, can copy Application Passport fields onto a form and draft an answer. You check it. Marcus never submits the form by itself. If you want a worker to carry more of the search, Do it for you is the plan for that.",
        ],
      },
    ],
    faqs: [
      ["Can you help me find a second job?", "Yes. Tell Marcus the role and the place you can work. The search runs around the job you already have."],
      ["Can someone help me apply for jobs because I don’t have time?", "Yes. Marcus prepares the search and the application drafts. You review them. A worker can help more directly on Do it for you. The software does not click submit."],
      ["Need more money. Can this find extra work?", "It can look for another role that matches what you saved. It does not promise a wage, a schedule, or an offer."],
    ],
  },
  {
    slug: "job-search-help-for-veterans",
    title: "Job Search Help for Veterans | Marcus",
    description:
      "Job search help for veterans who need civilian roles, application help, and follow-up without spending every night on job boards.",
    eyebrow: "Veterans",
    h1: "Job search help for veterans",
    lede: "Need a job after service? We can help you look, apply, and follow up.",
    cta: { href: start, label: "Start a veteran job search" },
    sections: [
      {
        h2: "Civilian applications do not read like a service record",
        paragraphs: [
          "A veteran can have the skills and still lose hours translating a record into a résumé, a form, and a short answer. Marcus helps with that translation in the materials you upload and the role you want next. We search public postings for that role and location.",
          "Marcus is not a government veterans program and does not replace VA benefits or a veterans employment representative. It is job-search help: roles, applications, contacts, and outreach you review.",
        ],
      },
      {
        h2: "A program can sponsor the search",
        paragraphs: [
          "A veteran can pay for a plan, or a workforce program, nonprofit, or employer can sponsor the Case. The veteran still has their own login. A sponsor sees program progress, not the private Application Passport.",
        ],
      },
    ],
    faqs: [
      ["Do you help veterans find jobs?", "Yes. Veterans use the same search: one role, one location, help with applications, and follow-up. We do not guarantee a placement."],
      ["Can a veterans program pay for this?", "Yes. A nonprofit, workforce program, or other sponsor can fund the Case. Ask us at sales@marcusfacilities.com."],
      ["Will you submit applications without me?", "No. You review the application. The helper does not submit it. On Do it for you, a person can help apply, and you still see the work."],
    ],
  },
  {
    slug: "outplacement-services",
    title: "Outplacement Services for Companies | Marcus",
    description:
      "Outplacement and reemployment services for companies going through layoffs, WARN notices, reductions in force, and workforce changes.",
    eyebrow: "Employers",
    h1: "Outplacement services",
    lede: "Outplacement and reemployment services for companies going through layoffs, WARN notices, reductions in force, and workforce changes.",
    cta: { href: mail, label: "Talk about outplacement" },
    sections: [
      {
        h2: "This is support for the people leaving, paid by the company",
        paragraphs: [
          "Marcus works for the job seeker. When a company buys outplacement, the company is paying so affected employees get job-search help. Marcus does not recruit for the employer, and employers do not pay a placement fee when someone is hired elsewhere.",
          "Affected people get help finding roles, preparing applications, and following up. They review their own materials. Marcus does not promise that every person will be hired.",
        ],
      },
      {
        h2: "What a company can offer employees",
        list: [
          "Job search for the role and location each person needs",
          "Résumé and application help",
          "Contact research and outreach from the employee’s own mailbox when they connect it",
          "A worker-run search on Do it for you when the company wants that level of support",
          "Sponsor reporting on progress, without handing over private application details",
        ],
      },
    ],
    faqs: [
      ["Do you offer outplacement services for companies?", "Yes. Companies use Marcus as outplacement and reemployment support during layoffs, WARN events, and other workforce changes."],
      ["Is this reverse recruiting?", "Job seekers sometimes use that phrase because Marcus works for them, not for the hiring company. For an employer, the service to buy is outplacement."],
      ["Do you charge the employer when someone gets a job?", "No. The company pays for the service. There is no success fee from the next employer."],
    ],
  },
  {
    slug: "layoff-warn-outplacement",
    title: "Layoff and WARN Outplacement Services | Marcus",
    description:
      "Reemployment and job-search support for workers named in a layoff or WARN notice. For employers, HR, and workforce partners.",
    eyebrow: "Layoffs / WARN",
    h1: "Layoff and WARN outplacement services",
    lede: "If your company has a layoff or a WARN notice, Marcus provides reemployment and job-search support for the affected workers.",
    cta: { href: mail, label: "Ask about a WARN layoff" },
    sections: [
      {
        h2: "A WARN notice is a reason to call, in plain language",
        paragraphs: [
          "The useful email is: “I saw your WARN notice. Marcus provides reemployment and job-search support for affected workers.” That is clearer than calling Marcus a reverse recruiting company.",
          "Public layoff and WARN programs talk about rapid response, job search, and reemployment for the people who are leaving. Marcus can be the job-search support a company or a workforce partner offers those workers. Marcus is not a government rapid-response agency.",
        ],
      },
      {
        h2: "For the workers on the notice",
        paragraphs: [
          "Got laid off in a group layoff? We can help you look for the next job, prepare applications, and follow up. You can also start on your own if the company has not set up outplacement yet.",
        ],
      },
    ],
    faqs: [
      ["Do you help people after a WARN notice or mass layoff?", "Yes. Marcus helps the affected workers search, apply, and follow up. A company or workforce partner can sponsor that help."],
      ["Do you offer outplacement after a reduction in force?", "Yes. Layoffs, reductions in force, and WARN events are the situations this page is for."],
      ["Can I email a company that filed a WARN notice?", "Yes. Lead with the notice and the help for their workers. The address for that conversation is sales@marcusfacilities.com."],
    ],
  },
  {
    slug: "workforce-development-services",
    title: "Reemployment and Workforce Development Services | Marcus",
    description:
      "Help dislocated workers, laid-off employees, veterans, and other job seekers get back to work faster.",
    eyebrow: "Workforce programs",
    h1: "Reemployment and workforce development services",
    lede: "Help dislocated workers, laid-off employees, veterans, and other job seekers get back to work faster.",
    cta: { href: mail, label: "Talk with a workforce partner" },
    sections: [
      {
        h2: "Use the words workforce programs already use",
        paragraphs: [
          "Workforce boards and partner programs serve dislocated workers. The help those workers need is job search, résumé help, and reemployment assistance. That is the work Marcus does.",
          "Marcus can sit beside a program as the tool and the optional worker support for people the program is already serving. The job seeker has their own account. The program can sponsor the Case and see progress.",
        ],
      },
      {
        h2: "What the participant gets",
        list: [
          "A search for one saved role and one saved location",
          "Application help they review before anything is submitted",
          "Contact research and outreach they control",
          "A record the sponsor can monitor without seeing private passport fields",
        ],
      },
    ],
    faqs: [
      ["Do you work with workforce development programs?", "Yes. Programs can sponsor participants and follow progress while each person keeps their own login."],
      ["Do you help dislocated workers?", "Yes. Laid-off employees, veterans, and other job seekers can use Marcus for job search and reemployment help."],
      ["Do you replace the local workforce center?", "No. Marcus is an added job-search service a program can offer. It is not a government workforce agency."],
    ],
  },
  {
    slug: "sponsored-job-search-services",
    title: "Sponsored Job Search Services | Marcus",
    description:
      "Nonprofits, schools, and workforce programs can sponsor a person’s job search. The participant keeps their own account.",
    eyebrow: "Sponsors / nonprofits",
    h1: "Sponsored job search services",
    lede: "A nonprofit, school, church, workforce program, or employer can pay for someone’s search. The job seeker still owns the account.",
    cta: { href: mail, label: "Sponsor a job seeker" },
    sections: [
      {
        h2: "Sponsorship is funding and visibility, not a shared password",
        paragraphs: [
          "Marcus calls the paying organization a Sponsor Organization. A Sponsor User can see the progress Marcus makes available for that program: name, case status, employers or roles in the search, application status and dates, and outcome information the program needs.",
          "Sponsor users do not get the private Application Passport. The participant, and any Marcus worker assigned to them, does the search.",
        ],
      },
      {
        h2: "Who this is for",
        list: [
          "Nonprofits helping people return to work",
          "Workforce and reemployment programs",
          "Schools and training programs placing graduates",
          "Employers offering outplacement to people who are leaving",
        ],
      },
    ],
    faqs: [
      ["Can nonprofits or workforce programs sponsor job seekers?", "Yes. The organization funds the Case. Each person signs in separately."],
      ["What can a sponsor see?", "Program progress such as status, roles, application dates, and outcomes. Private application details stay with the participant and the people working that Case."],
      ["Can a single parent be sponsored?", "Yes. A sponsor can fund anyone the program serves, including a parent who does not have time to run a search alone."],
    ],
  },
  {
    slug: "faq",
    title: "Job Search FAQ | Marcus",
    description:
      "Answers to common searches: laid off, on a PIP, second job, veterans, outplacement, WARN notices, and sponsored job search.",
    eyebrow: "FAQ",
    h1: "Questions people ask before they start",
    lede: "Need a job? We can help. These are the situations Marcus is built for.",
    cta: { href: start, label: "Get started" },
    sections: [
      {
        h2: "Marcus in one paragraph",
        paragraphs: [
          "Marcus Reemployment helps a person find jobs, prepare applications, and follow up. You review the work. The Application Helper does not submit forms. Companies buy this as outplacement. Workforce programs and nonprofits can sponsor a person’s search. We do not guarantee a job.",
        ],
      },
    ],
    faqs: [
      ["Can someone apply to jobs for me?", "On Do it for you, a Marcus worker can help complete applications. The software never submits a form by itself. On Starter, Search, and Intensive, you submit on the employer site after Marcus helps you prepare. See the layoff page for how that search starts."],
      ["I got laid off. What should I do next?", "Start the search while you still remember the work you want next. Save a role and a location, then review the jobs Marcus finds. The full page is Job search help after a layoff."],
      ["Can you help me find a job after a layoff?", "Yes. Marcus helps with the search, applications, and follow-up. You review each step."],
      ["I’m on a PIP. Should I start looking for another job?", "If you want a next option, yes. You can search while you are still employed. Read Job search while on a PIP."],
      ["Can someone help me apply for jobs because I don’t have time?", "Yes. That is the reason the search and the helper exist. You still review what goes on the application."],
      ["Can you help me find a second job?", "Yes. Keep the job you have and look for the next one. See Find a second job."],
      ["What is a reverse recruiter?", "It is a phrase for someone who works for the job seeker instead of for the hiring company. Marcus does that job-search work. When a company is the buyer, call it outplacement, not reverse recruiting."],
      ["What is a job application service?", "A service that helps you find roles and get applications ready. Marcus does that. A person reviews the application before it is sent. Marcus does not auto-submit."],
      ["Do you help veterans find jobs?", "Yes. Veterans get the same search help: roles, applications, and follow-up. See Job search help for veterans."],
      ["Do you help single parents find jobs?", "Yes. The search is for people who are working or caring for a family and do not have spare hours to apply. A nonprofit can also sponsor that search."],
      ["Do you help people after a WARN notice or mass layoff?", "Yes. Workers can start a search, and the company can offer Marcus as outplacement. See Layoff and WARN outplacement."],
      ["Do you offer outplacement services for companies?", "Yes. That is the service for layoffs, WARN notices, and other workforce changes. See Outplacement services."],
      ["Do you work with workforce development programs?", "Yes. Programs can sponsor dislocated workers and other job seekers. See Workforce development services."],
      ["Can nonprofits or workforce programs sponsor job seekers?", "Yes. The organization pays. The job seeker keeps their own login. See Sponsored job search services."],
    ],
  },
];

function esc(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pageHtml(page) {
  const url = `${site}/${page.slug}/`;
  const navHtml = nav
    .map(([label, href]) => {
      const current = href === `/${page.slug}/` ? ' aria-current="page"' : "";
      return `<a href="${href}"${current}>${esc(label)}</a>`;
    })
    .join("\n        ");
  const sections = page.sections
    .map((section) => {
      const paras = (section.paragraphs ?? []).map((p) => `<p>${esc(p)}</p>`).join("\n      ");
      const list = section.list
        ? `<ul>${section.list.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`
        : "";
      return `<h2>${esc(section.h2)}</h2>\n      ${paras}\n      ${list}`;
    })
    .join("\n      ");
  const faqs = page.faqs
    .map(
      ([q, a]) => `<article class="card"><h3>${esc(q)}</h3><p>${esc(a)}</p></article>`,
    )
    .join("\n      ");
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(page.title)}</title>
    <meta name="description" content="${esc(page.description)}" />
    <link rel="canonical" href="${url}" />
    <link rel="stylesheet" href="/seo.css" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
  </head>
  <body>
    <main class="wrap">
      <p><img src="/marcus-oauth-logo.png" width="48" height="48" alt="Marcus Reemployment" /></p>
      <nav class="nav" aria-label="Who we help">
        ${navHtml}
      </nav>
      <p class="eyebrow">${esc(page.eyebrow)}</p>
      <h1>${esc(page.h1)}</h1>
      <p class="lede">${esc(page.lede)}</p>
      <p><a class="cta" href="${page.cta.href}">${esc(page.cta.label)}</a></p>
      ${sections}
      <h2>Questions</h2>
      ${faqs}
      <footer>
        <p>Marcus Reemployment is operated by Marcus Facilities LLC. We help with the search. We do not guarantee a job.</p>
        <p><a href="mailto:sales@marcusfacilities.com">sales@marcusfacilities.com</a> · <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a></p>
      </footer>
    </main>
  </body>
</html>
`;
}

for (const page of pages) {
  const dir = join(root, page.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), pageHtml(page));
}

const sitemapUrls = [
  `${site}/`,
  ...pages.map((page) => `${site}/${page.slug}/`),
  `${site}/privacy/`,
  `${site}/terms/`,
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (loc) => `  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>${loc.endsWith("/") && loc.split("/").length < 5 ? "0.8" : "0.6"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
writeFileSync(join(root, "sitemap.xml"), sitemap.replace(
  `<loc>${site}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>`,
  `<loc>${site}/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>`,
));
console.log(`wrote ${pages.length} pages`);
