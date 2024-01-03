import countUniqueValues from './countUniqueValues';

describe('countUniqueValues', () => {
  it('정렬된 배열의 고유한 값의 개수를 반환한다.', () => {
    expect(countUniqueValues([1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
  });

  it('배열의 길이가 1이라면 1을 반환한다.', () => {
    expect(countUniqueValues([1])).toBe(1);
    expect(countUniqueValues([-5])).toBe(1);
    expect(countUniqueValues([0])).toBe(1);
  });

  it('빈 배열이 입력으로 들어오면 0을 반환한다.', () => {
    expect(countUniqueValues([])).toBe(0);
  });
});
