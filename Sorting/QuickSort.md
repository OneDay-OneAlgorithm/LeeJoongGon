## 퀵 정렬 (Quick Sort)

---

- 병합 정렬과 비슷하게, 0개 또는 1개의 요소를 가지는 배열은 항상 정렬되어있다는 사실을 이용
- 요소 하나를 선택하고(피벗 요소), 피벗보다 작은 요소는 피벗의 왼쪽에, 피벗보다 큰 요소는 피벗의 오른쪽에 위치하도록 배열을 분할
- 분할한 배열에 대해서 각각 퀵 정렬을 적용

### 시간복잡도

---

> _partition_ 단계의 수 - `lgn`, 각 _partition_ 단계마다 피벗과 그 외 모든 값들을 비교하는 횟수 - `n` ⇒ `O(nlgn)`

- Best Case - `O(nlgn)`
- Average Case - `O(nlgn)`
- Worst Case - `O(n^2)`
  - 배열이 이미 정렬되어 있을 경우, 배열의 첫 번째 요소를 피벗으로 선택하므로 _partition_ 단계가 n번 일어난다.

### Partiton 함수 구현

---

- 배열의 한 요소를 피벗으로 선택
- 피벗보다 작은 요소는 피벗의 왼쪽에, 피벗보다 큰 요소는 피벗의 오른쪽에 위치하도록 배열의 요소를 재배치
- 피벗의 인덱스를 반환

```tsx
const partition = (array: number[], start: number, end: number): number => {
  const pivot = array[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (array[i] < pivot) {
      swapIndex += 1;
      [array[swapIndex], array[i]] = [array[i], array[swapIndex]];
    }
  }

  [array[start], array[swapIndex]] = [array[swapIndex], array[start]];

  return swapIndex;
};
```

### QuickSort 의사 코드

---

- 전체 배열에 대해서 `partition()` 함수를 호출하여 피벗 요소의 인덱스를 구함
- 해당 피벗의 왼쪽에 있는 배열과 피벗의 오른쪽에 있는 배열로 `partition()` 함수를 재귀적으로 호출
- 배열의 시작 인덱스가 배열의 끝 인덱스보다 크거나 같을 경우 해당 배열을 반환 (base case)

### 예시 코드

---

```tsx
const quickSort = (array: number[], start = 0, end = array.length - 1): number[] => {
  if (start < end) {
    const pivotIndex = partition(array, start, end);

    quickSort(array, start, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, end);
  }

  return array;
};
```
