---
name: Iori Yanokura
institution: The University of Tokyo
department: Graduate School of Information Science and Technology / Mechano-Informatics
projectName: scikit-robot
projectRepo: https://github.com/iory/scikit-robot
projectWebsite: https://scikit-robot.readthedocs.io/en/latest/
maintainerProfiles:
  - github: https://github.com/iory
  - orcid: https://orcid.org/0009-0009-4433-0013
badges: ["Academic Maintainer", "Assistant Professor"]
description: "A lightweight, pure-Python library for robotic kinematics, motion planning, visualization, and control, designed to make robotics more accessible to students, researchers, and engineers."
---

## What is Scikit-robot, and what does it help people do?

Scikit-robot is a lightweight, pure-Python library for robotic kinematics, motion planning, visualization, and control. It is designed to make robotics more accessible by allowing users to easily simulate, control, and extend robots using Python. By lowering the barrier to entry, it helps students, researchers, and engineers quickly turn their ideas into working robotic systems without needing to deal with complex underlying implementations. Over the past year the library has grown to include a full-body inverse-kinematics solver that treats the floating base as a solved degree of freedom (via new PlanarJoint and FloatingJoint primitives), differentiable and batched kinematics implemented in JAX, ROS 2 robot interfaces (e.g., a parameterised PandaROS2RobotInterface for multi-arm setups), and humanoid models such as JAXON JVRC. This makes scikit-robot increasingly viable not only for educational use but also for whole-body humanoid and dual-arm research.

## What inspired you to start this project?

The story behind Scikit-robot began with a desire to make robotics more accessible and approachable. At the Information Systems Engineering Laboratory, we had long relied on EusLisp, a powerful robot programming language, but it had limitations such as integration challenges and less accessible documentation.

During my time as a graduate student, I started thinking about how to preserve EusLisp's strengths while combining them with Python's simplicity and ecosystem. Inspired by tools like NumPy and Scikit-learn, I saw the need for a robotics library that was easy to start with and versatile in its applications. This led to the creation of Scikit-robot.

## How does this project connect to your academic work?

Scikit-robot is deeply connected to my academic work and originated from my graduate research at the Information Systems Engineering Laboratory. It became a core part of my efforts to lower the barriers to robot development.

It has since been used in research projects, including work with PR2 robots and ROS, and more recently with humanoid platforms such as JAXON and ROS 2-based robots including the Franka Panda (with first-class support for multi-arm setups), and continues to support both research and educational activities.

## Who contributes to the project?

Students are the primary contributors to the project. Several lab members have led core features that became the basis of recent publications — the integrated URDF toolchain, dynamic root transformation, and hash-based model management were developed jointly.

## How are students involved in the project?

Students contribute by writing code, improving documentation, testing features, and using the library in their own research projects.

## How is the project used in teaching or coursework?

Scikit-robot is actively integrated into coursework. At the University of Tokyo's Department of Mechanical Informatics, students use it in practical exercises where they design robots in CAD, convert them into URDF models, and control or simulate them.

It is also used in workshops for Toshimagaoka Girls' Junior and Senior High School students, where it helps teach basic robotics concepts through hands-on activities.

## What impact has this project had on your students?

Participating in Scikit-robot has had a significant impact on students. They gain hands-on experience in robotics, develop practical engineering skills, and build confidence in programming.

Students involved in research and development also improve their problem-solving abilities, creativity, and teamwork skills, while gaining a deeper understanding of open-source development.

## What impact has the project had beyond the classroom or research?

Scikit-robot has had a meaningful impact in both education and research. It has enabled students and researchers to move from design to implementation more easily and has supported projects in areas like modular robots and assistive technologies. Concrete examples include the Tycoon modular robot system and the Griphis manipulator, both of which rely on scikit-robot's dynamic root-transformation algorithm to compose modules into physically meaningful assemblies. The framework now also powers FormaMotus, a [Blender plugin](https://github.com/iory/formamotus) for visualising and authoring modular robot configurations on top of scikit-robot.

By reducing cost and complexity, it allows more people to experiment with robotics and has helped expand access to practical robotics applications. This year, the work was published as "scikit-robot: An Integrated Framework for Solving Structural Challenges in Dynamic Modeling for Reconfigurable Robotics" at IEEE/SICE SII 2026.

