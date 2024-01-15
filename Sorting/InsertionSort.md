## 삽입 정렬 (Insertion Sort)

---

- 정렬되어 있지 않은 부분의 요소를 이미 정렬되어 있는 부분에 하나씩 삽입하며 정렬하는 알고리즘
- 새로운 입력이 주어지는 온라인 알고리즘을 다룰 경우 유용

### 시간복잡도

---

- Best Case - `O(n)` (거의 정렬이 되어있는 배열)
- Average Case - `O(n^2)`
- Worst Case - `O(n^2)`

### 의사 코드

---

- 배열의 두 번째 요소를 선택하여 시작 (배열의 첫 번째 요소를 이미 정렬된 부분이라고 간주)
- 두 번째 요소를 그 전의 요소와 비교하고 필요하면 `swap` 수행
- 요소가 정렬된 배열의 올바른 위치에 올 때까지 반복
- 배열 전체가 정렬될 때까지 반복

### 예시 코드

---

```jsx
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const target = array[i];
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] <= target) {
        {
          break;
        }
      }

      array[j + 1] = array[j];
      array[j] = target;
    }
  }

  return array;
};
```
