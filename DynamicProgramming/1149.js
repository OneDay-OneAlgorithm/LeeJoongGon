const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const size = Number(input[0]);

const solution = () => {
  // 첫 번째 집을 칠하는 비용으로 distance를 초기화
  let distance = input[1].split(' ').map(Number);
  // 두 번째 집부터 마지막 집까지 반복
  for (let i = 2; i <= size; i++) {
    const distanceCopy = [...distance];
    const temp = input[i].split(' ').map(Number);

    distance = distance.map((_, distanceIndex) => {
      // 이전 집과 같은 색을 칠할 수 없으므로, 이전 집의 색을 제외한 최솟값을 계산
      const prevMin = Math.min(
        ...distanceCopy.filter((_, tempIndex) => tempIndex !== distanceIndex),
      );
      // 현재 집을 칠할 비용 + 이전 집의 색을 제외한 최솟값
      return temp[distanceIndex] + prevMin;
    });
  }

  // 최솟값 출력
  const min = Math.min(...distance);
  console.log(min);
};

solution();
