// Problem
// 문자열이 팔린드롬(앞으로 읽으나 뒤로 읽으나 동일한 문자)인지 확인하는 `isPalindrome`이라는 함수를 작성하라.

// Input
// 알파벳으로 이루어진 문자열 `string`

// Output
// 문자열이 팔린드롬일 경우 `true`,
// 팔린드롬이 아닐 경우 `false` 반환

// 문자열의 길이가 2보다 작다면 true 반환 (base case)
// 문자열의 양 끝 글자가 다르다면 false 반환
// 문자열의 양 끝 글자가 같다면,
/// 양 끝 글자를 제외한 문자열로 함수를 재귀호출한 결과를 반환

const isPalindrome = (string: string): boolean => {
  if (string.length < 2) {
    return true;
  }

  const firstChar = string[0];
  const lastChar = string[string.length - 1];

  if (firstChar !== lastChar) {
    return false;
  }

  return isPalindrome(string.slice(1, string.length - 1));
};

export default isPalindrome;
