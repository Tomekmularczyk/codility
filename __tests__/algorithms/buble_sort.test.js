const basicBubleSort = require("../../src/algorithms/buble_sort")
  .basicBubbleSort;
const optimizedBubleSort = require("../../src/algorithms/buble_sort")
  .optimizedBubbleSort;

let arr1;
let arr2;
let arr3;
let arr4;
let arr5;
beforeAll(() => {
  arr1 = [2, 2];
  arr2 = [2, 1];
  arr3 = [3, 2, 1];
  arr4 = [6, 3, 4, 5, 2];
  arr5 = [-10, 1, -11, 0];
});

it("doesnt fail on empty array", () => {
  const arr = [];
  basicBubleSort(arr);
  expect(arr).toEqual([]);
});

it("correctly sort elements", () => {
  basicBubleSort(arr1);
  basicBubleSort(arr2);
  basicBubleSort(arr3);
  basicBubleSort(arr4);
  basicBubleSort(arr5);
  expect(arr1).toEqual([2, 2]);
  expect(arr2).toEqual([1, 2]);
  expect(arr3).toEqual([1, 2, 3]);
  expect(arr4).toEqual([2, 3, 4, 5, 6]);
  expect(arr5).toEqual([-11, -10, 0, 1]);
});

it("correctly sort elements with optimized bubble sort", () => {
  optimizedBubleSort(arr1);
  optimizedBubleSort(arr2);
  optimizedBubleSort(arr3);
  optimizedBubleSort(arr4);
  optimizedBubleSort(arr5);
  expect(arr1).toEqual([2, 2]);
  expect(arr2).toEqual([1, 2]);
  expect(arr3).toEqual([1, 2, 3]);
  expect(arr4).toEqual([2, 3, 4, 5, 6]);
  expect(arr5).toEqual([-11, -10, 0, 1]);
});
