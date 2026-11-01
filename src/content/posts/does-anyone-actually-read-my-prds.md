---
title: "PID #2: Does Anyone Actually Read My PRDs?"
description: "Spoiler Alert: only if they're short, funny, or spark heated debates in Slack."
date: 2026-11-01
stance: notes
tags: [prd, process, ai]
skills: []
---

![Does anyone actually read my PRDs? A stack of PRDs stamped TL;DR, with a cat in sunglasses lounging on top](/images/posts/does-anyone-actually-read-my-prds/hero.svg)

PRDs require time. Both as a reader and as a writer. They are long, detailed, structured, but holistic, user-driven, clean, and potentially unlock a team's alignment. Actually, PMs that leverage AI can quite easily generate PRDs on the fly (though this still requires a thorough review and corrections), while it's not always clear whether all of those detailed sections are even relevant or if anyone reads them. In most cases, that's because it may seem like an "over-engineering" type of behavior—it takes time to read and understand, and it doesn't always cover all the necessary high-level user stories or the actual "why" behind it.

## Why PRDs Can Sometimes Be a Good Fit?

Well, the way I see it, we mostly divide product management responsibilities into three major categories:

- **Product Discovery** - When we speak with potential users and try to best articulate their problems and pains.
- **Product Strategy** - When we need to make sure we're on the right track so that developed features maintain the "product-market fit" mission, ensuring people actually need those features and measuring their success and contribution to the company's goals.
- **Product Execution** - When we need to make sure we can deliver the features we plan to deliver.

![Three jobs of product management: discovery, strategy and execution. A good PRD can cover all three.](/images/posts/does-anyone-actually-read-my-prds/three-jobs.svg)

Good PRDs have the potential to cover all elements, allowing readers to get the full context of a feature—or more often, a set of features.

## Why We Need to Get the Full Product Context

### External Providers Need Them

Sometimes we tend to forget that there are information barriers with colleagues. That's especially true when you're working with newcomers, and even more dramatically while working with external providers. Most startups, for example, don't hire full-time UX/UI designers. It's almost impossible for external designers to do a great job and provide insights or have creative freedom without being fully led if they don't receive enough context or understanding of the full product picture. Not getting this needed context—due to tight schedules—often leads to much slower outcomes, misunderstanding, and jargon gaps.

### It Opens a Room for Discussion

PRD structures are not set in stone. Some companies write them uniquely with their own proprietary templates, while others stick to the bare minimum. I don't see why marking a specific PRD writing task as done, just for the sake of doing it, can be beneficial. But if it includes specific sections such as context, problem, hypothesis/assumptions, solution requirements, design mocks, open issues, and an experiment plan, it can potentially lead to a collaborative, open discussion. This can include the necessary technical design, listed KPIs, questions about how to track success, and whether there are features that could be redundant for an MVP phase. Engineers and designers should have the option to provide feedback and follow-up questions.

More importantly, PRDs cannot foresee the future, and PMs should not be forced to take on a role akin to prophets. PRDs that foster communication and allow others to challenge them can benefit organizations much more than simply specifying deliverables.

### When You Need to Develop Something From Scratch

Any product has to start somewhere. To get things moving, you need something to lean on. A good, structured PRD could be a helpful starting point. Nevertheless, a working Gantt chart will probably work just as well. It depends on how well the team communicates and trusts each other when things go wrong.

### When You Work at FAAMG

You're surely familiar with the "Working Backwards" principle/process (if not, [click here](https://www.allthingsdistributed.com/2006/11/working_backwards.html)), but maybe the concept of the Amazon Six-Pager Memo is new to you. While Amazon banned meetings with PowerPoint presentations, Bezos suggested an alternative documentation format that covers—just as the name suggests—six distinct sections: intro, goals, tenets, the state of the business, lessons learned, and strategic priorities. The process of writing such a document is intended to be iterative and collaborative. Due to these characteristics, this approach can be a good alternative, as it forces all personnel involved to comment and be part of the writing process. This mechanism ensures there is both full alignment and product context before getting started.

## Are There Any Pitfalls You Should Avoid?

### "Fluff" Sections

Sometimes, PRDs are pre-structured with ready-made sections in templates. It's good to challenge these if your colleagues have already gotten used to them. Nevertheless, I think each PM should at least try the following two approaches:

1. Shadow a software developer as they read your PRD to identify redundant sections or items—or at least understand why they are considered redundant.
2. Question fully AI-generated sections.

### Trying to Satisfy Multiple Audiences == Really Long Documents

If you're working at a small company, overly long PRDs that try to cover all possible information are probably not the best choice. Nobody has time for that. While PRDs can often be labeled as the "single source of truth," they are rarely able to satisfy everyone involved. This leads to a tedious process full of compromises with little value added.

