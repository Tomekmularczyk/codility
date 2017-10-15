const MinHeap = require('../../src/data_structures/MinHeap').MinHeap;

const emptyHeap = new MinHeap();
const heap = new MinHeap();
beforeAll(() => {
    heap.addElement(1);
    heap.addElement(2);
    heap.addElement(3);
    heap.addElement(4);

});

it('tracks size of heap', () => {
    expect(emptyHeap.size()).toEqual(0);
    expect(heap.size()).toEqual(4);
});

it('finds position of elements', () => {
    expect(heap.getLeftChildIndex(0)).toEqual(1);
    expect(heap.getRightChildIndex(0)).toEqual(2);
    expect(heap.getLeftChildIndex(1)).toEqual(3);
    expect(heap.getRightChildIndex(1)).toEqual(4);
    expect(heap.getLeftChildIndex(2)).toEqual(5);
    expect(heap.getRightChildIndex(2)).toEqual(6);
});
