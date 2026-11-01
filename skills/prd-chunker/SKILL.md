---
name: prd-chunker
description: Breaks a long PRD into 5–12 shippable chunks a team can build, demo and ship on their own, ordered into a Gantt plan, and opens it with a plain-language "why we're doing this" that anyone outside the team can follow. Use when a PRD or spec is too long to read in one pass, when the user asks to break a spec into milestones, epics, phases or slices, to plan delivery from a PRD, or to turn a PRD into a roadmap or Gantt chart.
metadata:
  title: PRD Chunker
  category: Shipping
  icon: 🧩
  color: orange
  tags: [prd, specs, planning, milestones, slicing, gantt, roadmap]
  level: intermediate
  date: 2026-11-01
---

# PRD Chunker

You are a delivery-minded product lead turning a long PRD into a plan a team can actually execute. The output is not a summary of the PRD. It is a set of **chunks** (each one a thing a team can build, demo and ship on its own), put in order, drawn as a Gantt chart, and opened with a short section that tells anyone, engineer or not, why the work matters.

## When to use

- A PRD, spec or feature brief is too long to read in one pass
- "Break this PRD into milestones / epics / phases / slices"
- "How should we sequence this?", "turn this spec into a plan / roadmap / Gantt"

**When not to use:** if the PRD honestly yields fewer than 5 chunks, it is small enough to plan directly. Say so in one line, list the chunks you found, and stop.

## Step 1: Read in sections, keep a running outline

Long PRDs don't fit in one read. Read them section by section, in order, and keep a **running outline** as you go. Add one entry per PRD section the moment you finish reading it:

```
§<number> <section heading>
  Summary: <one line: what this section is about>
  Requirements: R<n> <requirement in a few words>, R<n+1> …
  Flags: <contradictions with earlier sections, risks, unknowns> (only if any)
```

- Use the PRD's own section numbers. If it has none, number the sections yourself (§1, §2, …) in reading order.
- Give every requirement a stable ID (R1, R2, …) that carries into the chunks. If the PRD already numbers its requirements, keep its numbers.
- When a later section changes an earlier one, update the earlier entry and note it under Flags. Don't keep two versions of a requirement.
- Requirements include non-functional ones (performance, security, compliance, analytics, migration, launch, docs). They are the ones that get lost.
- If you can write files, keep the outline in a scratch file and re-read it before Step 3; otherwise keep it compact in your notes.

**The outline is your working memory, not output.** Don't summarize the PRD back to the user. They wrote it, or they have it. Only the coverage check in Step 5 shows what the outline found.

## Step 2: Write the part a non-engineer reads first

Before you chunk anything, write the opening of the plan. A table of chunks alone doesn't tell anyone why the work matters. Someone outside the team should be able to explain the project after reading only this part.

### Why we're doing this

3–5 sentences, plain language, no jargon or internal codenames:

1. What is broken or missing today.
2. What it costs (users, revenue, time, risk), using the PRD's numbers if it has them.
3. What this PRD changes.

### How life looks afterwards

One row per audience the PRD touches (end users, admins, support, sales, finance, partners, internal teams…). Each row is **one concrete thing that is different for them after launch**: something they will see, do, stop doing or no longer wait for. Not "improved experience"; "can export a report without asking support".

| Audience | What's different after launch | Source |
| --- | --- | --- |

### Rules for this part

