import isPalindrome from './isPalindrome';

describe('isPalindrome', () => {
  it('주어진 문자열이 Palindrome일 경우 true 반환', () => {
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('aba')).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('madam')).toBe(true);
  });

  it('주어진 문자열이 Palindrome이 아닐 경우 false 반환', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
    expect(isPalindrome('algorithm')).toBe(false);
    expect(isPalindrome('typescript')).toBe(false);
    expect(isPalindrome('github')).toBe(false);
  });
});
