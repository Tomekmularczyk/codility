/*
 * Interquartile to jest różnica pomiędzy q3 - q1
 * */

function getInterquartile(arr) {
  arr.sort((a, b) => a - b);
  const [leftPart, rightPart] = splitArray(arr);
  const leftMedian = findMedian(leftPart);
  const rightMedian = findMedian(rightPart);
  return rightMedian - leftMedian;
}

function findMedian(arr) {
  const middle = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[middle - 1] + arr[middle]) / 2;
  } else {
    return arr[middle];
  }
}

function splitArray(arr) {
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

function mapElements(X, F) {
  const result = [];
  for (let i = 0; i < X.length; i++) {
    for (let j = 0; j < F[i]; j++) {
      result.push(X[i]);
    }
  }

  return result;
}

module.exports.getInterquartile = getInterquartile;
