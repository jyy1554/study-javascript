// https://programmers.co.kr/learn/courses/30/lessons/42842

// 카펫

function solution(B, Y) {
  // 정답 후보는 B * Y의 약수 pair들 중 하나
  // B = (가로 + 세로) * 2 - 4
  // Y = 가로 * 세로 - B
  for (let i=2; i <= Math.sqrt(B+Y); i++) {   // i=1일때는 정답이 될 수 없음
      if ((B+Y) % i == 0) {
          const width = (B+Y) / i;
          const height = i;
          
          if (B == (width + height) * 2 - 4) return [width, height];
      }
  }
}