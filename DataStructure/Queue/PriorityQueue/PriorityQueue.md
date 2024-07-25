## 우선순위 큐(Priority Queue)

---

- 우선순위를 가진 요소들을 저장하고 우선순위가 가장 높은 요소를 효율적으로 검색할 수 있도록 하는 데이터 구조

### 우선순위 큐 구현

---

- 보통 이진 힙으로 구현(Min Heap)

```tsx
import Node from './Node';

class PriorityQueue {
  values: Node[];

  constructor() {
    this.values = [];
  }

  enqueue(value: string, priority: number) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.#bubbleUp();
  }

  dequeue() {
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    const min = this.values.pop();

    this.#sinkDown();

    return min;
  }

  #bubbleUp() {
    let targetIndex = this.values.length - 1;

    while (targetIndex > 0) {
      const parentIndex = Math.floor((targetIndex - 1) / 2);
      const targetNode = this.values[targetIndex];
      const parentNode = this.values[parentIndex];

      if (targetNode.priority < parentNode.priority) {
        [this.values[targetIndex], this.values[parentIndex]] = [
          this.values[parentIndex],
          this.values[targetIndex],
        ];

        targetIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  #sinkDown() {
    let parentIndex = 0;

    while (true) {
      const parentNode = this.values[parentIndex];
      const leftChildIndex = 2 * parentIndex + 1;
      const rightChildIndex = 2 * parentIndex + 2;
      let leftChildNode;
      let rightChildNode;
      let lowerChildIndex;

      if (leftChildIndex < this.values.length) {
        leftChildNode = this.values[leftChildIndex];
        if (leftChildNode.priority < parentNode.priority) {
          lowerChildIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < this.values.length) {
        rightChildNode = this.values[rightChildIndex];
        if (
          (!leftChildNode && rightChildNode.priority < parentNode.priority) ||
          (leftChildNode && rightChildNode.priority < leftChildNode.priority)
        ) {
          lowerChildIndex = rightChildIndex;
        }
      }

      if (!lowerChildIndex) {
        break;
      }

      [this.values[parentIndex], this.values[lowerChildIndex]] = [
        this.values[lowerChildIndex],
        this.values[parentIndex],
      ];

      parentIndex = lowerChildIndex;
    }
  }
}
```

## 시간 복잡도

---

- Insertion - O(lg n)
- Extract Max/Min - O(lg n)
