---
name: Jeffrey C. Witt
institution: Loyola University Maryland
department: Philosophy
projectName: SCTA Texts
projectRepo: https://github.com/scta-texts/
projectWebsite: https://scta.info
maintainerProfiles:
  - github: https://github.com/jeffreycwitt
  - orcid: https://orcid.org/0000-0002-0682-4065
badges: ["Academic Maintainer", "Professor"]
description: "A repository for transcriptions of Medieval Latin texts, enabling students and scholars worldwide to collaboratively build a connected, machine-actionable corpus of the medieval scholastic tradition."
---

## What is the SCTA Texts Repo, and what does it help people do?

The SCTA Texts Repo is a repository for transcriptions of Medieval Latin texts. I work with students to teach them how to read the abbreviated Latin scripts of the medieval world. The GitHub workflow is a critical step in inviting students into active research, even as they are still learning and building new skills.

Students fork existing repositories and make, correct, or update transcriptions. They use GitHub Codespaces, where I configure the workspace with XML extensions and a Latin spell checker. Their work is submitted as a pull request, where I use GitHub's commenting features to guide and correct it.

Once a pull request is accepted, the work is merged into the official repository and becomes live data for scholars around the world. A webhook then triggers updates to the corpus and re-indexes the XML database.

## What inspired you to start this project?

My long-term goal is to build a connected web of machine-actionable text representing the medieval scholastic tradition. This is a large and complex body of work that forms the foundation of much of modern science, philosophy, and theology. The SCTA already indexes more than 60 million Latin words.

However, this material is very difficult to access. Much of it is locked in hard-to-read manuscripts, and printed editions are often expensive and inaccessible. We need to rethink texts not as static books, but as a dynamic, connected database that can be continually improved.

At the same time, I want to train a new generation of scholars to think this way. Students learn best when they participate in real research, and the GitHub workflow allows them to contribute at their current skill level while developing new ones.

## How does this project connect to your academic work?

I am a specialist in late medieval philosophy and intellectual history. A major bottleneck in research is access to texts, so my long-term goal is to make the entire corpus linked and available at the click of a button.

## Who contributes to the project?

We have contributors from all over the world at every level, including undergraduates, graduate students, postdocs, and faculty.

## How are students involved in the project?

Students improve the corpus by forking repositories, creating or correcting transcriptions, and identifying sources for quotations and references. This work helps link the corpus together.

They submit their work through pull requests, which I review. They then revise based on feedback until the work is ready to be merged.

## How is the project used in teaching or coursework?

At Loyola, this is generally an extracurricular activity. I run a small "text lab" and take on a few students each year as fellows.

We also collaborate with partner projects across multiple countries. These contributors, often graduate students or faculty, work on editions relevant to their research. GitHub allows us to coordinate this decentralized work and bring it together into a connected corpus.

## What impact has this project had on your students?

Students reflect on the value of the work in semester reports. Some have gone on to PhD programs, noting that their work with SCTA and skills in paleography and GitHub contributed to their success.

I've also highlighted students' GitHub work in recommendation letters, particularly when they apply to graduate programs or related fields.

## What impact has the project had beyond the classroom or research?

The number of global collaborations continues to grow, with new projects joining the effort. For example, the Bartolome de Las Casas society has reached out to publish their corpus through SCTA.

We are also seeing new research outcomes made possible by the data. One team used SCTA data to train AI transcription models, and other work has uncovered previously unknown textual connections through programmatic analysis.

## What does it take to maintain the project?

I am the project founder and main maintainer.

## What have been the biggest challenges in maintaining the project?

In the humanities, very few people are familiar with tools like GitHub, which makes it difficult to find collaborators who can help maintain or improve workflows.

I often need to teach new contributors the basics, such as forks and branches. While Codespaces has helped with onboarding, there is still a steep learning curve.

I also have many ideas for improving automation and workflows, but limited time due to teaching and research responsibilities.

## How do you ensure the project remains sustainable over time?

I have applied for grant funding, including an NEH grant, to secure time to focus on the project and improve workflows.

More broadly, progress can be slow because I don't have a large technical network to collaborate with or exchange ideas, unlike in industry settings.

## How do you engage with your community?

I work on improving documentation and have started creating video tutorials to demonstrate workflows.

Much of the engagement happens through direct interaction. I meet weekly with undergraduate students and also collaborate regularly with international teams, reviewing their work and supporting their contributions.

## Have you taken part in any open source programs or events?

No.

## What would you love to achieve by showcasing your project?

I would like to encourage people in the humanities to think differently about texts, not as static books but as data that can be analyzed and connected.

It is also important that students develop the digital literacy needed for modern research. Showcasing this project could highlight these new approaches and inspire both current and future students to engage with them.

## Do you use AI tools in your day to day work on this project?

Yes, I (with my students) am using AI at almost every level of our workflow.

- I train models to segment columns and lines in medieval manuscripts and early modern printings.
- Once images are segmented, I train models to transcribe the text.

Once the text is structured and deployed to GitHub, I use various embedding algorithms (doc2vec, LatinBert, etc.) to profile the text in different ways. These embedding vectors become the seeds of a recommender service that I provide to scholars using and reading these texts.

