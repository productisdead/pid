#!/usr/bin/env node
// Usage: npm run new:post "My title"   |   npm run new:skill "My skill"
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [kind, ...rest] = process.argv.slice(2);
const title = rest.join(' ').trim();
if (!['post', 'skill'].includes(kind) || !title) {
  console.error('Usage: npm run new:post "My title"  |  npm run new:skill "My skill"');
  process.exit(1);
}
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const today = new Date().toISOString().slice(0, 10);
// Posts: src/content/posts/<slug>.md   Skills: skills/<slug>/SKILL.md
const dir = kind === 'post' ? 'src/content/posts' : join('skills', slug);
const file = kind === 'post' ? join(dir, `${slug}.md`) : join(dir, 'SKILL.md');
if (existsSync(file)) {
  console.error(`✗ ${file} already exists`);
  process.exit(1);
}
const q = (s) => JSON.stringify(s);

const post = `---
title: ${q(title)}
description: ""
date: ${today}
stance: rebuttal
tags: []
featured: false
draft: true
skills: []
---

Start writing. Delete \`draft: true\` when it's ready to publish.

## First section
`;

const skill = `---
name: ${slug}
description: ""
metadata:
  title: ${q(title)}
  category: Strategy
  icon: ✦
  color: yellow
  tags: []
  level: beginner
  date: ${today}
  featured: false
  draft: true
---

# ${title}

## When to use

- 

## Instructions

1. 

## Output format

`;

mkdirSync(dir, { recursive: true });
writeFileSync(file, kind === 'post' ? post : skill);
console.log(`✓ Created ${file}  (draft — visible in \`npm run dev\` only)`);
