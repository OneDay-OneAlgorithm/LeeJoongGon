// Problem
// 0부터 함수에 전달된 숫자까지의 모든 숫자를 더하는 `recursiveRange`라는 함수를 작성하라.

// Input
// 음이 아닌 정수 `number`

// Output
// 0부터 전달된 숫자까지의 정수를 모두 더한 결과를 반환

// number가 0일 경우 0 반환 (base case)
// number와 number - 1로 함수를 재귀 호출한 결과를 더한 값을 반환

const recursiveRange = (number: number): number => {
  if (number === 0) {
    return 0;
  }

  return number + recursiveRange(number - 1);
};

export default recursiveRange;
