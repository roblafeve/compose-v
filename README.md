# composeV

[![codecov](https://codecov.io/gh/roblafeve/compose-v/branch/master/graph/badge.svg)](https://codecov.io/gh/roblafeve/compose-v)
[![Build Status](https://travis-ci.org/roblafeve/compose-v.svg?branch=master)](https://travis-ci.org/roblafeve/compose-v)

Composes variadic functions (_n_-ary). **composeV** handles unary functions the same as compose `((x) -> (x) -> (x)) -> (x)`, but can also handle miss-matched arities `((x, y), (x), (x, y, z), ...) -> (x, y, z, ...)`. Composed functions are nested in `parameters[0]` while the remaining arguments are passed to `parameters[1...]`. This can be useful when you need to compose functions while still being able to pass the same arguments into each successive function unchanged.

> Note: composeV is non-curried (compose isn't typically). Be sure to reference [ramda](http://ramdajs.com/0.21.0/index.html) or a comperable library to make sure there isn't a better fit out there for your particular use-case.

## Install

```
$ npm install --save compose-v
```

## Usage

```js
const composeV = require('compose-v')

// Compose unary functions
const x = x => x + x
const y = x => x * x
const xy = composeV(y, x) // xy :: (a) -> y(x(a))
xy(5) // 100 OR (5 + 5) * 10

// Compose two binary functions
const x = (x, y) => x + y
const y = (x, y) => x * y
const xy = composeV(y, x) // xy :: (a, b) -> y(x(a, b), b)
xy(5, 5) // 50 OR (5 + 5) * 5

// Compose miss-matched n-ary functions
// (Must pass maximum arguments, in this case 3)
const x = (x, y) => x + y
const y = (x, y, z) => x * y * z
const xy = composeV(y, x) // xy :: (a, b, c) -> y(x(a, b, c), b, c)
xy(4, 6, 8) // 24 OR 4 + 6 + 6 + 8

```

## License

MIT © [Rob LaFeve](https://twitter.com/roblafeve)
