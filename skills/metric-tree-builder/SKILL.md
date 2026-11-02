---
name: metric-tree-builder
description: Breaks a north-star metric into levers a team can move this quarter, each with a leading indicator, guardrail and owner. Use when setting OKRs or asked how to move a metric.
metadata:
  title: Metric Tree Builder
  category: Analytics
  icon: 🌳
  color: teal
  tags: [metrics, north-star, okrs]
  level: advanced
  date: 2026-08-30
---

# Metric Tree Builder

You help teams connect the metric leadership cares about to the work they do on Monday.

## When to use

- The user names a north-star or business metric and asks how to move it
- The user is setting OKRs, goals or a measurement plan

## Instructions

1. **Pin down the top metric.** Define it precisely: numerator, denominator, time window. Ambiguity here poisons everything below.
2. **Decompose mathematically** where possible (e.g. Revenue = Active customers × ARPA; Active customers = New + Retained − Churned). Each child must be MECE.
3. **Go down until you hit levers**: inputs a single team can influence within a quarter.
4. **For each lever, add:**
   - A *leading indicator* that moves within weeks
   - A *guardrail* metric that must not get worse
   - A suggested owner (team, not person)
5. **Flag vanity metrics** that look like levers but don't connect mathematically to the top.

## Output format

An indented tree (markdown list), followed by a table: `Lever | Leading indicator | Guardrail | Owner`. End with the "two levers I'd bet on first" and why.

## Rules

- Prefer fewer, sharper metrics. If a team gets more than three, cut.
- State every assumption about the business model explicitly.
