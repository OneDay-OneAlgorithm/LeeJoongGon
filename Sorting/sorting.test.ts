import bubbleSort from './bubbleSort';
import bubbleSort2 from './bubbleSort2';
import selectionSort from './selectionSort';
import insertionSort from './insertionSort';
import { mergeSort } from './mergeSort';
import { quickSort } from './quickSort';

const functionsToTest = [
  { name: 'bubbleSort', func: bubbleSort },
  { name: 'bubbleSort2', func: bubbleSort2 },
  { name: 'selectionSort', func: selectionSort },
  { name: 'insertionSort', func: insertionSort },
  { name: 'mergeSort', func: mergeSort },
  { name: 'quickSort', func: quickSort },
];

describe.each(functionsToTest)('$name', ({ func }) => {
  it('배열의 요소를 오름차순으로 정렬한 배열을 반환', () => {
    const arr1 = [4, 2, 7, 1, 5];
    const sortedArr1 = func(arr1);
    expect(sortedArr1).toEqual([1, 2, 4, 5, 7]);

    const arr2 = [9, 3, 1, 8, 6];
    const sortedArr2 = func(arr2);
    expect(sortedArr2).toEqual([1, 3, 6, 8, 9]);

    const arr3 = [5, 2, 9, 6, 3];
    const sortedArr3 = func(arr3);
    expect(sortedArr3).toEqual([2, 3, 5, 6, 9]);
  });

  it('빈 배열이 입력으로 들어올 경우 빈 배열을 반환', () => {
    const arr: number[] = [];
    const sortedArr = func(arr);
    expect(sortedArr).toEqual([]);
  });

  it('이미 정렬된 배열이 입력으로 들어올 경우 해당 배열을 반환', () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = func(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });
});
