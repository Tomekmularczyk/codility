const Stack = require('../src/Stack').Stack;

const emptyStack = new Stack();
let stack;
beforeAll(() => {
    stack = new Stack();
    stack.push('dzis');
    stack.push('w');
    stack.push('klubie');
    stack.push('bedzie');
    stack.push('bang');
});

it('checks if its empty', () => {
    expect(emptyStack.isEmpty()).toBe(true);
    expect(stack.isEmpty()).toBe(false);
});

it('returning head properly', () => {
    expect(emptyStack.peek()).toBeNull();
    expect(stack.peek()).toEqual('bang');
});

it('pops elements properly', () => {
    expect(emptyStack.pop()).toBeNull();
    expect(stack.pop()).toEqual('bang');
    expect(stack.pop()).toEqual('bedzie');
    expect(stack.pop()).toEqual('klubie');
    expect(stack.pop()).toEqual('w');
    expect(stack.pop()).toEqual('dzis');
    expect(stack.pop()).toBeNull();
});

it('tracks stack size correctly', () => {
    expect(emptyStack.size).toEqual(0);
    emptyStack.pop();
    expect(emptyStack.size).toEqual(0);
    emptyStack.push('1');
    emptyStack.push('1');
    expect(emptyStack.size).toEqual(2);
    emptyStack.pop();
    expect(emptyStack.size).toEqual(1);
});

