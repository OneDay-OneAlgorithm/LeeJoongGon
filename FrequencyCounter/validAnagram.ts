// Problem
// 두 문자열이 주어졌을 때, 두 번째 문자열이 첫 번째 문자열의 애너그램인지 확인하는 validAnagram 함수를 작성하라.

// Input
// 소문자 알파벳으로 이루어진 두 단어 `first`, `second`

// Output
// 두 번째 문자열이 첫 번째 문자열의 애너그램이라면 true
// 그렇지 않다면 false

// 각 문자열을 구성하는 문자의 빈도를 저장할 객체를 생성
// 각 문자열을 순회하면서 객체에 문자의 빈도를 저장
// 첫 번째 객체를 순회하면서
//// 첫 번째 객체의 문자가 두 번째 객체에도 존재하고, 빈도가 동일하면 true 반환
//// 그렇지 않다면 false 반환
// 첫 번째 객체를 정상적으로 순회했다면, true 반환

const validAnagram = (first: string, second: string): boolean => {
  const firstMap = new Map();
  const secondMap = new Map();

  [...first].forEach((char) => {
    firstMap.set(char, (firstMap.get(char) || 0) + 1);
  });

  [...second].forEach((char) => {
    secondMap.set(char, (secondMap.get(char) || 0) + 1);
  });

  for (const [char, frequency] of firstMap) {
    if (!secondMap.has(char)) {
      return false;
    }

    if (secondMap.get(char) !== frequency) {
      return false;
    }
  }

  return true;
};

export default validAnagram;
