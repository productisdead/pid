---
name: product-vision
description: Builds or reviews a product vision as one traceable story, from the customer's job to what ships this quarter, with a Hooked habit loop in the middle. Use for vision decks, strategy narratives or tying problems to the roadmap.
metadata:
  title: Product Vision
  category: Strategy
  icon: 🧭
  color: teal
  tags: [vision, strategy, narrative, jobs-to-be-done, hooked, okrs, deck, ai]
  level: advanced
  date: 2026-11-01
---

# Product Vision

You are a product leader writing the one asset that explains the whole product: why anyone cares, where things break today, how this product flips each problem, why people come back, and what ships this quarter to prove it. It is **one story**, not a stack of slides. Every section answers the question the previous one raised. If you can remove a section and nobody notices, cut it.

## When to use

- **Create**: "write our product vision", "build a vision deck", "tell this product's story end to end"
- **Rewrite**: an existing vision, pitch or strategy doc that sprawls, contradicts itself or doesn't reach the roadmap
- **Review**: "critique our vision", "does our roadmap connect to our problems?"
- **Hooked**: "apply the Hooked model to our strategy", "why don't users come back?"
- **AI product**: "what's our AI strategy?", a vision where a model does the core work (add the AI lens below)

Not this skill: a single feature spec (use a PRD review), one metric's breakdown (use a metric tree), a competitor deep-dive (use a teardown). If the user only wants the Hooked loop, run Step 1 for the loop's inputs and write section 11 alone.

## The spine

Everything hangs on one thread, traceable in both directions:

```
Job  →  Problems (max 3)  →  Counters (1 per problem)  →  Hooked loop  →  Key results  →  Proof
```

Give problems IDs P1–P3 and their counters C1–C3. Carry the IDs into the loop, key results and roadmap, so anyone can trace a shipped feature back to the job, and the job forward to what ships.

| Orphan | What it really is | Do |
| --- | --- | --- |
| Problem with no job above it | A feature request | Find the job or cut it |
| Counter with no problem | A solution looking for a problem | Cut it |
| Key result no counter or loop phase moves | Vanity | Cut it |
| Roadmap item serving no key result | A pet project | List it as Off-spine |
| Proof that measures no counter or loop phase | Decoration | Replace it |

## Step 0: Frame the asset

Settle four things before anything else. Infer them from context when you can; ask only for what you can't infer.

1. **Mode**: create, rewrite or review.
2. **Audience and the decision it should drive**: board (fund it), team (align on it), sales (sell it), new hires (understand it). The audience changes emphasis, not the spine. The board needs why now, the moat and the key results to be strongest. The team needs the problems, counters and loop.
3. **Horizon**: the vision usually points 2–5 years out, and the proof section lands in this quarter. State both on the cover.
4. **Format**: Markdown outline (default), a deck, a doc or a one-pager. Every format is built from the outline.

## Step 1: Gather before writing

Find the raw material in the files, the conversation and any connected tools. Ask for the rest. **Never invent any of it.** A made-up quote or number in a vision asset is worse than a blank, because people repeat it in board meetings.

| Material | What you need | Feeds |
| --- | --- | --- |
| Customer conversations | Transcripts, call notes, tickets, verbatim quotes with who said them | Job, problems, people, loop triggers |
| Segments | Segments, their size, and named example customers in each | Who it's for, GTM, packaging |
| Numbers | Pipeline, win/loss, activation, retention, usage frequency, time-to-value | Problems, loop, key results, proof |
| Alternatives | Competitors, adjacent tools, spreadsheets and manual work, **building it themselves**, doing nothing | Why now, moat |
| What exists | What has shipped, current roadmap, OKRs, pricing | Packaging, key results, proof |

**Ask once.** Put every question in a single message: at most five, ordered by how much of the spine each one unblocks. Don't run an interrogation. Then work with what you have.

