const MinHeap = require("../../src/data_structures/MinHeap").MinHeap;

const emptyHeap = new MinHeap();
const heap = new MinHeap();
beforeAll(() => {
  heap.add(1);
  heap.add(3);
  heap.add(2);
  heap.add(4);
  heap.add(6);
  heap.add(5);
});

it("finds position of elements", () => {
  expect(heap.getLeftChild(0)).toEqual(1);
  expect(heap.getRightChild(0)).toEqual(2);
  expect(heap.getLeftChild(1)).toEqual(3);
  expect(heap.getRightChild(1)).toEqual(4);
  expect(heap.getLeftChild(2)).toEqual(5);
  expect(heap.getRightChild(2)).toEqual(6);
});

it("polls element", () => {
  heap.removeHead();
  expect(heap.getLeftChild(0)).toEqual(1);
  expect(heap.getRightChild(0)).toEqual(2);
  expect(heap.getLeftChild(1)).toEqual(3);
  expect(heap.getRightChild(1)).toEqual(4);
  expect(heap.getLeftChild(2)).toEqual(5);
  expect(heap.getRightChild(2)).toEqual(6);
});
