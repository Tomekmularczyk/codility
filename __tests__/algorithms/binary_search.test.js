const { binarySearch } = require('../../src/algorithms/binary_search');

it('searches in sorted array', () => {
  const arr1 = [1, 2, 3, 4, 5, 6];
  const arr2 = [1];
  const arr3 = [1, 3, 4, 6];
  const arr4 = [-1, 0];
  const arr5 = [];
  expect(binarySearch(arr1, 1)).toBe(true);
  expect(binarySearch(arr2, 1)).toBe(true);
  expect(binarySearch(arr3, 0)).toBe(false);
  expect(binarySearch(arr4, -1)).toBe(true);
  expect(binarySearch(arr5, 3)).toBe(false);
});
