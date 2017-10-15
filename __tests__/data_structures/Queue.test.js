const Queue = require('../../src/data_structures/Queue').Queue;

const emptyQueue = new Queue();
let queue;
beforeAll(() => {
    queue = new Queue();
    queue.add('dzis');
    queue.add('w');
    queue.add('klubie');
    queue.add('bedzie');
    queue.add('bang');
});

it('checks if its empty', () => {
    expect(emptyQueue.isEmpty()).toBe(true);
    expect(queue.isEmpty()).toBe(false);
});

it('returning head properly', () => {
    expect(emptyQueue.peek()).toBeNull();
    expect(queue.peek()).toEqual('dzis');
});

it('removes elements properly', () => {
    expect(emptyQueue.remove()).toBeNull();
    expect(queue.remove()).toEqual('dzis');
    expect(queue.remove()).toEqual('w');
    expect(queue.remove()).toEqual('klubie');
    expect(queue.remove()).toEqual('bedzie');
    expect(queue.remove()).toEqual('bang');
    expect(queue.remove()).toBeNull();
});

it('tracks queue size correctly', () => {
    expect(emptyQueue.size).toEqual(0);
    emptyQueue.remove();
    expect(emptyQueue.size).toEqual(0);
    emptyQueue.add('1');
    emptyQueue.add('1');
    expect(emptyQueue.size).toEqual(2);
    emptyQueue.remove();
    expect(emptyQueue.size).toEqual(1);
});

