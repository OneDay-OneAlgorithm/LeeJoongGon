import flatten from './flatten';

describe('flatten', () => {
  it('중첩된 배열을 평탄화시킨 배열을 반환', () => {
    const input = [1, [2, [3, 4], 5], 6];
    const expectedOutput = [1, 2, 3, 4, 5, 6];

    expect(flatten(input)).toEqual(expectedOutput);
  });

  it('빈 배열이 입력으로 들어올 경우 빈 배열 반환', () => {
    const input: any[] = [];
    const expectedOutput: any[] = [];

    expect(flatten(input)).toEqual(expectedOutput);
  });

  it('이미 평탄화된 배열이 입력으로 들어올 경우 해당 배열을 반환', () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 2, 3, 4, 5];

    expect(flatten(input)).toEqual(expectedOutput);
  });
});
