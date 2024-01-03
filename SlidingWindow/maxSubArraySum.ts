// Problem
// 배열의 n 개의 연속된 요소들의 합의 최대값을 계산하는 `maxSubArraySum` 함수를 작성하라.

// Input
// 정수 배열 `array`, 음수가 아닌 정수 `n`

// Output
// 배열 `array`의 n개의 연속된 요소들의 합의 최대값 `max`
// `array`의 길이가 n보다 작을 경우 null 반환

// `array`의 길이가 n보다 작을 경우 null 반환
// 윈도우의 양 끝을 가리키는 변수 `left`, `right` 생성
// 윈도우 내 요소들의 합을 나타내는 변수 `sum` 생성
// 배열의 n개의 연속된 요소들으 합의 최대값을 나타내는 변수 `max` 생성
// 윈도우를 배열의 왼쪽 끝부터 시작하도록 초기화하고 `sum`, `max`를 윈도우 내 요소들의 합으로 초기화
// 윈도우가 오른쪽 끝에 도달할 때까지 윈도우를 오른쪽으로 이동시키면서 반복
/// `sum`에서 이동 전 윈도우의 왼쪽 끝 요소를 빼고 이동 후 윈도우의 오른쪽 끝 요소를 더하여 `sum`을 업데이트
/// 업데이트된 `sum`이 기존의 `max` 값보다 크다면 `max` 값을 업데이트
// 반복이 종료되었다면 `max` 반환

const maxSubArraySum = (array: number[], n: number) => {
  if (array.length < n) {
    return null;
  }

  let left = 0;
  let right = n - 1;
  // eslint-disable-next-line no-param-reassign, no-return-assign
  let sum = array.slice(0, n).reduce((acc, cur) => (acc += cur), 0);
  let max = sum;

  while (right < array.length - 1) {
    left += 1;
    right += 1;

    sum = sum - array[left - 1] + array[right];
    if (sum > max) {
      max = sum;
    }
  }

  return max;
};

export default maxSubArraySum;
