const { NUMBER } = require('../src/utils/constants');
const { degToRad, mapRange } = require('../src/Math/');

describe('Math tests', () => {
  // degToRad
  describe('Degree number to radian', () => {
    test('Expect to return a number without argument', () => {
      expect(typeof degToRad()).toBe(NUMBER);
    });

    test('Expect to return a number with argument', () => {
      expect(typeof degToRad(45)).toBe(NUMBER);
    });

    test("Expect to return a TypeError if the argunmet isn't a number", () => {
      expect(() => degToRad('2')).toThrow(TypeError);
    });
  });

  // mapRange
  describe('Map a range', () => {
    test("Expect to return a TypeError if one or all arguments aren't a numbers", () => {
      expect(() => mapRange()).toThrow(TypeError);
    });

    describe('Test to expect controlled values', () => {
      test('Expect to return 100 as value', () => {
        const n = mapRange(10, 0, 10, 0, 100);
        expect(n).toBe(100);
      });

      test('Expect to return 1 as value', () => {
        const n = mapRange(0, 0, 10, 1, 100);
        expect(n).toBe(1);
      });

      test('Expect to return 70 as value', () => {
        const n = Math.floor(mapRange(7, 0, 10, 1, 100));
        expect(n).toBe(70);
      });

      test('Expect to return 65 as value', () => {
        const n = Math.floor(mapRange(6.5, 0, 10, 1, 100));
        expect(n).toBe(65);
      });
    });
  });
});
