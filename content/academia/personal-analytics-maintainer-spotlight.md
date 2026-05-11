---
name: André Meyer
institution: University of Zurich
department: Department of Informatics
projectName: PersonalAnalytics
projectRepo: https://github.com/HASEL-UZH/PersonalAnalytics
projectWebsite: https://hasel.dev/PersonalAnalytics
maintainerProfiles:
  - github: https://github.com/casaout
  - github: https://github.com/HASEL-UZH/
  - orcid: https://orcid.org/0000-0002-5532-1181
badges: ["Academic Maintainer", "Senior Researcher"]
description: "An open-source, privacy-focused self-monitoring tool for knowledge workers and researchers that runs locally, collecting computer interaction data without sending anything to the cloud."
---

## What is PersonalAnalytics, and what does it help people do?

PersonalAnalytics is an open-source, privacy-focused self-monitoring tool for knowledge workers and researchers. It runs locally on Windows and macOS, collecting computer interaction data – such as active applications, window titles, and self-reported mood and productivity – without sending anything to the cloud.

Researchers use it as a ready-made foundation for field studies: rather than building data collection infrastructure from scratch, they can fork the project, add their own trackers or interventions, and run studies with real participants. Individuals can also use it simply to reflect on their own work habits.

The project started as a tool for studying software developers, but has since expanded to knowledge workers more broadly – and is now evolving into a full research platform enabling privacy-conscious data donation and cross-study collaboration.

<img width="50%" alt="personal-analytics screenshots" src="https://github.com/user-attachments/assets/d8ea70be-8841-469d-9d61-0acb784bedf7" />


## What inspired this project?

We originally wanted to help software developers to better understand their own work habits, time spent at work, and how that relates to productivity. To achieve this, we aimed to develop a personalised and privacy-sensitive tool to capture and visualise different types of computer interaction data.

Inspired by tools like Fitbit, which promote physical activity, we wanted to provide actionable insights through retrospection. The project attracted interest from Microsoft Research, leading to me being invited to internships and research collaborations that continue up until today.

Over time, we realised that the data collection and visualisation capabilities could benefit a broader audience, including researchers and even the general public. In summer 2024, we began evolving the project from a software that we use for our own studies to an infrastructure that is accessible to other researchers and practitioners (aka D2USP). Since then, we have onboarded several studies and are continuing to expand into new use cases.

These include extending retrospection features, integrating new data sources such as Calendars and biometric data (e.g. sleep quality, exercise activity), and making insights more personalised through locally running language models.

## How does this project connect to your academic work?

The project has been developed and maintained for over 10 years and originally started as my master's thesis. In 2024, we began a complete rewrite, to make it more easily maintainable and extensible for Windows and macOS, update the UI, improve update mechanisms as well as refining how study participants can donate data when participating in studies.

Overall, PersonalAnalytics was used with more than a thousand study participants leading to more than a dozen peer-reviewed scientific publications. In addition, it has been used by dozens of student projects for their bachelor or master theses.

## Who contributes to the project?

Besides me as the main, long-term contributor to the project, we occasionally are able to hire research developers who make substantial contributions. In addition, students and other external contributors occasionally provide bugfixes, updates or adaptions/refinements to the tool.

## How are students involved in the project?

Many computer science or data science students we supervise want to build tools that improve some aspect of knowledge workers' lives – productivity, focus, sleep, context switching. PersonalAnalytics gives them a ready-made foundation: they fork it, add their intervention, run a validation study with real participants, and often contribute improvements back via PRs.

## How is the project used in teaching or coursework?

Besides student theses, we also feature PersonalAnalytics in our Human Aspects of Software Engineering course, where students learn how to study developers' work lives through qualitative and quantitative data collection.

## What impact has this project had on your students?

Students hone their coding and data analysis skills, and gain experience with Git workflows, CI/CD, and developing open source software.

## What impact has the project had beyond the classroom or research?

The project has contributed to more than a dozen peer-reviewed publications at top-tier conferences and journals, along with many student reports.

It has been used in field studies involving approximately 1,500 developers and knowledge workers worldwide, and is also used in a university spin-off, Flowlabs. FlowLabs aims to foster flow and focused work, such as by visualizing availability for interruptions in the office through a physical traffic-light like lightbulb, the FlowLight.

## What does it take to maintain the project?

Maintaining PersonalAnalytics means balancing the needs of very different users: PhD students running short-term studies, external researchers building on the platform, and the occasional individual contributor from the open source community. I serve as the long-term anchor – the person who holds institutional memory across student cohorts and research cycles.

On the technical side, we've invested in automating various aspects, such as CI/CD via GitHub Actions and data donations, including automated code signing, to keep contribution friction low.

One unexpected but rewarding part of this work is seeing how the infrastructure gets picked up in ways we didn't anticipate – one of our studies, for example, directly inspired the Good Day Project at GitHub, led by Eirini Kalliamvakou (Research Advisor at GitHub).

## What have been the biggest challenges in maintaining the project, especially in an academic setting?

Perhaps the deeper challenge is structural: academic incentives reward publications, not maintenance. Keeping a project alive and well-documented across a decade – through student turnover, shifting funding, and evolving technology – requires a kind of sustained commitment that academia doesn't formally recognize or reward.

## How do you ensure the project remains sustainable over time?