## What does it take to maintain the project?

The project is maintained through a structured development process that includes continuous integration using GitHub Actions, automated testing, and real-world validation with physical robots. More recently, code review on every diff is increasingly assisted by AI tools (Codex and Claude Code), which has shortened the loop between writing changes and getting a careful second pass on them — particularly valuable when the only other reviewers are busy graduate students.

Releases are automated through PyPI, and testing includes unit tests, integration tests, and real-world testing to ensure reliability.

## What have been the biggest challenges in maintaining the project?

One of the biggest challenges is balancing development speed and quality with limited time and resources in an academic environment. Contributors, including students, often have limited availability.

Another challenge is maintaining stability while exploring new research ideas, as well as keeping documentation up to date despite frequent contributor turnover.

## How do you ensure the project remains sustainable over time?

To ensure sustainability, I rely heavily on automation, including continuous integration and automated releases, to reduce maintenance workload. I have also started incorporating agentic AI workflows — using coding agents for code review, refactoring, and documentation upkeep — which helps offset the limited reviewer bandwidth that comes with maintaining an open-source project inside a small academic lab.

I also focus on keeping the design simple and intuitive to lower the barrier for new contributors, incorporate real-world testing to ensure reliability, and integrate the project into educational programs to continuously engage new users and contributors.

## How do you engage with your community?

Community engagement mainly happens through educational use, GitHub discussions, and collaboration within the lab. Feedback from students and users helps guide improvements.

Issues and pull requests are used for open discussion, and contributions are encouraged through transparent workflows.

## Have you taken part in any open source programs or events?

No.

## What would you love to achieve by showcasing your project?

I would like Scikit-robot to be showcased to increase awareness and highlight its value in education and research. It could also encourage feedback, collaboration, and broader adoption.

Ultimately, I hope it helps more people explore robotics and turn their ideas into reality.

## Do you use AI tools in your day to day work on this project?

Yes, I use AI tools in my daily workflow, particularly for brainstorming research ideas and determining implementation strategies. They are also highly effective for coding and debugging robotic systems.

## Do you implement AI into your classroom or coursework?

Yes, I integrate AI into my teaching. I guide students on how to navigate challenges when they first get stuck, specifically instructing them to use generative AI to analyze and troubleshoot error messages they encounter.

## Has AI changed how you maintain or manage your project?

It has significantly increased our development speed. AI has also streamlined tasks that used to be considered high-value manual work — such as handling software version compatibility, creating user-friendly error messages, and managing migrations, like the transition from ROS 1 to ROS 2.

## Have you experimented with AI driven or automated workflows in your project?

I use AI extensively for documentation generation. It is also instrumental in rapidly developing Proof of Concepts (PoC) for new research ideas.

## How do you see your contributors using AI when working on your project?

I believe contributors use AI primarily to understand the codebase rather than just for generating code or documentation. It helps them quickly learn what is possible within the framework and how to implement specific features they have in mind.

## What concerns or challenges, if any, do you have about the use of AI in your project or field?

I don't have major concerns, but while AI makes it easy to create numerous codebases, I believe the real priority remains ensuring that these projects are maintained over the long term and not abandoned.

## How has your approach to maintaining this project evolved over time?

My approach has evolved to focus on sustainability through GitHub Actions and a strict commitment to avoiding breaking changes. Since the project is used extensively within our laboratory, I am very careful to ensure backward compatibility. I prioritize abstraction so that we can improve functionality without changing how users call functions.

## How do you see AI shaping the future of your project or field?

I believe AI will allow us to incorporate a wider range of features that will ultimately make robots significantly more accessible and easier to use.

## Is there anything else you'd like to share?

One key lesson from this project is the importance of automated testing in robotics. Unlike typical software, robotics directly interacts with physical systems, so reliability is critical.

Scikit-robot emphasizes automated testing and real-world validation, helping bridge the gap between theory and practice. This approach improves reproducibility and allows students and researchers to focus more on innovation rather than debugging.

The project has also highlighted both the challenges and rewards of open-source collaboration in academia, and I hope it encourages a more open and inclusive robotics community.
