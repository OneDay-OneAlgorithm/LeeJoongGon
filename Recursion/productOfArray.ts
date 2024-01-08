// Problem
// 배열 안 모든 숫자의 곱을 반환하는 `productOfArray`라는 함수를 작성하라.

// Input
// 정수 배열 `numbers`

// Output
// 배열 안 모든 숫자들의 곱

// 배열의 길이가 0이라면 1 반환 (base case)
// 배열 왼쪽 끝의 요소와 그 요소를 제외한 배열로 함수를 재귀호출한 결과를 반환

const productOfArray = (numbers: number[]): number => {
  if (numbers.length === 0) {
    return 1;
  }

  return numbers[0] * productOfArray(numbers.slice(1));
};

export default productOfArray;
