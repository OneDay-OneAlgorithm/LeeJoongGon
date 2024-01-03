import maxSubArraySum from './maxSubArraySum';

describe('maxSubArraySum', () => {
  it('배열에서 연속된 n개의 요소의 합 중 최댓값을 반환한다.', () => {
    expect(maxSubArraySum([1, 2, 3, 4, 5], 2)).toBe(9);
    expect(maxSubArraySum([2, 3, 1, 5, 6], 3)).toBe(12);
    expect(maxSubArraySum([2, 3, 1, 5, 6], 1)).toBe(6);
    expect(maxSubArraySum([1, 2, 3, 4, 5], 5)).toBe(15);
  });

  it('배열의 길이가 n보다 작으면 null을 반환한다.', () => {
    expect(maxSubArraySum([1, 2, 3], 5)).toBeNull();
    expect(maxSubArraySum([1], 2)).toBeNull();
    expect(maxSubArraySum([], 1)).toBeNull();
  });
});
