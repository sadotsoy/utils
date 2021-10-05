## `Math utils`

Math utils.

## Examples

```JS
const { math } = require('./utils/')

console.log(math.degToRad(45));
// 45 deg in to rad => 0.7853981633974483
```

## Function

- [degToRad](#degToRad) Convert a degree number to radian.

- [mapRange](#mapRange) Given a value and an input range, map the value to an output range.

<a name="degToRad"></a>

### degToRad()

#### `rad = math.degToRad(deg=0)`

Returns a degree number in radian.

```JS
const rad = math.degToRad(45);
// 45 deg in to rad => 0.7853981633974483
```

<a name="mapRange"></a>

### mapRange()

#### `n = math.mapRange(value, inputMin, inputMax, outputMin, outputMax, clamp = false)`

Map the value from the range `[inputMin, inputMax)` to the range of `[outputMin, outputMax)`.  
By default, value is not clamped, but you can specify `clamp` as true to clamp the output within `outputMin` and `outputMax`.

```JS
// random number between 0 - 200 using randomRange function.
const rn = randomRange(0, 200);

// value = [0, 200), inputMin = 0, inputMin = 200, outputMin = 12, outputMax = 1;
const n = mapRange(rn, 0, 200, 12, 1);

/* The way to read the mapRange code is the next:
From a range between `inputMin = 0` and `inputMax = 200`, when `rn = 0` we want the `n` value to be `outputMax = 12`,  
when `rn = 200`, we want the `n` value to be `outputMin = 1`, the rest of `rn` results is the range between outputMin  
and outputMax
*/
```
