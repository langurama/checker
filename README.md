# @langurama/checker

[![Build](https://img.shields.io/github/workflow/status/langurama/checker/Langurama%20Checker?style=for-the-badge)](https://github.com/langurama/checker/actions?query=workflow%3A%22Langurama+Checker%22)
[![Coverage](https://img.shields.io/codecov/c/github/langurama/checker?style=for-the-badge)](https://codecov.io/gh/langurama/checker/branch/master)
[![Version](https://img.shields.io/npm/v/@langurama/checker.svg?style=for-the-badge)](https://www.npmjs.com/package/@langurama/checker)
[![License](https://img.shields.io/npm/l/@langurama/checker.svg?style=for-the-badge)](https://github.com/langurama/checker/blob/master/LICENSE)

Due to the retardedness of JavaScript not including proper checking mechanisms this library was born out of fire and glory. This package is made for Node.js and the browser.

## Contents

-   [ Install ](#install)
-   [ Usage ](#usage)
-   [ How it works ](#how-it-works)
-   [ Development ](#development)

<a name="install"></a>

## Install

```
npm install --save-prod --save-exact @langurama/checker
```

<a name="usage"></a>

## Usage

### \<LanguramaChecker\>

#### array(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### asyncFunction(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### bigint(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### boolean(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### date(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### error(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### function(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### generatorFunction(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### nan(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### null(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### number(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### object(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### promise(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### string(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### symbol(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

#### undefined(object)

-   object **\<any\>**
-   Returns: **\<boolean\>**

<a name="example"></a>

## Example

You may check the `example/` directory for runnable example files.

<a name="how-it-works"></a>

## How it works

This package transpiles code to `CommonJS` via `Babel` targeted at the current `Node.js` LTS version. To use this in the browser you will need to transpile it from `CommonJS` to your targeted browser(s).

## Development

When developing this library, it assumes that NPM is using the bash shell.
Remember to set the correct Git email when developing.
