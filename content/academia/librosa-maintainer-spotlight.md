---
name: Brian McFee
institution: New York University
department: Center for Data Science and Music and Performing Arts Professions
projectName: librosa
projectRepo: https://github.com/librosa/librosa/
projectWebsite: https://librosa.org/
maintainerProfiles:
  - github: https://github.com/bmcfee
  - orcid: https://orcid.org/0000-0001-6261-9747
badges: ["Academic Maintainer", "Professor"]
description: "A Python package for music and audio analysis that provides the building blocks necessary to create music information retrieval systems, fundamental signal processing algorithms, and tools to interact with and visualise music and audio signal data."
---

## What is librosa, and what does it help people do?

librosa is a Python package for music and audio analysis. It provides the building blocks necessary to create music information retrieval systems, fundamental signal processing algorithms, and tools to interact with and visualise music and audio signal data.

It is widely used by academic researchers, educators, students, and industry practitioners.

## What inspired you to start this project?

The project grew out of a concerted effort to translate disparate collections of MATLAB scripts for music signal processing into a unified, coherent Python package.

At the time the project began (2012), there was a growing sense within the music information retrieval (MIR) community that machine learning and data science software was rapidly moving from MATLAB to Python, driven by the development of scikit-learn and Theano, as well as the broader SciPy ecosystem.

While there was excitement about this transition, a critical barrier remained: the lack of reliable implementations of standard signal analysis methods and pipelines. librosa began as a port of in-house code at Columbia University's Laboratory for the Organization of Speech and Audio (LabROSA), and later expanded to incorporate contributions from other research groups and independent developers.

## How does this project connect to your academic work?

The project serves as a foundation library for nearly all of my research in music and audio analysis. It is also frequently used by students for class assignments, capstone projects, and thesis work.

## Who contributes to the project?

At this point, the project has over 100 contributors spanning nearly every career stage in academia, including undergraduate, graduate, postdoctoral, and faculty contributors, as well as industry researchers and software developers.

## How are students involved in the project?

The project is now fairly mature, and students do not often contribute directly. However, in the past, I have had both undergraduate and graduate students contribute code and documentation.

## How is the project used in teaching or coursework?

librosa is widely used in coursework within the graduate music technology program at NYU, although not typically in my own courses, which focus more on fundamentals than applications.

It is also used broadly in courses at other universities.

## What impact has this project had on your students?

Students who use or contribute to librosa often have limited prior experience with software development. As maintainers, we make a strong effort to demonstrate best practices, including documentation, code review, and testing.

Students who contribute gain exposure to modern software development practices, as well as specific tools and workflows within the scientific Python ecosystem.

## What impact has the project had beyond the classroom or research?

librosa is widely used in both academia and industry. The 2015 paper published at the SciPy conference has accumulated over 4,000 citations. We also encourage users to cite the specific software version they use via DOIs provided through Zenodo integration with GitHub releases.

The documentation site receives around 20,000 monthly visits globally, and the package has been downloaded more than 88 million times from the Python Package Index (PyPI).

## What does it take to maintain the project?

The team structure has fluctuated over time. I have consistently served as the lead developer and maintainer, with other contributors joining and leaving core development as needed.

Contributions follow a standard pull request and code review workflow, with continuous integration testing applied to code, documentation, and style at each stage. We aim to release one major version each year, with minor updates as needed in between.

## What have been the biggest challenges in maintaining the project, especially in an academic setting?

As with many open-source projects, contributor turnover has been a persistent challenge. Meaningful contributions often require substantial domain knowledge, which student contributors typically develop only toward the end of their studies. At that point, their career paths often lead them elsewhere, making sustained engagement difficult.

Another major challenge is maintaining compatibility with related software packages. These dependencies may evolve quickly, requiring frequent updates, or too slowly, which can delay new releases.

## How do you ensure the project remains sustainable over time?

For the most part, sustainability has been driven by voluntary contributions and my own need for stable, reproducible research tools.

## How do you engage with your community?

Most direct engagement occurs through the discussion forum, GitHub issues, and comment threads. We also maintain a comprehensive documentation site and provide clear guidelines for development and contribution.

## Have you taken part in any open source programs or events?

We have participated in Hacktoberfest in the past, and the occasional SciPy conference sprint.

