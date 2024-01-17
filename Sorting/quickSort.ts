// Problem
// 배열의 원소를 오름차순으로 정렬하는 `insertionSort` 함수 작성

// Input
// 임의의 정수 배열 `array`

// Output
// 베열 안 정수를 오름차순으로 정렬한 배열

// 전체 배열에 대해서 partition 함수를 호출한 결과로 `pivotIndex` 값을 초기화
// 해당 피벗의 왼쪽에 있는 배열과 피벗의 오른쪽에 있는 배열로 `partition` 함수를 재귀적으로 호출

const partition = (array: number[], start: number, end: number): number => {
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (array[i] < array[pivotIndex]) {
      pivotIndex += 1;
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
    }
  }

  [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];

  return pivotIndex;
};

const quickSort = (array: number[], start = 0, end = array.length): number[] => {
  const pivotIndex = partition(array, start, end);

  quickSort(array, start, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, end);
};

export { partition, quickSort };
