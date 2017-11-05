const { selectionSort } = require('../../src/algorithms/selection_sort');

it('sorts elements', () => {
    const arr1 = [];
    const arr2 = [2];
    const arr3 = [2, 3];
    const arr4 = [5,3,1,0];
    expect(selectionSort(arr1)).toEqual([]);
    expect(selectionSort(arr2)).toEqual([2]);
    expect(selectionSort(arr3)).toEqual([2,3]);
    expect(selectionSort(arr4)).toEqual([0,1,3,5]);
})
