# Marcus Facilities - Freeze Event Safety Website

Professional website for Marcus Facilities, providing freeze-event safety and ice control services for Texas commercial and residential properties.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **ADA Compliant** - Built with accessibility in mind (WCAG 2.1 AA standards)
- **Contact Form** - Integrated with EmailJS for direct email delivery
- **SEO Optimized** - Meta tags, structured data, and semantic HTML
- **Fast Performance** - Optimized build with code splitting and asset optimization

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- npm or yarn package manager
- Git (for version control)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/MarcusFac.git

# Navigate to project directory
cd MarcusFac

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

## 📁 Project Structure

```
MarcusFac/
├── src/
│   ├── components/      # React components
│   │   ├── layout/     # Header, Footer
│   │   ├── sections/    # Hero, Services, FAQ, Contact
│   │   └── ui/          # Reusable UI components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utility functions
├── public/              # Static assets
├── dist/                # Production build (generated)
└── docs/                # Documentation files
```

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm test             # Run tests
npm run deploy       # Deploy to GitHub Pages
```

## 📧 Contact Form Setup

The contact form uses EmailJS to send submissions directly to your email. To set it up:

1. Follow the instructions in [`EMAILJS_SETUP_GUIDE.md`](./EMAILJS_SETUP_GUIDE.md)
2. Create a `.env` file with your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. Restart the development server

## 🚀 Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment. See the complete setup guide:

- **[COMPLETE_SETUP_GUIDE.md](./COMPLETE_SETUP_GUIDE.md)** - Full workflow from setup to deployment
- **[GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md)** - Detailed deployment instructions

**Quick Deploy:**
```bash
npm run deploy
```

Then enable GitHub Pages in your repository settings (Settings → Pages → Source: `gh-pages` branch).

## 🛡️ Security

- Environment variables (`.env`) are gitignored
- EmailJS public keys are safe to expose (designed for client-side use)
- Rate limiting recommended in EmailJS dashboard
- All dependencies are regularly updated

## 🎨 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **React Router** - Client-side routing
- **EmailJS** - Email service integration

## 📝 License

Copyright © 2025 Marcus Facilities LLC. All rights reserved.

## 📞 Support

For questions or issues:
- Email: operations@marcusfacilities.com
- Phone: (800) 000-0000

---

**Built with ❄️ for Texas freeze event safety**
