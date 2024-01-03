// Problem
// 배열의 고유한 값의 개수를 세는 `countUniqueValues`라는 함수를 작성하라.

// Input
// 정렬된 정수 배열 `array`

// Output
// 배열의 고유한 값의 개수를 나타내는 음수가 아닌 정수 `unique`

// 배열의 왼쪽 끝과 그 오른쪽을 가리키는 포인터 2개 생성
// 배열의 길이가 2보다 작다면
//// 배열의 길이를 반환
// 오른쪽을 가리키는 포인터가 배열의 끝에 도달할 때까지 반복
//// 두 포인터가 가리키는 값이 같다면
////// 오른쪽을 가리키는 포인터를 1 증가시킴
//// 두 포인터가 가리키는 값이 다르다면
////// 왼쪽 끝을 가리키는 포인터를 1 증가시킴
////// 오른쪽 포인터가 가리키는 값을 왼쪽 포인터가 가리키는 위치로 복사
// 반복이 종료되었다면, 왼쪽 포인터 값 + 1을 반환

const countUniqueValues = (array: number[]) => {
  let left = 0;
  let right = 1;

  if (array.length < 2) {
    return array.length;
  }

  while (right < array.length) {
    const leftValue = array[left];
    const rightValue = array[right];

    if (leftValue === rightValue) {
      right += 1;
      continue;
    }

    left += 1;
    array[left] = array[right];
  }

  return left + 1;
};

// const countUniqueValuesWithSet = (array: number[]) => {
//   const set = new Set(array);
//   return set.size;
// };

export default countUniqueValues;
