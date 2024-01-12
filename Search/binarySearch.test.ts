import binarySearch from './binarySearch';

describe('binarySearch', () => {
  it('배열에서 특정 요소의 인덱스를 찾아서 반환', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch(['apple', 'banana', 'cherry', 'date'], 'banana')).toBe(1);
  });

  it('배열에 특정 요소가 없다면 `-1` 반환', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(binarySearch(['apple', 'banana', 'cherry', 'date'], 'grape')).toBe(-1);
  });
});
