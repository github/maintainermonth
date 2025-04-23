# Contributing to GitHub Maintainer Month

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

This document provides guidelines and instructions for contributing to the Maintainer Month website.

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

1. Navigate to the `content/events/` folder
2. Create a new markdown file with a descriptive name (e.g., `2025-05-20-your-event-name.md`)
3. Use the following template:

```markdown
---
title: 'Your Event Title'
metaTitle: 'Your Event Title'
metaDesc: 'A brief description of your event'
date: 'MM/DD'
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

4. All frontmatter fields (between `---`) are mandatory
5. Submit a PR with your changes

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

1. Locate the file with the content that needs correction
   - Website text is in the `content/` directory
   - For events, check `content/events/`
   - For library resources, check `content/library/resources.json`
2. Make your corrections
3. Submit a PR describing what you fixed

### Making Code Changes

1. For structural code changes, please open an issue first to discuss your proposal
2. Follow the project's coding style and patterns
3. Test your changes locally before submitting
4. Include clear documentation for any new functionality

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
- `UTCStartTime`: Start time in UTC, in `HH:MM` format
- `UTCEndTime`: End time in UTC, in `HH:MM` format
- `type`: One of: `podcast`, `stream`, `talk`, `meetup`, `fundraising`, `conference`, `misc`
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
