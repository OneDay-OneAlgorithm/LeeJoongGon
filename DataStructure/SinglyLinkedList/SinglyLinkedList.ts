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

  // retrieving a node in a linked list by its position
  get(index: number): Node | null {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current?.next!;
      counter += 1;
    }

    return current;
  }

  // changing the data of a node based on its position in the linked list
  set(index: number, data: number | string): boolean {
    const node = this.get(index);
    if (!node) {
      return false;
    }

    node.data = data;

    return true;
  }

  // adding a node to the linked list at a specific position
  insert(index: number, data: number | string): boolean {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      this.push(data);
      return true;
    }

    if (index === 0) {
      this.unshift(data);
      return true;
    }

    const node = new Node(data);
    const prev = this.get(index - 1)!;

    node.next = prev.next;
    prev.next = node;

    this.length += 1;

    return true;
  }

  // removing a node from the linked list at a specific position
  remove(index: number): Node | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    const prev = this.get(index - 1)!;
    const removed = prev.next!;

    prev.next = removed.next;
    this.length -= 1;

    return removed;
  }
}

export default SinglyLinkedList;
