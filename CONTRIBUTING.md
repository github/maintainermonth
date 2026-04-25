# Contributing to GitHub Maintainer Month

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

This document provides guidelines and instructions for contributing to the Maintainer Month website.

## Getting Started - What do you want to do?

Choose your contribution type to jump to the right section:

### 🎉 **Add a New Event**
Want to showcase your maintainer-focused event during Maintainer Month? → [Jump to Adding a New Event](#adding-a-new-event)

### 📚 **Add a New Resource** 
Have a helpful resource for maintainers (article, video, tutorial)? → [Jump to Adding a New Resource](#adding-a-new-resource)

### ✏️ **Fix Typos or Content Issues**
Spotted a typo or content error that needs fixing? → [Jump to Fixing Typos or Content Issues](#fixing-typos-or-content-issues)

### 🔧 **Make Code Changes**
Want to improve the website functionality or structure? → [Jump to Making Code Changes](#making-code-changes)

### 🚀 **Set Up Development Environment**
Need to run the website locally for testing? → [Jump to Development Guidelines](#development-guidelines)

## Quick Navigation

- [How to Contribute](#how-to-contribute)
- [Contribution Walkthrough](#contribution-walkthrough)
- [Development Guidelines](#development-guidelines)
- [Content Guidelines](#content-guidelines)

## How to Contribute

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following the guidelines below
3. **Test your changes** locally if possible
4. **Submit a pull request** with a clear description of your changes

## Contribution Walkthrough

### Adding a New Event

There are two supported paths for adding events.

#### Submit an event with the issue form

Use the "Add an event for maintainers to the calendar" issue form if you want the Maintainer Month team to create the event file for you.

1. Open a new event submission issue.
2. Fill out the event name, date, UTC time, type, language, location, organizer, public event URL, and description.
3. Automation labels the issue `add event` and checks whether the required event fields are valid. If anything is missing or invalid, it applies `needs-info`.
4. A maintainer reviews the submission. If the event is approved, they apply the `approved-for-calendar` label.
5. Automation creates a pull request with the generated event markdown file.
6. The event appears on the site and in the ICS feed after the pull request is reviewed and merged.

Maintainers use these labels for the automated flow:

- `approved-for-calendar`: create or update the generated event pull request.
- `add event`: event submission received through the issue form.
- `calendar-pr-created`: the generated pull request exists.
- `needs-info`: the issue is missing required or valid event details.

The automation runs `npm test` and `npm run build` before opening the PR. If maintainers want generated PRs to also trigger the normal `pull_request` workflow, configure a `MAINTAINER_MONTH_BOT_TOKEN` repository secret with a GitHub App token or PAT. Without that secret, the workflow falls back to `GITHUB_TOKEN`.

#### Submit an event with a pull request

You can also open a pull request directly.

1. Navigate to the `content/events/` folder
2. Create a new markdown file with a descriptive name (e.g., `2026-05-20-your-event-name.md`)
3. Use the following template:

```markdown
---
title: 'Your Event Title'
metaTitle: 'Your Event Title'
metaDesc: 'A brief description of your event'
date: 'MM/DD'
endDate: 'MM/DD'
UTCStartTime: 'HH:MM'
UTCEndTime: 'HH:MM'
type: 'meetup'
language: 'English'
location: 'Virtual or Physical Location'
userName: 'organizationName'
userLink: 'https://link-to-organization.com'
linkUrl: 'https://link-to-event.com'
---

Detailed description of your event goes here. You can use markdown formatting.
```

> **Note:** `UTCStartTime` and `UTCEndTime` are optional. If omitted, the event will display "TBD" for the time. You can also set them to `'TBD'` explicitly or use `'all-day'` for events that span an entire day. Use `endDate` for multi-day events.
4. Submit a PR with your changes

Event PR reviewers should check that:

- The event link is intended to be public.
- The date and UTC time are correct.
- The type, language, location, and organizer are correct.
- The description reads well on the schedule page.
- `npm test` and `npm run build` pass.

### Adding a New Resource

1. Open the `content/library/resources.json` file
2. Add a new entry to the `resources` array following this format:

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

3. Submit a PR with your changes

### Fixing Typos or Content Issues

Found something that needs fixing? We appreciate your help! Here's how to contribute corrections:

#### What to Fix
- Spelling or grammar errors
- Broken links
- Outdated information
- Formatting issues
- Missing or incorrect event details

#### Where to Look
- **Website text:** Files in the `content/` directory
- **Event information:** Files in `content/events/`
- **Resource library:** `content/library/resources.json`
- **Homepage content:** Files in `content/home/`
- **General site text:** `content/commons.json`

#### How to Fix
1. Locate the file with the content that needs correction
2. Make your corrections (keep existing formatting and structure)
3. For events, be careful not to modify frontmatter variable names (between `---`)
4. Submit a PR with a clear description of what you fixed

**Quick Tip:** For simple typos, you can even edit directly on GitHub by clicking the pencil icon on any file!

### Making Code Changes

We welcome both minor improvements and structural changes, but the process differs:

#### Minor Code Changes
For small improvements like:
- Bug fixes
- UI/UX tweaks
- Performance optimizations
- Code cleanup or refactoring

**Process:**
1. Fork the repository and create a branch
2. Make your changes following existing code patterns
3. Test locally with `npm run dev` and `npm test`
4. Submit a PR with a clear description

#### Structural Code Changes
For significant changes like:
- New features or pages
- Major architectural changes
- New dependencies or build processes
- Breaking changes to existing functionality

**Process:**
1. **Open an issue first** to discuss your proposal with maintainers
2. Wait for feedback and approval before starting work
3. Follow the project's coding style and patterns
4. Test your changes thoroughly locally
5. Include clear documentation for any new functionality
6. Submit a PR referencing the issue

## Development Guidelines

### Setting Up Your Environment

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Visit `http://localhost:3000` to see your changes

### Code Style

- Follow the existing code style and patterns
- Use descriptive variable and function names
- Write comments for complex logic

### Testing

- Run tests with `npm test` before submitting changes
- Add new tests for new functionality when appropriate

## Content Guidelines

### Frontmatter Fields

> **Important:** Do not modify variable names in frontmatter sections (between `---`). These are required for the website to function properly.

#### Event Fields

- `title`: Event title
- `metaTitle`: Title for SEO meta tags
- `metaDesc`: Description for SEO meta tags
- `date`: Event date in `MM/DD` format
- `endDate`: _(optional)_ End date in `MM/DD` format, for multi-day events (e.g., a conference running May 16-18 would use `date: '05/16'` and `endDate: '05/18'`). Multi-day events display a date range and remain listed as upcoming until the end date passes.
- `UTCStartTime`: _(optional)_ Start time in UTC, in `HH:MM` format. Omit or set to `'TBD'` if the time is not yet confirmed. Set to `'all-day'` for events without a specific start time.
- `UTCEndTime`: _(optional)_ End time in UTC, in `HH:MM` format. Same rules as `UTCStartTime`.
- `type`: One of: `podcast`, `stream`, `talk`, `meetup`, `fundraising`, `conference`, `workshop`, `misc`
- `language`: Primary language of the event
- `location`: `Virtual` or physical location
- `userName`: Organizer/organization name
- `userLink`: Link to organizer profile/website
- `linkUrl`: Direct link to the event

#### Library Resource Fields

- `title`: Resource title
- `author`: Author or creator name
- `description`: Brief description (max 200 characters)
- `link`: URL to the resource
- `type`: Content type (e.g., `video`, `article`, `tutorial`)
- `topics`: Relevant topic tags

### Static Content

Other content files are organized as follows:

- `content/home/`: Content for the homepage sections
- `content/commons.json`: Common website text (menu, footer, page titles, etc.)

When editing these files, maintain the existing structure and frontmatter fields.

### Questions?

The Maintainer Month website is maintained by the Open Source team at GitHub. You can reach out at <maintainermonth @ github .com>
