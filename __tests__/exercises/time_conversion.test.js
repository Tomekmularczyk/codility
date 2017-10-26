const { timeConversion } = require('../../src/exercises/time_conversion');

it('properly converts', () => {
    const time1 = '01:25:00AM';
    const time2 = '10:25:00PM';
    const time3 = '12:25:00PM';
    const time4 = '12:15:00AM';
    const time5 = '07:05:45PM';

    expect(timeConversion(time1)).toBe('01:25:00');
    expect(timeConversion(time2)).toBe('22:25:00');
    expect(timeConversion(time3)).toBe('12:25:00');
    expect(timeConversion(time4)).toBe('00:15:00');
    expect(timeConversion(time5)).toBe('19:05:45');
});
