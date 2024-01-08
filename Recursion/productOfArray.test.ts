import productOfArray from './productOfArray';

describe('productOfArray', () => {
  it('배열 안 모든 숫자의 곱을 반환', () => {
    expect(productOfArray([])).toBe(1);
    expect(productOfArray([1])).toBe(1);
    expect(productOfArray([2])).toBe(2);
    expect(productOfArray([2, 3])).toBe(6);
    expect(productOfArray([2, 3, 4])).toBe(24);
    expect(productOfArray([2, 3, 4, 5])).toBe(120);
  });
});
