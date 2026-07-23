# Changelog

## Redesign: research-and-engineering personal homepage

Goal: transform the site from an employer-centric online résumé into a thoughtful
personal homepage for an early-career AI researcher and software engineer, while
preserving the existing design language (zinc palette, Space Grotesk / Inter /
JetBrains Mono, rounded-2xl cards, mono eyebrow labels).

### Content model

- **`src/types.ts`** — Extended the content model to support the new sections:
  added `SkillGroup`, `FeaturedWork`, `ResearchArea`, and `WritingEntry` interfaces;
  added `headline`, `subtitle`, `resumeUrl`, `skillGroups`, `featuredWork`,
  `researchAreas`, `researchStatement`, and `writing` to `Profile`; enriched
  `Publication` with `year`, `venue`, `type`, `firstAuthor`, and a `links`
  (`pdf`/`doi`/`bibtex`/`code`) object. Removed the unused `Message` interface.
- **`src/data.ts`** — Rewrote content:
  - **Confidentiality:** removed all proprietary Amazon detail (dollar figures,
    facility counts, internal implementation specifics). Industry work is now
    described only at a public, high level ("high-throughput backend services for
    large-scale logistics automation") emphasizing engineering challenges.
  - **Identity:** reframed from "SDE-I @ Amazon" to "Software Engineer · AI
    Researcher" so Amazon is context, not the headline.
  - Added hero `headline`/`subtitle`, a story-driven About, five problem-focused
    `featuredWork` cards, a `researchStatement` narrative + seven `researchAreas`,
    category-based `skillGroups`, and a `writing` placeholder.
  - Publications now carry first-author flags, venue, type, and year.

### Components (App.tsx decomposition)

- **`src/App.tsx`** — Reduced from a 725-line monolith to a thin composition shell.
  Added a skip link, a semantic `<main>` landmark, and an `IntersectionObserver`
  scroll-spy that powers nav highlighting.
- **New section components** under `src/components/`: `Navbar`, `Hero`, `About`,
  `FeaturedWork`, `ResearchVision`, `Publications`, `Experience`, `Skills`,
  `Writing`, `Contact`, `Footer`. Each owns one section and keeps the original
  Tailwind styling, so the visual language is unchanged but the code is maintainable.
- **Shared helpers:** `SectionHeader` (consistent eyebrow/title/lead), `Reveal`
  (subtle, once-only scroll fade that respects reduced motion), and `icons`
  (platform → lucide icon mapping).
- **New sections delivered:** Featured Work, Research Vision, and Writing.

### Contact

- **`src/components/ContactForm.tsx`** — Removed dead `dark:` utility classes (there
  is no dark mode), unified to the light design language, added `role="alert"` /
  `role="status"` and `aria-hidden` on decorative icons, and refreshed copy.

### Accessibility

- Skip-to-content link; `<main>` landmark; `aria-current` on the active nav item;
  `aria-label`/`aria-expanded` on the menu toggle; `aria-label` on every icon-only
  link; `aria-hidden` on decorative icons and the terminal graphic.
- **`src/index.css`** — Global visible `:focus-visible` outlines, `scroll-padding-top`
  so anchored sections clear the sticky header, and a `prefers-reduced-motion` block
  that neutralizes animations/smooth-scroll.

### SEO

- **`index.html`** — Descriptive title/description, keywords, canonical URL,
  `theme-color`, Open Graph + Twitter card tags, and JSON-LD `Person` structured
  data (job title, affiliations, `knowsAbout`, `sameAs` profile links).
- **`public/robots.txt`** and **`public/sitemap.xml`** — Added for crawlability.

### Docs

- **`README.md`** — Documented the new component architecture and how to add the
  resume PDF.
- **`CHANGELOG.md`** — This file.

### Not changed

- Build tooling, deploy workflows, and dependencies are untouched — no new packages
  were added. The site remains a dependency-light static Vite + React build.
