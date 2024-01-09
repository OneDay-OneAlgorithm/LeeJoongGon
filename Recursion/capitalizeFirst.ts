// Problem
// 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 `capitalizeFirst` 함수를 작성하라.

// Input
// 문자열로 이루어진 배열 `input`

// Output
// 배열의 각 문자열의 첫 글자를 대문자로 바꾼 문자열 배열

// helper method recursion
// 새로운 배열을 참조하는 변수 `capitalized` 생성
// 실제 작업을 수행하는 내부 함수 `helper` 함수 작성
/// `array`의 길이가 0이라면 return (base case)
/// `array`의 첫번째 원소의 첫 글자를 대문자로 바꾼 문자열을 `capitalized` 배열에 push
/// 첫번째 원소를 제외한 배열로 `helper` 함수를 재귀호출
// 원본 배열로 `helper` 함수를 호출
// `capitalized` 배열 반환

const capitalizeFirst = (input: string[]): string[] => {
  const capitalized: string[] = [];

  const helper = (array: string[]): void => {
    if (array.length === 0) {
      return;
    }

    const firstString = array[0];
    const firstChar = firstString[0];
    capitalized.push(firstChar.toUpperCase() + firstString.slice(1));

    helper(array.slice(1));
  };

  helper(input);

  return capitalized;
};

export default capitalizeFirst;
