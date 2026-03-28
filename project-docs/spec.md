# Andrew Smyth — Personal Website

A personal site built with Vite, TypeScript, and Pretext — warm editorial typography with layout tricks CSS can't do, deployed to Cloudflare Pages.

---

## Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Bundler | Vite | Pretext ships raw `.ts` — Vite resolves TS imports zero-config. Fast HMR, static output. |
| Language | TypeScript | Type safety, Pretext requires it. |
| Rendering | Pretext (`@chenglou/pretext`) | Canvas/DOM text layout without reflow. Enables typography tricks CSS can't do. |
| Styling | Vanilla CSS | Small site, no framework needed. CSS custom properties for theming. |
| Hosting | Cloudflare Pages | Already connected. Auto-deploys on push to `main`. Build: `npm run build`, output: `dist`. |

No React. No framework. Vanilla TS + Pretext + DOM/Canvas.

## Vibe

Lowkey. Personal. Fun for Andrew, not trying to impress. A well-typeset single page that feels like opening someone's notebook — warm, considered, quietly distinctive.

**Design references:**
- CS153 course page — warm cream background, editorial typography, strong hierarchy
- thesephist.com — text-forward, minimal, personal
- littleplains.co — playful illustration energy, whitespace
- nat.org — dead simple, just a name and a list

**Palette:**
- Background: warm cream/off-white (`#F5F0E8` range)
- Text: near-black (`#1a1a1a`)
- Accent: TBD (one color)

**Typography:**
- Headings: **Fraunces** — soft, wonky old-style serif with optical size axes. Playful at display sizes, refined small. The "fun but tasteful" choice.
- Body: **Source Serif 4** — clean editorial serif. Pairs well with Fraunces without competing.
- Both from Google Fonts.

**Backup fonts (liked, may swap in later):**
- Literata — beautiful reading serif, designed for Google Books. Could replace Source Serif 4 as body.
- Newsreader — editorial with built-in optical sizing. Could run as a single typeface for everything.

## Content

Single page. Name up top, what you're working on, links out. That's it.

```
Andrew Smyth

Working on applied AI + other things at Willow Labs
Working on creative + design at Oxy (oxy.co)
Working on jewelry with Razza Pazza
Working on Inkra (Docusign)
Working on Memories (new iOS / macOS app)
```

Links open in new tabs to external sites. Possible future additions: blog page, other internal pages — but v1 is just the lander.

## Pretext Usage

TBD — options range from subtle (height-aware layout, smooth resize) to expressive (canvas-rendered hero, text flowing around shapes). Decide during design phase.

## File Structure

```
├── index.html
├── src/
│   ├── main.ts
│   ├── style.css
│   └── ...
├── public/
│   └── fonts/
├── project-docs/
│   └── spec.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Resolved

- [x] Fonts — Fraunces (headings) + Source Serif 4 (body)
- [x] Pretext usage — subtle polish (height-aware layout, smooth resize), not expressive v1
- [x] Visual elements — pure text for now, may add later
- [x] Project links — oxy.co, razzapazza.com (others TBD)

## Open Questions

- [ ] Accent color
- [ ] Links for Willow Labs, Inkra, Memories
- [ ] Other links (GitHub, X, email, etc.)
- [ ] Domain name
