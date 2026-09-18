# Sesnak Limited — Company Website

Marketing site for SESNAK LIMITED, a Solwezi-based labour hire and technical
services company serving Zambia's mining industry. Built with React, Vite,
TypeScript, Tailwind CSS and Framer Motion.

## Stack

- **React 19 + TypeScript** via Vite
- **Tailwind CSS v4** (theme tokens in `src/index.css`)
- **Framer Motion** for scroll reveals, page transitions and the animated stat counters
- **React Router** for client-side routing (`/`, `/about`, `/services`, `/leadership`, `/safety`, `/contact`)
- **lucide-react** for icons

## Project structure

```
src/
  components/   Reusable UI (Navbar, Footer, Reveal/Stagger animation wrappers, Button, etc.)
  pages/        One file per route
  data/         content.ts (all copy) and images.ts (typed asset imports)
  assets/images Source photos and the extracted logo/portraits
```

Site copy lives in `src/data/content.ts` — edit there rather than inline in
the pages to keep content and layout separate.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
```

## Deploying to Vercel

This is a static Vite SPA. On Vercel, import the repo and it will
auto-detect the Vite framework preset (`npm run build`, output `dist`). A
`vercel.json` is included with a catch-all rewrite to `index.html` so
client-side routes (e.g. `/services`, `/contact`) work on direct load and
refresh.

## Contact form

The requisition form on `/contact` builds a `mailto:` link with the
submitted details — it opens the visitor's own email client rather than
sending from a server, so no backend or API key is required.
