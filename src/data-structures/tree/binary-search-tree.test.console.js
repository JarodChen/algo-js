import BinarySearchTree from "./binary-search-tree.js";

var bst = new BinarySearchTree();
bst.insert(10);
var root = bst.getRoot();
console.log(root.toString())

var list = [10, 8, 5, 6, 1, 3, 11, 13, 15, 2, 100, 60, 4];
list.forEach((i) => {
    bst.insert(i);
})


bst.inOrderTraverse(console.log);
console.log('======================================');
bst.preOrderTraverse(console.log);
console.log('======================================');
bst.postOrderTraverse(console.log);
console.log('======================================');

console.log(bst.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
console.log(bst.search(8) ? 'Key 8 found.' : 'Key 8 not found.');

bst.remove(100)

console.log(`bst.min()：${bst.min()}`);
console.log(`bst.max()：${bst.max()}`);