## 스택 (Stack)

---

- LIFO(Last In First Out) 순서를 따르는 선형적인 데이터 구조

## 스택 구현

### 자바스크립트 내장 배열 객체 이용

---

```tsx
const stack = [];

stack.push('NAVER');
stack.push('GOOGLE');
stack.push('YOUTUBE');

stack.pop();
stack.pop();
stack.pop();
```

<aside>

`shift()`, `unshift()` 메서드를 이용해서 스택을 구현할 수 있지만 요소들의 인덱스를 다시 부여해야 하기 때문에 `push()`, `pop()` 메서드를 이용하는 것이 효율적이다.

</aside>

### 연결 리스트 이용

---

- 단일 연결 리스트에서 사용했던 노드를 사용
- O(1)의 시간 복잡도로 요소 추가, 삭제를 수행하기위해 연결 리스트의 시작 부분(`last` )에서 요소를 추가, 삭제

```tsx
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
```

## 시간 복잡도

---

- 삽입(Insertion) - O(1)
- 삭제(Removal) - O(1)
