# How to Change the Domain in Google Workspace (e.g. from @MF.com to @marcusfacilities.com)

You want to change the **domain part** of your email — for example from **sales@MF.com** to **sales@marcusfacilities.com**. Here are your options.

---

## You need a **new domain** first

The new address (e.g. **@marcusfacilities.com**) only works if you **own** that domain:

- If you already have it (e.g. for a website), you can add it to Google Workspace.
- If you don’t, **register it** with a registrar (Google Domains / Squarespace Domains, Namecheap, GoDaddy, Cloudflare, etc.) first.

You do all of the following in the **Google Workspace Admin console**: [admin.google.com](https://admin.google.com) (sign in with an **admin** account).

---

## Option 1: Add the new domain and use it for email (recommended)

Keep **MF.com** as-is and **add** the new domain (e.g. **marcusfacilities.com**). Then you can have addresses like **sales@marcusfacilities.com**.

### Step 1: Add the new domain

1. Go to [admin.google.com](https://admin.google.com) → **Account** → **Domains** → **Manage domains**.
2. Click **Add a domain**.
3. Enter the **new** domain (e.g. `marcusfacilities.com`).
4. Choose **Secondary domain** (not “Domain alias”) → **Add domain & start verification**.
5. Follow the **verification** steps (add the TXT or CNAME record Google shows you at your domain’s DNS).
6. After verification, set up **Gmail for the new domain** by adding the **MX records** Google gives you at your domain host (same place you did verification).  
   Official guide: [Set up MX records for Google Workspace](https://support.google.com/a/answer/140034).

Once the new domain is verified and MX is set, you can use it for email.

### Step 2: Use the new domain for addresses

**Option A – New user with new domain**

- **Directory** → **Users** → **Add new user**.
- When setting the email, choose the **new domain** (e.g. **marcusfacilities.com**) so the address is e.g. **sales@marcusfacilities.com**.

**Option B – Change an existing user to the new domain**

1. **Directory** → **Users** → click the user (e.g. the one that is **sales@MF.com**).
2. Click **Update user** (or the pencil icon).
3. For **Primary email**, use the dropdown and select the **new domain** (e.g. **marcusfacilities.com**).
4. Set the username part (e.g. keep `sales`) so the address becomes **sales@marcusfacilities.com**.
5. Save.

After that, they sign in with **sales@marcusfacilities.com**. You can keep **MF.com** as a domain alias so old addresses still receive mail if you want.

---

## Option 2: Change the *primary* domain (whole organization uses new domain)

This makes the **new** domain (e.g. **marcusfacilities.com**) the main domain for the whole Google Workspace account. Every user’s primary address can be updated to **@marcusfacilities.com**.

**You cannot change the primary domain if:**

- You **bought the current domain** (e.g. MF.com) when you signed up for Google Workspace.
- You’re still in the **free trial**.
- The new domain is **unverified**.
- You’re on **G Suite legacy free** or certain other special editions.

If none of those apply, you can do this:

1. **Add the new domain** as a **secondary domain** (same as Option 1, Step 1: add domain, verify, set MX).
2. In **Account** → **Domains** → **Manage domains**, click **Change primary domain**.
3. Select the **new** domain (e.g. **marcusfacilities.com**) and confirm.
4. Then **update each user** so their primary email uses the new domain: **Directory** → **Users** → open user → **Update user** → set **Primary email** to **@marcusfacilities.com** (e.g. **sales@marcusfacilities.com**).

Full official steps (with all details and caveats):  
[Change your primary domain for Google Workspace](https://support.google.com/a/answer/7009324)

---

## Summary

| Goal | What to do |
|------|------------|
| **Use a new domain for email** (e.g. sales@marcusfacilities.com) but keep MF.com | **Option 1:** Add new domain in Admin → Domains → verify + MX → then add user or change user’s primary email to the new domain. |
| **Make the whole org use the new domain** (everyone @marcusfacilities.com) | **Option 2:** Add new domain, then **Change primary domain** in Admin → Domains, then update each user’s primary email. |

All of this is done in **Google Workspace Admin**: [admin.google.com](https://admin.google.com) → **Account** → **Domains**, and **Directory** → **Users** for changing **sales@MF.com** to **sales@marcusfacilities.com** (or whatever your new domain is).
