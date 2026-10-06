# Ship Marcus Facilities (career site) to GitHub Pages

## What you’re shipping

- **Marketing site** on `marcusfacilities.com` (this repo → GitHub Pages)
- **Get Started** → same domain: `https://www.marcusfacilities.com/#/start`
- **Pricing** is *not* on the marketing site — it lives inside the platform after signup
- **No** `VITE_PLATFORM_URL` / `VITE_PRICING_URL` needed for the marketing site

## Colors (live brand)

| Role | Hex | Use |
|------|-----|-----|
| Warm ivory | `#F7F2E8` | Main background |
| Coral | `#F36B4F` | CTAs / Get Started |
| Deep green | `#17765A` | Outcomes / checkmarks |
| Charcoal | `#1F2933` | Text / primary |

## ADA notes kept

- Base body text 16px
- Visible `:focus-visible` rings
- Labels on form inputs
- `aria-label` / `aria-hidden` on icons where needed
- Charcoal on ivory for strong contrast

## Deploy steps (same as before)

### 1. Commit your work

```powershell
cd c:\Users\18629\Downloads\MarcusFac
git add .
git status
git commit -m "Career wingman site: new palette, Get Started gate, SEO cleanup"
git push origin main
```

### 2. Build + publish to `gh-pages`

```powershell
npm run deploy
```

This runs `npm run build` then pushes `dist/` to the `gh-pages` branch.

### 3. Confirm GitHub Pages settings

1. Repo → **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **`gh-pages`** / folder **Root** → Save

### 4. Custom domain (marcusfacilities.com)

1. In Pages settings, set custom domain to `marcusfacilities.com` (and `www` if you use it)
2. Keep `base: "/"` in `vite.config.ts` (already set for a custom domain)
3. DNS should point to GitHub Pages (A/CNAME records as you already had)

### 5. Kill old Google snippets (freeze / gov)

Already done in code:

- New career title/description in `index.html`
- `robots.txt` + `sitemap.xml` (career pages only)
- `noindex` on `/gov` and old ice/freeze service pages

In **Google Search Console**:

1. URL Inspection → homepage → **Request indexing**
2. Submit sitemap: `https://marcusfacilities.com/sitemap.xml`
3. Optional: Removals for old URLs that still show freeze/gov text

Google can take hours to a few days to refresh the snippet.

## Local preview

```powershell
cd c:\Users\18629\Downloads\MarcusFac
npm run dev
```

- Home: `http://localhost:8080/#/`
- About: `http://localhost:8080/#/about`
- Get Started: `http://localhost:8080/#/start`
- Sign in / Sign up: `/#/start/signin`, `/#/start/signup`

## Next (when you wire real auth)

Replace the placeholder Sign in / Sign up forms with your real platform auth (same routes or redirect into your app). Pricing stays behind signup — no marketing pricing page required.
