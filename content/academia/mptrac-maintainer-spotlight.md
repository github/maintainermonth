---
name: Lars Hoffmann
institution: Forschungszentrum Jülich
department: Jülich Supercomputing Centre
projectName: MPTRAC
projectRepo: https://github.com/slcs-jsc/mptrac
projectWebsite: https://helmholtz.software/software/mptrac
maintainerProfiles:
  - github: https://github.com/lars2015
  - orcid: https://orcid.org/0000-0003-3773-4377
badges: ["Academic Maintainer", "Division Head HPC"]
description: "An advanced atmospheric transport model for calculating air parcel trajectories from global reanalyses or forecasts, with stochastic diffusion, chemistry, and high-performance computing support."
---

## What is MPTRAC, and what does it help people do?

MPTRAC is an advanced atmospheric transport model designed to calculate air parcel trajectories using wind and velocity fields from global reanalyses or forecasts.

It accounts for mesoscale diffusion and subgrid-scale wind fluctuations by applying the Langevin equation, introducing stochastic perturbations to trajectories. It also includes an inter-parcel exchange module to represent air mixing and improve realism in simulations.

The model supports a wide range of processes, including convection, sedimentation, chemical transformations, and deposition. It provides multiple output formats and visualization support, and is optimized for high-performance computing environments using hybrid MPI, OpenMP, and OpenACC parallelization. This allows it to run efficiently on systems ranging from single workstations to large supercomputers.

## What inspired you to start this project?

MPTRAC was developed to address the need for high-resolution, efficient, and flexible atmospheric transport modeling. There was growing demand for accurate simulations in areas such as air pollution modeling, stratospheric research, and climate studies.

Existing models often lacked the efficiency needed for large-scale simulations or the flexibility to run on modern high-performance computing systems. We wanted to build a tool that could scale effectively while also integrating meteorological data and capturing complex physical processes. By combining stochastic modeling, advanced chemistry modules, and HPC capabilities, MPTRAC provides a more realistic and scalable approach to atmospheric simulations.

## How does this project connect to your academic work?

MPTRAC is a key tool in atmospheric science research, supporting studies on air pollution, stratospheric dynamics, and atmospheric transport processes. It is widely used in research institutions and universities for high-resolution simulations and scientific studies.

It also supports interdisciplinary collaboration and contributes to peer-reviewed research, making it an important part of ongoing academic work in meteorology and climate science.

## Who contributes to the project?

The project is developed by researchers, postdocs, and PhD students from the Simulation and Data Laboratory Climate Science at Jülich Supercomputing Centre. It also benefits from international collaboration, with contributors from institutions such as the Institute of Atmospheric Physics in Beijing and Sun Yat-sen University in Guangzhou, as well as other researchers worldwide.

## How are students involved in the project?

Students are actively involved in many aspects of the project. They contribute code, optimize performance for HPC environments, and help with testing and debugging. They also work on documentation and sometimes design and implement new features.

Through this work, students gain hands-on experience in scientific modeling, advanced coding techniques, and collaborative research, which are valuable for careers in academia, research, and industry.

## How is the project used in teaching or coursework?

MPTRAC is integrated into PhD projects focused on atmospheric science, where it is used for high-resolution simulations and to study complex atmospheric phenomena.

It is also used in the guest student program at Jülich Supercomputing Centre, where students learn how to run simulations and optimize code for high-performance computing environments. This gives students practical experience in both atmospheric science and HPC.

## What impact has this project had on your students?

The project has had a strong impact on students by helping them develop skills in atmospheric science, data analysis, and high-performance computing. They gain practical experience with simulation techniques and learn how to optimize code for advanced computing systems.

It also strengthens their understanding of open-source development and collaborative research, and often leads to deeper engagement in scientific projects and international collaborations.

## What impact has the project had beyond the classroom or research?

MPTRAC has contributed to high-quality research and supported the development of international scientific collaborations. It has been used in publications in well-established journals and in multiple PhD theses.

The model has enabled research on topics such as wildfire smoke dispersion, volcanic ash transport, and atmospheric convection, making it a valuable tool for both academic and applied research in the global scientific community.

## What does it take to maintain the project?

Maintaining MPTRAC involves a structured team effort. Researchers, postdocs, PhD students, and collaborators contribute based on their expertise. The project uses regular code reviews, testing, and version control to maintain quality.

Releases are made approximately every six months, and continuous integration and deployment workflows are used to test code automatically. Nightly builds are also run on HPC systems to ensure stability and performance.

