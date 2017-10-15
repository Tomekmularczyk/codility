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

it('adds the new nodes in correct places', () => {
    const root = binaryTree.getRoot();
    expect(root.value).toEqual(10);
    expect(root.leftNode.value).toEqual(1);
    expect(root.leftNode.rightNode.value).toEqual(7);
    expect(root.leftNode.rightNode.leftNode.value).toEqual(2);

    expect(root.rightNode.value).toEqual(12);
    expect(root.rightNode.rightNode.value).toEqual(16);
});
