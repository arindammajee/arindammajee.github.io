# Arindam Majee — Personal Portfolio

A fast, static personal website and portfolio for **Arindam Majee**, built with React 19,
TypeScript and Tailwind CSS, and deployed to GitHub Pages at
[arindammajee.com](https://arindammajee.com).

The site is fully static — there is no backend or API key required. All content lives in
[`src/data.ts`](src/data.ts).

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** for build/dev
- **Tailwind CSS 4** for styling
- **motion** for animations, **lucide-react** for icons

## Run Locally

**Prerequisites:** Node.js 20+

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev
```

Other scripts:

```bash
npm run build      # Production build into dist/
npm run preview    # Preview the production build locally
npm run typecheck  # Type-check without emitting
```

## Architecture

The UI is composed of small, focused section components under
[`src/components/`](src/components/) — `Hero`, `About`, `FeaturedWork`,
`ResearchVision`, `Publications`, `Experience`, `Skills`, `Writing`, `Contact`,
`Footer`, plus a `Navbar`. [`src/App.tsx`](src/App.tsx) is a thin shell that
composes them and drives the nav scroll-spy. Shared building blocks live in
`SectionHeader`, `Reveal` (subtle scroll animation), and `icons`.

## Editing Content

All portfolio content — bio, skills, featured work, research areas, experience,
education, publications, awards, writing, and social links — is defined in
[`src/data.ts`](src/data.ts) and typed by [`src/types.ts`](src/types.ts). Edit that
file to update the site; the components render whatever is in the data.

**Resume:** the hero links to `/Arindam_Majee_Resume.pdf`. Drop your resume PDF at
`public/Arindam_Majee_Resume.pdf` (or change `resumeUrl` in `data.ts`) so the link
resolves.

## Deployment

Deployment is automated via GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).
Every push to `main` builds the site and publishes it to GitHub Pages.

**One-time setup:** In the repository's **Settings → Pages**, set **Source** to
**GitHub Actions**.

The custom domain is configured via [`public/CNAME`](public/CNAME) (`arindammajee.com`),
which Vite copies into the build output on every deploy.
