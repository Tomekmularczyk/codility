/**
 * Stack is a data structure based on LIFO
 *
 * It is important to note that in JavaScript we can easly implement Stack with arrays and `push` and `pop` methods
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.top && this.size === 0;
  }

  peek() {
    if (this.top) {
      return this.top.data;
    }

    return null;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    const data = this.top.data;
    this.top = this.top.next;
    this.size -= 1;
    return data;
  }
}

module.exports.Stack = Stack;
