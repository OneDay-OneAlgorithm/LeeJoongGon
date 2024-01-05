// Problem
// 문자열에서 고유한 문자만 포함하는 가장 긴 하위 문자열의 길이를 반환

// Input
// 공백을 포함하지 않는 문자열 `string`

// Output
// `string`에서 고유한 문자만을 포함하는 가장 긴 하위 문자열의 길이

// 윈도우의 양 끝을 가리킬 변수 `start`, `end` 생성
// 윈도우 안 요소들의 빈도를 저장할 객체 생성
// 가장 긴 하위 문자열의 길이를 저장할 변수 `maxLen` 생성
// `end`가 문자열의 길이보다 커질 때까지 반복
/// 마지막에 윈도우에 추가된 요소가 기존 윈도우 내 요소들과 중복이 아니라면
/// // 새로 추가된 요소의 인덱스를 객체에 저장
/// // 현재 윈도우의 크기가 기존 `maxLen`보다 크다면 `maxLen` 값을 업데이트
/// // `end` 값을 1 증가시킴(윈도우 크기를 늘림)
/// 마지막에 윈도우에 추가된 요소가 기존 윈도우 내 요소들과 중복이라면
/// // `start` 값을 중복이 발생한 기존 윈도우 내 요소의 인덱스 + 1로 업데이트
/// // `end` 값을 중복이 발생한 기존 윈도우 내 요소의 인덱스 + 1로 업데이트
/// // 요소들의 빈도를 저장하는 객체를 초기화
// 반복이 종료되면 `maxLen` 값을 반환

const findLongestSubString = (string: string): number => {
  let start = 0;
  let end = 0;
  let maxLen = -Infinity;
  const map = new Map<string, number>();

  while (end < string.length) {
    const nextChar = string[end];
    // 중복 발생
    if (map.has(nextChar)) {
      start = map.get(nextChar)! + 1;
      end = map.get(nextChar)! + 1;
      map.clear();
      continue;
    }

    // 중복 발생X
    map.set(nextChar, end);
    maxLen = Math.max(maxLen, end - start + 1);
    end += 1;
  }

  return maxLen === -Infinity ? 0 : maxLen;
};

export default findLongestSubString;
