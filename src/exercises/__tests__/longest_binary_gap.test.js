const { longestBinaryGap } = require("../longest_binary_gap");

it("finds the longest binary gap", () => {
  expect(longestBinaryGap("")).toBe(0);
  expect(longestBinaryGap("101")).toBe(1);
  expect(longestBinaryGap("00100")).toBe(0);
  expect(longestBinaryGap("100100")).toBe(2);
  expect(longestBinaryGap("001001")).toBe(2);
  expect(longestBinaryGap("010010")).toBe(2);
  expect(longestBinaryGap("1111111")).toBe(0);
  expect(longestBinaryGap("00000")).toBe(0);
  expect(longestBinaryGap("1001001")).toBe(2);
  expect(longestBinaryGap("0010011")).toBe(2);
});
