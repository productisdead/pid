import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE } from '@/site.config';

export type Post = CollectionEntry<'posts'>;
export type Skill = CollectionEntry<'skills'>;
export type Recommended = CollectionEntry<'recommended'>;

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

export async function getRecommended(): Promise<Recommended[]> {
  const picks = await getCollection('recommended', visible);
  return picks.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
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

/** GitHub links for a skill: its folder and its SKILL.md. */
export function skillGithub(id: string) {
  const base = `${SITE.repo.url}/tree/${SITE.repo.branch}/skills/${id}`;
  return {
    folder: base,
    file: `${SITE.repo.url}/blob/${SITE.repo.branch}/skills/${id}/SKILL.md`,
  };
}

/**
 * "Open in Claude / ChatGPT" deep links. Both accept a prefilled prompt via ?q=.
 * The prompt points the model at the raw SKILL.md so it can load and follow it.
 */
export function skillChatLinks(title: string, rawUrl: string) {
  const prompt = `Read the "${title}" skill at ${rawUrl} and follow its instructions for the rest of this conversation. Start by asking me what you need.`;
  const q = encodeURIComponent(prompt);
  return {
    prompt,
    claude: `https://claude.ai/new?q=${q}`,
    chatgpt: `https://chatgpt.com/?hints=search&q=${q}`,
    cursor: `https://cursor.com/link/prompt?text=${q}`,
  };
}

/** Strip inline markdown (bold, italics, code, links) for plain-text summaries. */
const plain = (s: string) =>
  s.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[*_`]/g, '').replace(/\s+/g, ' ').trim();

/**
 * TL;DR pulled straight from the skill body, so it never drifts from the file:
 * - when: bullets under "## When to use"
 * - steps: bold lead-ins of the numbered "## Instructions" list, or "## Step N: …" headings
 */
export function skillTldr(skill: Skill) {
  const body = skill.body ?? '';
  const section = (title: RegExp) => {
    const m = body.match(new RegExp(`^##\\s+${title.source}[^\\n]*\\n([\\s\\S]*?)(?=^##\\s|(?![\\s\\S]))`, 'mi'));
    return m?.[1] ?? '';
  };
  const when = [...section(/When to use/).matchAll(/^[-*]\s+(.+)$/gm)].map((m) => plain(m[1])).slice(0, 4);
  let steps = [...section(/Instructions/).matchAll(/^\d+\.\s+\*\*(.+?)\*\*/gm)].map((m) => plain(m[1]).replace(/[.:]$/, ''));
  if (!steps.length) steps = [...body.matchAll(/^##\s+Step\s+\d+:\s*(.+)$/gim)].map((m) => plain(m[1]));
  return { when, steps: steps.slice(0, 7) };
}
