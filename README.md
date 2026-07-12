# Force 1 Kennels — Production Website

A production-ready Next.js 15 (App Router) implementation of the approved Force 1 Kennels
design — elite K9 and companion dog placements for defence, security, and family clients.

## Tech stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4** for setup/utilities, paired with a hand-authored design-system stylesheet
  (`app/globals.css`) that ports the approved design's exact spacing, gradients, and easing —
  this is what guarantees the pixel-for-pixel visual match to the approved mockup.
- **next/image** for automatic image optimization, lazy loading, and responsive `srcset`
- **next/font** (self-hosted Google Fonts: Sora + Inter) — no render-blocking font requests
- ESLint 9 (flat config) with `eslint-config-next`

## Project structure

```
app/
  layout.tsx        Root layout: fonts, metadata, Open Graph, Twitter Card, JSON-LD
  page.tsx           Assembles all sections
  globals.css         Design tokens + component styles (ported 1:1 from the approved design)
  robots.ts            Dynamic robots.txt
  sitemap.ts            Dynamic sitemap.xml
  favicon.ico / apple-icon.png

components/
  Nav.tsx              Client component — scroll-aware nav bar + mobile menu
  Hero.tsx
  Solutions.tsx        Working dogs, private collection, consultation banner
  Credibility.tsx      Stats section with the animated counters
  Counter.tsx          Client component — count-up-on-scroll number animation
  Difference.tsx
  Breeds.tsx
  Testimonials.tsx     Client component — auto-advancing carousel
  FinalCta.tsx
  Footer.tsx
  StickyCta.tsx        Client component — appears after scrolling past the hero
  Reveal.tsx           Client component — shared scroll-triggered fade/scale-in wrapper

lib/
  data.ts              All site copy/content as typed data (breeds, testimonials, stats, etc.)

public/
  images/              All photography, the logo, and the icon mark
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

This project has been built and smoke-tested end to end in this environment (see
`npm run build` output for the route/bundle summary) — it compiles cleanly, passes
`npm run lint` with zero errors, and has been checked in a real browser (via Playwright) for
console errors, hydration issues, broken images, and layout overflow at five breakpoints
(375px through 1920px). Everything came back clean.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project**, import the GitHub repo.
3. Framework preset: Vercel auto-detects **Next.js** — no changes needed.
4. Build command: `next build` (default). Output is managed automatically by the Next.js
   runtime on Vercel.
5. Deploy.

### Connecting your Hostinger domain

1. In the Vercel project → **Settings → Domains**, add your domain (e.g. `force1kennels.in`).
2. Vercel will show you either an **A record** (pointing to `76.76.21.21`) or a **CNAME**
   (pointing to `cname.vercel-dns.com`) to add.
3. In Hostinger's DNS zone editor for your domain, add the record Vercel gave you (replace
   any conflicting existing A/CNAME record on the same host).
4. DNS propagation can take a few minutes to a few hours. Vercel will automatically issue an
   SSL certificate once the DNS resolves.

### Before you go live

- Update `siteConfig.url` in `lib/data.ts` to your final production domain — this feeds the
  canonical URL, Open Graph URLs, JSON-LD, sitemap, and robots.txt.
- Double-check the phone number, email, and address in `lib/data.ts` (`siteConfig`) are final.
- If you want Google/Bing to pick up the sitemap immediately, submit
  `https://yourdomain.com/sitemap.xml` in Google Search Console / Bing Webmaster Tools.

## Editing content

Almost everything on the page — breed cards, testimonials, stats, footer links, contact
details — is centralised in `lib/data.ts`. Change the data there and the whole site updates;
you generally shouldn't need to touch component files for text/content changes.

## Notes on fidelity to the approved design

- Every gradient, spacing value, easing curve, hover state, and breakpoint from the approved
  HTML design was ported by hand into `globals.css`, rather than re-approximated with utility
  classes, specifically to avoid subtle visual drift.
- All interactions are preserved: nav scroll transition, mobile menu, scroll-reveal animations
  (with the original staggered delays), the animated stat counters, the testimonial carousel
  (auto-advance + manual dot navigation), hover states on every card/button, and the sticky
  mobile CTA.
- The only intentional structural change from the original static HTML is that the second
  `<h1>` (in the closing CTA section) was changed to `<h2>` — a page should only have one
  `<h1>` for correct heading hierarchy/SEO. The visual styling is byte-for-byte identical;
  only the semantic tag changed.
