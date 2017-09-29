import addNumber from '../src/addNumbers';


it('adds numbers', () => {
    const sum = addNumber(2, 6);

    expect(sum).toBe(8);
});
