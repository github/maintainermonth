---
name: The preCICE team, introduced by Gerasimos Chourdakis
institution: University of Stuttgart
department: Institute for Parallel and Distributed Systems
projectName: preCICE
projectRepo: https://github.com/precice/precice
projectWebsite: https://precice.org/
maintainerProfiles:
  - github: https://github.com/MakisH
  - orcid: https://orcid.org/0000-0002-3977-1385
badges: ["Academic Maintainer", "Research Associate"]
description: "A coupling library and ecosystem for general partitioned multi-physics and multi-scale simulations, enabling researchers to couple existing simulation codes without reinventing application-specific solutions."
---

## What is preCICE, and what does it help people do?


<img width="50%" alt="precice-overview" src="https://github.com/user-attachments/assets/433f50c4-bdbc-47c2-9e38-30096150f4cb" />


preCICE is a coupling library and ecosystem for general partitioned multi-physics and multi-scale simulations, including surface and volume coupling. "Partitioned" means that preCICE couples existing programs or solvers capable of simulating a subpart of the complete physics involved in a simulation.

This approach provides the flexibility needed to maintain a reasonable time-to-solution for complex coupled problems. The software offers convenient methods for transient equation coupling, communication, and data mapping.

## What inspired you to start this project?

We are a team of doctoral candidates and researchers who have been developing this project for several years. Our mission is to enable researchers to use their existing simulation codes to solve more complex problems than originally intended, without having to reinvent new simulation codes or application-specific coupling solutions.

## How does this project connect to your academic work?

We consider the software itself as the main outcome of our research. We do study and implement computational methods, and we collaborate with domain specialists to test these methods and the software on various applications.

## Who contributes to the project?

Mostly doctoral candidates, Master's thesis students, and student assistants, with supervision and review from faculty. As the community grows, we also get more contributions from researchers around the world, and we are trying to make such community contributions easier and enable community participation in more aspects of the project, such as organizing workshops together.

## How are students involved in the project?

Students contribute independent code components, small features, test cases, examples, and documentation.

## How is the project used in teaching or coursework?

It is often used as a basis for theses and is offered as an option in project-based courses. We also draw examples from it for our Research Software Engineering courses [at the University of Stuttgart](https://simulation-software-engineering.github.io/) and [at the Technical University of Munich](https://doi.org/10.14279/eceasst.v83.2615). Using the software is part of a [training course](https://precice.org/community-training.html) delivered at workshops.

## What impact has this project had on your students?

Many students make their first FOSS contributions through this project, and some continue contributing afterward. Since the library is used by other codes, students also contribute to third-party codebases.

## What impact has the project had beyond the classroom or research?

A few years ago, we could point to more than 100 research groups worldwide that were using preCICE. We collaborate with researchers from universities and research centers in the EU and the US, and adoption in industry is gradually increasing. We can no longer tell who all the users asking questions in our forum or publishing results are, and this feels very fulfilling.

Today, preCICE is being used, for example, at the AWI Institute of Glaciology in Germany for ice sheet simulations, at NASA Glenn Research Center for simulating hierarchical materials, at Heriot-Watt University in the UK for coupling with deep learning in active flow control, and at Hokkaido University in Japan for simulating parafoils for Martian exploration.

## What does it take to maintain the project?

The [team](https://precice.org/about.html) consists mostly of seven doctoral candidates across collaborating groups at the University of Stuttgart and the Technical University of Munich.  We are multiple maintainers, each overlooking different parts of the project. For example, Frédéric Simonis ([@fsimonis](https://github.com/fsimonis)) is maintaining the core library repository, while I am making sure that the ecosystem we build around this library works together as a whole.

Since before COVID-19, the team has been collaborating online on GitHub, communicating via Matrix/Gitter, and holding short weekly video calls. We have in-person team meetings three to four times per year for three days. The core library is released every six months, with additional components released independently.

Everything is developed openly on GitHub, with an extensive CI pipeline and system tests across repositories. Every ecosystem component lives in its own repository, an approach that comes with a tradeoff: for example, our CI infrastructure often becomes complicated, but students can take ownership of their newly developed component and focus on that without worrying they will break anything.

## What have been the biggest challenges in maintaining the project?

Since we are employed at universities, we are required to balance research and teaching responsibilities, which often have continuous deadlines. Finding longer periods of focused time for development can be challenging.

Another challenge comes from interoperability with third-party software. This requires frequent switching between different codebases, languages, and infrastructure levels. Many components are developed in short-term student projects, so maintaining them after those projects end can be difficult, especially when third-party software introduces breaking changes.

## How do you ensure the project remains sustainable over time?

We apply for research funding, typically through the German Research Foundation, and collaborate with research groups interested in improving the software.

We also attract student projects, organize user workshops, engage new users at conferences, and prioritize documentation and open communication. Many of these activities currently happen alongside or even instead of traditional research outputs.

## How do you engage with your community?

We host an active community forum on Discourse, organize yearly week-long [workshops](https://precice.org/precice-workshop.html), and maintain extensive documentation, contribution guidelines, and a code of conduct.

We are also working on defining guidelines and best practices for developing and publishing community codes based on [FAIR principles](https://doi.org/10.1038/s41597-022-01710-x), and we discuss these with the community in a structured way.

## Have you taken part in any open source programs or events?

We previously did not participate in such programs, considering our project too niche to attract contributors that are not already in the field. However, in 2026, we are participating for the first time in the Google Summer of Code and are excited to mentor motivated contributors on topics that we identified as fitting for beginners. The experience as a new organization in today's coding landscape has been a bit overwhelming so far, but we are identifying strategies and missing infrastructure for welcoming contributions at scale. We are learning a lot through this process.

## How do you see your contributors using AI when working on your project?

We do notice new contributors using AI to write code or their pull request descriptions. This has definitely enabled more people to contribute, but has also made it more difficult for us to triage and review contributions. While AI-enabled reviewing tools can be partially helpful, we would need workflows to improve contributions (code and description) before they get on the public tracker. Community contributions are precious, and it is difficult to ask a new contributor to go through several review iterations, especially if now the benefit of this human connection (e.g., learning and sticking to the community) is unclear. Since many other communities have similar issues, I hope we will find solutions together.

## Do you use AI tools in your day to day work on this project?

The code we develop is often short but involves looking into academic literature and software documentation, navigating different codebases, and talking to users. AI tools help us, for example, navigate this vast amount of information (especially dense or incomplete software documentation), visualize data, or summarize previous communication. Besides coding, I certainly value the research and writing process, and I so far prefer using AI tools similarly to any other auxiliary tools.

## What would you love to achieve by showcasing your project?

So far, the project has mainly been applied within a narrow field, but it is now expanding into new domains. We believe other communities could benefit from using what we have developed rather than building separate solutions.

As we maintain a growing number of repositories with a relatively small team, we are also looking to attract contributors and maintainers with expertise we may not have. Broader feedback would be especially valuable as we define interoperability standards.

## Is there anything else you'd like to share?

This work would not have been possible if we were constantly under pressure to produce traditional academic publications, or without the efforts of collaborating groups to secure long-term funding for maintainers. A big thank you to everyone who helped create this environment.
