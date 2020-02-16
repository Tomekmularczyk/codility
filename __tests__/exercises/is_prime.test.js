const { isPrime } = require("../../src/exercises/is_prime");

it("checks if its prime", () => {
  expect(isPrime(1)).toBe(false);
  expect(isPrime(2)).toBe(true);
  expect(isPrime(907)).toBe(true);
});
