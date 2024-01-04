// Problem
// 배열에 목표 평균과 같은 값의 쌍이 있는지 확인하는 `averagePair`라는 함수를 작성

// Input
// 정렬된 정수 배열 `numbers` 목표 평균 `targetAverage`

// Output
// 배열에 목표 평균과 같은 값의 쌍이 있다면 true 반환
// 배열에 목표 평균과 같은 값의 쌍이 없다면 false 반환

// 배열의 양 끝을 가리킬 포인터 변수 `left`, `right` 생성
// `left`가 `right`보다 작을 때까지 반복
/// `left`가 가리키는 요소와 `right`가리키는 요소의 평균이 목표 평균과 같다면
/// // true 반환
/// `left`가 가리키는 요소와 `right`가리키는 요소의 평균이 목표 평균보다 작으면
/// // `left` 값을 1 증가시킴
// `left`가 가리키는 요소와 `right`가리키는 요소의 평균이 목표 평균보다 크면
/// // `right` 값을 1 감소시킴
// 반복이 정상적으로 종료되었다면 false 반환

const averagePair = (numbers: number[], targetAverage: number): boolean => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const average = (left + right) / 2;
    if (average === targetAverage) {
      return true;
    }

    if (average < targetAverage) {
      left += 1;
      continue;
    }

    if (average > targetAverage) {
      right -= 1;
      continue;
    }
  }

  return false;
};

export default averagePair;
