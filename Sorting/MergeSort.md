## 병합 정렬 (Merge Sort)

---

- 배열을 0개 또는 1개의 요소를 가지는 작은 배열로 나눈 다음, 배열을 다시 병합하면서 정렬된 배열을 만들어가는 방식 (배열을 병합될 때, 정렬이 이루어짐)
- 0개 또는 1개의 요소를 가지는 배열은 항상 정렬되어있다는 사실을 이용

### 시간복잡도

---

> 병합 단계의 수 - `lgn`, 각 병합 단계마다 모든 값들을 비교하는 횟수 - `n` ⇒ `O(nlgn)`

- Best Case - `O(nlgn)`
- Average Case - `O(nlgn)`
- Worst Case - `O(nlgn)`

### 병합 함수 구현

---

- 빈 배열을 만들고, 입력으로 들어온 각 배열(이미 정렬된 배열이 입력으로 주어진다고 가정)에서 가장 작은 값을 찾는다.
- 아직 살펴보지 않은 값이 있다면,
  - 첫 번째 배열의 값이 두 번째 배열의 값보다 작으면,
    - 첫 번째 배열의 값을 결과 배열에 넣고, 첫 번째 배열의 다음 값으로 이동
  - 첫 번째 배열의 값이 두 번째 배열의 값보다 크다면,
    - 두 번째 배열의 값을 결과 배열에 넣고, 두 번째 배열의 다음 값으로 이동
  - 한 배열에 대해 모두 완료했다면, 다른 배열의 남아있는 값들을 결과 배열에 넣음

```tsx
const merge = (array1: number[], array2: number[]): number[] => {
  const merged: number[] = [];

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < array1.length && pointer2 < array2.length) {
    if (array1[pointer1] <= array2[pointer2]) {
      merged.push(array1[pointer1]);
      pointer1 += 1;
      continue;
    }
    if (array1[pointer1] > array2[pointer2]) {
      merged.push(array2[pointer2]);
      pointer2 += 1;
    }
  }

  if (pointer1 < array1.length) {
    for (let i = pointer1; i < array1.length; i++) {
      merged.push(array1[i]);
    }
  }

  if (pointer2 < array2.length) {
    for (let i = pointer2; i < array2.length; i++) {
      merged.push(array2[i]);
    }
  }

  return merged;
};
```

### 병합 정렬 의사 코드

---

- 빈 배열이나 요소가 하나만 있는 배열이 될 때까지 배열을 반으로 나눈다.
- 충분히 작은 배열까지 나누었다면, 원 배열의 전체 길이가 될 때까지 해당 배열을 다른 반쪽의 배열과 병합한다. (배열을 병합할 때, 정렬이 이루어짐)
- 배열이 완전히 병합되었다면, 해당 배열을 반환한다.

### 예시 코드

---

```tsx
const mergeSort = (array: number[]): number[] => {
  if (array.length < 2) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0, middle));
  const rightHalf = mergeSort(array.slice(middle));

  return merge(leftHalf, rightHalf);
};
```
