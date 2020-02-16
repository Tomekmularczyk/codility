const { findMean, findMedian, findMode } = require("../mean_median_mode");

const emptyArr = [];
let arr1;
let arr2;
beforeAll(() => {
  arr1 = [64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060];
  arr2 = [4, 4, 4, 3, 3, 3, 2, 1];
});

it("finds mean", () => {
  const meanArr1 = findMean(arr1);
  const meanEmptyArr = findMean(emptyArr);

  expect(meanArr1).toBeCloseTo(43900.6, 1);
  expect(meanEmptyArr).toBeFalsy();
});

it("finds median", () => {
  const medianArr1 = findMedian(arr1);
  const medianEmptyArr = findMedian(emptyArr);

  expect(medianArr1).toBeCloseTo(44627.5, 1);
  expect(medianEmptyArr).toBeFalsy();
});

it("finds mode", () => {
  const modeArr1 = findMode(arr1);
  const modeEmptyArr = findMode(emptyArr);
  const medianArr2 = findMode(arr2);

  expect(modeArr1).toEqual(4978);
  expect(medianArr2).toEqual(3);
  expect(modeEmptyArr).toBeFalsy();
});
