# Maintainer Month

A month for open source maintainers to gather, share, and be celebrated. 🥳

Repository for the official GitHub Maintainer Month website. You can access the website through [this link](https://maintainermonth.github.com/)

**Add your event!** See the [contributing guide](CONTRIBUTING.md) for details on how.

**<p align="center"> ❇️ May 2025 ❇️ </p>**

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Build](#build)
  - [Testing](#testing)
- [Project Structure](#project-structure)
- [Adding Events](#adding-events)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [Maintainer Month Origins](#maintainer-month-origins)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (version 16.x or higher recommended)
- npm or yarn

### Installation

Run the following command before any other to install all the project's dependencies.

```bash
# Using npm
npm install

# Using yarn
yarn install
```

### Usage

To start application in development mode at [http://localhost:3000](http://localhost:3000) run the following command.

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

### Build

To generate the application build run the following command

```bash
# Using npm
npm run build

# Using yarn
yarn build
```

This will create an `out` folder in the repository root with the static files.

### Testing

To run the test suite:

```bash
# Using npm
npm test

# Using yarn
yarn test
```

## Project Structure

This project is built with Next.js and React, with SASS for styling:

- `/components` - React components for the website
- `/pages` - Next.js pages
- `/public` - Static assets
- `/styles` - SASS stylesheets
- `/content` - Content files for events, news, and other information
- `/api` - API endpoints

## Adding Events

To add an event to Maintainer Month 2025:

1. Create a new Markdown file in the `/content/events/` directory
2. Name it with format `YYYY-MM-DD-EventName.md`
3. Include the required frontmatter (details in [CONTRIBUTING.md](CONTRIBUTING.md))
4. Submit a pull request with your changes

## Deployment

The site is automatically deployed when changes are merged to the main branch.

## Contributing

See the [contributing guide](CONTRIBUTING.md) for more details.

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Maintainer Month Origins

Maintainer Month was created, and is maintained, by GitHub, starting in 2021 as Maintainer Week. It was simultaneously conceived of by Kara Sowles and Robin Riley, who called each other to tell each other the same idea. It's intended as an industry-wide event that isn't owned by GitHub - that belongs to anyone who wants to contribute or participate. In includes an Advisory Council from folks across the industry that shape what it is.

## License

Copyright © 2025 [GitHub](https://github.com/github).<br />
This project is [MIT](LICENSE) licensed.

