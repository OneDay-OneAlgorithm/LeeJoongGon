## 버블 정렬 (Bubble Sort)

---

- 오름차순으로 정렬할 때, 더 큰 숫자가 한 번에 하나씩 위로 올라가는(bubble up) 정렬 알고리즘

### 시간복잡도

---

- Best Case - `O(n)` (거의 정렬이 되어있는 배열에서, 최적화된 버블 정렬을 사용했을 때)
- Average Case - `O(n^2)`
- Worst Case - `O(n^2)`

### 의사 코드

---

- 배열의 끝에서 시작하여 앞까지 감소하는 변수 `i`를 만들어 반복을 수행 (다음 반복에서 수행할 배열의 길이를 줄이기 위햬)
- 배열의 앞에서 `i` 까지 증가하는 변수 `j`를 만들어 중첩 반복을 수행
- `arr[j]`, `arr[j + 1]`을 비교하여 `arr[j]`가 더 크다면, 두 요소의 위치를 바꿈

### 예시 코드

---

```jsx
const bubbleSort = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      // 왼쪽 요소가 오른쪽 요소보다 크다면 두 요소의 위치를 바꾸면서(bubble up) 요소를 정렬
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
};

const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};
```

- 배열의 정렬이 완료된 상태에서도 버블 정렬을 계속 수행하는 비효율이 있음

### 최적화

---

- 매 반복마다 요소 위치 변경(swap)을 수행했는지 확인하여, 변경을 하지 않았다면 반복을 빠져나오도록 최적화 할 수 있음

```jsx
const bubbleSort = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        noSwap = false;
      }
    }
    // 요소 위치 변경을 수행하지 않았다면, 반복을 빠져나옴
    if (noSwap) {
      break;
    }
  }

  return array;
};

const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};
```
