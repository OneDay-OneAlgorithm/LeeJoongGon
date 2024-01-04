import sameFrequency from './sameFrequency';

describe('sameFrequency', () => {
  it('두 숫자의 자릿수가 다르다면 false 반환', () => {
    expect(sameFrequency(123, 1234)).toBe(false);
    expect(sameFrequency(1234, 123)).toBe(false);
  });

  it('두 숫자의 자릿수의 빈도가 같다면 true 반환', () => {
    expect(sameFrequency(123, 321)).toBe(true);
    expect(sameFrequency(123, 312)).toBe(true);
    expect(sameFrequency(123, 213)).toBe(true);
  });

  it('두 숫자의 자릿수의 빈도가 다르다면 false 반환', () => {
    expect(sameFrequency(123, 322)).toBe(false);
    expect(sameFrequency(123, 311)).toBe(false);
    expect(sameFrequency(123, 211)).toBe(false);
  });

  it('두 숫자가 같은 숫자라면 true 반환', () => {
    expect(sameFrequency(123, 123)).toBe(true);
    expect(sameFrequency(0, 0)).toBe(true);
    expect(sameFrequency(999, 999)).toBe(true);
  });
});
