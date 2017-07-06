# Automatic timestamp for Objection.js

[![npm](https://img.shields.io/npm/v/objection-timestamp.svg?style=flat-square)](https://npmjs.org/package/objection-timestamp)
![node](https://img.shields.io/node/v/objection-timestamp.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/seegno/objection-timestamp/master.svg?style=flat-square)](https://travis-ci.org/seegno/objection-timestamp)
[![Coverage Status](https://img.shields.io/coveralls/seegno/objection-timestamp/master.svg?style=flat-square)](https://coveralls.io/github/seegno/objection-timestamp?branch=master)

This plugin adds an automatic createdAt and updatedAt to your [Objection.js](https://github.com/Vincit/objection.js/) models.

## Installation

### NPM

```sh
npm i objection-timestamp
```

### Yarn

```sh
yarn add objection-timestamp
```

## Usage

### Generate timestamp id

```js
// Import the plugin.
const timestamp = require('objection-timestamp')();
const Model = require('objection').Model;

// Mixin the plugin.
class Item extends timestamp(Model) {
  static get tableName() {
    return 'Item';
  }
}

const item = await Item.query().insert({
  name: 'foo'
});

console.log(item.createdAt);
// 2017-07-06T09:53:39.266Z
console.log(item.updatedAt);
// 2017-07-06T09:53:39.266Z
```

## Tests

Run the tests from the root directory:

```sh
npm test
```

You can find Jest documentation [here](https://facebook.github.io/jest/docs/getting-started.html).

## Contributing & Development

### Contributing

Found a bug or want to suggest something? Take a look first on the current and closed [issues](https://github.com/seegno/objection-timestamp/issues). If it is something new, please [submit an issue](https://github.com/seegno/objection-timestamp/issues/new).

### Develop

It will be awesome if you can help us evolve `objection-timestamp`. Want to help?

1. [Fork it](https://github.com/seegno/objection-timestamp).
2. `npm install`.
3. Hack away.
4. Run the tests: `npm test`.
5. Create a [Pull Request](https://github.com/seegno/objection-timestamp/compare).
