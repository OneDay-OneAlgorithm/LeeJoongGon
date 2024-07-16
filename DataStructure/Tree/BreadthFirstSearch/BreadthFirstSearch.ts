import BinarySearchTree from '../BinarySearchTree/BinarySearchTree';
import Node from '../BinarySearchTree/Node';

const BreadthFirstSearch = (tree: BinarySearchTree) => {
  const queue: Node[] = [];
  const visited: Node[] = [];

  if (tree.root) {
    queue.push(tree.root);
  }

  while (queue.length > 0) {
    const shiftedNode = queue.shift()!;
    visited.push(shiftedNode);

    if (shiftedNode?.left) {
      queue.push(shiftedNode.left);
    }

    if (shiftedNode?.right) {
      queue.push(shiftedNode.right);
    }
  }

  return visited;
};

export default BreadthFirstSearch;
