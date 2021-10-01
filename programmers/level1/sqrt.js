// https://programmers.co.kr/learn/courses/30/lessons/12934

//정수 제곱근 판별

function solution(n) {
  const sqrtN = Math.sqrt(n);
  return sqrtN - Math.floor(sqrtN) == 0 ? Math.pow(sqrtN + 1, 2) : -1;
}