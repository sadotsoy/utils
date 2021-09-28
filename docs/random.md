## `Random number generator`

A random module to produce randomness.

## Examples

```JS
const { random } = require('./utils/');

console.log(random.value());
// a random number between 0 to 1.
```


## Functions

- [value](#value)

- [range](#range)



<a name="value"></a>

### `randomValue = random.value()`

Returns a random value between 0 to 1. Is equivalent to `Math.random()` funtion.

<a name="range"></a>

### `randomRange = random.range(min, max)`

Return a random number between min and max, the min default is 0 and the max default is 0. Min and Max should be a number.
