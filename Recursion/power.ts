// Problem
// 밑의 거듭제곱을 계산하는 `power` 함수 작성

// Input
// 음이 아닌 정수 `base`,`exponent`

// Output
// 밑의 거듭제곱 결과를 반환

// `exponent`가 0일 경우 1을 반환 (base case)
// `exponent`를 1씩 감소시키면서(different input) `power()` 함수를 재귀적으로 호출
// 각 재귀 호출에서 `base`와 power(exponent - 1)를 곱한 값을 반환

const power = (base: number, exponent: number): number => {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
};

export default power;
