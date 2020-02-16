/**
 * Heap przechowuje elementy i dzieci w tablicy. Pierwszy element jest największy.
 * Przydaje się przy szybkim znajdywaniu max elementów oraz szybkim wstawianiu.
 * Oblicza gdzie znajdują się dzieci za pomocą wzorów.
 * Przy dodawaniu dodajemy element do końca listy i przesówamy go w górę do odpowiedniego miejsca.
 * Przy usuwaniu ostatni element trafia na pierwsze miejsce i przesuwamy elementy w dół by go posortować
 *
 */

class MaxHeap {
  constructor() {
    this.array = [];
  }

  add(data) {
    if (data === undefined) {
      throw "data must be valid to add";
    }

    this.array.push(data);
    this.bubbleUp(this.array.length - 1, data);
  }

  bubbleUp(childIndex, childData) {
    if (childIndex > 0) {
      const parentIndex = this.getParentIndex(childIndex);
      const parentData = this.array[parentIndex];

      if (this.shouldSwap(childData, parentData)) {
        this.array[parentIndex] = childData;
        this.array[childIndex] = parentData;
        this.bubbleUp(parentIndex, childData);
      }
    }
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  removeHead() {
    const headNode = this.array[0];
    const tailNode = this.array.pop();

    this.array[0] = tailNode;
    this.bubbleDown(0, tailNode);

    return headNode;
  }

  shouldSwap(childData, parentData) {
    return childData > parentData;
  }

  bubbleDown(parentIndex, parentData) {
    if (parentIndex < this.array.length) {
      let targetIndex = parentIndex;
      let targetData = parentData;

      const leftChildIndex = this.getLeftChild(parentIndex);
      const rightChildIndex = this.getRightChild(parentIndex);

      if (leftChildIndex < this.array.length) {
        const leftChildData = this.array[leftChildIndex];

        if (this.shouldSwap(leftChildData, targetData)) {
          targetIndex = leftChildIndex;
          targetData = leftChildData;
        }
      }

      if (rightChildIndex < this.array.length) {
        const rightChildData = this.array[rightChildIndex];

        if (this.shouldSwap(rightChildData, targetData)) {
          targetIndex = rightChildIndex;
          targetData = rightChildData;
        }
      }

      if (targetIndex !== parentIndex) {
        this.array[parentIndex] = targetData;
        this.array[targetIndex] = parentData;
        this.bubbleDown(targetIndex, parentData);
      }
    }
  }

  getLeftChild(parentIndex) {
    return parentIndex * 2 + 1;
  }

  getRightChild(parentIndex) {
    return parentIndex * 2 + 2;
  }
}
