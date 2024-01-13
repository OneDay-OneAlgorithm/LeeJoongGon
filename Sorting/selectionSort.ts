// Problem
// 배열의 원소를 오름차순으로 정렬하는 `selectionSort` 함수 작성

// Input
// 임의의 정수 배열 `array`

// Output
// 정수를 오름차순으로 정렬한 배열을 반환

// 배열의 앞에서 시작하여 끝까지 증가하는 변수 `i`를 만들어 반복 수행
// 최솟값을 가리킬 포인터 변수 `min`을 생성하고 `i`로 초기화
/// `i + 1`부터 배열의 끝까지 증가하는 변수 `j`를 만들어 반복 수행
/// // `j`가 가리키는 값이 `min`이 가리키는 값보다 작다면 `min`의 값을 `j`로 업데이트
/// 반복이 끝난후 `i`와 `min`의 값이 다르다면 `i`가 가리키는 요소와 `min`이 가리키는 요소의 위치를 바꿈
// 반복이 종료되었다면, `array` 반환

const swap = (array: number[], index1: number, index2: number) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const selectionSort = (array: number[]): number[] => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (i !== min) {
      swap(array, i, min);
    }
  }

  return array;
};

export default selectionSort;
