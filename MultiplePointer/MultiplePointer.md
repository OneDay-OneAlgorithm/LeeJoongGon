## Multiple Pointers (다중 포인터)

---

- 인덱스를 가리키는 포인터 두 개를 만들어 특정 조건을 만족하도록 시작, 끝, 중간으로 이동시키는 패턴
- 중첩된 반복문을 사용하지 않고(`O(n^2)`), 인덱스를 가리키는 포인터 두 개를 만들어 반복문을 한 번 사용하여 해결할 수 있음 (`O(n)`)

### 예시 문제

---

> 정렬된 정수 배열이 입력으로 들어오는 `sumZero`라는 함수를 작성하라. <br/>
> 이 함수는 합이 0인 첫 번째 쌍을 찾아야 한다. <br/>
> 합이 0이 되는 두 값을 모두 포함하는 배열을 반환하거나 <br/>
> 그러한 쌍이 존재하지 않는 경우 `undefined`를 반환한다.

```javascript
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
```

> 정렬된 정수 배열을 입력으로 받아 배열의 고유한 값의 개수를 세는 `countUniqueValues`라는 함수를 작성하라. <br/>
> 배열에는 음수가 있을 수 있지만 항상 정렬되어있다.

```javascript
countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
```

> 정렬된 정수 배열과 목표 평균이 주어졌을 때, 배열에 목표 평균과 같은 값의 쌍이 있는지 확인하는 `averagePair`라는 함수를 작성하라. 목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있다.

```javascript
averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
```
