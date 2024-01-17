import { partition } from './quickSort';

describe('partition', () => {
  it('피벗을 배열의 올바른 위치에 오도록 요소를 재배치하고 피벗의 인덱스를 반환', () => {
    const arr = [4, 2, 7, 1, 5];
    const pivotIndex = partition(arr, 0, arr.length - 1);
    expect(pivotIndex).toBe(2);
    expect(arr).toEqual([1, 2, 4, 7, 5]);
  });

  it('길이가 1인 배열이 입력으로 들어오면 0을 반환', () => {
    const arr = [42];
    const pivotIndex = partition(arr, 0, arr.length - 1);
    expect(pivotIndex).toBe(0);
    expect(arr).toEqual([42]);
  });
});
