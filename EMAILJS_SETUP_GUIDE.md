# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to receive contact form submissions directly to your Gmail/Google Workspace email.

## Why EmailJS?

- ✅ **FREE** - 200 emails/month on the free tier (plenty for most businesses)
- ✅ **Secure** - Uses API keys, no passwords exposed
- ✅ **Easy Setup** - No backend required, works with static sites
- ✅ **Works with Gmail/Google Workspace** - Direct integration
- ✅ **Spam Protection** - Built-in rate limiting

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (or "Log In" if you already have an account)
3. Sign up with your Google account or email
4. Verify your email address

## Step 2: Add Email Service (Gmail)

1. Once logged in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Select **"Gmail"** (or **"Google Workspace"** if you have a custom domain)
4. Click **"Connect Account"**
5. Sign in with your Google account that you want to receive emails
6. Grant EmailJS permission to send emails on your behalf
7. Give your service a name (e.g., "Marcus Facilities Contact")
8. Click **"Create Service"**
9. **Copy the Service ID** - you'll need this later ()

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Choose a template or start from scratch
4. Configure the template:

   **Template Name:** `contact_form` (or any name you prefer)

   **Subject:** `New Contact Form Submission from {{from_name}}`

   **Content (HTML):**
   ```html
   <h2>New Contact Form Submission</h2>
   
   <p><strong>Name:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>
   <p><strong>Phone:</strong> {{phone}}</p>
   <p><strong>Property Type:</strong> {{property_type}}</p>
   <p><strong>Coverage Type:</strong> {{coverage_type}}</p>
   <p><strong>Add-on Services:</strong> {{add_on_services}}</p>
   <p><strong>City:</strong> {{city}}</p>
   
   <h3>Message:</h3>
   <p>{{message}}</p>
   
   <hr>
   <p><em>You can reply directly to this email to contact {{from_name}} at {{from_email}}</em></p>
   ```

5. Click **"Save"**
6. **Copy the Template ID** - you'll need this later ()

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in the left sidebar
2. Find **"Public Key"** section ()
3. **Copy your Public Key** - you'll need this later

## Step 5: Configure Your Website

1. In your project root, create a `.env` file (if it doesn't exist)
2. Add the following variables:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

3. Replace the placeholder values with the actual IDs you copied:
   - `your_service_id_here` → Your EmailJS Service ID
   - `your_template_id_here` → Your EmailJS Template ID
   - `your_public_key_here` → Your EmailJS Public Key

4. **Important:** Make sure `.env` is in your `.gitignore` file (it should already be there)

## Step 6: Test the Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Fill out the contact form on your website
3. Submit the form
4. Check your Gmail inbox - you should receive the email within seconds!

## Step 7: Deploy to Production

When deploying to GitHub Pages:

1. The environment variables in `.env` are for local development
2. For production, you have two options:

   **Option A: Use GitHub Secrets (if using GitHub Actions)**
   - Add the environment variables as GitHub Secrets
   - Update your deployment workflow to use them

   **Option B: Use Vite's environment variable replacement**
   - Since Vite replaces `import.meta.env.VITE_*` at build time, you can:
     - Set environment variables in your build process
     - Or use a `.env.production` file (but don't commit it!)
   - For GitHub Pages, you might need to use a different approach

   **Option C: Hardcode for static site (Less Secure)**
   - You can temporarily hardcode the values in the Contact.tsx file
   - **Note:** These will be visible in your JavaScript bundle
   - EmailJS public keys are meant to be public, but consider rate limiting

## Security Best Practices

1. **Enable Rate Limiting in EmailJS:**
   - Go to EmailJS Dashboard → Account → Security
   - Enable rate limiting to prevent spam
   - Set a reasonable limit (e.g., 10 emails per hour per IP)

2. **Domain Restrictions (Optional):**
   - In EmailJS Dashboard → Account → Security
   - Add your domain to allowed referrers
   - This prevents others from using your EmailJS account

3. **Never commit `.env` file:**
   - Make sure `.env` is in `.gitignore`
   - Use `.env.example` as a template (without real values)

## Troubleshooting

### **412 Gmail_API: Request had insufficient authentication scopes**

This error means Gmail didn’t grant EmailJS enough permission to send mail. Fix it by reconnecting with the right scopes:

1. **Reconnect your Gmail service in EmailJS**
   - Go to [EmailJS Dashboard](https://dashboard.emailjs.com/) → **Email Services**
   - Open your Gmail service
   - Click **“Reconnect”** or **“Disconnect”** then **“Connect Account”** again
   - When Google asks for permissions, **allow all requested permissions** (especially “Send email on your behalf”)
   - Do **not** uncheck any boxes during the consent screen
   - Finish the flow and save the service

2. **If it still fails: revoke and reconnect**
   - Go to [Google Account → Security → Third-party apps with account access](https://myaccount.google.com/permissions)
   - Find **EmailJS** (or the app name used for the connection) and remove access
   - In EmailJS Dashboard → Email Services → your Gmail service, click **Connect Account** again
   - Sign in and grant **all** requested permissions when Google shows the consent screen

3. **If you use 2‑Factor Authentication**
   - Some users see 412 when 2FA is on. Try:
     - Temporarily turning off 2FA, reconnecting in EmailJS, then turning 2FA back on, or
     - Using an [App Password](https://support.google.com/accounts/answer/185833) for the Google account and reconnecting

4. **Google Workspace (organization) accounts**
   - Your admin may restrict third‑party app access. If 412 persists, ask your admin to allow the Gmail API / OAuth scope for sending mail, or use a personal Gmail account for the EmailJS service.

After reconnecting, wait a minute and submit the form again. The 412 error should stop once Gmail has granted the send scope.

---

### Emails not arriving?
- Check your spam/junk folder
- Verify the Service ID, Template ID, and Public Key are correct
- Check EmailJS dashboard for error logs
- Make sure you granted EmailJS permission to send emails

### "Configuration Error" message?
- Make sure all three environment variables are set
- Restart your dev server after adding `.env` file
- Check that variable names start with `VITE_`

### Rate limit exceeded?
- Upgrade to a paid plan, or
- Wait for the rate limit to reset, or
- Adjust rate limiting settings in EmailJS dashboard

## Alternative: Formspree (If EmailJS doesn't work)

If you prefer an alternative, **Formspree** is also free and easy:
- Sign up at [formspree.io](https://formspree.io)
- Get your form endpoint
- Update the form to POST to that endpoint
- Free tier: 50 submissions/month

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**Your form is now ready to send emails directly to your Gmail inbox!** 🎉
