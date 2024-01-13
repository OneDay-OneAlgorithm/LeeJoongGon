## 선형 검색 (Linear Search)

---

- 원하는 요소를 찾을 때까지 배열의 모든 요소를 하나씩 살펴보면서 선형적으로 탐색하는 방법

### 시간복잡도

---

- Best Case - `O(1)` (원하는 요소를 첫번째 탐색에서 바로 찾았을 때)
- Average Case - `O(n)`
- Worst Case - `O(n)` (원하는 요소를 찾기 위해 배열의 모든 요소를 탐색했을 때)

### 예시 코드

---

```jsx
const linearSearch = (array, value) => {
  // 원하는 요소를 찾을 때까지 배열의 모든 요소를 선형적으로 탐색
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
};
```

## 이진 검색 (Binary Search)

---

- 배열의 중간 인덱스부터 시작하여 배열을 반으로 나누어가며(분할 정복) 원하는 요소를 탐색하는 방법
- **요소들이** **정렬된 상태**에서 사용할 수 있음

### 시간복잡도

---

- Best Case - `O(1)` (원하는 요소를 첫번째 탐색에서 바로 찾았을 때)
- Average Case - `O(logn)`
- Worst Case - `O(logn)`

### 예시 코드

---

```jsx
const binarySearch = (sortedArray, value) => {
  let left = 0;
  let right = sortedArray.length - 1;
  // 배열의 중간 인덱스부터 시작하여 배열을 반으로 나누어가며 원하는 요소를 탐색
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (sortedArray[middle] === value) {
      return middle;
    }

    if (sortedArray[middle] < value) {
      left = middle + 1;
      continue;
    }

    if (sortedArray[middle] > value) {
      right = middle - 1;
      continue;
    }
  }

  return -1;
};
```
