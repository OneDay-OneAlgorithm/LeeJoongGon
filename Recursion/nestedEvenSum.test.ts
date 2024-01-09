import nestedEvenSum from './nestedEvenSum';

describe('nestedEvenSum', () => {
  it('중첩된 객체 안 모든 짝수의 합을 반환', () => {
    const input = {
      a: 2,
      b: {
        c: 4,
        d: {
          e: 6,
          f: {
            g: 8,
          },
        },
      },
      h: {
        i: 10,
        j: {
          k: 12,
        },
      },
    };

    const result = nestedEvenSum(input);

    expect(result).toBe(42);
  });

  it('객체 안에 짝수가 없는 경우 0을 반환', () => {
    const input = {
      a: 1,
      b: {
        c: 3,
        d: {
          e: 5,
          f: {
            g: 7,
          },
        },
      },
      h: {
        i: 9,
        j: {
          k: 11,
        },
      },
    };

    const result = nestedEvenSum(input);

    expect(result).toBe(0);
  });

  it('객체가 빈 객체일 경우 0을 반환', () => {
    const input = {};

    const result = nestedEvenSum(input);

    expect(result).toBe(0);
  });

  it('객체에 문자열과 boolean 타입의 값만 있을 경우 0을 반환', () => {
    const input = {
      a: 'hello',
      b: true,
      c: {
        d: 'world',
        e: false,
      },
    };

    const result = nestedEvenSum(input);

    expect(result).toBe(0);
  });
});
