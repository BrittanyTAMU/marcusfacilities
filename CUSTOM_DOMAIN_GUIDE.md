# Changing Your Website Domain

You have two main options:

---

## Option 1: Change the GitHub Pages URL (different path)

If you want a **different GitHub Pages URL** (e.g. `https://BrittanyTAMU.github.io/my-freeze-site/` instead of `.../marcusfacilities/`):

1. **Rename your repository on GitHub**
   - Go to your repo → **Settings** → **General**
   - Under "Repository name", change `marcusfacilities` to the new name (e.g. `my-freeze-site`)
   - Click **Rename**

2. **Update your project**
   - In `vite.config.ts`, change the `base` to match the new repo name:
   ```typescript
   base: mode === "production" ? "/NEW-REPO-NAME/" : "/",
   ```
   Replace `NEW-REPO-NAME` with the exact new repository name.

3. **Update your remote (if needed)**
   - If Git still points to the old URL, update it:
   ```bash
   git remote set-url origin https://github.com/BrittanyTAMU/NEW-REPO-NAME.git
   ```

4. **Redeploy**
   ```bash
   npm run deploy
   ```

Your site will then be at: `https://BrittanyTAMU.github.io/NEW-REPO-NAME/`

---

## Option 2: Use a custom domain (e.g. marcusfacilities.com)

If you want your site at **your own domain** (e.g. `https://marcusfacilities.com`):

### Step 1: Buy a domain

- Register a domain with a provider (e.g. Namecheap, GoDaddy, Google Domains, Cloudflare).
- Choose the name you want (e.g. `marcusfacilities.com`).

### Step 2: Add CNAME to your project

1. Create a file named **`CNAME`** (no extension) in the **`public`** folder.
2. Put **only** your domain in it, one line:
   ```
   marcusfacilities.com
   ```
   (Or use `www.marcusfacilities.com` if you want the site at `www`.)

3. **Update `vite.config.ts`** so the site works at the root of your domain:
   ```typescript
   base: mode === "production" ? "/" : "/",
   ```

### Step 3: Configure DNS at your domain provider

At your registrar’s DNS settings, add:

| Type | Name/Host | Value/Points to |
|------|-----------|------------------|
| **A** | `@` | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |
| **CNAME** | `www` | `BrittanyTAMU.github.io` |

(These are GitHub’s recommended IPs for custom domains. Replace `BrittanyTAMU` with your GitHub username if different.)

- **`@`** = root domain (e.g. `marcusfacilities.com`)
- **`www`** = subdomain (e.g. `www.marcusfacilities.com`)

Exact labels (Name/Host) vary by provider (e.g. `@` vs leave blank for root). Use their help if needed.

### Step 4: Tell GitHub Pages about the custom domain

1. GitHub repo → **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g. `marcusfacilities.com`)
3. Save. Optionally enable **Enforce HTTPS** once DNS has propagated.

### Step 5: Redeploy

```bash
git add .
git commit -m "Add CNAME and base path for custom domain"
git push origin main
npm run deploy
```

### Step 6: Wait for DNS

- DNS can take from a few minutes up to 48 hours.
- Your site will be available at your custom domain once DNS and GitHub Pages are in sync.

---

## Summary

| Goal | What to do |
|------|------------|
| **Different GitHub URL** (e.g. different repo name) | Rename repo on GitHub, set `base: "/NEW-REPO-NAME/"` in `vite.config.ts`, redeploy. |
| **Your own domain** (e.g. marcusfacilities.com) | Add `CNAME` in `public/`, set `base: "/"` in `vite.config.ts`, point DNS to GitHub, set custom domain in repo Settings → Pages, redeploy. |

If you tell me whether you want a different **GitHub path** or a **custom domain** (and the exact name), I can give you the exact `base` and `CNAME` contents for your case.
