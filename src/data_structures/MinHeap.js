/**
 * Heap przechowuje elementy i dzieci w tablicy. Wyróżniamy min i max heap. Różnią się tym jak sortują elementy.
 * Przydaje się przy szybkim znajdywaniu max i min elementów oraz szybkim wstawianiu.
 * Oblicza gdzie znajdują się dzieci za pomocą wzorów.
 * Przy dodawaniu dodajemy element do końca listy i przesówamy go w górę do odpowiedniego miejsca.
 * Przy usuwaniu ostatni element trafia na pierwsze miejsce i przesuwamy elementy w dół by go posortować
 *
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    addElement(element) {
        this.heap.push(element);
    }

    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }

    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
    }

    getParentIndex(childIndex) {
        return (childIndex - 1) / 2;
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.size;
    }

    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.size;
    }

    hasParent(index) {
        return this.getParentIndex(index) < this.size;
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    swapItems(indexOne, indexTwo) {
        const indexOneTemp = this.heap[indexOne];
        this.heap[indexOne] = indexTwo;
        this.heap[indexTwo] = indexOneTemp;
    }

    peek() {
        return this.heap[0];
    }

    poll() {
        if (this.size === 0) {
            return;
        }

        const firstItem = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heapifyDown();
        return firstItem;
    }

    heapifyDown() {
        let i = 0;
        while (this.hasLeftChild(i)) {
            let smallerChildIndex = this.getLeftChildIndex(i);
            if (this.hasRightChild(i) && (this.rightChild(i) < this.leftChild(i))) {
                smallerChildIndex = this.getRightChildIndex(i);

                if (this.heap[i] < this.heap[smallerChildIndex]) {
                    break;
                } else {
                    this.swapItems(i, smallerChildIndex);
                    i = smallerChildIndex;
                }
            }
        }
    }

    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        const lastItem = this.heap[this.heap.length - 1];
        let i = this.heap.length;
        while (this.hasParent(i) && (this.parent(i) > this.heap[i])) {
            this.swapItems(this.getParentIndex(i), i);
            i = this.getParentIndex(i);
        }
    }

}


module.exports.MinHeap = MinHeap;
