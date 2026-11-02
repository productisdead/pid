import type { APIRoute } from 'astro';
import { getPosts, getSkills, getRecommended, formatDate } from '@/lib/content';
import { NAV } from '@/site.config';

export const GET: APIRoute = async () => {
  const [posts, skills, picks] = await Promise.all([getPosts(), getSkills(), getRecommended()]);
  const items = [
    ...posts.map((p) => ({
      type: 'post', title: p.data.title, description: p.data.description, url: `/writing/${p.id}`,
      meta: formatDate(p.data.date, 'short'), keywords: [...p.data.tags, p.data.stance].join(' ').toLowerCase(),
    })),
    ...skills.map((s) => ({
      type: 'skill', title: s.data.title, description: s.data.description, url: `/skills/${s.id}`,
      meta: `Skill · ${s.data.category}`, keywords: [...s.data.tags, s.data.category, s.id].join(' ').toLowerCase(),
    })),
    ...picks.map((r) => ({
      type: 'skill', title: r.data.title, description: r.data.summary, url: `/skills?source=rec&q=${encodeURIComponent(r.data.title.toLowerCase())}`,
      meta: `Recommended · ${r.data.category} · by ${r.data.author}`, keywords: [r.data.category, r.data.author, r.id, 'recommended'].join(' ').toLowerCase(),
    })),
    ...NAV.map((n) => ({ type: 'page', title: n.label, description: 'Page', url: n.href, meta: 'Go to', keywords: n.label.toLowerCase() })),
  ];
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
};
