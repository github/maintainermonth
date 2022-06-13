# GitHub Maintainer Month

A month for open source maintainers to gather, share, and be celebrated. 🥳

Repository for the official GitHub Maintainer Month website. You can access the website through [this link](https://maintainermonth.github.com/)

**Add your event!** See the [contributing guide](CONTRIBUTING.md) for details on how.

**<p align="center"> ❇️ June 2022 ❇️ </p>**

## Table of Contents

- [Getting Started](#getting-started)
  - [Clone](#clone)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Build](#build)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Getting Started

### Clone

If you probably are curious to know how to clone a repository, and you didn't know it, below is how code it.

```
git clone https://github.com/github/maintainermonth.git
```

### Installation

Then run the following command before any other to install all the project's dependencies.

```
yarn install
```

### Usage

To start application in development mode at [http://localhost:3000](http://localhost:3000) run the following command.

```
yarn start
```

### Build

To generate the application build run the following command.

```
yarn build
```

This will create an `out` folder in the repository root with the static files.

### Run tests

#### Using the UI

```
yarn run cypress open
```

#### Using the CLI


Stop the app if you already have it running.

```
npm run build && npm run test:e2e
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) for more details.

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## License

Copyright © 2022 [GitHub](https://github.com/github).<br />
This project is [MIT](LICENSE) licensed.
