import capitalizeFirst from './capitalizeFirst';

describe('capitalizeFirst', () => {
  it('배열의 각 문자열의 첫 번째 문자를 대문자로 바꾼 문자열로 이루어진 배열을 반환', () => {
    const input = ['hello', 'world', 'github', 'copilot'];
    const expected = ['Hello', 'World', 'Github', 'Copilot'];

    const result = capitalizeFirst(input);

    expect(result).toEqual(expected);
  });

  it('배열이 비어있을 경우 빈 배열을 반환', () => {
    const input: string[] = [];
    const expected: string[] = [];

    const result = capitalizeFirst(input);

    expect(result).toEqual(expected);
  });

  it('하나의 문자로 이루어진 배열이 주어질 경우 각 문자를 대문자로 바꾸어서 반환', () => {
    const input = ['a', 'b', 'c'];
    const expected = ['A', 'B', 'C'];

    const result = capitalizeFirst(input);

    expect(result).toEqual(expected);
  });
});
