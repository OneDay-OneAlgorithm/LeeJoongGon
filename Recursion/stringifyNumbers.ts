// Problem
// 객체에서 숫자인 모든 값을 찾아 문자열로 변환하는 `stringifyNumbers`라는 함수를 작성하라.

// Input
// 숫자, 문자열, 불리언, 객체를 값으로 가지는 객체 `input`

// Output
// 객체에서 숫자인 모든 값을 문자열로 변환한 객체

// 새로운 객체 변수 생성
// Object.entries() 메서드로 객체를 순회하면서
/// 값이 숫자인 경우 문자열로 바꿔서 새로운 객체에 저장
/// 값이 객체인 경우 함수를 재귀호출한 결과를 새로운 객체에 저장
/// 그 외 다른 값인 경우 그대로 새로운 객체에 저장
// 새로운 객체를 반환

type Value = number | string | boolean | Obj;
interface Obj {
  [key: string]: Value;
}

const stringifyNumbers = (input: Obj): Obj => {
  const stringify: Obj = {};

  Object.entries(input).forEach(([key, value]) => {
    if (typeof value === 'number') {
      stringify[key] = String(value);
    } else if (typeof value === 'object') {
      stringify[key] = stringifyNumbers(value);
    } else {
      stringify[key] = value;
    }
  });

  return stringify;
};

export default stringifyNumbers;