## What have been the biggest challenges in maintaining the project?

One of the main challenges is balancing development work with teaching and research responsibilities. Securing funding and access to high-performance computing resources is also an ongoing effort.

Another challenge is managing contributor turnover, as students graduate and new contributors need to be onboarded. Coordinating work across multiple institutions and international collaborators can also add complexity.

## How do you ensure the project remains sustainable over time?

Sustainability is supported by maintaining a diverse group of contributors, from early-career researchers to experienced scientists. Collaboration with other teams at Jülich Supercomputing Centre, especially those working on HPC technologies, also helps improve the model's performance and scalability.

These partnerships and the mix of expertise help ensure continued development and innovation.

## How do you engage with your community?

We engage with the community through comprehensive documentation, regular user meetings, and clear contribution guidelines. We hold bi-weekly meetings to discuss progress and gather feedback.

We also aim to respond quickly to user questions and provide a supportive environment for contributors, helping to build an active and engaged community.

## Have you taken part in any open source programs or events?

Yes, the team has participated in several hackathons focused on GPU porting and optimization, including work on systems such as LUMI and the upcoming JUPITER supercomputer.

We also organized a code sprint in collaboration with the German national Earth System Model initiative to improve the model's user interface.

## What would you love to achieve by showcasing your project?

We would like to increase awareness of MPTRAC, attract new contributors, and build stronger collaborations with researchers and institutions. Showcasing the project also helps demonstrate its impact on research, education, and real-world challenges such as air pollution and climate modeling.

It is also an opportunity to highlight the value of open-source development in scientific research.

## Do you use AI tools in your day to day work on this project? If so, how?

Yes, we have started using AI tools in several parts of the MPTRAC project. We have used AI to substantially improve our MkDocs-based user manual and our Doxygen-based developer manual. We have also used large language models, especially ChatGPT, to review and improve code design and performance.

## Do you implement AI into your classroom or coursework (if applicable)? If so, what does that look like in practice?

Not directly in formal coursework at this stage. However, PhD students and early-career researchers involved in the project are exposed to AI-supported workflows through documentation, code review, and software development activities. This gives them practical experience with how AI tools can support research software engineering while still requiring careful expert review.

## Has AI changed how you maintain or manage your project?

Yes, AI has started to change our maintenance workflows. It helps us improve documentation quality, review code more efficiently, explore design alternatives, and identify potential performance improvements. This can increase the speed and quality of development, but all AI-generated suggestions are still reviewed carefully by experienced developers.

## Have you experimented with AI driven or automated workflows in your project? What has that looked like?

Yes. We have used GitHub Copilot to support pull request reviews, for example by helping to spot possible issues, improve readability, and support the review process. More recently, we have started using Codex to bring code development, evaluation, and optimization to a new level. This is particularly interesting for an HPC code like MPTRAC, where code quality, numerical correctness, and performance are all critical.


## How do you see your contributors using AI when working on your project?

We expect contributors to use AI mainly for documentation, code understanding, code review, testing, and implementation support. AI can be especially helpful for onboarding new contributors, explaining complex parts of the code base, and improving documentation. However, for scientific code contributions, human review remains essential to ensure correctness, reproducibility, and performance.

## What concerns or challenges, if any, do you have about the use of AI in your project or field?

Our main concerns are quality, trust, and scientific correctness. MPTRAC is used for atmospheric research, so suggested code changes must be carefully validated to avoid numerical errors or unintended changes in model behavior.

There are also challenges around reproducibility, transparency, and making sure that students and contributors continue to develop a deep understanding of the scientific and technical foundations rather than relying too heavily on automated suggestions.

## How has your approach to maintaining this project evolved over time?

Our approach has become much more structured and collaborative over time. We use regular code reviews, testing, CI/CD workflows, documentation systems, and scheduled releases. More recently, AI tools have become part of this evolving workflow, helping with documentation, code review, design discussions, and performance optimization.

## How do you see AI shaping the future of your project or field?

We expect AI to become increasingly useful in scientific software development. In fields such as atmospheric modeling and high-performance computing, AI may help accelerate development and make complex software more accessible.

At the same time, scientific expertise, careful validation, and transparent workflows will remain essential.

## Is there anything else you'd like to share?

The open-source journey of MPTRAC has enabled collaboration with a global community of researchers, developers, and students. This has supported continuous improvement and knowledge sharing across disciplines.

We are excited to continue growing the community and advancing MPTRAC as a tool for atmospheric research, and we are grateful for the support provided by platforms like GitHub.
