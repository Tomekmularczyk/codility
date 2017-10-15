/**
 * BinarySearchTree jest to struktura przypominająca drzewo, gdzie każda gałązka może mieć (ale nie musi) tylko dwie gałęzie.
 *                10
 *         8              12
 *      6     9       11      14
 *    2   7                13
 *
 * Nie może być duplikatowych wartości.
 * Jeżeli nowa gałązka jest mniejsza, trafia na lewo, jeżeli większa - trafia na prawo. Przez to można stwierdzić, że
 * każda gałązka z lewej jest mniejsza od każdej gałązki z prawej.
 * Dzięki takiemu wstawianiu elementów, możemy bardzo szybko wstawiać i przeszukiwać drzewa binarne - O(log N).
 * Wszystko pod warunkiem, że dane są losowe i drzewo jest zbalansowane tzn. jest podobna ilość gałązek po lewej jak i po prawej stronie,
 * w przeciwnym wypadku korzyści nie są lepsze od zwykłej listy.
 */

class Node {
    constructor(value, data) {
        this.value = value;
        this.data = data;
        this.leftNode = null;
        this.rightNode = null;
    }

    addNode(value, data) {
        if (value < this.value) {
            if (!this.leftNode) {
                this.leftNode = new Node(value, data);
                return;
            }

            this.leftNode.addNode(value, data);
        } else {
            if (!this.rightNode) {
                this.rightNode = new Node(value, data);
                return;
            }

            this.rightNode.addNode(value, data);
        }
    }

    getNode(value) {
        if (this.value === value) {
            return this;
        }

        if (value < this.value) {
            return this.leftNode.getNode(value);
        } else {
            return this.rightNode.getNode(value);
        }
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    };

    addNode(value, data) {
        if (!this.root) {
            this.root = new Node(value, data);
            return;
        }

        this.root.addNode(value, data);
    }

    getNode(value) {
        if (!this.root) {
            return;
        }

        return this.root.getNode(value);
    }

}

module.exports.BinarySearchTree = BinarySearchTree;
