import search from './search';

describe('search', () => {
  it('배열에서 특정 요소의 인덱스를 반환한다.', () => {
    expect(search([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(search([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it('배열이 비어있을 경우 -1을 반환한다.', () => {
    expect(search([], 3)).toBe(-1);
  });

  it('배열에 특정 요소가 없을 경우 -1을 반환한다.', () => {
    expect(search([1, 2, 3, 4, 5], 6)).toBe(-1);
  });
});
