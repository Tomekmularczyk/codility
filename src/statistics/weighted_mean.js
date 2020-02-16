function weightedMean(elements, weights) {
  let weightedSum = 0;
  for (let i = 0; i < elements.length; i++) {
    weightedSum += elements[i] * weights[i];
  }
  const weightsTotal = weights.reduce((prev, curr) => prev + curr, 0);

  return parseToOneDecimalPoint(weightedSum / weightsTotal);
}

function parseToOneDecimalPoint(value) {
  const parsed = value.toFixed(1);
  return parseFloat(parsed);
}

module.exports.weightedMean = weightedMean;
