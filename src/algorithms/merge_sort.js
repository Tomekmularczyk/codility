/**
 * Merge sort polega na dzieleniu tablicy na pół, aż zostanie jeden element. Po tym jak zostaną podzielone,
 * merguje się się je po kolei "w górę" z zachowaniem kolejności.
 */

/**
 * Ta część mergująca zakłada że lewa tablica i prawa jest posortowana, i przez porównywanie elementów mergują się już od najmniejszego do najwiekszego
 */
function mergeArrays(leftArray, rightArray) {
  const arr = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      arr[k] = leftArray[i++];
    } else {
      arr[k] = rightArray[j++];
    }
    k++;
  }

  return arr.concat(leftArray.slice(i)).concat(rightArray.slice(j)); // add whats left (only one array may have items)
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.round(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);
  return mergeArrays(mergeSort(leftArr), mergeSort(rightArr));
}

module.exports.mergeArrays = mergeArrays;
module.exports.mergeSort = mergeSort;
