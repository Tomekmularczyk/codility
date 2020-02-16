/**
 * Quartiles are 3 points (medians) that split array into 4 equal pieces
 * **/

function findQuartiles(arr) {
  arr.sort((a, b) => a - b);
  const result = [findMedian(arr)]; // fill with q2

  const [leftPart, rightPart] = splitArrayOnTwoEqualHalfs(arr);
  result.unshift(findMedian(leftPart));
  result.push(findMedian(rightPart));

  return result;
}

function splitArrayOnTwoEqualHalfs(arr) {
  let leftPart;
  let rightPart;
  const middle = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    leftPart = arr.slice(0, middle);
    rightPart = arr.slice(middle);
  } else {
    leftPart = arr.slice(0, middle);
    rightPart = arr.slice(middle + 1);
  }

  return [leftPart, rightPart];
}

function findMedian(sortedArray) {
  const middle = Math.floor(sortedArray.length / 2);
  if (sortedArray.length % 2 === 0) {
    return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
  } else {
    return sortedArray[middle];
  }
}

module.exports.findQuartiles = findQuartiles;