**Grade the evidence** as you collect it:
- **Strong**: a pattern across several sources (5 of 12 interviews; a usage metric).
- **Weak**: a single source, one loud customer, or an internal opinion. You may use it, but label it.
- **Hypothesis**: no evidence yet. Write `Hypothesis: …`, never as fact.

Gaps get `[NEEDS: …]` in place and go to the **Open questions** list, each with an owner and how to answer it. If more than half the spine is `[NEEDS]`, stop after Step 1 and return the open questions plus a short research plan (who to talk to, what to pull) instead of a hollow draft. Pre-product teams are the exception: draft the whole thing, mark the problems and the loop as hypotheses, and make the proof section a list of tests.

## Step 2: Write the narrative, in this order

Each section answers a question and hands a new one to the next section.

**1. Cover: *What is this, in one line?***
The promise plus how it is delivered: "[outcome] for [whom] by [mechanism]". Add the horizon ("by 2028") and one line describing the world when the vision is true. A stranger should be able to repeat the cover line. No category buzzwords.
→ *Why would anyone want that?*

**2. The real job: *Why do they really buy?***
Write it as **"The job isn't X. It isn't Y. It's Z."** X and Y are what the team or the market assumes, usually the feature or the category. Z is the progress the customer is trying to make. Back Z with a job statement: *When [situation], I want to [motivation], so I can [outcome].* Then cover all three dimensions: functional, emotional ("stop feeling exposed"), social ("look in control in front of the CFO"). Open with an analogy or a customer story only if it's true and sharp.
Note the **forces of progress**, because later sections reuse them. Push (pain with today) and pull (the appeal of the new) drive the switch. Anxiety (fear of the new) and habit (comfort with today) block it.
→ *Whose job, exactly?*

**3. Who it's for: *Which segments, and what's the evidence?***
For each segment: a named example customer, a number (count, ARR, usage share) and why the job hurts most there. Say which segments you **don't** serve and why.
→ *Where does it break for them today?*

**4. Problems, max 3: *Where does it break today?***
One block per problem. Give the pattern a two-to-four-word name ("The Monday scramble"). Add one real quote, attributed, that shows **it hurts**. Add one real number that shows **it's a pattern**, not an anecdote. Add today's workaround and the **stakes**: what it costs in time, money, trust or missed opportunity. Rank the problems by frequency × severity. If you have five, two are symptoms of the others or belong to another job: merge or cut.
→ *Why hasn't this been solved, and why now?*

**5. Why now: *Why is this the moment?***
Eyal's three places to look for new habit-forming opportunities make a good checklist:
- **Nascent behaviours**: something a niche of early users already does that will spread.
- **Enabling technologies**: something that makes a loop newly cheap or fast.
- **Interface changes**: a new surface where users now spend time.

Add category maturity, regulation or a cost curve if those apply. Then **why us**: the insight, data, distribution or team that makes this ours to solve. Give evidence, not ambition.
→ *So how do we solve it?*

**6. The story, counters: *How do we flip each problem?***
Write exactly one counter per problem. A counter is a **one-word capability that inverts its problem** (P1 "Shadow spreadsheets" → C1 "Single-source"). Use the inversion test: put the counter next to the problem's pattern name and they should read as opposites. For each counter, give one sentence on how it works, and a before → after from the customer's point of view. Add a **proof metric**, preferably a leading indicator with a target (e.g. "% of teams with zero exported spreadsheets after 30 days: 12% → 60%"). If a counter needs "and", it's two counters: pick one.
→ *Who actually experiences this?*

**7. People inside: *Who feels it, buys it, uses it?***
One row per role: economic buyer, champion, daily user, blocker. For each, give the primary pain (as a P-number), what they need to see to say yes, and which counter speaks to them. Use roles from real accounts, not invented personas with stock-photo names. Use the job's anxiety force here: what does each role fear about switching?
→ *How do they get in?*

**8. Packaging: *How do customers get in?***
Tiers, who each tier is for, the entry point and the upgrade trigger. Each tier maps to a segment and unlocks a counter or a deeper pass through the loop. Upgrade triggers should come from stored value in the loop: more history, more seats, more integrations. If two tiers serve the same segment for the same job, merge them.
→ *Why won't a competitor, or their own engineers, just do this?*

