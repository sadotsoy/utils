const { value, range } = require('../src/Random/');
const { NUMBER } = require('../src/utils/constants/');

describe('Random tests', () => {
  // value()
  describe('Random value()', () => {
    const randomNumber = value();

    test('Expect to return a number', () => {
      expect(typeof randomNumber).toBe(NUMBER);
    });

    test('Expect to return a number greater than 0, less than 1', () => {
      expect(randomNumber).toBeGreaterThan(0);
      expect(randomNumber).toBeLessThan(1);
    });
  });

  // range()
  describe('random range()', () => {
    test('Expect to return a number', () => {
      const randomRangeNumber = range();
      expect(typeof randomRangeNumber).toBe(NUMBER);
    });

    test('Expect to return a random number between the defaults 0 and 1', () => {
      const randomDefaultRangeNumber = range();
      expect(randomDefaultRangeNumber).toBeGreaterThan(0);
      expect(randomDefaultRangeNumber).toBeLessThan(1);
    });

    test("Expect to return a error if don't receive a number as params", () => {
      expect(() => range('2', 0)).toThrow(TypeError);
      expect(() => range(0, '2')).toThrow(TypeError);
      expect(() => range('0', '2')).toThrow(TypeError);
    });

    test('Expect to return a random number between 5 and 10', () => {
      const randomRangeNumber = range(5, 10);
      expect(randomRangeNumber).toBeGreaterThan(5);
      expect(randomRangeNumber).toBeLessThan(10);
    });
  });
});
