// Problem
// 문자열의 역순인 문자열을 반환하는 `reverse` 함수를 작성하라.

// Input
// 알파벳으로 이루어진 문자열 `string`

// Output
// 주어진 문자열의 역순인 문자열을 반환

// 문자열의 길이가 2보다 작을 경우 해당 문자열을 반환 (base case)
// 문자열의 마지막 문자와 해당 문자를 제외한 문자열로 함수를 재귀호출한 결과를 더한 값을 반환

const reverse = (string: string): string => {
  if (string.length < 2) {
    return string;
  }

  return string[string.length - 1] + reverse(string.slice(0, string.length - 1));
};

export default reverse;
