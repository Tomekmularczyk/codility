const sort = require('../src/task1').sort;
const solution = require('../src/task1').solution;

it('sorts correctly', () => {
    const case1 = [1, 4, 2, 0];
    const case2 = [-5, -3, -2];
    const case3 = [0, 5, 7, -1];

    expect(sort(case1)).toEqual([0, 1, 2, 4]);
    expect(sort(case2)).toEqual([-5, -3, -2]);
    expect(sort(case3)).toEqual([-1, 0, 5, 7]);
});

it('finds the lowest number', () => {
    const case1 = [1, 4, 2, 0];
    const case2 = [-5, -3, -2];
    const case3 = [0, 5, 7, -1];
    const case4 = [1, 3, 6, 4, 1, 2];
    const case5 = [99999, 100000];


    expect(solution(case1)).toEqual(3);
    expect(solution(case2)).toEqual(1);
    expect(solution(case3)).toEqual(1);
    expect(solution(case4)).toEqual(5);
    expect(solution(case5)).toEqual(99998);
});