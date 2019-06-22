[![Build Status](https://travis-ci.org/pelevesque/find-substring-indexes.svg?branch=master)](https://travis-ci.org/pelevesque/find-substring-indexes)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/find-substring-indexes/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/find-substring-indexes?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# find-substring-indexes

Finds all the indexes of a substring.

## Node Repository

https://www.npmjs.com/package/@pelevesque/find-substring-indexes

## Installation

`npm install @pelevesque/find-substring-indexes`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

`find-substring-indexes` returns an array of all the indexes of the substring.

```js
const findSubstringIndexes = require('@pelevesque/find-substring-indexes')
```

```js
const str = 'a little cat and a hat'
const substring = 'a'
const result = findSubstringIndexes(str, substring)
// result === [0, 10, 13, 17, 20]
```

```js
const str = 'at a cat and a brat with a hat'
const substring = 'at'
const result = findSubstringIndexes(str, substring)
// result === [0, 6, 17, 28]
```
