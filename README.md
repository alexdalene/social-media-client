# CA - Workflow

[![Automated E2E Testing](https://github.com/alexdalene/social-media-client/actions/workflows/e2e-test.yml/badge.svg?event=status)](https://github.com/alexdalene/social-media-client/actions/workflows/e2e-test.yml)
[![Automated Unit Testing](https://github.com/alexdalene/social-media-client/actions/workflows/unit-test.yml/badge.svg?event=status)](https://github.com/alexdalene/social-media-client/actions/workflows/unit-test.yml)

## Description

Automated testing for an existing project made by @noroff.

## Table of Contents

- [Installation](#installation)
- [Running Tests Locally](#running-tests-locally)
- [Setting Up Continuous Integration](#setting-up-continuous-integration)
- [Formatting and linting](#formatting-and-linting)
- [Environment Variables](#environment-variables)
- [Test Results](#test-results)

## Installation

**Clone the Repository:**

```bash
git clone https://github.com/alexdalene/social-media-client
cd social-media-client
```

**Install Dependencies**

```bash
npm install
```

**Build SASS**

```bash
npm run build
```

## Running tests locally

**Run Cypress**

```bash
npm run test-e2e
```

Make sure to change the url for the Cypress tests in cypress/e2e/

```js
cy.visit('your-url-here');
```

**Run Jest**

```bash
npm run test-unit
```

## Continues Integration

This project uses continuous integration (CI) to automatically run tests on every push. We use GitHub Actions.

## Formatting and Linting

**Format using Prettier**

```bash
npm run format
```

**Check linting using ESLint**

```bash
npm run lint
```
