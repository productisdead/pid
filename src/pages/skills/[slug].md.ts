import type { APIRoute, GetStaticPaths } from 'astro';
import { getSkills, toSkillFile, type Skill } from '@/lib/content';

export const getStaticPaths = (async () => {
  const skills = await getSkills();
  return skills.map((skill) => ({ params: { slug: skill.id }, props: { skill } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) =>
  new Response(toSkillFile((props as { skill: Skill }).skill), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
