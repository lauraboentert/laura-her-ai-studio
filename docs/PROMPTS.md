# Claude Code Prompts

Die Prompts nacheinander verwenden. Der Master-Prompt darf die Grundversion komplett erstellen. Die Phasen-Prompts dienen der kontrollierten Verbesserung.

---

# MASTER-PROMPT

```txt
You are working in a fresh Next.js project for the personal brand website “Laura Böntert | Her AI Studio”.

First:
1. Inspect the entire repository.
2. Read CLAUDE.md and all project content files.
3. Confirm the available assets in /public.
4. Create a concise implementation plan.
5. Then implement the site without waiting for additional confirmation unless you are genuinely blocked.

Goal:
Create a premium, original, responsive single-page website combining Laura’s professional CV with her AI business expertise in:
- AI marketing systems
- workflow automation
- AI commerce

Visual direction:
- Apple-inspired
- editorial and minimal
- transparent glass cards
- warm off-white background
- butter yellow, blush and soft rose gradients
- selected dark sections with warm pink/yellow light
- bold typography and generous whitespace
- subtle abstract glass/light shapes
- calm, credible and founder-led
- inspired by the pacing and scroll storytelling of https://creativemarketing.peachweb.io/, but do not copy any code, text, assets or exact layout

Build these sections:
1. Floating glass navigation
2. Hero
3. “Two sides, one advantage” positioning section
4. Sticky three-part expertise scroll story
5. Proof strip with only factual numbers
6. Selected career journey / CV timeline
7. Founder DNA section
8. About section
9. Optional engagement models
10. Contact CTA
11. Footer

Use the approved copy from the content file. Do not invent testimonials, logos, clients, case studies or KPIs.

Technical requirements:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion for React using imports from motion/react
- Lucide icons
- Server Components by default
- smallest possible Client Components for motion and menu interactions
- reusable components
- content stored in src/data/site-content.ts
- CSS variables for brand tokens
- next/image and next/font
- metadata, Open Graph data and JSON-LD
- accessible semantic structure
- prefers-reduced-motion support
- no horizontal overflow
- no scroll jacking
- optimized mobile layout

Create original abstract visuals with CSS gradients, borders and simple SVG shapes. Do not depend on external image URLs. Use the portrait asset if available; otherwise create a clearly labeled placeholder component and TODO.

After implementation:
- run pnpm lint
- run pnpm build
- fix all errors
- report changed files, commands run and remaining asset TODOs
```

---

# PHASE 1 — DESIGN SYSTEM AND SCAFFOLD

```txt
Audit the current implementation against CLAUDE.md.

Create or refine the core design system before adding more decorative detail:
- CSS variables for all colors, glass surfaces, shadows, radii and spacing
- Geist Sans and Instrument Serif through next/font
- reusable Container, SectionLabel, GlassCard, Pill, ButtonLink and Reveal components
- consistent section spacing and max widths
- accessible focus styles
- reduced-motion defaults

Remove arbitrary inline colors and duplicated layout code.

Do not redesign the content yet. Focus on a robust, reusable foundation.
Run lint after the changes.
```

---

# PHASE 2 — HERO

```txt
Refine the hero so it feels premium, human and commercially credible.

Requirements:
- full-height or near-full-height hero using 100svh safely
- large headline “AI meets commercial execution.”
- accent one short word with Instrument Serif Italic
- clear supporting copy
- primary CTA to Expertise
- secondary CTA to the CV PDF
- four small expertise pills
- portrait in a sophisticated glass frame
- one original abstract butter/blush light object built with CSS or inline SVG
- very subtle parallax on desktop only
- no generic AI icons
- no busy background
- correct layout at 375 px, 768 px and 1440 px
- hero remains clear when reduced motion is enabled

Keep the page fast. Do not add video or large animation libraries.
```

---

# PHASE 3 — EXPERTISE SCROLL STORY

```txt
Build the Expertise section as a restrained scroll narrative.

Desktop:
- section height approximately 150–180svh
- left column is sticky with section label, headline and short intro
- right column displays three layered or sequential feature cards
- cards represent:
  01 AI Marketing Systems
  02 Workflow Automation
  03 AI Commerce
- scroll progress controls opacity, vertical position and subtle scale only
- current item is visually obvious
- cards remain readable and do not overlap text

Mobile:
- normal document flow
- no sticky trap
- cards stack vertically
- reveal each card once
- no parallax

Use factual copy from the content data.
Do not use fake dashboards, fake analytics or fake client logos.
Respect prefers-reduced-motion.
```

