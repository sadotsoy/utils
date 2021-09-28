const ARGUMENTS = require('../utils/messages/errors');
const { NUMBER } = require('../utils/constants/');

/*
 * Math utils function
*/
function mathUtils() {
  const internals = {
    pi: Math.PI,
  };

  /*
   * @param {number} deg default 0
   * @returns {number} radians number
  */
  function degToRad(deg = 0) {
    if (typeof(deg) !== NUMBER) {
      throw new TypeError(ARGUMENTS.numbers)
    }
    return deg * (internals.pi / 180);
  }

  return {
    degToRad,
  }
};

module.exports = mathUtils();
