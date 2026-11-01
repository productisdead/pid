# productisdead

> Product is dead. Long live product. *Not dead yet.*

Personal site: essays on why AI didn't kill product management, plus a free hub of agent skills (`SKILL.md` files) for PMs.

Built with [Astro](https://astro.build) (Vite under the hood) + Tailwind CSS v4. Every page is static HTML; the whole site ships ~7 KB of gzipped JS.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321 (drafts visible)
npm run build      # type-check + static build into dist/
npm run preview    # serve the production build
```

## Writing content

Everything is a Markdown file. The filename becomes the URL.

### A new blog post

```bash
npm run new:post "AI won't take your job, your backlog will"
```

That creates `src/content/posts/ai-wont-take-your-job-your-backlog-will.md` as a draft. Or copy `src/content/posts/_template.md`, which documents every field.

| Field | Notes |
| --- | --- |
| `title`, `description`, `date` | Required |
| `stance` | `hot-take` (the cynical take) · `rebuttal` (the counter-argument) · `notes` (practical) |
| `tags` | Generate `/writing/tag/<tag>` pages |
| `featured` | The newest featured post gets the big card on the homepage |
| `draft` | Visible in dev only |
| `skills` | Skill slugs to recommend at the end of the post |

### A new skill

```bash
npm run new:skill "Stakeholder Translator"
```

Frontmatter is the catalog metadata (category, icon emoji, cover `color`, tags, level…). **The body is the skill itself.** Visitors can preview it, copy it, download it as a valid `SKILL.md`, or install it with one `curl` command. New categories show up in the sidebar automatically.

Cover colors: `yellow`, `orange`, `teal`, `pink`, `ink`, `lime`.

## Configuration

`src/site.config.ts` holds the site URL, author, social links (empty = hidden), nav, and the newsletter form. Set `newsletter.action` to any provider that accepts a form POST with an `email` field (Buttondown, Kit, Beehiiv…). Leave it empty to show an RSS call-to-action instead.

## What's included

- **Pages:** home, `/writing` (+ tag pages), `/writing/<slug>`, `/skills` (filter, search and sort, synced to the URL), `/skills/<slug>`, `/manifesto`, 404
- **Feeds & machines:** `/rss.xml`, `/sitemap-index.xml`, `/robots.txt`, `/llms.txt`, raw `/skills/<slug>.md`
- **UX:** ⌘K / `/` search palette, dark mode (follows the OS, remembered), view transitions between pages, reveal-on-scroll, reading progress bar, sticky table of contents, copy buttons on code blocks
- **SEO:** canonical URLs, Open Graph + Twitter cards, JSON-LD for articles
- **Accessibility:** skip link, focus styles, keyboard-navigable search, `prefers-reduced-motion` respected

## Brand

- Mascot: `public/brand/cat.svg` (full), `cat-head.svg` (avatar), `favicon.svg`. Cleaned-up vectors from the logo kit.
- Colors: yellow `#FED74F`, ink `#141112`, paper `#FAF8F3`, plus orange `#F4A261` and teal `#264653` from the alternate kit, and red `#E4572E` for strike-throughs.
- Type: Bricolage Grotesque (display), Inter (body), JetBrains Mono (meta), Indie Flower (handwritten notes, from the logo kit). All self-hosted.
- `public/og.png` is the default social card (1200×630).

## Deploying

It's a static site: deploy `dist/` anywhere (Vercel, Netlify, Cloudflare Pages, GitHub Pages). Build command `npm run build`, output directory `dist`. Update `url` in `src/site.config.ts` to your real domain first.
