import findLongestSubString from './findLongestSubString';

describe('findLongestSubString', () => {
  it('중복되는 문자열이 없는 가장 긴 하위 문자열의 길이를 반환', () => {
    expect(findLongestSubString('')).toBe(0);
    expect(findLongestSubString('a')).toBe(1);
    expect(findLongestSubString('abcabcbb')).toBe(3);
    expect(findLongestSubString('bbbbb')).toBe(1);
    expect(findLongestSubString('pwwkew')).toBe(3);
    expect(findLongestSubString('abcdefg')).toBe(7);
  });
});
