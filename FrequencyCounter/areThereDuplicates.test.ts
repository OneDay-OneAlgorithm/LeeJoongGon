import areThereDuplicates from './areThereDuplicates';

describe('areThereDuplicates', () => {
  it('인자들 중 중복된 요소가 있다면 true 반환', () => {
    expect(areThereDuplicates(1, 2, 3, 4, 4)).toBe(true);
    expect(areThereDuplicates('a', 'b', 'c', 'c')).toBe(true);
    expect(areThereDuplicates(true, false, true)).toBe(true);
  });

  it('인자들 중 중복된 요소가 없다면 false 반환', () => {
    expect(areThereDuplicates(1, 2, 3, 4)).toBe(false);
    expect(areThereDuplicates('a', 'b', 'c')).toBe(false);
    expect(areThereDuplicates(true, false)).toBe(false);
  });
});
