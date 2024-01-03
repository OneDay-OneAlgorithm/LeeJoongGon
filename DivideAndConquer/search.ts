// Problem
// 특정 값이 배열 안에 있는 지를 확인하는 `search` 함수를 작성

// Input
// 정렬된 정수 배열 `array`, 정수 `key`

// Output
// `key` 값이 배열 안에 있다면, 해당 인덱스 반환
// `key` 값이 배열 안에 없다면, -1 반환

// 배열에 초기 왼쪽 끝과 오른쪽 끝을 가리키는 변수 `initialLeft`, `initialRight` 생성
// `left`, `right`를 매개변수로 받는 함수 `helper()` 생성
/// left가 right보다 크다면 -1 반환
/// 정렬된 배열의 중간 값을 가리키는 변수 `middle` 생성
/// `key` 값이 `middle` 값과 같다면
/// // 해당 index(middle)을 반환
/// `key` 값이 `middle` 값보다 작다면
/// // `right`를 middle - 1로 수정하고
/// //  재귀적으로 helper(left, right) 함수를 호출
/// `key` 값이 `middle` 값보다 크다면
/// // `left`를 middle + 1로 수정하고
/// // 재귀적으로 helper(left, right) 함수를 호출
// helper(initialLeft, initialRight)를 반환

const search = (array: number[], key: number) => {
  const initialLeft = 0;
  const initialRight = array.length - 1;

  const helper = (left: number, right: number): number => {
    // base case
    if (left > right) {
      return -1;
    }

    const middle = Math.floor((left + right) / 2);

    if (key < array[middle]) {
      return helper(left, middle - 1);
    }

    if (key > array[middle]) {
      return helper(middle + 1, right);
    }

    return middle;
  };

  return helper(initialLeft, initialRight);
};

export default search;
