import fib from './fib';

describe('fib', () => {
  it('주어진 수에 해당하는 피보나치 수를 반환', () => {
    expect(fib(0)).toBe(1);
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(2);
    expect(fib(3)).toBe(3);
    expect(fib(4)).toBe(5);
    expect(fib(5)).toBe(8);
  });
});
