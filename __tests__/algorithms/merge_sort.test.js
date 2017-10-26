const { mergeArrays, mergeSort } = require('../../src/algorithms/merge_sort');

it('merges sorted arrays correctly', () => {
  const leftA1 = [3, 6, 8, 9];
  const rightA1 = [1, 2, 7];

  expect(mergeArrays(leftA1, rightA1)).toEqual([1, 2, 3, 6, 7, 8, 9]);

  const leftA2 = [8];
  const rightA2 = [2];

  expect(mergeArrays(leftA2, rightA2)).toEqual([2, 8]);
});

it('sorts correctly', () => {
  expect(mergeSort([8, 6, 3, 1, 7, 2, 9])).toEqual([1, 2, 3, 6, 7, 8, 9]);
  expect(mergeSort([-1])).toEqual([-1]);
  expect(mergeSort([0, 0, 1, 0,])).toEqual([0, 0, 0, 1]);
});
