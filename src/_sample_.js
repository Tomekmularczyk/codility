class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (!this.left) {
                this.left = new Node(value);
                return;
            }
            this.left.insert(value);
        } else {
            if (!this.right) {
                this.right = new Node(value);
                return;
            }
            this.right.insert(value);
        }
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }

        this.root.insert(value);
    }

    countZigZags() {
        
    }
}


(function () {
    console.log('------- binary search tree test -------');

    const tree = new BinarySearchTree();
    [10, 5, 20, 15, 18, 16, 17].forEach((value) => tree.insert(value));

    console.log(JSON.stringify(tree.root, null, '     '));

})();