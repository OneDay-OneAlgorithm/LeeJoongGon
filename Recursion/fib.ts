// Problem
// 피보나치 수열의 n번째 숫자를 반환하는 fib라는 재귀 함수를 작성하라.
// 피보나치 수열은 1, 1로 시작하는 1, 1, 2, 3, 5, 8, ...의 정수의 수열이며, 모든 수는 이전 두 수의 합과 같다.

// Input
// 음이 아닌 정수 `n`

// Output
// `n`번째 피보나치 수열의 값을 반환

// n이 2보다 작을 경우 1을 반환 (base case)
// `n - 1`, `n - 2`로 함수를 재귀호출한 결과를 더한 값을 반환

const fib = (n: number): number => {
  if (n < 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};

export default fib;
