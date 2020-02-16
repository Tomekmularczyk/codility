const BinarySearchTree = require("../BinarySearchTree").BinarySearchTree;

let emptyTree;
let binaryTree;
beforeAll(() => {
  emptyTree = new BinarySearchTree();
  binaryTree = new BinarySearchTree();

  binaryTree.insert(7, "Kasia");
  binaryTree.insert(1, "Basia");
  binaryTree.insert(0, "Stasia");
  binaryTree.insert(3, "Joasia");
  binaryTree.insert(2, "Krysia");
  binaryTree.insert(5, "Cesia");
  binaryTree.insert(4, "Jolasia");
  binaryTree.insert(6, "Janek");
  binaryTree.insert(9, "Kazek");
  binaryTree.insert(8, "Staszek");
  binaryTree.insert(10, "Jędrzej");
});

it("returns the node", () => {
  expect(emptyTree.getNode(-1)).toBeUndefined();
  expect(emptyTree.getNode(100)).toBeUndefined();
  expect(binaryTree.getNode(10)).toHaveProperty("data", "Jędrzej");
  expect(binaryTree.getNode(1)).toHaveProperty("data", "Basia");
  expect(binaryTree.getNode(6)).toHaveProperty("data", "Janek");
});

it("adds the new nodes in correct places", () => {
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

it("return nodes in order", () => {
  const nodesInOrder = binaryTree.getNodesInOrder();
  expect(nodesInOrder.map(item => item.value)).toEqual([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ]);
});

it("return nodes in pre-order", () => {
  const nodesInOrder = binaryTree.getNodesInPreOrder();
  expect(nodesInOrder.map(item => item.value)).toEqual([
    7,
    1,
    0,
    3,
    2,
    5,
    4,
    6,
    9,
    8,
    10
  ]);
});

it("return nodes in post-order", () => {
  const nodesInOrder = binaryTree.getNodesInPostOrder();
  expect(nodesInOrder.map(item => item.value)).toEqual([
    0,
    2,
    4,
    6,
    5,
    3,
    1,
    8,
    10,
    9,
    7
  ]);
});

it("returns nodes in level-order-traversal", () => {
  const tree = new BinarySearchTree();
  tree.insert(3);
  tree.insert(5);
  tree.insert(4);
  tree.insert(7);
  tree.insert(2);
  tree.insert(1);
  expect(tree.getNodesInLevelOrderTraversal()).toEqual([3, 2, 5, 1, 4, 7]);
});

it("returns tree height", () => {
  expect(emptyTree.getHeight()).toBe(0);
  expect(binaryTree.getHeight()).toBe(4);
});
