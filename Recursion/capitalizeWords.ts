// Problem
// 문자열 배열을 받아 각 문자열을 대문자로 바꾸는 `capitalizeWords` 함수를 작성하라.

// Input
// 문자열 배열 `input`

// Output
// 각 문자열을 대문자로 바꾼 새로운 배열

// 대문자로 바꾼 문자열을 저장할 새로운 배열 생성
// 실제 작업을 수행할 `helper` 함수 작성
/// 배열의 길이가 0이라면 return (base case)
/// 배열의 첫번째 원소인 문자열을 대문자로 바꾼 후 새로운 배열에 push
/// 배열의 첫번째 원소를 제외한 배열로 `helper` 함수를 재귀호출
// 원본 배열로 helper 함수를 호출
// 새로운 배열을 반환

const capitalizeWords = (input: string[]): string[] => {
  const capitalized: string[] = [];

  const helper = (array: string[]): void => {
    if (array.length === 0) {
      return;
    }

    capitalized.push(array[0].toUpperCase());

    helper(array.slice(1));
  };

  helper(input);

  return capitalized;
};

export default capitalizeWords;
