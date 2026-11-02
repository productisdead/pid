---
title: "PID #3: Stop Writing Requirements. Start Building Proofs."
description: "Spoiler alert: I'm rebutting myself. One essay after defending the PRD, I'm here to tell you we should stop writing them."
date: 2026-11-02
stance: rebuttal
tags: [prd, ai, proofs]
skills: [product-vision, metric-tree-builder, ruthless-prioritizer, prd-interrogator]
---

![Stop writing requirements. Build proofs. A crossed-out PRD stamped TBD behind a terminal where the proofs run, with a cat in sunglasses lounging on top](/images/posts/stop-writing-requirements-start-building-proofs/hero.svg)

Spoiler alert: I'm rebutting myself. One essay after defending the PRD, I'm here to tell you we should stop writing them.

## The PRD was a risk tool, not a communication tool

Be honest: when did you last read a PRD from the first word to the last? And when did you last write one knowing nobody would?

We told ourselves the PRD was about alignment. It wasn't. It was risk management. Building was expensive, so we paid for a cheap description first, argued about it, and only then paid for the real thing. The PRD-to-ticket-to-estimate chain existed to protect engineering hours.

That premise is gone. Andrew Ambrosino, who leads the Codex app at OpenAI, said it plainly on Lenny's Podcast in June: product work has inverted. The old process assumed building was expensive, so we de-risked everything up front with specs, research and prototypes. That assumption is gone.

> When the thing is cheaper than its description, the description stops being the job.

## A guess read perfectly is still a guess

This year the PRD finally got a reader that reads 100% of it. We write PRDs with AI, engineers feed them to AI, and two models now talk to each other through a document. It fixed nothing. A guess read perfectly is still a guess.

The tell was always the TBD section: empty states "to be defined with design," refund edge cases "pending finance." A Figma file is just a prettier guess. Nobody drew the error state, and with AI products you can't draw every state anyway.

## I defended the PRD. Half of it holds.

In [PID #2](/writing/does-anyone-actually-read-my-prds) I compared PRDs to IKEA furniture. The half that held up is what a good PRD actually did: it gave an outsider full context, it opened a discussion, and it had an Out of Scope section everyone praised.

Every alternative I proposed back then (epics as PRDs, lean briefs, Figma first) moved closer to the artifact. This essay finishes that move. My new outsider is an AI, and full context no longer fits in a document written per feature. It fits in judgment written once.

## Same AI, same sentence, one folder

The experiment I keep running: take one sentence, like "split the bill after dinner with friends," and give it to Claude Code twice, in two empty projects. Same model. No clarifying questions allowed. Nobody types "continue."

Project A gets only the sentence. Project B gets the same sentence plus a folder of skills I've written over time. Every file in it is a mistake I stopped repeating.

The surprising part is what's in that folder. It's my old PRD, taken apart:

| PRD section | Where it lives now | What changed |
| --- | --- | --- |
| User, goal, north-star metric | Product strategy skills: [product-vision](/skills/product-vision) for the user and the goal, [metric-tree-builder](/skills/metric-tree-builder) for the north star | Applied to every build, not one feature |
| Out of Scope | [ruthless-prioritizer](/skills/ruthless-prioritizer) and its stop-doing list, plus Dietrich Gebert's open-source [ponytail](https://github.com/DietrichGebert/ponytail) skill ("the laziest senior dev in the room") | Enforced, not just agreed to |
| User journey and acceptance criteria | Flows skill: criteria as runnable tests | Pass or fail, no interpretation |
| Design specs | Design system skill, like [shadcn/ui](https://github.com/shadcn-ui/ui/tree/main/skills/shadcn) or [Tailwind Design System](https://github.com/wshobson/agents/tree/main/plugins/frontend-mobile-development/skills/tailwind-design-system) | The demo is built from production components |
| Definition of done | A goal condition checked every time the agent tries to stop | It can't declare victory early |

Here's the shift for PMs. A PRD was written per feature, for one reader, once. A skill is written once and runs on every build. Your judgment stops being a document and becomes infrastructure.

## Set the bar before you look

Speed is no longer scarce. Faros AI's *Acceleration Whiplash* report tracked two years of telemetry from 22,000 developers across 4,000 teams. At high AI adoption, completed epics rose 66%, and incidents per pull request rose 243%. (Faros sells engineering-measurement tools, so weigh it accordingly.) Judgment is the bottleneck.

So I judge both projects by three tests, fixed in advance:

1. Do all four states exist: with data, loading, empty and error?
2. Do the acceptance tests run, and does the out-of-scope test fail honestly, naming what's missing?
3. Does one line change the brand across every screen?

Project A typically looks great and fails all three. That's what a guess looks like when it runs. Project B produces a proof: a spec for the PM, acceptance tests for engineering, a fixture for QA and a demo for sales. One artifact, four jobs, nothing left to interpret.

## You never stopped writing requirements

The skills are requirements. The tests are requirements. The goal condition is a requirement. They just run now.

Cat Wu, Head of Product for Claude Code at Anthropic, told Lenny's Podcast that writing around ten great evals is one of the most underused PM skills. Sean Grove of OpenAI went further in his talk "The New Code": keeping the generated code and throwing away the prompt "feels a little like shredding the source and then very carefully version-controlling the binary." The spec is the source. The folder is where you keep it.

## What stays a document

Proofs answer "what should this be?" They don't answer everything. Infrastructure programs, data contracts, security and migration plans, cross-team dependencies and customer evidence still belong in docs.

This also isn't specs-to-code, where you write a doc, generate the code and never read it. That still produces garbage. With a proof, you keep, run and own what it produced. And no artifact replaces talking to each other. A proof just gives the argument something real to point at.

## The 1% is the job

Thomas Edison's split was one percent inspiration, ninety-nine percent perspiration. AI made the ninety-nine percent free. What's left is choosing: looking at working software and saying "this one, not that one." And a proof that isn't good enough today isn't a dead idea. It's an experiment you can rerun on the next model.

Don't describe the thing. Build the smallest version of the thing.

*Tal, still employed. Still writing requirements. They just run now.*

## Credits

- **Andrew Ambrosino** (OpenAI, Codex): "OpenAI Codex lead on the new shape of product work", Lenny's Podcast, June 28, 2026
- **Cat Wu** (Anthropic, Head of Product for Claude Code): "How Anthropic's product team moves faster than anyone else", Lenny's Podcast, April 23, 2026
- **Sean Grove** (OpenAI): "The New Code", talk transcript
- **Faros AI**: "The Acceleration Whiplash", AI Engineering Report 2026
- **Dietrich Gebert**: [ponytail](https://github.com/DietrichGebert/ponytail), open-source agent skill
- **Me, arguing the other side**: [PID #2: Does Anyone Actually Read My PRDs?](/writing/does-anyone-actually-read-my-prds)
