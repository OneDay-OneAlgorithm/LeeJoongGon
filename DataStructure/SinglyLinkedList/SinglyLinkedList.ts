import Node from './Node';

class SinglyLinkedList {
  head: Node | null;

  tail: Node | null;

  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adding new node to the end of the linked list
  push(data: number | string): SinglyLinkedList {
    const node = new Node(data);

    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;

    return this;
  }
}

export default SinglyLinkedList;
