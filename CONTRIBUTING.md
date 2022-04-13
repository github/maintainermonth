# Contributing

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to GitHub Maintainer Month website.

## Table Of Contents

- [Web content](#web-content)
  - [Events](#events)
  - [Library links](#library-links)
  - [Literals](#literals)

## Web content

In this section you will find the instructions to modify web content: either to add/modify an event, or to update a literal.

All the web literals are located in the `content` folder, at the root of the repository, so it will only be necessary to edit them and, after making a pull request, add them to the main branch in order to update the web.

> **Note:** many files use _frontmatter_ to define some fields (setting a variable name and a value), so it is very important not to edit the variable name for the web to work correctly. Neither can new ones be deleted or added. The variables that are set in the _frontmatter_ are made between the `---` lines, so these cannot be modified either.

### Events

The events are located inside the `content/events` folder. Each event is documented in a markdown file for each one so, to create one, create a new file inside that same folder, with extension `.md`, for example: `africameetup.md`, following the example below:

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
linkUrl: 'https://www.meetup.com/GitHub-Africa/'
---

Join GitHub users across Africa to talk about open source project maintainership!

Speakers TBD, follow along on the Meetup page for announcements.
```

All fields included in the _frontmatter_ are mandatory:

- `title`: event title.
- `metaTitle`: title to use as meta tag.
- `metaDesc`: description to use as meta tag.
- `date`: date of event, in `MM/DD` format.
- `UTCStartTime`: start time in UTC, in `HH:MM` format.
- `UTCStartTime`: end time in UTC, in `HH:MM` format.
- `type`: one of the following `podcast`, `stream`, `talk`, `meetup`, `fundraising`, `conference`, `misc`.
- `userName`: user name or organization organizing the event.
- `userLink`: link to user or organization profile.
- `linkUrl`: Button link with external link to the event.

After these fields, on the line following `---`, you can add the event description, in markdown format.

### Library links

_Library_ page links can be added and edited from the `content/library/resources.json` file, inside the `resources` array, which has the following structure:

```json
{
  "resources": [
    {
      "title": "Link 1",
      "author": "Author",
      "description": "A short description",
      "link": "https://github.com/",
      "type": "video",
      "topics": "video"
    },
    {
      "title": "Link 2",
      "author": "Author",
      "description": "A short description",
      "link": "https://github.com/",
      "type": "video",
      "topics": "video"
    },
    {
      "title": "Link 3",
      "author": "Author",
      "description": "A short description",
      "link": "https://github.com/",
      "type": "video",
      "topics": "video"
    }
  ]
}
```

Each resource:

```json
{
  "title": "Link 3",
  "author": "Author",
  "description": "A short description",
  "link": "https://github.com/",
  "type": "video",
  "topics": "video"
}
```

Where:

- `title`: link title.
- `author`: author or authors.
- `description`: a short description (max. 200 characters).
- `link`: resource link.
- `type`: content type, such as `video`, `article`, etc.
- `topics`: related topics.

### Literals

The rest of web literals (static content), is also inside the `content` folder:

- `content/home` folder: contains markdown files with all _Home_ sections content.
- `content/commons.json`: contains all common web literals, such as menu, page titles, footer, etc.
