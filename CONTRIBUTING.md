# Contributing

## Adding a skill

1. Scaffold it:

   ```bash
   npm run new:skill "Stakeholder Translator"
   ```

   This creates `skills/stakeholder-translator/SKILL.md` as a draft. Or copy [`skills/_template/`](skills/_template/SKILL.md), which documents every field. Folders starting with `_` are ignored.

2. Write the body. Everything below the frontmatter is what the agent reads. Aim for: when to use it, numbered instructions, an output format, and a tone.

3. Fill in the frontmatter:

   | Field | Notes |
   | --- | --- |
   | `name` | Must match the folder name. Lowercase kebab-case. |
   | `description` | One or two sentences an agent uses to decide when the skill applies. Max 1024 characters. |
   | `metadata.title` | Display name on the site |
   | `metadata.category` | Any string. New categories appear in the site's sidebar automatically. |
   | `metadata.icon` | An emoji for the card cover |
   | `metadata.color` | `yellow` · `orange` · `teal` · `pink` · `ink` · `lime` |
   | `metadata.level` | `beginner` · `intermediate` · `advanced` |
   | `metadata.tags`, `tools`, `version`, `date`, `updated` | Optional catalog details |
   | `metadata.featured` | Pinned to the top of the catalog |
   | `metadata.draft` | Visible in `npm run dev` only. Remove it to publish. |

4. Add a row to the skills table in [README.md](README.md).

5. Preview it with `npm run dev` at `http://localhost:4321/skills/<name>`, then open a PR. `npm run build` validates every skill's frontmatter.

## Running the site

```bash
npm install
npm run dev        # http://localhost:4321 (drafts visible)
npm run build      # type-check + static build into dist/
npm run preview    # serve the production build
```

Built with Astro + Tailwind CSS v4. Every page is static HTML and the site ships about 7 KB of gzipped JS.

## Writing a post

```bash
npm run new:post "AI won't take your job, your backlog will"
```

This creates `src/content/posts/<slug>.md` as a draft. [`src/content/posts/_template.md`](src/content/posts/_template.md) documents every field:

| Field | Notes |
| --- | --- |
| `title`, `description`, `date` | Required |
| `stance` | `hot-take` (the cynical take) · `rebuttal` (the counter-argument) · `notes` (practical) |
| `tags` | Generate `/writing/tag/<tag>` pages |
| `featured` | The newest featured post gets the big card on the homepage |
| `draft` | Visible in dev only |
| `skills` | Skill names to recommend at the end of the post |

## Configuration

`src/site.config.ts` holds the site URL, author, social links (empty = hidden), nav, and the newsletter form. Set `newsletter.action` to any provider that accepts a form POST with an `email` field (Buttondown, Kit, Beehiiv…). Leave it empty to show an RSS call-to-action instead.

## What the site includes

- **Pages:** home, `/writing` (+ tag pages), `/writing/<slug>`, `/skills` (filter, search and sort, synced to the URL), `/skills/<name>`, `/manifesto`, 404
- **Feeds & machines:** `/rss.xml`, `/sitemap-index.xml`, `/robots.txt`, `/llms.txt`, raw `/skills/<name>.md`
- **UX:** ⌘K / `/` search palette, dark mode, view transitions, reading progress bar, sticky table of contents, copy buttons on code blocks
- **SEO & a11y:** canonical URLs, Open Graph + Twitter cards, JSON-LD, skip link, keyboard-navigable search, `prefers-reduced-motion` respected

## Brand

- Mascot: `public/brand/cat.svg` (full), `cat-head.svg` (avatar), `favicon.svg`
- Colors: yellow `#FED74F`, ink `#141112`, paper `#FAF8F3`, orange `#F4A261`, teal `#264653`, red `#E4572E` for strike-throughs
- Type: Bricolage Grotesque (display), Inter (body), JetBrains Mono (meta), Indie Flower (handwritten notes). All self-hosted.
- `public/og.png` is the default social card (1200×630)

## Deploying

Static site: deploy `dist/` anywhere (Vercel, Netlify, Cloudflare Pages, GitHub Pages). Build command `npm run build`, output directory `dist`.
