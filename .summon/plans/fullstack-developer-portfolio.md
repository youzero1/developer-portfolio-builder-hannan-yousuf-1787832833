---
status: pending
title: Full-Stack Developer Portfolio — Dark Terminal Style
---

# Full-Stack Developer Portfolio

A single-page-feeling portfolio site with a dark, modern, developer-terminal aesthetic: monospace accents, subtle glow, grid/scanline background texture, and green/cyan highlight colors on near-black surfaces. Content lives in editable data files so text and projects can be updated without touching layout.

## Phase 1 — Foundation & design system

1. Create the project scaffold: `index.html`, `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, `src/main.tsx`.
   - Vite plugins configured: React, Tailwind CSS v4 (`@tailwindcss/vite`), and the TanStack Router plugin for file-based routing.
   - Path alias `@/` resolving to `src/` in both Vite and TypeScript config.
   - **Outcome:** dev server starts cleanly with no errors.

2. Create `src/styles/global.css` starting with the Tailwind import, then define the theme tokens.
   - Design tokens: near-black background layers (base, surface, elevated), soft grey body text, bright white headings, a primary terminal-green accent and a secondary cyan accent, subtle border color.
   - Font setup: a monospace family for headings, code, labels and nav; a clean sans family for body copy.
   - Global utilities: text-glow effect, faint grid background pattern, gradient divider, focus-visible ring styling, smooth scrolling, and a reduced-motion safeguard.
   - **Outcome:** consistent dark theme available site-wide from one stylesheet.

3. Create `src/types/portfolio.ts` with shared types for profile, skill group, project, experience entry, education/certification entry, and testimonial.
   - **Outcome:** all content data and components share one type contract.

4. Create `src/lib/content.ts` holding all portfolio content as typed data (profile/bio, skill groups, projects, experience timeline, education & certifications, testimonials, social links).
   - Seeded with realistic full-stack placeholder content clearly written so it is obvious what to replace.
   - **Outcome:** a single place to edit every piece of text on the site.

5. Create `src/lib/utils.ts` with small helpers: class-name merging, date-range formatting for the timeline, and a scroll-to-section helper.
   - **Outcome:** shared helpers ready for reuse, no duplicated logic.

## Phase 2 — App shell, navigation & routing

6. Create `src/routes/__root.tsx` as the app shell: page background texture, sticky header, main outlet, and footer.
   - **Outcome:** every page shares the same chrome and background treatment.

7. Create `src/components/Header.tsx`: a sticky, blurred top bar with a monospace logotype (name + blinking cursor), in-page anchor links (About, Skills, Projects, Experience, Contact), and a highlighted call-to-action.
   - Adds a subtle border/shadow once the page is scrolled; collapses into a slide-down menu on small screens with a hamburger toggle.
   - **Outcome:** navigation works on desktop and mobile and highlights the section currently in view.

8. Create `src/hooks/useActiveSection.ts` — tracks which section is on screen using an intersection observer so the header can highlight it.
   - **Outcome:** active nav link updates automatically while scrolling.

9. Create `src/hooks/useScrollReveal.ts` — reveals elements with a fade-and-rise transition the first time they enter the viewport, and does nothing when reduced motion is requested.
   - **Outcome:** sections animate in smoothly without jank.

10. Create `src/components/Footer.tsx`: monospace copyright line, social links, and a "back to top" control.
    - **Outcome:** consistent page ending across the site.

11. Create `src/routes/index.tsx` as the home route that composes all content sections in order (Hero, About, Skills, Projects, Experience, Education, Testimonials, Contact), each with an id matching its nav anchor.
    - **Outcome:** the full portfolio reads as one continuous scrolling page.

## Phase 3 — Shared UI primitives

12. Create `src/components/ui/Section.tsx` — wraps each content block with consistent vertical spacing, max width, an eyebrow label rendered like a terminal command, a heading, and an optional subheading.
    - **Outcome:** every section shares identical rhythm and heading style.

13. Create `src/components/ui/Card.tsx` — elevated dark panel with border, rounded corners, and an optional hover glow/lift.
    - **Outcome:** reusable surface for projects, timeline entries, and testimonials.

14. Create `src/components/ui/Tag.tsx` — small monospace pill used for technologies and filters, with an active/selected variant.
    - **Outcome:** consistent tech-badge styling everywhere.

15. Create `src/components/ui/Button.tsx` — primary (accent-filled), secondary (outlined), and ghost variants, supporting both link and button behavior, with icon slot support.
    - **Outcome:** all clickable actions look and behave the same.

16. Create `src/components/ui/TerminalWindow.tsx` — decorative window frame with title bar, three dots, and a monospace body area used by the hero and about sections.
    - **Outcome:** the signature terminal visual is reusable.

## Phase 4 — Content sections

17. Create `src/components/sections/Hero.tsx`: full-height intro with greeting line, large name, a typewriter-style rotating role headline ("Full-Stack Developer", "API Builder", etc.), a short value statement, primary/secondary calls to action, social icon row, and a scroll-down cue.
    - Uses the terminal window frame on the side/below on desktop showing a short "whoami" style output.
    - **Outcome:** an immediately striking first screen that states who you are and what you do.

18. Create `src/hooks useTypewriter` at `src/hooks/useTypewriter.ts` — types and deletes strings from a rotating list with configurable speed and pause, respecting reduced motion by showing static text.
    - **Outcome:** the hero headline cycles roles smoothly.

19. Create `src/components/sections/About.tsx`: two-column layout with a two-to-three paragraph bio, a short "currently" line, a quick-facts list (location, availability, focus areas, years of experience), and stat counters (years of experience, projects shipped, technologies).
    - **Outcome:** visitors understand your background within a few seconds.

20. Create `src/components/sections/Skills.tsx`: skill groups (Frontend, Backend, Database, DevOps & Tooling) rendered as cards of monospace tags, each group with an icon and short caption.
    - **Outcome:** the full-stack range is scannable at a glance without fake percentage bars.

21. Create `src/components/sections/Projects.tsx`: filterable showcase driven by technology tags, with an "All" default filter and a responsive card grid.
    - **Outcome:** visitors can narrow projects by tech and see counts update instantly.

22. Create `src/components/ProjectCard.tsx`: thumbnail/gradient cover, title, role, one-line summary, key bullet points, tech tags, and live-demo / source links; features a "Featured" ribbon for highlighted work.
    - **Outcome:** each project is presented consistently and links out correctly.

23. Create `src/components/sections/Experience.tsx`: vertical timeline with an accent rail, alternating entries on desktop and a single column on mobile; each entry shows role, company, date range, location, achievement bullets, and tech tags.
    - **Outcome:** career history reads clearly in chronological order.

24. Create `src/components/sections/Education.tsx`: degrees and certifications in a compact two-column card grid, each with institution, credential name, year, and an optional verification link.
    - **Outcome:** credentials are visible without dominating the page.

25. Create `src/components/sections/Testimonials.tsx`: quote cards with author name, role/company, avatar initials, and an accent quote mark; laid out as a grid on desktop and a horizontal swipe row on mobile.
    - **Outcome:** social proof displayed cleanly at any screen size.

## Phase 5 — Contact form

26. Create `src/components/sections/Contact.tsx`: a two-part block — short pitch plus direct contact details/social links on one side, and the form on the other.
    - **Outcome:** clear invitation to get in touch with more than one route.

27. Create `src/components/ContactForm.tsx` with fields for name, email, subject, and message.
    - Client-side validation with inline error messages beneath each field, required-field checks, and email format checking.
    - Submitting shows a loading state on the button, then a success confirmation panel with a "send another" reset; failure shows a friendly retry message.
    - No backend is wired up in this plan — submission is handled locally and the message is logged, ready to be connected to an email service or database later.
    - **Outcome:** a fully working, validated form with real feedback states.

## Phase 6 — Polish, responsiveness & accessibility

28. Pass over every section for responsive behavior at mobile, tablet, and desktop widths — stacking columns, resizing headings, adjusting section padding, and making the projects grid and timeline reflow correctly.
    - **Outcome:** no horizontal scrolling or cramped layouts on any screen size.

29. Accessibility pass: semantic landmarks and heading order, labeled form fields and error associations, accessible names on icon-only controls, visible focus states, sufficient contrast on the dark theme, and a skip-to-content link in the app shell.
    - **Outcome:** the site is keyboard-navigable and screen-reader friendly.

30. Metadata and finishing touches in `index.html`: page title, description, theme color, favicon, and social preview tags.
    - **Outcome:** the site presents correctly in browser tabs and when shared.

31. Create `src/routes/$.tsx` as a terminal-styled "404 — command not found" page with a link back home.
    - **Outcome:** unknown URLs land on a branded page instead of a blank screen.

## Notes

- All copy, projects, jobs, credentials, and testimonials start as clearly-marked placeholders in the content file, so replacing them with your real details is a single-file edit.
- The contact form is front-end only for now; connecting it to a real inbox or database is a natural follow-up.
