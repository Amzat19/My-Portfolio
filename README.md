# Amzat Sheriff — portfolio

Source for [amzat-portfolio.netlify.app](https://amzat-portfolio.netlify.app): case studies of my frontend work, written as problem → approach → trade-offs → result.

## Stack

- **Next.js 16 (App Router), static export.** Every route is pre-rendered HTML served from Netlify's CDN. No server, no client-side data fetching.
- **TypeScript** in strict mode. All copy lives in typed modules under `src/content`.
- **Tailwind CSS 4.** Design tokens are CSS custom properties in `src/app/globals.css`, with light and dark themes.
- **Self-hosted fonts** via `next/font`: Bricolage Grotesque for headings, Instrument Sans for text.
- **Zero-dependency motion.** CSS only, scroll-driven where supported, and disabled under `prefers-reduced-motion`.

## Structure

```
src/
  app/                  routes, metadata, OG images, icons, sitemap
    work/[slug]/        one statically generated page per case study
  components/           layout primitives, diagrams, picture, theme toggle
  content/              site config, case studies, experience (typed)
scripts/
  optimize-images.mjs   source images → responsive AVIF + WebP
images/source/          original screenshots (input to the script above)
```

### Content

All copy lives in typed modules under `src/content`: `site.ts` (identity and links), `home.ts` (home page sections), `experience.ts` (roles, skills, toolkit) and `case-studies.ts`. Facts and numbers mirror the résumé. Each case study covers a whole product, not one feature: overview, the product areas I worked across, engineering highlights, decisions and trade-offs, and impact.

### Interactive demos

Two case studies include a small client component that demonstrates the pattern rather than describing it:

- `realtime-demo.tsx` — optimistic sends, a dropped connection, and reconciliation against server order on reconnect.
- `worker-demo.tsx` — the same CPU job on the main thread vs in a Web Worker, measuring the longest frame gap.

Both are written for this site and are not code from the products they illustrate.

### Static-export notes

- `scripts/flatten-segment-prefetch.mjs` runs after every build. Next 16's static export writes router segment payloads as nested folders, but the client requests them as flat, dot-joined filenames. Without this step, those requests 404 on any static host.
- Links use `prefetch={false}`. Each page's payload is ~5 KB, and eager viewport prefetching cost more main-thread time on mobile than it saved.
- Fonts are static weights, not variable fonts, to keep preloaded font bytes small.

## Scripts

| Command             | What it does                                    |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Start the dev server                            |
| `npm run build`     | Build the static site into `out/`               |
| `npm start`         | Serve `out/` locally on port 3000               |
| `npm run lint`      | Run ESLint (Next.js core-web-vitals and TS rules) |
| `npm run typecheck` | Type-check with `tsc`                           |
| `npm run check`     | Typecheck, lint and build                       |
| `npm run images`    | Regenerate responsive images from `images/source` |

## Deploy

`netlify.toml` sets the build command (`npm run build`), the publish directory (`out`), long-lived caching for hashed assets, and basic security headers.
