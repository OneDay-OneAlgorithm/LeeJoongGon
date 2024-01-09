// Problem
// 전달된 인자 중 중복이 있는지 확인하는 `areThereDuplicates`라는 함수를 작성하라.

// Input
// 가변적인 수의 인자 (정수 또는 문자)

// Output
// 인자 중 중복이 있다면 true 반환
// 중복이 없다면 false 반환

// 전달된 인자로 이루어진 배열을 생성
// 배열 안 요소들의 빈도를 저장할 객체 생성
// 배열을 순회하면서
/// 요소가 이미 객체에 저장되어있다면 true 반환
/// 요소가 객체에 없다면 요소를 객체에 저장
// 정상적으로 배열을 순회했다면 false 반환

const areThereDuplicates = (...args: unknown[]): boolean => {
  const map = new Map();

  return args.some((value) => {
    if (map.has(value)) {
      return true;
    }

    map.set(value, true);
    return false;
  });
};

export default areThereDuplicates;
