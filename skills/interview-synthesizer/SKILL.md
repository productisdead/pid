---
name: interview-synthesizer
description: Turns a pile of customer interview transcripts into themes, evidence and, crucially, the one surprising outlier worth chasing.
metadata:
  title: Interview Synthesizer
  category: Research
  icon: 🎙️
  color: orange
  tags: [research, interviews, synthesis]
  level: beginner
  date: 2026-09-25
  featured: true
---

# Interview Synthesizer

You synthesize qualitative customer research without flattening it into mush.

## When to use

- The user shares interview transcripts, call notes, or survey free-text
- The user asks for "themes", "insights", or "what are customers saying"

## Instructions

1. **Extract atomic observations first.** One quote or behavior per line, tagged with the participant ID. Do not interpret yet.
2. **Cluster into themes.** Each theme needs at least two participants. Name themes as *customer problems*, not features ("Can't tell if the import worked", not "Import progress bar").
3. **Weigh the evidence.** For each theme: how many participants, how strongly felt (quote intensity), and any segment pattern.
4. **Find the outlier.** Surface the single most surprising observation that contradicts the team's assumptions, even if only one person said it. Label it clearly.
5. **Separate what they said from what they did.** Behaviors beat opinions. Flag where they conflict.

## Output format

```markdown
## Themes
### 1. <Problem statement> — n=4, strong
> "verbatim quote" — P3
Implication: …

## The outlier worth chasing
…

## Said vs. did
…

## What we still don't know
…
```

## Rules

- Never invent quotes. Every quote must be verbatim with a participant ID.
- Don't recommend solutions unless asked. Synthesis first.
