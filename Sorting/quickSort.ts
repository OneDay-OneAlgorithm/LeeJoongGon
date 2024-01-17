// Problem
// 배열의 원소를 오름차순으로 정렬하는 `insertionSort` 함수 작성

// Input
// 임의의 정수 배열 `array`, 배열의 시작 인덱스 `start`, 배열의 끝 인덱스 `end`

// Output
// 베열 안 정수를 오름차순으로 정렬한 배열

// 전체 배열에 대해서 partition 함수를 호출한 결과로 `pivotIndex` 값을 초기화
// 해당 피벗의 왼쪽에 있는 배열과 피벗의 오른쪽에 있는 배열로 `partition` 함수를 재귀적으로 호출
// `start`가 `end`보다 크거나 같을 경우 해당 배열을 반환 (base case)

const partition = (array: number[], start: number, end: number): number => {
  const pivot = array[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (array[i] < pivot) {
      swapIndex += 1;
      [array[swapIndex], array[i]] = [array[i], array[swapIndex]];
    }
  }

  [array[start], array[swapIndex]] = [array[swapIndex], array[start]];

  return swapIndex;
};

const quickSort = (array: number[], start = 0, end = array.length - 1): number[] => {
  if (start < end) {
    const pivotIndex = partition(array, start, end);

    quickSort(array, start, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, end);
  }

  return array;
};

export { partition, quickSort };
