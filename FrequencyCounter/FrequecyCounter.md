## Frequency Counter (빈도수 세기)

---

- 객체나 집합을 사용하여 값의 빈도를 세는 패턴
- 중첩된 반복문을 사용하지 않고(`O(n^2)`), 값의 빈도를 저장할 객체를 만들고 반복문을 여러 번 사용하여 해결할 수 있음 (`O(n)`)

### 예시 문제

---

> 두 배열을 받아 첫 번째 배열의 모든 값을 제곱한 값을 두 번째 배열이 가지고 있다면 `true`를 반환하는 same 함수를 작성하라. 값의 빈도는 동일해야 한다.

```javascript
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false
```

> 두 문자열이 주어졌을 때, 두 번째 문자열이 첫 번째 문자열의 애너그램인지 확인하는 validAnagram 함수를 작성하라.
> 에너그램은 다른 글자를 재배열하여 형성된 단어이다.

```javascript
validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false
validAnagram('awesome', 'awesom'); // false
```
