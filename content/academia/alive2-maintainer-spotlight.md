---
name: Nuno Lopes
institution: University of Lisbon
department: Computer Science
projectName: Alive2
projectRepo: https://github.com/AliveToolkit/alive2
projectWebsite:
maintainerProfiles:
  - github: https://github.com/nunoplopes
  - orcid: https://scholar.google.com/citations?user=DQnsjaoAAAAJ
badges: ["Academic Maintainer", "Associate Professor"]
description: "A tool to automatically verify the correctness of LLVM optimizations, used by several companies and instrumental in finding hundreds of bugs in LLVM."
---

## What is Alive2, and what does it help people do?

Alive2 is a tool to automatically verify the correctness of LLVM optimizations.

## What inspired this project?

It all started when I noticed that one of LLVM's optimizations (InstCombine) was consistently the part of LLVM with the most bug reports. I looked more closely and tried to prove a few cases by hand with the support of an SMT solver. It worked, so I began working on automating the process. It later became my PhD thesis.

## How does this project connect to your academic work?

This project is part of my research agenda on making compilers correct.

## Who contributes to the project?

We have faculty from our and other universities, PhD students, and external contributors from a dozen companies.

## How are students involved in the project?

Some students base most of their PhD thesis on the project, contributing large parts of the theory and/or code. Others contribute smaller pieces, such as adding support for new LLVM features or improving specific algorithms in the tool.

## How is the project used in teaching or coursework?

Alive2 is not used for teaching in my university (we don't have any course on the topic), but other universities include the tool in their lectures.

## What impact has this project had on your students?

It is quite a unique project in the world of verification. There are not many fully automated tools used in industry. It has also inspired students to build other tools based on the same techniques, including superoptimizers and verification tools for other compilers and languages.

## What impact has the project had beyond the classroom or research?

We have published several papers and won two Best Paper awards at PLDI, a leading compiler conference. The tool is used by several companies, and we have found hundreds of bugs in LLVM. Overall, it has had a strong impact on the compiler industry.

## What does it take to maintain the project?

I am the main maintainer, so the schedule depends on my teaching load. It also depends on whether there are interested students in a given year. Sometimes it is challenging to keep up with the workload, but we have a few great external contributors that help tracking and fixing issues.

## What have been the biggest challenges in maintaining the project, especially in an academic setting?

Balancing project work with teaching is difficult. This project is mostly a hobby. Securing funding is also very challenging; we are part of that familiar story where many people use the project, but no one wants to fund it. For example, only recently we received a server for regular testing (thank you, Google!).

## How do you ensure the project remains sustainable over time?

It would be ideal to have regular funding to support a full-time professional software developer maintaining the project.

## How do you engage with your community?

We participate in the LLVM conference occasionally and share work through documentation and research papers. We also engage in relevant discussions around semantics of LLVM IR. We often prototype proposed changes so we can assess the impact of the changes before committing to a particular IR design.

## Have you taken part in any open source programs or events?

I participate in Google Summer of Code through LLVM and have been involved for about 20 years.

## What would you love to achieve by showcasing your project?

If it helps attract funding and international students, that would be great. I also think it is a good example of technology transfer and what academia can achieve. And that professors can code too!

## Is there anything else you'd like to share about your project or open source journey?

Getting Alive2 adopted by industry at wide took time. But we were very lucky that we got a few expert users early on. They provided feedback on the design and did a lot of beta testing.

The way we started was by doing automatic reviews of patches sent to the LLVM mailing list in the Summer of 2014. We caught a bunch of errors related with corner cases. Some people noticed and started asking me how I was catching these bugs. They wanted to try the tool themselves.
