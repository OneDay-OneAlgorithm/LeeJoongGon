// Problem
// 중첩된(nested) 객체를 포함할 수 있는 객체에서 모든 짝수의 합계를 반환하는 `nestedEvenSum` 함수를 작성하라.

// Input
// 중첩된 객체를 포함할 수 있고, 음이 아닌 정수와 문자열, boolean 타입을 값으로 가지는 객체 `input`

// Output
// 객체 안 모든 짝수들의 합계를 반환

// 짝수들의 합을 저장할 변수 `sum` 생성
// 실제로 작업을 수행할 `helper` 메서드 작성
/// Object.values() 메서드를 이용하여 객체의 값들을 배열로 변환
/// 배열의 길이가 0일 경우 return (base case)
/// 배열의 첫번째 원소의 타입이 `number`이고 짝수일 경우 `sum`에 더함
/// 배열의 첫번째 원소의 타입이 `object`일 경우 Object.values() 메서드로 배열로 바꾼 후 `helper` 함수를 재귀호출
/// 배열의 첫번째 원소를 제외한 배열로 `helper` 함수를 재귀호출
// 원본 객체를 Object.values() 메서드로 배열로 바꾼 후 `helper` 함수를 호출
// `sum`을 반환

type Value = number | string | boolean | Obj;
type Obj = {
  [key: string]: Value;
};

const nestedEvenSum = (input: Obj): number => {
  let sum = 0;

  const helper = (array: Value[]): void => {
    if (array.length === 0) {
      return;
    }

    if (typeof array[0] === 'number' && array[0] % 2 === 0) {
      sum += array[0];
    } else if (typeof array[0] === 'object') {
      helper(Object.values(array[0]));
    }

    helper(array.slice(1));
  };

  helper(Object.values(input));

  return sum;
};

export default nestedEvenSum;
