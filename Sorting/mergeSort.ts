// Problem
// 배열의 원소를 오름차순으로 정렬하는 `mergeSort` 함수 작성

// Input
// 임의의 정수 배열 `array`

// Output
// 베열 안 정수를 오름차순으로 정렬한 배열

// 배열의 길이가 2보다 작을 경우 해당 배열을 반환 (base case)
// 배열의 왼쪽 반절에 해당하는 배열로 함수를 재귀호출한 결과를 `leftHalf` 변수에 저장
// 배열의 오른쪽 반절에 해당하는 배열로 함수를 재귀호출한 결과를 `rightHalf` 변수에 저장
// `leftHalf`, `rightHalf` 배열로 `merge` 함수를 호출한 결과를 반환

const merge = (array1: number[], array2: number[]): number[] => {
  const merged: number[] = [];

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < array1.length && pointer2 < array2.length) {
    if (array1[pointer1] <= array2[pointer2]) {
      merged.push(array1[pointer1]);
      pointer1 += 1;
      continue;
    }

    if (array1[pointer1] > array2[pointer2]) {
      merged.push(array2[pointer2]);
      pointer2 += 1;
    }
  }

  if (pointer1 < array1.length) {
    for (let i = pointer1; i < array1.length; i++) {
      merged.push(array1[i]);
    }
  }

  if (pointer2 < array2.length) {
    for (let i = pointer2; i < array2.length; i++) {
      merged.push(array2[i]);
    }
  }

  return merged;
};

const mergeSort = (array: number[]): number[] => {
  if (array.length < 2) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0, middle));
  const rightHalf = mergeSort(array.slice(middle));

  return merge(leftHalf, rightHalf);
};

export { merge, mergeSort };
