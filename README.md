# Aneurin's ESLint config

[.eslint.config.js](./.eslint.config.js)

These are just my preferences. Yours are absolutely fine too, but these are mine.

Usage:

1. Install this package to your project, along with peer dependencies:

```sh
npm i -D @annybs/eslint
```

2. Add the following to your `eslint.config.js` file:

```js
const annybs = require('@annybs/eslint')

module.exports = [...annybs]
```

3. For bonus points, copy [.editorconfig](./.editorconfig) to your project too.
