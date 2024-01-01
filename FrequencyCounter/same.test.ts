import same from './same';

describe('same', () => {
  it('두 번째 배열에 동일한 빈도로 첫 번째 배열에 있는 각 요소의 제곱이 포함되면 true 반환', () => {
    const first = [1, 2, 3];
    const second = [1, 4, 9];
    expect(same(first, second)).toBe(true);
  });

  it('두 번째 배열에 첫 번째 배열과 동일한 빈도로 값이 등장하지만 첫 번째 배열의 제곱이 아닐 경우 false 반환', () => {
    const first = [1, 2, 3];
    const second = [1, 4, 8];
    expect(same(first, second)).toBe(false);
  });

  it('두 번째 배열에 첫 번째 배열과 동일하지 않은 빈도로 값이 등장하지만 첫 번째 배열의 제곱일 경우 false 반환', () => {
    const first = [1, 2, 3];
    const second = [1, 4, 9, 9];
    expect(same(first, second)).toBe(false);
  });
});
