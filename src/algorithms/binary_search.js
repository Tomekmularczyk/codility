/**
 * Tablica musi być posortowana.
 */

function binarySearch(arr, x, left, right) {
  if (left > right) {
    return false;
  }

  const middle = Math.floor(left + (right - left) / 2);
  if (arr[middle] === x) {
    return true;
  } else if (x < arr[middle]) {
    return binarySearch(arr, x, left, middle - 1);
  } else {
    return binarySearch(arr, x, middle + 1, right);
  }
}


module.exports.binarySearch = function (arr, x) {
  return binarySearch(arr, x, 0, arr.length);
};
