// Problem
// 배열에서 특정 요소의 인덱스를 찾는 `linearSearch` 함수 작성 (O(n))

// Input
// 문자열 배열 또는 숫자 배열 `array`, 문자열 또는 숫자 `value`

// Output
// `array` 배열에서 `value`의 인덱스를 찾아서 반환
// 만약 배열에 없다면 -1 반환

// 배열을 순회하면서 `value`와 같은 요소가 있는지 확인
/// `value`와 같은 요소가 있다면 해당 인덱스 반환
// 배열을 모두 순회했다면 -1 반환

const linearSearch = (array: number[] | string[], value: number | string): number => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
};

export default linearSearch;
