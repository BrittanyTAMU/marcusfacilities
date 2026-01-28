# GitHub Pages Deployment Guide

This guide will help you deploy your Marcus Facilities website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Your project pushed to a GitHub repository

## Step 1: Update Repository Name (if needed)

The current configuration assumes your GitHub repository is named `MarcusFac`. If your repository has a different name, you need to update the `base` path in `vite.config.ts`:

```typescript
base: mode === "production" ? "/YOUR-REPO-NAME/" : "/",
```

Replace `YOUR-REPO-NAME` with your actual repository name.

## Step 2: Install GitHub Pages Plugin (Optional but Recommended)

You can use the `gh-pages` package to automate deployment:

```bash
npm install --save-dev gh-pages
```

## Step 3: Update package.json Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## Step 4: Deploy to GitHub Pages

### Option A: Using gh-pages (Recommended)

1. Make sure you've committed all your changes:
   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   git push origin main
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

3. Go to your repository on GitHub → Settings → Pages
4. Under "Source", select the `gh-pages` branch
5. Your site will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Option B: Manual Deployment

1. Build your project:
   ```bash
   npm run build
   ```

2. Create a new branch called `gh-pages`:
   ```bash
   git checkout -b gh-pages
   ```

3. Copy the contents of the `dist` folder to the root of the `gh-pages` branch:
   ```bash
   # On Windows PowerShell
   Copy-Item -Path dist\* -Destination . -Recurse -Force
   ```

4. Commit and push:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

5. Go to your repository on GitHub → Settings → Pages
6. Under "Source", select the `gh-pages` branch
7. Your site will be live in a few minutes!

## Step 5: Update Base URL for Custom Domain (Optional)

If you want to use a custom domain (e.g., `marcusfacilities.com`):

1. Update `vite.config.ts`:
   ```typescript
   base: mode === "production" ? "/" : "/",
   ```

2. Add a `CNAME` file in the `public` folder with your domain:
   ```
   marcusfacilities.com
   ```

3. Configure DNS settings with your domain provider to point to GitHub Pages.

## Troubleshooting

### Routes Not Working

Since we're using `HashRouter`, all routes will work with hash-based URLs (e.g., `#/services/hoa`). This is necessary for GitHub Pages because it doesn't support server-side routing.

### 404 Errors

- Make sure the `base` path in `vite.config.ts` matches your repository name
- Ensure you're using `HashRouter` (already configured)
- Clear your browser cache and try again

### Build Errors

- Make sure all dependencies are installed: `npm install`
- Check that the build completes successfully: `npm run build`
- Verify there are no TypeScript errors

## Continuous Deployment

To set up automatic deployment on every push:

1. Go to your repository → Settings → Pages
2. Under "Source", select "GitHub Actions" (if available)
3. Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Notes

- The site uses hash-based routing (`#/`) which works perfectly with GitHub Pages
- All static assets are optimized during build
- The site is fully responsive and ADA compliant
- SEO meta tags are included in the HTML head

## Your Site URL

Once deployed, your site will be available at:
- `https://YOUR-USERNAME.github.io/MarcusFac/` (if repo is named MarcusFac)
- Or `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/` (if different name)
