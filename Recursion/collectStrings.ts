// Problem
// 객체 안의 모든 문자열을 찾아 문자열의 배열을 반환하는 `collectStrings`라는 함수를 작성하라.

// Input
// 문자열 또는 객체를 값으로 가지는 객체 `input`

// Output
// 객체 안 모든 문자열의 배열을 반환

// 문자열 배열 `strings` 변수 생성
// 실제로 작업을 수행할 `helper` 함수 작성
/// 입력으로 들어온 객체의 값들을 순회하면서
/// // 값이 문자열이라면 `strings` 배열에 push
/// // 값이 객체라면 해당 객체로 `helper` 함수를 재귀호출
// 원본 객체로 `helper` 함수를 호출
// `strings` 배열을 반환

interface Obj {
  [key: string]: string | Obj;
}

const collectStrings = (input: Obj): string[] => {
  const strings: string[] = [];

  const helper = (object: Obj) => {
    Object.values(object).forEach((value) => {
      if (typeof value === 'string') {
        strings.push(value);
      }

      if (typeof value === 'object') {
        helper(value);
      }
    });
  };

  helper(input);

  return strings;
};

export default collectStrings;
