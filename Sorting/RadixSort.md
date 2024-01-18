## 기수 정렬 (Radix Sort)

---

- 자릿수가 있는 데이터(정수, 문자열 등)를 정렬하는 데 사용할 수 있는 정렬 알고리즘
- 요소 간 비교([비교 정렬](https://ko.wikipedia.org/wiki/%EB%B9%84%EA%B5%90_%EC%A0%95%EB%A0%AC))를 수행하지 않음
- 가장 낮은 자리수부터 가장 높은 자리수까지 차례로 정렬을 수행

### 시간복잡도

---

> 정렬할 원소의 수 - `n`, 원소의 평균적인 자릿수 - `k`

- Best Case - `O(nk)`
- Average Case - `O(nk)`
- Worst Case - `O(nk)`

### helper 함수 구현

---

- `getDigit(num, place)`
  - `num`에서 `place` 자리의 수를 반환하는 함수

```tsx
const getDigit = (num: number, place: number) => Math.floor(Math.abs(num) / 10 ** place) % 10;
```

- `digitCount(num)`
  - `num`의 자릿수를 반환하는 함수

```tsx
const digitCount = (num: number) => {
  if (num === 0) {
    return 1;
  }

  return Math.floor(Math.log10(Math.abs(num))) + 1;
};
```

- `mostDigits(nums)`
  - 숫자 배열을 받아 가장 큰 자릿수를 가지는 숫자의 자릿수를 반환

```tsx
const mostDigits = (num: number[]) => Math.max(...num.map(digitCount));
```

### RadixSort 의사 코드

---

- 숫자 배열을 받아 가장 자릿수가 큰 숫자의 자릿수를 계산
- k = 0부터 가장 큰 자릿수까지 반복
  - 각 숫자(0 ~ 9)에 대해 버킷(빈 배열) 생성
  - 배열의 각 숫자를 k번째 자릿수를 기준으로 버킷에 배치
- 정렬된 배열을 반환

### 예시 코드

---

```tsx
const radixSort = (array: number[]) => {
  const maxDigit = mostDigits(array);

  for (let k = 0; k < maxDigit; k++) {
    const buckets: number[][] = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < array.length; i++) {
      const digit = getDigit(array[i], k);
      buckets[digit].push(array[i]);
    }

    array = buckets.flat();
  }

  return array;
};
```
