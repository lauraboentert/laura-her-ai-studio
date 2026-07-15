# CLAUDE.md — Laura Böntert | Her AI Studio

## Project Goal

Build an original, premium, single-page personal portfolio and AI business website for:

**Laura Böntert | Her AI Studio**

The site must combine:
1. Laura’s CV and operating experience
2. Her expertise in AI marketing, workflow automation and AI commerce

The site is inspired by the pacing, contrast and scroll storytelling of:
https://creativemarketing.peachweb.io/

This is inspiration only. Do not copy its code, copywriting, images, exact compositions or brand assets.

## Brand Direction

The design should feel:
- Apple-inspired
- editorial
- premium
- feminine without being girly
- calm, clear and technically credible
- warm rather than cyberpunk
- human rather than generic SaaS

Use:
- transparent glass cards
- warm off-white canvas
- butter-yellow, blush and soft rose accents
- restrained dark sections
- large typography
- subtle abstract light or glass visuals
- generous whitespace

Avoid:
- generic AI robots
- blue SaaS gradients
- excessive purple neon
- stock photography
- fake dashboards
- fake logos
- fake testimonials
- fake results
- over-animation
- scroll jacking

## Technical Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion for React via `motion/react`
- Lucide icons
- `next/image`
- `next/font`
- Server Components by default
- Client Components only where interaction or animation requires them

Do not add dependencies without a clear reason.
Prefer native CSS, React and existing project tools.

## Architecture

Keep content separate from presentation.

Recommended structure:

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
      FloatingNav.tsx
      Footer.tsx
    sections/
      Hero.tsx
      Positioning.tsx
      Expertise.tsx
      ProofStrip.tsx
      Journey.tsx
      FounderDNA.tsx
      About.tsx
      Contact.tsx
    ui/
      GlassCard.tsx
      Pill.tsx
      SectionLabel.tsx
      ButtonLink.tsx
      Reveal.tsx
      GradientOrb.tsx
  data/
    site-content.ts
  lib/
    cn.ts
public/
  images/
    laura-portrait.webp
    og-image.jpg
  laura-boentert-cv.pdf
```

Use reusable components without over-engineering.

## Content Rules

- Do not invent facts.
- Do not invent clients, logos, metrics, testimonials or case studies.
- Use only approved content from `site-content.ts` or project content documents.
- The public brand name is `Laura Böntert | Her AI Studio`.
- Use `boentert` only in URLs and filenames.
- Do not publicly display Laura’s phone number.
- Email and LinkedIn may be public.
- Preserve correct capitalization: `AI`, not `Ai`.
- Prefer precise, concise English copy.
- Avoid hype words such as revolutionary, game-changing or disruptive.

## Visual Tokens

Use CSS variables for all major colors, shadows and radii.
Do not scatter arbitrary hex values through components.

Core colors:

```css
--ink: #171513;
--ink-soft: #4A4540;
--canvas: #F7F5F0;
--canvas-warm: #FFFBEF;
--butter: #F3E39B;
--butter-light: #FFF4BF;
--blush: #F4C4D2;
--rose: #E999B1;
--rose-deep: #A94768;
--lavender-mist: #E9E2F8;
```

Use Geist Sans as the main font.
Use Instrument Serif Italic only for short editorial accents.

## UI Standards

- Mobile-first
- Semantic HTML
- One H1 only
- Clear heading hierarchy
- Max content width 1280–1360 px
- Large section spacing
- Minimum touch target 44 x 44 px
- Visible keyboard focus
- Accessible menu and buttons
- Sufficient contrast
- Decorative elements must be hidden from screen readers
- Images require meaningful alt text unless decorative

## Motion Rules

Use Motion only when it improves hierarchy.

Allowed:
- entrance fade and Y translation
- scroll-triggered reveal
- subtle parallax
- sticky expertise storytelling
- timeline progress
- restrained hover feedback

Rules:
- primarily animate `transform` and `opacity`
- support `prefers-reduced-motion`
- disable or simplify parallax on mobile
- no scroll hijacking
- no endless decorative loops
- no animated blur per frame
- content must remain understandable with animation disabled

## Next.js Rules

- Prefer Server Components.
- Add `"use client"` only to the smallest interactive leaf component.
- Use `next/image` for raster imagery.
- Use `next/font` for fonts.
- Add metadata in `layout.tsx`.
- Add JSON-LD for Person and ProfessionalService.
- Use static content unless dynamic behavior is required.
- Keep the initial JavaScript payload small.
- Lazy-load non-critical visual components.
- Do not add a CMS in version 1.

## Quality Gates

Before declaring work complete, run:

```bash
pnpm lint
pnpm build
```

Fix all errors and meaningful warnings.

Check:
- 375 px mobile width
- 768 px tablet width
- 1440 px desktop width
- keyboard navigation
- reduced motion mode
- no horizontal overflow
- all links
- CV download
- email and LinkedIn links
- image loading
- metadata and social preview
- no placeholder or fake content

## Work Style

Before coding:
1. Inspect the repository.
2. Read this file.
3. Summarize the implementation plan.
4. Identify required assets.
5. Then implement.

During implementation:
- Make coherent batches of changes.
- Keep components focused.
- Do not rewrite unrelated code.
- Explain major design decisions briefly.
- If content is missing, use an explicit `TODO` rather than inventing it.

At completion:
- Summarize changed files.
- List commands run.
- State remaining TODOs.
