import type { APIRoute } from 'astro';
import { getPosts, getSkills, getRecommended } from '@/lib/content';
import { SITE } from '@/site.config';

/** https://llmstxt.org — a map of this site for language models. */
export const GET: APIRoute = async ({ site }) => {
  const [posts, skills, picks] = await Promise.all([getPosts(), getSkills(), getRecommended()]);
  const abs = (p: string) => new URL(p, site).toString();
  const body = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    `Source: ${SITE.repo.url}`,
    '',
    '## Skills',
    '',
    ...skills.map((s) => `- [${s.data.title}](${abs(`/skills/${s.id}.md`)}): ${s.data.description}`),
    '',
    ...(picks.length
      ? ['## Recommended skills (by others)', '', ...picks.map((r) => `- [${r.data.title}](${r.data.url}) by ${r.data.author} (${r.data.category}): ${r.data.summary}`), '']
      : []),
    '## Writing',
    '',
    ...posts.map((p) => `- [${p.data.title}](${abs(`/writing/${p.id}`)}): ${p.data.description}`),
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
