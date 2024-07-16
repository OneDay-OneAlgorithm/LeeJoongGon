## 트리(Tree)

---

- 간선으로 연결된 노드들로 이루어진 계층적 구조의 비선형 자료 구조
- 트리의 각 노드는 여러 자식 노드를 가질 수 있지만 루트 노드를 제외하고는 정확히 하나의 부모 노드와 연결되어야 한다.
- Document Object Model(DOM), Abstract Syntax Tree(AST), 운영 체제의 폴더 구조 등에서 사용되는 자료 구조

## 이진 트리(Binary Tree)

---

- 각 노드가 최대 2개의 노드를 가질 수 있는 트리

### 이진 검색 트리(Binary Search Tree)

---

- 각 노드는 `key`에 대해서 정렬할 수 있어야 함(보통 숫자)
- 모든 노드의 왼쪽 서브트리에 있는 `key`는 해당 노드의 `key` 보다 작아야 함
- 모든 노드의 오른쪽 서브트리에 있는 `key`는 해당 노드의 `key` 보다 커야 함

### 이진 검색 트리 노드 구현

```tsx
class Node {
  value: number;

  left: Node | null;

  right: Node | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

### 이진 검색 트리 구현

```tsx
import Node from './Node';

class BinarySearchTree {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (newNode.value === currentNode.value) {
        return null;
      }

      if (newNode.value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }

        currentNode = currentNode.left;
      } else if (newNode.value > currentNode.value) {
        if (currentNode.right == null) {
          currentNode.right = newNode;
          break;
        }

        currentNode = currentNode.right;
      }
    }

    return this;
  }

  find(value: number) {
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;

    while (true) {
      if (currentNode.value === value) {
        return currentNode;
      }

      if (currentNode.value > value) {
        if (currentNode.left === null) {
          return null;
        }

        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        if (currentNode.right === null) {
          return null;
        }

        currentNode = currentNode.right;
      }
    }
  }
}
```

## 시간 복잡도

---

- 삽입(Insertion) - O(lg n)
  - 최악의 경우(이미 정렬된 숫자들이 입력으로 들어오는 경우) - O(n)
- 검색(Searching) - O(lg n)
  - 최악의 경우(이미 정렬된 숫자들이 입력으로 들어오는 경우) - O(n)
