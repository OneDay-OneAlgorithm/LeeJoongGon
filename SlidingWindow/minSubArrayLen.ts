// Problem
// 합이 함수에 전달된 정수보다 크거나 같은 하위 배열의 최소 길이를 반환하는 `minSubArrayLen` 함수 작성

// Input
// 양의 정수 배열 `numbers`, 양의 정수 `target`

// Output
// 합이 함수에 전달된 `target`보다 크거나 같은 하위 배열의 최소 길이를 반환
// 조건을 만족하는 하위 배열이 없다면 0 반환

// 윈도우의 양쪽 끝을 가리킬 변수 `left`, `right` 생성
// 조건을 만족하는 윈도우의 최소 크기를 저장할 변수 `length` 생성하고 Infinity로 초기화
// 윈도우 내 요소들의 합을 저장할 변수 `sum`을 배열의 첫번째 요소의 값으로 초기화
// `right`의 값이 배열의 크기보다 작을 때까지 반복
/// 윈도우 내 요소들의 합이 `target`보다 크거나 같다면
/// // 현재 윈도우의 크기가 이전 `length` 값보다 작다면 `length` 값을 업데이트
/// // `sum`에서 `left`가 가리키는 값을 뺌
/// // `left`를 증가시킴 (윈도우 크기를 감소시킴)
/// 윈도우 내 요소들의 합이 `target`보다 작다면
/// // `right`를 증가시킴 (윈도우 크기를 증가시킴)
/// // `sum`에 `right`가 가리키는 값을 더함
// 반복이 끝난 후 length 값이 Infinity라면 0 반환
// length 값이 Infinity가 아니라면 해당 length 값 반환

const minSubArrayLen = (numbers: number[], target: number): number => {
  let left = 0;
  let right = 0;
  let length = Infinity;
  let sum = numbers[0];

  while (right < numbers.length) {
    if (sum >= target) {
      length = Math.min(right - left + 1, length);
      sum -= numbers[left];
      left += 1;
      continue;
    }

    if (sum < target) {
      right += 1;
      sum += numbers[right];
    }
  }

  return length === Infinity ? 0 : length;
};

export default minSubArrayLen;
