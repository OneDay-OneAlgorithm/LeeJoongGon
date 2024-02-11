## 큐 (Queue)

---

- FIFO(First In First Out) 순서를 따르는 선형적인 데이터 구조

## 스택 구현

### 자바스크립트 내장 배열 객체 이용

---

```tsx
const queue = [];

queue.push('NAVER');
queue.push('GOOGLE');
queue.push('YOUTUBE');

queue.unshift(); // NAVER
queue.unshift(); // GOOGLE
queue.unshift(); // YOUTUBE
```

<aside>

`push()`, `unshift()` 메서드를 이용해서 큐를 구현할 수 있지만 `unshift()` 메서드는 요소들의 인덱스를 다시 부여해야 하기 때문에 연결 리스트를 이용하여 큐를 구현하는 것이 효율적이다.

</aside>

### 연결 리스트 이용

---

- 단일 연결 리스트에서 사용했던 노드를 사용
- O(1)의 시간 복잡도로 요소 추가, 삭제를 수행하기위해 연결 리스트의 마지막 부분(`last`)에서 요소를 추가, 시작 부분(`first`)에서 삭제

```tsx
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
```

## 시간 복잡도

---

- 삽입(Insertion) - O(1)
- 삭제(Removal) - O(1)
