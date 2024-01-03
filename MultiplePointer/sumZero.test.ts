import sumZero from './sumZero';

describe('sumZero', () => {
  it('배열에 합이 0인 두 수가 여러 개 존재하는 경우, 첫 번째로 발견된 두 수를 반환한다', () => {
    const array = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
    expect(sumZero(array)).toEqual([-4, 4]);
  });

  it('배열에 합이 0인 두 수가 존재하지 않는 경우, undefined를 반환한다', () => {
    const array = [-4, -3, -2, -1, 5, 6, 7, 8];
    expect(sumZero(array)).toBeUndefined();
  });

  it('배열이 빈 배열인 경우, undefined를 반환한다', () => {
    const array: number[] = [];
    expect(sumZero(array)).toBeUndefined();
  });
});
