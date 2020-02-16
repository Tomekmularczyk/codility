const { findQuartiles } = require("../quartiles");

it("finds quartiles", () => {
  const arr = [3, 7, 8, 5, 12, 14, 21, 13, 18];
  expect(findQuartiles(arr)).toEqual([6, 12, 16]);
});
