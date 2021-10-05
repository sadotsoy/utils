## `Random number generator`

A random module to produce randomness.

## Examples

```JS
const { random } = require('./utils/');

console.log(random.value());
// a random number between 0 to 1.
```


## Functions

- [value](#value) Random value.

- [range](#range) Random value between a min and max.


<a name="value"></a>

### value()

#### `randomValue = random.value()`

Returns a random value between 0 to 1. Is equivalent to `Math.random()` funtion.

```JS
const n = random.value()
// a random number between 0 to 1.
```

<a name="range"></a>

### range(min, max)

#### `rn = random.range(min = 0, max = 1)`

Return a random number between min and max, the min default is 0 and the max default is 1. Min and Max should be a number.


```JS
const rn = random.range(0, 12)
// a random number between 0 to 12.
```
