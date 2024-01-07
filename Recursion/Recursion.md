## 재귀 (Recursion)

---

- 자기 자신(보통 함수)을 호출하는 프로세스
- 재귀를 사용하지 않고 반복(iteration)으로 문제를 해결할 수 있지만, 재귀를 사용하면 깔끔하고 간단하게 해결할 수 있음

## 콜 스택 (Call Stack)

---

- 대부분의 프로그래밍 언어에는 함수가 호출될 때의 상황을 관리하는 내장된 자료 구조가 있음
- JS의 경우에는 스택 구조의 콜 스택(`Call Stack`)이 해당 상황을 관리

## 재귀함수의 구성요소

---

- 중단점(`base case`) - 재귀가 종료되는 조건
- 다른 입력값(`different input`) - 매번 다른 입력값으로 재귀 호출이 이루어짐

```jsx
const countDown = (num) => {
  if (num <= 0) {
    // base case
    console.log('All Done!');
    return;
  }

  console.log(num);
  num -= 1; // different input
  countDown(num);
};

countDown(5);
```

## 반복문과 재귀함수

---

- 반복문은 재귀함수로 나타낼 수 있고, 그 역 또한 가능

> 반복문으로 구현한 팩토리얼

```jsx
const factorial = (num) => {
  let total = 1;
  for (let index = num; index > 1; index--) {
    total *= index;
  }

  return total;
};
```

> 재귀 함수로 구현한 팩토리얼

```jsx
const factorial = (num) => {
  if (num === 1) {
    // base case
    return 1;
  }

  return num * factorial(num - 1); // different input
};
```

## 헬퍼 메서드 재귀 (Helper Method Recursion)

---

- 재귀적이지 않은 외부 함수에서 재귀적인 내부 함수를 호출하는 패턴
- 재귀 함수 호출 시 **함수 내부의 변수들이 초기화되는 것을 막기 위해** 사용됨

```jsx
const collectOddValues = (array) => {
  const result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) {
      // base case
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1)); // different input
  };

  helper(array);

  return result;
};
```

## 순수 재귀 (Pure Recursion)

---

- 필요한 모든 코드가 있는 함수를 재귀적으로 호출하는 패턴
- 배열의 경우, `slice()`, `spread operator`, `concat()` 과 같이 원본 배열을 변경하지 않는 메서드를 사용
- 문자열은 불변(immutable)이기 때문에, `slice()`, `substr()` 등을 이용해 문자열을 복사
- 객체의 경우, `Object.assign()`, `spread operator` 등을 이용해 객체를 복사

```jsx
const collectOddValues = (array) => {
  let newArr = [];

  if (array.length === 0) {
    return newArr;
  }

  if (array[0] % 2 !== 0) {
    newArr.push(array[0]);
  }

  newArr = newArr.concat(collectOddValues(array.slice(1)));
  return newArr;
};
```