See slide deck: [https://jeffreycwitt.com/slides/2026-03-05-vienna](https://jeffreycwitt.com/slides/2026-03-05-vienna)

Increasingly, I'm using agentic AI to assist with the mark-up, especially quotation source identification.

We've also been experimenting with AI-generated translations of historical Latin texts. This is a real benefit to our discovery layer. Even if the translations are not perfect, we can pair them with the original Latin and get a quicker sense of what is being discussed, which then helps us improve the Latin transcriptions and, in a circular fashion, helps us improve the original machine translations.

This is particularly helpful as we encourage undergraduates, who are still learning Latin, to participate in the work. Having an English translation alongside the text allows them to participate in a deeper way than they might otherwise be able.

## Do you implement AI into your classroom or coursework?

I'm working with students mostly as an extracurricular activity who are generally coming from a humanities background rather than a coding background.

As they begin to work with structured data for the first time, this is often the first time that they really see how code (and processing instructions) can be useful to their interests. Previously, because they had limited or zero coding experience, they weren't really able to execute their ideas or experiments.

"Vibe coding" with Copilot has really changed this.

During our meetings, we can now discuss a problem (perhaps how to batch encode a repeated pattern in a text or fix false positives marked by an AI model in image segmentation). Now, I can say: why don't you try to describe this problem to Copilot and see if you can generate a Python script that solves this problem?

I wouldn't say the results are always a production-ready solution, but it really allows the students to see how they could use code to tackle a problem, and I think it inspires them to learn more.

## Has AI changed how you maintain or manage your project?

As the SCTA-TEXTS repository grows to more than 100,000 files, I am increasingly focused on automatic checking and validation, as well as automating post-processing steps.

AI has been a really helpful tool for this. Copilot makes it quite easy to generate GitHub Actions files from a prompt. Over the last year, I've expanded or improved these actions to auto-validate changes to individual XML files and to automatically initiate post-processing steps on incoming pull requests, such as assigning unique xml:ids or line break numbers.

## Have you experimented with AI-driven or automated workflows in your project?

One of the most exciting advances in the last year has come from setting up the necessary MCP services to allow AI agents to assist with some of the text markup tasks that were previously done manually by editors.

The best example I have of this is the automatic marking of text sources, especially Bible verses.

Once data has been published to GitHub, it gets indexed as n-grams. Using these n-gram tokens, we can generate a similarity matrix for each paragraph in a medieval text to each verse in the Bible. From this similarity matrix, we can generate a candidate list of paragraphs which have a high probability of citing a specific Bible verse.

In the past, this is where my (or my students') "manual" work would begin. I would take this list, go to each paragraph and look for the Bible verse and then mark it.

Now, I've developed MCP services for agentic AI to:

- Look up the Bible verse
- Confirm its presence in the paragraph
- Identify the word range
- Insert the `<quote>` element in the XML document with the correct @source

This task is documented as a SKILL called `/encode-quotes` that Claude Code uses to reliably identify and mark quotations.
Edits can then be submitted as pull requests, where GitHub Actions help validate and quality control the changes.

Over the last 10 years, my students and I have marked about 9,000 verses manually. Using Claude Code over the last month, I have added 8,000+ new Bible quotations, bringing the total to 17,112 confirmed quotations.

At this rate, I expect to add an additional 50,000 Bible quotations by the end of 2026. I know of no other database of biblical reception in the Middle Ages that can match this size.

This doesn't just work for Bible verses. Once those are complete, I will use the same process for marking citations of Patristic authors and uses of Canon Law.

GIF: [https://s3.amazonaws.com/lum-faculty-jcwitt-public/2026-03-19-providence/bibleMarkingProcess.gif](https://s3.amazonaws.com/lum-faculty-jcwitt-public/2026-03-19-providence/bibleMarkingProcess.gif)

Slide deck: [https://jeffreycwitt.com/slides/2026-03-19-providence/#/3/20](https://jeffreycwitt.com/slides/2026-03-19-providence/#/3/20)


## How do you see your contributors using AI when working on your project?

From watching my students, I mostly see Copilot and inline recommendations via VS Code speeding up their work, either by correcting repeated errors or suggesting batch updates that they would have previously done manually.

## What concerns or challenges, if any, do you have about the use of AI in your project or field?

I frequently run out of tokens. The only thing stopping my Bible Verse Index from being completed within a week is token limitation.

If I had unlimited tokens, I could spawn agents and index all known Bible verses within a couple of weeks.

Successful use of AI agents also depends on maintaining a wide variety of services, including MCP services.

It's a lot for one person to maintain.

## How has your approach to maintaining this project evolved over time?

See above.

## How do you see AI shaping the future of your project or field?

The success described above has been really astounding, and I'm mostly thinking of ways to expand this work. But it takes careful planning.

In my experience, success requires very controlled parameters and prompts paired with well-designed MCP services that help keep the AI agent on track and using the right identifiers for the right system.

The success of automatically creating indices encourages me to focus student work on creating high-quality foundational data.

The better the initial transcriptions and markup are, the easier it becomes to reliably automate upstream tasks, such as citation marking and linking.

## Is there anything else you'd like to share?

I'm very grateful to have access to a GitHub educator account. The GitHub workflow has been central to my work, and I appreciate the effort that goes into maintaining it.
