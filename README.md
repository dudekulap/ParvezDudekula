# Playwright

This repository contains a Proof Of Concept of the `Playwright` test automation framework for Web apps on multiple Web browsers: Chrome, Firefox, WebKit (Safari).

## Local Installation

```
git clone https://bitbucket.forge.avaya.com/scm/metam/playwright.git
```

## Running single test with Playwright

```
npm install

```

```
PowerShell Terminal (Windows):
$env:LAB="<cluster-name>(ci)";npm run test --tags="@tagname"

Gitbash (Windows/Linux):
set LAB=<cluster-name>(ci)&& npm run test --tags="@tagname"
```

## Running tests with additional configurations (parallel, series etc.)

```
https://confluence.forge.avaya.com/display/AOEC/Playwright+-+Test+Automation+Framework

```

## Screenshots

![image](https://playwright.dev/img/playwright-logo.svg)