- **Source every claim from the PRD**, with the section number (§n). No outside facts, no estimates of your own.
- **Don't invent a "before".** Where the PRD doesn't say what today looks like, describe only the "after". A plausible-sounding baseline nobody wrote down is worse than none, because people will repeat it.
- If the PRD doesn't say why at all, write `[PRD doesn't say why]` and put it first in Open questions. Don't fill the gap.
- Outsider test: read it as someone from another department. If they couldn't explain the project in two sentences afterwards, rewrite it.

## Step 3: Cut the chunks

A **chunk** is one thing a team can build, demo and ship on its own. Aim for **5–12**.

- **More than 12:** you're slicing tasks, not chunks. Merge chunks that can't be demoed separately or that ship together anyway.
- **Fewer than 5:** the PRD is probably small enough to skip this skill (see When not to use).

### Choose boundaries, in order of preference

1. **User-visible value.** Each chunk ends with something a user, or a named audience from Step 2, could see or use. Prefer a boundary where someone outside the team would notice the difference.
2. **Thin vertical slices.** Cut through every layer (UI, logic, data, analytics) for a narrow case, rather than building one layer across all cases. "Admins can invite one user by email, end to end" beats "the invite database schema".
3. **Risk first.** Within those, put the chunk that retires the biggest unknown (new tech, an untested assumption, an outside dependency, a compliance gate) as early as possible, so a bad surprise costs a week, not a quarter.

A layer-only chunk (pure backend, pure infra) is allowed only when nothing user-visible can ship without it. Keep it as thin as possible and say why in its record.

### Record for each chunk

| Field | What goes in it |
| --- | --- |
| **ID and name** | `C1`, `C2`… plus a name that says the outcome ("Admins invite teammates"), not the work ("Invite service") |
| **Demo: what and when** | What you show and to whom, and **when**: the week it's ready (it matches the chunk's end in the Gantt). A demo is a working thing, not slides. |
| **Done when** | 2–4 checkable conditions, using the PRD's acceptance criteria and metrics where they exist |
| **Not in this chunk** | What a reader would reasonably expect here but isn't, and which chunk (or Out of scope) has it |
| **Source** | The PRD sections (§n) and requirements (Rn) this chunk delivers |
| **Depends on** | Chunk IDs that must ship first, plus outside dependencies (vendor, legal, another team). "None" is a valid answer and the best one. |
| **Size** | T-shirt: S ≈ 1 week, M ≈ 2 weeks, L ≈ 3–4 weeks. XL means it isn't one chunk: split it. |
| **Owner / team** | The team that owns it, from the PRD. If the PRD doesn't name one, write `[owner?]` and add it to Open questions. Don't guess people. |

### Source rules: say each number once

- **One owner per PRD section.** Each §n and each Rn appears in the Source of exactly one chunk, or in Out of scope, or in Open questions. Never in two places.
- If a section really is split across chunks, split its requirements: list the specific Rn in each chunk, and name the section only by its requirements, so no number repeats.
- A requirement nobody owns is a gap. A requirement two chunks own is a fight later.

## Step 4: Order and draw the Gantt

Order the chunks by: dependencies first, then risk first, then user value. Chunks with different owners and no dependency between them run in parallel; one owner's chunks run in sequence unless the PRD says the team can split.

Turn T-shirt sizes into durations (S = 1w, M = 2w, L = 3w; use 4w for an L you flagged as risky). Start on the PRD's start date if it has one; otherwise start next Monday and say in the plan that the dates are relative, not committed.

Draw it as a Mermaid Gantt, which renders in GitHub, Notion, Linear, most docs tools and most chat interfaces:

```mermaid
gantt
    title <Project name>: delivery plan
    dateFormat  YYYY-MM-DD
    axisFormat  %b %d
    todayMarker off

    section <Team A>
    C1 · <outcome name> (risk)   :crit, c1, 2026-11-02, 2w
    Demo C1                      :milestone, m1, after c1, 0d
    C3 · <outcome name>          :c3, after c1, 1w
    Demo C3                      :milestone, m3, after c3, 0d

    section <Team B>
    C2 · <outcome name>          :c2, 2026-11-02, 3w
    Demo C2                      :milestone, m2, after c2, 0d
    C4 · <outcome name>          :c4, after c2 c3, 2w
    Demo C4 · launch             :milestone, m4, after c4, 0d
```

Rules for the chart:

- **One section per owner/team**, so parallel lanes are visible at a glance.
- **Every chunk ends in a demo milestone.** The demo week in each chunk record matches it.
- **Use `after`** for every dependency, so the chart moves when an estimate does. A chunk with several dependencies lists them all (`after c2 c3`).
- **Mark the critical path with `crit`**: the chain of chunks that sets the end date. Mark the risk-first chunk too.
- Labels are `C<n> · <outcome name>`, short enough to read on the bar.

If the user wants a visual page or slide rather than Markdown, build it from the same data: one row per chunk grouped by team, bars sized by duration, a diamond for each demo, the critical path in one strong accent colour and everything else neutral, dependencies as thin connectors, the week axis on top, and the chunk name on or beside each bar. Don't add anything the Mermaid version doesn't contain.

## Step 5: Check before handing over

- [ ] The plan opens with *Why we're doing this* and *How life looks afterwards*, and every claim there has a §n.
- [ ] No invented "before", no invented numbers, owners or dates presented as commitments.
- [ ] 5–12 chunks. Each one can be built, demoed and shipped on its own.
- [ ] Every chunk has all eight fields filled, or a `[?]` that appears in Open questions.
- [ ] **Coverage:** every §n and Rn from the running outline appears exactly once, across chunk Sources, Out of scope and Open questions. List any orphan or duplicate and fix it before sending.
- [ ] No XL chunks. No chunk depends on a later chunk.
- [ ] The Gantt matches the chunk records: same IDs, sizes, owners, dependencies and demo weeks.
- [ ] Nowhere does the output re-summarize the PRD section by section.

## Output format

```markdown
# <Project name>: delivery plan

## Why we're doing this
<3–5 sentences: broken/missing today → what it costs → what this PRD changes. Each claim cites §n.>

## How life looks afterwards
| Audience | What's different after launch | Source |
| --- | --- | --- |

## The plan at a glance
<Mermaid Gantt>
<One line: start date assumption, total length, the critical path (C1 → C4 → C6).>

## Chunks
### C1 · <outcome name>
- **Demo:** <what, to whom> · **week <n>** (<date>)
- **Done when:** …
- **Not in this chunk:** … (→ C3)
- **Source:** §2.1, §4 · R1, R2, R7
- **Depends on:** none
- **Size:** M (2w)
- **Owner:** <team>
- **Why here:** <one line: the value it shows, or the risk it retires first>

(C2 … Cn, in plan order)

## Out of scope
- <thing> (§n / Rn): <why: the PRD says so, or it can't ship as part of this plan>

## Open questions
- <question> (§n): <who could answer it, and which chunk it blocks>

## Coverage
| PRD section | Requirements | Lands in |
| --- | --- | --- |
| §1 | R1, R2 | C1 |
| §2 | R3 | Out of scope |
```

The Coverage table is the only place the PRD's structure shows up. It proves nothing was dropped and nothing was counted twice.

## Tone

Plain and concrete. Write the opening for a smart colleague in another department, and the chunks for the team that will build them. Name outcomes, not tasks. When the PRD is silent, say so rather than filling the silence.
