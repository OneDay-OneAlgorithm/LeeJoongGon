import capitalizeWords from './capitalizeWords';

describe('capitalizeWords', () => {
  it('배열의 각 문자열을 대문자로 바꾼 새로운 문자열을 반환', () => {
    const input = ['hello', 'world', 'github', 'copilot'];
    const expected = ['HELLO', 'WORLD', 'GITHUB', 'COPILOT'];

    const result = capitalizeWords(input);

    expect(result).toEqual(expected);
  });

  it('배열이 빈 배열일 경우 비어있는 배열을 반환', () => {
    const input: string[] = [];
    const expected: string[] = [];

    const result = capitalizeWords(input);

    expect(result).toEqual(expected);
  });
});
