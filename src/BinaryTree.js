/**
 * Drzewa binarne przydają się gdy dodaje się dużo randomowych danych.
 * Najczęście gdy mówi się o drzewie binarnym ma na myśli się Binary Search Tree, chociaż istnieje wiele implementacji.
 * Mają największą efektywność gdy są zbalansowane. Wtedy możemy oczekiwać złożoności O(log N)
 * Sprawiają że szybko się szuka i dodaje dane.
 * Każdy element z lewej strony jest mniejszy od każdego elementu z prawej strony.
 * każdy element powinien mieć unikalną wartość
 */

class Node {
    constructor(value, name) {
        this.value = value;
        this.name = name;
        this.left = null;
        this.right = null;
    }

    insert(value, name) {
        if (value > this.value) {
            if (this.right === null) {
                this.right = new Node(value, name);
            } else {
                this.right.insert(value);
            }
        } else {
            if (this.left === null) {
                this.left = new Node(value, name);
            } else {
                this.left.insert(value);
            }
        }
    }

    contains(value) {
        if (this.value === value) {
            return true;
        }

        if (value > this.value) {
            return this.right === null ? false : this.right.contains(value);
        } else {
            return this.left === null ? false : this.left.contains(value);
        }
    }

    printInOrder() { // left then self then right
        if (this.left !== null) {
            this.left.printInOrder();
        }
        console.log(this.value);
        if (this.right !== null) {
            this.right.printInOrder();
        }
    }

    printInPreorder() { // self then left then right
        console.log(this.value);
        if (this.left !== null) {
            this.left.printInPreorder();
        }
        if (this.right !== null) {
            this.right.printInPreorder();
        }
    }

    printInPostOrder() { // left then right then self
        if (this.left !== null) {
            this.left.printInPreorder();
        }
        if (this.right !== null) {
            this.right.printInPreorder();
        }
        console.log(this.value);
    }
}

const tree = new Node(50, "boss");
tree.insert(25, "vice press");
tree.insert(15, "office manager");
tree.insert(30, "secretary");
tree.insert(75, "sales manager");
tree.insert(85, "salesman 1");

console.log('PRINT IN ORDER');
tree.printInOrder();
console.log('PRINT IN PRE_ORDER');
tree.printInPreorder();
console.log('PRINT IN POST_ORDER');
tree.printInPostOrder();
