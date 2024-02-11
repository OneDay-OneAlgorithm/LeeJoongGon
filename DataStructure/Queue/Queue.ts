import Node from '../SinglyLinkedList/Node';

class Queue {
  first: Node | null;

  last: Node | null;

  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(data: number | string): Queue {
    const newNode = new Node(data);

    if (!this.first || !this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size += 1;

    return this;
  }

  dequeue() {
    if (!this.first || !this.last) {
      return null;
    }

    const dequeuedNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size -= 1;

    return dequeuedNode.data;
  }
}

export default Queue;
