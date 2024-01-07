import power from './power';

describe('power', () => {
  it('밑을 거듭제곱한 결과를 반환', () => {
    expect(power(2, 0)).toBe(1);
    expect(power(2, 1)).toBe(2);
    expect(power(2, 2)).toBe(4);
    expect(power(3, 3)).toBe(27);
    expect(power(5, 4)).toBe(625);
  });
});
