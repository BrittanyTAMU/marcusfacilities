# Marcus Facilities — Assets & Licensing Summary

Quick reference so you know where you stand on logos, fonts, and templates. **This is not legal advice;** when in doubt, consult a lawyer.

---

## 1. Logo — Not from a template

- **Header & footer “logo”:** Text only — a styled box with the letters **“MF”** and the words “Marcus Facilities.” No image file from a theme or template. It’s custom code (React + Tailwind).
- **Favicon:** A simple custom SVG (rounded rectangle + “MF” text). It was created for this project; it is not a stock or template logo.
- **Conclusion:** You are not using a logo from a template. No need to worry about template licensing for the logo.

---

## 2. Fonts on the website — OK for web use

- **Font used:** **Inter** (loaded from Google Fonts in `src/index.css`).
- **License:** Inter is open source (SIL Open Font License). Google Fonts allows free use and embedding on websites.
- **Conclusion:** You do **not** need a separate web license to use Inter on this site.

---

## 3. Font in the logo (favicon)

- **Favicon SVG** (`public/favicon.svg`) uses: `font-family="system-ui, sans-serif"`.
- That is the **system default font** (whatever the device provides). No custom font file is used in the logo.
- **Conclusion:** No font license is required for the logo.

---

## 4. Logo similarity to others

- The site uses the initials **“MF”** in a box (and the name “Marcus Facilities”). That’s a generic wordmark/initials style.
- We have not run a trademark search. If you want to be thorough, you can search the USPTO (or have a lawyer do it) for “Marcus Facilities” and “MF” in your industry and regions.
- **Conclusion:** No template copy; similarity risk is low for a simple “MF” wordmark, but a formal search is the only way to be sure.

---

## Summary table

| Item              | Source              | License / risk                          |
|-------------------|---------------------|-----------------------------------------|
| Header/Footer logo | Custom (text + CSS) | Not from template; no image license     |
| Favicon           | Custom SVG          | Not from template                       |
| Web font (Inter)  | Google Fonts        | Free for web; no extra license needed   |
| Logo font (favicon) | System font      | No license needed                       |

---

## If you add assets later

- **New logo image:** Use only artwork you own or have rights to (custom design, purchased license, or confirmed‑free asset). Avoid “free logo” templates that others can use without a commercial license.
- **New fonts:** Prefer Google Fonts (check each font’s license) or fonts you’ve explicitly licensed for web use.
- **Photos / icons:** Use licensed stock (e.g. Shutterstock, Adobe Stock) or royalty‑free with commercial use (e.g. Unsplash, Pexels — confirm their current terms).

*Last updated: 2026 — based on current codebase (no template logo; Inter; system font in favicon).*
