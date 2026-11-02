---
# Folders starting with "_" are ignored. Copy this folder, or run: npm run new:skill "My skill"
# The folder name is the skill's `name` and its URL: skills/my-skill/SKILL.md -> /skills/my-skill
# `name` + `description` are the Agent Skills spec. `metadata` is only used by the website.
name: my-skill
description: One sentence an agent (and a human) can use to decide when this skill applies.
metadata:
  title: My Skill
  category: Strategy             # any string; new categories appear in the sidebar automatically
  icon: ✦                        # an emoji for the card cover
  color: yellow                  # yellow | orange | teal | pink | ink | lime
  tags: [example]
  tools: [Claude, ChatGPT, Cursor]
  level: beginner                # beginner | intermediate | advanced
  version: "1.0"
  date: 2026-11-01
  featured: false
  draft: true
---

# My Skill

Everything below the frontmatter is the skill itself: the instructions an agent reads.
Visitors can copy it or download it as a valid SKILL.md.

## When to use

- …

## Instructions

1. …

## Output format

…