**9. Moat: *Why not a competitor, or building it themselves?***
Name the real alternatives, including build-it-yourself and doing nothing. Say why each wins today, why we win, and **what compounds with use**. Stored value from the loop's investment phase is usually the most honest moat. Remember Gourville's "9× effect": users overvalue what they have by about 3×, and companies overvalue what they build by about 3×. The new thing must be dramatically better, not slightly better. That cuts both ways: it protects the incumbent's habit and it blocks yours.
→ *Where do we focus?*

**10. Go-to-market focus: *Where do we spend attention?***
Name the one beachhead segment, the motion (product-led, sales-led, partner) and the channel that already works, with its number. Name what you are deliberately **not** doing this year.
→ *Once they're in, why do they keep coming back?*

**11. The Hooked loop: *How does the product behave, use after use?***
This is the heart of the asset. Give it the most care. See the full method below.
→ *How will we know it's working?*

**12. Key results: *What moves if we're right?***
Three to five outcomes. Each is tagged to the counter or loop phase it measures, with a baseline, a target and a date. Include at least one **habit metric** (habitual users, %) and one **guardrail**: a metric that must not get worse, such as support load, churn after the first value moment, or opt-outs from notifications. Write outcomes only, never "ship X".
→ *What are we doing about it, and how sure are we?*

**13. Proof: *What has worked, what ships now, what could prove us wrong?***
- **Already proven**: shipped results with real numbers and named customers.
- **Shipping this quarter**: each item tagged to the KR it moves and the P-number it traces to.
- **Off-spine**: items that don't trace, for the team to defend or cut.
- **Riskiest assumption**: the one belief that, if wrong, breaks the spine. Give the cheapest test for it and the result that would make you change course.

## The Hooked loop (Nir Eyal, *Hooked: How to Build Habit-Forming Products*)

A hook connects the user's problem to the product often enough to form a habit, a behaviour done with little conscious thought. The aim is for the product to be the **first thing the user thinks of** when the problem shows up, with no ad or reminder needed. The loop has four phases. Each pass makes the next one more automatic.

```
   ┌──────────► 1. TRIGGER ──────────┐
   │      external → internal        ▼
4. INVESTMENT                   2. ACTION
stores value,              simplest behaviour in
loads next trigger         anticipation of reward
   ▲                                 │
   └────────── 3. VARIABLE REWARD ◄──┘
               tribe · hunt · self
```

### First: does a habit fit this product?

Habits form in the **habit zone**, where **frequency** and **perceived utility** are both high enough. Low frequency can be offset by very high utility, and vice versa. As a working heuristic, behaviours that happen less often than about weekly rarely become true habits.

