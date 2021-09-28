const { NUMBER } = require('../src/utils/constants');
const { degToRad } = require('../src/Math/');

describe('Math tests', () => {
  // degToRad
  describe('Degree number to radian', () => {
    test('Expect to return a number without argument', () => {
      expect(typeof(degToRad())).toBe(NUMBER);
    });

    test('Expect to return a number with argument', () => {
      expect(typeof(degToRad(45))).toBe(NUMBER);
    });

    test('Expect to return a TypeError if the argunmet isn\'t a number', () => {
      expect(() => degToRad('2')).toThrow(TypeError);
    });
  });
});
