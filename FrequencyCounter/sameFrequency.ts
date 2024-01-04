// Problem
// 두 숫자의 자릿수가 같은 빈도를 갖는지 확인하는 sameFrequency 함수를 작성하라.

// Input
// 두 양의 정수 `first`, `second`

// Output
// 두 숫자의 자릿수가 같은 빈도를 갖는다면 true 반환
// 두 숫자의 자릿수가 다른 빈도를 갖는다면 false 반환

// 두 숫자의 자릿수가 다르다면 false 반환
// 각 숫자의 자릿수의 빈도를 저장할 객체 생성
// 각 숫자를 순회하면서 자릿수의 빈도를 객체에 저장
// 한 객체를 순회하면서
/// 해당 자릿수가 다른 객체에 존재하지 않거나 빈도가 다르다면 false 반환
// 정상적으로 객체의 순회를 종료했다면 true 반환

const sameFrequency = (first: number, second: number): boolean => {
  if (first.toString().length !== second.toString().length) {
    return false;
  }

  const firstMap = new Map();
  const secondMap = new Map();

  [...first.toString()].forEach((value) => {
    firstMap.set(value, (firstMap.get(value) || 0) + 1);
  });

  [...second.toString()].forEach((value) => {
    secondMap.set(value, (secondMap.get(value) || 0) + 1);
  });

  return Array.from(firstMap).every(([key, value]) => {
    if (!secondMap.has(key)) {
      return false;
    }

    if (secondMap.get(key) !== value) {
      return false;
    }

    return true;
  });
};

export default sameFrequency;
