function countStandardDeviation(arr) {
  const mean = countMean(arr);
  const sum = arr.reduce((prev, curr) => prev + Math.pow(curr - mean, 2), 0);
  const standardDeviation = Math.sqrt(sum / arr.length).toFixed(1);
  return parseFloat(standardDeviation);
}

function countMean(arr) {
  const sum = arr.reduce((prev, curr) => prev + curr, 0);
  return sum / arr.length;
}

module.exports.countStandardDeviation = countStandardDeviation;
