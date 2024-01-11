import collectStrings from './collectStrings';

describe('collectStrings', () => {
  it('빈 객체가 입력으로 들어올 경우 빈 배열을 반환', () => {
    const input = {};
    const result = collectStrings(input);
    expect(result).toEqual([]);
  });

  it('값이 문자열로만 이루어진 객체가 입력으로 들어올 경우 해당 문자열들의 배열을 반환', () => {
    const input = {
      key1: 'string1',
      key2: 'string2',
      key3: 'string3',
    };
    const result = collectStrings(input);
    expect(result).toEqual(['string1', 'string2', 'string3']);
  });

  it('중첩된 객체가 입력으로 들어올 경우 모든 객체 안의 문자열을 배열에 담아서 반환', () => {
    const input = {
      key1: 'string1',
      key2: {
        nestedKey1: 'string2',
        nestedKey2: {
          deeplyNestedKey: 'string3',
        },
      },
    };
    const result = collectStrings(input);
    expect(result).toEqual(['string1', 'string2', 'string3']);
  });
});
