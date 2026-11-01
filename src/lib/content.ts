import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;
export type Skill = CollectionEntry<'skills'>;

const visible = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', visible);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getSkills(): Promise<Skill[]> {
  const skills = await getCollection('skills', visible);
  return skills.sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export function readingTime(body = ''): number {
  const words = body.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

export const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export function uniqueSorted(values: string[]): string[] {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

export const formatDate = (d: Date, style: 'long' | 'short' = 'long') =>
  d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });

export const STANCE = {
  'hot-take': { label: 'Hot take', glyph: '☠', hint: 'The cynical take' },
  rebuttal: { label: 'Rebuttal', glyph: '✦', hint: 'The counter-argument' },
  notes: { label: 'Field notes', glyph: '✎', hint: 'Practical stuff' },
} as const;

/** Build a valid agent-skill SKILL.md (name + description frontmatter, then body). */
export function toSkillFile(skill: Skill): string {
  const esc = (s: string) => s.replace(/"/g, '\\"');
  return `---\nname: ${skill.id}\ndescription: "${esc(skill.data.description)}"\n---\n\n${(skill.body ?? '').trim()}\n`;
}
