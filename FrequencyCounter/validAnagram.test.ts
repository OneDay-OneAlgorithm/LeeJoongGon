import validAnagram from './validAnagram';

describe('validAnagram', () => {
  it('두 문자열이 모두 빈 문자열일 경우 true 반환', () => {
    const first = '';
    const second = '';
    expect(validAnagram(first, second)).toBe(true);
  });

  it('두 문자열이 애너그램인 경우 true 반환', () => {
    const first = 'anagram';
    const second = 'nagaram';
    expect(validAnagram(first, second)).toBe(true);
  });

  it('두 문자열이 애너그램이 아닌 경우 false 반환', () => {
    const first = 'rat';
    const second = 'car';
    expect(validAnagram(first, second)).toBe(false);
  });
});
