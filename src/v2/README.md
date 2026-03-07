# Corporate / V2 Site

Broad, consulting-focused version of the Marcus Facilities site. Same look and feel (navy, slate, layout) but **no overt government-contracting language**—positioned as management consulting so only COs who look for it see the procurement angle.

## How to view

- **Local:** After `npm run dev`, open `http://localhost:8080/#/v2` (or your dev URL + `/#/v2`).
- **Production:** `https://yourdomain.com/#/v2`.

**V2 routes:** Home: `/v2` · About: `/v2/about` · Privacy: `/v2/privacy` · Terms: `/v2/terms`

## What’s different from the main site

| Main site (/)        | V2 (/v2)                          |
|----------------------|------------------------------------|
| “Government Contracting” | “Management Consulting”           |
| NAICS, UEI, GPC in your face | “Capabilities” link; NAICS only in footer “For Contracting & Procurement” |
| “Request Capability Statement” | “Request for Information” / “Consultation Intake” |
| 4 service pillars (facilities, logistics, etc.) | 3 vague pillars: Strategic Advisory, Technical Operations, Compliance & Risk |
| No About bio on home | Dedicated About page: 3x engineer, TAMU alumna, minority woman-owned, systems-engineering, Texas roots |

## CO-friendly cues (only if they look)

- **Capabilities** in the main nav and footer.
- Footer block: “For Contracting & Procurement” with NAICS 561210 and “Request capability information.”
- “Request for Information” and “Consultation Intake” mirror solicitation language.

## Files

- `HeroV2.tsx` — “Precision Consulting for Complex Infrastructure”
- `CapabilitiesV2.tsx` — 3 capability blocks
- `AboutUsV2.tsx` — Your bio (engineer, TAMU, minority woman-owned, Texas)
- `ContactV2.tsx` — RFI / Consultation Intake form (same EmailJS as main site)
- `HeaderV2.tsx` — “Management Consulting” tagline; Capabilities, About, Contact
- `FooterV2.tsx` — “Capabilities” link + subtle procurement block

Also: `FAQV2.tsx` (FAQ on home). About is a separate page at `/v2/about`; Privacy and Terms at `/v2/privacy`, `/v2/terms`. Header/Footer link and scroll correctly between them.
