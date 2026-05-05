---
name: Rich Townsend
institution: University of Wisconsin-Madison
department: Astronomy
projectName: GYRE Stellar Oscillation Code
projectRepo: https://github.com/rhdtownsend/gyre
projectWebsite: https://gyre.readthedocs.io/en/stable/
maintainerProfiles:
  - github: https://github.com/rhdtownsend
  - orcid: https://orcid.org/0000-0002-2522-8605
badges: ["Academic Maintainer", "Professor"]
description: "A software tool for simulating oscillations of stars, widely used in asteroseismology to constrain the internal structure and composition of stars by comparing observed oscillation frequencies against theoretical predictions."
---

## What is GYRE, and what does it help people do?

GYRE is a software tool for simulating oscillations of stars. Just like the strings of a guitar vibrate at specific frequencies when plucked, stars can undergo oscillations at specific frequencies when they are disturbed by internal or external forces. We can't hear these oscillations, but we can measure their effect on the brightness of the star. By comparing their frequencies against the predictions made using GYRE, we can establish constraints on the internal structure and composition of stars — a technique known as "asteroseismology".

## What inspired you to start this project?

The project was originally created as a proof of concept for a numerical technique. I had written stellar oscillation codes before GYRE, but they all suffered from the same numerical issue. I wrote GYRE to test out a new idea for circumventing this issue (which turned out to be successful). Soon after developing GYRE, I released it under an open-source license, and it was quickly adopted by the wider community as a go-to tool for analysing the asteroseismic data being obtained by NASA's Kepler mission.

## How does this project connect to your academic work?

It has been central to my research for over a decade, and serves as a test bed for developing and evaluating new numerical techniques.

## Who contributes to the project?

The project is primarily maintained by me, with contributions from graduate students, undergraduates, and external contributors.

## How are students involved in the project?

Most of my students work on research that makes use of GYRE, and in the process of this research it is often necessary to extend GYRE's capabilities — giving them the opportunity to contribute new functionality (and supporting documentation) to the project.

## How is the project used in teaching or coursework?

It is used in specialised courses at other universities, and in summer schools that are focused on GYRE and an open-source stellar structure/evolution code (MESA) that GYRE can couple to. Participants span a range of career stages, extending from undergraduates through to emeritus professors. I haven't yet integrated GYRE into my regular teaching, because our curriculum currently lacks any classes that explicitly cover asteroseismology.

## What impact has this project had on your students?

Students develop programming and numerical modelling skills through their involvement in the project. They also get their first experience of involvement in an open-source project, introducing them to topics (e.g., using git, writing documentation, creating testing frameworks) that aren't often covered in programming classes.

## What impact has the project had beyond the classroom or research?

GYRE has been used in more than 600 publications and is widely adopted within the asteroseismology field. It is now also being applied to model the tides that arise in binary star systems and star-planet systems.

## What does it take to maintain the project?

A fair amount of work! Over the past year, I've probably spent hundreds of hours responding to issues opened by users, adding new features to the code, and implementing optimizations to speed up runtimes.

## What have been the biggest challenges in maintaining the project?

Balancing development work with research output and academic incentive structures is a key challenge. Maintaining and improving GYRE primarily benefits its users rather than me, whereas in academia metrics focus on the number of papers published and the citations these garner.

## How do you ensure the project remains sustainable over time?

I secure research grants from NASA and the NSF. These are usually focused on addressing a specific scientific question, but typically involve work on GYRE to improve/extend it as part of the research effort. The grants are my primary mechanism for supporting the graduate and undergraduate students within my group.

## How do you engage with your community?

Primarily through ensuring that the project documentation is as thorough and accessible as possible, and that issues opened by users are responded to in a timely manner. I also participate in the summer schools mentioned previously, and present seminars advertising GYRE at other educational institutions.

## Have you taken part in any open source programs or events?

No.

## What would you love to achieve by showcasing your project?

To highlight the sustainability and long-term impact of academic open-source software.

## Do you use AI tools in your day to day work on this project?

Yes — I started using Claude about 6 months ago; I've found it useful in suggesting where further optimizations to the code might be possible.

For small and/or automatable changes (e.g., a global rename of a variable), I find Claude to be a great time-saver. But I remain hesitant about letting it make significant changes to the code architecture; I don't want to get to a point where I don't understand the code.

## Do you implement AI into your classroom or coursework?

I don't use AI in the classroom yet, as I'm still getting familiar with the technology and its upsides/downsides.

## Has AI changed how you maintain or manage your project?

For small and/or automatable changes it has been a great time-saver. I have not yet experimented with AI-driven or automated workflows in the project.

## How do you see your contributors using AI when working on your project?

Not sure; contributions from others remain too infrequent for me to assess how they use AI.

## What concerns or challenges, if any, do you have about the use of AI in your project or field?

For me, the biggest risk is in ending up with a code that nobody (human) understands. An important aspect of my project is not only the code, but the understanding of what numerical methods are/can be/should be used to solve stellar oscillation problems. I don't want that institutional knowledge to get lost.

## How has your approach to maintaining this project evolved over time?

Since I migrated the project to GitHub, there hasn't been much change to the maintenance side of things. But I'm hoping to change this in the near future, using techniques such as continuous integration.

## How do you see AI shaping the future of your project or field?

I think my specific subfield — stellar oscillation codes — is too niche to benefit greatly from AI. But I do see AI having a big impact on asteroseismology, by opening up new ways to mine measurements of stellar oscillations.

## Is there anything else you'd like to share?

It's been my experience that open source enables unexpected collaborations and long-term partnerships, and I've greatly benefitted from both of these.
