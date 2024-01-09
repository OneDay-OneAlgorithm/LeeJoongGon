import someRecursive from './someRecursive';

describe('someRecursive', () => {
  it('콜백 함수의 반환 값이 `true`인 요소가 하나라도 있다면 `true` 반환', () => {
    const array = [1, 2, 3, 4, 5];
    const callback = (element: number) => element % 2 === 0;
    expect(someRecursive(array, callback)).toBe(true);
  });

  it('콜백 함수의 반환 값이 `true`인 요소가 없다면 `false` 반환', () => {
    const array = [1, 3, 5, 7, 9];
    const callback = (element: number) => element % 2 === 0;
    expect(someRecursive(array, callback)).toBe(false);
  });

  it('배열이 비어있을 경우 `false` 반환', () => {
    const array: number[] = [];
    const callback = (element: number) => element % 2 === 0;
    expect(someRecursive(array, callback)).toBe(false);
  });
});
