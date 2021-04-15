import AVLTree from "./avl-tree.js";

var tree = new AVLTree();

var list = [10, 8, 5, 6, 1, 3, 11, 13, 15, 2, 100, 60, 4];
// list.forEach((i) => {
//     // var node = tree.insertNode(tree.root, i)
//     // console.log(node)
//     tree.insert(i)
// })
// console.log(tree.inOrderTraverse(console.log))
// console.log(tree)
// console.log(tree.getRoot())
// tree.inOrderTraverse(console.log);

tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(3)
tree.insert(4)
tree.insert(5)
// tree.insert(5)

// console.log(tree.root)
// console.log(tree.insertNode(tree.root, 21))