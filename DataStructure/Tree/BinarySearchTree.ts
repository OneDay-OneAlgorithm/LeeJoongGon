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

  find(value: number) {
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;

    while (true) {
      if (currentNode.value === value) {
        return currentNode;
      }

      if (currentNode.value > value) {
        if (currentNode.left === null) {
          return null;
        }

        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        if (currentNode.right === null) {
          return null;
        }

        currentNode = currentNode.right;
      }
    }
  }
}

export default BinarySearchTree;
