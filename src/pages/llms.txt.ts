import type { APIRoute } from 'astro';
import { getPosts, getSkills } from '@/lib/content';
import { SITE } from '@/site.config';

/** https://llmstxt.org — a map of this site for language models. */
export const GET: APIRoute = async ({ site }) => {
  const [posts, skills] = await Promise.all([getPosts(), getSkills()]);
  const abs = (p: string) => new URL(p, site).toString();
  const body = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    '## Skills',
    '',
    ...skills.map((s) => `- [${s.data.title}](${abs(`/skills/${s.id}.md`)}): ${s.data.description}`),
    '',
    '## Writing',
    '',
    ...posts.map((p) => `- [${p.data.title}](${abs(`/writing/${p.id}`)}): ${p.data.description}`),
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
