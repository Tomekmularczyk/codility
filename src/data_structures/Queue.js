/**
 * Queue is a data structure based on FIFO
 *
 * It is important to note that in JavaScript we can easly implement Stack with arrays and `shift` and `unshift` methods
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.head && this.size === 0;
  }

  peek() {
    if (this.head) {
      return this.head.data;
    }

    return null;
  }

  // -- add tail
  add(data) {
    const node = new Node(data);
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    if (!this.head) {
      this.head = node;
    }
    this.size += 1;
  }

  remove() {
    if (!this.head) {
      this.tail = null;
      return null;
    }
    const data = this.head.data;
    this.head = this.head.next;
    this.size -= 1;
    return data;
  }
}

module.exports.Queue = Queue;
