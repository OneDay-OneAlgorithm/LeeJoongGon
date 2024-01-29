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
      this.tail = this.tail.next;
    }

    this.length += 1;

    return this;
  }

  // removing a node from the end of the linked list
  pop(): Node | undefined {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;
    while (current.next !== null) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // removing a node from the beginning of the linked list
  shift(): Node | undefined {
    if (!this.head) {
      return undefined;
    }

    const currentHead = this.head;
    this.head = currentHead.next;

    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  // adding a node to the beginning of the linked list
  unshift(data: number | string): SinglyLinkedList {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length += 1;

    return this;
  }
}

export default SinglyLinkedList;
