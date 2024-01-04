// Problem
// 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 `isSubsequence` 함수 작성

// Input
// 공백을 포함할 수 있는 두 문자열 `first`, `second`

// Output
// 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함된다면 true 반환
// 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되지 않는다면 false 반환

// 각 문자열을 가리킬 포인터 변수 `firstPointer`, `secondPointer` 생성
// `secondPointer`가 문자열에 끝에 도달할 때까지 반복
/// `firstPointer`가 가리키는 문자가 `secondPointer`가 가리키는 문자와 같다면
/// // `firstPointer`, `secondPointer`를 1 증가시킴
/// `firstPointer`가 가리키는 문자가 `secondPointer`가 가리키는 문자와 다르다면
/// // `firstPointer`가 가리키는 문자와 같은 문자가 나올 때까지
/// /// `secondPointer`를 1 증가시킴
// 반복이 끝난 후 `firstPointer`가 문자열의 끝에 도달했다면
/// true 반환
// 그렇지 않다면
/// false 반환

const isSubsequence = (first: string, second: string): boolean => {
  let firstPointer = 0;
  let secondPointer = 0;

  while (secondPointer < second.length) {
    const firstChar = first[firstPointer];
    const secondChar = second[secondPointer];

    if (firstChar === secondChar) {
      firstPointer += 1;
      secondPointer += 1;
      continue;
    }

    if (firstChar !== secondChar) {
      secondPointer += 1;
      continue;
    }
  }

  if (firstPointer === first.length) {
    return true;
  }

  return false;
};

export default isSubsequence;
