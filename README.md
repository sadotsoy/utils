# sadotsoy/utils
v1.0.0

This basic utils library is open for all and used for me: was created for educational, creative, and random purposes.


## Examples

Can import all the utils

```JS
const utils = require('./utils/');

console.log(utils.random.value());
// a random number between 0 to 1.
```

**Or** can require a particular module like:

```JS
const { random } = require('./utils/index');

console.log(random.value());
// a random number between 0 to 1.
```

**Or** by using destructuring to grab only a select few functions:
```JS
const { value } = require('./utils/src/Random/');

console.log(value());
// a random number between 0 to 1.
```

## Modules
- [`random`](./docs/random.md) Random number generator.
