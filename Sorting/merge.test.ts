import { merge } from './mergeSort';

describe('merge', () => {
  it('두 정렬된 배열을 병합한 새로운 정렬된 배열을 반환', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const merged = merge(arr1, arr2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('두 배열이 모두 빈 배열일 경우 빈 배열을 반환', () => {
    const arr1: number[] = [];
    const arr2: number[] = [];
    const merged = merge(arr1, arr2);
    expect(merged).toEqual([]);
  });

  it('한 배열이 빈 배열일 경우 나머지 배열을 그대로 반환', () => {
    const arr1 = [1, 2, 3];
    const arr2: number[] = [];
    const merged = merge(arr1, arr2);
    expect(merged).toEqual([1, 2, 3]);
  });

  it('다른 길이의 배열이 입력으로 들어올 경우 병합한 새로운 배열을 반환', () => {
    const arr1 = [1, 3, 5, 7];
    const arr2 = [2, 4];
    const merged = merge(arr1, arr2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 7]);
  });
});
