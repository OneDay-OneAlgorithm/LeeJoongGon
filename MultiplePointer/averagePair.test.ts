import averagePair from './averagePair';

describe('averagePair', () => {
  it('배열에 목표 평균과 같은 값의 쌍이 있으면 true 반환', () => {
    const numbers = [1, 2, 3, 4, 5];
    const targetAverage = 3;
    expect(averagePair(numbers, targetAverage)).toBe(true);
  });

  it('배열에 목표 평균과 값은 값의 쌍이 없다면 false 반환', () => {
    const numbers = [1, 2, 3, 4, 5];
    const targetAverage = 10;
    expect(averagePair(numbers, targetAverage)).toBe(false);
  });

  it('배열이 비어있다면 false 반환', () => {
    const numbers: number[] = [];
    const targetAverage = 5;
    expect(averagePair(numbers, targetAverage)).toBe(false);
  });
});
