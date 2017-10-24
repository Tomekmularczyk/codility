const {weightedMean} = require('../../src/statistics/weighted_mean');

it('correctly counts weighted mean', () => {
    const elems1 = [10, 40, 30, 50, 20];
    const weights1 = [1, 2, 3, 4, 5];

    expect(weightedMean(elems1, weights1)).toBeCloseTo(32.0, 1);
});
