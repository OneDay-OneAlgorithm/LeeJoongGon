// Problem
// 숫자를 받아 해당 숫자의 팩토리얼을 반환하는 `factorial` 함수를 작성하라.

// Input
// 음이 아닌 정수 number

// Output
// `number`의 팩토리얼을 반환

// number가 0일 경우 1 반환 (base case)
// number * factorial(number - 1)을 반환하여 factorial 함수를 재귀적으로 호출 (different input)

const factorial = (number: number): number => {
  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
};

export default factorial;
