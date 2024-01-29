/* eslint-disable max-classes-per-file */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;

    return this;
  }

  pop() {
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

  shift() {
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

  unshift(data) {
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

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter += 1;
    }

    return current;
  }

  // adding a node to the linked list at a specific position
  insert(index, data) {
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
    const prev = this.get(index - 1);

    node.next = prev.next;
    prev.next = node;

    this.length += 1;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    const prev = this.get(index - 1);
    const removed = prev.next;

    prev.next = removed.next;
    this.length -= 1;

    return removed;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.data);
      current = current.next;
    }

    console.log(arr.join(''));
  }
}

// const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = ['abc', '9', 'L', 'L', 'L', 'L', 'L', 'P x', 'L', 'B', 'P y'];

const string = input[0];
const instructionCount = Number(input[1]);

const solution = () => {
  const list = new SinglyLinkedList();

  [...string].forEach((char) => {
    list.push(char);
  });

  let cursor = list.length;

  for (let i = 0; i < instructionCount; i += 1) {
    const instruction = input[i + 2].split(' ');

    if (instruction[0] === 'L') {
      if (cursor === 0) {
        continue;
      }

      cursor -= 1;
    }

    if (instruction[0] === 'D') {
      if (cursor === list.length) {
        continue;
      }

      cursor += 1;
    }

    if (instruction[0] === 'B') {
      if (cursor === 0) {
        continue;
      }

      list.remove(cursor - 1);
      cursor -= 1;
    }

    if (instruction[0] === 'P') {
      list.insert(cursor, instruction[1]);
      cursor += 1;
    }
  }

  list.print();
};

solution();