## What would you love to achieve by showcasing your project?

I do not actively promote the project beyond small efforts, such as distributing stickers. However, we are planning a major stable release (1.0) in the coming months, and this could be a good opportunity to increase visibility, attract new users, and begin planning for future growth and development.

## Do you use AI tools in your day to day work on this project? If so, how?

I wouldn't say daily, but I definitely use Copilot code review as a backup or supplement to my own reviews on pull requests (including my own). Much less often—maybe every couple of months—I'll try out various coding agents to prototype new functionality or API designs, but almost always find it to be less efficient than just doing it myself in the first place. This probably owes to the somewhat niche nature of the functionality I'm often trying to design, which is probably rarely represented well in the training data for these models.

Outside of coding agents, I do sometimes find use in running particularly obtuse error log dumps through a bot to more efficiently hone in on potential causes of failures. Success rates on this are hit-or-miss, as the kinds of errors I often encounter arise from recent updates to underlying software that haven't yet propagated through to the information available to bots.

## Do you implement AI into your classroom or coursework (if applicable)? If so, what does that look like in practice?

I sometimes use AI tools to generate one-off scripts to help with things like back-end logistics for running courses (e.g. generating student group membership assignments), or to generate variations of exam questions, but almost never for course content. At most I find it useful sometimes as an enhanced search engine to help fill in some background reading on a topic, but I always follow with a manual verification of whatever the bots produce.

Most of the courses that I teach tend to be foundational concept courses (e.g. introductory signal processing). For this, using AI tools in class is roughly akin to buying a gym membership and then showing up to lift weights with a forklift: it gets the job done technically, but completely misses the point.

## Has AI changed how you maintain or manage your project?

Not really. We've been pretty lucky that our PRs have not been inundated with bot-generated slop code (yet), so not much has had to change from the management perspective. Automated code review is nice to have, but mostly just improves the existing workflow rather than radically upending it.

## Have you experimented with AI driven or automated workflows in your project? What has that looked like?

Not substantially. I sometimes will look at generated documentation, but it almost never provides the kind of content that I'd want in documentation.

## How do you see your contributors using AI when working on your project?

It's largely invisible to me. Probably there is some code generation and iteration happening behind the scenes before anything makes it to PR, but it's not generally part of the process after a PR is opened. (Or if it is, nobody tells me about it.)

## What concerns or challenges, if any, do you have about the use of AI in your project or field?

I don't see much meaningful impact either way for this project—it's a mid-level library in a complex software ecosystem that fills a particular niche. Some AI coding tools might be helpful for maintaining and extending it, but I don't anticipate huge direct impacts from AI tool adoption here.

On the other hand, my field (music information retrieval, or MIR for short, see ismir.net) is in a current state of flux over AI research, and specifically the rapid advances in AI music generation and the subsequent impacts on the music industry and society more broadly. This is a related but distinct question from the use of AI in research (e.g. for code generation, paper writing, etc.). To that point, I do have substantial fear of a future where people naively tab-complete their way through programming tasks without having any understanding of how anything works.

## How has your approach to maintaining this project evolved over time?

In almost 14 years of development, most of the evolution has been catching up to best practices learned from other nearby projects (numpy, scipy, matplotlib, etc), and the broader infrastructural and platform changes that affect everyone.

## How do you see AI shaping the future of your project or field?

This depends on how the term "AI" is scoped. Many of the initial use cases for librosa have been at this point replaced by deep neural network models, but these often lack many desirable features such as interpretability, transparency, direct user-interpretable controls, or coherent management of statistical dependencies (i.e. training data). Depending on who you ask, these models may or may not count as "AI", but much of the recent work in the field has been on integrating audio analysis with large language models to exploit high-level semantics in structuring learned audio representations. However, this is still very much an active research area, and there's quite a bit more work to be done before these methods, in spite of providing higher "accuracy" (whatever that might mean) for particular tasks, fully recover all of the desirable properties of classical engineered methods.

## Is there anything else you'd like to share about your project or open source journey?

I have been fortunate that my career path has allowed me to dedicate time to this and related projects. None of this would be possible without the support of the broader scientific Python community, particularly the developers of core libraries such as NumPy, SciPy, and Matplotlib.

I have learned much about scientific open-source development through attending the SciPy conference and through informal interactions with contributors in the community.