---

# PHASE 4 — CV AND PROOF

```txt
Create a highly scannable “Selected Journey” section that turns the CV into an editorial timeline.

Include:
- PAYBACK / May AG
- Her AI Studio Club
- BRIDECYCLE
- Trust in Digital
- Ralph Lauren
- White Communications

Highlight:
- 10+ years international experience
- current leadership of 9 direct reports
- responsibility across 3 verticals
- six-figure marketplace and retail business
- 10-person founder-led team
- more than 20 websites and shops per year at Trust in Digital
- agency exit in 2023

Requirements:
- no dense resume wall
- timeline line may animate with scroll progress
- all content readable without animation
- full CV download CTA
- do not display the phone number
- ensure dates and claims match the approved content
```

---

# PHASE 5 — POLISH AND MICROINTERACTIONS

```txt
Polish the page without changing its core information architecture.

Add only restrained microinteractions:
- navigation background response after scrolling
- button arrow movement of 3–5 px
- card lift of no more than 6 px
- gentle border light on hover
- section reveals with opacity and Y translation
- timeline progress
- subtle gradient movement only if it is performant and disabled in reduced-motion mode

Remove any effect that:
- distracts from reading
- causes layout shift
- creates horizontal overflow
- performs poorly on mobile
- resembles a template demo rather than a personal brand

The result should feel calm and expensive, not animated for animation’s sake.
```

---

# PHASE 6 — RESPONSIVE, ACCESSIBILITY AND PERFORMANCE

```txt
Perform a complete responsive, accessibility and performance pass.

Test and fix:
- 375 x 812
- 768 x 1024
- 1440 x 900

Check:
- semantic landmarks
- one H1
- logical heading order
- keyboard navigation
- menu focus handling
- visible focus states
- minimum 44 px touch targets
- color contrast
- alt text
- decorative aria-hidden elements
- reduced-motion mode
- no horizontal overflow
- no text clipping
- no content hidden behind the floating nav
- CV link works
- mailto and LinkedIn links work
- all internal anchor offsets work
- images use next/image
- no avoidable Client Components
- no unnecessary third-party JavaScript

Run:
pnpm lint
pnpm build

Fix everything before responding.
```

---

# PHASE 7 — SEO AND TRUST

```txt
Add production-ready SEO and trust details.

Implement:
- metadata title and description
- canonical URL placeholder in one central config
- Open Graph metadata
- Twitter card metadata
- favicon placeholders documented
- JSON-LD for Person
- JSON-LD for ProfessionalService / consulting brand
- semantic contact details
- footer links for Imprint and Privacy as TODO routes or disabled labels until content exists
- clear social preview image TODO

Do not make claims beyond approved CV data.
Do not expose a phone number.
Do not add tracking scripts.
```

---

# PHASE 8 — FINAL QA PROMPT

```txt
Act as a senior frontend reviewer.

Review the full codebase and the rendered website for:
1. design consistency
2. visual hierarchy
3. responsive behavior
4. accessibility
5. motion quality
6. performance
7. factual accuracy
8. maintainability
9. SEO
10. production readiness

Compare the implementation with CLAUDE.md and the content source.

Create a prioritized list:
- Blockers
- Important improvements
- Nice-to-have refinements

Then fix all blockers and important improvements.
Do not introduce new dependencies unless necessary.
Run pnpm lint and pnpm build again.
Return a concise final handoff with:
- what was improved
- commands run
- remaining content or asset TODOs
```

---

# OPTIONAL PROMPT — MAKE IT LESS TEMPLATE-LIKE

```txt
The page currently feels too much like a generic SaaS template.

Refine it into a distinctive founder-led personal brand:
- increase editorial asymmetry
- give the portrait and career journey more presence
- reduce repetitive card grids
- vary section rhythm
- use fewer but larger visual statements
- keep the butter/blush color system
- keep glass effects restrained
- remove generic icons where typography or simple lines work better
- make the AI expertise feel grounded in Laura’s operating experience

Do not change the approved factual content.
```

---

# OPTIONAL PROMPT — GERMAN VERSION

```txt
Add a German language version without adding a heavy i18n framework.

Requirements:
- keep English as the default
- add a simple EN / DE toggle
- store both languages in the content data
- persist the selected language locally
- preserve the same page structure and metadata per language
- translate naturally, not word-for-word
- keep the brand name “Laura Böntert | Her AI Studio”
- ensure the toggle is keyboard accessible
- avoid duplicating component markup
```
