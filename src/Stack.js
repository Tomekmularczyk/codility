/**
 * Stack is a data structure based on LIFO
 */


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
    }

    isEmpty() {
        return !this.top;
    }

    peek() {
        if(this.top){
            return this.top.data;
        }

        return null;
    }

    push(data) {
        const node = new Node(data);
        node.next = this.top;
        this.top = node;
    }

    pop() {
        if(!this.top) {
            return null;
        }

        const data = this.top.data;
        this.top = this.top.next;
        return data;
    }
}

function test() {
    const stack = new Stack();
    stack.push('dzis');
    stack.push('w');
    stack.push('klubie');
    stack.push('bedzie');
    stack.push('bang');

    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
}

test();