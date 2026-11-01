import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog posts: drop a .md file in src/content/posts/.
 * The filename becomes the URL: my-post.md -> /writing/my-post
 */
const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** hot-take = the cynical take, rebuttal = the counter-argument, notes = everything else */
    stance: z.enum(['hot-take', 'rebuttal', 'notes']).default('notes'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    /** Slugs of skills to recommend at the end of the post */
    skills: z.array(z.string()).default([]),
  }),
});

/**
 * Skills: one folder per skill at the repo root, skills/<name>/SKILL.md.
 * Each file is a valid Agent Skill as-is: `name` + `description` follow the spec,
 * site-only catalog fields live under `metadata`. Body = the skill itself.
 * The folder name is the id and URL: skills/my-skill/SKILL.md -> /skills/my-skill
 */
const skillMeta = z.object({
  title: z.string(),
  category: z.string(),
  icon: z.string().default('✦'),
  color: z.enum(['yellow', 'orange', 'teal', 'pink', 'ink', 'lime']).default('yellow'),
  tags: z.array(z.string()).default([]),
  tools: z.array(z.string()).default(['Claude', 'ChatGPT', 'Cursor']),
  level: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
  version: z.string().default('1.0'),
  price: z.string().default('Free'),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
});

const skills = defineCollection({
  loader: glob({
    pattern: '[^_]*/SKILL.md',
    base: './skills',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: z
    .object({
      name: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'lowercase-kebab-case'),
      description: z.string().max(1024),
      metadata: skillMeta,
    })
    // Flatten so pages can keep using skill.data.title, skill.data.category…
    .transform(({ name, description, metadata }) => ({ name, description, ...metadata })),
});

export const collections = { posts, skills };
