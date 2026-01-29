# Complete Setup & Deployment Guide

This is your complete step-by-step guide to get your Marcus Facilities website from local development to live on GitHub Pages.

##  Prerequisites Checklist

Before you start, make sure you have:
- [ ] GitHub account created
- [ ] Git installed on your computer ([Download Git](https://git-scm.com/downloads))
- [ ] Node.js installed ([Download Node.js](https://nodejs.org/) - version 18 or higher)
- [ ] Your project folder ready (`MarcusFac`)

---

##  Complete Workflow (Do This First!)

### Step 1: Initialize Git Repository (If Not Already Done)

Open your terminal/command prompt in the `MarcusFac` folder and run:

```bash
# Check if git is already initialized
git status

# If you get an error, initialize git:
git init
```

### Step 2: Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name:** `MarcusFac` (or your preferred name)
   - **Description:** "Freeze event safety and ice control services website for Texas properties"
   - **Visibility:** Choose Public or Private
   - **DO NOT** check "Initialize with README" (you already have one)
   - **DO NOT** add .gitignore or license (you already have them)
4. Click **"Create repository"**

### Step 3: Connect Local Project to GitHub

After creating the repo, GitHub will show you commands. Use these (replace `YOUR-USERNAME` with your GitHub username):

```bash
# Add all files to git
git add .

# Make your first commit
git commit -m "Initial commit: Marcus Facilities website"

# Add the GitHub repository as remote (replace YOUR-USERNAME with your actual username)
git remote add origin https://github.com/YOUR-USERNAME/MarcusFac.git

# OR if you prefer SSH:
# git remote add origin git@github.com:YOUR-USERNAME/MarcusFac.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Update Repository Name in Config (If Different)

If your repository name is **NOT** `MarcusFac`, update `vite.config.ts`:

```typescript
base: mode === "production" ? "/YOUR-REPO-NAME/" : "/",
```

Replace `YOUR-REPO-NAME` with your actual repository name.

### Step 5: Install GitHub Pages Deployment Tool

```bash
npm install --save-dev gh-pages
```

**Note:** The deployment scripts are already configured in `package.json`, but you need to install the `gh-pages` package first.

### Step 6: Set Up EmailJS (Optional but Recommended)

Before deploying, set up your contact form to send emails:

1. Follow the instructions in [`EMAILJS_SETUP_GUIDE.md`](./EMAILJS_SETUP_GUIDE.md)
2. Create a `.env` file with your EmailJS credentials
3. Test the form locally before deploying

**Note:** For production, you'll need to handle environment variables differently (see below).

### Step 7: Deploy to GitHub Pages

```bash
# Make sure all changes are committed
git add .
git commit -m "Ready for deployment"

# Push to GitHub
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

This will:
1. Build your website
2. Create a `gh-pages` branch
3. Push the built files to GitHub

### Step 8: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
5. Click **Save**

### Step 9: Wait and Access Your Site

- Wait 1-2 minutes for GitHub to process
- Your site will be live at: `https://YOUR-USERNAME.github.io/MarcusFac/`
- (Replace `YOUR-USERNAME` with your GitHub username)

---

## 🔄 Making Updates (After Initial Setup)

**Yes — you need to add new changes to GitHub** so your live site and repo stay in sync. Here’s the flow:

Whenever you make changes to the site:

```bash
# 1. Make your changes in the code (edit files in your project)

# 2. Test locally (optional but recommended)
npm run dev

# 3. Stage all changed files
git add .

# 4. Commit with a short description
git commit -m "Description of your changes"

# 5. Push to GitHub (updates your main branch)
git push origin main

# 6. Deploy the updated site to GitHub Pages
npm run deploy
```

**Summary:**
- **`git add .`** — stages your changes
- **`git commit -m "message"`** — saves them with a message
- **`git push origin main`** — sends commits to GitHub
- **`npm run deploy`** — builds and pushes the site to the `gh-pages` branch so the live site updates

After a few minutes, your GitHub Pages site will show the new version.

---

## 📧 EmailJS for Production

Since GitHub Pages is a static site, environment variables from `.env` won't work in production. You have two options:

### Option A: Hardcode (Quick but Less Secure)

Temporarily hardcode your EmailJS keys in `src/components/sections/Contact.tsx`:

```typescript
const serviceId = "your_service_id";
const templateId = "your_template_id";
const publicKey = "your_public_key";
```

**Note:** These will be visible in your JavaScript bundle, but EmailJS public keys are designed to be public. Enable rate limiting in EmailJS dashboard for security.

### Option B: Use GitHub Secrets (More Secure)

1. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Add your EmailJS credentials as secrets
3. Set up GitHub Actions workflow (see `GITHUB_PAGES_DEPLOYMENT.md` for example)

---

## 🎯 Quick Reference Commands

```bash
# Development
npm run dev          # Start local development server
npm run build        # Build for production
npm run preview      # Preview production build locally

# Git
git status           # Check what files changed
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push origin main # Push to GitHub

# Deployment
npm run deploy       # Deploy to GitHub Pages
```

---

## 🐛 Troubleshooting

### "Repository not found" error
- Check that you've added the remote correctly
- Verify your GitHub username and repo name are correct
- Make sure you're authenticated (GitHub may ask for credentials)

### Site shows 404 after deployment
- Wait 2-3 minutes for GitHub to process
- Check that `gh-pages` branch exists in your repo
- Verify GitHub Pages is enabled in Settings → Pages
- Clear browser cache

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run build`
- Make sure Node.js version is 18+

### Email form not working
- Check that EmailJS credentials are set up
- For production, use Option A or B above
- Check browser console for errors
- Verify EmailJS service is connected in dashboard

---

## 📚 Additional Resources

- **GitHub Pages Docs:** https://docs.github.com/pages
- **EmailJS Setup:** See [`EMAILJS_SETUP_GUIDE.md`](./EMAILJS_SETUP_GUIDE.md)
- **Deployment Details:** See [`GITHUB_PAGES_DEPLOYMENT.md`](./GITHUB_PAGES_DEPLOYMENT.md)

---

## ✅ Final Checklist

Before going live:
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] `gh-pages` package installed
- [ ] Site deployed with `npm run deploy`
- [ ] GitHub Pages enabled in Settings
- [ ] Site accessible at `https://YOUR-USERNAME.github.io/MarcusFac/`
- [ ] Contact form tested (if EmailJS is set up)
- [ ] All links and navigation working
- [ ] Mobile responsive design tested

**You're all set! 🎉**
