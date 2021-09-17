## `Random number generator`
v1.0.0

A random module to produce randomness.

## Examples

```JS
const { random } = require('./utils/index');

console.log(random.value());
// a random number between 0 to 1.
```


## Functions

- [value](#value)



<a name="value"></a>

### `v = random.value()`

Returns a random value between 0 to 1. Is equivalent to `Math.random()` funtion.
