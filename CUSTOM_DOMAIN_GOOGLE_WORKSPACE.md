# Custom Domain with Google Workspace — Full Setup

Use your **Google Workspace domain** (e.g. `marcusfacilities.com`) for your GitHub Pages site. Your email (Gmail with your domain) will keep working — we only add DNS records for the website.

---

## What You Need

- A domain you use with Google Workspace (e.g. `marcusfacilities.com`)
- Access to **DNS settings** for that domain (where you manage MX, etc.)
- Your **GitHub username** (e.g. `BrittanyTAMU`)

**Important:** Do **not** remove or change your existing **MX records** (or other email-related records). We only **add** new records for the website.

---

## "I bought my domain when I signed up for Google Workspace — where do I manage it?"

**Yes — you can buy a domain when you sign up for Google Workspace.** In that case the domain was (or is) registered through **Google Domains**, which has been sold to **Squarespace**. You still own the domain; you just manage it in one of these places:

| Where your domain lives | How to get access |
|-------------------------|--------------------|
| **Google Domains** (still active for many accounts) | Go to **[domains.google.com](https://domains.google.com)** and sign in with the **same Google account** you use for Google Workspace (or the one that set up the account). Your domain(s) will be listed there. |
| **Squarespace Domains** (if you were migrated or bought recently) | Go to **[domains.squarespace.com](https://domains.squarespace.com)** and sign in (you may use "Sign in with Google" if your domain was moved from Google Domains). Your domain will be there. |

**To use that domain for GitHub Pages:**

1. Open the DNS page for your domain at **domains.google.com** or **Squarespace Domains** (click your domain → **DNS** or **DNS settings**).
2. **Do not remove or change any MX records** — those are what make email (e.g. sales@marcusfacilities.com) work.
3. **Add** the new records for the website only (the **four A records** for the root domain, and optionally the **CNAME** for `www`), as in **Step 3** below.

Once you add those records, your site can be served from your domain (e.g. `https://marcusfacilities.com`) while email keeps working. You're not "changing" the domain — you're only adding a few DNS entries so the domain can also point to GitHub Pages.

---

## Step 1: Where Is Your Domain's DNS?

DNS is managed where the domain is registered, not in Google Workspace itself.

| If you bought the domain… | Where to manage DNS |
|---------------------------|----------------------|
| **Through Google** (Google Domains) | [domains.google.com](https://domains.google.com) → Your domain → **DNS** (or it may have moved to [Squarespace Domains](https://domains.squarespace.com) if you migrated) |
| **With another registrar** (GoDaddy, Namecheap, Cloudflare, etc.) | Log in there → find **DNS**, **DNS Management**, or **Name Servers** |

Open that DNS page and keep it open for Step 3.

---

## Step 2: Update Your Project (CNAME + Base Path)

### 2a. Add the CNAME file

1. In your project, create a file named **`CNAME`** (all caps, no extension) in the **`public`** folder.
2. Put **one line** in it — your domain **without** `https://` or `www`:

   ```
   marcusfacilities.com
   ```

   (Use your real domain if it’s different, e.g. `yourcompany.com`.)

### 2b. Set the base path for production

So the site works at the root of your domain (e.g. `https://marcusfacilities.com`):

1. Open **`vite.config.ts`**.
2. Change the `base` line to:

   ```typescript
   base: mode === "production" ? "/" : "/",
   ```

3. Save the file.

---

## Step 3: Add DNS Records (Don’t Touch Email Records)

In the DNS page you found in Step 1, **add** these records. Do **not** delete or change existing **MX** (or other email) records.

### Where to add them on Squarespace

If your domain is on **Squarespace Domains** ([domains.squarespace.com](https://domains.squarespace.com)):

| Where | Use it? |
|-------|--------|
| **Custom records** (or **DNS** → **Custom records** / **Add record**) | **Yes.** Add the A records and CNAME here. This is the same place you may already have MX or other records. |
| **Google records** (if shown) | **No.** That section is for Google Workspace (e.g. MX). Leave it as-is. Add the GitHub A and CNAME in **Custom records** instead. |
| **Nameserver registration** (or "Nameservers") | **No.** That only sets *who* hosts your DNS (e.g. Squarespace). You don't add A or CNAME there. |

**Steps on Squarespace:** Open your domain → **DNS** or **DNS settings** → **Custom records** (or **Add record**). Add the four **A** records and, if you want www, the **CNAME** there. Do not change **Nameservers** or **Google records** for this.

---

### Option A: Site at root domain (e.g. `https://marcusfacilities.com`)

Add these **A** records for the root domain:

| Type | Name / Host | Value / Points to | TTL (if asked) |
|------|-------------|-------------------|-----------------|
| **A** | `@` (or leave blank) | `185.199.108.153` | 3600 |
| **A** | `@` (or leave blank) | `185.199.109.153` | 3600 |
| **A** | `@` (or leave blank) | `185.199.110.153` | 3600 |
| **A** | `@` (or leave blank) | `185.199.111.153` | 3600 |

So you add **four A records**; each has the same “Name” (`@` or blank) and a different “Value” from the table.

- **Google Domains / Squarespace:** Often “Host name” = `@` for the root.
- **Other registrars:** Use `@` or “blank” for “root” / “apex” domain.

### Option B: Site at www (e.g. `https://www.marcusfacilities.com`)

If you prefer the site only at `www`:

1. In the **`public/CNAME`** file, use:  
   `www.marcusfacilities.com` (with your real domain).
2. In DNS, add **one** record:

| Type   | Name / Host | Value / Points to     | TTL (if asked) |
|--------|-------------|------------------------|-----------------|
| **CNAME** | `www`      | `BrittanyTAMU.github.io` | 3600           |

Replace `BrittanyTAMU` with your GitHub username.

### Optional: Both root and www

- Add the **four A records** (as in Option A) for the root.
- Add the **one CNAME** for `www` (as in Option B).
- In **`public/CNAME`** you can only put **one** domain; use either `marcusfacilities.com` or `www.marcusfacilities.com`. GitHub will often redirect the other once the custom domain is set in Step 4.

Save all DNS changes. Propagation can take from a few minutes up to 48 hours.

---

## Step 4: Set Custom Domain in GitHub

1. Open your repo on GitHub: **https://github.com/BrittanyTAMU/marcusfacilities**
2. Go to **Settings** → **Pages** (left sidebar).
3. Under **“Custom domain”**, type your domain:
   - `marcusfacilities.com` **or**
   - `www.marcusfacilities.com`
   (Use the same one you put in `public/CNAME`.)
4. Click **Save**.
5. If GitHub shows a **“DNS check”** or **“Verify”** warning, wait for DNS to propagate (often 5–30 minutes), then click **Save** again or **Verify**.
6. When the check passes, turn on **“Enforce HTTPS”** if you want `https://` only.

---

**If Enforce HTTPS is unavailable:** GitHub may show *"Unavailable for your site because a certificate has not yet been issued for your domain."* This is normal right after adding a custom domain. Wait 24 to 48 hours after DNS has propagated, then try Enforce HTTPS again. The certificate is issued automatically once DNS is correct.

---

## Step 5: Deploy Your Site

From your project folder (e.g. `MarcusFac`):

```bash
git add .
git commit -m "Add custom domain (CNAME and base path for Google Workspace)"
git push origin main
npm run deploy
```

After a few minutes, your site should load at your custom domain.

---

## Step 6: Check That Email Still Works

- Send a test email **to** an address on your domain (e.g. `you@marcusfacilities.com`).
- If it arrives in Gmail/Google Workspace as before, your MX records are unchanged and email is fine.

---

## Summary Checklist

- [ ] Found DNS for your domain (Google Domains / Squarespace / other registrar).
- [ ] Added **`public/CNAME`** with your domain (e.g. `marcusfacilities.com`).
- [ ] Set **`base: "/"`** in **`vite.config.ts`** for production.
- [ ] Added **four A records** for `@` (or root) pointing to GitHub’s IPs (and optionally one CNAME for `www`).
- [ ] Left **MX** and other email records **unchanged**.
- [ ] Set **Custom domain** in GitHub repo **Settings → Pages**.
- [ ] Ran **`npm run deploy`** and waited for DNS to propagate.

---

## If Your Domain Is Different

Replace **`marcusfacilities.com`** and **`BrittanyTAMU`** everywhere with:

- Your actual domain (e.g. `yourcompany.com`).
- Your GitHub username (e.g. `YourUsername`).

The steps stay the same; only those two values change.

