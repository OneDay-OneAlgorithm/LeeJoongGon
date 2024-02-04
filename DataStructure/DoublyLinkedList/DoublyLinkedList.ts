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
}

export default DoublyLinkedList;
