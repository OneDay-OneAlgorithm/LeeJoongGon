import Node from './Node';

class BinarySearchTree {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (newNode.value === currentNode.value) {
        return null;
      }

      if (newNode.value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }

        currentNode = currentNode.left;
      } else if (newNode.value > currentNode.value) {
        if (currentNode.right == null) {
          currentNode.right = newNode;
          break;
        }

        currentNode = currentNode.right;
      }
    }

    return this;
  }
}

export default BinarySearchTree;
