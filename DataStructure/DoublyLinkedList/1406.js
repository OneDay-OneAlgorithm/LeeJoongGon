/* eslint-disable no-continue */
/* eslint-disable max-classes-per-file */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.cursor = null;
  }

  push(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    return this;
  }

  moveCursorLeft() {
    if (this.cursor === this.head) {
      return;
    }

    if (this.cursor === this.tail.next) {
      this.cursor = this.tail;
      return;
    }

    this.cursor = this.cursor.prev;
  }

  moveCursorRight() {
    if (this.cursor === this.tail.next) {
      return;
    }

    this.cursor = this.cursor.next;
  }

  removeAtCursor() {
    if (this.cursor === this.head) {
      return;
    }

    if (this.cursor === this.tail.next) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      return;
    }

    const removedNode = this.cursor.prev;
    if (removedNode === this.head) {
      this.head = this.cursor;
      this.head.prev = null;
      return;
    }

    removedNode.prev.next = this.cursor;
    this.cursor.prev = removedNode.prev;
  }

  insertAtCursor(data) {
    const newNode = new Node(data);

    if (this.cursor === this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      return;
    }

    if (this.cursor === this.tail.next) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      return;
    }

    const cursorNode = this.cursor;
    const prevNode = this.cursor.prev;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = cursorNode;
    cursorNode.prev = newNode;
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

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const input = ['abcd', '3', 'P x', 'L', 'P y'];
// const input = ['abc', '9', 'L', 'L', 'L', 'L', 'L', 'P x', 'L', 'B', 'P y'];
// const input = ['dmih', '11', 'B', 'B', 'P x', 'L', 'B', 'B', 'B', 'P y', 'D', 'D', 'P z'];

const string = input[0];
const instructionCount = Number(input[1]);

const solution = () => {
  const list = new DoublyLinkedList();

  [...string].forEach((char) => {
    list.push(char);
  });

  list.cursor = list.tail.next;

  for (let i = 0; i < instructionCount; i += 1) {
    const instruction = input[i + 2].split(' ');

    if (instruction[0] === 'L') {
      list.moveCursorLeft();
    }

    if (instruction[0] === 'D') {
      list.moveCursorRight();
    }

    if (instruction[0] === 'B') {
      list.removeAtCursor();
    }

    if (instruction[0] === 'P') {
      list.insertAtCursor(instruction[1]);
    }
  }

  list.print();
};

solution();
