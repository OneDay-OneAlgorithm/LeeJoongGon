import minSubArrayLen from './minSubArrayLen';

describe('minSubArrayLen', () => {
  it('합이 함수에 전달된 정수보다 크거나 같은 하위 배열의 최소 길이를 반환', () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
    expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
    expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5);
    expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toBe(2);
  });

  it('합이 함수에 전달된 정수보다 크거나 같은 하위 배열이 존재하지 않으면 0 반환', () => {
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0);
    expect(minSubArrayLen([1, 2, 3, 4, 5], 100)).toBe(0);
    expect(minSubArrayLen([], 5)).toBe(0);
  });
});
