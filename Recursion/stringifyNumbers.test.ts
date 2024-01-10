import stringifyNumbers from './stringifyNumbers';

describe('stringifyNumbers', () => {
  it('객체에 있는 모든 숫자를 문자열로 변횐하여 반환', () => {
    const input = {
      a: 1,
      b: 'hello',
      c: true,
      d: {
        e: 2,
        f: {
          g: 3,
          h: 'world',
        },
      },
    };

    const expectedOutput = {
      a: '1',
      b: 'hello',
      c: true,
      d: {
        e: '2',
        f: {
          g: '3',
          h: 'world',
        },
      },
    };

    expect(stringifyNumbers(input)).toEqual(expectedOutput);
  });

  it('빈 객체인 경우 빈 객체를 반환', () => {
    const input = {};

    const expectedOutput = {};

    expect(stringifyNumbers(input)).toEqual(expectedOutput);
  });

  it('숫자가 없는 객체일 경우 그대로 반환', () => {
    const input = {
      a: 'hello',
      b: true,
      c: {
        d: 'world',
      },
    };

    const expectedOutput = {
      a: 'hello',
      b: true,
      c: {
        d: 'world',
      },
    };

    expect(stringifyNumbers(input)).toEqual(expectedOutput);
  });
});