In 2025, the project received approximately 150,000 USD in funding from the Digital Society Initiative at the University of Zurich to establish PersonalAnalytics as an official university research infrastructure. In practice, this means we can now hire dedicated research developers rather than depending solely on (PhD) students with limited tenure on the project. It also means we can invest in documentation, onboarding, and the kind of unglamorous maintenance work that keeps a platform reliable for external researchers.

## How do you engage with your community?

We actively engage with the community through GitHub's issues and PRs. At the same time, we maintain an active documentation, including videos and showcases of app uses and studies, as well as offering demos to researchers when helpful.

## Have you taken part in any open source programs or events?

Not yet – being featured in Maintainer Month is a first, and we're excited about it.

## What would you love to achieve by showcasing your project?

I hope it inspires other researchers and educators to see what's possible when you treat a student project as a long-term investment – from a master's thesis to something that positively influences how knowledge workers think about productivity and wellbeing.

Beyond that, I'd love to connect with other maintainers facing similar challenges – particularly around sustaining open source projects in academic settings, where funding is uncertain and contributors cycle through on two- or three-year timescales. If this feature helps start that conversation, that's already a win.

And of course: more contributors, more studies, more researchers building on the platform rather than reinventing the wheel.

## Do you use AI tools in your day to day work on this project? If so, how?

Yes, we use AI assistants and agents across most stages of development: brainstorming and mocking new features, refining specifications, coding, testing, bug fixing, and updating documentation.

That said, we approach it deliberately. The human always remains in the driver's seat — we never push a change that hasn't been reviewed by a person.

We're also mindful of a subtler risk: over-relying on AI can accumulate cognitive debt. If AI always writes the code, you stop deeply understanding your own codebase. So we try to use it as a thinking partner, not a replacement for understanding.

## Do you implement AI into your classroom or coursework? If so, what does that look like in practice?

Yes — preparing students for the realities of modern software engineering means teaching them to use AI responsibly. We encourage using AI tools to improve productivity, particularly in terms of output, while being clear about the risks: increased cognitive load, unlearning, growing dependency, and rising expectations.

We also try to set realistic expectations around productivity gains. The numbers look impressive for greenfield projects, but in practice — when working on brownfield or legacy codebases like PersonalAnalytics — the gains are much more modest. Integrating AI well into the software development lifecycle is genuinely hard, and something companies are still figuring out as the space evolves.

## Has AI changed how you maintain or manage your project?

Yes, noticeably. We spend less time on coding and more on specification and validation — thinking carefully about what we want to build before building it, and rigorously assessing quality afterward. In some ways, AI has shifted the bottleneck rather than removed it.

We've also become more cautious about releases. We now run apps longer as field previews before pushing updates, partly because AI-generated code can be subtly wrong in ways that aren't immediately obvious.

## Have you experimented with AI driven or automated workflows in your project? What has that looked like?

We've experimented in targeted ways: auto-generating PR and commit summaries, and using AI to keep documentation up to date. Nothing fully autonomous — these are human-reviewed steps within an otherwise manual workflow. We're cautious about going further until the quality and reliability justify it.

## What concerns or challenges, if any, do you have about the use of AI in your project or field?

Our main concerns centre on what happens when AI becomes the default rather than a deliberate choice. Cognitive debt is real — over-reliance can quietly erode understanding of your own codebase, and that's hard to recover from.

The concern we see most clearly with students is blind trust. There's a lot of excitement around AI tools, which is understandable, but junior developers in particular can be prone to accepting AI output without question, lacking the experience to spot subtle errors or challenge flawed assumptions. Teaching that skepticism is increasingly important.

## How has your approach to maintaining this project evolved over time?

Over time, AI has meaningfully changed the pace of maintenance. We can create and iterate on features more quickly, even rapidly prototyping ideas that would previously have taken much longer to explore.

The trade-off is that we now invest more in validation, testing, and code review. Speed without rigour creates more problems than it solves.

Perhaps the most practical change is that it's become easier to keep the project alive alongside other work. Within a few hours a week, I can now achieve what previously would have required much more time, which matters a lot for an academic project without dedicated engineering resources.

## How do you see AI shaping the future of your project or field?

AI will shape both what PersonalAnalytics does and the field it studies. Within the tool itself, we're interested in integrating local LLMs to provide personalised, data-driven insights, helping users understand their own patterns in ways that are genuinely useful and privacy-friendly.

More broadly, AI-assisted coding is here to stay, and that's a good thing. But it comes with responsibility, particularly for educators. We need to teach the next generation of engineers to use these tools thoughtfully, still learning the fundamentals properly while managing reliance and avoiding cognitive debt.

Finally, as a software engineering community, we need to take expectation management around productivity seriously. Assuming developers will suddenly deliver 50% more output is not only unrealistic today, it risks creating burnout and stress when reality doesn't match the hype. Studying and communicating realistic gains is something our field is well positioned to contribute to.

## Is there anything else you'd like to share about your project or open source journey?

Looking back, if there's one thing I'd encourage other academics to do, it's to open-source your research tools. The paper gets cited; the tool gets used, extended, and occasionally inspires work you never anticipated.

Looking ahead, I'm particularly excited about integrating local LLMs to provide personalized, data-driven insights – helping users make sense of their own patterns without compromising privacy.

<img width="40%" alt="Photo of André Meyer" src="https://github.com/user-attachments/assets/2ba2a011-e507-443b-847b-80c0877c8a08" />
