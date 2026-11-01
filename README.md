<p align="center">
  <img src="public/brand/cat.svg" alt="productisdead cat" width="120">
</p>

<h1 align="center">productisdead</h1>

<p align="center">
  <b>Product is dead. Long live product.</b><br>
  Free, open-source agent skills for product managers, plus essays on why AI didn't kill the job.
</p>

<p align="center">
  <a href="#skills">Skills</a> ·
  <a href="#install">Install</a> ·
  <a href="https://productisdead.com">Website</a> ·
  <a href="CONTRIBUTING.md">Contribute</a>
</p>

---

AI makes PRDs, roadmaps and status updates in seconds. The judgment behind them is still the job. Each skill here is one piece of product judgment, written down so an agent can apply it: Claude, Claude Code, ChatGPT, Cursor, or anything else that reads `SKILL.md` files.

## Skills

Every skill lives in its own folder under [`skills/`](skills) as a standard `SKILL.md`.

| Skill | Category | What it does |
| --- | --- | --- |
| 🧭 [product-vision](skills/product-vision/SKILL.md) | Strategy | Builds or reviews a vision asset that tells one traceable story: job → problems → counters → Hooked loop → key results → proof. |
| 🔦 [prd-interrogator](skills/prd-interrogator/SKILL.md) | Strategy | Stress-tests a spec like a skeptical VP. Finds the riskiest assumption, the missing "no", and the metric that would prove you wrong. |
| 🧩 [prd-chunker](skills/prd-chunker/SKILL.md) | Shipping | Breaks a long PRD into 5–12 shippable chunks with demos, owners and a Gantt, opened by a plain-language "why" anyone can follow. |
| 🪓 [ruthless-prioritizer](skills/ruthless-prioritizer/SKILL.md) | Strategy | Scores a backlog with RICE, then argues with its own scores. Flags fake precision, sandbagged effort and pet projects. |
| 🔍 [competitor-teardown](skills/competitor-teardown/SKILL.md) | Research | An unsentimental teardown of a competitor's product, positioning and pricing, ending in what you should do (and not copy). |
| 🎙️ [interview-synthesizer](skills/interview-synthesizer/SKILL.md) | Research | Turns customer interview transcripts into themes, evidence and the one surprising outlier worth chasing. |
| 🌳 [metric-tree-builder](skills/metric-tree-builder/SKILL.md) | Analytics | Decomposes a north-star metric into input levers a team can actually move, with owners, guardrails and leading indicators. |
| 📣 [release-notes-writer](skills/release-notes-writer/SKILL.md) | Shipping | Converts a messy changelog, PR list or ticket dump into release notes users actually read. Benefits first, jargon never. |

Browse them with previews, filters and search at [productisdead.com/skills](https://productisdead.com/skills).

## Install

### Claude Code

Install every skill for all your projects:

```bash
git clone --depth 1 https://github.com/productisdead/pid.git /tmp/pid
mkdir -p ~/.claude/skills && cp -r /tmp/pid/skills/[!_]* ~/.claude/skills/
```

Or just one:

```bash
mkdir -p ~/.claude/skills/prd-interrogator && curl -fsSL \
  https://raw.githubusercontent.com/productisdead/pid/main/skills/prd-interrogator/SKILL.md \
  -o ~/.claude/skills/prd-interrogator/SKILL.md
```

To share a skill with your team, put it in `.claude/skills/` inside your project repo instead. Claude picks a skill up automatically when your request matches its description.

### Claude.ai and the Claude app

Zip a skill folder (for example `prd-interrogator/`) and upload it under **Settings → Capabilities → Skills**.

### ChatGPT, Cursor and everything else

A skill is plain Markdown. Paste the body of any `SKILL.md` into a custom GPT, a project's instructions, a Cursor rule, or straight into the chat.

## What's in a skill

```markdown
---
name: prd-interrogator
description: Stress-tests a spec like a skeptical VP. …
metadata:            # used by the website only; agents ignore it
  title: PRD Interrogator
  category: Strategy
  icon: 🔦
---

# PRD Interrogator

## When to use
## Instructions
## Output format
```

`name` and `description` follow the [Agent Skills](https://agentskills.io) format. The description is what an agent reads to decide whether the skill applies, so it carries the most weight.

## Contributing

New skills and sharper versions of existing ones are welcome. Good skills are opinionated: they encode a point of view, not a template. See [CONTRIBUTING.md](CONTRIBUTING.md) for the format and how to preview your skill on the site.

## The website

This repo is also the source of [productisdead.com](https://productisdead.com): essays, the manifesto, and the skills catalog. It's a static [Astro](https://astro.build) site that builds its skill pages straight from the `skills/` folder. Setup and authoring details are in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE). Use the skills anywhere, fork them, ship them in your own products.
