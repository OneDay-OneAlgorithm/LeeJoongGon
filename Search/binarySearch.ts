// Problem
// 배열에서 특정 요소의 인덱스를 찾는 `binarySearch` 함수 작성 (O(lgn))

// Input
// 정렬된 문자열 배열 또는 정렬된 숫자 배열 `array`, 문자열 또는 숫자 `value`

// Output
// `array` 배열에서 `value`의 인덱스를 찾아서 반환
// 만약 배열에 없다면 -1 반환

// 윈도우의 양 끝을 가리킬 변수 `left`, `right` 생성
// `left`가 `right`보다 작거나 같을 때까지 반복
/// `left`와 `right`의 중간값을 가리키는 `middle` 변수 생성
/// `middle`이 가리키는 요소와 `value`가 같다면 `middle` 반환
/// `middle`이 가리키는 요소가 `value`보다 작다면
/// // `left` 값을 `middle` + 1로 변경
/// `middle`이 가리키는 요소가 `value`보다 크면
/// // `right` 값을 `middle` - 1로 변경
// 반복이 정상적으로 종료되었다면 -1 반환

const binarySearch = (array: number[] | string[], value: number | string): number => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (array[middle] === value) {
      return middle;
    }

    if (array[middle] < value) {
      left = middle + 1;
      continue;
    }

    if (array[middle] > value) {
      right = middle - 1;
      continue;
    }
  }

  return -1;
};

export default binarySearch;
