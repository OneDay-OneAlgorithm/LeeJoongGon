import isSubsequence from './isSubsequence';

describe('isSubsequence', () => {
  it('첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함된다면 true 반환', () => {
    expect(isSubsequence('abc', 'abracadabra')).toBe(true);
    expect(isSubsequence('ace', 'badcfe')).toBe(true);
    expect(isSubsequence('xyz', 'xyz')).toBe(true);
    expect(isSubsequence('a b', 'a b c')).toBe(true);
    expect(isSubsequence('a b', 'a b')).toBe(true);
  });

  it('첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되지 않는다면 false 반환', () => {
    expect(isSubsequence('abc', 'def')).toBe(false);
    expect(isSubsequence('ace', 'bdf')).toBe(false);
    expect(isSubsequence('xyz', 'abc')).toBe(false);
    expect(isSubsequence('a b', 'c d')).toBe(false);
    expect(isSubsequence('a b', 'a')).toBe(false);
  });
});
