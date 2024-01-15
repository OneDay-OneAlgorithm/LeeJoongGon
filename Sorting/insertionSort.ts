// Problem
// 배열의 원소를 오름차순으로 정렬하는 `insertionSort` 함수 작성

// Input
// 임의의 정수 배열 `array`

// Output
// 베열 안 정수를 오름차순으로 정렬한 배열

// 배열의 두 번째 요소부터 배열 끝까지 증가하는 변수 `i`를 만들어 반복
/// `i - 1`부터 0까지 감소하는 변수 `j`를 만들어 반복
/// // array[i]가 array[j] 보다 크거나 같다면
/// /// `j` 반복을 빠져 나옴
/// // array[i]가 array[j] 보디 작다면
/// /// array[j + 1]을 array[j]로 업데아트,
/// /// array[j]를 array[i]로 업데이트
// `array`를 반환

const insertionSort = (array: number[]): number[] => {
  for (let i = 1; i < array.length; i++) {
    const target = array[i];
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] <= target) {
        break;
      }

      array[j + 1] = array[j];
      array[j] = target;
    }
  }

  return array;
};

export default insertionSort;
