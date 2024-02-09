import Node from '../SinglyLinkedList/Node';

class Stack {
  first: Node | null;

  last: Node | null;

  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(data: number | string): number {
    const newNode = new Node(data);

    if (!this.first || !this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.last;
      this.last = newNode;
    }

    this.size += 1;

    return this.size;
  }

  pop() {
    if (!this.first || !this.last) {
      return null;
    }

    const poppedNode = this.last;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.last = poppedNode.next;
    }

    this.size -= 1;

    return poppedNode.data;
  }
}

export default Stack;
