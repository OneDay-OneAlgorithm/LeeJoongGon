// Problem
// 두 배열을 받아 첫 번째 배열의 모든 값을 제곱한 값을 두 번째 배열이 가지고 있다면 true를 반환
// 단, 값의 빈도는 동일

// Input
// 양의 정수를 원소로 가지는 두 배열 `first`, `second`

// Output
// 첫 번째 배열의 모든 값을 제곱한 값을 두 번째 배열이 가지고 있다면 true,
// 그렇지 안다면 false

// 각 배열 안 원소들의 빈도를 저장할 객체를 생성
// 각 배열을 순회하면서 객체에 원소들의 빈도를 저장
// 첫 번째 객체를 순회하면서
/// 객체의 원소를 제곱한 값이 두 번째 객체에 존재하고, 빈도가 일치하는지 확인
/// 그렇지 않다면 false 반환
// 첫 번째 객체를 정상적으로 순회했다면, true 반환

const same = (first: number[], second: number[]) => {
  const firstMap = new Map<number, number>();
  const secondMap = new Map<number, number>();

  first.forEach((element) => {
    firstMap.set(element, (firstMap.get(element) || 0) + 1);
  });

  second.forEach((element) => {
    secondMap.set(element, (secondMap.get(element) || 0) + 1);
  });

  for (const [key, value] of firstMap) {
    const squared = key * key;
    if (!secondMap.has(squared)) {
      return false;
    }

    if (secondMap.get(squared) !== value) {
      return false;
    }
  }

  return true;
};

export default same;
