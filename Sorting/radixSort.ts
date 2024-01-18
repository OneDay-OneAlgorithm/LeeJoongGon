// Problem
// 배열의 원소를 오름차순으로 정렬하는 `insertionSort` 함수 작성

// Input
// 임의의 정수 배열 `array`

// Output
// 베열 안 정수를 오름차순으로 정렬한 배열

// 숫자 배열을 받아 가장 자릿수가 큰 숫자의 자릿수를 계산
// k = 0부터 가장 큰 자릿수까지 반복
/// 각 숫자(0 ~ 9)에 대해 버킷(빈 배열) 생성
/// 배열의 각 숫자를 k번째 자릿수를 기준으로 버킷에 배치
// 정렬된 배열을 반환

const getDigit = (num: number, place: number) => Math.floor(Math.abs(num) / 10 ** place) % 10;

const digitCount = (num: number) => {
  if (num === 0) {
    return 1;
  }

  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (num: number[]) => Math.max(...num.map(digitCount));

const radixSort = (array: number[]) => {
  const maxDigit = mostDigits(array);

  for (let k = 0; k < maxDigit; k++) {
    const buckets: number[][] = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < array.length; i++) {
      const digit = getDigit(array[i], k);
      buckets[digit].push(array[i]);
    }

    array = buckets.flat();
  }

  return array;
};

export default radixSort;
