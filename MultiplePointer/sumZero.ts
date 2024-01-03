// Problem
// 정렬된 정수 배열이 입력으로 받아 합이 0이 되는 쌍을 찾는 sumZero 함수를 작성하라.

// Input
// 정렬된 정수 배열 `array`

// Output
// 합이 0이 되는 두 값을 모두 포함하는 배열을 반환
// 그러한 쌍이 존재하지 않는 경우 `undefined`를 반환

// 배열의 양쪽 끝을 가리키는 포인터 2개 생성
// 배열 왼쪽 포인터가 오른쪽 포인터와 같거나 커질 때까지 반복
//// 두 포인터가 가리키는 배열 원소의 합이 0과 같다면
////// 두 포인터가 가리키는 배열 원소를 배열에 담아 반환
//// 두 포인터가 가리키는 배열 원소의 합이 0보다 크다면
////// 오른쪽 포인터를 1 감소 시킴
//// 두 포인터가 기리키는 배열 원소의 합이 0보다 작다면
/////// 오른쪽 포인터를 1 증가 시킴
// 반복이 정상적으로 종료되었다면 undefined 반환

const sumZero = (array: number[]) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];

    if (sum === 0) {
      return [array[left], array[right]];
    }

    if (sum > 0) {
      right -= 1;
      continue;
    }

    if (sum < 0) {
      left += 1;
      continue;
    }
  }

  return undefined;
};

export default sumZero;
