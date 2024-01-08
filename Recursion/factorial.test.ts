import factorial from './factorial';

describe('factorial', () => {
  it('해당 숫자의 팩토리얼을 반환', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
  });
});
