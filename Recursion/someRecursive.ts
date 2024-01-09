// Problem
// 배열과 콜백 함수를 받아 배열의 모든 원소가 콜백에 전달될 때 `true`를 반환하는 원소가 있는지 확인하는 `someRecursive` 함수를 작성하라.

// Input
// 배열 `array`, 배열 안 원소를 매개변수로 가지고 `boolean` 타입의 값을 반환하는 콜백 함수 `callback`

// Output
// 배열의 모든 원소를 콜백 함수에 전달하고 콜백 함수의 반환 값이 `true`인 원소가 한개라도 있다면 `true` 반환
// 콜백 함수의 반환 값이 `true`인 원소가 없다면 `false` 반환

// `array`의 길이가 0이라면 `false` 반환 (base case)
// `array`의 첫 번째 요소를 인자로 콜백 함수를 호출한 결과가 `true`라면 `true` 반환
// `array`의 첫 번째 요소를 인자로 콜백 함수를 호출한 결과가 `false`라면 첫 번째 요소를 제외한 배열로 함수를 재귀호출한 결과를 반환

type CallbackFn = (element: any) => boolean;
type SomeRecursiveFn = (array: any[], callback: CallbackFn) => boolean;

const someRecursive: SomeRecursiveFn = (array, callback) => {
  if (array.length === 0) {
    return false;
  }

  if (callback(array[0])) {
    return true;
  }

  return someRecursive(array.slice(1), callback);
};

export default someRecursive;
