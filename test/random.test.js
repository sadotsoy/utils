const random = require("../src/Random/");

describe("Random tests", () => {
  describe("random value()", () => {
    const randomNumber = random.value();
    test("expect to return a number", () => {
      expect(typeof randomNumber).toBe("number");
    });
    test("expect to return a number greater than 0, less than 1", () => {
      expect(randomNumber).toBeGreaterThan(0);
      expect(randomNumber).toBeLessThan(1);
    });
  });
});
