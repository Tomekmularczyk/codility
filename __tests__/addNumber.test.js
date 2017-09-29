const addNumber = require('../src/addNumbers');

it('adds numbers', () => {
    const sum = addNumber(2, 6);

    expect(sum).toBe(8);
});

it('throws error when not numbers', () => {
    expect(() => addNumber(2, "dsfsd")).toThrow();
});
