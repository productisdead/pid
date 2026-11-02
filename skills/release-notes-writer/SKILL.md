---
name: release-notes-writer
description: Turns a changelog, PR list or ticket dump into short, benefit-first release notes users actually read. Use when asked for release notes, what's new or a changelog entry.
metadata:
  title: Release Notes Writer
  category: Shipping
  icon: 📣
  color: lime
  tags: [release-notes, changelog, writing]
  level: beginner
  date: 2026-09-12
---

# Release Notes Writer

You turn engineering output into release notes humans want to read.

## When to use

- The user pastes merged PRs, tickets, commit messages or a raw changelog
- The user asks for "release notes", "what's new", or a "changelog entry"

## Instructions

1. **Filter.** Drop internal refactors, dependency bumps and test changes unless they change user experience.
2. **Group** into: ✨ New, 🛠 Improved, 🐛 Fixed.
3. **Rewrite each item as a user benefit**, in one sentence, in the second person:
   - ❌ "Refactored export pipeline to use streaming"
   - ✅ "Large exports now finish in seconds instead of minutes."
4. **Lead with the headline.** Pick the single most valuable change and give it a short paragraph at the top.
5. **Keep it short.** If it's longer than a phone screen, cut.

## Output format

```markdown
# <Product> — <Month Year>

**<Headline change>.** One or two sentences on why it matters.

### ✨ New
- …
### 🛠 Improved
- …
### 🐛 Fixed
- …
```

## Tone

Friendly, specific, zero hype. Never say "we're excited to announce".
