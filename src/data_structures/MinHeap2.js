class MinHeap {
  constructor(initial = []) {
    this.heap = initial;
  }

  // helper methods
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  hasLeftChild(parentIndex) {
    return this.heap[this.getLeftChildIndex(parentIndex)] !== undefined;
  }
  hasRightChild(parentIndex) {
    return this.heap[this.getRightChildIndex(parentIndex)] !== undefined;
  }
  hasParent(childIndex) {
    return this.heap[this.getParentIndex(childIndex)] !== undefined;
  }
  leftChild(parentIndex) {
    return this.heap[this.getLeftChildIndex(parentIndex)];
  }
  rightChild(parentIndex) {
    return this.heap[this.getRightChildIndex(parentIndex)];
  }
  parent(childIndex) {
    return this.heap[this.getParentIndex(childIndex)];
  }
  swap(indexOne, indexTwo) {
    [this.heap[indexTwo], this.heap[indexOne]] = [
      this.heap[indexOne],
      this.heap[indexTwo]
    ];
  }
  // --------------

  peek() {
    return this.heap[0];
  }

  add(value) {
    if (typeof value === "undefined") {
      throw new Error("value cannot be empty");
    }

    this.heap.push(value);
    this.heapifyUp();
  }

  poll() {
    const last = this.heap.pop();
    const first = this.heap.shift();

    this.heap.unshift(last);
    this.heapifyDown();

    return first;
  }

  removeAtIndex(index) {
    /**
    1, Delete a node from the array 
       (this creates a "hole" and the tree is no longer "complete")

    2. Replace the deletion node
       with the "fartest right node" on the lowest level
       of the Binary Tree
       (This step makes the tree into a "complete binary tree")

    3. Heapify (fix the heap):
        if ( value in replacement node < its parent node )
          Filter the replacement node UP the binary tree
        else
          Filter the replacement node DOWN the binary tree
            - replace with smaler children
     */

    if (this.heap[index] === undefined) {
      return;
    }
    this.heap[index] = this.heap.pop();

    if (this.hasParent(index) && this.heap[index] < this.parent(index)) {
      this.swap(index, this.getParentIndex(index));
    } else {
      if (!this.hasLeftChild(index)) {
        return;
      }

      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[smallerChildIndex] < this.heap[index]) {
        this.swap(smallerChildIndex, index);
      } else {
        return;
      }
    }
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index)) {
      const parent = this.parent(index);
      if (parent > this.heap[index]) {
        const parentIndex = this.getParentIndex(index);
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex;
      if (!this.hasRightChild(index)) {
        smallerChildIndex = this.getLeftChildIndex(index);
      } else {
        if (this.rightChild(index) > this.leftChild(index)) {
          smallerChildIndex = this.getLeftChildIndex(index);
        } else {
          smallerChildIndex = this.getRightChildIndex(index);
        }
      }

      if (this.heap[index] > this.heap[smallerChildIndex]) {
        this.swap(index, smallerChildIndex);
      } else {
        break;
      }
      index = smallerChildIndex;
    }
  }

  validateFrom(index) {
    /**
     * check if element exists
     *   FALSE - return it's valid
     *   TRUE - check it's left and right child are greater than parent
     *         YES - repeat process
     *         NO - return it's invalid
     */
    if (!this.heap[index]) {
      return true;
    }

    let isLeftValid = true;
    if (this.hasLeftChild(index)) {
      if (this.leftChild(index) > this.heap[index]) {
        isLeftValid = this.validateFrom(this.getLeftChildIndex(index));
      } else {
        isLeftValid = false;
      }
    } else {
      isLeftValid = true;
    }

    let isRightValid = true;
    if (this.hasRightChild(index)) {
      if (this.rightChild(index) > this.heap[index]) {
        isRightValid = this.validateFrom(this.getRightChildIndex(index));
      } else {
        isRightValid = false;
      }
    } else {
      isRightValid = true;
    }

    return isLeftValid && isRightValid;
  }

  validate() {
    return this.validateFrom(0);
  }
}

function main() {
  const minHeap = new MinHeap([10, 15, 20, 17]);
  // minHeap.add(10);
  // minHeap.add(8);
  // minHeap.add(9);
  minHeap.removeAtIndex(1);
  console.log(minHeap.validate());
  console.log(minHeap.heap);
}

main();
