const BinarySearchTree = require('../src/BinarySearchTree').BinarySearchTree;

let emptyTree;
let binaryTree;
beforeAll(() => {
    emptyTree = new BinarySearchTree();
    binaryTree = new BinarySearchTree();

    binaryTree.addNode(10, "Kasia");
    binaryTree.addNode(12, "Basia");
    binaryTree.addNode(16, "Stasia");
    binaryTree.addNode(1, "Joasia");
    binaryTree.addNode(7, "Krysia");
    binaryTree.addNode(2, "Jolasia");
});

it('returns the node', () => {
    expect(emptyTree.getNode(-1)).toBeUndefined();
    expect(emptyTree.getNode(100)).toBeUndefined();
    expect(binaryTree.getNode(10)).toHaveProperty('data', "Kasia");
    expect(binaryTree.getNode(1)).toHaveProperty('data', "Joasia");
});
