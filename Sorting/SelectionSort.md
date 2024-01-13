## 선택 정렬 (Selection Sort)

---

- 오름차순으로 정렬할 때, 최솟값을 찾아 하나씩 배열의 앞에 위치시키는 정렬 알고리즘

### 시간복잡도

---

- Best Case - `O(n^2)`
- Average Case - `O(n^2)`
- Worst Case - `O(n^2)`

### 의사 코드

---

- 배열의 앞에서 시작하여 끝까지 증가하는 변수 `i`를 만들어 반복 수행
  - 최솟값을 가리킬 포인터 변수 `min`을 생성하고 `i`로 초기화
  - `i + 1`부터 배열의 끝까지 증가하는 변수 `j`를 만들어 반복 수행
    - `j`가 가리키는 값이 `min`이 가리키는 값보다 작다면 `min`의 값을 `j`로 업데이트
  - 반복이 끝난후 `i`와 `min`의 값이 다르다면 `i`가 가리키는 요소와 `min`이 가리키는 요소의 위치를 바꿈
- 반복이 종료되었다면, `array` 반환

### 예시 코드

---

```jsx
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (min !== i) {
      swap(array, min, i);
    }
  }

  return array;
};

const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};
```
