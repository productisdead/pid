import type { APIRoute } from 'astro';
import { getPosts, getSkills, formatDate } from '@/lib/content';
import { NAV } from '@/site.config';

export const GET: APIRoute = async () => {
  const [posts, skills] = await Promise.all([getPosts(), getSkills()]);
  const items = [
    ...posts.map((p) => ({
      type: 'post', title: p.data.title, description: p.data.description, url: `/writing/${p.id}`,
      meta: formatDate(p.data.date, 'short'), keywords: [...p.data.tags, p.data.stance].join(' ').toLowerCase(),
    })),
    ...skills.map((s) => ({
      type: 'skill', title: s.data.title, description: s.data.description, url: `/skills/${s.id}`,
      meta: `Skill · ${s.data.category}`, keywords: [...s.data.tags, s.data.category, s.id].join(' ').toLowerCase(),
    })),
    ...NAV.map((n) => ({ type: 'page', title: n.label, description: 'Page', url: n.href, meta: 'Go to', keywords: n.label.toLowerCase() })),
  ];
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
};