- **The core behaviour is frequent** (daily or weekly): design the full loop.
- **The core behaviour is rare** (quarterly planning, annual tax filing): don't force it. Make the product the top-of-mind default when the need comes back. Find a more frequent adjacent behaviour that can carry a loop (checking status, reviewing results, a digest). Lean on investment, because stored value is what brings people back after months away.
- **B2B with several actors**: the **daily user's** loop drives retention, so design that one. The **buyer** doesn't need a habit. The buyer needs to see the loop working (usage reports, outcomes). Show both in one line.
- **Vitamin or painkiller?** Habit-forming products often start as vitamins (nice to have) and become painkillers (the itch hurts until it's scratched). Say which this product is today and what turns it into the other.

### 1. Trigger: the cue that prompts the behaviour

**External triggers** contain the next step inside the trigger itself: a button, a notification, an email with one call to action. There are four kinds:
- **Paid**: ads, search. Effective but expensive. Use them to acquire users, not to bring them back.
- **Earned**: press, featured placements. Free but short-lived.
- **Relationship**: word of mouth, invites, shares. Can drive viral growth when the product genuinely delights.
- **Owned**: a home-screen icon, a newsletter, notifications, an integration in a tool the user already lives in, all opted into by the user. Owned triggers drive repeat use until the habit forms.

**Internal triggers** live in the user's mind: an association between a feeling, routine or situation and the product. Negative emotions are frequent internal triggers: boredom, loneliness, frustration, confusion, uncertainty, fear of missing out, fear of loss, indecision. Situations count too ("right after standup", "month-end close").

- **Move users from external to internal triggers.** External triggers win the first uses. Internal triggers own the habit.
- **Find the internal trigger** by asking "why?" until you reach an emotion (the 5 whys). Use the user's own words from research, never the team's guess. Then fill in: *"Every time the user [feels / is in this situation], they [action]."*
- **The internal trigger must be the job's emotional dimension** from section 2. If it isn't, the loop and the story have come apart. Fix one of them.
- **Time the external trigger to the internal one.** The best notification arrives at the moment the itch is felt.

### 2. Action: the simplest behaviour done in anticipation of reward

BJ Fogg's model: **B = MAT**. A behaviour happens when **Motivation**, **Ability** and a **Trigger** are present at the same moment. When a behaviour doesn't happen, find out which of the three is missing.

- **Motivation** has three core motivators, each with two sides: seeking pleasure / avoiding pain, seeking hope / avoiding fear, seeking social acceptance / avoiding social rejection.
- **Ability**: raise ability before trying to raise motivation. It's usually cheaper. Fogg's six elements of simplicity are:
  1. **Time**: how long it takes
  2. **Money**: what it costs
  3. **Physical effort**: how much labour it takes
  4. **Brain cycles**: how much mental effort and focus it needs
  5. **Social deviance**: how accepted the behaviour is by others
  6. **Non-routine**: how much it disrupts existing routines

  Name the **scarcest** one for this user in this context. That's the one to fix first.
- **Heuristics** that change perceived motivation and ability. Use them honestly:
  - **Scarcity**: scarce things seem more valuable.
  - **Framing**: context shapes perceived value.
  - **Anchoring**: people fix on one reference point.
  - **Endowed progress**: people push harder toward a goal they feel they've already started.
- Write the action as **one verb plus one object** ("check the forecast"). If the core action needs a tutorial, it isn't simple enough yet.

### 3. Variable reward: what scratches the itch, with enough unpredictability to bring them back

What drives the craving is anticipating the reward, not the reward itself. A fully predictable reward satisfies once, then fades into the background.

- **Tribe**: social rewards, such as feeling accepted, important or included (a teammate's reply, recognition, a mention).
- **Hunt**: the search for resources and information (new leads, fresh insight, the next result).
- **Self**: intrinsic rewards such as mastery, competence, completion and control (the inbox cleared, every check green).

Rules for rewards:
- **The reward must scratch the internal trigger's itch.** Variability that doesn't scratch it is noise.
- **Keep the user's autonomy.** People resist when they feel forced, and reminding them they're free to choose increases compliance. Users who feel manipulated leave.
- **Prefer infinite variability.** Finite variability (a game you've finished, a fixed content set) loses its pull once it becomes predictable. Infinite variability (new data, user-generated content, other people) renews itself.
- **Keep the core value reliable.** Vary the content and the insight, never whether the product works. This matters most in B2B.

### 4. Investment: a small bit of work that makes the next pass more likely

The user puts something in that improves the product with use. Ask for it **after** the reward, when the user has just received value and feels reciprocity, not before.

- **Why it works**: people value what they put effort into (the IKEA effect), want to stay consistent with past behaviour, and adjust their attitudes to fit what they've already done (avoiding cognitive dissonance).
- **Ask for a small bit of work**, not a big commitment.
- **Every investment should do two jobs**:
  1. **Store value.** The kinds of stored value are content (documents, history), data (preferences, configuration, integrations), followers and connections, reputation (ratings, track record) and skill (time spent learning the product).
  2. **Load the next trigger.** Send a message and the reply brings the user back. Configure a report and the weekly digest arrives.
- Stored value raises switching costs. That makes it the honest core of the moat in section 9.

### Habit testing: measure the loop, don't assume it

1. **Identify.** Decide how often a user *should* use the product (daily for a feed, weekly for a planning tool). Then count who actually does. Eyal's rule of thumb is that at least **5%** of users should be habitual. Aim much higher for a work tool that's part of a routine.
2. **Codify.** Find the **habit path**: the similar early actions your habitual users took. That becomes the activation target.
3. **Modify.** Change onboarding and the product to push new users down the habit path, then measure again.

**Diagnose the weakest phase with data.** Low trigger-to-open points to the trigger. Opens without the core action points to ability. Actions without a return points to the reward. Returns that stall points to no stored value.

### Ethics: the Manipulation Matrix

Ask two questions: *Would the team use this product itself?* and *Does it materially improve the user's life?*

| | Improves the user's life | Doesn't |
| --- | --- | --- |
| **Maker uses it** | **Facilitator**: build it | **Entertainer**: can work, but tends to be fleeting |
| **Maker doesn't** | **Peddler**: well-meaning, but rarely succeeds without the empathy that comes from use | **Dealer**: exploits users. Don't build it. |

If the product isn't a Facilitator, say so in plain words. Never design a loop that depends on hiding how to cancel, fake scarcity, or notifications the user didn't opt into. Pair every engagement KR with a guardrail.

## If the product runs on AI

Apply this lens whenever a counter, the loop or the moat depends on a model. It adds no sections. It hardens the ones you have.

### Principles

- **Start with the problem, not the AI.** This is the "problem-first" approach Aishwarya Naresh Reganti and Kiriti Badam teach. The model is a mechanism inside a counter, never the counter itself. Test: rewrite the counter without the word "AI". If nothing is left, it was never a counter. If you can't name the P-number the model serves, it's off-spine.
- **Design for squishiness.** Model output is probabilistic, so the failure path is part of the product. Alex Komoroske's point, paraphrased: even at 99% accuracy, a product that punches the user in the face the other 1% of the time isn't viable. Design for the cost of a miss, not the average. Show what the user sees when the model is wrong, how they notice, and how they recover.
- **Flywheels beat first-mover advantage.** Reganti's point, paraphrased: being first to ship an agent matters less than building the flywheel that makes it better with use. Competitors can rent the same model. They can't rent your loop. Every accept, reject, correction and human edit is stored value (investment phase) that improves the next output, and that's the real moat in section 9.

### Questions to add to the Step 1 ask

1. **What specific user problem are you solving with AI?** The answer is a P-number.
2. **What should the AI decide, and what should a human decide?** Map the split onto the roles in section 7. Start where impact is low and human control is high, then widen autonomy as the evidence comes in.
3. **How will you handle the 5% of cases where the AI fails?** Cover detection, fallback, recovery, and who bears the cost of the miss.

### Common mistakes to flag

| Mistake | What it looks like | Fix |
| --- | --- | --- |
| AI for AI's sake | "AI-powered" on the cover or in a counter, with no P-number behind it | Name the problem it serves, or cut it |
| Single-model thinking | The plan assumes one model, one call, one right answer; the moat is "we use the best model" | Treat the model as one component, next to data, rules, evals and people. The vision should survive a model swap. |
| Ignoring the failures | Only the happy path is shown, with no error rate, fallback or eval | Add the failure path to the counter, an error-cost guardrail KR, and evals to the proof |
| Over-automation | The AI acts where a human should decide, or the user can't see, undo or override it | Keep high-stakes calls human and earn autonomy step by step. Users who lose control leave, the same autonomy rule as the variable reward. |

### Writing section 11

| Phase | This product (user's words where possible) | Metric: today → target | Traces to |
| --- | --- | --- | --- |
| Internal trigger | Emotion or situation | Share of research quotes that show it | Job emotion, P# |
| External trigger | Type and exact cue | Trigger → open rate | — |
| Action | Verb + object; scarcest simplicity element and its fix | Time to action, completion rate | C# |
| Variable reward | Tribe / hunt / self; what varies; why it scratches the itch | Return rate within the habit window | C# |
| Investment | The small bit of work; stored-value type; the next trigger it loads | % who invest; stored value per user | Moat |

Then:
- **Habit statement**: "Every time [user] feels [trigger], they [action] in [product], because they know they'll get [reward]."
- **Fit**: expected frequency, position in the habit zone, vitamin or painkiller, and the B2B user loop vs buyer view if relevant.
- **Habit metric**: the definition of habitual, today's %, and the target. Tie it to a KR.
- **Weakest phase**: diagnosed with data, and linked to the roadmap item that fixes it.
- **Manipulation Matrix**: the position, and the guardrail KR.

The table and these lines must answer Eyal's five Hook canvas questions:
1. What do users really want, and what pain does the product relieve?
2. What brings them to the product?
3. What is the simplest action they take in anticipation of reward, and how could it be simpler?
4. Is the reward fulfilling, yet leaves them wanting more?
5. What bit of work do they invest, and does it load the next trigger and store value?

## Writing rules

- **The headline is the takeaway**: a sentence with a point of view. ✗ "Problems" ✓ "Ops leads rebuild the same forecast every Monday"
- **One idea per section.** If a headline needs "and", split it or cut one half.
- **Use real names, numbers and quotes**, attributed. Approximations are fine when labelled ("~40%, from 12 calls").
- **Three problems and three counters, never more.** One one-word counter per problem.
- **Keep it short.** Aim for at most about 80 words per block outside section 11, and 13 blocks in total. A deck built from this should be about 15 slides, not 40.
- **Don't invent anything.** Gaps go to Open questions.

### Calibration (illustrative; never reuse this content)

A forecasting tool for ops leads, traced along the spine:

| Job | Problem | Counter | Loop | KR | Shipping |
| --- | --- | --- | --- | --- | --- |
| "Walk into Monday already knowing the number" | P1 The Monday scramble: "I lose every Monday morning to this" (VP Ops, Acme); 3.5 h/week median | C1 Ready: the forecast is waiting at 7am | Trigger: Monday dread → owned 7am digest; reward (hunt): what changed since Friday | Weekly-active ops leads 22% → 45% by Q2 | Digest v2 with "what changed" diff |

**Weak headline:** "Our solution". **Strong:** "The forecast is ready before they are."
**Weak counter:** "AI-powered insights". **Strong:** "Ready". It inverts "scramble" in one word.

## Output format

A Markdown outline. Open questions go first, so nobody mistakes a draft for a finished vision. One block per section, each starting with its headline. The traceability table and the review log go last.

```markdown
# [Product]: [cover line]
**Audience:** … · **Horizon:** … · **Evidence:** strong / mixed / mostly hypotheses

## Open questions
- [NEEDS] … (owner: …, how to answer: …)

## 1. [Headline]
… one block per section, 1–13, using the tables defined above …

## Traceability
| Job | Problem | Counter | Loop phase | KR | Proof / roadmap |

## Review log
Pass 1: … · Pass 2: … · Still blocked on: …
```

**Visual asset.** Build a deck, page or one-pager only after the review loop passes, and only from the outline. Use one slide per block, with the headline as the slide title. On problem slides, the quote and the number are the biggest things on the page. Show the loop as a four-phase diagram filled with this product's specifics. Don't add claims in the visual that aren't in the outline.

**The deck.** Open with three beats before you show the product. Each one is built from sections the outline already has:

1. **Status quo:** *What does the world look like today?* The job and how people get it done now (sections 2–3). Describe it neutrally, as something the audience will recognise.
2. **Pain:** *Why is that a real problem for real people?* The problems (section 4). Each one gets a named person, their quote and the number that shows it's a pattern.
3. **Stakes:** *What does it cost?* Measure it in time, money, trust and missed opportunity, each with a number and a source. Stakes turn a problem into a reason to act now.

Then the rest of the story:
- **The killer line.** The cover line, sharpened until people repeat it. A strong pattern is *a benefit people already know + an experience they can't get today*. Uber's early pitch is the classic example: the convenience of a New York cab plus the experience of a professional chauffeur. Test the line by asking a stranger to say it back.
- **Unit economics.** Show the math, don't just state a market size: *if we serve X% of [segment], that's N customers × $P = $Y in revenue*. Build it bottom-up from segment counts (section 3) and tier prices (section 8). Every input is a real number or a labelled assumption. A big TAM with no path to it is decoration.
- **Make it feel inevitable.** By the last slide, the audience should feel this is going to happen and the only question is who builds it. That feeling comes from evidence, not adjectives: stakes that are rising, a why-now shift that has already started (section 5), proof that it works (section 13), and a moat that compounds (section 9).

**Review mode.** Map the existing asset onto the spine first, then run the review loop against it. Report:
- the spine as it stands, with gaps
- sections that could go without anyone noticing
- broken traces
- unsupported or invented-looking claims
- the three highest-leverage fixes

Rewrite only when asked, or when the gaps are fundamental.

## Step 3: Review loop

Don't hand over the first draft. Review it, fix it, and review again.

**Each pass:**
1. **Read only the headlines, in order.** Do they tell the whole story? Does each one answer the question the previous one raised?
2. **Run the checklist below.** Record each failure with the specific line that fails, not just a tick.
3. **Read as three skeptics:**
   - a **CFO**: "Why would anyone pay, and why now?"
   - a **new engineer**: "What do I build, and why that first?"
   - a **customer** from section 3: "Is this my problem, in my words?"
   Fix what each one wouldn't buy.
4. **Fix everything you found, then start the next pass.**

**Stop** when a full pass finds nothing to fix, or when every remaining failure needs data only the user has (move those to Open questions). After five passes, stop anyway and say the problem is in the inputs. Log each pass in one line: what failed and what changed.

**Checklist**
- [ ] Cover: promise, mechanism and horizon, repeatable by a stranger
- [ ] Job: "isn't X, isn't Y, it's Z", with a job statement and functional, emotional and social dimensions
- [ ] Segments are named with evidence, plus who it's not for
- [ ] ≤ 3 problems, each with a named pattern, an attributed quote (pain), a number (pattern) and the stakes (cost)
- [ ] Decks: status quo → pain → stakes come before the product; the unit-economics math is shown and every input is sourced
- [ ] Why now rests on evidence (a behaviour, technology or interface shift), plus why us
- [ ] Exactly one one-word counter per problem, passing the inversion test, with a proof metric and target
- [ ] Alternatives include build-it-yourself and doing nothing; the moat says what compounds
- [ ] GTM names one beachhead and what we're not doing
- [ ] Hooked fit was checked. The internal trigger is the job's emotion, and the reward scratches it.
- [ ] Action is one verb + object, and the scarcest simplicity element is addressed
- [ ] Investment stores value and loads the next trigger, and comes after the reward
- [ ] The habit metric has a definition, a baseline and a target. There's a guardrail KR. The Manipulation Matrix position is stated.
- [ ] The loop's weakest phase is diagnosed with data and linked to a roadmap item
- [ ] KRs are outcomes with baseline, target and date, each tagged to a C# or loop phase
- [ ] Every roadmap item traces to a KR, and anything that doesn't is listed as Off-spine
- [ ] The riskiest assumption is named, with a test and a change-course result
- [ ] AI products: every model use traces to a P#, the AI-vs-human split is stated, the failure path has a guardrail KR, and the flywheel appears in investment and moat
- [ ] Removal test: every section would be missed if cut
- [ ] Nothing is invented. Weak evidence and hypotheses are labelled.

## Tone

Confident, specific, plain. Write like a founder explaining the product to a smart friend, not like a deck generator. Cut adjectives before you cut evidence. When a section is weak because the data is thin, say so instead of dressing it up.
