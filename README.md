# Target Transportation — Next.js Website

A fresh rebuild of targettransportation.co in Next.js 16 (App Router) + Tailwind CSS v4, with a homepage booking widget (Transfers / Hourly / Day trips) inspired by taxiserviceksa.com, but with an original navy/amber "causeway crossing" design.

## Pages
- `/` — Home (hero with route diagram, booking widget, why-us, fleet, popular routes, how it works, FAQ)
- `/services` and `/services/[slug]` — Service list + detail pages
- `/routes` and `/routes/[slug]` — All 14 routes (Khobar–Bahrain, Dammam–Bahrain, Riyadh–Qatar, airport transfers, etc.)
- `/about` — Company story
- `/contact` — Contact info + form that hands off to WhatsApp

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build for production
```bash
npm run build
npm run start
```

## Edit content
All business content (phone, WhatsApp number, services, routes, prices) lives in one file:
`lib/data.ts` — update it there and it updates across every page.

## Notes
- The booking widget and contact form open WhatsApp with a pre-filled message (using the WhatsApp number in `lib/data.ts`) — there's no backend, matching how the client currently takes bookings.
- Fonts currently use system font stacks (Google Fonts couldn't be fetched in the build sandbox). To use Space Grotesk + Inter for real, either let Next.js fetch them at build time on a machine with internet access, or self-host them with `next/font/local`.
- Deploy easily on Vercel, or any Node hosting that supports Next.js.
