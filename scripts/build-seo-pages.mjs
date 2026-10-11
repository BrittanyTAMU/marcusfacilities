import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pages } from "./seo-copy.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const site = "https://www.marcusfacilities.com";
const start = "https://app.marcusfacilities.com/login";

const pageImages = {
  "job-search-after-layoff": [
    {
      src: "/help/layoff-stress.jpg",
      alt: "A stressed person sitting on a couch with their head in their hands, in a messy living room with laundry piled up and mail scattered on the table.",
      beforeHeading: "What we help with",
    },
  ],
  "job-search-while-on-a-pip": [
    {
      src: "/help/pip-office.jpg",
      alt: "An employee sitting across from a manager in the manager's office, with a tall stack of paperwork on the desk.",
      beforeHeading: "You can search without your employer knowing.",
    },
  ],
  "find-a-second-job": [
    {
      src: "/help/second-job-desk.jpg",
      alt: "A worker at their main job, stressed behind tall stacks of paperwork and looking like they are missing a deadline.",
      beforeHeading: "Looking for extra money? Start with what actually fits your life.",
    },
    {
      src: "/help/second-job-night.jpg",
      alt: "The same worker later at night, still in work clothes, exhausted at a kitchen table with a laptop.",
      beforeHeading: "Your free time should still be free sometimes.",
      narrow: true,
      width: 1200,
      height: 900,
    },
  ],
  "job-search-help-for-veterans": [
    {
      src: "/help/veterans-stress.jpg",
      alt: "A stressed man sitting alone at a kitchen table, looking worried.",
      place: "after-h1",
    },
  ],
  "outplacement-services": [
    {
      src: "/help/outplacement-meeting.jpg",
      alt: "An employee in a quiet meeting with two managers, with a cardboard box on the floor beside the chair.",
      beforeHeading: "Your company pays. The employee gets the support.",
    },
    {
      src: "/help/outplacement-box.jpg",
      alt: "An employee packing a desk into a cardboard box while coworkers stand in the background.",
      beforeHeading: "If people have to leave, help them land somewhere else.",
      narrow: true,
      width: 1200,
      height: 900,
    },
  ],
  "layoff-warn-outplacement": [
    {
      src: "/help/warn.jpg",
      alt: "Coworkers in a bright office listening during a calm conversation about a workforce change.",
      beforeHeading: "Don't wait until the last day.",
    },
  ],
  "workforce-development-services": [
    {
      src: "/help/workforce-office.jpg",
      alt: "A job seeker looking uncertain while sitting across from an advisor in a plain workforce office.",
      beforeHeading: "Marcus does not replace your workforce program.",
    },
  ],
  "sponsored-job-search-services": [
    {
      src: "/help/sponsors-kitchen.jpg",
      alt: "An older adult helping a stressed younger adult go through bills and a laptop at a cluttered kitchen table.",
      beforeHeading: "The sponsor pays. The job seeker keeps their own account.",
    },
  ],
  faq: [
    {
      src: "/help/faq-question.jpg",
      alt: "A person paused at a laptop, looking puzzled over a question, with a notebook open beside them.",
      afterFaq: 4,
    },
  ],
};

const nav = [
  ["Laid off", "/job-search-after-layoff/"],
  ["On a PIP", "/job-search-while-on-a-pip/"],
  ["Need a Second Job", "/find-a-second-job/"],
  ["Veterans", "/job-search-help-for-veterans/"],
  ["Employers", "/outplacement-services/"],
  ["Layoffs / WARN", "/layoff-warn-outplacement/"],
  ["Workforce Programs", "/workforce-development-services/"],
  ["Sponsors / Nonprofits", "/sponsored-job-search-services/"],
  ["WARN support", "/warn-layoff-support/"],
  ["FAQ", "/faq/"],
];

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function safeHref(href) {
  if (/^(https:\/\/|mailto:)/.test(href)) return esc(href);
  if (href.startsWith("/") && !/[\s"'<>]/.test(href)) return esc(href);
  return "#";
}

function inline(value) {
  const re = /\*\*\[([^\]]+)\]\(([^)]+)\)\*\*|\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let html = "";
  for (const match of value.matchAll(re)) {
    html += esc(value.slice(last, match.index));
    if (match[1]) {
      html += `<strong><a href="${safeHref(match[2])}">${esc(match[1])}</a></strong>`;
    } else if (match[3]) {
      html += `<a href="${safeHref(match[4])}">${esc(match[3])}</a>`;
    } else {
      html += `<strong>${esc(match[5])}</strong>`;
    }
    last = match.index + match[0].length;
  }
  html += esc(value.slice(last));
  return html;
}

