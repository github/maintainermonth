# Contributing to GitHub Maintainer Month

### Hey there! 👋

First off, thanks for taking the time to contribute! 🎉✨

This document provides **guidelines** and **instructions** for contributing to the **Maintainer Month** website.

🎇 Don't worry if you're new here, we appreciate supporting and giving chances for **first-time contributions**! If you have any questions, **feel free to reach out for help** and we'll try to answer as soon as possible! 💚🚀

## 🗺️ SUMMARY

- [How to Contribute](#how-to-contribute)
- [Contribution Walkthrough](#contribution-walkthrough)
  - [Adding a New Event](#adding-a-new-event)
  - [Adding a New Resource
    ](#adding-a-new-resource)
  - [Fixing Typos or Content Issues](#fixing-typos-or-content-issues)
  - [Making Code Changes
    ](#making-code-changes)
- [Development Guidelines](#development-guidelines)
  - [Setting Up Your Environment
    ](#setting-up-your-enviroment)
  - [Code Style](#code-style)
  - [Testing](#testing)
- [Questions](#questions)

## 🧩 How to Contribute

If you want to **contribute to the project**, follow the instructions below:

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following the guidelines at [Contribution Walkthrough](#contribution-walkthrough).
3. **Test your changes** locally before committing, if possible.
4. **Submit a Pull Request (PR)** with a **clear description of your changes**, follow the instructions at [Contribution Walkthrough](#contribution-walkthrough).

## 📜 Contribution Walkthrough

### → Adding a New Event

If you want to add a new event, go to the **`content/events/` folder**.

Each event is documented in a markdown file for each one. So, to create one:

2. Create a new **markdown file** with a descriptive name (e.g., `2025-05-20-your-event-name.md` )
3. Use the **following template** to add the event details:

```
---
title: 'GitHub Virtual Meetup: Africa'
metaTitle: 'GitHub Virtual Meetup: Africa'
metaDesc: 'Join GitHub users across Africa to talk about open source project maintainership!'
date: '06/16'
UTCStartTime: '12:00'
UTCEndTime: '15:00'
type: 'meetup'
userName: 'github'
userLink: 'https://www.meetup.com/GitHub-Africa/'
linkTitle: 'Join the GitHub Africa meetup'
linkUrl: 'https://www.meetup.com/GitHub-Africa/'
---

Join GitHub users across Africa to talk about open source project maintainership!

Speakers TBD, follow along on the Meetup page for announcements.
```

📌 All fields included in the _frontmatter_ are **mandator**y:

- `title`: event title.
- `metaTitle`: title to use as meta tag.
- `metaDesc`: description to use as meta tag.
- `date`: date of event, in `MM/DD` format.
- `UTCStartTime`: start time in UTC, in `HH:MM` format.
- `UTCStartTime`: end time in UTC, in `HH:MM` format.
- `type`: one of the following `podcast`, `stream`, `talk`, `meetup`, `fundraising`, `conference`, `misc`.
- `userName`: user name or organization organizing the event.
- `userLink`: link to user or organization profile.
- `linkTitle`: button text with external link to the event.
- `linkUrl`: Button link with external link to the event.

After these fields, on the line following `---`, **add the event description** in markdown format, then submit a **PR** with your changes.

### → Adding a New Resource

If you want to add a new resource (podcasts, articles, video, etc.) to the Library page (where links can be added and edited), you should:

1. Open the **`content/library/resources.json` file**
2. Add a new entry to the `resources` array following this **format** below:

```json
{
  "title": "Resource Title",
  "author": "Author Name",
  "description": "Brief description (max 200 characters)",
  "link": "https://link-to-resource.com",
  "type": "video|article|tutorial|etc",
  "topics": "relevant topic tags"
}
```

3. Submit a **PR** with your changes

### → Fixing Typos or Content Issues

Found a grammatical mistake? A broken link? Or even something more technical, like outdated information? Firstly, you should:

1. **Locate the file** with the content that needs correction

   - **Website text** is in the `content/` directory
   - For **events**, check `content/events/`
   - For **library resources**, check `content/library/resources.json`
   - For **homepage sections**, `content/home/`
   - **Common website text** (menu, footer, page titles, etc.) `content/commons.json`

2. Make your corrections
3. Submit a **PR** describing what you fixed

### → Making Code Changes

If you believe there's a **feature or functionality that could be improved** or even a **better way to perform a certain task**, here's what you should do:

1. For **structural** code changes, please **open an issue first to discuss your proposal**
2. Follow the **project's coding style** and patterns
3. **Test** your changes locally before submitting
4. Include **clear documentation** for any new functionality

## 🛠️ Development Guidelines

### → Setting Up Your Environment

1. Clone the repository

```bash
git clone https://github.com/iambel/maintainermonth.git
```

2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Visit `http://localhost:3000` to see your changes

### → Code Style

- Follow the **existing code style** and **patterns**
- Use **descriptive** variable and function names
- **Write comments** for complex logic

### → Testing

- Run tests with `npm test` before submitting changes
- Add new tests for new functionality when appropriate

## ❓Questions

The **Maintainer Month** website is maintained by the **Open Source team at GitHub**. You can reach out at <maintainermonth@github.com> 💚
