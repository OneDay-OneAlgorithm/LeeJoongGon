// Problem
// 배열의 원소를 오름차순으로 정렬하는 `bubbleSort` 함수 작성

// Input
// 임의의 정수 배열 `array`

// Output
// 정수를 오름차순으로 정렬한 배열을 반환

// 배열의 끝에서 시작하여 앞까지 감소하는 변수 `i`를 만들어 반복 수행
/// 배열의 앞에서 `i`까지 증가하는 변수 `j`를 만들어 반복 수행
/// // arr[j], arr[j + 1]을 비교하여 arr[j]가 더 크다면, 두 요소의 위치를 변경

const swap = (array: number[], index1: number, index2: number) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const bubbleSort = (array: number[]): number[] => {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
};

export default bubbleSort;
