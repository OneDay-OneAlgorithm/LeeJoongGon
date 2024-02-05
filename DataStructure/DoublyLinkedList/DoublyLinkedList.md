## 이중 연결 리스트 (Doubly Linked List)

---

- 단일 연결 리스트와 유사하지만 모든 노드가 이전 노드에 대한 포인터(`prev`)를 가지고 있음

## 이중 연결 리스트 구현

### 노드

---

```tsx
class Node {
  data: number | string;

  next: Node | null;

  prev: Node | null;

  constructor(data: number | string) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
```

### push(data)

---

- 연결 리스트의 끝에 새로운 노드를 추가

```tsx
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
```

### pop()

---

- 연결 리스트의 마지막 노드를 제거하고 반환

```tsx
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
```

### shift()

---

- 연결 리스트의 첫 번째 노드를 제거하고 반환

```tsx
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
```

### unshift(data)

---

- 연결 리스트의 첫 번째에 새로운 노드를 추가

```tsx
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
```

### get(index)

---

- 인덱스에 해당하는 노드를 반환

```tsx
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
```

### remove(index)

---

- 인덱스에 해당하는 노드를 제거하고 반환

```tsx
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

  const removedNode = this.get(index)!;
  const prevNode = removedNode.prev!;
  const nextNode = removedNode.next!;

  prevNode.next = nextNode;
  nextNode.prev = prevNode;
  removedNode.next = null;
  removedNode.prev = null;

  this.length -= 1;

  return removedNode;
}
```

## 시간 복잡도

---

- 삽입(Insertion) - O(1) (삽입이 리스트의 처음 or 끝에서 이루어질 때)
- 삭제(Removal) - O(1) (단일 연결 리스트와 달리 리스트의 마지막 요소를 삭제 할 때도 상수 시간)
- 검색(Searching) - O(n) (리스트를 반으로 나눠서 순회하지만 여전히 선형 시간)
