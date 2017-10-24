const {countStandardDeviation} = require('../../src/statistics/standart_deviation');

it('counts standard devaition', () => {
    const arr = [10, 40, 30, 50, 20];
    expect(countStandardDeviation(arr)).toBeCloseTo(14.1, 1);
});