function paragraphs(value) {
  const list = Array.isArray(value) ? value : [value];
  return list.map((item) => `<p>${inline(item)}</p>`).join("\n        ");
}

function figureHtml(image) {
  const narrow = image.narrow ? " narrow" : "";
  const width = image.width ?? 1200;
  const height = image.height ?? 675;
  return `<figure class="page-figure${narrow}">
        <img src="${esc(image.src)}" alt="${esc(image.alt)}" width="${width}" height="${height}" />
      </figure>`;
}

function figuresFor(images, match) {
  return images.filter(match).map(figureHtml).join("\n      ");
}

function blocks(list, images = []) {
  return (list ?? [])
    .map((block) => {
      const before = block.h2 ? figuresFor(images, (image) => image.beforeHeading === block.h2) : "";
      let body = "";
      if (block.h2) body = `<h2>${inline(block.h2)}</h2>`;
      else if (block.p) body = `<p>${inline(block.p)}</p>`;
      else if (block.ul) body = `<ul>${block.ul.map((item) => `<li>${inline(item)}</li>`).join("")}</ul>`;
      else if (block.cta) {
        body = `<p class="cta-row"><a class="cta" href="${safeHref(block.cta.href)}">${esc(block.cta.label)}</a></p>`;
      }
      return before ? `${before}\n      ${body}` : body;
    })
    .join("\n      ");
}

function plain(value) {
  return String(value)
    .replace(/\*\*\[([^\]]+)\]\([^)]+\)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1");
}

function pageHtml(page) {
  const url = `${site}/${page.slug}/`;
  const navHtml = nav
    .map(([label, href]) => {
      const current = href === `/${page.slug}/` ? ' aria-current="page"' : "";
      return `<a href="${href}"${current}>${esc(label)}</a>`;
    })
    .join("\n          ");
  const images = pageImages[page.slug] ?? [];
  const leadFigure = figuresFor(images, (image) => image.place === "after-h1");
  const lede = (page.lede ?? []).map((item) => `<p class="lede">${inline(item)}</p>`).join("\n      ");
  const topCta = page.cta
    ? `<p class="cta-row"><a class="cta" href="${safeHref(page.cta.href)}">${esc(page.cta.label)}</a></p>`
    : "";
  const faqs = page.faqs
    .map(([question, answer], index) => {
      const card = `<article class="card"><h3>${inline(question)}</h3>${paragraphs(answer)}</article>`;
      const after = figuresFor(images, (image) => image.afterFaq === index);
      return after ? `${card}\n      ${after}` : card;
    })
    .join("\n      ");
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: plain(question),
      acceptedAnswer: {
        "@type": "Answer",
        text: (Array.isArray(answer) ? answer : [answer]).map(plain).join(" "),
      },
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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Fraunces:opsz,wght@9..144,600;9..144,700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/seo.css" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
  </head>
  <body>
    <header class="site-header">
      <div class="bar">
        <a class="brand" href="/">
          <img src="/marcus-oauth-logo.png" width="40" height="40" alt="" />
          <span>
            <span class="brand-name">MARCUS</span>
            <span class="brand-sub">Marcus Reemployment</span>
          </span>
        </a>
        <a class="cta" href="${start}">Get Started</a>
      </div>
      <nav class="help-row" aria-label="Who we help">
          ${navHtml}
      </nav>
    </header>
    <main class="wrap">
      <article class="prose">
      <p class="eyebrow">${esc(page.eyebrow)}</p>
      <h1>${inline(page.h1)}</h1>
      ${leadFigure}
      ${lede}
      ${topCta}
      ${blocks(page.blocks, images)}
      ${page.questionsTitle ? `<h2>${inline(page.questionsTitle)}</h2>` : ""}
      ${faqs}
      ${blocks(page.after, images)}
      <footer>
        <p>Marcus Reemployment is operated by Marcus Facilities LLC. We help with the search. We do not guarantee a job.</p>
        <p><a href="mailto:sales@marcusfacilities.com">sales@marcusfacilities.com</a> · <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a></p>
      </footer>
      </article>
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

const sitemapUrls = [`${site}/`, ...pages.map((page) => `${site}/${page.slug}/`), `${site}/privacy/`, `${site}/terms/`];
const lastmod = "2026-10-10";
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map((loc) => {
    const home = loc === `${site}/`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${home ? "weekly" : "monthly"}</changefreq>
    <priority>${home ? "1.0" : "0.8"}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;
writeFileSync(join(root, "sitemap.xml"), sitemap);
console.log(`wrote ${pages.length} pages`);
