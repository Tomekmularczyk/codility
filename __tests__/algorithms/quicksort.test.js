const {quickSort} = require('../../src/algorithms/quicksort');

const emptyArray = [];
let unsortedArray1;
let unsortedArray2;
let unsortedArray3;
let unsortedArray4;
let unsortedArray5;
beforeAll(() => {
    unsortedArray1 = [17, 41, 5, 18, 7, 9, 1, 2, 0];
    unsortedArray2 = [1, 2];
    unsortedArray3 = [-3];
    unsortedArray4 = [0, 0, 0];
    unsortedArray5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
});

it("doesn't fail on empty array.", () => {
    quickSort(emptyArray);
    expect(emptyArray).toEqual([]);
});

it("does sort an array", () => {
    quickSort(unsortedArray1);
    quickSort(unsortedArray2);
    quickSort(unsortedArray3);
    quickSort(unsortedArray4);

    expect(unsortedArray1).toEqual([0, 1, 2, 5, 7, 9, 17, 18, 41]);
    expect(unsortedArray2).toEqual([1, 2]);
    expect(unsortedArray3).toEqual([-3]);
    expect(unsortedArray4).toEqual([0, 0, 0]);
    expect(unsortedArray5).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});


