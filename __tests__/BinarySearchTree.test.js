const BinarySearchTree = require('../src/BinarySearchTree').BinarySearchTree;

let emptyTree;
let binaryTree;
beforeAll(() => {
    emptyTree = new BinarySearchTree();
    binaryTree = new BinarySearchTree();

    binaryTree.addNode(7, "Kasia");
    binaryTree.addNode(1, "Basia");
    binaryTree.addNode(0, "Stasia");
    binaryTree.addNode(3, "Joasia");
    binaryTree.addNode(2, "Krysia");
    binaryTree.addNode(5, "Cesia");
    binaryTree.addNode(4, "Jolasia");
    binaryTree.addNode(6, "Janek");
    binaryTree.addNode(9, "Kazek");
    binaryTree.addNode(8, "Staszek");
    binaryTree.addNode(10, "Jędrzej");
});

it('returns the node', () => {
    expect(emptyTree.getNode(-1)).toBeUndefined();
    expect(emptyTree.getNode(100)).toBeUndefined();
    expect(binaryTree.getNode(10)).toHaveProperty('data', "Jędrzej");
    expect(binaryTree.getNode(1)).toHaveProperty('data', "Basia");
    expect(binaryTree.getNode(6)).toHaveProperty('data', "Janek");
});

it('adds the new nodes in correct places', () => {
    const root = binaryTree.getRoot();
    expect(root.value).toEqual(7);
    expect(root.leftNode.value).toEqual(1);
    expect(root.leftNode.leftNode.value).toEqual(0);
    expect(root.leftNode.rightNode.value).toEqual(3);
    expect(root.leftNode.rightNode.leftNode.value).toEqual(2);
    expect(root.leftNode.rightNode.rightNode.value).toEqual(5);
    expect(root.leftNode.rightNode.rightNode.leftNode.value).toEqual(4);
    expect(root.leftNode.rightNode.rightNode.rightNode.value).toEqual(6);

    expect(root.rightNode.value).toEqual(9);
    expect(root.rightNode.leftNode.value).toEqual(8);
    expect(root.rightNode.rightNode.value).toEqual(10);
});

it('return nodes in order', () => {
    const nodesInOrder = binaryTree.getNodesInOrder();
    expect(nodesInOrder.map(item => item.value)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it('return nodes in pre-order', () => {
    const nodesInOrder = binaryTree.getNodesInPreOrder();
    expect(nodesInOrder.map(item => item.value)).toEqual([7, 1, 0, 3, 2, 5, 4, 6, 9, 8, 10]);
});

it('return nodes in post-order', () => {
    const nodesInOrder = binaryTree.getNodesInPostOrder();
    expect(nodesInOrder.map(item => item.value)).toEqual([0, 2, 4, 6, 5, 3, 1, 8, 10, 9, 7]);
});
