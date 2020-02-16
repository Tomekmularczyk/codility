/**
 
selection sort działa tak, ze iteruje całą tablice, znajduje minimalny element
i zamienia go z pierwszym elementem

*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

module.exports.selectionSort = selectionSort;
