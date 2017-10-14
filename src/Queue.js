/**
 * Queue is a data structure based on FIFO
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
    }

    isEmpty() {
        return !this.head;
    }

    peek() {
        if(this.head) {
            return this.head.data;
        }

        return null;
    }

    // -- add tail
    add(data) {
        const node = new Node(data);
        if(this.tail){
            this.tail.next = node;
        }
        this.tail = node;
        if (!this.head) {
            this.head = node;
        }
    }

    remove() {
        if (!this.head) {
            this.tail = null;
            return null;
        }
        const data = this.head.data;
        this.head = this.head.next;
        return data;
    }
}

function test() {
    const que = new Queue();
    que.add('dzis');
    que.add('w');
    que.add('klubie');
    que.add('bedzie');
    que.add('bang');

    console.log(que.remove());
    console.log(que.remove());
    console.log(que.remove());
    console.log(que.remove());
    console.log(que.remove());
    console.log(que.remove());
    console.log(que.remove());
}

test();