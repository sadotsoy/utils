function createRandom() {

  const internals = {
    createRandom: () => Math.random(),
  };

  return {
    value: value,
  }

  /*
   * Returns a random number
   * @return {number} Random number between 0 - 1
  */
  function value() {
    return internals.createRandom();
  }
};

module.exports = createRandom();
