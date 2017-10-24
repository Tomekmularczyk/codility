const { getInterquartile } = require('../../src/statistics/interquartile');

it('counts interquartile', () => {
  const arr = [6, 6, 6, 6, 6, 8, 8, 8, 10, 10, 12, 12, 12, 12, 16, 16, 16, 16, 16, 20];
  expect(getInterquartile(arr)).toBeCloseTo(9.0, 1);
});