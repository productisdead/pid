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
 * Skills: drop a .md file in src/content/skills/.
 * Frontmatter = catalog metadata. Body = the skill itself (what an agent reads).
 */
const skills = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/skills' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
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
  }),
});

export const collections = { posts, skills };
