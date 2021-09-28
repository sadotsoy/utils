const { ARGUMENTS } = require('../utils/messages/errors');
const { NUMBER } = require('../utils/constants/');

/*
 * Random utils function
*/
function createRandom() {
  const internals = {
    createRandom: () => Math.random(),
  };

  /*
   * Returns a random number
   * @return {number} Random number between 0 - 1
   */
  function value() {
    return internals.createRandom();
  }

  /*
   * Returns a random number between min and max
   * @param {number} min default to 0
   * @param {number} max default to 1
   * @return {number} Random number between min and max
   */
  function range(min = 0, max = 1) {
    if (typeof min !== NUMBER || typeof max !== NUMBER) {
      throw new TypeError(ARGUMENTS.numbers);
    }

    return Math.random() * (max - min) + min;
  }

  return {
    range,
    value,
  };
}

module.exports = createRandom();
