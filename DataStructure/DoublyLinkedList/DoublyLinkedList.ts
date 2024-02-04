import Node from './Node';

class DoublyLinkedList {
  head: Node | null;

  tail: Node | null;

  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 연결 리스트 끝에 노드 추가
  push(data: number | string): DoublyLinkedList {
    const newNode = new Node(data);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;

    return this;
  }

  // 연결 리스트 끝에 있는 노드 제거
  pop(): Node | undefined {
    if (!this.head || !this.tail) {
      return undefined;
    }

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev!;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length -= 1;

    return poppedNode;
  }

  // 연결 리스트 앞에 있는 노드 제거
  shift(): Node | undefined {
    if (!this.head || !this.tail) {
      return undefined;
    }

    const shiftedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next!;
      this.head.prev = null;
      shiftedNode.next = null;
    }

    this.length -= 1;

    return shiftedNode;
  }

  // 연결 리스트 앞에 노드 추가
  unshift(data: number | string): DoublyLinkedList {
    const newNode = new Node(data);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = this.head.prev;
    }

    this.length += 1;

    return this;
  }

  // 연결 리스트에서 특정 인덱스의 노드 반환
  get(index: number): Node | null {
    if (index < 0 || index >= this.length) {
      return null;
    }

    const middle = Math.floor(this.length / 2);
    let current;
    let counter;

    if (index <= middle) {
      current = this.head;
      counter = 0;

      while (counter !== index) {
        current = current!.next;
        counter += 1;
      }
    } else {
      current = this.tail;
      counter = this.length - 1;

      while (counter !== index) {
        current = current!.prev;
        counter -= 1;
      }
    }

    return current;
  }

  // 연결 리스트에서 특정 인덱스의 노드의 데이터를 변경
  set(index: number, data: number | string): boolean {
    const node = this.get(index);
    if (!node) {
      return false;
    }

    node.data = data;

    return true;
  }

  // 연결 리스트에서 특정 인덱스에 노드 추가
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

    const newNode = new Node(data);
    const prevNode = this.get(index - 1)!;
    const nextNode = prevNode.next!;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length += 1;

    return true;
  }
}

export default DoublyLinkedList;
