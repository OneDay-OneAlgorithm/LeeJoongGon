import linearSearch from './linearSearch';

describe('linearSearch', () => {
  it('배열에서 특정 요소의 인덱스를 반환', () => {
    expect(linearSearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(linearSearch(['apple', 'banana', 'orange'], 'banana')).toBe(1);
  });

  it('배열에 특정 요소가 없다면 `-1`을 반환', () => {
    expect(linearSearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(linearSearch(['apple', 'banana', 'orange'], 'grape')).toBe(-1);
  });
});
