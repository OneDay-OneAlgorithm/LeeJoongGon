## Sliding Window

---

- 일정한 사이즈의 윈도우를 이동시키면서 윈도우 내의 요소들을 이용하여 문제를 해결하는 패턴 (안정적인 데이터 전송을 위해 네트워크의 `GBN`, `SR` 프로토콜에서도 사용)
- 중첩된 반복문을 사용하지 않고(`O(n^2)`), 윈도우 끝의 요소들을 관리하며 반복문을 한 번 사용하여 해결할 수 있음(`O(n)`)

### 예시 문제

---

> 정수 배열과 숫자 하나(`n`)를 받는 `maxSubArraySum` 함수를 작성하라. <br/
> 함수는 배열의 `n` 개의 연속된 요소들의 합의 최대값을 계산해야한다.

```javascript
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubArraySum([4, 2, 1, 6], 1); // 6
maxSubArraySum([4, 2, 1, 6, 2], 4); // 13
maxSubArraySum([], 4); // null
```

> 양의 정수 배열과 양의 정수를 입력으로 받는 `minSubArrayLen`이라는 함수를 작성하라. <br/>
> 이 함수는 합이 함수에 전달된 정수보다 크거나 같은 인접한 하위 배열의 최소 길이를 반환해야 한다. <br/>
> 조건을 만족하는 값이 없는 경우 0을 반환한다.

```javascript
minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0
```
