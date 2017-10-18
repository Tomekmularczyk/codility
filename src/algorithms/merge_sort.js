/**
 * Merge sort polega na dzieleniu tablicy na pół, aż zostanie jeden element. Po tym jak zostaną podzielone,
 * merguje się się je po kolei "w górę" z zachowaniem kolejności.
 */

/**
 * Ta część mergująca zakłada że lewa tablica i prawa jest posortowana, i przez porównywanie elementów mergują się już od najmniejszego do najwiekszego
 */
function mergeArrays(arr, leftArray, rightArray) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] <= rightArray[j]) {
            arr[k] = leftArray[i];
            i++;
        } else {
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }
    for (; i < leftArray.length; i++, k++) {
        arr[k] = leftArray[i];
    }
    for (; j < rightArray.length; j++, k++) {
        arr[k] = leftArray[j];
    }
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const middle = Math.round(arr.length / 2);
    const leftArr = mergeSort(arr.slice(0, middle));
    const rightArr = mergeSort(arr.slice(middle));
    mergeArrays(arr, leftArr, rightArr);
    return arr;
}

module.exports.mergeArrays = mergeArrays;
module.exports.mergeSort = mergeSort;