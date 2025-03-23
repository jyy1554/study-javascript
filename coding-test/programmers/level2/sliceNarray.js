// https://programmers.co.kr/learn/courses/30/lessons/87390

// n^2 배열 자르기

function solution(n, left, right) {
  // 123
  // 223
  // 333
  // 행렬의 (row, column)번째 요소값은 max(row, column) + 1이다.
  const answer = [];
  
  for (let i=left; i <= right; i++) {
      const row = Math.floor(i / n);
      const column = i % n;
      answer.push(Math.max(row, column) + 1);
  }

  return answer;
}
