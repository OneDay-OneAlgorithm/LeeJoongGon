## 연결 리스트 (Linked List)

---

- `head`, `tail`, `length` 프로퍼티를 포함하는 자료 구조
- 노드들로 구성되고, 각 노드는 값(value)과 다른 노드 또는 `null`을 가리키는 포인터를 가지고 있음

## 배열과의 비교

### 연결 리스트

---

- 인덱스를 가지고 있지 않음
- 포인터를 가지는 노드들로 연결됨
- 모든 데이터에 즉시 접근(Random Access)할 수 없음

### 배열

---

- 순서대로 인덱싱됨
- 삽입 및 삭제시 비용이 많이 들어감(인덱스의 재조정 필요)
- 특정 인덱스로 데이터에 빠르게 접근 가능

## 단일 연결 리스트 구현

### 노드

---

```tsx
class Node {
  data: number | string;

  next: Node | null;

  constructor(data: number | string) {
    this.data = data;
    this.next = null;
  }
}
```

### push(data)

---

- 연결 리스트의 끝에 새로운 노드를 추가

```tsx
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
```

### pop()

---

- 연결 리스트의 마지막 노드를 제거하고 반환

```tsx
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
```

### shift()

---

- 연결 리스트의 첫 번째 노드를 제거하고 반환

```tsx
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
```

### unshift(data)

---

- 연결 리스트의 첫 번째에 새로운 노드를 추가

```tsx
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
```

### get(index)

---

- 인덱스에 해당하는 노드를 반환

```tsx
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
```

### set(index, data)

---

- 인덱스에 해당하는 노드의 데이터를 변경

```tsx
set(index: number, data: number | string): boolean {
    const node = this.get(index);
    if (!node) {
      return false;
    }

    node.data = data;

    return true;
  }
```

### insert(index, data)

---

- 인덱스에 해당하는 위치에 새로운 노드를 삽입

```tsx
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
```

### remove(index)

---

- 인덱스에 해당하는 노드를 제거하고 반환

```tsx
remove(index: number): boolean | Node {
    if (index < 0 || index >= this.length) {
      return false;
    }

    if (index === this.length - 1) {
      return this.pop()!;
    }

    if (index === 0) {
      return this.shift()!;
    }

    const prev = this.get(index - 1)!;
    const removed = prev.next!;

    prev.next = removed.next;
    this.length -= 1;

    return removed;
  }
```

### reverse()

---

- 연결 리스트의 순서를 뒤집음

```tsx
reverse(): SinglyLinkedList {
    // swap head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev: Node | null = null;
    let next: Node | null = null;

    for (let i = 0; i < this.length; i += 1) {
      // next is the next node after node
      next = node!.next;
      // node.next is the previous node
      node!.next = prev;
      // prev is the current node
      prev = node;
      // node is the next node
      node = next;
    }

    return this;
  }
```

## 시간 복잡도

---

- 삽입(Insertion) - O(1) (삽입이 리스트의 처음 or 끝에서 이루어질 때)
- 삭제(Removal) - O(1) (리스트의 처음 요소를 삭제할 때) or O(n) (리스트의 마지막 요소를 삭제 할 때)
- 검색(Searching) - O(n) (리스트를 순회하면서 검색)
