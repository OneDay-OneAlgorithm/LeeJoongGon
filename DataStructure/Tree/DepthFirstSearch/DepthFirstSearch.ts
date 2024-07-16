import BinarySearchTree from '../BinarySearchTree/BinarySearchTree';
import Node from '../BinarySearchTree/Node';

const DepthFirstSearch = (tree: BinarySearchTree) => {
  const visited: Node[] = [];

  const traverse = (node: Node) => {
    visited.push(node);

    if (node.left) {
      traverse(node.left);
    }

    if (node.right) {
      traverse(node.right);
    }
  };

  if (tree.root) {
    traverse(tree.root);
  }

  return visited;
};

export default DepthFirstSearch;
