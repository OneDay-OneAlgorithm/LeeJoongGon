import recursiveRange from './recursiveRange';

describe('recursiveRange', () => {
  it('0부터 주어진 숫자까지의 모든 정수의 합을 반환', () => {
    expect(recursiveRange(0)).toBe(0);
    expect(recursiveRange(1)).toBe(1);
    expect(recursiveRange(2)).toBe(3);
    expect(recursiveRange(3)).toBe(6);
    expect(recursiveRange(4)).toBe(10);
    expect(recursiveRange(5)).toBe(15);
  });
});
