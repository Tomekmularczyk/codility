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
 *
 * Usuwanie z BST ma pewne założenia.
 * Jeżeli liść nie ma dzieci, to wystarczy że usuniemy jego referencję w rodzicu.
 * Jeżeli liść ma tylko lewą, albo prawdą głąź, wystarczy, że zalinkujemy rodzica z tą lewą albo prawą gałązką.
 * ... it's fucked up.
 */

class Node {
  constructor(value, data) {
    this.value = value;
    this.data = data;
    this.leftNode = null;
    this.rightNode = null;
  }

  insert(value, data) {
    if (value < this.value) {
      if (!this.leftNode) {
        this.leftNode = new Node(value, data);
        return;
      }

      this.leftNode.insert(value, data);
    } else {
      if (!this.rightNode) {
        this.rightNode = new Node(value, data);
        return;
      }

      this.rightNode.insert(value, data);
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

  /**
   * Wysokość to liść który jest najniżej położony
   */
  getHeight(root) {
    if (!root) {
      return -1;
    }
    return (
      1 +
      Math.max(this.getHeight(root.leftNode), this.getHeight(root.rightNode))
    );
  }

  /**
   * Od najmniejszego do największego - Left -> Root -> Right
   */
  getNodesInOrder(arr) {
    if (this.leftNode) {
      this.leftNode.getNodesInOrder(arr);
    }
    arr.push(this);
    if (this.rightNode) {
      this.rightNode.getNodesInOrder(arr);
    }

    return arr;
  }

  /**
   * Od lewej do prawej od góry do dołu - Root -> Left -> Right
   */
  getNodesInPreOrder(arr) {
    arr.push(this);

    if (this.leftNode) {
      this.leftNode.getNodesInPreOrder(arr);
    }
    if (this.rightNode) {
      this.rightNode.getNodesInPreOrder(arr);
    }

    return arr;
  }

  /**
   * Od lewej do prawej i od dołu do góry. Left -> Right -> Root
   */
  getNodesInPostOrder(arr) {
    if (this.leftNode) {
      this.leftNode.getNodesInPostOrder(arr);
    }
    if (this.rightNode) {
      this.rightNode.getNodesInPostOrder(arr);
    }
    arr.push(this);

    return arr;
  }

  /* zig-zag traversal */
  getNodesInLevelOrderTraversal() {
    const queue = [this];
    const result = [];

    while (queue.length) {
      const current = queue.shift();
      result.push(current.value);

      if (current.leftNode) {
        queue.push(current.leftNode);
      }

      if (current.rightNode) {
        queue.push(current.rightNode);
      }
    }

    return result;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value, data) {
    if (!this.root) {
      this.root = new Node(value, data);
      return;
    }

    this.root.insert(value, data);
  }

  getNode(value) {
    if (!this.root) {
      return;
    }

    return this.root.getNode(value);
  }

  getRoot() {
    return this.root;
  }

  getHeight() {
    if (!this.root) {
      return 0;
    }

    return this.root.getHeight(this.root);
  }

  getNodesInOrder() {
    return this.root.getNodesInOrder([]);
  }

  getNodesInPreOrder() {
    return this.root.getNodesInPreOrder([]);
  }

  getNodesInPostOrder() {
    return this.root.getNodesInPostOrder([]);
  }

  getNodesInLevelOrderTraversal() {
    return this.root.getNodesInLevelOrderTraversal();
  }
}

module.exports.BinarySearchTree = BinarySearchTree;
