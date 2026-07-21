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

## Editing Content

All portfolio content — bio, skills, projects, experience, education, publications,
awards and social links — is defined in [`src/data.ts`](src/data.ts) and typed by
[`src/types.ts`](src/types.ts). Edit that file to update the site; no other changes
are needed.

## Deployment

Deployment is automated via GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).
Every push to `main` builds the site and publishes it to GitHub Pages.

**One-time setup:** In the repository's **Settings → Pages**, set **Source** to
**GitHub Actions**.

The custom domain is configured via [`public/CNAME`](public/CNAME) (`arindammajee.com`),
which Vite copies into the build output on every deploy.
