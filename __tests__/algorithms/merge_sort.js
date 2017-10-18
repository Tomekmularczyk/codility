const {mergeArrays, mergeSort} = require('../../src/algorithms/merge_sort');

it('merges sorted arrays correctly', () => {
    const targetArr1 = [8, 6, 3, 1, 7, 2, 9];
    const leftA1 = [3, 6, 8, 9];
    const rightA1 = [1, 2, 7];
    mergeArrays(targetArr1, leftA1, rightA1);

    expect(targetArr1).toEqual([1, 2, 3, 6, 7, 8, 9]);

    const targetArr2 = [8, 2];
    const leftA2 = [8];
    const rightA2 = [2];
    mergeArrays(targetArr2, leftA2, rightA2);

    expect(targetArr2).toEqual([2, 8]);
});

it('sorts correctly', () => {
    const targetArr1 = [8, 6, 3, 1, 7, 2, 9];
    const s = mergeSort(targetArr1);

    expect(s).toEqual([1, 2, 3, 6, 7, 8, 9]);
});
