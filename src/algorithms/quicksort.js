/**
 * Quicksort stosuje regułe dziel i zwyciężaj.
 * Po każdym przejsciu loopa,
 * @param arr
 * @param index1
 * @param index2
 */

function swapElements(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function partition(arr, start, end) {
    const pivot = arr[end];
    let partitionIndex = start;
    for(let i = start; i < end; i++) {
        if (arr[i] <= pivot) {
            swapElements(arr, i, partitionIndex);
            partitionIndex++;
        }
    }

    swapElements(arr, partitionIndex, end);
    return partitionIndex;
}

function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }

    const partitionIndex = partition(arr, start, end);
    quickSort(arr, start, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, end);
}


module.exports.quickSort = function (arr) {
    quickSort(arr, 0, arr.length - 1);
};