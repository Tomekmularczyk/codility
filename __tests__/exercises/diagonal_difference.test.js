const {
  diagonalDifference
} = require("../../src/exercises/diagonal_difference");

it("counts diagonal difference", () => {
  const emptyMatrix = [];
  const matrix1 = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ];
  const matrix2 = [[-11]];

  expect(diagonalDifference(emptyMatrix)).toBe(0);
  expect(diagonalDifference(matrix1)).toBe(15);
  expect(diagonalDifference(matrix2)).toBe(0);
});
