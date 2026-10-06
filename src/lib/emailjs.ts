/**
 * EmailJS client config.
 * These are public by design (browser SDK) — safe to ship in the frontend.
 * Override via .env when needed; defaults keep GitHub Pages deploys working
 * even though .env is gitignored.
 */
export const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_wqr84bo";
export const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_erc69nm";
export const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "0AgALcINu5ciDVoMG";
