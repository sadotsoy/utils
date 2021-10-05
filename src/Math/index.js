const { ARGUMENTS } = require('../utils/messages/errors');
const { BOOLEAN, NUMBER } = require('../utils/constants/');

/*
 * Math utils function
 */
function mathUtils() {
  const internals = {
    pi: Math.PI,
  };

  /*
   * Convert degs to Rads
   * @param {number} deg default 0
   * @returns {number} radians number
   */
  function degToRad(deg = 0) {
    if (typeof deg !== NUMBER) {
      throw new TypeError(ARGUMENTS.numbers);
    }
    return deg * (internals.pi / 180);
  }

  /*
   * Given a value and an input range, map the value to an output range.
   * @param {number} value the number to be mapped.
   * @param {number} inputMin the lower bound of the input range.
   * @param {number} inputMax the upper bound of the input range.
   * @param {number} outputMin the lower bound of the output range.
   * @param {number} outputMax the upper bound of the output range.
   * @param {boolean} clamp true if the value should be clamped to [outputMin, outputMax). default false
   * @returns {number} a mapped number.
   *
   * NOTE: if the abs difference between inputMin and inputMax is less than EPSILON, outputMin will
   * be returned to prevent divide by zero errors.
   */
  function mapRange(value, inputMin, inputMax, outputMin, outputMax, clamp = false) {
    if (
      typeof value !== NUMBER ||
      typeof inputMin !== NUMBER ||
      typeof inputMax !== NUMBER ||
      typeof outputMin !== NUMBER ||
      typeof outputMax !== NUMBER
    ) {
      throw new TypeError(ARGUMENTS.numbers);
    }

    if (typeof clamp !== BOOLEAN) {
      throw new TypeError(ARGUMENTS.boolean);
    }

    if (Math.abs(inputMin - inputMax) < Number.EPSILON) {
      return outputMin;
    }

    let outValue = ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) + outputMin;

    if (clamp) {
      if (outputMax < outputMin) {
        if (outValue < outputMax) {
          outValue = outputMax;
        }
        if (outValue > outputMin) {
          outValue = outputMin;
        }
      } else {
        if (outValue > outputMax) {
          outValue = outputMax;
        }
        if (outValue < outputMin) {
          outValue = outputMin;
        }
      }
    }

    return outValue;
  }

  return {
    degToRad,
    mapRange,
  };
}

module.exports = mathUtils();
