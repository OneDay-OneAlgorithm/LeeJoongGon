// Problem
// 배열을 값이 평탄화(flattened)시키는 `flatten`이라는 함수를 작성하라.

// Input
// 임의의 원소를 가지는 배열 `input`

// Output
// `input`를 1차원 배열로 만든 새로운 배열을 반환

// helper method recursion
// 평탄화된 배열을 참조하는 변수 `flattened` 생성
// 실제 작업을 수행할 함수인 `helper` 내부 함수 작성
/// `array`의 길이가 0이라면 `return` (base case)
/// `array`의 첫번째 원소가 배열이라면 첫번째 원소로 helper 함수를 재귀호출
/// `array`의 첫번째 원소가 배열이 아니라면 `flattened` 배열에 push
/// `array`의 첫번째 원소를 제외한 배열로 helper 함수를 재귀호출
// 원본 배열로 `helper` 함수를 호출
// `flattened` 배열 반환

const flatten = (input: unknown[]): unknown[] => {
  const flattened: unknown[] = [];

  const helper = (array: unknown[]): void => {
    if (array.length === 0) {
      return;
    }

    if (Array.isArray(array[0])) {
      helper(array[0]);
    } else {
      flattened.push(array[0]);
    }

    helper(array.slice(1));
  };

  helper(input);

  return flattened;
};

export default flatten;