As far as I'm concerned, PRDs are written for software developers and designers. They should be long enough to ensure they are understandable and cover the needed information—but short enough to keep readers engaged.

### No Document Can Beat Communication

One thing that has consistently worked for me is holding short, focused brief meetings with relevant developers. These sessions help me consult on feature design, discuss dilemmas, and consider different perspectives. It's a classic win-win scenario. No matter how good you are at writing PRDs, if you're not engaging in conversations with your fellow developers, you've got a problem. If they're not coming to you with questions, that's a problem too.

### Trying to Make Sure All Dependencies Are Set

It's really difficult for a document to articulate all the necessary feature dependencies. If you try, you risk forcing readers to jump between multiple documents, which is hard to follow—especially when it's unclear whether those documents are updated. Task/project management platforms do a much better job in this regard. Moreover, I see dependency management as a Scrum/Product Owner activity rather than a purely Product Management one.

## Are There Any Good Alternatives?

### Using Epics as PRDs

PRDs are often transformed into Epics and Tickets (or any other JIRA alternatives, such as Projects and Tasks). The PRD title, mission, and motivation can be translated into an Epic's description, with each mentioned requirement or user story becoming a ticket under the Epic's umbrella. If so, why continue maintaining separate documents? There's no way those tickets can entirely replace all aspects of a PRD (otherwise, the tickets would become overly heavy IMO). However, for some companies, this approach might be good enough—at least in the beginning, when most companies tend to focus heavily on Product Execution (I know it's not the best practice, but it's often the reality).

### Stick with Mission Statements, User Stories, and Success Criteria Only

When working with external providers, such as UX/UI designers (which is common in early-stage startups), JIRA tickets are not always a suitable alternative, and a full PRD might be overkill. It's crucial to remember that aligning external designers with the company's mission and small details is nearly impossible within a tight schedule and budget. Sticking to the bare minimum can often provide more value than attempting to "do it the right way." Be sure to explain why a feature is needed and articulate it from the user's perspective. This way, designers can focus their tasks more effectively while keeping things simple and aligned with MVP goals.

### Let Figma Take the Lead (or Any Other Customer-Facing Tool)

Once the designers have completed their work and you've reached mutual agreement and alignment on polished design materials, can developers suggest a technical design based on those Figmas? If we follow the "Working Backwards" methodology, developers should be able to examine the "end goal" of a feature and propose implementation ideas. Additionally, aligning the design materials with development stages can be extremely helpful for the process.

## Important Sections That Always Get Compliments

![Anatomy of a PRD people read: background stories, user journey and out of scope get compliments; context, problem, hypothesis, requirements, mocks, open issues and experiment plan open discussion; exhaustive dependencies and template filler are fluff.](/images/posts/does-anyone-actually-read-my-prds/prd-anatomy.svg)

### Out of Scope

PRDs often increase stakeholders' appetites for additional potential features or implementation strategies. In my opinion, one of the main goals of a good PRD is to ensure all relevant team members stay focused and motivated. To release something quickly that generates value and collects feedback, it's important to identify and drop potential "nice-to-haves" from the outset (of course, with mutual agreement and sound reasoning).

### User Journey

Some readers of a PRD may not fully understand all aspects of the product. As a PM, you might be able to envision how all the puzzle pieces connect, but others may not. If you articulate how a new addition addressed by a PRD integrates with existing features or enhances the desired user journey, you'll help readers locate and contextualize the feature more effectively. This explanation can also link directly to the motivation behind the new feature. Does it unlock a desired behavior for the user? Does it make the product more satisfying to use?

### Some Background (Not Just User Stories)

People love stories—not just user stories. That's just how we're wired. Imagine yourself as a kid, waiting for a bedtime story that begins with, "Once upon a time…" You'll see that kids who hear this opening are instantly more engaged. The same principle applies to your colleagues. Include some real stories (not fabricated ones) about the challenges your clients face and why it's important to solve them. Developers tend to care more about these narratives than you might expect.

## So, Does Anyone Read Them?

PRDs are like assembling IKEA furniture: complex, occasionally unnecessary, but immensely satisfying when done right. They're long, structured, and holistic—providing a bird's-eye view of a product's context, but they often risk becoming unread tomes. Good PRDs strike a balance between context and brevity, focusing on alignment and clarity over sheer detail.

They're essential when working with external providers who lack the in-house familiarity with your full product's characteristics, and they're great conversation starters when structured with sections like "Out of Scope" and user journeys. However, let's face it: nothing beats talking to developers directly over coffee to hash out dependencies and tackle uncertainties.

While some might prefer using tickets and Epics as lean alternatives to PRDs, those approaches often fall short for full product discovery or crafting a compelling "why." So, love them or hate them, PRDs are here to stay—just make sure you skip the fluff, keep them readable, and remember they're meant to spark collaboration, not just documentation.
